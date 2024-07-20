// pages/index.js
"use client";

import React, { useState } from 'react';
import dynamic from "next/dynamic";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { HeaderTabs } from './HeaderTabs';

const WeeksCalendar = dynamic(() => import("./WeeksCalendar"), {
  ssr: false,
});


const HomePage = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");

  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark" >
      <HeaderTabs />
      <label>
        Birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <label>
        Lifespan (years):
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
       
      </label>
      
    <WeeksCalendar birthdate={birthdate} age={age} />
  </MantineProvider>
  );
};

export default HomePage;
