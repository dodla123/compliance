import React from "react";
import Tabs from "../../common_ui/tabs";

const RemittanceItems = [
  {
    key: "Pending",
    label: (
      <div className="flex items-center gap-2 text-lg font-medium">
        Pending
        <span className="bg-purple-600 text-white text-sm font-bold px-2 py-1 rounded-full">
          20
        </span>
      </div>
    ),
  },
  { key: "Paid", label: <span className="text-lg font-medium">Paid</span> },
];

interface InvoiceTabProps {
  activeKey: string;
  onChange: (key: string) => void;
}

const RemittanceTab: React.FC<InvoiceTabProps> = ({ activeKey, onChange }) => {
  return <Tabs items={RemittanceItems} activeKey={activeKey} onChange={onChange} />;
};

export default RemittanceTab;
