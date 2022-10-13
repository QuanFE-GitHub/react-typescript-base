import { Button } from 'antd';
import React, { useState } from 'react';
import { useContext } from 'react';
import { LoadingModalContext } from '../../context/LoadingModalContext';
import { SearchOutlined } from '@ant-design/icons';

import ModalCustom from '../../components/commons/ModalCustom/ModalCustom';
import { TextAreaComponent } from './../../components/commons';
import DropdownComponent from './../../components/commons/Dropdown/Dropdown';
import FriendList from './../../components/specifics/FriendList/FriendList';
import ButtonCustom from './../../components/commons/ButtonCustom/ButtonCustom';

const DemoComponent: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const loadingModalContext = useContext(LoadingModalContext);

  const handleShow = () => {
    setOpen(true);
  };

  const onOk = () => {
    loadingModalContext?.show();
    setTimeout(() => {
      loadingModalContext?.hide();
      setOpen(false);
    }, 5000);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const onFetchApi = (data: string) => {
    console.log('Call api:', data);
  };

  const items = [
    {
      label: 'Tất cả',
      key: '0',
    },
    {
      label: 'DropDown 1',
      key: '1',
    },
    {
      label: 'DropDown 2',
      key: '2',
    },
  ];

  return (
    <div style={{ height: '100%' }}>
      <div>
        <ButtonCustom type='primary' onClick={handleShow} icon={<SearchOutlined />} />
        <ModalCustom open={open} width={'644px'} onOk={onOk} onCancel={onCancel}>
          <FriendList />
        </ModalCustom>
      </div>
      <div>
        <TextAreaComponent onChange={onChange} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <DropdownComponent items={items} width={'150px'} onFetchApi={onFetchApi} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <FriendList />
      </div>
    </div>
  );
};

export default DemoComponent;
