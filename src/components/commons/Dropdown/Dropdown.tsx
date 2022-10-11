import { Button, Dropdown, Menu, Space } from 'antd';
import classNames from 'classnames/bind';

import downOutlineIcon from './../../../assets/icons/down_outline_icon.svg';

import styed from './dropdown.module.scss';

const cx = classNames.bind(styed);

interface DropDownProps {
  overlay?: React.ReactElement;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  children?: React.ReactNode;
  items?: [];
  width?: string;
}

const item = [
  {
    label: <a href=''>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href=''>2nd menu item</a>,
    key: '1',
  },
  // {
  //   type: 'divider',
  // },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const DropdownComponent = (props: DropDownProps) => {
  const { trigger, children, items, width } = props;

  const style = {
    borderRadius: '6px',
  };

  const menu = <Menu style={style} items={items} />;

  return (
    <>
      <Dropdown className={cx('dropDown')} overlay={menu} trigger={trigger}>
        <Button className={cx('button')} style={{ width: `${width}` }}>
          <Space className={cx('space')}>
            <span className={cx('children')}> {children}</span>
            <img src={downOutlineIcon} alt='icon' />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
};

const DropDownDefault = {
  items: item,
  // autoFocus: false,
  // arrow: false,
  trigger: 'click',
  width: 'auto',
  // open: true,
  // disabled: false,
  children: <>Click me</>,
};

DropdownComponent.defaultProps = DropDownDefault;

export default DropdownComponent;
