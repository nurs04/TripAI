import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SignInButton } from '@clerk/nextjs'

const menuOptions = [
    {
        name : 'Home',
        path : '/'
    },
    {
        name : 'Pricing',
        path : '/pricing'
    },
    {
        name : 'Contact Us',
        path : '/contact-us'
    }
]
function Header() {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
        <h2 className='font-bold text-2xl'>TripAI</h2>
        </div>
        {/* Menu Options */}
        <div className='flex gap-8 items-center'>
            {menuOptions.map((menu, index) => (
                <Link href={menu.path} key={index}>
                    <h2 className='text-lg hover:scale-105 transition hover:text-primary'>{menu.name}</h2>
                </Link>
            ))}
        </div>
        {/* Get Started Button */}
        <SignInButton mode='modal'>
            <Button>Get Started</Button>
        </SignInButton>


    </div>
  )
}

export default Header