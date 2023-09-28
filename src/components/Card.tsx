import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-x-gray-200 rounded-lg shadow hover:bg-gray-100">
      {children}
    </div>
  );
};
