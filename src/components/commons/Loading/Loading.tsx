import { memo } from 'react';

interface ILoadingProps {
  message: string;
}

const Loading = (props: ILoadingProps) => {
  return <div>{props.message}</div>;
};

Loading.defaultProps = {
  message: 'Loading...',
};

export default memo(Loading);
