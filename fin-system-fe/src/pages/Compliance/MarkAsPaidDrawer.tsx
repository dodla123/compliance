import React, { useState } from "react";
import { X, Info, FileText } from "lucide-react";

interface MarkAsPaidDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  state: string;
  dueDate: string;
  amount: number;
  remittanceType: "PF" | "ESIC" | "PT" | "LWF"; // New Prop
}

const MarkAsPaidDrawer: React.FC<MarkAsPaidDrawerProps> = ({
  isOpen,
  onClose,
  companyName,
  state,
  dueDate,
  amount,
  remittanceType
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Determine what to show (Company Name or State)
  const entityName = remittanceType === "PF" ? companyName : state;

  // Handle File Selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className={`fixed top-0 right-0 w-[600px] h-full bg-white shadow-lg p-6 flex flex-col justify-between transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* Header */}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Mark as Paid</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <hr className="my-4" />

        {/* Payment Details in a Single Row */}
        <div className="flex justify-between items-center mb-4">
          {/* Left: Remittance Type & Entity Name */}
          <div className="flex flex-col">
            <p className="text-base font-semibold text-gray-900">{remittanceType} Remittance</p>
            <p className="text-sm text-gray-600">{entityName}</p>
          </div>

          {/* Middle: Due Date */}
          <p className="text-sm text-gray-600">Due Date: {dueDate}</p>

          {/* Right: Amount */}
          <div className="flex flex-col text-right">
            <p className="text-xl font-semibold text-gray-900">₹ {amount.toLocaleString()}</p>
            <p className="text-sm text-gray-600">PT Value</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-blue-100 p-3 rounded-lg flex items-center gap-2 mt-6">
          <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full">
            <Info size={16} />
          </div>
          <p className="text-sm text-gray-600">Upload the payment receipt here to mark as 'Paid.'</p>
        </div>

        {/* Upload Box */}
        <div
          className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg"
          />
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md mb-2">
            <FileText size={24} className="text-gray-600" />
          </div>
          <p className="text-purple-600 font-semibold">Click to upload</p>
        </div>
      </div>

      {/* Mark as Paid Button */}
      <div className="flex justify-end">
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
          Mark as Paid
        </button>
      </div>
    </div>
  );
};

export default MarkAsPaidDrawer;
