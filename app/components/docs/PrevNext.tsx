import { LinkOrA } from '~/components/other/LinkOrA'
import * as React from 'react'

const PrevNext = ({ children, prevItem, nextItem }: any) => {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      {children}
      {(prevItem || nextItem) && (
        <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
          {prevItem && (
            <div>
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Poprzedni
              </dt>
              <dd className="mt-1">
                <LinkOrA
                  to={prevItem.to}
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span aria-hidden="true">&larr;</span> {prevItem.label}
                </LinkOrA>
              </dd>
            </div>
          )}
          {nextItem && (
            <div className="ml-auto text-right">
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Następny
              </dt>
              <dd className="mt-1">
                <LinkOrA
                  to={nextItem.to}
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  {nextItem.label} <span aria-hidden="true">&rarr;</span>
                </LinkOrA>
              </dd>
            </div>
          )}
        </dl>
      )}
    </div>
  )
}

export default PrevNext
