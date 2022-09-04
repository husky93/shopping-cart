import React from 'react';

const Text = ({ tag, text, className }) => {
  const CustomTag = tag;
  return <CustomTag className={className}>{text}</CustomTag>;
};

export default Text;
