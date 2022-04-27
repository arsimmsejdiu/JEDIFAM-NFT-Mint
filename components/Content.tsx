import React from 'react'

function Content() {
  return (
    <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
      <img
        className="w-80 object-cover pb-10 lg:h-40 transition ease-in-out delay-200 hover:-translate-y-2 hover:scale-105"
        src="https://links.papareact.com/bdy"
        alt="JEDIFAM Collections"
      />
      <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
        JEDIFAM Ape Coding Club | NFT Drop
      </h1>
      <p className='pt-2 text-xl text-green-500'>13 / 21 NFT's claimed</p>
    </div>
  )
}

export default Content
