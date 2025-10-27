import React from 'react';
import { Card, Typography, Space, Progress, Row, Col, Button } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const { Title, Text } = Typography;

interface ChartDataItem {
  color: string;
  percentage: number;
}

interface StatusItem {
  color: string;
  status: string;
  percentage: number;
  employees: number;
}

interface MetricsCardProps {
  title: string;
  total: number;
  chartData: ChartDataItem[];
  statuses: StatusItem[];
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  total,
  chartData,
  statuses,
}) => {
  const navigate = useNavigate();
  
  const chartOptions = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const data = {
    labels: statuses.map(status => status.status),
    datasets: [
      {
        data: chartData.map(item => item.percentage),
        backgroundColor: chartData.map(item => item.color),
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const handleViewDetails = () => {
    navigate('/metrics-details', { 
      state: { 
        title,
        total,
        statuses 
      }
    });
  };

  return (
    <Card 
      className="metrics-card h-full shadow-sm hover:shadow-md transition-shadow duration-300"
      title={
        <div className="flex justify-between items-center py-1">
          <Title level={5} className="mb-0 text-gray-800">{title}</Title>
          <Text className="text-gray-500">Total: {total.toLocaleString()}</Text>
        </div>
      }
      bordered={false}
    >
      <Row gutter={[24, 0]} className="mt-2">
        <Col xs={24} md={8} className="flex justify-center">
          <div style={{ height: '200px', width: '200px', position: 'relative' }}>
            <Doughnut data={data} options={chartOptions} />
            <div 
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}
            >
              <Text strong className="text-3xl text-gray-800">
                {total.toLocaleString()}
              </Text>
              <div className="text-sm text-gray-500">Employees</div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} md={16}>
          <Space direction="vertical" className="w-full" size="middle">
            {statuses.map((status, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <Text className="flex items-center">
                    <span 
                      className="inline-block w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: status.color }}
                    />
                    {status.status}
                  </Text>
                  <Space size="middle">
                    <Text className="text-gray-500">{status.employees.toLocaleString()}</Text>
                    <Text strong>{status.percentage}%</Text>
                  </Space>
                </div>
                <Progress 
                  percent={status.percentage} 
                  showInfo={false}
                  strokeColor={status.color}
                  size="small"
                  className="mb-2"
                />
              </div>
            ))}
          </Space>
          <Button 
            type="link" 
            className="flex items-center mt-4 text-purple-600 hover:text-purple-700"
            onClick={handleViewDetails}
          >
            View Details
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default MetricsCard;


























// import { useNavigate } from "react-router-dom";
// import DonutChart from "./DonutChart";
// import StatusCard from "./StatusCard";

// const MetricsCard = ({
//   title,
//   total,
//   chartData,
//   statuses,
//   size = "large", // Default size is "large"
// }: {
//   title: string;
//   total: number;
//   chartData: { color: string; percentage: number }[];
//   statuses: { color: string; status: string; percentage: number; employees: number }[];
//   size?: "large" | "small";
// }) => {
//   const navigate = useNavigate();

//   return (
//     <div className={`bg-white rounded-lg shadow-lg ${size === "large" ? "p-6" : "p-3"}`}>
//       <div className="flex justify-between items-center">
//         <h3 className={`${size === "large" ? "text-xl" : "text-sm"} font-semibold`}>{title}</h3>
//         <button
//           className={`text-purple-600 border border-purple-600 ${
//             size === "large" ? "px-4 py-2 text-sm" : "px-2 py-0.5 text-xs"
//           } rounded-lg`}
//           onClick={() => navigate("/status-details", { state: { title, total, chartData, statuses } })}
//         >
//           View Details
//         </button>
//       </div>
//       <div className="border-t border-gray-200 my-4"></div>
//       <div className={`text-center ${size === "large" ? "text-xl" : "text-sm"} font-semibold mb-4`}>
//         Total Employees: {total.toLocaleString()}
//       </div>
//       <div className="border-t border-gray-200 my-4"></div>
//       <div className="flex flex-col items-center gap-6">
//         <DonutChart data={chartData} size={size} />
//         <div className="grid grid-cols-2 gap-4 w-full">
//           {statuses.map((status, index) => (
//             <StatusCard key={index} {...status} size={size} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MetricsCard;

