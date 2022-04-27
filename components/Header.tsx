import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { shortenAddress } from '../utils/shortenedAddress'

function Header() {
  const connectWithMetamask = useMetamask()
  const disconnectWithMetamask = useDisconnect()
  const address = useAddress()
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
          The{' '}
          <span className="font-extrabold underline decoration-pink-600/50 transition-all hover:decoration-pink-300/50">
            JEDIFAM
          </span>{' '}
          NFT Market place
        </h1>
        {address ? (
          <button
            onClick={() => disconnectWithMetamask()}
            className="lg:p-y-3 rounded-full bg-gray-400 px-4 py-2 text-xs font-bold text-white transition ease-in-out hover:bg-gradient-to-br hover:from-cyan-800 hover:to-rose-500 lg:px-5 lg:text-base"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => connectWithMetamask()}
            className="lg:p-y-3 rounded-full bg-gray-400 px-4 py-2 text-xs font-bold text-white transition ease-in-out hover:bg-gradient-to-br hover:from-cyan-800 hover:to-rose-500 lg:px-5 lg:text-base"
          >
            Sign In
          </button>
        )}
      </header>
      <hr className="my-2 border" />
      <div className="mt-2  flex flex-1 items-center justify-center text-center text-sm text-red-400">
        {address ? `Connected as ${address}` : ''}
      </div>
    </div>
  )
}

export default Header
