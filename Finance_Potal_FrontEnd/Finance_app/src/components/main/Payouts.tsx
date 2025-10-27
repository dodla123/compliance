import { useState } from 'react';
import { Button, Pagination } from 'antd';
import { Filter } from "lucide-react";
import { MediumBody, SemiboldHeader4, Heading, SemiboldHeader5, MediumLarge } from '../../common_ui/typography';
import PayoutTable from '../../pages/Payouts/PayoutTable';
import { useNavigate } from 'react-router-dom';
import { WalletOutlined, ClockCircleOutlined, CheckOutlined, ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';


const payoutData: PayoutDataType[] = [
  {
    key: '1',
    costCenter: 'DST',
    client: 'Kuehne Nagel PVT LTD.',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    dueDate: dayjs('2025-02-07').format('DD MMM YYYY'),
    paidOn: dayjs('2025-01-10').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Paid',
    email: 'kuehne@gmail.com',
  },
  {
    key: '2',
    costCenter: 'IT',
    client: 'Tayota',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    dueDate: dayjs('2025-02-07').format('DD MMM YYYY'),
    paidOn: dayjs('2025-01-11').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Paid',
    email: 'Erica.s@tayota.com',
  },
  {
    key: '3',
    costCenter: 'Overseas',
    client: 'Demi Wilkinson',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    dueDate: dayjs('2025-01-15').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Overdue',
    email: 'demi@untitledui.com',
  },
  {
    key: '4',
    costCenter: 'Non-IT',
    client: 'Candice Wu',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    dueDate: dayjs('2025-01-20').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Pending',
    email: 'candice@untitledui.com',
  },
  {
    key: '5',
    costCenter: 'Software Servies',
    client: 'Natali Craig',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Pending',
    email: 'natali@untitledui.com',
  },
  {
    key: '6',
    costCenter: 'Non-IT',
    client: 'drew Cano',
    invoice: 'ST-INV23855',
    date: dayjs('2025-01-07').format('DD MMM YYYY'),
    invoiceAmount: '₹ 100,665.80',
    status: 'Paid',
    email: 'drew@untitledui.com',
  },
];

// Card details
const cardDetails = [
  { 
    title: 'Total payouts', 
    content: 12, 
    amount: '₹ 10,65,674',
    icon: <WalletOutlined style={{ fontSize: 20, color: "#2563EB" }} />,
    iconBg: "bg-blue-100",
    filter: "All"
  },
  { 
    title: 'Pending', 
    content: 2, 
    amount: '₹ 23,460', 
    icon: <ClockCircleOutlined style={{ fontSize: 20, color: "#EA580C" }} />,
    iconBg: "bg-orange-100",
    filter: "Pending"
  },
  { 
    title: 'Paid', 
    content: 5, 
    amount: '₹ 12,765', 
    icon: <CheckOutlined style={{ fontSize: 20, color: "#16A34A" }} />,
    iconBg: "bg-green-100",
    filter: "Paid"
  },
  { 
    title: 'Overdue', 
    content: 5, 
    amount: '₹ 12,765', 
    icon: <ExclamationCircleOutlined style={{ fontSize: 20, color: "#FF0000" }} />,
    iconBg: "bg-red-100",
    filter: "Overdue"
  },
];

const PayoutPage = () => {
  const [activeTable, setActiveTable] = useState('Total payouts');
  const [currentPage, setCurrentPage] = useState(1);  // added state for current page
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Paid" | "Pending" | "Overdue">("All");

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setSelectedFilter(cardDetails[index].filter);
    setCurrentPage(1);  // reset to first page when card is clicked
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClientClick = (clientId: string, clientName: string) => {
    navigate(`/client/${clientId}`, { 
      state: { 
        clientName,
        clientData: payoutData.find(item => item.key === clientId)
      } 
    });
  };

  // Function to filter data based on the selected filter
  const filteredData = () => {
    if (selectedFilter === 'All') {
      return payoutData;
    } else {
      return payoutData.filter(item => item.status === selectedFilter);
    }
  };


  return (
    <main className="flex flex-col">
      {/* Title and Close Icon */}
      <div className="p-[2px]">
        <div className="flex items-center justify-between">
          <Heading text="Payouts" />
          <Button
            type="primary"
            onClick={() => console.log('Invoice button clicked')}
          >
            Raise Payouts
          </Button>
        </div>
        
        {/* Cards Row */}
        <div className="flex gap-4 justify-start flex-wrap">
          {cardDetails.map((item, index) => {
            return (
            <div
              key={index}
              className={`flex items-center w-[340px] p-[24px] rounded-lg mt-4 cursor-pointer transition-all ${
                selectedCard === index
                  ? "bg-[#F9F5FF] border-[1px] border-[#7F56D9]"
                  : "bg-[#FFFFFF] border-[1px] border-[#EAECF0]"
              }`}
              onClick={() => handleCardClick(index)}
              aria-label={item.title}
            >
              {/* Left icon */}
              <div className={`p-3 rounded-full ${item.iconBg} flex items-center justify-center`}>
                {item.icon}
              </div>

              {/* Right label + count */}
              <div className="flex flex-col gap-3 justify-center ml-4">
                <MediumLarge text={item.title} color="#000" />
                <MediumBody text={item.content} color="#000" />
                <MediumLarge text={item.amount} color="#000" />
              </div>
            </div>
          );
          })}
        </div>

        {/* Filter and + Icon */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-700" />
            <MediumBody text="Filter:" color="#000" />
          </div>
          <div className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-md">
            <PlusOutlined style={{ fontSize: 16, color: "#7C3AED" }} />
          </div>
        </div>

        {/* Header Card with clicked label */}
        <div className="mt-6 p-4 border rounded-lg bg-[#FFFFFF]">
          <SemiboldHeader4 text={cardDetails[selectedCard]?.title || "Select a card"} color="#000" />
        </div>

        {/* Table */}
        <div className="mt-4">
          <PayoutTable selectedFilter={selectedFilter} data={filteredData()} activeTable={activeTable} />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            showSizeChanger={false}
            defaultPageSize={12}
          />
        </div>
      </div> 
    </main>  
  );
};

export default PayoutPage;
