import { NextPage } from 'next';
import React, { ReactNode, ReactHTMLElement } from 'react';

interface IProps {
  chilren?: ReactNode;
}

const index: NextPage<IProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <button
        data-toggle-theme="dark,light,cupcake,cmyk"
        data-act-class="ACTIVECLASS"
      >
        toggle theme
      </button>
    </div>
  );
};

export default index;
