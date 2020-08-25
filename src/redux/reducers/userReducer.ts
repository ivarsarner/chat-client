import { User, Action } from '../../types';

const initialState = {
  id: '',
  userName: '',
  dateRegistered: '',
};

const userReducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
