import * as React from 'react'
import { useEffect } from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  useLocation,
  useMatches,
} from '@remix-run/react'

import { Analytics } from '@vercel/analytics/react'
import {
  NonFlashOfWrongThemeEls,
  Theme,
} from '~/components/theme/ThemeProvider'
import clsx from 'clsx'

export function RootDocument({
  children,
  title,
  theme,
}: {
  children: React.ReactNode
  title?: string
  theme?: Theme | null
}) {
  const matches = useMatches()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView()
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    // <html lang="en" className={cx(getGlobalStyles())}>
    <html
      lang="en"
      className={clsx(
        "h-full antialiased [font-feature-settings:'ss01' bg-transparent",
        theme || 'dark'
      )}
    >
      <head>
        {/* {styles} */}
        {matches.find((d) => d.handle?.baseParent) ? (
          <base target="_parent" />
        ) : null}
        {title ? <title>{title}</title> : null}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(theme)} />
        <Meta />
        <Links />
      </head>
      <body className="vsc-initialized flex min-h-full bg-white dark:bg-slate-900">
        <div className="flex w-full flex-col">{children}</div>
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}
