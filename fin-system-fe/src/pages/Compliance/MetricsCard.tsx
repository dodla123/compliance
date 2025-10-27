import { useNavigate } from "react-router-dom";
import DonutChart from "./DonutChart";
import StatusCard from "./StatusCard";

const MetricsCard = ({
  title,
  total,
  chartData,
  statuses,
  size = "large", // Default size is "large"
}: {
  title: string;
  total: number;
  chartData: { color: string; percentage: number }[];
  statuses: { color: string; status: string; percentage: number; employees: number }[];
  size?: "large" | "small";
}) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-white rounded-lg shadow-lg ${size === "large" ? "p-6" : "p-3"}`}>
      <div className="flex justify-between items-center">
        <h3 className={`${size === "large" ? "text-xl" : "text-sm"} font-semibold`}>{title}</h3>
        <button
          className={`text-purple-600 border border-purple-600 ${
            size === "large" ? "px-4 py-2 text-sm" : "px-2 py-0.5 text-xs"
          } rounded-lg`}
          onClick={() => navigate("/status-details", { state: { title, total, chartData, statuses } })}
        >
          View Details
        </button>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className={`text-center ${size === "large" ? "text-xl" : "text-sm"} font-semibold mb-4`}>
        Total Employees: {total.toLocaleString()}
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex flex-col items-center gap-6">
        <DonutChart data={chartData} size={size} />
        <div className="grid grid-cols-2 gap-4 w-full">
          {statuses.map((status, index) => (
            <StatusCard key={index} {...status} size={size} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;

