import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Search } from '~/components/Search'
import { FaGithub } from 'react-icons/fa'
import { ThemeSelector } from '~/components/ThemeSelector'
import { Link } from '@remix-run/react'

type Props = {
  name?: string
  colorFrom?: string
  colorTo?: string
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
  const { name, colorFrom, colorTo } = props

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
      <div className='relative flex flex-grow basis-0 items-center'>
        <a href='/' aria-label='Home page'>
          <img
            src='/algo-academy-logo-white.png'
            className='hidden h-8 dark:lg:block'
          />
          <img
            src='/algo-academy-logo-dark.png'
            className='hidden h-8 dark:hidden lg:block'
          />
        </a>
        <Link to='../../' className={`font-bold`}>
          <span className={`${gradientText}`}>{name}</span>{' '}
        </Link>

      </div>
      <div className='-my-5 mr-6 sm:mr-8 md:mr-0'>
        <Search />
      </div>

      <div className='relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow'>
        <ThemeSelector className='relative z-10' />
        <a
          href='https://github.com/AlgoAcademyPL/'
          target='_blank'
          className='group'
          aria-label='GitHub'
        >
          <FaGithub className='h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300' />
        </a>
      </div>
    </header>
  )
}
