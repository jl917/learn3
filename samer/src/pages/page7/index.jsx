import React, { useCallback, useEffect } from 'react';
import { Table, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAsync, cancelDataAsync } from './redux';

const columns = [
  {
    title: '사진',
    dataIndex: 'picture',
    key: 'picture',
    render: (t) => <img src={t} width="48" height="48" />,
  },
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '아이디',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '이메일',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '연락처',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '가입일자',
    dataIndex: 'date',
    key: 'date',
  },
];

const Page = () => {
  const isLoading = useSelector((state) => state.btnLoading);
  const dataSource = useSelector((state) => state.userDatas);
  const dispatch = useDispatch();
  const getData = useCallback(() => dispatch(getDataAsync()), [dispatch]);
  const canData = useCallback(() => dispatch(cancelDataAsync()), [dispatch]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>saga table</h1>
      <Button type="primary" loading={isLoading} onClick={getData}>
        새로고침
      </Button>
      <Button type="primary" onClick={canData}>
        cancel
      </Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Page;
