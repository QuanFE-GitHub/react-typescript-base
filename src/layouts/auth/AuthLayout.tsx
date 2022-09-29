import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingContext } from '~/context/LoadingContext';
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
