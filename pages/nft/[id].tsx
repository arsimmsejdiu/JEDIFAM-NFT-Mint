import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left side */}
      <div className="col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt="nft"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">JEDIFAM Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of JEDIFAM wo live & breathe REACT
            </h2>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className='flex flex-1 flex-col p-12 col-span-6'>
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50 transition-all hover:decoration-pink-300/50">
              JEDIFAM
            </span>{' '}
            NFT Market place
          </h1>
          <button className="rounded-full lg:px-5 lg:p-y-3 lg:text-base bg-gray-400 px-4 py-2 text-white text-xs font-bold transition-all hover:bg-gradient-to-br hover:from-cyan-800 hover:to-rose-500">
            Sign In
          </button>
        </header>
        <hr className='my-2 border'/>
        {/* Content Section */}
        {/* Mint Button Section */}
      </div>
    </div>
  )
}

export default NFTDropPage
