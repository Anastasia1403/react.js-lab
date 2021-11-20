import React from 'react';
import { ReactComponent as LockIcon } from './img/lock.svg';
import { ReactComponent as UserIcon } from './img/user.svg';
import { ReactComponent as EmailIcon } from './img/email.svg';
import { ReactComponent as CheckIcon } from './img/check.svg';

const inputSettings = {
  email: {
    img: <EmailIcon />,
    placeholder: 'Email',
  },
  firstName: {
    img: <UserIcon />,
    placeholder: 'First Name',
  },
  lastName: {
    img: <UserIcon />,
    placeholder: 'Last Name',
  },
  password: {
    img: <LockIcon />,
    placeholder: 'Password',
  },
  confirmPassword: {
    img: <CheckIcon />,
    placeholder: 'Confirm Password',
  },

};

export default inputSettings;
