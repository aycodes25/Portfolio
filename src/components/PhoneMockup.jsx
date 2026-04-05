import React from 'react';

const PhoneMockup = ({ imgSrc, theme = '' }) => {
  return (
    <div className={`phone-container ${theme}`}>
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <img src={imgSrc} alt="Phone Screen" className="screen-image" />
        </div>
        <div className="phone-btn phone-btn-power"></div>
        <div className="phone-btn phone-btn-volume-up"></div>
        <div className="phone-btn phone-btn-volume-down"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
