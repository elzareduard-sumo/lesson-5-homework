import React, { useState, useCallback } from 'react';
import './Counter.css'; 

const ChildButton = React.memo(({ onClick, label }) => {
  console.log(`[LOG] Ререндер ChildButton: ${label}`);
  
  return (
    <button className="child-button" onClick={onClick}>
      {label}
    </button>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('[LOG] Ререндер Counter');

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="counter-container">
      <h2>Счётчик: {count}</h2>
      <ChildButton onClick={handleClick} label="увеличить счётчик" />
    </div>
  );
};

export default Counter;