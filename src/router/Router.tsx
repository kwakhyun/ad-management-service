import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Management/Layout';
import { routes } from './routePath';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
}
export default Router;
