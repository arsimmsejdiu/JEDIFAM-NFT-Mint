import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
        The{' '}
        <span className="font-extrabold underline decoration-pink-600/50 transition-all hover:decoration-pink-300/50">
          JEDIFAM
        </span>{' '}
        NFT Market place
      </h1>
      <button className="lg:p-y-3 rounded-full bg-gray-400 px-4 py-2 text-xs font-bold text-white transition ease-in-out hover:bg-gradient-to-br hover:from-cyan-800 hover:to-rose-500 lg:px-5 lg:text-base">
        Sign In
      </button>
    </header>
  )
}

export default Header
