import React, { FC } from 'react'
import { NavigationMenu } from './ui/navigation-menu';
import Link from 'next/link';
import AuthButton from './AuthButton';
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { MountainIcon } from 'lucide-react';
interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({  }) => {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <header className="flex items-center justify-between border-b px-6 py-4 bg-white dark:bg-gray-800">
<Link className="flex items-center" href={'/'}>
  <MountainIcon className="h-6 w-6" />
  <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-100">Ask About</span>
</Link>
<nav className="hidden md:flex gap-4">
{/* <Link className="text-md font-medium text-gray-900 hover:underline dark:text-gray-100" href={'/dashboard'}>
  Dashboard
  </Link> */}
  <Link className="text-md font-medium text-gray-900 hover:underline dark:text-gray-100" href={'/about'}>
  About
  </Link>
  <Link className="text-md font-medium text-gray-900 hover:underline dark:text-gray-100" href={'/contact'}>
    Contact
  </Link>
</nav>
<div className="flex gap-4">
{isSupabaseConnected && <AuthButton />}
 
</div>
</header>
  )
}

export default Navbar;
