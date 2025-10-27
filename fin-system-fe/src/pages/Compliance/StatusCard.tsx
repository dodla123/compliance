import React from "react";

const StatusCard = ({ color, status, percentage, employees, size = "large" }: { 
  color: string;
  status: string;
  percentage: number;
  employees: number;
  size?: "large" | "small";
}) => (
  <div className={`bg-white rounded-lg shadow ${size === "large" ? "p-4" : "p-2"}`}>
    <div className="flex items-center gap-2">
      <div 
        className={`${size === "large" ? "w-3 h-3" : "w-2 h-2"} rounded-full`} 
        style={{ backgroundColor: color }}
      ></div>
      <span className={`${size === "large" ? "text-sm" : "text-xs"} text-gray-600`}>
        {status} ({percentage}%)
      </span>
    </div>
    <div className={`mt-1 ${size === "large" ? "text-lg" : "text-sm"}`}>
      {employees.toLocaleString()} employees
    </div>
  </div>
);

export default StatusCard;
