'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    { name: 'About', link: '#about' },
    { name: 'Education & Career', link: '#career' },
    { name: 'Technologies', link: '#technologies' },
    { name: 'Projects', link: '#projects' },
    { name: 'Certifications', link: '#certifications' },
  ];

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex items-center p-6 lg:justify-center lg:px-8">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="font-play hidden lg:flex lg:gap-x-12">
          <a href="#about" className="text-sm/6 font-semibold text-gray-900">
            About
          </a>
          <a href="#career" className="text-sm/6 font-semibold text-gray-900">
            Education & Career
          </a>
          <a href="#technologies" className="text-sm/6 font-semibold text-gray-900">
            Technologies
          </a>
          <a href="#projects" className="text-sm/6 font-semibold text-gray-900">
            Projects
          </a>
          <a href="#certifications" className="text-sm/6 font-semibold text-gray-900">
            Certifications
          </a>
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Contact
          </a> */}
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
