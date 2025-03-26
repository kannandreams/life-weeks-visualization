'use client'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import {
  createTheme,
  AppShell,
  MantineProvider,
  Group,
  Title,
  Text,
  Box,
} from '@mantine/core'
import '@mantine/core/styles.css'
import SponserCoffee from './SponserCoffee'
import Credits from './Credits'
import SocialShareButtons from './SocialShareButtons'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className={inter.className} >
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        style={{
          padding: '10px',
          backgroundColor: theme.colors.customBackground,
        }}
      >
        <MantineProvider theme={theme}>
          <AppShell layout="alt" header={{ height: 60 }} padding="md">
            <AppShell.Header>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  padding: '20px 16px 16px 30px',
                  width: '100%',
                  // backgroundColor: theme.colors.customBackground
                }}
              >
                <Group h="100%" px="md">
                  <Title>timeline4.me</Title>
                </Group>
                <Group align="center">
                <Text fs="italic">&quot;Lost time is never found again.&quot; - Benjamin Franklin</Text>
                  <SponserCoffee />
                  <Credits />
                  {/* <SocialShareButtons
                      url="https://www.timeline4.me/"
                      title="Life Timeline!"
                      summary="See the weeks you’ve lived and the ones still ahead!"
                    /> */}
                </Group>
              </Box>
            </AppShell.Header>
            <AppShell.Main>
              <GoogleAnalytics gaId="G-BJW9SXM11H" />
              {children}
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
