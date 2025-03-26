import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as Plot from '@observablehq/plot'

import {
  parseISO,
  differenceInDays,
  addWeeks,
  lastDayOfWeek,
  getISOWeekYear,
  format,
  getISOWeek,
} from 'date-fns'

const WeeksCalendar = ({ birthdate, age }) => {
  const plotRef = useRef()

  const [totalDaysLived, setTotalDaysLived] = useState(0)
  const [totalDaysAhead, setTotalDaysAhead] = useState(0)
  const [selectedWeek, setSelectedWeek] = useState(null)

  useEffect(() => {
    if (!birthdate || !age) return

    const birthDateObj = parseISO(birthdate)

    const numWeeks = age * 52
    const currentDate = new Date()
    const currentWeekIndex = differenceInDays(currentDate, birthDateObj) / 7
    const totalDaysLived = differenceInDays(currentDate, birthDateObj)
    const totalDaysAhead = age * 365.25 - totalDaysLived

    setTotalDaysLived(Math.floor(totalDaysLived))
    setTotalDaysAhead(Math.ceil(totalDaysAhead))
    console.log(numWeeks)
    const data = []

    for (let i = 0; i < numWeeks; i++) {
      const weekDate = addWeeks(
        lastDayOfWeek(birthDateObj, { weekStartsOn: 1 }),
        i
      )
      const year = getISOWeekYear(weekDate)
      let weekOfYear = getISOWeek(weekDate)
      //   if (weekOfYear > 52) weekOfYear = 52; // Handle the 53rd week
      data.push({
        year,
        week: weekOfYear,
        weekIndex: i,
        weekDate: format(weekDate, 'yyyy-MM-dd'),
      })
    }
    console.log(data)
    // Calculate dimensions to handle large number of years
    const plotWidth = Math.max(age * 15, 1000) // Adjust the multiplier as needed for better spacing
    const plotHeight = 800 // Adjust height based on your preference

    // Remove any existing plots
    if (plotRef.current) {
      plotRef.current.innerHTML = ''
    }

    const plot = Plot.plot({
      marks: [
        Plot.cell(data, {
          x: 'year',
          y: 'week',
          fill: (d) =>
            d.weekIndex <= currentWeekIndex
              ? //? "#000000"
                selectedWeek === d.weekIndex
                ? 'blue'
                : '#000000'
              : '#58D68D',
          // onClick: (d) => handleCellClick(d),
          title: (d) => `Year: ${d.year}, Week: ${d.week}`, // Tooltip
        }),
      ],
      color: {
        scheme: 'piyg',
      },
      x: {
        label: 'Years',
        ticks: Array.from(
          { length: Math.ceil(age / 10) + 1 },
          (_, i) => birthDateObj.getFullYear() + i * 10
        ),
      },
      y: {
        label: 'Weeks',
        tickFormat: (d) => d.toFixed(0),
      },
      width: plotWidth,
      height: plotHeight,
    })

    plotRef.current.append(plot)
  }, [birthdate, age])

  let aheadMessage;
    
  if (totalDaysAhead < 0) {
    aheadMessage = <p>RIP. Enjoy your afterlife!</p>;  // Or any other message you want.
  } else {
    aheadMessage = (
      <p>
        You have <b>{totalDaysAhead}</b> days ahead of you.
      </p>
    );
  }

  return (
    <div id="timeline-visualization">
      <div>
        <p>
          You have lived <b>{totalDaysLived}</b> days already
        </p>
        <p>
        {aheadMessage}
          {/* You have <b>{totalDaysAhead}</b> days ahead of you. */}
        </p>
      </div>
      <div ref={plotRef}></div>
    </div>
  )
}

export default WeeksCalendar
