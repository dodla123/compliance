import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkAsPaidDrawer from "./MarkAsPaidDrawer"; // Import the drawer

interface RemittancePendingCardProps {
  remittanceType: string;
  companyName: string;
  state: string;
  dueDate: string;
  amount: number;
}

const RemittancePendingCard: React.FC<RemittancePendingCardProps> = ({
  remittanceType,
  companyName,
  state,
  dueDate,
  amount,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  // Get color based on remittance type
  const displayName = remittanceType === "PF" ? companyName : state;

  const handleCompanyClick = () => {
    navigate(`/company/${companyName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <button
            onClick={handleCompanyClick}
            className="text-lg font-semibold hover:text-purple-600 text-left transition-colors"
          >
            {displayName}
          </button>
          <p className="text-sm text-gray-500">Due Date: {dueDate}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">₹ {amount.toLocaleString()}</span>
        </div>
      </div>

      <hr className="my-2" />

      <div className="flex justify-end">
        <button
          className="text-purple-600 hover:underline font-bold"
          onClick={() => setIsDrawerOpen(true)}
        >
          Mark as Paid
        </button>
      </div>

      {/* Drawer Component */}
      <MarkAsPaidDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        remittanceType={remittanceType as "PF" | "ESIC" | "PT" | "LWF"} // Type assertion
        dueDate={dueDate}
        amount={amount}
        companyName={companyName} // Pass companyName
        state={state} // Pass state
      />
    </div> 
  );
};

export default RemittancePendingCard;
