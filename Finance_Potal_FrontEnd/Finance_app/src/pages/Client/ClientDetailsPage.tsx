import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageHeader } from '../../common_ui/pageHeader';
import avatar from "../../assets/avatars/avatar-2.webp";
import Avatar from "../../assets/avatars/avatar";
import UpdateCard from '../../pages/Client/updateCard';
import AddClientForm from '../../pages/Client/AddClientForm';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { ArrowLeft, Phone, Mail, Copy, Send, Check, CircleDollarSign, FileText, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const clientData = [
  {
    key: '1',
    customer: 'Kuehne Nagel',
    // avatar: 'https://via.placeholder.com/50',
    gstState: 'Delhi',
    clientType: 'B2B',
    poc: { name: 'John Doe', designation: 'Manager', avatar: 'https://via.placeholder.com/40' },
    receivables: '₹10,000',
    email: 'abc@example.com',
    phone: '+91 9876543568',
    address: '123, Business Street, Delhi',
    currency: 'INR',
    invoices: 24,
    tunnels: 2,
  },
  {
    key: '2',
    customer: 'XYZ Ltd',
    avatar: 'https://via.placeholder.com/50',
    gstState: 'Maharashtra',
    clientType: 'B2B',
    poc: { name: 'Jane Smith', designation: 'Director', avatar: 'https://via.placeholder.com/40' },
    receivables: '₹20,000',
    email: 'xyz@example.com',
    phone: '+91 9876543210',
    address: '456, Market Lane, Mumbai',
    currency: 'INR',
    invoices: 18,
    tunnels: 3,
  },
];

const incomeData = [
  { month: "Aug 2024", income: 20000 },
  { month: "Sep 2024", income: 40000 },
  { month: "Oct 2024", income: 60000 },
  { month: "Nov 2024", income: 80000 },
  { month: "Dec 2024", income: 100000 },
  { month: "Jan 2024", income: 120000 },
];

// Function to format income as "20k", "40k", etc.
const formatIncome = (value: number) => `${value / 1000}k`;

const getCommentForSTIN01266 = (name: string, date: string) => (
  <div className="w-11/12 ml-auto mr-3 mt-6">
    <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-6 relative">
      <img
        src={avatar}
        alt="Avatar"
        className="w-9 h-9 rounded-full absolute left-[-35px] top-1 transform -translate-y-1/2"
      />
      <p className="text-gray-700 text-sm">
        Company cannot pay for Alcohol. Please revise the Invoice.
      </p>
    </div>
    <div className="text-gray-500 text-xs mt-1 ml-2">
      <span className="font-semibold">{name}</span> • {date}
    </div>
  </div>
);

// Array of updates
const updates = [
  { title: "ST-IN01267", amount: "₹ 20,000", company: "22 jan 2025", status: "Paid", color: "#4CAF50" },
  { title: "ST-IN01266", amount: "₹ 20,000", company: "22 jan 2025", status: "Pending", color: "#FFA500", getComment: getCommentForSTIN01266 },
  { title: "SW-IN01236", amount: "₹ 1,56,436", company: "22 jan 2025", status: "Finalized by client", color: "blue" },
  { title: "INV-01267", amount: "₹ 20,000", company: "22 jan 2025", status: "Paid", color: "#4CAF50" },
  { title: "#INV-01267", amount: "₹ 1,56,436", company: "22 jan 2025", status: "Finalized by client", color: "blue" },
  { title: "#INV-93859", amount: "₹ 1,56,436", company: "22 jan 2025", status: "Finalized by client", color: "blue" },
];

const ClientDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);



  useEffect(() => {
    const foundClient = clientData.find((c) => c.key === id);
    setClient(foundClient || null);
  }, [id]);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setShowCopyTooltip(true);
    setTimeout(() => setShowCopyTooltip(false), 2000);
  };

  if (!client) {
    return <div className="text-center text-red-500">Client not found</div>;
  }

  return (
    <div className="max-w-100 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-4 mr-4">
          <button
            onClick={() => navigate('/clients')}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <div className="p-2 rounded-full bg-blue-100 mr-2">
              <ArrowLeft size={12} />
            </div>
            <span className="font-medium">Back to Clients</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <Avatar initials="KV" /> {/* Avatar component */}
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{client.customer}</h1>
              <span className="text-gray-600 text-sm">Kuehne Nagel PVT LTD.</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
            <PageHeader
            // title="Clients"
            text="Add new client"
            showRaiseInvoice={true}
            onRaiseInvoice={() => setIsDrawerOpen(true)}
            icon={<PlusOutlined />}
            />
            <button className="w-full flex items-center justify-center space-x-2 px-3 py-1 border border-black text-black-600 rounded-lg hover:bg-white-50 transition-colors mt-2">
            <EditOutlined size={14} />
            <span>Edit Client</span>
            </button>
          </div>
        </div>

        <hr className="my-6" />

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <div className="flex space-x-4">
            {/* Phone */}
            <div
              className="relative group border border-black px-2 py-[2px] rounded flex items-center space-x-1 text-blue-600 cursor-pointer w-fit text-sm"
              onClick={() => handleCopy(client.phone)}
            >
              <Phone size={14} />
              <span>{client.phone}</span>
              <div className="hidden group-hover:flex items-center space-x-1 absolute right-0 top-full mt-1 bg-black text-white px-2 py-[2px] rounded">
                <Copy size={12} />
                <span className="text-xs">Copy</span>
              </div>
            </div>

            {/* Email */}
            <div className="relative group border border-black px-2 py-[2px] rounded flex items-center space-x-1 text-blue-600 cursor-pointer w-fit text-sm">
              <Mail size={14} />
              <span>{client.email}</span>
              <div className="hidden group-hover:flex items-center space-x-1 absolute right-0 top-full mt-1">
                <button
                  onClick={() => handleCopy(client.email)}
                  className="flex items-center space-x-1 bg-black text-white px-2 py-[2px] rounded"
                >
                  <Copy size={12} />
                  <span className="text-xs">Copy</span>
                </button>
                <a
                  href={`mailto:${client.email}`}
                  className="flex items-center space-x-1 bg-black text-white px-2 py-[2px] rounded"
                >
                  <Send size={12} />
                  <span className="text-xs">Send email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Client Details Card */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">More Details</h2>
                <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Client Type</span>
                  <span>B2B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Currency</span>
                  <span>INR ₹</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>GST Number</span>
                  <span>27AABCU1234F</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>GST Type</span>
                  <span>18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>GST Location</span>
                  <span>DELHI1234E</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Billing & Shipping Address</h2>
              {/* <p className="text-gray-600">{client.billingAddress}</p> */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {client.poc.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">Kuehne Nagel PVT LTD.</div>
                    <div className="text-sm text-gray-500">Nokia Siemens Plant, Oragadam,<br />Kancheepuram, Tamil Nadu, India-631001 </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white p-6 rounded-lg shadow"> */}
                <h2 className="text-xl font-semibold mb-4">Point of Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-blue-600">
                        {client.poc.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{client.poc.name}</div>
                      <div className="text-sm text-gray-500">{client.poc.designation}</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    {/* <h2 className="text-xl font-semibold mb-4">Contact</h2> */}
                    <div className="flex space-x-4">
                      {/* Phone */}
                      <div
                        className="relative group border border-black px-2 py-[2px] rounded flex items-center space-x-1 text-blue-600 cursor-pointer w-fit text-sm"
                        onClick={() => handleCopy(client.phone)}
                      >
                        <Phone size={14} />
                        <span>{client.phone}</span>
                        <div className="hidden group-hover:flex items-center space-x-1 absolute right-0 top-full mt-1 bg-black text-white px-2 py-[2px] rounded">
                          <Copy size={12} />
                          <span className="text-xs">Copy</span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative group border border-black px-2 py-[2px] rounded flex items-center space-x-1 text-blue-600 w-fit text-sm">
                        <Mail size={14} />
                        <span>{client.email}</span>
                        <div className="hidden group-hover:flex items-center space-x-1 absolute right-0 top-full mt-1">
                          <button
                            onClick={() => handleCopy(client.email)}
                            className="flex items-center space-x-1 bg-black text-white px-2 py-[2px] rounded"
                          >
                            <Copy size={12} />
                            <span className="text-xs">Copy</span>
                          </button>
                          <a
                            href={`mailto:${client.email}`}
                            className="flex items-center space-x-1 bg-black text-white px-2 py-[2px] rounded"
                          >
                            <Send size={12} />
                            <span className="text-xs">Send email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg -mt-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <CircleDollarSign size={24} className="text-gray-600" />
                    <h2 className="text-xl font-semibold">Total Income</h2>
                  </div>
                  <select className="border rounded-lg px-3 py-2">
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </select>

                </div>
                {/* Bar Chart */}
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={incomeData}>
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={formatIncome} />
                      <Tooltip />
                      <Bar dataKey="income" fill="#6366F1" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
              </div>

              {/* <div className="bg-white p-6 rounded-lg shadow"> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-white rounded-full shadow">
                      <FileText size={22} className="text-blue-600" />
                    </div>  
                    <h2 className="text-xl font-semibold">Invoices</h2>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      24
                    </span>
                  </div>
                  <div className="relative">
                    <div className="border border-blue-500 p-2 rounded">
                      <Filter size={20} className="text-blue-500" />
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full space-y-4">
                    {updates.map((update, index) => (
                      <UpdateCard
                        key={index}
                        title={update.title}
                        amount={update.amount}
                        company={update.company}
                        status={update.status}
                        color={update.color}
                        getComment={update.title === "ST-IN01266" ? () => getCommentForSTIN01266("John Doe", "02 Jan 2025") : null}
                      />
                    ))}
                  </div>
              </div>
            </div>

          {/* Copy Tooltip */}
          {showCopyTooltip && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <div className="p-1 bg-green-500 rounded-full">
                <Check size={16} />
              </div>
              <span>Copied to clipboard</span>
            </div>
          )}
          <AddClientForm open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>    
  );
};

export default ClientDetailsPage;
