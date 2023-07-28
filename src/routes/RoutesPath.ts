export enum PATH {
  Main = 'main',
  Home = 'home',
  Orders = 'orders',
  Products = 'products',
}

export const RoutePath: Record<PATH, string> = {
  [PATH.Main]: '/',
  [PATH.Home]: '/home',
  [PATH.Orders]: '/orders',
  [PATH.Products]: '/products',
};
