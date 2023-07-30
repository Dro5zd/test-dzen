export enum PATH {
    Home = 'home',
    Orders = 'orders',
    Products = 'products',
}

export const RoutePath: Record<PATH, string> = {
    [PATH.Home]: '/',
    [PATH.Orders]: '/orders',
    [PATH.Products]: '/products',
};
