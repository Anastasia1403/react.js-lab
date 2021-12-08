import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import configureStore from 'redux-mock-store';
import * as formik from 'formik';
import { Provider } from 'react-redux';
import TableTime from './TableTime';

describe('Appointment List', () => {
  let mockHandleChange;
  beforeEach(() => {
    const useFormikContextMock = jest.spyOn(formik, 'useFormikContext');
    mockHandleChange = jest.fn();
    useFormikContextMock.mockReturnValue({
      values: {
        date: '2021-12-30T00:00:00.000Z',
        time: '',
        doctor: '',
      },
      handleChange: (event) => mockHandleChange(event.target.value),
    });
  });

  it('should all checkbox are disabled when no availible time', () => {
    const mockStore = configureStore();
    const initialState = {
      time: {
        time: [],
      },
    };
    const store = mockStore(initialState);
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});
    render(
      <Provider store={store}>
        <TableTime />
        ,
      </Provider>,
    );
    screen.getAllByTestId('timeItem').map((item) => expect(item).toHaveAttribute('disabled'));
  });
  it('should pick availible time', () => {
    const initialState = {
      time: {
        time: ['2021-12-30T12:00:00.000Z'],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});

    render(
      <Provider store={store}>
        <TableTime blocked={false} />
        ,
      </Provider>,
    );
    screen.debug();

    const time = screen.getByText(/3:00 pm/i);

    userEvent.click(time);

    expect(mockHandleChange).toBeCalledWith('2021-12-30T12:00:00.000Z');
  });
});
