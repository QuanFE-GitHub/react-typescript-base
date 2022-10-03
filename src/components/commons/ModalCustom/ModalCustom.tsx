import { Modal } from 'antd';
import { useContext } from 'react';
import { LoadingModalContext } from '../../../context/LoadingModalContext';

type Props = {
  modal1Open?: boolean;
  setModal1Open: (a: boolean) => void;
  children?: JSX.Element;
};
const ModalCustom = (props: Required<Props>) => {
  const { modal1Open, setModal1Open, children } = props;
  const loadingModalContext = useContext(LoadingModalContext);

  return (
    <>
      <Modal
        title='Modal'
        centered
        open={modal1Open}
        onOk={() => {
          loadingModalContext?.show();
          setTimeout(() => {
            loadingModalContext?.hide();
            setModal1Open(false);
          }, 5000);
        }}
        onCancel={() => {
          setModal1Open(false);
        }}
      >
        {children}
      </Modal>
      <br />
      <br />
    </>
  );
};

export default ModalCustom;
