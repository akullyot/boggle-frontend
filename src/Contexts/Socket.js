//Purpose of this component: holds the actual socket component that will be passed around to all the relevant components

import { io } from 'socket.io-client';

export const socket = io(process.env.REACT_APP_NODE_SERVER_URL, {
  autoConnect: false,
  extraHeaders: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
