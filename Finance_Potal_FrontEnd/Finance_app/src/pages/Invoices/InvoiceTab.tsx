import React from 'react';
import Tabs from '../../common_ui/tabs';

const invoiceItems = [
  { key: 'All', label: 'All invoices' },
  { key: 'Drafted', label: 'Drafted' },
  { key: 'Paid', label: 'Paid' },
  { key: 'Pending', label: 'Pending' },
  { key: 'Recurring', label: 'Recurring invoices' }
];

interface InvoiceTabProps {
  activeKey: string;
  onChange: (key: string) => void;
}

const InvoiceTab: React.FC<InvoiceTabProps> = ({ activeKey, onChange }) => {
  return (
    <Tabs
      items={invoiceItems}
      activeKey={activeKey}
      onChange={onChange}
    />
  );
};

export default InvoiceTab;