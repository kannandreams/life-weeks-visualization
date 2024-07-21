// pages/index.js
'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import {
  useMantineTheme,
  Button,
  TextInput,
  Container,
  Flex,
} from '@mantine/core'
// const WeeksCalendar = dynamic(() => import('./WeeksCalendar'), {
//   ssr: false,
// })

import WeeksCalendar from './WeeksCalendar'

const HomePage = () => {
  const theme = useMantineTheme()
  const [birthdate, setBirthdate] = useState('')
  const [age, setAge] = useState('')
  const [showVisualization, setShowVisualization] = useState(false)

  const handleSubmit = () => {
    setShowVisualization(true)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#000000' }}>Life time Visualisation</h1>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-end"
        wrap="wrap"
        direction="row"
      >
        <TextInput
          size="md"
          type="date"
          variant="filled"
          label="Date of Birth"
          height="20px"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <TextInput
          size="md"
          variant="filled"
          label="Lifespan (years)"
          type="number"
          value={age}
          withAsterisk
          onChange={(e) => {
            setAge(e.target.value);
              document
                .getElementById('btnVisualize')
                .removeAttribute('disabled')
            
              
          }}
        />
        <Button
          id="btnVisualize"
          variant="filled"
          color="rgba(0, 0, 0, 1)"
          size="md"
          radius="xs"
          onClick={handleSubmit}
          disabled={age === '' || age <= 0}
        >
          Visualize
        </Button>
      </Flex>
      {showVisualization && <WeeksCalendar birthdate={birthdate} age={age} />}
    </div>
  )
}

export default HomePage
