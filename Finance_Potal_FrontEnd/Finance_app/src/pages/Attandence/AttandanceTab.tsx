import React, { useState } from "react";

const tabs = [
  { id: "insights", label: "Insights" },
  { id: "timesheet", label: "Timesheets" },
  { id: "purchase-order", label: "Purchase Order" },
  { id: "invoicing", label: "Invoicing" },
  { id: "credit-tracker", label: "Credit Note Tracker" },
];

interface TabsProps {
  onTabChange: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("insights");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="flex border-b mb-6">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === tab.id
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-purple-300"
              }
              transition-colors duration-200
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;

