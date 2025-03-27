import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, Box, Group, Text, Title, Divider } from '@mantine/core'

const Credits = ({}) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Box>
      <Modal opened={opened} size="60%" onClose={close} >
        <Group p="md">
        {/* <Title span order={3}>Credits</Title> */}
        <Text fw={700}>
          <a
            href="https://www.epicsheets.com/the-30000-days-of-your-life-visualized/"
            target="_blank"
          >
            Epic Sheets{' '}
          </a>
          &nbsp; for the inspiration and the idea to convert the &quot; 30,000 Days of
          Your Life &quot; Excel sheet into a web app.
        </Text>
        </Group>
        <Divider />
        <Text>Also Inspired from</Text>
        <ul>
          <li>
            <a
              href="https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator"
              target="_blank"
            >
              Tim Urban - Wait But Why
            </a>
          </li>
          <li>
            <a
              href="http://news.mit.edu/2013/commencement-address-houston-0607"
              target="_blank"
            >
              Dropbox&apos;s founder Drew Houston
            </a>
          </li>
          <li>
            <a
              href="http://techcrunch.com/2012/12/11/sir-ray-avery-nz-makes-you-dangerous/"
              target="_blank"
            >
              Sir Ray Avery
            </a>
          </li>
          <li>
            <a
              href="https://www.goodreads.com/book/show/54785515-four-thousand-weeks"
              target="_blank"
            >
              Four Thousand Weeks by Oliver Burkeman
            </a>
          </li>
        </ul>
      </Modal>
      <Button
        id="btnCredits"
        variant="filled"
        color="rgba(0, 0, 0, 1)"
        size="md"
        radius="xs"
        onClick={open}
      >
        Credits
      </Button>
    </Box>
  )
}

export default Credits
