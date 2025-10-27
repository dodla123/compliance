import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface ItemDataType {
  key: string;
  itemdescription: string;
  quantity: string;
  price: string;
  totalAmount: string;
}

interface ItemTableProps {
  data: ItemDataType[];
  pagination?: boolean;
}

const ItemTable: React.FC<ItemTableProps> = ({ data, pagination = true }) => {
  const columns: TableProps<ItemDataType>['columns'] = [
    {
      title: 'Item Description',
      dataIndex: 'itemdescription',
      key: 'itemdescription',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
  ];

  return (
    <Table<ItemDataType>
      columns={columns}
      dataSource={data}
      pagination={pagination ? undefined : false}
    />
  );
};

export default ItemTable;
