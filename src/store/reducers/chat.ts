import { ChatActions, ChatActionTypes, ChatState } from '../types';

const initialState: ChatState = {
  user: {
    id: 'bösaaa',
    userName: 'böb',
  },
  messages: [],
  userList: [],
  errorMessage: '',
};

export const chatReducer = (
  state = initialState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    case ChatActions.LOGIN_USER:
      return { ...state, user: action.payload };
    case ChatActions.LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ChatActions.CLEAR_ERROR:
      return { ...state, errorMessage: '' };
    case ChatActions.LOGOUT_USER:
      return { ...initialState };
    case ChatActions.UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    case ChatActions.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
