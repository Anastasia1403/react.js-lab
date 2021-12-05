import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SignUpForm from './SignUpForm';
import * as registration from '../../redux/registration/thunk';

describe('SignUpForm', () => {
  const initialState = { registration: { error: false } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  let firstNameInput;
  let lastNameInput;
  let emailInput;
  let passwordInput;
  let button;

  beforeEach(() => {
    const { getByPlaceholderText, getAllByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <SignUpForm />
        ,
      </Provider>,
    );
    firstNameInput = getByPlaceholderText(/first name/i);
    lastNameInput = getByPlaceholderText(/last name/i);
    emailInput = getByPlaceholderText(/email/i);
    passwordInput = getAllByPlaceholderText(/password/i);
    button = getByTestId('submit');
  });

  it('all inputs and button are render in the document', () => {
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it('form should submit with correct values', async () => {
    const registrationMock = jest.fn();
    jest.spyOn(registration, 'default').mockImplementation((values) => registrationMock(values));

    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Smith');
    userEvent.type(emailInput, 'aaa@mail.ru');
    passwordInput.map((inp) => userEvent.type(inp, '123456'));
    userEvent.click(button);

    await waitFor(() => {
      expect(registrationMock)
        .toHaveBeenCalledWith({
          firstName: 'John',
          lastName: 'Smith',
          userName: 'aaa@mail.ru',
          password: '123456',
        });
    });
  });
});
