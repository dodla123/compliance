import React from "react";
import { Users, CheckCircle, XCircle, Filter } from "lucide-react";

interface StatsCardsProps {
  totalEmployees: number;
  acceptedTimesheets: number;
  rejectedTimesheets: number;
}

const Cards: React.FC<StatsCardsProps> = ({ totalEmployees, acceptedTimesheets, rejectedTimesheets }) => {
  return (
    <div className="w-full flex flex-col space-y-3"> 
      <div className="flex space-x-4"> 
        {/* Total Employees Card */}
        <div className="bg-white rounded-lg shadow p-3 w-72">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-blue-500" />
            <span className="text-gray-600 font-medium text-md">Total Employees</span>
          </div>
          <div className="mt-1 ml-8 text-2xl font-bold text-gray-900">{totalEmployees}</div>
        </div>

        {/* Accepted Timesheets Card */}
        <div className="bg-white rounded-lg shadow p-3 w-72">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-gray-600 font-medium text-md">Accepted Timesheets</span>
          </div>
          <div className="mt-1 ml-8 text-2xl font-bold text-gray-900">{acceptedTimesheets}</div>
        </div>

        {/* Rejected Timesheets Card */}
        <div className="bg-white rounded-lg shadow p-3 w-72">
          <div className="flex items-center space-x-2">
            <XCircle className="h-6 w-6 text-red-500" />
            <span className="text-gray-600 font-medium text-md">Rejected Timesheets</span>
          </div>
          <div className="mt-1 ml-8 text-2xl font-bold text-gray-900">{rejectedTimesheets}</div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-lg shadow w-[56rem] h-14 p-2 flex justify-between items-center">
        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <Filter className="h-5 w-5 mr-2" />
          Apply Filters
        </button>
        <div className="space-x-3">
          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
            <span className="flex items-center">
              Approve
            </span>
          </button>
          <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors">
            <span className="flex items-center">
              Reject
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;






