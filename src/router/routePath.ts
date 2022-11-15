import Management from '../pages/Management';
import Dashboard from '../pages/Dashboard';

export const routePath = {
  dashboard: '/',
  management: '/management',
};

export const routes = [
  { name: '대시보드', path: routePath.dashboard, element: Dashboard },
  { name: '광고관리', path: routePath.management, element: Management },
];
