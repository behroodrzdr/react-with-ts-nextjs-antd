interface SetUserIdentificationDataAction {
    type: 'SET_USER_IDENTIFICATION_DATA_ACTION';
    payload: {
      userId: string | number,
      username: string,
      mobile: number | string,
      avatar: string,
    };
  }
  
  interface SetUserOtpIdAction {
    type: 'SET_USER_OTP_ID_ACTION';
    payload: {
      userId: number,
      otpId: number,
    };
  }
  
  interface ResetUserDataAction {
    type: 'RESET_USER_DATA_ACTION';
  }
  
  interface SetUserOtpValidationStatusAction {
    type: 'SET_USER_OTP_VALIDATION_STATUS_ACTION';
    payload: {
      isValid: boolean;
    };
  }
  
  export type UserInfoActions =
    | SetUserIdentificationDataAction
    | SetUserOtpIdAction
    | ResetUserDataAction
    | SetUserOtpValidationStatusAction;
  