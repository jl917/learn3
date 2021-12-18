import React, { useCallback } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from './redux';
import { Table } from 'antd';

const GET_USERS = gql`
  query Users {
    users{
      key: _id
      name{
        first
        last
      }
      email
      fruits
    }
  }
`;

const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'First',
    dataIndex: 'name',
    key: 'name',
    render: (item) => item.first,
  },
  {
    title: 'Last',
    dataIndex: 'name',
    key: 'name',
    render: (item) => item.last,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Fruits',
    dataIndex: 'fruits',
    key: 'fruits',
    render: (item) => item.join(', ')
  },
];

const Page = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return (
    <div>
      <Table columns={columns} dataSource={data.users} />
    </div>
  );
};

export default Page;
