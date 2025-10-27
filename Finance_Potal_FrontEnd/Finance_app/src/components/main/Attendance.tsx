import React, { useState } from "react";
import { X } from "lucide-react";
import Cards from "../../pages/Attandence/AttandanceCard";
import TimesheetTable from "../../pages/Attandence/AttandanceTable";

const Attendance: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedEntries, setSelectedEntries] = useState<number[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [activeAttendanceTab, setActiveAttendanceTab] = useState("current");

  const options = ["Timesheets", "Purchase Order", "Invoicing", "Credit Note Tracker"];

  // Stats for the cards
  const stats = {
    totalEmployees: 100,
    acceptedTimesheets: 20,
    rejectedTimesheets: 10
  };

  // Sample Data
  const sampleTimesheetData = [
    {
      id: 1,
      employeeName: "John Doe",
      clientEmployeeId: "EMP123",
      billableHours: { current: 40, total: 50 },
      otHours: 5,
      startDate: "2024-01-01",
      endDate: "2024-01-07",
      clientInvoiceId: "INV001",
      employeeOwnedBy: "HR",
      expenseValue: 5000,
      otRatePerHour: 200,
      billableRatePerHour: 400,
      totalBillable: 20000,
    },
    {
      id: 2,
      employeeName: "John Doe",
      clientEmployeeId: "EMP123",
      billableHours: { current: 40, total: 50 },
      otHours: 5,
      startDate: "2024-01-01",
      endDate: "2024-01-07",
      clientInvoiceId: "INV001",
      employeeOwnedBy: "HR",
      expenseValue: 5000,
      otRatePerHour: 200,
      billableRatePerHour: 400,
      totalBillable: 20000,
    },
    {
      id: 3,
      employeeName: "John Doe",
      clientEmployeeId: "EMP123",
      billableHours: { current: 40, total: 50 },
      otHours: 5,
      startDate: "2024-01-01",
      endDate: "2024-01-07",
      clientInvoiceId: "INV001",
      employeeOwnedBy: "HR",
      expenseValue: 5000,
      otRatePerHour: 200,
      billableRatePerHour: 400,
      totalBillable: 20000,
    },
    {
      id: 4,
      employeeName: "John Doe",
      clientEmployeeId: "EMP123",
      billableHours: { current: 40, total: 50 },
      otHours: 5,
      startDate: "2024-01-01",
      endDate: "2024-01-07",
      clientInvoiceId: "INV001",
      employeeOwnedBy: "HR",
      expenseValue: 5000,
      otRatePerHour: 200,
      billableRatePerHour: 400,
      totalBillable: 20000,
    },
    {
      id: 5,
      employeeName: "John Doe",
      clientEmployeeId: "EMP123",
      billableHours: { current: 40, total: 50 },
      otHours: 5,
      startDate: "2024-01-01",
      endDate: "2024-01-07",
      clientInvoiceId: "INV001",
      employeeOwnedBy: "HR",
      expenseValue: 5000,
      otRatePerHour: 200,
      billableRatePerHour: 400,
      totalBillable: 20000,
    },
  ];

  // Sample attendance data
  const currentAttendanceData = [
    { date: "2024-03-01", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM" },
    { date: "2024-03-02", status: "Present", checkIn: "09:15 AM", checkOut: "06:30 PM" },
    { date: "2024-03-03", status: "Absent", checkIn: "-", checkOut: "-" },
  ];

  const previousAttendanceData = [
    { date: "2024-02-28", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM" },
    { date: "2024-02-27", status: "Present", checkIn: "08:45 AM", checkOut: "05:45 PM" },
    { date: "2024-02-26", status: "Half Day", checkIn: "09:00 AM", checkOut: "02:00 PM" },
  ];

  const toggleEntrySelection = (id: number) => {
    setSelectedEntries((prev) =>
      prev.includes(id) ? prev.filter((entryId) => entryId !== id) : [...prev, id]
    );
  };

  const handleEmployeeClick = (employeeName: string) => {
    setSelectedEmployee(employeeName);
    setIsDrawerOpen(true);
  };

  const formatDate = (date: string) => new Date(date).toLocaleDateString();
  const formatCurrency = (value: number) => `₹${value.toLocaleString()}`;

  const AttendanceTable = ({ data }: { data: any[] }) => (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((record, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.status}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.checkIn}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.checkOut}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="flex-1 min-w-0 h-screen bg-black-50">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-2xl font-bold text-black-800 mb-4">Attendance</h1>

        {/* Search Dropdown */}
        <div className="relative mb-4">
          <div
            className="flex items-center justify-between w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">
                {selectedOption || "Select an option"}
              </span>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full max-w-md mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              {options.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedOption(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Area with Fixed Height and Scrollable Table */}
        <div className="h-[calc(100vh-220px)]">
          {selectedOption === "Timesheets" && (
            <div className="h-full">
              <Cards
                totalEmployees={stats.totalEmployees}
                acceptedTimesheets={stats.acceptedTimesheets}
                rejectedTimesheets={stats.rejectedTimesheets}
              />
              <div className="mt-6 h-[calc(100%-180px)] overflow-auto border border-gray-200 rounded-lg bg-white">
                <div className="min-w-[800px]">
                  <TimesheetTable
                    sampleTimesheetData={sampleTimesheetData}
                    selectedEntries={selectedEntries}
                    setSelectedEntries={setSelectedEntries}
                    toggleEntrySelection={toggleEntrySelection}
                    formatDate={formatDate}
                    formatCurrency={formatCurrency}
                    onEmployeeClick={handleEmployeeClick}
                  />
                </div>
              </div>
            </div>
          )}
          {selectedOption && selectedOption !== "Timesheets" && (
            <div className="h-full flex items-center justify-center text-gray-500">
              {selectedOption} content will be displayed here
            </div>
          )}
        </div>

        {/* Employee Attendance Drawer */}
        {isDrawerOpen && (
          <div className="fixed inset-y-0 right-0 w-[700px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Drawer Header */}
            <div className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">{selectedEmployee}</h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Attendance Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeAttendanceTab === "current"
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveAttendanceTab("current")}
                >
                  Current Attendance
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeAttendanceTab === "history"
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveAttendanceTab("history")}
                >
                  Previous Attendance History
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 overflow-auto h-[calc(100%-120px)]">
              {activeAttendanceTab === "current" ? (
                <AttendanceTable data={currentAttendanceData} />
              ) : (
                <AttendanceTable data={previousAttendanceData} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;


























// import React, { useState } from "react";
// import Cards from "../../pages/Attandence/AttandanceCard";
// import TimesheetTable from "../../pages/Attandence/AttandanceTable";
// import Tabs from "../../pages/Attandence/AttandanceTab"; // Adjust the path based on your folder structure

// const Attendance: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("insights");
//   const [selectedEntries, setSelectedEntries] = useState<number[]>([]);

//   // Stats for the cards
//   const stats = {
//     totalEmployees: 100,
//     acceptedTimesheets: 20,
//     rejectedTimesheets: 10
//   };

//   // Sample Data
//   const sampleTimesheetData = [
//     {
//       id: 1,
//       employeeName: "John Doe",
//       clientEmployeeId: "EMP123",
//       billableHours: { current: 40, total: 50 },
//       otHours: 5,
//       startDate: "2024-01-01",
//       endDate: "2024-01-07",
//       clientInvoiceId: "INV001",
//       employeeOwnedBy: "HR",
//       expenseValue: 5000,
//       otRatePerHour: 200,
//       billableRatePerHour: 400,
//       totalBillable: 20000,
//     },
//     {
//       id: 2,
//       employeeName: "John Doe",
//       clientEmployeeId: "EMP123",
//       billableHours: { current: 40, total: 50 },
//       otHours: 5,
//       startDate: "2024-01-01",
//       endDate: "2024-01-07",
//       clientInvoiceId: "INV001",
//       employeeOwnedBy: "HR",
//       expenseValue: 5000,
//       otRatePerHour: 200,
//       billableRatePerHour: 400,
//       totalBillable: 20000,
//     },
//     {
//       id: 3,
//       employeeName: "John Doe",
//       clientEmployeeId: "EMP123",
//       billableHours: { current: 40, total: 50 },
//       otHours: 5,
//       startDate: "2024-01-01",
//       endDate: "2024-01-07",
//       clientInvoiceId: "INV001",
//       employeeOwnedBy: "HR",
//       expenseValue: 5000,
//       otRatePerHour: 200,
//       billableRatePerHour: 400,
//       totalBillable: 20000,
//     },
//     {
//       id: 4,
//       employeeName: "John Doe",
//       clientEmployeeId: "EMP123",
//       billableHours: { current: 40, total: 50 },
//       otHours: 5,
//       startDate: "2024-01-01",
//       endDate: "2024-01-07",
//       clientInvoiceId: "INV001",
//       employeeOwnedBy: "HR",
//       expenseValue: 5000,
//       otRatePerHour: 200,
//       billableRatePerHour: 400,
//       totalBillable: 20000,
//     },
//     {
//       id: 5,
//       employeeName: "John Doe",
//       clientEmployeeId: "EMP123",
//       billableHours: { current: 40, total: 50 },
//       otHours: 5,
//       startDate: "2024-Jan-01",
//       endDate: "2024-Apr-07",
//       clientInvoiceId: "INV001",
//       employeeOwnedBy: "HR",
//       expenseValue: 5000,
//       otRatePerHour: 200,
//       billableRatePerHour: 400,
//       totalBillable: 20000,
//     },
//     {
//       id: 6,
//       employeeName: "John Doe",
//       clientEmployeeId: "EMP123",
//       billableHours: { current: 40, total: 50 },
//       otHours: 5,
//       startDate: "2024-Jan-01",
//       endDate: "2024-Apr-07",
//       clientInvoiceId: "INV001",
//       employeeOwnedBy: "HR",
//       expenseValue: 5000,
//       otRatePerHour: 200,
//       billableRatePerHour: 400,
//       totalBillable: 20000,
//     },
    
//   ];

//   const toggleEntrySelection = (id: number) => {
//     setSelectedEntries((prev) =>
//       prev.includes(id) ? prev.filter((entryId) => entryId !== id) : [...prev, id]
//     );
//   };

//   const formatDate = (date: string) => new Date(date).toLocaleDateString();
//   const formatCurrency = (value: number) => `₹${value.toLocaleString()}`;

//   return (
//     <div className="flex-1 min-w-0 h-screen overflow-hidden">
//       <div className="max-w-[1440px] mx-auto">
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Attendance</h1>

//         {/* Tabs Component */}
//         <Tabs onTabChange={setActiveTab} />

//         {/* Tab Content */}
//         <div className="h-[calc(100vh-120px)] overflow-hidden">
//           <div className="h-full overflow-y-auto">
//             <div className="min-w-[800px] w-full">
//               {activeTab === "insights" && <div>Insights Content</div>}
//               {activeTab === "timesheet" && (
//                 <div className="space-y-6">
//                   <Cards
//                     totalEmployees={stats.totalEmployees}
//                     acceptedTimesheets={stats.acceptedTimesheets}
//                     rejectedTimesheets={stats.rejectedTimesheets}
//                   />
//                   <div className="overflow-x-auto">
//                     <div className="inline-block min-w-full align-middle">
//                       <TimesheetTable
//                         sampleTimesheetData={sampleTimesheetData}
//                         selectedEntries={selectedEntries}
//                         setSelectedEntries={setSelectedEntries}
//                         toggleEntrySelection={toggleEntrySelection}
//                         formatDate={formatDate}
//                         formatCurrency={formatCurrency}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {activeTab === "purchase-order" && <div>Purchase Order Content</div>}
//               {activeTab === "invoicing" && <div>Invoicing Content</div>}
//               {activeTab === "credit-tracker" && <div>Credit Note Tracker Content</div>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Attendance;









