'use client';

import { Button, Spin } from 'antd';
import { useState } from 'react';

const primaryButtonStyle = (height: string, width: string, bgColor: string, textColor: string) => ({
  height,
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '20px',
  width: width || '',
  backgroundColor: bgColor,
  color: textColor,
});

const secondaryButtonStyle = (isHovered: boolean, height: string, bgColor: string, textColor: string) => ({
  background: isHovered ? bgColor : '#FFFFFF',
  borderRadius: '8px',
  transition: 'background 0.3s',
  cursor: 'pointer',
  height,
  color: textColor,
  border: '1px solid black',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
});

const tertiaryButtonStyle = (isHovered: boolean, height: string, disabled: boolean, bgColor: string, textColor: string) => ({
  background: isHovered ? bgColor : '#FFFFFF',
  borderRadius: '8px',
  transition: 'background 0.3s',
  cursor: 'pointer',
  height,
  color: textColor,
  border: '1px solid #D0D5DD',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '20px',
  opacity: disabled ? 0.5 : 1,
});

export const RegularPrimaryButton = ({ text, handleClick, width, disabled, bgColor = 'blue', textColor = 'white' }) => (
  <Button
    type="primary"
    style={primaryButtonStyle('36px', width, bgColor, textColor)}
    onClick={handleClick}
    disabled={disabled}
  >
    {text}
  </Button>
);

export const MediumPrimaryButton = ({ text, handleClick, disabled, bgColor = 'blue', textColor = 'white' }) => (
  <Button type="primary" style={primaryButtonStyle('40px', '', bgColor, textColor)} onClick={handleClick} disabled={disabled}>
    {text}
  </Button>
);

export const LargePrimaryButton = ({ text, handleClick, style, disabled, loading, bgColor = 'blue', textColor = 'white' }) => (
  <Button
    type="primary"
    style={{ ...primaryButtonStyle('44px', '', bgColor, textColor), ...style }}
    onClick={handleClick}
    disabled={disabled}
  >
    {loading ? <Spin size='small' /> : text}
  </Button>
);

export const RegularSecondaryButton = ({ text, handleClick, bgColor = '#F9F5FF', textColor = '#7F56D9' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      style={secondaryButtonStyle(isHovered, '36px', bgColor, textColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export const MediumSecondaryButton = ({
  text,
  handleClick,
  bgColor = '#7F56D9', // Default purple
  textColor = '#FFFFFF', // Default white
  icon = null, // Default to no icon
}: {
  text: string;
  handleClick: () => void;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode; // Optional icon
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isHovered ? '#5D3ABF' : bgColor, // Dark purple hover
        color: textColor,
        border: 'none',
        padding: '10px 16px',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: icon ? '8px' : '0px', // Add space only if icon is present
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      {text}
    </button>
  );
};


export const LargeSecondaryButton = ({ text, handleClick, bgColor = '#F9F5FF', textColor = '#7F56D9' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      style={secondaryButtonStyle(isHovered, '44px', bgColor, textColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export const RegularTertiaryButton = ({ text, handleClick, disabled, bgColor = '#FFFFFF', textColor = '#182230' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      style={tertiaryButtonStyle(isHovered, '36px', disabled, bgColor, textColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export const MediumTertiaryButton = ({ text, handleClick, bgColor = '#FFFFFF', textColor = '#182230' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      style={tertiaryButtonStyle(isHovered, '40px', false, bgColor, textColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export const LargeTertiaryButton = ({ text, handleClick, bgColor = '#FFFFFF', textColor = '#182230' }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      style={tertiaryButtonStyle(isHovered, '44px', false, bgColor, textColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};



















// // components/Button.tsx
// import React from 'react';

// type ButtonProps = {
//   label: string;
//   onClick: () => void;
//   className?: string;
//   color?: string; // Allow dynamic color
// };

// const Button: React.FC<ButtonProps> = ({ label, onClick, className, color = 'blue' }) => {
//   const baseStyles = `text-white py-2 px-4 rounded-md transition`;
//   const colorStyles = {
//     blue: 'bg-blue-500 hover:bg-blue-600',
//     red: 'bg-red-500 hover:bg-red-600',
//     green: 'bg-green-500 hover:bg-green-600',
//     yellow: 'bg-yellow-500 hover:bg-yellow-600',
//     gray: 'bg-gray-500 hover:bg-gray-600',
//     purple: 'bg-purple-500 hover:bg-purple-700'
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${colorStyles[color] || colorStyles.blue} ${className}`}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;
