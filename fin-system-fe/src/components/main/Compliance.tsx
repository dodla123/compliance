import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material"; 
import { Search, Filter, ChevronDown, Calendar } from "lucide-react";
import RemittanceTab from "../../pages/Compliance/RemittanceTab";
import MetricsCard from "../../pages/Compliance/MetricsCard";
import CompanyPaymentCard from "../../pages/Compliance/RemittancePendingCards";
import RemittanceCard from "../../pages/Compliance/RemittanceCard"; // Import SummaryCard component

const vibrantColors = ["#FF6B6B", "#6B5B95", "#FF8C42", "#50C878", "#3A86FF"];

// Simulating API fetch
const fetchComplianceData = async () => {
  return {
    tabs: ["Generalization", "Remittance"],
    legalEntities: 3,
    activeTab: "Generalization",
    metrics: {
      Generalization: [
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

// Company Payment Data
const companyPayments: { [key: string]: any[] } = {
  PF: [
    { companyName: "Reliance Industries", state: "Maharashtra", dueDate: "22 May", amount: 1253000, remittanceType: "PF" },
    { companyName: "TCS", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "PF" },
    { companyName: "Infosys", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "PF" },
    { companyName: "Wipro", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "PF" },
  ],
  ESIC: [
    { companyName: "Infosys", state: "Tamil Nadu", dueDate: "15 May", amount: 670000, remittanceType: "ESIC" },
    { companyName: "Wipro", state: "Delhi", dueDate: "12 May", amount: 540000, remittanceType: "ESIC" },
    { companyName: "Reliance Industries", state: "Maharashtra", dueDate: "22 May", amount: 1253000, remittanceType: "ESIC" },
    { companyName: "TCS", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "ESIC" },
  ],
  PT: [
    { companyName: "TCS", state: "Karnataka", dueDate: "20 May", amount: 890000, remittanceType: "PT" },
    { companyName: "Infosys", state: "Tamil Nadu", dueDate: "17 May", amount: 730000, remittanceType: "PT" },
    { companyName: "HCL", state: "Uttar Pradesh", dueDate: "8 May", amount: 450000, remittanceType: "PT" },
    { companyName: "Wipro", state: "Delhi", dueDate: "10 May", amount: 500000, remittanceType: "PT" },
  ],
  LWF: [
    { companyName: "Wipro", state: "Delhi", dueDate: "10 May", amount: 500000, remittanceType: "LWF" },
    { companyName: "HCL", state: "Uttar Pradesh", dueDate: "8 May", amount: 450000, remittanceType: "LWF" },
    { companyName: "Reliance Industries", state: "Maharashtra", dueDate: "22 May", amount: 1253000, remittanceType: "LWF" },
    { companyName: "TCS", state: "Karnataka", dueDate: "18 May", amount: 950000, remittanceType: "LWF" },
  ],
};

const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Generalization");
  const [complianceData, setComplianceData] = useState<any>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [activeInvoiceTab, setActiveInvoiceTab] = useState<string>("");
  const [timeRange, setTimeRange] = useState<string>("This month");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleTimeRangeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTimeRangeSelect = (option: string) => {
    setTimeRange(option);
    setAnchorEl(null);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedCard(null); // Reset selected card when switching tabs
    setActiveInvoiceTab(""); // Reset invoice tab when switching tabs
  };  

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    setActiveInvoiceTab("Pending"); // Set invoice tab based on clicked card
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchComplianceData();
      setComplianceData(data);
      setActiveTab(data.activeTab);
    };
    getData();
  }, []);

  if (!complianceData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white-100">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold mb-6">Compliance</h1>

        {/* Tabs */}
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

          {/* Dropdowns */}
          <div className="flex gap-4">
            {/* Time Range Dropdown */}
            <div>
              <button
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-black-100"
                onClick={handleTimeRangeClick}
              >
                {timeRange}
                <ChevronDown size={20} />
              </button>

              {/* Menu Dropdown */}
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                {["This month", "Last month", "Last three months", "Last six months", "This year"].map((option) => (
                  <MenuItem key={option} onClick={() => handleTimeRangeSelect(option)}>
                    {option}
                  </MenuItem>
                ))}
                <MenuItem onClick={() => handleTimeRangeSelect("Custom date range")}>
                Custom date range <Calendar size={16} className="ml-2" /> 
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        {/* Remittance Cards for Remittance */}
        {activeTab === "Remittance" && (
          <div className="p-1 rounded-2xl cursor-pointer grid grid-cols-4 gap-6 mb-6">
            {[
              { title: "PF", number: "20,00,000", percentage: "54%", isRise: true },
              { title: "ESIC", number: "20,00,000", percentage: "34%", isRise: false },
              { title: "PT", number: "20,00,000", percentage: "20%", isRise: false },
              { title: "LWF", number: "20,00,000", percentage: "12%", isRise: true },
            ].map((card) => (
              <RemittanceCard
                key={card.title}
                title={card.title}
                number={card.number}
                percentage={card.percentage}
                isRise={card.isRise}
                isSelected={selectedCard === card.title}
                onClick={() => handleCardClick(card.title)}
              />
            ))}
          </div>
        )}

        {/* Metrics Cards Section */}
        <div className="grid grid-cols-2 gap-4">
          {complianceData.metrics[activeTab]?.map((metric: any, index: number) => (
            <MetricsCard
              key={metric.title}
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
              size={activeTab === "Generalization" ? "large" : "small"}
            />
          ))}
        </div>

        {/* InvoiceTab Appears Below Cards at the Left */}
        {selectedCard && (
          <div className="flex items-center justify-between mt-2">
            <div className="inline-block bg-white rounded-lg p-1 shadow-sm border border-black-200">
              <RemittanceTab activeKey={activeInvoiceTab} onChange={setActiveInvoiceTab} />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-black-600 cursor-pointer hover:text-black-900" />
              <Filter className="w-5 h-5 text-black-600 cursor-pointer hover:text-black-900" />
            </div>
          </div>
        )}

        {/* Company Payment Cards */}
        {selectedCard && activeInvoiceTab === "Pending" && (
          <div className="grid grid-cols-3 gap-6 mt-6">
            {companyPayments[selectedCard as keyof typeof companyPayments]?.map((company, index) => (
              <CompanyPaymentCard key={index} {...company} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Compliance;
