import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import selectEvent from 'react-select-event';
import NewAppointmentForm from './NewAppointmentForm';

describe('NewAppointmentForm', () => {
  const initialState = {
    appointment: { status: '', error: '' },
    specializations: {
      specializations: [{
        id: '11',
        specialization_name: 'surgeon',
      },
      {
        id: '22',
        specialization_name: 'therapist',
      },
      {
        id: '33',
        specialization_name: 'ophthalmologist',
      }],
    },
    doctors: {
      doctors: [
        {
          first_name: 'Valentin',
          last_name: 'Anashkevich',
          id: '1',
        },
        {
          first_name: 'John',
          last_name: 'Doe',
          id: '2',
        },
      ],
    },
    time: { time: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  jest.spyOn(store, 'dispatch').mockImplementation(() => {});

  let button;
  let textareas;
  let doctorSelect;
  let occupationSelect;

  beforeEach(() => {
    const {
      getByText, getAllByRole,
    } = render(
      <Provider store={store}>
        <NewAppointmentForm />
        ,
      </Provider>,
    );
    button = getByText(/submit/i);
    textareas = getAllByRole('textbox');
    doctorSelect = getByText('Choose doctor');
    occupationSelect = getByText('Choose doctor`s occupation');
  });

  it('submit button and doctor select should be disabled when fields are not filled', () => {
    expect(doctorSelect.nextElementSibling.firstChild).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it('doctor select should be availible when occupation is chosen', async () => {
    await selectEvent.select(occupationSelect, ['therapist']);

    expect(doctorSelect.nextElementSibling.firstChild).not.toBeDisabled();
  });

  it('all inputs should get correct values', async () => {
    await selectEvent.select(occupationSelect, ['therapist']);
    await selectEvent.select(doctorSelect, ['John Doe']);
    userEvent.type(textareas[0], 'test reason');
    userEvent.type(textareas[1], 'test note');

    expect(screen.getByText('therapist')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(textareas[0]).toHaveValue('test reason');
    expect(textareas[1]).toHaveValue('test note');
  });
});
