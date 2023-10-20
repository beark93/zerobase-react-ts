import { Outlet } from 'react-router-dom';

import GameCard from '@pages/content/GameCard';

const GameRoutes = {
  path: 'game',
  element: <Outlet />,
  children: [
    {
      path: 'card',
      element: <GameCard />,
    },
  ],
};

export default GameRoutes;
