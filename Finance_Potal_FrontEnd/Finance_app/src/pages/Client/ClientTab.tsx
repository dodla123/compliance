import React from 'react';
import Tabs from '../../common_ui/tabs';

const clientItems = [
  { key: 'All', label: 'All clients' },
  { key: 'B2B', label: 'B2B' },
  { key: 'B2C', label: 'B2C' },
  { key: 'Sezwop', label: 'Sezwop' },
  { key: 'Overseas', label: 'Overseas' },
  { key: 'Others', label: 'Others' },
];

interface ClientTabProps {
  activeKey: string;
  onChange: (key: string) => void;
}

const ClientTab: React.FC<ClientTabProps> = ({ activeKey, onChange }) => {
  return (
    <Tabs
      items={clientItems}
      activeKey={activeKey}
      onChange={onChange}
    />
  );
};

export default ClientTab;