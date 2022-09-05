import React from 'react';
import '../assets/styles/components/Text.css';

const Text = ({ tag, text, className }) => {
  const CustomTag = tag;
  return <CustomTag className={className}>{text}</CustomTag>;
};

export default Text;
