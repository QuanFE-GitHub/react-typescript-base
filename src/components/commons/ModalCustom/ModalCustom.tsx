import classNames from 'classnames/bind';
import { Modal, ModalProps } from 'antd';

import closeIcon from './../../../assets/icons/close_icon.svg';

import styled from './modalCustom.module.scss';
import './modalCustom.scss';

const cx = classNames.bind(styled);

const ModalCustom = (props: ModalProps) => {
  const { title, centered, closable, closeIcon, children, maskClosable, footer } = props;

  return (
    <div id='modalCustom'>
      <Modal
        title={title}
        centered={centered}
        maskClosable={maskClosable}
        closable={closable}
        closeIcon={closeIcon}
        className='modal'
        footer={footer}
        {...props}
      >
        <div className={cx('children')}>{children}</div>
      </Modal>
      <br />
      <br />
    </div>
  );
};

const defaultProps = {
  title: 'Modal Component',
  centered: true,
  closeIcon: <img src={closeIcon} alt='closeIcon' />,
  children: <p>Modal Custom</p>,
  maskClosable: false,
  footer: null,
};

ModalCustom.defaultProps = defaultProps;

export default ModalCustom;
