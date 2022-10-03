import classNames from 'classnames/bind';
import { memo } from 'react';

import styled from './LoadingModal.module.scss';

const cx = classNames.bind(styled);

interface ILoadingProps {
  message: string;
}

const LoadingModal = (props: ILoadingProps) => {
  return <div className={cx('loadingModal')}>{props.message}</div>;
};

LoadingModal.defaultProps = {
  message: 'Loading...',
};

export default memo(LoadingModal);
