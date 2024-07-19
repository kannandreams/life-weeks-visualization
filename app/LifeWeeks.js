// components/LifeWeeks.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './LifeWeeks.module.css'; // Assuming you have CSS for styling

const LifeWeeks = ({ birthDate, targetAge }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;
    const weeksInYear = 52;
    const totalYears = targetAge;
    const totalWeeks = weeksInYear * totalYears;

    const birth = new Date(birthDate);
    const today = new Date();
    const livedWeeks = Math.floor((today - birth) / (1000 * 60 * 60 * 24 * 7));
    const remainingWeeks = totalWeeks - livedWeeks;

    svg.attr('width', width).attr('height', height);

    const weeks = Array.from({ length: totalWeeks }, (_, i) => i);

    const color = d3.scaleOrdinal()
      .domain(['lived', 'remaining'])
      .range(['#a30000', '#00a300']);

    svg.selectAll('rect')
      .data(weeks)
      .enter()
      .append('rect')
      .attr('x', (d, i) => (i % weeksInYear) * 15)
      .attr('y', (d, i) => Math.floor(i / weeksInYear) * 15)
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', (d, i) => i < livedWeeks ? color('lived') : color('remaining'))
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5);

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height + 20)
      .attr('text-anchor', 'middle')
      .text(`You were born on ${birth.toDateString()}`);

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height + 40)
      .attr('text-anchor', 'middle')
      .text(`You have lived ${livedWeeks} weeks already`);

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height + 60)
      .attr('text-anchor', 'middle')
      .text(`You have ${remainingWeeks} weeks left to reach ${targetAge} years`);
  }, [birthDate, targetAge]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Weeks Of Your Life</h1>
      <svg ref={svgRef} className={styles.lifeSvg}></svg>
    </div>
  );
};

export default LifeWeeks;
