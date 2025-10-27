import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  UsergroupAddOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  TagOutlined,
  WarningOutlined,
  RiseOutlined,
  FallOutlined,
  SearchOutlined,
  FilterOutlined,
  VerticalAlignBottomOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Pagination } from "antd";
import StatusDetailsTable from "./StatusDetailsTable"; // Import table component

type StatusDataType = {
  key: string;
  name: string;
  avatar: string;
  position: string;
  employeeId: string;
  createdOn: string;
  complianceState: string;
  esicNumber: string;
  status: "Success" | "Pending" | "Tagged" | "Errors";
  remarks: string;
  
};

const StatusDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, total } = location.state || {};

  const [selectedFilter, setSelectedFilter] = useState<"All" | "Success" | "Pending" | "Tagged" | "Errors">("All");
  

  const data: StatusDataType[] = [
    { key: "1", name: "Olivia Rhyne", avatar: "https://i.pravatar.cc/150?img=1", position: "Product Manager", employeeId: "EMP12345", createdOn: "10 Oct 2024", complianceState: "Tamil Nadu", esicNumber: "987 876 6543", status: "Success", remarks: "Successful" },
    { key: "2", name: "Phoenix Baker", avatar: "https://i.pravatar.cc/150?img=2", position: "Product Manager", employeeId: "EMP12346", createdOn: "10 Oct 2024", complianceState: "Tamil Nadu", esicNumber: "987 876 6543", status: "Pending", remarks: "Bank A/C already exists" },
    { key: "3", name: "Lana Steiner", avatar: "https://i.pravatar.cc/150?img=3", position: "Product Manager", employeeId: "EMP12347", createdOn: "10 Oct 2024", complianceState: "Tamil Nadu", esicNumber: "987 876 6543", status: "Tagged", remarks: "Already exists" },
    { key: "4", name: "Demi Wilkinson", avatar: "https://i.pravatar.cc/150?img=4", position: "Product Manager", employeeId: "EMP12348", createdOn: "10 Oct 2024", complianceState: "Tamil Nadu", esicNumber: "987 876 6543", status: "Success", remarks: "Successful" },
    { key: "5", name: "Candice Wu", avatar: "https://i.pravatar.cc/150?img=5", position: "Product Manager", employeeId: "EMP12349", createdOn: "10 Oct 2024", complianceState: "Tamil Nadu", esicNumber: "987 876 6543", status: "Tagged", remarks: "Already exists" },
  ];

  // Filter data based on the selected filter
  const filteredData = selectedFilter === "All" ? data : data.filter(item => item.status === selectedFilter);

  return (
    <div className="w-full max-w-8xl">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button className="text-gray-600" onClick={() => navigate(-1)}>
          <CloseOutlined className="text-2xl" />
        </button>
      </div>

      <hr className="my-4" />

      {/* Cards Section */}
      <div className="grid grid-cols-5 gap-4">
        {[
          { icon: <UsergroupAddOutlined className="text-purple-600 text-xl" />, text: "Employees onboarded", number: total, circleBg: "bg-purple-100", filter: "All" as const },
          { icon: <CheckOutlined className="text-green-600 text-xl" />, text: "Generated", number: 1290, extra: <span className="flex items-center gap-1 text-green-600 text-lg font-medium"><RiseOutlined /> 70%</span>, circleBg: "bg-green-100", filter: "Success" as const },
          { icon: <ClockCircleOutlined className="text-orange-600 text-xl" />, text: "Pending", number: 2000, extra: <span className="flex items-center gap-1 text-orange-600 text-lg font-medium"><FallOutlined /> 6%</span>, circleBg: "bg-orange-100", filter: "Pending" as const },
          { icon: <TagOutlined className="text-blue-600 text-xl" />, text: "Tagged", number: 167, extra: <span className="flex items-center gap-1 text-blue-600 text-lg font-medium"><FallOutlined /> 6%</span>, circleBg: "bg-blue-100", filter: "Tagged" as const },
          { icon: <WarningOutlined className="text-red-600 text-xl" />, text: "Errors", number: 167, extra: <span className="flex items-center gap-1 text-red-600 text-lg font-medium"><FallOutlined /> 6%</span>, circleBg: "bg-red-100", filter: "Errors" as const },          
        ].map((card, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-lg shadow bg-white flex flex-col gap-3 cursor-pointer ${selectedFilter === card.filter ? "border-2 border-blue-500" : ""}`} 
            onClick={() => setSelectedFilter(card.filter)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${card.circleBg}`}>
                {card.icon}
              </div>
              <p className="font-semibold text-gray text-lg">{card.text}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold text-black">{card.number}</p>
              {card.extra}
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th colSpan={100} className="flex justify-between items-center p-2 border-gray-300 mt-2">
                {/* <div className="flex justify-between items-center"> */}
                  {/* Title + Search */}
                  <div className="flex items-center gap-x-4">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <div className="flex items-center gap-2 ml-8">
                      <SearchOutlined className="text-2xl" />
                      <span>Search</span>
                    </div>
                  </div>

                  {/* Filters and Export Icons */}
                  <div className="flex items-center gap-4">
                    <FilterOutlined className="text-2xl" />
                    <VerticalAlignBottomOutlined className="text-2xl" />
                  </div>
                {/* </div> */}
              </th>
            </tr>
          </thead>

          {/* Table Component */}
          <tbody>
            <StatusDetailsTable data={filteredData} />
          </tbody>
        </table>

        {/* Pagination */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-5 px-6 flex justify-between items-center">
          <Button icon={<ArrowLeftOutlined />} className="flex items-center gap-2 text-lg">
            Previous
          </Button>
          <Pagination defaultCurrent={1} total={100} showSizeChanger={false} />
          <Button icon={<ArrowRightOutlined />} className="flex items-center gap-2 text-lg">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusDetailsPage;
