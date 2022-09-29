import { Button } from 'antd';
import { useContext } from 'react';
import { LoadingContext } from '~/context/LoadingContext';

type TLogin = {};

const Login = (props: TLogin) => {
  const loadingContext = useContext(LoadingContext);
  const handleLogin = () => {
    loadingContext?.show();
  };

  return (
    <div id='loginAdmin'>
      Login Component
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
