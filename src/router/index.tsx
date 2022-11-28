import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routePath';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      {routes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}

export default Router;
