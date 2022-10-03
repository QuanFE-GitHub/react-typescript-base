import { Button, Modal } from 'antd';
import { useContext, useState } from 'react';
import { LoadingModalContext } from '~/context/LoadingModalContex';

const ModalComponent: React.FC = () => {
  const loadingModalContext = useContext(LoadingModalContext);
  const [modal1Open, setModal1Open] = useState(false);
  const handleShow = () => {
    setModal1Open(true);
    loadingModalContext?.show();
  };

  return (
    <>
      <Button onClick={handleShow}>Modal</Button>
      <Modal
        title='20px to Top'
        style={{ top: 20 }}
        visible={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <br />
      <br />
    </>
  );
};

export default ModalComponent;
