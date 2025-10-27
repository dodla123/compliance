import React from "react";

type UpdateCardProps = {
  title: string;
  amount: string;
  company: string;
  status: string;
  color: string;
  getComment?: () => JSX.Element; // Accept the comment function as a prop
};

const UpdateCard: React.FC<UpdateCardProps> = ({
  title,
  amount,
  company,
  status,
  color,
  getComment, // Function reference is passed from Dashboard.tsx
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full border border-gray-300 relative">
      {/* Vertical Color Border */}
      <div
        className="absolute left-0 top-3 bottom-3 w-1 rounded-sm"
        style={{ backgroundColor: color }}
      />

      {/* Invoice Title and Amount */}
      <div className="flex justify-between w-full mb-2">
        <h6 className="text-gray-600">{title}</h6>
        <h5 className="font-bold text-gray-700">{amount}</h5>
      </div>

      {/* Company and Status */}
      <div className="flex justify-between w-full">
        <h5 className="text-black font-bold">{company}</h5>
        <p className="text-sm font-bold" style={{ color: color }}>
          {status}
        </p>
      </div>

      {/* Only render the comment box if getComment is provided */}
      {getComment && getComment()}
    </div>
  );
};

export default UpdateCard;
