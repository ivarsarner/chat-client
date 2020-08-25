import { UserState, Action } from '../../types';
import { userConstants } from '../../constants';

const initialState = {
  isConnected: false,
  id: '',
  userName: '',
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case userConstants.CONNECT_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
