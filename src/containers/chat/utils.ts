export const socketUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SOCKET_URL
    : 'http://localhost:5000';
