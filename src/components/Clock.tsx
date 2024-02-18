import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className='absolute color-black bottom-2 right-0'>
      <span className="font-hero text-2xl tracking-wide">BC, MX  {currentTime.format('HH:mm:ss A')}</span>
    </div>
  );
};