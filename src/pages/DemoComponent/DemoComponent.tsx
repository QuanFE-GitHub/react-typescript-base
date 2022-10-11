import { Button } from 'antd';
import React, { useState } from 'react';
import { useContext } from 'react';
import { LoadingModalContext } from '../../context/LoadingModalContext';

import ModalCustom from '../../components/commons/ModalCustom/ModalCustom';
import { TextAreaComponent } from './../../components/commons';
import DropdownComponent from './../../components/commons/Dropdown/Dropdown';
import FriendList from './../../components/specifics/FriendList/FriendList';

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
  return (
    <div style={{ height: '100%' }}>
      <div>
        <Button onClick={handleShow}>Modal</Button>
        <ModalCustom open={open} width={'80%'} onOk={onOk} onCancel={onCancel}>
          <FriendList />
        </ModalCustom>
      </div>
      <div>
        <TextAreaComponent onChange={onChange} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <DropdownComponent>Dropdown</DropdownComponent>
      </div>
      <div style={{ marginTop: '30px' }}>
        <FriendList />
      </div>
    </div>
  );
};

export default DemoComponent;
