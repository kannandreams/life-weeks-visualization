import { useState } from 'react';
import { Box, Popover, Text as MantineText } from "@mantine/core"

const SponserCoffee = ({}) => {
  const [opened, setOpened] = useState(false);
  return (
    <Box style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="top"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <a
            href="https://buymeacoffee.com/untitledhuman"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setOpened(true)}
            onMouseLeave={() => setOpened(false)}
            style={{
              textDecoration: 'none',
              // fontWeight: 'bold',
              color: 'blue',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: 'white',
              display: 'inline-block',
            }}
          >
            <MantineText
            size="sm"
            style={{
              maxWidth: '200px', // Limits width to wrap long text
              whiteSpace: 'normal', // Ensures text wraps
              wordBreak: 'break-word', // Breaks long words if needed
            }}
          >
            Support my work ❤️ Buy Me a Coffee! ☕
          </MantineText>
          </a>
        </Popover.Target>

      </Popover>
    </Box>
  )
}
export default SponserCoffee
