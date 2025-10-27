import React from 'react';
import { Table, Dropdown, Menu } from 'antd';
import type { TableColumnsType } from 'antd';
import { CheckOutlined, ClockCircleOutlined, MoreOutlined, PaperClipOutlined, DownloadOutlined, EditOutlined, SendOutlined, FileDoneOutlined, ExportOutlined, DollarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface InvoiceDataType {
  key: string;
  invoice: string;
  date: string;
  invoiceAmount: string;
  status: 'Drafted' | 'Pending' | 'Paid';
  customer: {
    name: string;
    email: string;
  };
}

interface InvoiceTableProps {
  data: InvoiceDataType[];
  pagination?: boolean;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ data, pagination = true }) => {
  const navigate = useNavigate();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Drafted':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getMenuItems = (status: string, record: InvoiceDataType) => {
    const options: Record<string, { label: string; icon: React.ReactNode; path: string }[]> = {
      Drafted: [
        { label: 'Attach File', icon: <PaperClipOutlined style={{ fontSize: '16px' }}/>, path: `/attach-file/${record.key}` },
        { label: 'Send to Client', icon: <SendOutlined style={{ fontSize: '16px' }}/>, path: `/send-client/${record.key}` },
        { label: 'Download PDF', icon: <DownloadOutlined style={{ fontSize: '16px' }}/>, path: `/download-pdf/${record.key}` },
        { label: 'Edit', icon: <EditOutlined style={{ fontSize: '16px' }}/>, path: `/edit/${record.key}` },
      ],
      Pending: [
        { label: 'Attach File', icon: <PaperClipOutlined style={{ fontSize: '16px' }}/>, path: `/attach-file/${record.key}` },
        { label: 'Generate E-Invoice', icon: <FileDoneOutlined style={{ fontSize: '16px' }}/>, path: `/generate-e-invoice/${record.key}` },
        { label: 'Initiate Payout', icon: <DollarOutlined style={{ fontSize: '16px' }}/>, path: `/initiate-payout/${record.key}` },
      ],
      Paid: [
        { label: 'Mark as Done', icon: <CheckOutlined style={{ fontSize: '16px' }}/>, path: `/mark-done/${record.key}` },
        { label: 'Attach File', icon: <PaperClipOutlined style={{ fontSize: '16px' }}/>, path: `/attach-file/${record.key}` },
        { label: 'View E-Invoice', icon: <ExportOutlined style={{ fontSize: '16px' }}/>, path: `/invoices/${record.key}` },
      ],
    };
    
    return options[status] || [];
  };

  const columns: TableColumnsType<InvoiceDataType> = [
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Invoice</p>,
      dataIndex: 'invoice',
      fixed: 'left',
      width: 150,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Date</p>,
      dataIndex: 'date',
      width: 150,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Invoice Amount</p>,
      dataIndex: 'invoiceAmount',
      width: 150,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Status</p>,
      dataIndex: 'status',
      width: 150,
      render: (status: string) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(status)}`}>
          {status}
        </span>
      ),
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Customer</p>,
      dataIndex: 'customer',
      width: 250,
      render: (customer: { name: string; email: string }) => (
        <div>
          <p className='text-[#7F56D9]'>{customer.name}</p>
          <p className='text-[#475467]'>{customer.email}</p>
        </div>
      ),
    },
    {
      title: '',
      key: 'action',
      fixed: 'right',
      width: 90,
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              {getMenuItems(record.status, record).map((item) => (
                <Menu.Item
                  key={item.label}
                  icon={item.icon}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={['click']}
        >
          <div className='cursor-pointer'>
            <MoreOutlined style={{ fontSize: '20px' }} />
          </div>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className='p-[2px]'>
      <div className='grid w-full'>
        <div className='overflow-hidden'>
          <Table<InvoiceDataType>
            pagination={pagination ? undefined : false}
            columns={columns}
            dataSource={data}
            scroll={{ x: 800 }}
            bordered={false}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;