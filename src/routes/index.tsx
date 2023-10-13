import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import ContentRoutes from './ContentRoutes';

export default function PageRoutes() {
  return useRoutes([MainRoutes, ContentRoutes]);
}
