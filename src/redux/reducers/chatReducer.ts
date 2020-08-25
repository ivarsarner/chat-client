import { ChatMessage, Action } from '../types';

const initialState = {
  userName: '',
  message: '',
  timeSent: '',
};

const chatReducer = (state: ChatMessage = initialState, action: Action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};

export default chatReducer;
