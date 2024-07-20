import { useEffect, useRef, useState } from "react";
import * as Plot from "@observablehq/plot";
import { parseISO, differenceInDays, addWeeks, format, getISOWeek } from "date-fns";

const WeeksCalendar = ({ birthdate, age }) => {
  const plotRef = useRef();

  const [totalDaysLived, setTotalDaysLived] = useState(0);
  const [totalDaysAhead, setTotalDaysAhead] = useState(0);

  useEffect(() => {
    if (!birthdate || !age) return;

    const birthDateObj = parseISO(birthdate);
    const birthYear = birthDateObj.getFullYear();
    const birthWeek = getISOWeek(birthDateObj);

    const numWeeks = age * 52;
    const currentDate = new Date();
    const currentWeekOfYear = getISOWeek(currentDate);

    const currentWeekIndex = differenceInDays(currentDate, birthDateObj) / 7;
    const totalDaysLived = differenceInDays(currentDate, birthDateObj);
    const totalDaysAhead = (age * 365.25) - totalDaysLived;

    setTotalDaysLived(Math.floor(totalDaysLived));
    setTotalDaysAhead(Math.ceil(totalDaysAhead));

    const data = [];
    for (let i = 0; i < numWeeks; i++) {
      const weekDate = addWeeks(birthDateObj, i);
      const year = weekDate.getFullYear();
      const weekOfYear = getISOWeek(weekDate);
      data.push({
        year,
        week: weekOfYear,
        weekIndex: i,
      });
    }

    // Calculate dimensions to handle large number of years
    const plotWidth = Math.max(age * 15, 800); // Adjust the multiplier as needed for better spacing
    const plotHeight = 600; // Adjust height based on your preference

    // Remove any existing plots
    if (plotRef.current) {
      plotRef.current.innerHTML = '';
    }

    const plot = Plot.plot({
      marks: [
        Plot.cell(
          data,
          {
            x: "year",
            y: "week",
            fill: d => 
              d.weekIndex <= currentWeekIndex 
              ? "#EC7063" 
              : "#58D68D",
          }
        ),
      ],
      color: {
        scheme: "piyg",
        domain: [-6, 6],
      },
      x: {
        label: "Years",
        ticks: Array.from({ length: Math.ceil(age / 10) + 1 }, (_, i) => birthYear + i * 10),
      },
      y: {
        label: "Weeks",
        tickFormat: d => d.toFixed(0),
      },
      width: plotWidth,
      height: plotHeight,
    });

    plotRef.current.append(plot);
  }, [birthdate, age]);

  return (
    <div>
      <div>
        <p>You were born on {birthdate}</p>
        <p>You have lived {totalDaysLived} days already</p>
        <p>You have {totalDaysAhead} days ahead of you, to lifespan end date</p>
      </div>
      <div ref={plotRef}></div>
    </div>
  );
};

export default WeeksCalendar;
