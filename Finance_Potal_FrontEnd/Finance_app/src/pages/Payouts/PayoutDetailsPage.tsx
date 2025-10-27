import {
  CloseOutlined,
  UserOutlined,
  CalendarOutlined,
  SearchOutlined,
  FilterOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Button, Table, Input, Avatar, Tag, Pagination, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const recordsPerPage = 10;

const employees = Array.from({ length: 14 }, (_, i) => ({
  key: i,
  id: `EMP00${i + 1}`,
  name: 'John Doe',
  designation: 'Senior Developer',
  email: 'john.doe@example.com',
  netSalary: '₹ 85,000',
  bankAccountNumber: 'XXXX XXXX 1234',
  ifsc: 'HDFC0001234',
  bankName: 'HDFC Bank',
  payoutDate: '2024-03-15 14:30:00'
}));

const PayoutDetailsPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employees.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          <Avatar style={{ backgroundColor: '#E6F4FF', color: '#1677ff' }}>
            {record.name.charAt(0)}
          </Avatar>
          <div>
            <div className="font-medium">{record.name}</div>
            <div className="text-xs text-gray-500">{record.designation}</div>
          </div>
        </div>
      )
    },
    {
      title: 'Email ID',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Net Salary',
      dataIndex: 'netSalary',
      key: 'netSalary',
    },
    {
      title: 'Bank Account Number',
      dataIndex: 'bankAccountNumber',
      key: 'bankAccountNumber',
    },
    {
      title: 'IFSC Code',
      dataIndex: 'ifsc',
      key: 'ifsc',
    },
    {
      title: 'Bank Name',
      dataIndex: 'bankName',
      key: 'bankName',
    },
    {
      title: 'Time & Date of Payout Release',
      dataIndex: 'payoutDate',
      key: 'payoutDate',
    },
  ];

  const currentRecords = employees.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <h2 className="text-xl font-semibold">Kuehne Nagel PVT LTD.</h2>
        <Button
          icon={<CloseOutlined />}
          shape="circle"
          onClick={() => navigate('/payouts')}
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <Avatar
            icon={<UserOutlined />}
            size={48}
            style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
          />
          <div>
            <p className="text-lg font-semibold">Kuehne Nagel PVT LTD.</p>
            <p className="text-sm text-gray-500">2024 Total Employees</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar
            icon={<UserOutlined />}
            size={48}
            style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
          />
          <div>
            <p className="text-lg font-semibold">₹ 10,54,000</p>
            <p className="text-sm text-gray-500">Invoice Amount</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar
            icon={<CalendarOutlined />}
            size={48}
            style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
          />
          <div>
            <p className="text-lg font-semibold">May 12</p>
            <p className="text-sm text-gray-500">Date of Payroll Approved</p>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Employees</h2>
          <Tag color="blue">2024</Tag>
        </div>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="w-64"
          />
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button icon={<DownloadOutlined />} />
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="flex-1 overflow-auto p-4">
        <Table
          columns={columns}
          dataSource={currentRecords}
          pagination={false}
          scroll={{ x: 'max-content' }}
          rowKey="id"
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 border-t">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          icon={<LeftOutlined />}
        >
          Previous
        </Button>

        <Pagination
          simple
          current={currentPage}
          total={employees.length}
          pageSize={recordsPerPage}
          onChange={handlePageChange}
        />

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          icon={<RightOutlined />}
          iconPosition="end"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PayoutDetailsPage;
