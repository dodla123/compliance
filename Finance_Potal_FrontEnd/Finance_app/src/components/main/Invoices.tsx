import React, { useState } from 'react';
import { Button } from 'antd';
import InvoiceTab from '../../pages/Invoices/InvoiceTab';
import InvoiceTable from '../../pages/Invoices/InvoiceTable';
import { Search, Filter, ArrowDownUp } from 'lucide-react';
import { PlusOutlined } from '@ant-design/icons';
import { Heading } from '../../common_ui/typography';
import dayjs from 'dayjs';

interface Customer {
  name: string;
  email: string;
}

interface InvoiceData {
  key: string;
  invoice: string;
  date: string;
  invoiceAmount: string;
  status: 'Drafted' | 'Pending' | 'Paid';
  customer: Customer;
}

const invoiceData: InvoiceData[] = [
  {
    key: '1',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Paid',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '2',
    invoice: 'ST-INV23856',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Pending',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '3',
    invoice: 'ST-INV23857',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Pending',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '4',
    invoice: 'ST-INV23858',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Paid',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '5',
    invoice: 'ST-INV23859',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Drafted',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '6',
    invoice: 'ST-INV23860',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Paid',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '7',
    invoice: 'ST-INV23861',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Pending',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
  {
    key: '8',
    invoice: 'ST-INV23862',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Drafted',
    customer: {
      name: 'Kuehne Nagel PVT LTD.',
      email: 'kuehne@gmail.com'
    }
  },
];

const Invoices: React.FC = () => {
  const [activeInvoiceTab, setActiveInvoiceTab] = useState<string>('All');

  const filteredData = activeInvoiceTab === 'All'
    ? invoiceData
    : invoiceData.filter(invoice => invoice.status === activeInvoiceTab);

  return (
    <div className="p-[2px]">
     <div className="flex items-center justify-between">
        <Heading text="Invoices" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => console.log('Invoice button clicked')}
        >
          Raise Invoice
        </Button>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="inline-block bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          <InvoiceTab
            activeKey={activeInvoiceTab}
            onChange={setActiveInvoiceTab}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
            <Search className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Search</span>
          </div>
          <Filter className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
          <ArrowDownUp className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      <div className="mt-4">
        <InvoiceTable data={filteredData} />
      </div>
    </div>
  );
};

export default Invoices;