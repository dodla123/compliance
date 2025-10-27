'use client';
import React from 'react';
// import { getIcon } from '../../common_ui/finicons';
import { Table, TableColumnsType } from 'antd';
import { MoreOutlined } from "@ant-design/icons" 

interface StatusDetailsTableProps {
  selectedFilter: "All" | "Success" | "Pending" | "Tagged" | "Errors";
}

interface DataType {
  key: React.Key;
  employee_name_and_title: {
    name: string;
    designation: string;
  };
  employee_id: string;
  created_on: string;
  compliance_state: string;
  esic_number: string;
  status: "Success" | "Pending" | "Tagged" | "Errors";
  remarks: string;
  action: any;
}

const StatusDetailsTable: React.FC<StatusDetailsTableProps> = ({ selectedFilter }) => {

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Success':
        return 'bg-green-100 text-green-700';
      case 'Tagged':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRemarksByStatus = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'Bank A/C already exists';
      case 'Success':
        return 'Successful';
      case 'Tagged':
        return 'Already exists';
      default:
        return '';
    }
  };

  const data: DataType[] = [
    {
      key: '1',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Success',
      remarks: getRemarksByStatus('Success'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '2',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Pending',
      remarks: getRemarksByStatus('Pending'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '3',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Tagged',
      remarks: getRemarksByStatus('Tagged'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '4',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Pending',
      remarks: getRemarksByStatus('Pending'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '5',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Success',
      remarks: getRemarksByStatus('Success'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '6',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Tagged',
      remarks: getRemarksByStatus('Tagged'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '7',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Success',
      remarks: getRemarksByStatus('Success'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '8',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Pending',
      remarks: getRemarksByStatus('Pending'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
    {
      key: '9',
      employee_name_and_title: {
        name: 'Bessie Cooper',
        designation: 'Product Designer',
      },
      employee_id: 'EMP12345',
      created_on: '10 April 2024',
      compliance_state: 'Tamil Nadu',
      esic_number: '987 675 7654',
      status: 'Tagged',
      remarks: getRemarksByStatus('Tagged'),
      action: <div className='cursor-pointer'><MoreOutlined /></div>,
    },
  ];

  const filteredData = selectedFilter === "All"
    ? data
    : data.filter(item => item.status === selectedFilter);

  const columns2: TableColumnsType<DataType> = [
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Name</p>,
      dataIndex: 'employee_name_and_title',
      render: (data: { name: string; designation: string }) => (
        <div>
          <p className='text-[#7F56D9]'>{data.name}</p>
          <p className='text-[#475467]'>{data.designation}</p>
        </div>
      ),
      fixed: 'left',
      width: 300,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Employee ID</p>,
      dataIndex: 'employee_id',
      width: 100,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Created On</p>,
      dataIndex: 'created_on',
      width: 200,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Compliance State</p>,
      dataIndex: 'compliance_state',
      width: 200,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>ESIC Number</p>,
      dataIndex: 'esic_number',
      width: 200,
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Status</p>,
      dataIndex: 'status',
      width: 200,
      render: (status: string) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(status)}`}>
          {status}
        </span>
      ),
    },
    {
      title: <p className='text-[12px] text-[#000000] font-normal'>Remarks</p>,
      dataIndex: 'remarks',
      width: 200,
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      fixed: 'right',
      width: 90,
    },
  ];

  return (
    <div className='p-[2px]'>
      <div className='grid w-full'>
        <div className='overflow-hidden'>
          <Table
            pagination={false}
            columns={columns2}
            dataSource={filteredData}
            scroll={{ x: 800 }}
            bordered={false}
          />
        </div>
      </div>
    </div>
  );
};

export default StatusDetailsTable;





// import { Table } from "antd";
// import { CheckOutlined, ClockCircleOutlined, TagOutlined, MoreOutlined } from "@ant-design/icons";

// // Define Type for the Data
// type StatusType = "Success" | "Pending" | "Tagged";

// interface StatusData {
//     key: string;
//     name: string;
//     avatar: string;
//     position: string;
//     employeeId: string;
//     createdOn: string;
//     complianceState: string;
//     esicNumber: string;
//     status: "Success" | "Pending" | "Tagged" | "Errors"; // Define possible status values
//     remarks: string;
//   }
  

// interface StatusDetailsTableProps {
//   data: StatusData[];
// }

// const StatusDetailsTable: React.FC<StatusDetailsTableProps> = ({ data }) => {
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text: string, record: StatusData) => (
//         <div className="flex items-center gap-2">
//           <img src={record.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
//           <div>
//             <p className="font-semibold">{text}</p>
//             <p className="text-gray-500 text-sm">{record.position}</p>
//           </div>
//         </div>
//       ),
//     },
//     { title: "Employee ID", dataIndex: "employeeId", key: "employeeId" },
//     { title: "Created on", dataIndex: "createdOn", key: "createdOn" },
//     { title: "Compliance State", dataIndex: "complianceState", key: "complianceState" },
//     { title: "ESIC Number", dataIndex: "esicNumber", key: "esicNumber" },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status: StatusType) => {
//         const statusMap: Record<StatusType, string> = {
//           Success: "bg-green-100 text-green-600 border-green-500",
//           Pending: "bg-orange-100 text-orange-600 border-orange-500",
//           Tagged: "bg-blue-100 text-blue-600 border-blue-500",
//         };
//         const iconMap: Record<StatusType, JSX.Element> = {
//           Success: <CheckOutlined />,
//           Pending: <ClockCircleOutlined />,
//           Tagged: <TagOutlined />,
//         };
//         return (
//           <span className={`inline-flex items-center gap-1 border rounded-full min-w-fit px-2 py-1 ${statusMap[status]}`}>
//             {iconMap[status]} {status}
//           </span>
//         );
//       },
//     },
//     { title: "Remarks", dataIndex: "remarks", key: "remarks" },
//     { title: "", dataIndex: "more", key: "more", render: () => <MoreOutlined /> },
//   ];

//   return <Table columns={columns} dataSource={data} pagination={false} className="mt-4 border" />;
// };

// export default StatusDetailsTable;