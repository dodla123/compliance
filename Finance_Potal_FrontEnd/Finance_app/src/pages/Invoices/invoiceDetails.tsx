import React from 'react';
import { Typography, Divider, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { FileTextTwoTone,  } from '@ant-design/icons';
import { HeadingLight } from '../../common_ui/typography';
import { ArrowLeft } from 'lucide-react';
// import BreadcrumbPath from './breadCrumbPath';
import StatusTag from './statusTag';
import ActionButtons from './actionButtons';
import AddressCard from './addressCard';

const { Title, Text } = Typography;

// Hardcoded invoice data
const invoices = [
  {
    id: '1',
    invoiceNumber: 'ST-INV23855',
    status: 'Pending',
    amount: '₹ 100,665.80',
    sentToClient: true,
    company: {
      name: 'Buzzworks Business Services Pvt. Ltd.',
      address: [
        '3rd Floor, No: 84, Murugesa Naicker Building',
        'Greams road, Thousand Lights, Chennai',
        'Tamilnadu - 600 006',
        'Contact Us'
      ],
      email: 'Shashwat@buzzworks.com',
      phone: '+91 9876543210'
    },
    client: {
      name: 'Kuehne Nagel PVT LTD.',
      address: ['456 Business Park', 'Mumbai, Maharashtra 400001'],
    }
  },
  {
    id: '2',
    invoiceNumber: 'ST-INV23856',
    status: 'Paid',
    amount: '₹ 150,000.00',
    sentToClient: false,
    company: {
      name: 'Buzzworks Business Services Pvt. Ltd.',
      address: [
        '3rd Floor, No: 84, Murugesa Naicker Building',
        'Greams road, Thousand Lights, Chennai',
        'Tamilnadu - 600 006'
      ],
      email: 'info@buzzworks.com',
      phone: '+91 9876543210'
    },
    client: {
      name: 'ABC Logistics Pvt Ltd.',
      address: ['789 Transport Hub', 'Bangalore, Karnataka 560001'],
    }
  }
];

const InvoiceDetails: React.FC = () => {
  const { id } = useParams();
  console.log('Invoice ID from URL:', id);
  const navigate = useNavigate();

  // Find the invoice that matches the URL id
  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <div className="p-6 text-red-500 text-lg">Invoice not found</div>;
  }

  return (
    <div className="p-0">
      {/* Top Section with Back Button and Raise Invoice */}
      <div className="flex justify-between items-center w-full mb-4">
        <button
          onClick={() => navigate('/invoices')}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <div className="p-2 rounded-full bg-blue-100 mr-2">
            <ArrowLeft size={12} />
          </div>
          <span className="font-medium">Back to Clients</span>
        </button>

        <div className="flex items-center justify-between">
          {/* <HeadingLight text="Invoices" /> */}
          <Button
            type="primary"
            // icon={<PlusOutlined />}
            onClick={() => console.log('Invoice button clicked')}
          >
            Raise Invoice
          </Button>
        </div>
      </div>

      {/* Invoice details section */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          {/* Invoice number and status in the same row */}
          <div className="flex items-center gap-3">
            <Title level={3} className="!mb-0">{invoice.invoiceNumber}</Title>
            <StatusTag status={invoice.status} className="relative -top-1" />
          </div>
        </div>

        {/* Amount, Sent to Client & Action Buttons aligned in a single row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Text className="text-lg">{invoice.amount}</Text>
            {invoice.sentToClient && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <Text>Sent to client</Text>
              </div>
            )}
          </div>

          {/* Action Buttons straight to Amount and Sent to Client */}
          <ActionButtons
            onAttach={() => console.log('Attach clicked')}
            onSend={() => console.log('Send clicked')}
            onDownload={() => console.log('Download PDF clicked')}
            onEdit={() => console.log('Edit clicked')}
          />
        </div>
      </div>

      <Divider />

      {/* Logs Section beside the cards */}
      <div className="flex gap-6">
        <div className="flex-1">
          {/* Address card section */}
          <AddressCard
            companyName={invoice.company.name}
            companyAddress={invoice.company.address}
            companyEmail={invoice.company.email}
            companyPhone={invoice.company.phone}
            clientName={invoice.client.name}
            clientAddress={invoice.client.address}
          />
        </div>
        <div className="w-1/3 pl-12">
          <Title level={3} className="mb-2">Logs</Title>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow\">
            <FileTextTwoTone className="text-lg text-blue-500\" />
          </div>
            <div>
              <div className="text-black-500 text-md">Invoice Page was created</div>
              <div className="text-black-400 text-sm">07 Jan 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
