import classNames from 'classnames/bind';
import { memo } from 'react';

import styled from './Loading.module.scss';

const cx = classNames.bind(styled);

interface ILoadingProps {
  message: string;
}

const Loading = (props: ILoadingProps) => {
  return <div className={cx('loading')}>{props.message}</div>;
};

Loading.defaultProps = {
  message: 'Loading...',
};

export default memo(Loading);
