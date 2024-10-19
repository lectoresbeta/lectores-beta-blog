import React from 'react';
import './Message.scss';
import { CheckCircleOutlined } from '@ant-design/icons';

const Message = ({ children, className = '' }) => {
  return (
    <div className={`c__Message ${className}`} >
      <CheckCircleOutlined />
      <span>{children}</span>
    </div>
  );
};

export default Message;