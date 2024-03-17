import * as React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useLocation } from '@remix-run/react'

export default function Breadcrumps({
  from = 'from-sky-500',
  to = 'to-fuchsia-500',
}: {
  from?: string
  to?: string
}) {
  const location = useLocation()
  const path = location.pathname.split('/')[1]

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex flex-wrap items-center space-x-1">
        <li>
          <a href="https://algoacademy.pl" aria-label="Home page">
            <img
              src="/algo-academy-logo-white.png"
              className="hidden h-8 dark:lg:block"
            />
            <img
              src="/algo-academy-logo-dark.png"
              className="hidden h-8 dark:hidden lg:block"
            />
          </a>
          <img
            src="/favicons/android-chrome-192x192.png"
            className="h-14 lg:hidden"
          />
        </li>

        <ChevronRightIcon
          className="h-5 w-5 flex-shrink-0 text-gray-400 hidden lg:block"
          aria-hidden="true"
        />

        <a href="/" aria-label="Home page">
          <span
            className={`text-2xl font-bold bg-clip-text bg-gradient-to-r ${from} ${to}  text-transparent`}
          >
            <span className={'hidden lg:contents'}>Baza</span>{' '}
            {path || <span className={'lg:hidden'}>Baza</span>}
          </span>
        </a>
      </ol>
    </nav>
  )
}
