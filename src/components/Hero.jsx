import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'
import imgHero from '../assets/thumbnail.webp'


const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-5xl font-bold">
            Buy and Sell <br /> Farm Products, <br />
            <span className="text-gradient">NFTs</span> Collections
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
          Deal with the best products.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="shadow-xl shadow-black text-white
            bg-[#2bae70] hover:bg-[#24965f]
            rounded-full cursor-pointer p-2"
            onClick={onCreatedNFT}
          >
            Create Product
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-white font-bold">123k</p>
            <small className="text-gray-300">User</small>
          </div>
          <div>
            <p className="text-white font-bold">152k</p>
            <small className="text-gray-300">Products</small>
          </div>
          <div>
            <p className="text-white font-bold">200k</p>
            <small className="text-gray-300">Suppliers</small>
          </div>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
          src={imgHero}
          alt="NFT Art"
          className="h-60 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p>
            <small className="text-green-800 font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
