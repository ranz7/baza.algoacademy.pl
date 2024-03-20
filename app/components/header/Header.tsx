import clsx from 'clsx'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MobileNavigation } from '~/components/header/MobileNavigation'
import { Search } from '~/components/header/Search'
import { ThemeSelector } from '~/components/header/ThemeSelector'
import Breadcrumps from '~/components/docs/Breadcrumps'

type Props = {
  name?: string
  gradient?: string
  navigation?: any
}

export default function Header(props: Props) {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  const { name, gradient, navigation } = props

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5  dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent'
      )}
    >
      {navigation && (
        <div className="mr-6 flex lg:hidden">
          <MobileNavigation navigation={navigation} />
        </div>
      )}
      <div className="relative flex flex-grow   items-center">
        <Breadcrumps gradient={gradient} />
      </div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 items-center md:flex-grow">
        <Search />
        <ThemeSelector className="relative z-10" />
        <a
          href="https://github.com/AlgoAcademyPL/"
          target="_blank"
          className="group"
          aria-label="GitHub"
        >
          <FaGithub className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </a>
      </div>
    </header>
  )
}
