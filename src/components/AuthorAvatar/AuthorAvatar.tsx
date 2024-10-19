import React from 'react';
import { Avatar } from 'antd';
import "./AuthorAvatar.scss";

const AuthorAvatar = ({ imageUrl }) => {
  return (
    <div className='c__AuthorAvatar'>
      <Avatar src={imageUrl} size="large" />
    </div>
  );
};

export default AuthorAvatar;