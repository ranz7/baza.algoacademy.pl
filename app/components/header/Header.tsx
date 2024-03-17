import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from '@remix-run/react'
import { MobileNavigation } from '~/components/header/MobileNavigation'
import { Search } from '~/components/header/Search'
import { ThemeSelector } from '~/components/header/ThemeSelector'

type Props = {
  name?: string
  colorFrom?: string
  colorTo?: string
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
  const { name, colorFrom, colorTo, navigation } = props

  const gradientText = `inline-block text-transparent bg-clip-text bg-gradient-to-r ${colorFrom} ${colorTo}`

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
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
      <div className="relative flex flex-grow basis-0 items-center">
        <a href="/" aria-label="Home page" className="pr-5">
          <img
            src="/algo-academy-logo-white.png"
            className="hidden h-8 dark:lg:block"
          />
          <img
            src="/algo-academy-logo-dark.png"
            className="hidden h-8 dark:hidden lg:block"
          />
        </a>
        <Link to="/" className={`font-bold hidden lg:block`}>
          <span className={`${gradientText} mt-1`}>{name}</span>
        </Link>
      </div>
      <div className="-my-5 mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
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
