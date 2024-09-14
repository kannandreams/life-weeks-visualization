import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { createTheme, ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
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

export const metadata = {
  title: 'Timeline 4 Me'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
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
        <GoogleAnalytics gaId="G-BJW9SXM11H" />
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
