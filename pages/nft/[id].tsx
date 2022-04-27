import React from 'react'
import LeftSide from '../../components/LeftSide'
import Header from '../../components/Header'
import Content from '../../components/Content'
import MintButton from '../../components/MintButton'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left side */}
      <LeftSide />
      {/* right side  */}
      <div className="col-span-6 flex flex-1 flex-col p-12">
        {/* Header */}
        <Header />
        <hr className="my-2 border" />
        {/* Content Section */}
        <Content />
        {/* Mint Button Section */}
        <MintButton />
      </div>
    </div>
  )
}

export default NFTDropPage
