import { Outlet } from 'react-router-dom';

import WebSocketTest from '@pages/content/WebSocketTest';

const WebSocketRoutes = {
  path: 'websocket',
  element: <Outlet />,
  children: [
    {
      path: 'test',
      element: <WebSocketTest />,
    },
  ],
};

export default WebSocketRoutes;
