import React from 'react';
import { Typography } from 'antd';
import FilterIcon from "../assets/icons/filterIcon";
import { SearchOutlined } from '@ant-design/icons';
import { MediumSecondaryButton } from './Button'; // Ensure correct path

const { Title } = Typography;

// PageHeader Component
interface PageHeaderProps {
  title?: string; // Title is optional
  text: string; // Button text
  showRaiseInvoice?: boolean; // Whether to show the button
  onRaiseInvoice?: () => void; // Button click handler
  icon?: React.ReactNode; // Optional icon for button (default to no icon)
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  text,
  showRaiseInvoice = false,
  onRaiseInvoice,
  icon = null, // Default: No icon
}) => {
  return (
    <div className="flex justify-between items-center mb-4 mt-[-20px]">
      {title && <Title level={2} className="!mb-0">{title}</Title>}
      {showRaiseInvoice && (
        <MediumSecondaryButton
          text={text}
          handleClick={onRaiseInvoice}
          bgColor="#7F56D9"
          textColor="#FFFFFF"
          icon={icon} // Optional icon
        />
      )}
    </div>
  );
};

// PayoutHeader Component
interface PayoutHeaderProps {
  title?: string;
  onSearch?: () => void;
  onFilter?: () => void;
}

const PayoutHeader: React.FC<PayoutHeaderProps> = ({
  title = 'Total Payouts',
  onSearch,
  onFilter,
}) => {
  return (
    <div className="flex justify-between items-center mt-[-30px]">
      {/* Left Section: Title */}
      <Title level={4} className="!mb-0 flex items-center mt-[30px]">
        {title}
      </Title>

      {/* Right Section: Search and Filters */}
      <div className="flex items-center gap-6"> {/* Increased gap for equal spacing */}
        <div
          className="flex items-center cursor-pointer text-gray-600 hover:text-black"
          style={{ marginTop: '30px' }} // Slightly adjust the vertical position
          onClick={onSearch}
        >
          <SearchOutlined className="text-2xl" />
        </div>
        <div
          className="flex items-center cursor-pointer text-gray-600 hover:text-black"
          style={{ marginTop: '30px', gap:'15px' }} // Ensure both are aligned similarly
          onClick={onFilter}
        >
        <FilterIcon width={24} height={24} />
        <span>Filters</span>
        </div>
      </div>
    </div>
  );
};


export { PageHeader, PayoutHeader };
