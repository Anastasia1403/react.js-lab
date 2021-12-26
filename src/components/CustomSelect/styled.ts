import { theme } from 'styles/theme';

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    marginTop: 16,
  }),
  control: (provided: any) => ({
    ...provided,
    height: 56,

    ':hover': {
      border: `1px solid ${theme.colors.blue}`,
    },
    ':active': {
      border: `1px solid ${theme.colors.blue}`,
    },
    ':focus': {
      border: `1px solid ${theme.colors.blue}`,
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
    color: theme.colors.black,
    margin: 0,
    ':hover': {
      backgroundColor: theme.colors.lightGrey,
    },
    ':active': {
      backgroundColor: theme.colors.lightGrey,
    },
    ':focus': {
      backgroundColor: theme.colors.lightGrey,
    },
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '2px 2px 2px 24px',
  }),
};

export default customStyles;
