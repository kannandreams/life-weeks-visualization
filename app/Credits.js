import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'

const Credits = ({}) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <div>
        <Modal
          opened={opened}
          size="70%"
          onClose={close}
          title="Credits"
        >
          <p>
            Thank you,{' '}
            <b>
              <a href="https://www.epicsheets.com/the-30000-days-of-your-life-visualized/" target="_blank">
                Epic Sheets
              </a>
            </b>
            , for the inspiration and the idea to convert the &quot; 30,000 Days of
            Your Life &quot; Excel sheet into a web app.
          </p>

          <p>Inspired by:</p>
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
      </div>
    </>
  )
}

export default Credits
