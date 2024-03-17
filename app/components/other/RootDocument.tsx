import * as React from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useMatches,
} from '@remix-run/react'

import { Analytics } from '@vercel/analytics/react'

export const dangerousHtmlScript = `
  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`

export function RootDocument({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const matches = useMatches()
  // const styles = useStylesLink()

  return (
    // <html lang="en" className={cx(getGlobalStyles())}>
    <html
      lang="en"
      className="h-full antialiased [font-feature-settings:'ss01']"
    >
      <head>
        {/* {styles} */}
        {matches.find((d) => d.handle?.baseParent) ? (
          <base target="_parent" />
        ) : null}
        {title ? <title>{title}</title> : null}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: dangerousHtmlScript,
          }}
        ></script>
      </head>
      <body className="vsc-initialized flex min-h-full bg-white dark:bg-slate-900">
        <div className="flex w-full flex-col">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}
