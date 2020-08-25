import { ChatState, Action } from '../../types';

const initialState = {
  connectedUsers: 0,
  messages: []
};

const chatReducer = (state: ChatState = initialState, action: Action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};

export default chatReducer;
