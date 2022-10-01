import { message, Modal } from 'antd';
import { ReactNode } from 'react';
const { confirm } = Modal;

export const add = (numberOne: number, numberTwo: number) => {
  return numberOne + numberTwo;
};

// Notification Success
export const messageSuccess = (content: string) => {
  message.success(content);
};

// Notification Warning
export const messageWarning = (content: string) => {
  message.warning(content);
};

// Notification Info
export const messageInfo = (content: string) => {
  message.info(content);
};

// Show Delete Confirm
/** Example
 * showDeleteConfirm(
    'Title',
    <ExclamationCircleOutlined />,
    'Content',
    () => {
      console.log('ok');
    },
    () => {
      console.log('cancel');
    }
  )
 */
export const showDeleteConfirm = (
  title: string,
  icon: ReactNode,
  content: string,
  onOk: () => void,
  onCancel: () => void
) => {
  confirm({
    title: title,
    icon: icon,
    content: content,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      onOk();
    },
    onCancel() {
      onCancel();
    },
  });
};
