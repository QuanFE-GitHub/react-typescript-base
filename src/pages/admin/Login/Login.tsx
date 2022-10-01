import { Button, Input, Form, Checkbox } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { LoadingContext } from '../../../context/LoadingContext';
import { messageSuccess, showDeleteConfirm } from '../../../utils/helps';
import './login.css';

type TLogin = {};

const Login: React.FC = (props: TLogin) => {
  const loadingContext = useContext(LoadingContext);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    loadingContext?.show();
    messageSuccess('Successfully!!!');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div id='loginAdmin'>
      <Form
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        initialValues={{ remember: true }}
        wrapperCol={{ span: 6 }}
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
          <Input placeholder='enter your email' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              type: 'regexp',
              required: true,
              message: 'Please enter your password',
            },
            {
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='enter your password' />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <span className='login-form-forgot'>Forgot password</span>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 6 }}>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          <br />
          <Button type='primary' htmlType='submit' className='login-form-button'>
            register now
          </Button>
        </Form.Item>
      </Form>

      {/* Demo */}
      <Button
        type='primary'
        onClick={() =>
          showDeleteConfirm(
            'Are you sure delete this task?',
            <ExclamationCircleOutlined />,
            'Some descriptions',
            () => {
              console.log('ok');
            },
            () => {
              console.log('cancel');
            }
          )
        }
      >
        Delete
      </Button>
    </div>
  );
};

export default Login;
