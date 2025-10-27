import { Table } from "antd";
import { CheckOutlined, ClockCircleOutlined, TagOutlined, MoreOutlined } from "@ant-design/icons";

// Define Type for the Data
type StatusType = "Success" | "Pending" | "Tagged";

interface StatusData {
    key: string;
    name: string;
    avatar: string;
    position: string;
    employeeId: string;
    createdOn: string;
    complianceState: string;
    esicNumber: string;
    status: "Success" | "Pending" | "Tagged" | "Errors"; // Define possible status values
    remarks: string;
  }
  

interface StatusDetailsTableProps {
  data: StatusData[];
}

const StatusDetailsTable: React.FC<StatusDetailsTableProps> = ({ data }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: StatusData) => (
        <div className="flex items-center gap-2">
          <img src={record.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          <div>
            <p className="font-semibold">{text}</p>
            <p className="text-gray-500 text-sm">{record.position}</p>
          </div>
        </div>
      ),
    },
    { title: "Employee ID", dataIndex: "employeeId", key: "employeeId" },
    { title: "Created on", dataIndex: "createdOn", key: "createdOn" },
    { title: "Compliance State", dataIndex: "complianceState", key: "complianceState" },
    { title: "ESIC Number", dataIndex: "esicNumber", key: "esicNumber" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: StatusType) => {
        const statusMap: Record<StatusType, string> = {
          Success: "bg-green-100 text-green-600 border-green-500",
          Pending: "bg-orange-100 text-orange-600 border-orange-500",
          Tagged: "bg-blue-100 text-blue-600 border-blue-500",
        };
        const iconMap: Record<StatusType, JSX.Element> = {
          Success: <CheckOutlined />,
          Pending: <ClockCircleOutlined />,
          Tagged: <TagOutlined />,
        };
        return (
          <span className={`inline-flex items-center gap-1 border rounded-full min-w-fit px-2 py-1 ${statusMap[status]}`}>
            {iconMap[status]} {status}
          </span>
        );
      },
    },
    { title: "Remarks", dataIndex: "remarks", key: "remarks" },
    { title: "", dataIndex: "more", key: "more", render: () => <MoreOutlined /> },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} className="mt-4 border" />;
};

export default StatusDetailsTable;
