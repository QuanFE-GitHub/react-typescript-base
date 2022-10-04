import { Modal, ModalProps } from 'antd';

import { CloseOutlined } from '@ant-design/icons';

const ModalCustom = (props: ModalProps) => {
  const {
    title,
    open,
    centered,
    okType,
    okText,
    cancelText,
    closable,
    closeIcon,
    cancelButtonProps,
    okButtonProps,
    confirmLoading,
    destroyOnClose,
    focusTriggerAfterClose,
    children,
    width,
    mask,
    forceRender,
    bodyStyle,
    maskStyle,
    className,
    wrapClassName,
    keyboard,
    zIndex,
    footer,
    maskClosable,
    getContainer,

    afterClose,
    modalRender,
    onOk,
    onCancel,
  } = props;

  return (
    <>
      <Modal
        title={title}
        centered={centered}
        width={width}
        mask={mask}
        forceRender={forceRender}
        bodyStyle={bodyStyle}
        maskStyle={maskStyle}
        className={className}
        wrapClassName={wrapClassName}
        keyboard={keyboard}
        zIndex={zIndex}
        footer={footer}
        getContainer={getContainer}
        maskClosable={maskClosable}
        open={open}
        okType={okType}
        okText={okText}
        cancelText={cancelText}
        closable={closable}
        closeIcon={closeIcon}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        confirmLoading={confirmLoading}
        destroyOnClose={destroyOnClose}
        focusTriggerAfterClose={focusTriggerAfterClose}
        onOk={onOk}
        onCancel={onCancel}
        afterClose={afterClose}
        modalRender={modalRender}
      >
        {children}
      </Modal>
      <br />
      <br />
    </>
  );
};

const defaultProps = {
  title: 'Modal',
  open: false,
  centered: true,
  okType: 'primary',
  okText: 'Ok',
  cancelText: 'Cancel',
  closable: true,
  closeIcon: <CloseOutlined />,
  cancelButtonProps: '' || '' || null,
  okButtonProps: '' || '' || null,
  confirmLoading: false,
  destroyOnClose: false,
  focusTriggerAfterClose: true,
  children: <p>Modal Custom</p>,
  width: '400px',
  mask: true,
  forceRender: false,
  bodyStyle: null,
  maskStyle: null,
  className: '',
  wrapClassName: '',
  keyboard: true,
  zIndex: 1000,
  // footer: true,
  maskClosable: true,
  getContainer: document.body,

  afterClose: null,
  modalRender: null,
  onOk: null,
  onCancel: null,
};

ModalCustom.defaultProps = defaultProps;

export default ModalCustom;
