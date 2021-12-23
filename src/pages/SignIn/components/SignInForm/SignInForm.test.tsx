import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as login from 'redux/auth/login.thunk';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
  const initialState = { auth: { isLoggedIn: false, error: false } };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let passwordInput: any;
  let emailInput: any;
  let button: any;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>,
    );
    passwordInput = screen.getByPlaceholderText(/password/i);
    emailInput = screen.getByPlaceholderText(/email/i);
    button = screen.getByTestId('submit');
  });
  it('inputs and button are in the document', () => {
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('form should submit with correct values', async () => {
    const loginMock = jest.fn();
    jest.spyOn(login, 'default').mockImplementation((values) => loginMock(values));

    userEvent.type(passwordInput, '123456');
    userEvent.type(emailInput, 'aaa@mail.ru');

    userEvent.click(button);
    await waitFor(() => {
      expect(loginMock)
        .toHaveBeenCalledWith({
          userName: 'aaa@mail.ru',
          password: '123456',
        });
    });
  });
});
