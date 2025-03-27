import { Box } from "@mantine/core"
import Image from "next/image"

const SponserCoffee = ({}) => {
  return (
    <Box>
      <a href="https://buymeacoffee.com/untitledhuman" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          height={45}
          width={160}
        />
      </a>
    </Box>
  )
}
export default SponserCoffee
