'use client'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';

import {
  createTheme,
  AppShell,
  MantineProvider,
  Group,
  Title,
  Text,
  Box,
  Flex
} from '@mantine/core'
import '@mantine/core/styles.css'
import SponserCoffee from './SponserCoffee'
import Credits from './Credits'
import SocialShareButtons from './SocialShareButtons'

const inter = Inter({ subsets: ['latin'] })

import { metadata } from './metadata'


const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    customBackground: ['#E6DFD6'],
    customText: ['#000000'],
    customDarkGrey: ['#6B6B6B'],
    customLightGrey: ['#D9D9D9'],
  },
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          metadata={metadata}
        />
      </head>
      <body
        style={{
          padding: '10px',
          backgroundColor: theme.colors.customBackground,
          overflow: 'hidden', // Prevent scrolling on the body
        }}
      >
        <MantineProvider theme={theme}>
          <AppShell layout="default" header={{ height: 70 }} padding="md">
            <AppShell.Header>
              <Box
                padding="xl"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  backgroundColor: theme.colors.customBackground,
                }}
              >
                <Group px="md">
                  <Title>timeline4.me</Title>
                </Group>
                <Group align="center" px="md">
                  <Credits />
                  <SponserCoffee />
                  <SocialShareButtons
                    url="https://www.timeline4.me/"
                    summary="See the weeks you’ve lived and the ones still ahead!"
                  />
                </Group>
              </Box>
            </AppShell.Header>
            <AppShell.Main>
              <GoogleAnalytics gaId="G-BJW9SXM11H" />
              <Box
                style={{
                  overflow: 'hidden', // Prevent scrolling for the children section
                  height: '100%', // Ensure it takes up the full height
                }}
              >
                {children}
              </Box>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
