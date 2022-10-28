import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientID =
  '876248422571-vlevutfka0jg41i3m12e51fd3mhmvj8o.apps.googleusercontent.com';

const Option3 = () => {
  const [success, setSuccess] = useState(false);
  const [refreshToken, setRefreshToken] = useState();

  const onSuccess = (res: any) => {
    console.log('Login Success', res);
    const { code } = res;
    axios
      .post('http://localhost:5000/api/google-calendar/create-tokens', { code })
      .then((res) => {
        console.log('Successfully', res);
        setSuccess(true);
        setRefreshToken(res?.data?.refresh_token);
      })
      .catch((error) => {
        console.log('Failed', error);
      });
  };

  console.log('refresh token:', refreshToken);

  const onFinish = (values: any) => {
    const data = {
      ...values,
      refresh_token: refreshToken,
    };
    console.log('Success:', data);

    axios
      .post('http://localhost:5000/api/google-calendar/create-event', data)
      .then((res) => {
        console.log('Create success', res);
      })
      .catch((error) => {
        console.log('Create error', error);
      });
  };

  return (
    <>
      <div>
        {!success && (
          <GoogleLogin
            clientId={clientID}
            buttonText='Login'
            onSuccess={onSuccess}
            cookiePolicy={'single_host_origin'}
            responseType='code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
        )}
        {success && (
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Summary'
              name='summary'
              rules={[{ required: true, message: 'Please input summary!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Description'
              name='description'
              rules={[{ required: true, message: 'Please input description!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Location'
              name='location'
              rules={[{ required: true, message: 'Please input location!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='startTime'
              name='startTime'
              rules={[{ required: true, message: 'Please input start time!' }]}
            >
              <Input type='datetime-local' />
            </Form.Item>
            <Form.Item
              label='endTime'
              name='endTime'
              rules={[{ required: true, message: 'Please input end time!' }]}
            >
              <Input type='datetime-local' />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </>
  );
};

export default Option3;
