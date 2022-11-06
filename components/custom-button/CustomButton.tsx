import React from 'react';

interface CustomButtonProps {
  children: string;
  styling: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, styling }) => {
  return <button className={styling}>{children}</button>;
};

export default CustomButton;
