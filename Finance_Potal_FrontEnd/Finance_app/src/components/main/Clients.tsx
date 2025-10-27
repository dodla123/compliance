import { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Search, Filter, ArrowDownUp } from 'lucide-react';
import ClientTab from '../../pages/Client/ClientTab';
import ClientTable from '../../pages/Client/ClientTable';
import AddClientForm from '../../pages/Client/AddClientForm';
import { Heading } from '../../common_ui/typography';

const AllClientData = [
  { key: '1', clientType: 'B2B', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '2', clientType: 'B2C', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '3', clientType: 'Overseas', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '4', clientType: 'Sezwop', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '5', clientType: 'Tayota', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '6', clientType: 'Accenture', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '7', clientType: 'B2B', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '8', clientType: 'Accenture', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '9', clientType: 'Overseas', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
  { key: '10', clientType: 'Sezwop', gstState: 'Karnataka', receivables: '₹ 100,665.80', poc: 'Shashwat', customer: 'Kuehne Nagel PVT LTD.', email: 'kuehne@gmail.com' },
];

const Clients = () => {
  const [activeClientTab, setActiveClientTab] = useState('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const availableTabs = ['All', 'B2B', 'B2C', 'Sezwop', 'Overseas', 'Others'];

  const filteredData =
    activeClientTab === 'All'
      ? AllClientData
      : AllClientData.filter((client) =>
          activeClientTab === 'Others'
            ? !availableTabs.slice(1, -1).includes(client.clientType)
            : client.clientType === activeClientTab
        );

  const handleAddClientClick = () => {
    setIsDrawerOpen(true);
    console.log('Add New Client button clicked');
  };

  return (
    <div className="p-[2px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Heading text="Clients" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddClientClick}
        >
          Add New Client
        </Button>
      </div>

      {/* Tabs and Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="inline-block bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          <ClientTab activeKey={activeClientTab} onChange={setActiveClientTab} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 text-gray-600">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </div>
          <Filter className="w-5 h-5 cursor-pointer hover:text-gray-900 text-gray-600" />
          <ArrowDownUp className="w-5 h-5 cursor-pointer hover:text-gray-900 text-gray-600" />
        </div>
      </div>

      {/* Client Table */}
      <div className="mt-2 w-full">
        <ClientTable data={filteredData} />
      </div>

      {/* Drawer for Add Client */}
      <AddClientForm open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Clients;
