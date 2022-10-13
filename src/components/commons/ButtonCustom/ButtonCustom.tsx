import { Button } from 'antd';
import classNames from 'classnames/bind';

import styled from './buttonCustom.module.scss';

const cx = classNames.bind(styled);

interface ButtonProps {
  type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
  icon?: React.ReactNode;
  shape?: 'default' | 'circle' | 'round';
  disabled?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      };

  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  width?: string;
  height?: string;

  onClick?: React.MouseEventHandler<HTMLElement>;
}

const ButtonCustom = (props: ButtonProps) => {
  const {
    type,
    shape,
    loading,
    ghost,
    danger,
    block,
    icon,
    disabled,
    // href,
    // target,
    htmlType,
    children,
    width,
    height,
    onClick,
  } = props;

  return (
    <>
      <Button
        style={{ width: `${width}`, height: `${height}` }}
        type={type}
        shape={shape}
        loading={loading}
        ghost={ghost}
        danger={danger}
        block={block}
        disabled={disabled}
        // href={href}
        // target={target}
        htmlType={htmlType}
        className={cx('button')}
        icon={icon}
        onClick={onClick}
      >
        <span className={cx(type === 'primary' ? 'primary' : '')}>{children}</span>
      </Button>
    </>
  );
};

const ButtonCustomDefault = {
  type: 'default',
  shape: 'default',
  loading: false,
  ghost: false,
  danger: false,
  block: false,
  icon: null,
  disabled: false,
  //   href: '',
  //   target: '',
  htmlType: 'button',
  children: <>Button</>,
  width: 'auto',
  height: '43px',
  onClick: null,
};

ButtonCustom.defaultProps = ButtonCustomDefault;

export default ButtonCustom;
