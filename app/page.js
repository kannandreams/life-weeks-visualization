// pages/index.js
'use client'

import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Grid, Box } from '@mantine/core'
import html2canvas from 'html2canvas'
import {
  useMantineTheme,
  Button,
  TextInput,
  Container,
  Flex,
} from '@mantine/core'

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
              <Box>
                <WeeksCalendar birthdate={birthdate} age={age} />
              </Box>
            )}
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default HomePage
