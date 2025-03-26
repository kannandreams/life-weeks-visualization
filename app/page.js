'use client'

import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Grid, Box } from '@mantine/core'
import { useForm } from '@mantine/form';

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
  const timelineElement = document.getElementById('timeline-visualization');

  if (!timelineElement) {
    console.error("Timeline element not found!");
    return;
  }

  html2canvas(timelineElement).then((canvas) => {
    const link = document.createElement('a')
    link.download = 'timeline.png'
    link.href = canvas.toDataURL()
    link.click()
  }).catch(err => {
    console.error("Error exporting to PNG:", err);
  });
}

const HomePage = () => {
  const theme = useMantineTheme()
  const [birthdate, setBirthdate] = useState(null)
  const [age, setAge] = useState('')
  const [showVisualization, setShowVisualization] = useState(false)
  const [opened, { toggle }] = useDisclosure()
  const today = new Date().toISOString().split('T')[0]
  const currentYear = new Date().getFullYear();
  const earliestDate = new Date(1900, 0, 1).toISOString().split('T')[0]; // January 1, 1900

  const handleSubmit = () => {
    if (!form.values.birthdate || !form.values.age) {  //Basic check for values
      alert('Please enter both date of birth and age.');
      return;
    }
    setShowVisualization(true)
  }

  const form = useForm({
    initialValues: {
      birthdate: '',
      age: '',
    },
   
  });

  return (
    <Box>
      <Container size="xl">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 8 }}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Flex
              mih={80}
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
                  max={today}
                  min={earliestDate}  // Add a minimum date
                  value={birthdate}
                  {...form.getInputProps('birthdate')}
                  onChange={(e) => {
                    form.setFieldValue('birthdate', e.target.value);
                    setBirthdate(e.target.value);
                  }}
                  
                />

                <TextInput
                  size="md"
                  variant="filled"
                  label="Lifespan (years)"
                  type="number"
                  min={0}
                  max={120}
                  value={age}
                  withAsterisk
                  {...form.getInputProps('age')}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    form.setFieldValue('age', newValue);
                    setAge(newValue)

                  }}
                  
                />
                <Button
                  id="btnVisualize"
                  variant="filled"
                  color="rgba(0, 0, 0, 1)"
                  size="md"
                  radius="xs"
                  type="submit"
                  disabled={!form.values.age || !form.values.birthdate} //Disable if values are missing
                  // disabled={form.errors.birthdate || form.errors.age || form.values.age === ''}
                  // onClick={handleSubmit}
                >
                  Visualize
                </Button>

                {showVisualization && (
                  <Button
                    id="btnPrint"
                    variant="filled"
                    color="rgba(0, 0, 0, 1)"
                    size="md"
                    radius="xs"
                    onClick={exportToPNG}
                  >
                    Export to PNG
                  </Button>
                )}
              
            </Flex>
            </form>
            {showVisualization && (
              <Box id="timeline-visualization">
                <WeeksCalendar birthdate={birthdate} age={age} />
              </Box>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePage
