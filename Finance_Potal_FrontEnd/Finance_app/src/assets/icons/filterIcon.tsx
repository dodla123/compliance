import React from "react";

interface FilterIconProps {
  className?: string;       // For styling using Tailwind or other CSS
  width?: string | number;  // Optional width, defaults to 16
  height?: string | number; // Optional height, defaults to 16
  color?: string;           // Optional color, defaults to black
}

const FilterIcon: React.FC<FilterIconProps> = ({
  className = "",
  width = 16,
  height = 16,
  color = "#000000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
        fill={color}
      />
    </svg>
  );
};

export default FilterIcon;

