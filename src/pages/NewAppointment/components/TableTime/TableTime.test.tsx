import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import configureStore from 'redux-mock-store';
import * as formik from 'formik';
import { Provider } from 'react-redux';
import TableTime from './TableTime';

describe('Appointment List', () => {
  let mockHandleChange: (e: string) => void;
  beforeEach(() => {
    const useFormikContextMock = jest.spyOn(formik, 'useFormikContext');
    mockHandleChange = jest.fn((value) => (value));
    useFormikContextMock.mockReturnValue({
      values: {
        date: '2021-12-30T00:00:00.000Z',
        time: '',
        doctor: '',
      },
      handleChange: (event: React.ChangeEvent<any>): void => mockHandleChange(event.target.value),
      touched: true,
      isSubmitting: false,
      isValidating: false,
      errors: false,
      submitCount: 0,
      setStatus: jest.fn(),
      setErrors: jest.fn(),
      setSubmitting: jest.fn(),
      setTouched: jest.fn(),
      setValues: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldError: jest.fn(),
      setFieldTouched: jest.fn(),
      validateForm: jest.fn(),
      validateField: jest.fn(),
      resetForm: jest.fn(),
      submitForm: jest.fn(),
      setFormikState: jest.fn(),
      handleSubmit: jest.fn(),
      handleReset: jest.fn(),
      handleBlur: jest.fn(),
      getFieldProps: jest.fn(),
      getFieldMeta: jest.fn(),
      getFieldHelpers: jest.fn(),
      dirty: false,
      isValid: true,
      initialValues: {},
      initialErrors: {},
      initialTouched: {},
      registerField: jest.fn(),
      unregisterField: jest.fn(),
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
    jest.spyOn(store, 'dispatch').mockImplementation((value: any): any => value);
    render(
      <Provider store={store}>
        <TableTime blocked={false} />
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
    jest.spyOn(store, 'dispatch').mockImplementation((value: any): any => value);

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
