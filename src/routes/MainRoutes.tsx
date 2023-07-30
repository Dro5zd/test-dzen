import {
    Navigate,
    Route,
    RouteProps,
    Routes,
} from 'react-router-dom';
import {FC} from 'react';
import {PATH, RoutePath} from './RoutesPath';
import {OrdersPage} from "../pages/OrdersPage/OrdersPage";
import {ProductsPage} from "../pages/ProductsPage/ProductsPage";
import {Layout} from "../components/Layout/Layout";


export const routeConfig: Record<PATH, RouteProps> = {

    [PATH.Home]: {
        path: RoutePath.home,
        element: <Navigate to={PATH.Orders} replace/>,
    },

    [PATH.Orders]: {
        path: RoutePath.orders,
        element: <OrdersPage/>,
    },

    [PATH.Products]: {
        path: RoutePath.products,
        element: <ProductsPage/>,
    },
};

export const MainRoutes: FC = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
            {Object.values(routeConfig).map(({path, element}) => (
                <Route
                    path={path}
                    key={path}
                    element={element}
                />
            ))}
        </Route>
    </Routes>
);
