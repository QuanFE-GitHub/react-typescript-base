import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

const cx = classNames.bind(styles);

const AuthLayout = () => {
  return (
    <div id='authLayout' className={cx('wrapper')}>
      <div className={cx('header')}>Header</div>
      <Outlet />
      <div className={cx('footer')}>Footer</div>
    </div>
  );
};

export default AuthLayout;
