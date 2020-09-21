import Route from './Route';

// Pages
const Home = import('../pages/Home');
const Login = import('../pages/Login');
const Clients = import('../pages/Clients');
const SignUp = import('../pages/SignUp');
const Payments = import('../pages/Payments');

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
