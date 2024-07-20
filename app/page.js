// pages/index.js
"use client";

import React, { useState } from 'react';
import dynamic from "next/dynamic";

const WeeksCalendar = dynamic(() => import("./WeeksCalendar"), {
  ssr: false,
});

const HomePage = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
    <h1>Weeks Calendar</h1>
    <div>
      <label>
        Birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
    </div>
    <div>
      <label>
        Lifespan (years):
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </div>
    <WeeksCalendar birthdate={birthdate} age={age} />
  </div>
  );
};

export default HomePage;
