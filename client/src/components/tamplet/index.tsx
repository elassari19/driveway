import { NextPage } from 'next';
import React, { ReactNode, ReactHTMLElement } from 'react';

interface IProps extends ReactHTMLElement<HTMLDivElement> {
  chilren?: ReactNode;
}

const index: NextPage<IProps> = ({ ...rest }) => {
  return <div {...rest}>index</div>;
};

export default index;
