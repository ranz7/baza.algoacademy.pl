import clsx from 'clsx'
import { NavLink } from '@remix-run/react'

export function Navigation({ navigation, className }: any) {
  const linkClasses =
    'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full'

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.label}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.label}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.children.map((link) => (
                <li key={link.to} className="relative">
                  {link.to.startsWith('http') ? (
                    <a href={link.to} className={linkClasses}>
                      {link.label}
                    </a>
                  ) : (
                    <NavLink to={link.to} end className={clsx(linkClasses)}>
                      {(props) => {
                        return (
                          <div
                            className={clsx(
                              'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                              props.isActive
                                ? 'font-semibold text-sky-500 before:bg-sky-500'
                                : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                            )}
                          >
                            {link.label}
                          </div>
                        )
                      }}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
