'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Thanku = () => {
  return (
    <section className='flex flex-col justify-center items-center min-h-screen'>
        <div className="m-8">
            <h1 className='font-bold md:text-4xl text-2xl'>Submission Confirmed</h1>
        </div>
        <div>
            <p>Your e-waste recycling request has been successfully submitted.</p>
            <p>We appreciate your effort to recycle and will be in touch soon.</p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <Button><Link href='/'>Return to Home</Link></Button>
            <Button><Link href='/about'>About</Link></Button>
        </div>
    </section>
  )
}

export default Thanku