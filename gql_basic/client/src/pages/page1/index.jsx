import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($first: String, $last: String, $email: String, $fruits: [String!]) {
    addUser(first: $first, last: $last, email: $email, fruits: $fruits){
      email
    }
  }
`;

const Page = () => {
  const [resetKey, setResetKey] = useState(0);
  const [addUser, { data }] = useMutation(ADD_USER);

  const onFinish = ({ first, last, email, fruits }) => {
    console.log(fruits)
    addUser({ variables: { first, last, email, fruits } });
    setResetKey(resetKey + 1);
  };
  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{
        first: `dao${new Date().getTime()}`,
        last: `lang${new Date().getTime()}`,
        email: `daolang${new Date().getTime()}@gmail.com`,
      }}
      key={resetKey}
    >
      <Form.Item name="first" label="first">
        <Input />
      </Form.Item>
      <Form.Item name="last" label="last">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="fruits" label="Fruits">
        <Checkbox.Group options={['Apple', 'Pear', 'Orange']} />
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
