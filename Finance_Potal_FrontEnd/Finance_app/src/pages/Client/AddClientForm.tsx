import React, { useState } from 'react';
import { Building2, MapPin, User, X, ArrowLeft, Trash2, Plus } from 'lucide-react';
import clsx from 'clsx';
import { Drawer, Form, Input, Select, Button, Checkbox, Divider, Typography, Space } from 'antd';
interface AddClientFormProps {
  open: boolean;
  onClose: () => void;
}

interface Contact {
  id: string;
  name: string;
  contact: string;
  email: string;
  designation: string;
}

const AddClientForm: React.FC<AddClientFormProps> = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sameAsBilling, setSameAsBilling] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: '',
      contact: '',
      email: '',
      designation: '',
    },
  ]);

  const steps = [
    {
      title: 'Client Details',
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: 'Add Address',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: 'Point of Contact',
      icon: <User className="w-6 h-6" />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addContact = () => {
    setContacts([
      ...contacts,
      {
        id: Date.now().toString(),
        name: '',
        contact: '',
        email: '',
        designation: '',
      },
    ]);
  };

  const removeContact = (id: string) => {
    if (contacts.length > 1) {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  };

  const renderClientDetailsForm = () => (
    <Form layout="vertical">
            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Client Type" required>
                <Select
                  placeholder="Select client type"
                  className="w-full"
                  options={[
                    { value: 'business', label: 'Business' },
                    { value: 'individual', label: 'Individual' },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Currency" required>
                <Select
                  placeholder="Select currency"
                  className="w-full rounded-lg"
                  options={[
                    { value: 'USD', label: 'USD' },
                    { value: 'EUR', label: 'EUR' },
                    { value: 'GBP', label: 'GBP' },
                    { value: 'INR', label: 'INR' },
                  ]}
                />
              </Form.Item>
            </div>

            <Form.Item label="GST Number" extra="If applicable">
              <Input placeholder="Enter GST number" className="w-full" />
            </Form.Item>

            <Form.Item label="Company Name" required>
              <Input placeholder="Enter company name" className="w-full" />
            </Form.Item>

            <Form.Item label="Display Name" required>
              <Input placeholder="Enter display name" className="w-full" />
            </Form.Item>

            <Form.Item label="GST Type" required>
              <Select
                placeholder="Select GST type"
                className="w-full"
                options={[
                  { value: 'regular', label: 'Regular' },
                  { value: 'composition', label: 'Composition' },
                  { value: 'exempt', label: 'Exempt' },
                ]}
              />
            </Form.Item>

            <Form.Item label="TAN Number">
              <Input placeholder="Enter TAN number" className="w-full" />
            </Form.Item>

            <Form.Item label="Email Address" required>
              <Input type="email" placeholder="Enter email address" className="w-full" />
            </Form.Item>

            <Form.Item label="Phone" required>
              <Input placeholder="Enter phone number" className="w-full" />
            </Form.Item>
          </Form>
  );      

  const renderAddressForm = () => (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Add Billing Address</h3>
      <Divider />
      <Form layout="vertical">
        <Form.Item label="Address Line 1" required>
          <Input placeholder="Enter address line 1" />
        </Form.Item>
        <Form.Item label="Address Line 2">
          <Input placeholder="Enter address line 2" />
        </Form.Item>
        <Form.Item label="Pincode" required>
          <Input placeholder="Enter pincode" />
        </Form.Item>
        <Form.Item label="City" required>
          <Input placeholder="Enter city" />
        </Form.Item>
        <Form.Item label="State" required>
          <Select 
            placeholder="Select state"
            className="w-full rounded-lg"
            options={[
              { value: 'maharashtra', label: 'Maharashtra' },
              { value: 'karnataka', label: 'Karnataka' },
              { value: 'delhi', label: 'Delhi' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Select 
            placeholder="Select country"
            className="w-full rounded-lg"
            options={[
              { value: 'IN', label: 'India' },
              { value: 'US', label: 'United States' },
              { value: 'UK', label: 'United Kingdom' },
            ]}
          />
        </Form.Item>
      </Form>
      <h3 className="text-lg font-medium text-gray-900">Add Shipping Address</h3>
      <Divider />
      <Checkbox
        checked={sameAsBilling}
        onChange={(e) => setSameAsBilling(e.target.checked)}
      >
        Same as billing address
      </Checkbox>
      {!sameAsBilling && (
        <Form layout="vertical">
          <Form.Item label="Address Line 1" required>
            <Input placeholder="Enter address line 1" />
          </Form.Item>
          <Form.Item label="Address Line 2">
            <Input placeholder="Enter address line 2" />
          </Form.Item>
          <Form.Item label="Pincode" required>
            <Input placeholder="Enter pincode" />
          </Form.Item>
          <Form.Item label="City" required>
            <Input placeholder="Enter city" />
          </Form.Item>
          <Form.Item label="State" required>
            <Select 
              placeholder="Select state"
              className="w-full rounded-lg"
              options={[
                { value: 'maharashtra', label: 'Maharashtra' },
                { value: 'karnataka', label: 'Karnataka' },
                { value: 'delhi', label: 'Delhi' },
              ]}
            />
          </Form.Item>
          <Form.Item label="Country">
            <Select 
              placeholder="Select country"
              className="w-full rounded-lg"
              options={[
                { value: 'IN', label: 'India' },
                { value: 'US', label: 'United States' },
                { value: 'UK', label: 'United Kingdom' },
              ]}
            />
          </Form.Item>
        </Form>
      )}
    </div>
  );


  const renderContactForm = () => (
    <div className="space-y-6">
      {contacts.map((contact, index) => (
        <div key={contact.id} className="space-y-4">
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input
                placeholder="Enter name"
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {contacts.length > 1 && (
                <Button
                  type="link"
                  onClick={() => removeContact(contact.id)}
                  icon={<Trash2 className="h-5 w-5" />}
                  className="ml-2 text-gray-400 hover:text-gray-500"
                />
              )}
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Contact Number">
                <Input
                  type="tel"
                  placeholder="Enter contact number"
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </Form.Item>
            </div>

            <Form.Item label="Designation">
              <Select
                placeholder="Select designation"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {[
                  { value: 'manager', label: 'Manager' },
                  { value: 'director', label: 'Director' },
                  { value: 'executive', label: 'Executive' },
                ].map(option => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
      ))}
    {/* </div> */}

      <button
        type="button"
        onClick={addContact}
        className="flex items-center text-blue-600 hover:text-blue-700"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Contact
      </button>
    </div>
  );

  return open ? (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="relative w-screen max-w-2xl">
            <div className="h-full flex flex-col bg-white shadow-xl">
              {/* Header */}
              <div className="px-6 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Add New Client</h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Steps */}
                <div className="mt-8 flex items-center justify-between w-full relative">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative z-10">
                      <div
                        className={clsx(
                          "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-200",
                          index <= currentStep
                            ? "border-blue-500 bg-blue-50 text-blue-500"
                            : "border-gray-300 bg-white text-gray-400"
                        )}
                      >
                        {step.icon}
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-900">{step.title}</span>
                      {index < steps.length - 1 && (
                        <div
                          className={clsx(
                            "absolute top-6 left-full h-[2px] transition-colors duration-200",
                            index < currentStep ? "bg-blue-500" : "bg-gray-300"
                          )}
                          style={{ width: 'calc(100% + 4rem)', transform: 'translateX(1rem)' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <form className="space-y-6">
                  {currentStep === 0 && renderClientDetailsForm()}
                  {currentStep === 1 && renderAddressForm()}
                  {currentStep === 2 && renderContactForm()}
                </form>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </button>
                  )}
                  <div className="flex-1" />
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {currentStep === steps.length - 1 ? 'Save & Review' : 'Next'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddClientForm;






























// import React from 'react';
// import { Button, Drawer, Form, Input, Select, Space, Divider, Typography } from 'antd';
// import { HomeOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';

// const { Title } = Typography;

// const AddClientForm: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
//   const [currentStep, setCurrentStep] = React.useState(0);

//   const steps = [
//     {
//         title: <span className="ml-[18px]">Client Details</span>, // Moves text slightly to the left
//         icon: (
//         <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-300 rounded-md 
//                         hover:bg-blue-500 hover:text-white transition duration-300 ml-4">
//           <HomeOutlined className="text-lg" />
//         </div>
//       ),
//     },
//     {
//       title: 'Add Address',
//       icon: (
//         <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-300 rounded-md 
//                         hover:bg-blue-500 hover:text-white transition duration-300">
//           <EnvironmentOutlined className="text-lg" />
//         </div>
//       ),
//     },
//     {
//       title: 'Point of Contact',
//       icon: (
//         <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-300 rounded-md 
//                         hover:bg-blue-500 hover:text-white transition duration-300">
//           <UserOutlined className="text-lg" />
//         </div>
//       ),
//     },
//   ];
  
  

//   return (
//     <Drawer
//       title={
//         <div className="flex justify-between items-center">
//           <Title level={5} className="!mb-0">Add New Client</Title>
//           <Button type="text" onClick={onClose} />
//         </div>
//       }
//       placement="right"
//       onClose={onClose}
//       open={open}
//       width={600}
//       className="rounded-lg"
//     >
//       {/* Step Indicator with Horizontal Line Between Steps */}
//       <div className="mb-8 flex items-center justify-between w-full relative">
//         {steps.map((step, index) => (
//           <div key={index} className="flex items-center relative">
//             {/* Step Icon & Title */}
//             <div className={`flex flex-col items-center ${index <= currentStep ? 'text-blue-500' : 'text-black-400'}`}>
//               {step.icon}
//               <span className="text-sm mt-1 whitespace-nowrap">{step.title}</span>
//             </div>

//             {/* Horizontal Line (Only Between Steps) */}
//             {index < steps.length - 1 && (
//               <div className="absolute left-full top-[30%] transform -translate-y-1/2 w-40 h-0.5 bg-gray-300"></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <Form layout="vertical">
//         <div className="grid grid-cols-2 gap-4">
//           <Form.Item label="Client Type" required>
//             <Select
//               placeholder="Select client type"
//               className="w-full"
//               options={[
//                 { value: 'business', label: 'Business' },
//                 { value: 'individual', label: 'Individual' },
//               ]}
//             />
//           </Form.Item>

//           <Form.Item label="Currency" required>
//             <Select
//               placeholder="Select currency"
//               className="w-full rounded-lg"
//               options={[
//                 { value: 'USD', label: 'USD' },
//                 { value: 'EUR', label: 'EUR' },
//                 { value: 'GBP', label: 'GBP' },
//                 { value: 'INR', label: 'INR' },
//               ]}
//             />
//           </Form.Item>
//         </div>

//         <Form.Item label="GST Number" extra="If applicable">
//           <Input placeholder="Enter GST number" className="w-full" />
//         </Form.Item>

//         <Form.Item label="Company Name" required>
//           <Input placeholder="Enter company name" className="w-full" />
//         </Form.Item>

//         <Form.Item label="Display Name" required>
//           <Input placeholder="Enter display name" className="w-full" />
//         </Form.Item>

//         <Form.Item label="GST Type" required>
//           <Select
//             placeholder="Select GST type"
//             className="w-full"
//             options={[
//               { value: 'regular', label: 'Regular' },
//               { value: 'composition', label: 'Composition' },
//               { value: 'exempt', label: 'Exempt' },
//             ]}
//           />
//         </Form.Item>

//         <Form.Item label="TAN Number">
//           <Input placeholder="Enter TAN number" className="w-full" />
//         </Form.Item>

//         <Form.Item label="Email Address" required>
//           <Input type="email" placeholder="Enter email address" className="w-full" />
//         </Form.Item>

//         <Form.Item label="Phone" required>
//           <Input placeholder="Enter phone number" className="w-full" />
//         </Form.Item>

//         {/* Action Buttons */}
//         <div className="flex justify-end mt-6">
//           <Space>
//             {/* <Button onClick={onClose} className="bg-gray-200 text-black hover:bg-gray-300">Cancel</Button> */}
//             <Button type="primary" className="bg-blue-500 hover:bg-blue-600">Next</Button>
//           </Space>
//         </div>
//       </Form>
//     </Drawer>
//   );
// };

// export default AddClientForm;
