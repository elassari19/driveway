import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

interface IProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variants?: 'primary' | 'secondary';
}

const index = ({ children }: IProps) => {
  return (
    <button className="p-5 bg-blue-500 text-white font-extralight border border-black rounded-xl">
      {children}
    </button>
  );
};

export default index;
