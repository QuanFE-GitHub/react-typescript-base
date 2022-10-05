import { Button, Dropdown, DropdownProps, Menu, Space } from 'antd';

import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        label: <a href='https://www.antgroup.com'>1st menu item</a>,
        key: '0',
      },
      {
        label: <a href='https://www.aliyun.com'>2nd menu item</a>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

const DropdownComponent = (props: DropdownProps) => {
  const { overlay, trigger, children } = props;

  return (
    <>
      <Dropdown overlay={overlay} trigger={trigger}>
        <Button>{children}</Button>
      </Dropdown>
    </>
  );
};

const DropDownDefault = {
  autoFocus: false,
  arrow: false,
  trigger: 'click',
  overlay: menu,
  open: true,
  disabled: false,
  destroyPopupOnHide: false,
  // align?: Align;
  // prefixCls?: string;
  className: '',
  // transitionName?: string;
  placement: 'bottomLeft',
  overlayClassName: '',
  overlayStyle: '',
  // forceRender?: boolean,
  // mouseEnterDelay?: number,
  // mouseLeaveDelay?: number,
  // openClassName?: string,
  children: (
    <Space>
      Click me
      <DownOutlined />
    </Space>
  ),

  getPopupContainer: null,
  onOpenChange: null,
};

DropdownComponent.defaultProps = DropDownDefault;

export default DropdownComponent;
