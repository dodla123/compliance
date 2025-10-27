import React from 'react';

interface TabItem {
  key: string;
  label: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, activeKey, onChange }) => {
  return (
    <div className="bg-gray-50/80 rounded-md p-1">
      <div className="flex items-center whitespace-nowrap">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all mx-0.5 flex-shrink-0
              ${
                activeKey === item.key
                  ? 'bg-white text-gray-900 shadow-md ring-1 ring-gray-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-200'
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;