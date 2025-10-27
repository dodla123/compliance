// components/Icon.tsx
import React from 'react';

type IconProps = {
  name: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return <i className={`fa fa-${name} ${className}`} />;
};

export default Icon;
