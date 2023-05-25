import React, { useState } from 'react';

export default function TypesMusic() {
  const [activeType, setActiveType] = useState('Pop');

  const handleTypeClick = (type) => {
    setActiveType(type);
  };

  return (
    <div className="flex justify-start gap-4 items-center font-bold w-full mb-1 px-3">
      <p
        className={`m-0 p-0 ${activeType === 'Pop' ? 'text-gray-50' : 'text-gray-400'} hover:text-gray-50 duration-300 cursor-pointer`}
        onClick={() => handleTypeClick('Pop')}
      >
        Pop
      </p>
      <p
        className={`m-0 p-0 ${activeType === 'Jazz' ? 'text-gray-50' : 'text-gray-400'} hover:text-gray-50 duration-300 cursor-pointer`}
        onClick={() => handleTypeClick('Jazz')}
      >
        Jazz
      </p>
      <p
        className={`m-0 p-0 ${activeType === 'Rock' ? 'text-gray-50' : 'text-gray-400'} hover:text-gray-50 duration-300 cursor-pointer`}
        onClick={() => handleTypeClick('Rock')}
      >
        Rock
      </p>
      <p
        className={`m-0 p-0 ${activeType === 'Country' ? 'text-gray-50' : 'text-gray-400'} hover:text-gray-50 duration-300 cursor-pointer`}
        onClick={() => handleTypeClick('Country')}
      >
        Country
      </p>
    </div>
  );
}
