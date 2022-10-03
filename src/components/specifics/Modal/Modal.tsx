import { Button } from 'antd';
import { useState } from 'react';

import ModalCustom from '../../commons/ModalCustom/ModalCustom';

const ModalComponent: React.FC = () => {
  const [modal1Open, setModal1Open] = useState<boolean>(false);

  const handleShow = () => {
    setModal1Open(true);
  };

  return (
    <div style={{ height: '100%' }}>
      <Button onClick={handleShow}>Modal</Button>
      <ModalCustom modal1Open={modal1Open} setModal1Open={setModal1Open}>
        <div>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </div>
      </ModalCustom>
    </div>
  );
};

export default ModalComponent;
