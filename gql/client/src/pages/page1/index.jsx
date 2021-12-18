import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import Axios from 'axios';
import { v4 } from 'uuid';
import PictureUpload from '../../components/upload';
import utils from '../../utils';

const Page = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    Axios('https://httpbin.org/anything', {
      method: 'POST',
      data: utils.form.objectToFormdata(values),
    });
  };

  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{
        id: v4().replace(/-/g, ''),
        pw: v4().replace(/-/g, ''),
        name: `daolang${new Date().getTime()}`,
        email: `daolang${new Date().getTime()}@gmail.com`,
        age: Math.round(Math.random() * 99),
        introduction: 'description',
      }}
    >
      <Form.Item name="id" label="ID">
        <Input />
      </Form.Item>
      <Form.Item name="pw" label="Password">
        <Input />
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age">
        <InputNumber />
      </Form.Item>
      <Form.Item name="img" label="Image">
        <PictureUpload />
      </Form.Item>
      <Form.Item name="introduction" label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Page;
