import React from 'react';
import { Tag } from 'antd';
import { CheckCircle, XCircle, RotateCcw, Clock } from 'lucide-react';

interface StatusTagProps {
  status: string;
  className?: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ status, className = '' }) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return {
          color: 'green',
          icon: <CheckCircle className="w-4 h-4" />,
        };
      case 'cancelled':
        return {
          color: 'red',
          icon: <XCircle className="w-4 h-4" />,
        };
      case 'refunded':
        return {
          color: 'default',
          icon: <RotateCcw className="w-4 h-4" />,
        };
      case 'pending':
        return {
          color: 'orange',
          icon: <Clock className="w-4 h-4" />,
        };
      default:
        return {
          color: 'default',
          icon: null,
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Tag
      color={config.color}
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-base ${className}`}
    >
      {config.icon}
      {status}
    </Tag>
  );
};

export default StatusTag;