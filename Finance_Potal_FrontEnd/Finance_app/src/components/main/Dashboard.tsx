import React, { useState, useEffect } from 'react';
import { ProfileSection } from '../../pages/Dashboard/ProfileSection';
import { StatusOverview } from '../../pages/Dashboard/StatusOverview';
import { RecentActivities } from '../../pages/Dashboard/RecentActivities';
import { PriorityBreakdown } from '../../pages/Dashboard/PriorityBreakdown';
import { WorkTypes } from '../../pages/Dashboard/WorkTypes';

function Dashboard() {
  const [greeting, setGreeting] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');
  
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };

    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      setCurrentDateTime(now.toLocaleDateString('en-US', options));
    };

    updateGreeting();
    updateDateTime();

    const interval = setInterval(() => {
      updateGreeting();
      updateDateTime();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const statusData = {
    completed: { value: 24, color: '#22c55e', percentage: '55%' },
    inProgress: { value: 12, color: '#eab308', percentage: '27%' },
    pending: { value: 8, color: '#ef4444', percentage: '18%' },
  };

  const priorityData = [
    { label: 'High', value: 35, color: '#ef4444' },
    { label: 'Medium', value: 45, color: '#eab308' },
    { label: 'Low', value: 20, color: '#22c55e' },
  ];

  const activities = [
    { title: 'Compliance Report Updated', time: '2 hours ago' },
    { title: 'New Policy Added', time: '4 hours ago' },
    { title: 'Risk Assessment Completed', time: '1 day ago' },
    { title: 'Security Audit Completed', time: '2 days ago' },
  ];

  const workTypes = [
    { type: 'Policy Review', count: 15 },
    { type: 'Risk Assessment', count: 8 },
    { type: 'Compliance Audit', count: 12 },
    { type: 'Training', count: 5 },
  ];

  return (
    // <div className="min-h-screen via-sky-50 to-emerald-50">
      <div className="max-w-8xl">
        <ProfileSection greeting={greeting} currentDateTime={currentDateTime} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-1">
          <StatusOverview statusData={statusData} />
          <RecentActivities activities={activities} />
          <PriorityBreakdown priorityData={priorityData} />
          <WorkTypes workTypes={workTypes} />
        </div>
      </div>
    // </div>
  );
}

export default Dashboard;


























// import React from 'react';
// import { PageHeader } from '../../common_ui/pageHeader';
// import { DashboardCard } from '../../common_ui/Card';
// import InvoicePaidCard from '../../pages/Dashboard/Invoicecard';
// import avatar from "../../assets/avatars/avatar-2.webp";
// import UpdateCard from '../../pages/Dashboard/updateCard';
// import { PlusOutlined } from '@ant-design/icons';

// const Dashboard: React.FC = () => {
//   // Define comment for Accenture
//   const getCommentForAccenture = (name: string, date: string) => (
//     <div className="w-11/12 ml-auto mr-3 mt-6">
//       <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-6 relative">
//         <img
//           src={avatar}
//           alt="Avatar"
//           className="w-9 h-9 rounded-full absolute left-[-35px] top-1 transform -translate-y-1/2"
//         />
//         <p className="text-gray-700 text-sm">
//           Company cannot pay for Alcohol. Please revise the Invoice.
//         </p>
//       </div>
//       <div className="text-gray-500 text-xs mt-1 ml-2">
//         <span className="font-semibold">{name}</span> • {date}
//       </div>
//     </div>
//   );

//   // Array of updates
//   const updates = [
//     { title: "#INV-01267", amount: "₹ 20,000", company: "Tata motors", status: "Paid", color: "#4CAF50" },
//     { title: "#INV-01224", amount: "₹ 40,000", company: "Accenture plc", status: "Pending", color: "#FFA500", getComment: getCommentForAccenture },
//     { title: "INV-02445", amount: "₹ 1,56,436", company: "Buzzworks", status: "Finalized by client", color: "blue" },
//     { title: "INV-415994", amount: "₹ 70,000", company: "Tayota", status: "Paid", color: "#4CAF50" },
//     { title: "#INV-01267", amount: "₹ 50,000", company: "HDFC", status: "Pending", color: "purple" },
//   ];

//   // Array of card details
//   const cardDetails = [
//     { title: "Invoice pending", content: 12, amount: "₹ 10,65,674" },
//     { title: "Drafted", content: 2, amount: "₹ 23,460" },
//     { title: "Invoice overdue", content: 5, amount: "₹ 12,765" },
//   ];

//   return (
//     <div className="p-2">
//       <PageHeader
//         title="Good morning!"
//         text="Raise Invoice"
//         showRaiseInvoice={true}
//         onRaiseInvoice={() => alert('Invoice Raised')}
//         icon={<PlusOutlined />} // Icon passed to button
//       />

//       {/* Cards section */}
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {cardDetails.map((card, index) => (
//           <DashboardCard key={index} title={card.title} content={card.content} amount={card.amount} />
//         ))}

//         {/* Invoice Paid Card */}
//         <div className="col-span-1 sm:col-span-2 md:col-span-2 w-full">
//           <InvoicePaidCard />
//         </div>

//         {/* Updates Section */}
//         <div className="col-span-1 w-full">
//           <h1 className="text-3xl font-semibold text-gray-800 mt-2 mb-4">Updates</h1>
//           <div className="w-full space-y-4">
//             {updates.map((update, index) => (
//               <UpdateCard
//                 key={index}
//                 title={update.title}
//                 amount={update.amount}
//                 company={update.company}
//                 status={update.status}
//                 color={update.color}
//                 getComment={update.company === "Accenture plc" ? () => getCommentForAccenture("John Doe", "02 Jan 2025") : null}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
