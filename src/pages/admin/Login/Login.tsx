import { Button, Input, Checkbox, Form } from 'antd';
import { useContext } from 'react';
import { LoadingContext } from '../../../context/LoadingContext';

type TLogin = {};

const Login: React.FC = (props: TLogin) => {
  const loadingContext = useContext(LoadingContext);
  const handleLogin = () => {
    loadingContext?.show();
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div id='loginAdmin'>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        initialValues={{ remember: true }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please enter your email',
            },
            {
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
