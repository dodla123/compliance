import React from 'react';

interface DashboardCardProps {
  title: string;
  amount: string;
  content: number;
  icon?: React.ReactNode; // Add icon prop
};

interface PayoutCardProps {
  title: string;
  content: number;
  amount: string;
  icon?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, amount, content, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          {icon && <div className="w-6 h-6">{icon}</div>} {/* Render icon if provided */}
          <h2 className="text-xl">{title}</h2>
        </div>
        <p className="text-gray-700 text-2xl font-bold">{content}</p>
        <div className="text-lg text-gray-600">{amount}</div>
      </div>
    </div>
  );
};

const PayoutCard: React.FC<PayoutCardProps> = ({ title, content, amount, icon }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl shadow bg-white">
      {/* Top Row: Icon and Title */}
      <div className="flex items-center mb-4">
        {/* Icon */}
        {icon && <div className="mr-2">{icon}</div>}

        {/* Title */}
        <div className="text-2xl text-black -mt-4">{title}</div>
      </div>

      {/* Amount Section */}
      <div className="text-2xl font-bold text-gray-800 mb-2 -mt-6 ml-14">{amount}</div>

      {/* Content Section */}
      <div className="text-1xl text-gray-600 ml-14">{content} invoices</div>
    </div>
  );
};

export { DashboardCard, PayoutCard };




