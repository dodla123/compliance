import { RiseOutlined, FallOutlined } from "@ant-design/icons";

interface SummaryCardProps {
  title: string;
  number: string;
  percentage: string;
  isRise: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, number, percentage, isRise, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-col p-4 rounded-2xl shadow bg-white 
        ${isSelected ? "border-4 border-purple-700" : "border-2 border-gray-300 bg-white"} 
        hover:border-4 hover:border-purple-700 hover:bg-white-100`}
      onClick={onClick}
    >
      <h3 className="text-base text-black-700 mb-3">{title}</h3>
      <p className="text-3xl font-bold mb-4">{number}</p>
      <div className={`flex items-center gap-2 ${isRise ? "text-green-600" : "text-red-600"}`}>
        {isRise ? <RiseOutlined className="text-xl" /> : <FallOutlined className="text-xl" />}
        <span className="font-semibold">{percentage}</span>
        <span className="text-sm text-gray-500">vs last month</span>
      </div>
    </div>
  );
};

export default SummaryCard;



