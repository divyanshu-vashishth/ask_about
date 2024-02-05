"use client"
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { usePathname } from 'next/navigation'



const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    
    {
      title: "Home",
      id: "/"
    },
    {
      title: "Login",
      id: "/login",
    },

  ]
  return (
    <div className='sticky top-0 z-30 w-full bg-white/70 backdrop-blur-lg transition-all text-2xl'>
        <MaxWidthWrapper>
            <div className='flex h-16 items-center justify-between border border-zinc-200 text-black opacity-80 px-4 sm:px-16 '>
                <Link href='/' className="flex z-40 font-bold">
                    <span>Ask About</span>
                </Link>
                <div className="hidden items-center space-x-4 sm:flex">
                <Link key="home" href='/'>
                <div
                  className={`${buttonVariants({
                    variant: "ghost",
                    size: "md",
                  })} cursor-pointer mx-4 ${pathname === "/" ? 'underline underline-offset-3  text-opacity-20' : ''}`}
                  
                >
                  Home
                </div>
              </Link>
              <Link key='about' href="/about">
                <div
                  className={`${buttonVariants({
                    variant: "ghost",
                    size: "md",
                  })} cursor-pointer mx-4 ${pathname === "/about" ? 'underline underline-offset-3  text-opacity-20' : ''}`}
                >
                  About
                </div>
              </Link>
              <Link key='Login' href="/login">
                <div
                  className={`${buttonVariants({
                    variant: "ghost",
                    size: "md",
                  })} cursor-pointer mx-4 ${pathname === "/login" ? 'underline underline-offset-3  text-opacity-20' : ''}`}
                >
                  Login
                </div>
              </Link>
          </div>

            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Header