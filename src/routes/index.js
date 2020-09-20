import { lazy } from 'react';

import Route from './Route';

// Pages
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));

const routes = [
  {
    path: '/',
    component: Home,
    type: 'public',
  },
  {
    path: '/iniciar-sesion',
    exact: true,
    component: Login,
    type: 'restricted',
  },
];

export { Route, routes };
