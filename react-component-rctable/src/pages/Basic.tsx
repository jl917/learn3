import React, { useMemo, useState } from 'react';
import Table from 'rc-table';
import { TableProps } from 'rc-table/lib/Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 1200,
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <a href="#" style={{ display: 'block', height: 30 }}>Delete</a>,
  },
];

const data = [
  { name: 'Jack', age: 228, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
  { name: 'Rose', age: 36, address: 'some where', key: '3' },
  { name: 'Rose', age: 36, address: 'some where', key: '4' },
  { name: 'Rose', age: 36, address: 'some where', key: '5' },
  { name: 'Rose', age: 36, address: 'some where', key: '6' },
  { name: 'Rose', age: 36, address: 'some where', key: '7' },
  { name: 'Rose', age: 36, address: 'some where', key: '8' },
  { name: 'Rose', age: 36, address: 'some where', key: '9' },
  { name: 'Rose', age: 36, address: 'some where', key: '19' },
  { name: 'Rose', age: 36, address: 'some where', key: '22' },
  { name: 'Rose', age: 36, address: 'some where', key: '23' },
  { name: 'Rose', age: 36, address: 'some where', key: '24' },
];

const Basic: React.FC<TableProps<any>> = (props) => {
  const [activeRow, setActiveRow] = useState('2');
  const tableProps = useMemo<TableProps<any>>(() => ({
    tableLayout: 'fixed',
    prefixCls: 'wmp-table',
    columns,
    data,
    scroll: { y: 300 },
    // style: { height: 300 },
    rowClassName: (record) => {
      return record['key'] === activeRow ? 'active' : '';
    },
    emptyText: <p>검색 결과가 없습니다.</p>,
    ...props,
    onRow: (record: any) => ({
      onClick: (event) => {
        setActiveRow(record['key']);
        // @ts-ignore
        props.onRow && props.onRow(record).onClick && props.onRow(record).onClick(event)
      }
    }),
  }), [activeRow]);
  return <Table {...tableProps} />
}

export default Basic;
