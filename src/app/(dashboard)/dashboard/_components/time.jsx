"use client"

import { useState, useEffect } from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className={"text-gary-200 font-bold text-[50px]"}>{time.toLocaleTimeString('en-US',{minute:'2-digit',hour:"2-digit"})}</p>
    </div>
  );
}
