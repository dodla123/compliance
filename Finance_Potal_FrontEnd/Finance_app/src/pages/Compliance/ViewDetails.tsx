import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Pagination } from "antd";
import { Filter } from "lucide-react";
import { UserOutlined, CheckCircleOutlined, ClockCircleOutlined, TagOutlined, CloseOutlined, WarningOutlined, PlusOutlined, FilterOutlined } from "@ant-design/icons";
import { MediumBody, SemiboldHeader3, Heading } from '../../common_ui/typography';
import StatusDetailsTable from "./ViewDetailsTable";

const ViewDetailsPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(0);
  
  const { title, total } = location.state || {};

  const [selectedFilter, setSelectedFilter] = useState<"All" | "Success" | "Pending" | "Tagged" | "Errors">("All");

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setSelectedFilter(data[index].filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClose = () => {
    window.history.back(); // Or use navigate(-1) if using react-router
  };

  const data = [
    {
      label: "Employees Onboarded",
      count: total,
      filter: "All" as const,
      icon: <UserOutlined style={{ fontSize: 20, color: "#2563EB" }} />,
      iconBg: "bg-blue-100",
    },
    {
      label: "Generated",
      count: 1290,
      filter: "Success" as const,
      icon: <CheckCircleOutlined style={{ fontSize: 20, color: "#16A34A" }} />,
      iconBg: "bg-green-100",
    },
    {
      label: "Pending",
      count: 2000,
      filter: "Pending" as const,
      icon: <ClockCircleOutlined style={{ fontSize: 20, color: "#EA580C" }} />,
      iconBg: "bg-orange-100",
    },
    {
      label: "Tagged",
      count: 167,
      filter: "Tagged" as const,
      icon: <TagOutlined style={{ fontSize: 20, color: "#7C3AED" }} />,
      iconBg: "bg-purple-100",
    },
    {
      label: "Errors",
      count: 67,
      filter: "Errors" as const,
      icon: <WarningOutlined style={{ fontSize: 20, color: "#FF0000" }} />,
      iconBg: "bg-red-100",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Title and Close Icon */}
      <div className="flex justify-between items-center mb-4">
        <Heading text={title} />
        <button
          onClick={handleClose}
          className="hover:text-gray-700 transition"
          aria-label="Close Page"
        >
          <CloseOutlined style={{ fontSize: 24, color: "#000" }} />
        </button>
      </div>

      {/* Cards Row */}
      <div className="flex gap-4 justify-start flex-wrap">
        {data.map((item, index) => {
          return (
          <div
            key={index}
            className={`flex items-center w-[300px] p-[24px] rounded-lg mt-4 cursor-pointer transition-all ${
              selectedCard === index
                ? "bg-[#F9F5FF] border-[1px] border-[#7F56D9]"
                : "bg-[#FFFFFF] border-[1px] border-[#EAECF0]"
            }`}
            onClick={() => handleCardClick(index)}
            aria-label={item.label}
          >
            {/* Left icon */}
            <div className={`p-3 rounded-full ${item.iconBg} flex items-center justify-center`}>
              {item.icon}
            </div>

            {/* Right label + count */}
            <div className="flex flex-col gap-3 justify-center ml-4">
              <MediumBody text={item.label} color="#000" />
              <SemiboldHeader3 text={item.count} color="#000" />
            </div>
          </div>
        );
        })}
      </div>

      {/* Filter and + Icon */}
      <div className="flex items-center gap-3 mt-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-700" />
          <MediumBody text="Filter:" color="#000" />
        </div>
        <div className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-md">
          <PlusOutlined style={{ fontSize: 16, color: "#7C3AED" }} />
        </div>
      </div>

      {/* Header Card with clicked label */}
      <div className="mt-6 p-4 border rounded-lg bg-[#FFFFFF]">
        <SemiboldHeader3 text={data[selectedCard]?.label || "Select a card"} color="#000" />
      </div>

      {/* Table */}
      <div className="mt-4">
        <StatusDetailsTable selectedFilter={data[selectedCard].filter} />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          showSizeChanger={false}
          defaultPageSize={12}
        />
      </div>
    </main>
  );
};

export default ViewDetailsPage;
