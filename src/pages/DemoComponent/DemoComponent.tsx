import { Button } from 'antd';
import React, { useState } from 'react';
import { useContext } from 'react';
import { LoadingModalContext } from '../../context/LoadingModalContext';

import ModalCustom from '../../components/commons/ModalCustom/ModalCustom';
import { TextAreaComponent } from './../../components/commons';
import DropdownComponent from './../../components/commons/Dropdown/Dropdown';

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
        <ModalCustom open={open} onOk={onOk} onCancel={onCancel} />
      </div>
      <div>
        <TextAreaComponent onChange={onChange} />
      </div>
      <div style={{ marginTop: '30px' }}>
        <DropdownComponent />
      </div>
    </div>
  );
};

export default DemoComponent;
