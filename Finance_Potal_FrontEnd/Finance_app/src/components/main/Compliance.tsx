import React, { useState, useEffect, useRef } from "react";
import { Dropdown, Menu as AntMenu, Button } from "antd";
import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import { Search, Filter } from "lucide-react";
import RemittanceTab from "../../pages/Compliance/RemittanceTab";
import MetricsCard from "../../pages/Compliance/MetricsCard";
import { Heading } from '../../common_ui/typography';
import RemittancePendingTable from "../../pages/Compliance/RemittancePendingTable";
import RemittanceCard from "../../pages/Compliance/RemittanceCard";

const vibrantColors = ["#FF6B6B", "#6B5B95", "#FF8C42", "#50C878", "#3A86FF"];

const timeOptions = [
  "This month",
  "Last month",
  "Last three months",
  "Last six months",
  "This year",
  "Custom date range",
];

// Simulating API fetch
const fetchComplianceData = async () => {
  return {
    tabs: ["General", "Remittance"],
    legalEntities: 3,
    activeTab: "General",
    metrics: {
      General: [
        {
          title: "UAN Generation Status",
          total: 8473,
          data: [
            { status: "Pending", percentage: 32, employees: 2000 },
            { status: "Errors", percentage: 12, employees: 1017 },
            { status: "Generated", percentage: 56, employees: 5456 },
          ],
        },
        {
          title: "ESIC Generation Status",
          total: 8473,
          data: [
            { status: "Pending", percentage: 25, employees: 2118 },
            { status: "Errors", percentage: 10, employees: 847 },
            { status: "Generated", percentage: 45, employees: 3813 },
            { status: "Tagged", percentage: 20, employees: 1695 },
          ],
        },
      ],
    },
  };
};

interface CompanyPayment {
  companyName: string;
  state: string;
  dueDate?: string;
  paidDate?: string;
  amount: number;
  remittanceType: "PF" | "ESIC" | "PT" | "LWF";
}

interface PaymentStatus {
  pending: CompanyPayment[];
  paid: CompanyPayment[];
}

type RemittanceType = "PF" | "ESIC" | "PT" | "LWF";

const companyPayments: Record<RemittanceType, PaymentStatus> = {
  PF: {
    pending: [
      { companyName: "Reliance Industries", state: "Maharashtra", dueDate: "22 May", amount: 1253000, remittanceType: "PF" },
      { companyName: "TCS", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "PF" },
      { companyName: "Infosys", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "PF" },
      { companyName: "Wipro", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "PF" },
    ],
    paid: [
      { companyName: "Tech Mahindra", state: "Maharashtra", paidDate: "15 May", amount: 875000, remittanceType: "PF" },
      { companyName: "HCL", state: "Uttar Pradesh", paidDate: "12 May", amount: 720000, remittanceType: "PF" },
      { companyName: "Cognizant", state: "Tamil Nadu", paidDate: "10 May", amount: 980000, remittanceType: "PF" },
    ]
  },
  ESIC: {
    pending: [
      { companyName: "Infosys", state: "Tamil Nadu", dueDate: "15 May", amount: 670000, remittanceType: "ESIC" },
      { companyName: "Wipro", state: "Delhi", dueDate: "12 May", amount: 540000, remittanceType: "ESIC" },
      { companyName: "Reliance Industries", state: "Maharashtra", dueDate: "22 May", amount: 1253000, remittanceType: "ESIC" },
      { companyName: "TCS", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "ESIC" },
    ],
    paid: [
      { companyName: "Tech Mahindra", state: "Maharashtra", paidDate: "14 May", amount: 580000, remittanceType: "ESIC" },
      { companyName: "HCL", state: "Uttar Pradesh", paidDate: "11 May", amount: 430000, remittanceType: "ESIC" },
    ]
  },
  PT: {
    pending: [
      { companyName: "TCS", state: "Karnataka", dueDate: "20 May", amount: 890000, remittanceType: "PT" },
      { companyName: "Infosys", state: "Tamil Nadu", dueDate: "17 May", amount: 730000, remittanceType: "PT" },
      { companyName: "HCL", state: "Uttar Pradesh", dueDate: "8 May", amount: 450000, remittanceType: "PT" },
      { companyName: "Wipro", state: "Delhi", dueDate: "10 May", amount: 500000, remittanceType: "PT" },
    ],
    paid: [
      { companyName: "Tech Mahindra", state: "Maharashtra", paidDate: "13 May", amount: 620000, remittanceType: "PT" },
      { companyName: "Cognizant", state: "Tamil Nadu", paidDate: "9 May", amount: 550000, remittanceType: "PT" },
      { companyName: "Accenture", state: "Karnataka", paidDate: "7 May", amount: 780000, remittanceType: "PT" },
    ]
  },
  LWF: {
    pending: [
      { companyName: "Wipro", state: "Delhi", dueDate: "10 May", amount: 500000, remittanceType: "LWF" },
      { companyName: "HCL", state: "Uttar Pradesh", dueDate: "8 May", amount: 450000, remittanceType: "LWF" },
      { companyName: "Reliance Industries", state: "Maharashtra", dueDate: "22 May", amount: 1253000, remittanceType: "LWF" },
      { companyName: "TCS", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "LWF" },
    ],
    paid: [
      { companyName: "Tech Mahindra", state: "Maharashtra", paidDate: "12 May", amount: 320000, remittanceType: "LWF" },
      { companyName: "Cognizant", state: "Tamil Nadu", paidDate: "8 May", amount: 280000, remittanceType: "LWF" },
    ]
  },
};

const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("General");
  const [complianceData, setComplianceData] = useState<any>(null);
  const [selectedCard, setSelectedCard] = useState<RemittanceType | null>(null);
  const [activeInvoiceTab, setActiveInvoiceTab] = useState<string>("Pending");
  const [timeRange, setTimeRange] = useState<string>("This month");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);

  const handleTimeRangeSelect = (option: string) => {
    setTimeRange(option);
    setAnchorEl(null);
  };

  const handleTimeRangeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const timeMenu = (
    <AntMenu
      onClick={({ key }) => handleTimeRangeSelect(key)}
      items={timeOptions.map((option) => ({
        key: option,
        label: (
          <div className="flex items-center">
            {option}
            {option === "Custom date range" && <CalendarOutlined style={{ marginLeft: 8 }} />}
          </div>
        ),
      }))}
    />
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedCard(null);
    setActiveInvoiceTab("Pending");
  };

  const handleCardClick = (title: RemittanceType) => {
    setSelectedCard(title);
    setActiveInvoiceTab("Pending");
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchComplianceData();
      setComplianceData(data);
      setActiveTab(data.activeTab);
    };
    getData();

    if (buttonRef.current) {
      setDropdownWidth(buttonRef.current.clientWidth);
    }
  }, []);

  if (!complianceData) return <div>Loading...</div>;

  const renderPaymentCards = () => {
    if (!selectedCard || !activeInvoiceTab) return null;

    const status = activeInvoiceTab.toLowerCase() as 'pending' | 'paid';
    const data = companyPayments[selectedCard][status];
    
    return (
      <RemittancePendingTable 
        data={data}
        status={status}
        remittanceType={selectedCard}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white-100">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <Heading text='Compliance' />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            {complianceData.tabs.map((tab: string) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === tab
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black-600 hover:bg-black-100"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <Dropdown overlay={timeMenu} trigger={['click']} overlayStyle={{ width: dropdownWidth }}>
            <Button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-black-100" ref={buttonRef}>
              {timeRange}
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>

        {activeTab === "Remittance" && (
          <div className="flex gap-4 justify-start flex-wrap">
            {[
              { title: "PF" as const, number: "20,00,000", percentage: "54%", isRise: true },
              { title: "ESIC" as const, number: "20,00,000", percentage: "34%", isRise: false },
              { title: "PT" as const, number: "20,00,000", percentage: "20%", isRise: false },
              { title: "LWF" as const, number: "20,00,000", percentage: "12%", isRise: true },
            ].map((item, index) => (
              <RemittanceCard
                key={index}
                title={item.title}
                number={item.number}
                percentage={item.percentage}
                isRise={item.isRise}
                isSelected={selectedCard === item.title}
                onClick={() => handleCardClick(item.title)}
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {complianceData.metrics[activeTab]?.map((metric: any, index: number) => (
            <MetricsCard
              key={index}
              title={metric.title}
              total={metric.total}
              chartData={metric.data.map((item: any, i: number) => ({
                color: vibrantColors[i % vibrantColors.length],
                percentage: item.percentage,
              }))}
              statuses={metric.data.map((item: any, i: number) => ({
                color: vibrantColors[i % vibrantColors.length],
                status: item.status,
                percentage: item.percentage,
                employees: item.employees,
              }))}
              size={activeTab === "General" ? "large" : "small"}
            />
          ))}
        </div>

        {selectedCard && (
          <div className="flex items-center justify-between mt-2">
            <div className="inline-block bg-white rounded-lg p-1 shadow-sm border border-black-200">
              <RemittanceTab activeKey={activeInvoiceTab} onChange={setActiveInvoiceTab} />
            </div>

            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-black-600 cursor-pointer hover:text-black-900" />
              <Filter className="w-5 h-5 text-black-600 cursor-pointer hover:text-black-900" />
            </div>
          </div>
        )}

        {renderPaymentCards()}
      </div>
    </div>
  );
};

export default Compliance;
