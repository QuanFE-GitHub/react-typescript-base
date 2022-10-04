import { Button } from 'antd';
import { useState } from 'react';
import { useContext } from 'react';
import { LoadingModalContext } from '../../../context/LoadingModalContext';

import ModalCustom from '../../commons/ModalCustom/ModalCustom';

const ModalComponent: React.FC = () => {
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

  return (
    <div style={{ height: '100%' }}>
      <Button onClick={handleShow}>Modal</Button>
      <ModalCustom open={open} onOk={onOk} onCancel={onCancel} />
    </div>
  );
};

export default ModalComponent;
