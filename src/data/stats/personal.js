import React, { useState, useEffect } from 'react';
import mapData from './countries';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1992-01-13T12:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(9));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Singapore 🇸🇬',
  },
  {
    key: 'countries',
    label: 'Countries/Regions visited',
    value: Object.keys(mapData).length,
    // link:
    //   'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'publications',
    label: 'Number of publications',
    value: 7,
    link: 'https://scholar.google.com.sg/citations?user=OQja8QwAAAAJ&hl=en',
  },
];

export default data;
