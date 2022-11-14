import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

interface CustomButtonProps {
  children: ReactElement | string;
  styling: string;
  icon?: IconType;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  styling,
  icon,
}) => {
  return (
    <button className={styling}>
      <>
        {children}
        {icon}
      </>
    </button>
  );
};

export default CustomButton;
