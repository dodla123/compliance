import React from "react";
import logoUrl from "../../assets/avatars/buzzworks-logo-1.png";
import { Card, Typography } from "antd";
import  ItemTable  from './itemsTable'; // Import your table component
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";


const invoiceIndivData = [
  {
    key: '1',
    itemdescription: 'Software Development Service',
    quantity: '1',
    price: '₹ 50,000',
    totalAmount: '₹ 50,000',
  },
];

const { Text, Title } = Typography;

interface AddressCardProps {
  companyName: string;
  companyAddress: string[];
  companyEmail: string;
  companyPhone: string;
  clientName: string;
  clientAddress: string[];
}

const AddressCard: React.FC<AddressCardProps> = ({
  companyName,
  companyAddress,
  companyEmail,
  companyPhone,
  clientName,
  clientAddress,
}) => {
  return (
    <Card className="w-500 ml-5 mx-auto shadow-md">
      <Card className="shadow-sm">
        {/* Two-column layout: Left (Logo + Company Details), Right (Invoice Details) */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            {/* Logo */}
            {logoUrl && (
              <div>
                <img src={logoUrl} alt="Company Logo" className="h-16 object-contain" />
              </div>
            )}

            {/* Company Details */}
            <Title level={5} className="mt-4">{companyName}</Title>
            <div className="space-y-1">
              {companyAddress.map((line, index) => (
                <Text key={index} className="block">{line}</Text>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <MailOutlined />
                <Text>{companyEmail}</Text>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <PhoneOutlined />
                <Text>{companyPhone}</Text>
              </div>
            </div>

            {/* Client Details */}
            <div className="border-l-2 border-black pl-4 space-y-1 mt-6">
              <p className="font-medium">Billed to:</p>
              <Title level={5}>{clientName}</Title>
              {clientAddress.map((line, index) => (
                <Text key={index} className="block">{line}</Text>
              ))}
              <Title level={5}>GST: 33AACCB8364P1Z8</Title>
            </div>
          </div>

          {/* Right Section: Invoice Details */}
          <div className="text-right space-y-6">
            <Title level={3}>ST-INV23855</Title>
            <Text>07 Jan 2025</Text><br/>
            <Text>B2B</Text><br/><br/>

            <Text>Tamil Nadu</Text><br/>
            <Text>GST: 34567890trFGVHBJK</Text><br/><br/>

            <Text>PO Number</Text><br/>
            <Text>PO-20250107-001</Text><br/><br/>

            <Text>PO Date</Text><br/>
            <Text>07 Jan 2025</Text><br/><br/>

            <Text>Due Date</Text><br/>
            <Text>07 Jan 2025</Text><br/><br/>

            <Text>HSN</Text><br/>
            <Text>248574</Text>
          </div>
        </div>
      </Card>
        {/* Salary for IT Section */}
        <Title level={3} className="mt-6">Salary for IT</Title>
        {/* <Table columns={columns} dataSource={data} pagination={false} className="mt-4" /> */}
        <ItemTable data={invoiceIndivData} pagination={false} />
    </Card>
  );
};

export default AddressCard;
