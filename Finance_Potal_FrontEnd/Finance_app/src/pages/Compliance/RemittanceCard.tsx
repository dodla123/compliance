import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { MediumBody, SemiboldHeader3 } from '../../common_ui/typography';

interface RemittanceCardProps {
  title: string;
  number: string;
  percentage: string;
  isRise: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const RemittanceCard: React.FC<RemittanceCardProps> = ({
  title,
  number,
  percentage,
  isRise,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center w-[350px] p-[24px] rounded-lg cursor-pointer transition-all
        ${isSelected
          ? "bg-[#F9F5FF] border-[1px] border-[#7F56D9]"
          : "bg-[#FFFFFF] border-[1px] border-[#EAECF0]"}
      `}
      onClick={onClick}
      aria-label={title}
    >
      {/* Text Block */}
      <div className="flex flex-col gap-2 justify-center">
        <MediumBody text={title} color="#000" />
        <SemiboldHeader3 text={number} color="#000" />

        {/* Icon + Percentage + Label */}
        <div className="flex items-center gap-2">
          <div className={`text-xl ${isRise ? "text-green-600" : "text-red-600"}`}>
            {isRise ? <RiseOutlined /> : <FallOutlined />}
          </div>
          <span className={`font-semibold ${isRise ? "text-green-600" : "text-red-600"}`}>
            {percentage}
          </span>
          <span className="text-sm text-gray-500">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default RemittanceCard;

























// import { RiseOutlined, FallOutlined } from "@ant-design/icons";

// interface RemittanceCardProps {
//   title: string;
//   number: string;
//   percentage: string;
//   isRise: boolean;
//   isSelected: boolean;
//   onClick: () => void;
// }

// const RemittanceCard: React.FC<RemittanceCardProps> = ({ 
//   title, 
//   number, 
//   percentage, 
//   isRise, 
//   isSelected, 
//   onClick, 
// }) => {
  
//   return (
//     <div
//       className={`flex flex-col w-[350px] p-[20px] rounded-2xl mt-4 shadow bg-white cursor-pointer transition-all
//         ${isSelected 
//           ? "bg-[#F9F5FF] border-[1px] border-[#7F56D9]" 
//           : "bg-[#FFFFFF] border-[1px] border-[#EAECF0]"}`}
//       onClick={onClick}
//       aria-label={title}
//     >
//       <div className="fflex flex-col gap-3 justify-center ml-4">
//         <h3 className="text-base text-black-700 mb-3">{title}</h3>
//         <p className="text-3xl font-bold mb-4">{number}</p>
//         <div className={`flex items-center gap-2 ${isRise ? "text-green-600" : "text-red-600"}`}>
//           {isRise ? <RiseOutlined className="text-xl" /> : <FallOutlined className="text-xl" />}
//           <span className="font-semibold">{percentage}</span>
//           <span className="text-sm text-gray-500">vs last month</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RemittanceCard;



