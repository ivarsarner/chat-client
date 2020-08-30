import { ChatActions, ChatActionTypes, ChatState } from '../types';

const initialState: ChatState = {
  isConnected: false,
  socket: null,
  user: {
    id: '',
    userName: '',
  },
  messages: [],
  connectedUsers: [],
  error: {
    isError: false,
    errorCode: '',
    errorMessage: '',
  },
};

export const chatReducer = (
  state = initialState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    case ChatActions.STORE_SOCKET:
      return {
        ...state,
        isConnected: true,
        socket: action.payload,
      };
    case ChatActions.NEW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ChatActions.CLEAR_ERROR:
      return {
        ...state,
        error: { isError: false, errorCode: '', errorMessage: '' },
      };
    case ChatActions.DISCONNECT:
      return { ...initialState };
    case ChatActions.STORE_CONNECTED_USERS:
      return {
        ...state,
        connectedUsers: action.payload,
      };
    case ChatActions.STORE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
