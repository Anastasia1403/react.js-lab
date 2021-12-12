const customStyles = {
  container: (provided: any) => ({
    ...provided,
    marginTop: 16,
  }),
  control: (provided: any) => ({
    ...provided,
    height: 56,

    ':hover': {
      border: '1px solid #7297FF',
    },
    ':active': {
      border: '1px solid #7297FF',
    },
    ':focus': {
      border: '1px solid #7297FF',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: (provided: any) => ({
    ...provided,
    padding: 4,
    fontSize: 17,
    borderRadius: 8,
  }),
  menuList: (provided: any) => ({
    ...provided,
    overflow: 'auto',
    height: 128,
    '::-webkit-scrollbar': {
      width: 8,
      backgroundColor: 'rgba(220, 224, 236, 0.32)',
      borderRadius: 4,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(161, 171, 201, 0.32)',
      borderRadius: 4,
    },
  }),
  menuPortal: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided: any) => ({
    ...provided,
    height: 40,
    borderRadius: 4,
    fontSize: 15,
    paddingLeft: 20,
    color: '#202225',
    margin: 0,
    ':hover': {
      backgroundColor: '#F9FAFF',
    },
    ':active': {
      backgroundColor: '#F9FAFF',
    },
    ':focus': {
      backgroundColor: '#F9FAFF',
    },
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '2px 2px 2px 24px',
  }),
};

export default customStyles;
