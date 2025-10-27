import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Dropdown, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MoreOutlined } from '@ant-design/icons';
import MarkAsPaidDrawer from './MarkAsPaidDrawer';

export type RemittancePendingTableType = "PF" | "ESIC" | "PT" | "LWF";

interface DataType {
  key: string;
  companyName: string;
  state: string;
  dueDate?: string;
  paidDate?: string;
  amount: number;
  remittanceType: RemittancePendingTableType;
}

interface RemittancePendingTableProps {
  data: Array<{
    companyName: string;
    state: string;
    dueDate?: string;
    paidDate?: string;
    amount: number;
    remittanceType: RemittancePendingTableType;
  }>;
  status: 'pending' | 'paid';
  remittanceType: RemittancePendingTableType;
}

const RemittancePendingTable: React.FC<RemittancePendingTableProps> = ({ data, status, remittanceType }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const handleCompanyClick = (companyName: string) => {
    navigate(`/company/${companyName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleMarkAsPaid = (record: DataType) => {
    setSelectedCompany(record);
    setIsDrawerOpen(true);
  };

  const handleViewReceipt = (record: DataType) => {
    console.log("View receipt for:", record);
  };

  const getColumns = (): ColumnsType<DataType> => {
    const baseColumns: ColumnsType<DataType> = [
      {
        title: remittanceType === "PF" ? "Company Name" : "State",
        dataIndex: remittanceType === "PF" ? "companyName" : "state",
        key: remittanceType === "PF" ? "companyName" : "state",
        render: (text: string, record: DataType) => (
          <Button
            type="link"
            onClick={() => handleCompanyClick(record.companyName)}
            className="text-gray-900 hover:text-purple-600 p-0"
          >
            {text}
          </Button>
        ),
      },
      {
        title: remittanceType === "PF" ? "State" : "Company Name",
        dataIndex: remittanceType === "PF" ? "state" : "companyName",
        key: remittanceType === "PF" ? "state" : "companyName",
      },
      {
        title: status === 'pending' ? 'Due Date' : 'Paid Date',
        dataIndex: status === 'pending' ? 'dueDate' : 'paidDate',
        key: 'date',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (amount: number) => `₹ ${amount.toLocaleString()}`,
      },
      {
        title: 'Actions',
        key: 'actions',
        align: 'right',
        render: (_, record: DataType) => (
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: status === 'pending' ? 'Mark as Paid' : 'View Receipt',
                  onClick: () => status === 'pending' ? handleMarkAsPaid(record) : handleViewReceipt(record),
                },
              ],
            }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Button
              type="text"
              icon={<MoreOutlined />}
              className="hover:bg-gray-100"
            />
          </Dropdown>
        ),
      },
    ];

    return baseColumns;
  };

  const tableData: DataType[] = data.map((item, index) => ({
    key: index.toString(),
    ...item,
  }));

  return (
    <div className="mt-6">
      <Table
        columns={getColumns()}
        dataSource={tableData}
        pagination={false}
        className="border border-gray-200 rounded-lg overflow-hidden"
      />

      {selectedCompany && status === 'pending' && (
        <MarkAsPaidDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          remittanceType={selectedCompany.remittanceType}
          dueDate={selectedCompany.dueDate ?? ''}
          amount={selectedCompany.amount}
          companyName={selectedCompany.companyName}
          state={selectedCompany.state}
        />
      )}
    </div>
  );
};

export default RemittancePendingTable;