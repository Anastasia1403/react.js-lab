const USER_VIEW = '/user-view';

export const AUTH_PATH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  RESTORE_PASSWORD: '/restore-password',

};
export const USER_PATH = {
  MAIN: USER_VIEW,
  PATIENTS: `${USER_VIEW}/patients`,
  RESOLUTIONS: `${USER_VIEW}/resolutions`,
  APPOINTMENTS: `${USER_VIEW}/appointments`,
  CREATE_APPOINTMENT: `${USER_VIEW}/create-new-appointment`,
  PROFILE: `${USER_VIEW}/profile`,
};
