import React, { ChangeEvent, FC, useState } from 'react';
import logo from './logo.svg';
import { type MouseEvent } from 'react';

import { uid } from 'uid';
import { cnMessages } from './Messages.classname';
import { App } from '../../App';

type MesagesProps = {
  onClick: (text: string | undefined) => void;
  text: string | undefined;
};

const Messages: FC<MesagesProps> = ({ onClick, text }) => {
  const handleClick = (event: MouseEvent) => {
    onClick(text);
  };


  return (
    <div className={cnMessages('Comment')}>
      {text}
      <div className={cnMessages('Button')}>
        <button className={cnMessages('ButtonStyle')}onClick={handleClick}>Answer</button>
      </div>
    </div>
  );
};
export { Messages };
