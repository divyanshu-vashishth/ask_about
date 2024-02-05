import Link from 'next/link';
import React, { FC } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook } from 'lucide-react';
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';


interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email: info@example.com</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">123 Street, City, State, Country</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#">
                <TwitterLogoIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#">
                <InstagramLogoIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="grid gap-2">
              <li>
                <Link className="text-sm" href="#">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-sm" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm" href="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 <a
            href="https://askabout.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            AskAbout.io 
          </a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;