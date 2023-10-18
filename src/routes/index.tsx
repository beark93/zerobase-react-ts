import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import UberRoutes from './UberRoutes';
import WebSocketRoutes from './WebSocketRoutes';

export default function PageRoutes() {
  return useRoutes([MainRoutes, UberRoutes, WebSocketRoutes]);
}
