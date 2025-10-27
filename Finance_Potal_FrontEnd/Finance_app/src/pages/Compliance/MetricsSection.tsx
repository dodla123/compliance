// import React from "react";

// const DonutChart = ({ data, size = "large" }: { 
//   data: { color: string; percentage: number }[];
//   size?: "large" | "small";
// }) => {
//   let rotation = 0;
//   const chartSize = size === "large" ? "w-68 h-68" : "w-32 h-32";
//   const gapSize = 2; 

//   return (
//     <div className={`relative ${chartSize}`}>
//       <svg viewBox="0 0 100 100" className="w-full h-full">
//         <circle cx="50" cy="50" r="40" fill="white" stroke="#E5E7EB" strokeWidth="20" />
//         {data.map((segment, i) => {
//           const segmentAngle = (segment.percentage / 100) * 360;
//           const dashValue = ((segmentAngle - gapSize) * 251.2) / 360;
//           const currentRotation = rotation;
//           rotation += segmentAngle;

//           return (
//             <circle
//               key={i}
//               cx="50"
//               cy="50"
//               r="40"
//               fill="transparent"
//               stroke={segment.color}
//               strokeWidth="20"
//               strokeDasharray={`${dashValue} 251.2`}
//               strokeDashoffset="0"
//               strokeLinecap="round"
//               transform={`rotate(${currentRotation} 50 50)`}
//             />
//           );
//         })}
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-lg font-semibold text-gray-700">Status</span>
//       </div>
//     </div>
//   );
// };

// export default DonutChart;


import React, { useState } from 'react';
import { Row, Col } from 'antd';
import MetricsCard from './MetricsCard';
import MetricsDetailView from './MetricsDetailView';

interface MetricItem {
  title: string;
  total: number;
  data: Array<{
    status: string;
    percentage: number;
    employees: number;
  }>;
}

interface MetricsSectionProps {
  metrics: MetricItem[];
}

const vibrantColors = ["#5B21B6", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricItem | null>(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const handleViewDetails = (metric: MetricItem) => {
    setSelectedMetric(metric);
    setDetailsVisible(true);
  };

  return (
    <>
      <Row gutter={[24, 24]}>
        {metrics.map((metric, index) => (
          <Col xs={24} lg={12} key={index}>
            <MetricsCard
              title={metric.title}
              total={metric.total}
              chartData={metric.data.map((item, i) => ({
                color: vibrantColors[i % vibrantColors.length],
                percentage: item.percentage,
              }))}
              statuses={metric.data.map((item, i) => ({
                color: vibrantColors[i % vibrantColors.length],
                status: item.status,
                percentage: item.percentage,
                employees: item.employees,
              }))}
              onViewDetails={() => handleViewDetails(metric)}
            />
          </Col>
        ))}
      </Row>

      {selectedMetric && (
        <MetricsDetailView
          visible={detailsVisible}
          onClose={() => setDetailsVisible(false)}
          title={selectedMetric.title}
          data={selectedMetric.data.map((item, i) => ({
            status: item.status,
            color: vibrantColors[i % vibrantColors.length],
            employees: item.employees,
          }))}
        />
      )}
    </>
  );
};

export default MetricsSection;