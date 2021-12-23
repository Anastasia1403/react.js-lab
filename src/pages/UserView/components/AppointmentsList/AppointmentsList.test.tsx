import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AppointmentsList from './AppointmentsList';

const appointmentsList = [
  {
    id: '131bde10-5072-11ec-b7df-f1784d8070ff',
    visit_date: '2021-11-30T06:00:00.000Z',
    reason: 'reason',
    note: '',
    patient_id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },

  {
    id: '131bde10-5072-11ec-b7df-f1784d8070ff',
    visit_date: '2021-11-30T06:00:00.000Z',
    reason: 'reason',
    note: '',
    patient_id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },

  {
    id: '131bde10-5072-11ec-b7df-f1784d8070ff',
    visit_date: '2021-11-30T06:00:00.000Z',
    reason: 'reason',
    note: '',
    patient_id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },
];

describe('Appointment List', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should render nothing when there is no appointments', () => {
    const initialState = {
      appointments: {
        appointments: [],
        creationStatus: '',
      },
      auth: {
        profile: {},
      },
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AppointmentsList />
      </Provider>,
    );

    expect(screen.queryByTestId('card')).not.toBeInTheDocument();
  });
  it('should render cards', () => {
    const initialState = {
      appointments: {
        appointments: appointmentsList,
        creationStatus: '',
      },
      auth: {
        profile: {},
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AppointmentsList />
      </Provider>,
    );

    expect(screen.queryAllByTestId('card')).toHaveLength(3);
  });
});
