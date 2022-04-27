import React from 'react'

function LeftSide() {
  return (
    <div className="col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
      <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
        <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2 transition  delay-300 ease-in-out hover:-translate-y-1 hover:from-purple-600 hover:to-yellow-400 ">
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
  )
}

export default LeftSide
