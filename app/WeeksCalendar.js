import React, { useEffect, useRef, useState, useMemo } from 'react'
import * as Plot from '@observablehq/plot'
import { Text, Title, Paper, Box, Group } from '@mantine/core'
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

  const [selectedWeek, setSelectedWeek] = useState(null)

  // Memoize derived data to prevent unnecessary recalculations
  const { totalDaysLived, totalDaysAhead, data } = useMemo(() => {
    if (!birthdate || !age) {
      return { totalDaysLived: 0, totalDaysAhead: 0, data: [] }
    }

    const birthDateObj = parseISO(birthdate)
    const currentDate = new Date()
    const numWeeks = age * 52
    const totalDaysLived = Math.floor(
      differenceInDays(currentDate, birthDateObj)
    )
    const totalDaysAhead = Math.ceil(age * 365.25 - totalDaysLived)
    const currentWeekIndex = differenceInDays(currentDate, birthDateObj) / 7

    const data = []
    for (let i = 0; i < numWeeks; i++) {
      const weekDate = addWeeks(
        lastDayOfWeek(birthDateObj, { weekStartsOn: 1 }),
        i
      )
      const year = getISOWeekYear(weekDate)
      const weekOfYear = getISOWeek(weekDate)

      data.push({
        year,
        week: weekOfYear,
        weekIndex: i,
        weekDate: format(weekDate, 'yyyy-MM-dd'),
      })
    }

    return { totalDaysLived, totalDaysAhead, data }
  }, [birthdate, age])

  useEffect(() => {
    if (!birthdate || !age) return //Early return if no birthdate or age

    // Calculate dimensions to handle large number of years
    const plotWidth = Math.max(age * 15, 1000) // Adjust the multiplier as needed for better spacing
    const plotHeight = 800 // Adjust height based on your preference

    // Remove any existing plots
    if (plotRef.current) {
      plotRef.current.innerHTML = ''
    }

    const birthDateObj = parseISO(birthdate)
    const currentDate = new Date()
    const currentWeekIndex = differenceInDays(currentDate, birthDateObj) / 7

    const plot = Plot.plot({
      marks: [
        Plot.cell(data, {
          x: 'year',
          y: 'week',
          fill: (d) =>
            d.weekIndex <= currentWeekIndex
              ? selectedWeek === d.weekIndex
                ? 'blue'
                : '#000000'
              : '#58D68D',
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
  }, [birthdate, age, data, selectedWeek]) // Add data as dependency!

  let aheadMessage
  if (totalDaysAhead < 0) {
    aheadMessage = <Title order={5}>Sorry 😞 Your story continues… in the next realm. Enjoy your afterlife!"</Title> // Or any other message you want.
  } 
  else if (totalDaysAhead < 1000) {
    aheadMessage = <Title order={5} ><Text span c="red" fw={700}>{totalDaysAhead}</Text> days more only. 
    Make every sunrise 🌅 count, every moment meaningful! ❤️</Title> // Or any other message you want.
  }
  else {
    aheadMessage = (
      <Title order={5}>
        <Text span c="red" fw={700}>{totalDaysAhead}</Text> days more await — how will you make them matter? 🚀"
      </Title>
    )
  }

  return (
    <Box id="timeline-visualization" p="md">
      <Group p="md">
          <Title order={5}>You've traveled <Text span c="red" fw={700}>{totalDaysLived}</Text> days on your journey 💪
          {aheadMessage}</Title>
          {/* You have <b>{totalDaysAhead}</b> days ahead of you. */}
        
      </Group>
      <Paper ref={plotRef}></Paper>
    </Box>
  )
}

export default WeeksCalendar
