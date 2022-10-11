import { useState } from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';
import classNames from 'classnames/bind';

import downOutlineIcon from './../../../assets/icons/down_outline_icon.svg';

import styed from './dropdown.module.scss';

const cx = classNames.bind(styed);
interface DropDownProps {
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  items: { key: string; label: string }[];
  width?: string;
  disabled: boolean;

  onFetchApi: (data: string) => void;
}

const DropdownComponent = (props: DropDownProps) => {
  const { trigger, items, width, disabled, onFetchApi } = props;

  const [keyDropDown, setKeyDropDown] = useState<string>('0');

  const style = {
    borderRadius: '6px',
  };

  const onClickDropDown = (key: any) => {
    setKeyDropDown(key?.key);
    onFetchApi(items && items[key?.key]?.label);
  };

  const menu = <Menu style={style} onClick={onClickDropDown} items={items} />;

  return (
    <>
      <Dropdown
        className={cx('dropDown')}
        overlay={menu}
        trigger={trigger}
        disabled={disabled}
      >
        <Button className={cx('button')} style={{ width: `${width}` }}>
          <Space className={cx('space')}>
            <span className={cx('children')}>{items && items[+keyDropDown]?.label}</span>
            <img src={downOutlineIcon} alt='icon' />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
};

const DropDownDefault = {
  trigger: 'click',
  width: 'auto',
  disabled: false,
};

DropdownComponent.defaultProps = DropDownDefault;

export default DropdownComponent;
