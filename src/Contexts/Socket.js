//Purpose of this component: holds the actual socket component that will be passed around to all the relevant components

import { io } from 'socket.io-client';
const server = "https://boggle-backend-413ebb7ed653.herokuapp.com"

export const socket = io(server, {
  autoConnect: false,
  extraHeaders: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
