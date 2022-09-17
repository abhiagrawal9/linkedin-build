import React from 'react';
import { SvgIconComponent } from '@material-ui/icons';

import './InputOption.css';

type InputOptionProps = {
  title: string;
  color: string;
  Icon: SvgIconComponent;
};

const InputOption: React.FC<InputOptionProps> = ({ Icon, title, color }) => {
  return (
    <div className='importOption'>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
