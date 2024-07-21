import { Inter } from 'next/font/google'
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
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
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
          padding: '20px',
          backgroundColor: theme.colors.customBackground,
        }}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
