'use client'
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const HeartCounter = ({ initialValue }: { initialValue: number }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <FaHeart className="text-red-500 cursor-pointer" onClick={increment} />
      <span>{count}</span>
    </div>
  );
};

export default HeartCounter;
