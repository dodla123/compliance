import React from "react";
import { X, Check } from "lucide-react";

interface TimesheetEntry {
  id: number;
  employeeName: string;
  clientEmployeeId: string;
  billableHours: { current: number; total: number };
  otHours: number;
  startDate: string;
  endDate: string;
  clientInvoiceId: string;
  employeeOwnedBy: string;
  expenseValue: number;
  otRatePerHour: number;
  billableRatePerHour: number;
  totalBillable: number;
}

interface Props {
  sampleTimesheetData: TimesheetEntry[];
  selectedEntries: number[];
  setSelectedEntries: React.Dispatch<React.SetStateAction<number[]>>;
  toggleEntrySelection: (id: number) => void;
  formatDate: (date: string) => string;
  formatCurrency: (value: number) => string;
  onEmployeeClick: (employeeName: string) => void;
}

const TimesheetTable: React.FC<Props> = ({
  sampleTimesheetData,
  selectedEntries,
  setSelectedEntries,
  toggleEntrySelection,
  formatDate,
  formatCurrency,
  onEmployeeClick,
}) => {
  return (
    <div className="w-full">
      {/* Outer Wrapper - Prevents Left Shift */}
      <div className="relative border border-gray-300 rounded-lg shadow-md overflow-hidden">
        {/* Scrollable Table Wrapper (Does NOT affect sidebar) */}
        <div className="overflow-x-auto" style={{ maxWidth: "calc(100vw - 250px)" }}>
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedEntries(sampleTimesheetData.map(entry => entry.id));
                      } else {
                        setSelectedEntries([]);
                      }
                    }}
                    checked={selectedEntries.length === sampleTimesheetData.length}
                  />
                </th>
                <th className="px-4 py-3 whitespace-nowrap">Employee Name</th>
                <th className="px-4 py-3 whitespace-nowrap">Client Employee ID</th>
                <th className="px-4 py-3 whitespace-nowrap">Billable Hours</th>
                <th className="px-4 py-3 whitespace-nowrap">OT Hours</th>
                <th className="px-4 py-3 whitespace-nowrap">Duration</th>
                <th className="px-4 py-3 whitespace-nowrap">Client Invoice ID</th>
                <th className="px-4 py-3 whitespace-nowrap">Employee Owned By</th>
                <th className="px-4 py-3 whitespace-nowrap">Expense Value</th>
                <th className="px-4 py-3 whitespace-nowrap">OT Rate/Hr</th>
                <th className="px-4 py-3 whitespace-nowrap">Billable Rate/Hr</th>
                <th className="px-4 py-3 whitespace-nowrap">Total Billable</th>
                <th className="px-4 py-3 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleTimesheetData.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      checked={selectedEntries.includes(entry.id)}
                      onChange={() => toggleEntrySelection(entry.id)}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onEmployeeClick(entry.employeeName);
                      }}
                      className="text-purple-600 hover:text-purple-900 hover:underline cursor-pointer"
                    >
                      {entry.employeeName}
                    </a>
                  </td>
                  <td className="px-4 py-4">{entry.clientEmployeeId}</td>
                  <td className="px-4 py-4">
                    <div className="w-32">
                      <div className="bg-gray-200 rounded-full h-2 mb-1">
                        <div
                          className="bg-green-500 rounded-full h-2"
                          style={{ width: `${(entry.billableHours.current / entry.billableHours.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {entry.billableHours.current}/{entry.billableHours.total} hrs
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">{entry.otHours} hrs</td>
                  <td className="px-4 py-4">{formatDate(entry.startDate)} - {formatDate(entry.endDate)}</td>
                  <td className="px-4 py-4">{entry.clientInvoiceId}</td>
                  <td className="px-4 py-4">{entry.employeeOwnedBy}</td>
                  <td className="px-4 py-4">₹ {entry.expenseValue}</td>
                  <td className="px-4 py-4">₹ {entry.otRatePerHour}</td>
                  <td className="px-4 py-4">₹ {entry.billableRatePerHour}</td>
                  <td className="px-4 py-4">{formatCurrency(entry.totalBillable)}</td>
                  <td className="px-4 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                        <X className="h-4 w-4" />
                      </button>
                      <button className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200">
                        <Check className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimesheetTable;