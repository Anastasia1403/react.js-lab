import React from 'react';
import Select from 'react-select';
import customStyles from './styled';

const CustomSelect = function ({
  options, value, onChange, ...restProps
}) {
  const defaultValue = (optionsArr, val) => (optionsArr ? options.find((option) => option.value === val) : '');
  return (
    <Select
      {...restProps}
      value={defaultValue(options, value)}
  // eslint-disable-next-line
      onChange={(value) => {
        onChange(value);
      }}
      styles={customStyles}
      isSearchable
      options={options}
    />
  );
};

export default CustomSelect;
