import { lazy } from 'react';

import Route from './Route';

// Pages
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Clients = lazy(() => import('../pages/Clients'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Payments = lazy(() => import('../pages/Payments'));

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
  {
    path: '/clientes',
    exact: true,
    component: Clients,
    type: 'private',
    typeRole: 'ADMIN',
  },
  {
    path: '/crear-usuario',
    exact: true,
    component: SignUp,
    type: 'private',
    typeRole: 'ADMIN',
  },
  {
    path: '/editar-cliente/:id',
    exact: false,
    component: SignUp,
    type: 'private',
    typeRole: 'ADMIN',
  },
  {
    path: '/pagos/:id',
    exact: false,
    component: Payments,
    type: 'private',
    typeRole: 'ADMIN',
  },
  {
    path: '/perfil',
    exact: false,
    component: Payments,
    type: 'private',
    typeRole: 'CLIENT',
  },
];

export { Route, routes };
