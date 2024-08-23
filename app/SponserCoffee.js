import Image from 'next/image'

const SponserCoffee = ({}) => {
  return (
    <div>
      <a href="https://www.buymeacoffee.com/kannandreams" target="_blank">
        {/* <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: '40px', width: '160px !important' }}
        /> */}
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          layout="responsive" // or use "intrinsic" or "fixed" depending on your needs
          style={{ height: '40px', width: '160px !important' }}
        />
      </a>
    </div>
  )
}
export default SponserCoffee
