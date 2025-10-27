import React from 'react';
import { Button, Space } from 'antd';
import { PaperClipOutlined, SendOutlined, FilePdfOutlined, EditOutlined } from '@ant-design/icons';

interface ActionButtonsProps {
  onAttach?: () => void;
  onSend?: () => void;
  onDownload?: () => void;
  onEdit?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onAttach,
  onSend,
  onDownload,
  onEdit,
}) => {
  return (
    <Space className="flex justify-end mb-4">
      <Button icon={<PaperClipOutlined />} onClick={onAttach}>
        Attach File
      </Button>
      <Button icon={<SendOutlined />} onClick={onSend}>
        Send to Client
      </Button>
      <Button icon={<FilePdfOutlined />} onClick={onDownload}>
        Download PDF
      </Button>
      <Button icon={<EditOutlined />} onClick={onEdit}>
        Edit
      </Button>
    </Space>
  );
};

export default ActionButtons;