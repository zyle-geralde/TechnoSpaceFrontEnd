import React from 'react';

const LandingPageButton = ({ label, onClick, styleClass, type = 'button' }) => {
  return (
    <button className={styleClass} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default LandingPageButton;
