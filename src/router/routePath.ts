import Dashboard from '../pages/Dashboard';
import AdManagement from '../pages/AdManagement';
import { pathnames } from '../utils/conts';

export const routes = [
  { name: '대시보드', path: pathnames.dashboard, element: Dashboard },
  { name: '광고관리', path: pathnames.management, element: AdManagement },
];
