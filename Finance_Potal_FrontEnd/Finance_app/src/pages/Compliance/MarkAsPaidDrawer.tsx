import React, { useState } from "react";
import { Drawer, Upload, Button, Typography, Divider, Space, Alert, Tag } from "antd";
import { InfoCircleOutlined, FileTextOutlined, CloseOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

const { Title, Text } = Typography;

interface MarkAsPaidDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  state: string;
  dueDate: string;
  amount: number;
  remittanceType: "PF" | "ESIC" | "PT" | "LWF";
}

const MarkAsPaidDrawer: React.FC<MarkAsPaidDrawerProps> = ({
  isOpen,
  onClose,
  companyName,
  state,
  dueDate,
  amount,
  remittanceType
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // Determine what to show (Company Name or State)
  const entityName = remittanceType === "PF" ? companyName : state;

  // Get tag color based on remittance type
  const getTagColor = () => {
    switch (remittanceType) {
      case "PF":
        return "blue";
      case "ESIC":
        return "green";
      case "PT":
        return "orange";
      case "LWF":
        return "purple";
      default:
        return "default";
    }
  };

  const handleUploadChange = ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
    setFileList(newFileList);
  };

  return (
    <Drawer
      title={
        <div className="flex justify-between items-center">
          <Title level={4} style={{ margin: 0 }}>Mark as Paid</Title>
          <Button 
            type="text" 
            icon={<CloseOutlined />} 
            onClick={onClose}
            className="hover:bg-gray-100 rounded-full"
          />
        </div>
      }
      placement="right"
      onClose={onClose}
      open={isOpen}
      width={600}
      className="mark-as-paid-drawer"
      closeIcon={null}
      footer={
        <div className="flex justify-end">
          <Button type="primary" size="large" className="bg-purple-600 hover:bg-purple-700">
            Mark as Paid
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Payment Details Card */}
        <div className="bg-white rounded-lg">
          <Space direction="vertical" size="middle" className="w-full">
            <div className="flex justify-between items-start">
              <div>
                <Tag color={getTagColor()} className="mb-2">
                  {remittanceType} Remittance
                </Tag>
                <Text className="block text-gray-600">{entityName}</Text>
              </div>
              <div className="text-right">
                <Text className="block text-2xl font-semibold">
                  ₹ {amount.toLocaleString()}
                </Text>
                <Text type="secondary">Due: {dueDate}</Text>
              </div>
            </div>
          </Space>
        </div>

        <Divider />

        {/* Upload Section */}
        <Alert
          message="Upload the payment receipt here to mark as 'Paid.'"
          type="info"
          showIcon
          icon={<InfoCircleOutlined className="text-blue-500" />}
          className="mb-4"
        />

        <Upload.Dragger
          fileList={fileList}
          onChange={handleUploadChange}
          accept=".pdf,.png,.jpg"
          maxCount={1}
          className="w-full"
        >
          <p className="ant-upload-drag-icon">
            <FileTextOutlined className="text-4xl text-gray-400" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for PDF, PNG, JPG files
          </p>
        </Upload.Dragger>
      </div>
    </Drawer>
  );
};

export default MarkAsPaidDrawer;
