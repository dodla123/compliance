import React from 'react';
import { Table, Tag, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckOutlined, ExclamationCircleOutlined, ClockCircleOutlined, MoreOutlined } from '@ant-design/icons';

interface PayoutDataType {
  key: string;
  email: string;
  date: string;
  costCenter: string;
  client: string;
  clientId: string;
  invoice: string;
  paidOn?: string;
  invoiceId: string;
  invoiceAmount: string;
  status: string;
}

interface PayoutTableProps {
  data: PayoutDataType[];
  pagination?: boolean;
  activeTable: string;
}

const PayoutTable: React.FC<PayoutTableProps> = ({ data, activeTable, pagination = true }) => {
  const navigate = useNavigate();

  const handleClientClick = (clientId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    navigate(`/client/${clientId}`);
  };

  const statusColumn = {
    title: <p className='text-[12px] text-[#000000] font-normal'>Status</p>,
    dataIndex: 'status',
    key: 'status',
    width: 150,
    render: (status: string) => {
      let color = 'gray';
      let icon: React.ReactNode = null;

      if (status === 'Paid') {
        color = 'green';
        icon = <CheckOutlined />;
      } else if (status === 'Pending') {
        color = 'orange';
        icon = <ClockCircleOutlined />;
      } else if (status === 'Overdue') {
        color = 'red';
        icon = <ExclamationCircleOutlined />;
      }

      return (
        <Tag color={color} style={{ borderRadius: '12px', padding: '4px 10px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          {icon} {status}
        </Tag>
      );
    },
  };

  const getBaseColumns = () => [
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Cost Center</p>,
      dataIndex: 'costCenter',
      key: 'costCenter',
      width: 150,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Client</p>,
      dataIndex: 'client',
      key: 'client',
      width: 250,
      render: (client: string, record: PayoutDataType) => (
        <div>
          <a
            onClick={(e) => handleClientClick(record.clientId, e)}
            className='text-purple-800 text-lg font-medium hover:underline cursor-pointer'
          >
            {client}
          </a>
          <p className='text-[#475467] text-sm'>{record.email}</p>
        </div>
      ),
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Invoice</p>,
      dataIndex: 'invoice',
      key: 'invoice',
      width: 150,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Invoice Amount</p>,
      dataIndex: 'invoiceAmount',
      key: 'invoiceAmount',
      width: 150,
    },
  ];

  const getActionColumn = () => ({
    key: 'action',
    fixed: 'right',
    width: 90,
    render: (record: PayoutDataType) => {
      const menu = (
        <Menu>
          <Menu.Item 
            key="1"
            onClick={() => navigate(`/invoice/${record.invoiceId}`)}
            icon={<CheckOutlined />}
          >
            View Invoice
          </Menu.Item>
          <Menu.Item 
            key="2"
            onClick={() => handleClientClick(record.clientId)}
            icon={<CheckOutlined />}
          >
            View Employees
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <div className='cursor-pointer'>
            <MoreOutlined style={{ fontSize: '20px' }} />
          </div>
        </Dropdown>
      );
    },
  });

  const columnsMap: Record<string, any[]> = {
    'Total payouts': [
      ...getBaseColumns(),
      statusColumn,
      getActionColumn(),
    ],
    'Pending': [
      ...getBaseColumns(),
      {
        title: <p className='text-[12px] text-[#000000] font-normal'>Due Date</p>,
        dataIndex: 'date',
        key: 'date',
        width: 150,
      },
      getActionColumn(),
    ],
    'Paid': [
      ...getBaseColumns(),
      {
        title: <p className='text-[12px] text-[#000000] font-normal'>Paid On</p>,
        dataIndex: 'paidOn',
        key: 'paidOn',
        width: 150,
      },
      getActionColumn(),
    ],
    'Overdue': [
      ...getBaseColumns(),
      {
        title: <p className='text-[12px] text-[#000000] font-normal'>Due Date</p>,
        dataIndex: 'date',
        key: 'date',
        width: 150,
      },
      getActionColumn(),
    ],
  };

  return (
    <div className='p-[2px]'>
      <div className='grid w-full'>
        <div className='overflow-hidden'>
          <Table<PayoutDataType> 
            pagination={false}
            columns={columnsMap[activeTable]} 
            dataSource={data} 
            scroll={{ x: 800 }} 
            bordered={false} 
          />
        </div>
      </div>
    </div>
  );
};

export default PayoutTable;
