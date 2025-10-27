import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface ClientDataType {
  key: string;
  customer: string;
  gstState: string;
  clientType: string;
  poc: string;
  receivables: string;
  email: string;
}

interface ClientTableProps {
  data: ClientDataType[];
  pagination?: boolean;
}

const ClientTable: React.FC<ClientTableProps> = ({ data, pagination = true }) => {
  const navigate = useNavigate();

  const columns: TableProps<ClientDataType>['columns'] = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      render: (text, record) => (
        <div>
          {/* Clicking on Customer Name navigates to ClientDetailsPage */}
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate(`/clients/${record.key}`);
            }}
            className="text-purple-600 hover:underline cursor-pointer"
          >
            {text}
          </a>
          <div className="text-gray-500 text-sm">{record.email}</div>
        </div>
      ),
    },
    { title: 'GST State', dataIndex: 'gstState', key: 'gstState' },
    { title: 'Client Type', dataIndex: 'clientType', key: 'clientType' },
    {
      title: 'POC',
      dataIndex: 'poc',
      key: 'poc',
      render: (text) => (
        <div>
          <div>{text}</div>
          <div className="text-gray-500 text-sm">Product Manager</div>
        </div>
      ),
    },
    { title: 'Receivables', dataIndex: 'receivables', key: 'receivables' },
    {
      key: 'action',
      render: (_, record) => (
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate(`/clients/${record.key}`);
          }}
          className="text-base text-purple-500 hover:text-purple-700 transition-colors cursor-pointer"
        >
          View
        </a>
      ),
    },
  ];

  return <Table<ClientDataType> columns={columns} dataSource={data} pagination={pagination ? undefined : false} />;
};

export default ClientTable;
