import { Login } from '~/pages/admin';
import ForgotPassword from '~/pages/admin/ForgotPassword/ForgotPassword';

export const authRoutes = [
  {
    index: true,
    path: 'login',
    component: Login,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
];
