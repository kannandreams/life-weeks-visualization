// pages/index.js
'use client'

import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Grid } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import SponserCoffee from './SponserCoffee'
import Credits from './Credits'
import html2canvas from 'html2canvas'
import SocialShareButtons from './SocialShareButtons'

import {
  useMantineTheme,
  Button,
  TextInput,
  Container,
  Drawer,
  Group,
  Flex,
} from '@mantine/core'
// const WeeksCalendar = dynamic(() => import('./WeeksCalendar'), {
//   ssr: false,
// })

import WeeksCalendar from './WeeksCalendar'

const exportToPNG = () => {
  const timelineElement = document.getElementById('timeline-visualization')

  html2canvas(timelineElement).then((canvas) => {
    const link = document.createElement('a')
    link.download = 'timeline.png'
    link.href = canvas.toDataURL()
    link.click()
  })
}

const HomePage = () => {
  const theme = useMantineTheme()
  // const [birthdate, setBirthdate] = useState('')
  const [birthdate, setBirthdate] = useState(null)

  const [age, setAge] = useState('')
  const [showVisualization, setShowVisualization] = useState(false)
  const [opened, { toggle }] = useDisclosure()
  const handleSubmit = () => {
    setShowVisualization(true)
  }
  const today = new Date().toISOString().split('T')[0]

  return (
    <Container size="xl">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left-aligned element */}
        
        <div
          style={{
            padding: '0px',
            color: '#000000',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <h1>Life Timeline</h1>
          
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <SponserCoffee />
          <Credits />
          <SocialShareButtons
            url="https://www.timeline4.me/"
            title="Life Timeline!"
            summary="See the weeks you’ve lived and the ones still ahead!"
          />
        </div>
      </div>
      {/* <Group position="right" align="right" gap="md" justify="end">
        <SponserCoffee />
        <Credits />
      </Group> */}
      <Grid>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <div style={{ padding: '0px' }}>
            {/* <h1 style={{ color: '#000000' }}>Life time Visualisation</h1> */}

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
                max={today}
              />

              <TextInput
                size="md"
                variant="filled"
                label="Lifespan (years)"
                type="number"
                value={age}
                withAsterisk
                onChange={(e) => {
                  setAge(e.target.value)
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

              {age !== '' && age > 0 && (
                <Button
                  id="btnPrint"
                  variant="filled"
                  color="rgba(0, 0, 0, 1)"
                  size="md"
                  radius="xs"
                  onClick={exportToPNG}
                >
                  Export
                </Button>
              )}


            </Flex>

            {showVisualization && (
              <div>
              <WeeksCalendar birthdate={birthdate} age={age} />
             
                </div>
            )}
          </div>
        </Grid.Col>
        {/* <Grid.Col span={{ base: 12, xs: 4 }}></Grid.Col> */}
      </Grid>
    </Container>
  )
}

export default HomePage
