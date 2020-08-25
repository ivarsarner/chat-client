import { userConstants } from '../../constants';

export const connectUserRequest = (userName: string) => ({
  type: userConstants.CONNECT_REQUEST,
  payload: userName,
});
