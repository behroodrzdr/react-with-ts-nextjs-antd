export interface UserInfoState {
  userId: string | number,
  username: string,
  mobile: number | string,
  avatar: string,
  isValid?: boolean,
  otpId: string | number,
}
