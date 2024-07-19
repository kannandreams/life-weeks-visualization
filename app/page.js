// pages/index.js
"use client";

import React, { useState } from 'react';
import SettingsForm from './SettingsForm';
import LifeWeeks from './LifeWeeks';

const HomePage = () => {
  const [settings, setSettings] = useState({
    birthDate: '1984-10-24',
    lifeExpectancy: 80,
  });

  return (
    <div>
      <SettingsForm onSubmit={setSettings} />
      <LifeWeeks birthDate={settings.birthDate} targetAge={settings.lifeExpectancy} />
    </div>
  );
};

export default HomePage;
