'use client';

import { FaceSmileIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Press
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Automations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <span>+63 938 2313 715</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <span>jmarkanunciado@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">&copy; 2025. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Facebook</span>
              <FaceSmileIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Twitter</span>
              <FaceSmileIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">GitHub</span>
              <FaceSmileIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
