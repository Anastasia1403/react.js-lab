import React from 'react';
import { render } from '@testing-library/react';
import { IAppointmentForPatient } from 'models/interfaces';
import AppointmentCard from './AppointmentCard';

describe('Appointment Card', () => {
  it('should render card', () => {
    const appointment: IAppointmentForPatient = {
      id: '31f9a270-4dd1-11ec-8ff7-0793810ddc12',
      visit_date: '2021-11-26T11:00:00.000Z',
      reason: 'Headache, pant',
      note: '',
      patient_id: 'b8962260-4b95-11ec-9a6e-b3b5e1a51f7b',
      doctor_id: '1f35c5f0-4382-11ec-aea7-5bf2c99871db',
      status: 'waiting',
      doctor: {
        first_name: 'Oleg',
        last_name: 'Dublyanin',
        photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
        id: '1f35c5f0-4382-11ec-aea7-5bf2c99871db',
        specialization_name: 'surgeon',
      },
    };

    const { getByText } = render(<AppointmentCard {...appointment} />);

    expect(getByText(/Dublyanin/i)).toBeInTheDocument();
    expect(getByText(/Oleg/i)).toBeInTheDocument();
    expect(getByText(/surgeon/i)).toBeInTheDocument();
    expect(getByText(/Headache, pant/i)).toBeInTheDocument();
  });
});
