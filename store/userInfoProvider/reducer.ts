import { UserInfoActions } from './ActionTypes';
import shallowMerge from '../../utils/shallowMerge';
import { UserInfoState } from '../../types';

const setUserIdentificationData = (
  state: UserInfoState,
  {},
) => shallowMerge(state, {});

const setUserId = (state: UserInfoState, userId: number) =>
  shallowMerge(state, { userId });

const resetUserData = (state: UserInfoState) =>
  shallowMerge(state, {});

const setUserOtpValidationStatus = (state: UserInfoState, isValid: boolean) =>
  shallowMerge(state, { isValid: isValid });

const userInfoReducer = (state: UserInfoState, action: UserInfoActions) => {
  switch (action.type) {
    case 'SET_USER_IDENTIFICATION_DATA_ACTION':
      return setUserIdentificationData(state, action.payload);
    case 'SET_USER_OTP_ID_ACTION':
      return setUserId(state, action.payload.otpId);
    case 'RESET_USER_DATA_ACTION':
      return resetUserData(state);
    case 'SET_USER_OTP_VALIDATION_STATUS_ACTION':
      return setUserOtpValidationStatus(state, action.payload.isValid);
    default:
      return state;
  }
};

export default userInfoReducer;
