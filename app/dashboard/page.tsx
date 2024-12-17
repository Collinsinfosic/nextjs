import React from 'react'
import Image from 'next/image'
import { lusitana } from '../ui/fonts';

export default function page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <h1 className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`} >dashboard Page</h1>
    </div>
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome to dashboard</strong> 
        </p>
      </div>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}
            <Image
            src="/hero-desktop.png"
            width={560}
            height={620}
            className='hidden md:block'
            alt='Screenshots'
            
            />
      </div>
    </div>
  </main>
  )
}
