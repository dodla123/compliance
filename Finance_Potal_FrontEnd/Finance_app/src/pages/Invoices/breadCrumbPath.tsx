import React from "react";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";

interface BreadcrumbItem {
  title: string;
  path?: string;
}

interface BreadcrumbPathProps {
  items: BreadcrumbItem[];
}

const BreadcrumbPath: React.FC<BreadcrumbPathProps> = ({ items }) => {
  return (
    <Breadcrumb separator={<RightOutlined />}>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.path ? (
            <a href={item.path}>{item.title}</a>
          ) : (
            item.title
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbPath;
