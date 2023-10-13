import { Outlet } from 'react-router-dom';

import ContentList from '@pages/content/ContentList';

const ContentRoutes = {
  path: 'content',
  element: <Outlet />,
  children: [
    {
      path: 'list',
      element: <ContentList />,
    },
  ],
};

export default ContentRoutes;
