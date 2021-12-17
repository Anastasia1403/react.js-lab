import React from 'react';
import Select, { SingleValue } from 'react-select';
import customStyles from './styled';

type OptionsType = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: OptionsType[],
  value: string,
  onChange: (newValue: SingleValue<string | OptionsType>) => void,
  onBlur: (value: React.FocusEvent<HTMLInputElement>) => void,
  isDisabled?: boolean,
  id: string,
  name: string,
  placeholder: string,
  touched: boolean | undefined
};

const CustomSelect: React.FC<CustomSelectProps> = function ({
  options, value, onChange, ...restProps
}) {
  const defaultValue = (optionsArr:OptionsType[], val: string) => (optionsArr ? options.find((option) => option.value === val) : '');
  return (
    <Select
      {...restProps}
      value={defaultValue(options, value)}
  // eslint-disable-next-line
      onChange={onChange}
      styles={customStyles}
      isSearchable
      options={options}
    />
  );
};

export default CustomSelect;
