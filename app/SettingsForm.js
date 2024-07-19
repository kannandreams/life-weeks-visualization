"use client";

import React, { useState } from 'react';
import styles from './SettingsForm.module.css';

const SettingsForm = ({ onSubmit }) => {
  const [birthDate, setBirthDate] = useState('1984-10-24');
  const [lifeExpectancy, setLifeExpectancy] = useState(80);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ birthDate, lifeExpectancy });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The 30,000 Days Of Your Life</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          When were you born?
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          How long will you live?
          <input 
            type="number" 
            value={lifeExpectancy} 
            onChange={(e) => setLifeExpectancy(e.target.value)} 
            className={styles.input}
          />
          years
        </label>
        <button type="submit" className={styles.button}>Visualise the weeks of your life</button>
      </form>
    </div>
  );
};

export default SettingsForm;
