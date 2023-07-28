import {
  Navigate,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import { FC } from 'react';
import { RoutePath } from './RoutesPath';
import {OrdersPage} from "../pages/OrdersPage/OrdersPage";
import {HomePage} from "../pages/HomePage/HomePage";
import {ProductsPage} from "../pages/ProductsPage/ProductsPage";


export enum PATH {
  Main = 'main',
  Home = 'home',
  Orders = 'orders',
  Products = 'products',
}

export const routeConfig: Record<PATH, RouteProps> = {

  [PATH.Main]: {
    path: RoutePath.main,
    element: <HomePage />,
  },

  [PATH.Home]: {
    path: RoutePath.home,
    element: <Navigate to={PATH.Home} replace />,
  },

  [PATH.Orders]: {
    path: RoutePath.orders,
    element: <OrdersPage />,
  },

  [PATH.Products]: {
    path: RoutePath.products,
    element: <ProductsPage />,
  },
};

export const MainRoutes: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        path={path}
        key={path}
        element={element}
      />
    ))}
  </Routes>
);
