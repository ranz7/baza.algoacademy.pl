import { isRouteErrorResponse, Outlet, useRouteError } from '@remix-run/react'
import styles from '~/styles/tailwind.css'
import docSearchStyles from '@docsearch/css/dist/style.css'
import prismThemeLight from '~/styles/prismThemeLight.css'
import prismThemeDark from '~/styles/prismThemeDark.css'
import { seo } from '~/utils/seo'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { RootDocument } from '~/components/other/RootDocument'
import { DefaultCatchBoundary } from '~/components/other/DefaultCatchBoundary'

export const meta: MetaFunction = () => {
  return seo({
    title:
      'Baza AlgoAcademy | Rewolucjonizujemy edukację informatyczną w Polsce',
    description: `Rewolucjonizujemy edukację informatyczną w Polsce.`,
    keywords: 'Algorytmy, Programowanie, Edukacja, Informatyka, AlgoAcademy',
  })
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    {
      rel: 'stylesheet',
      href: prismThemeLight,
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'stylesheet',
      href: prismThemeDark,
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'stylesheet',
      href: docSearchStyles,
    },
    {
      rel: 'stylesheet',
      href: '//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
    { rel: 'icon', href: '/favicon.ico' },
  ]
}

export default function App() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

export const ErrorBoundary = () => {
  const error = useRouteError()

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <RootDocument title={`${error.status} ${error.statusText}`}>
        <div className="h-[50vh] flex flex-col items-center justify-center gap-6">
          <DefaultCatchBoundary
            status={error.status}
            statusText={error.statusText}
            data={error.data}
            isRoot={true}
          />
        </div>
      </RootDocument>
    )
  }

  console.error(error)

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = 'Unknown error'
  if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <RootDocument title="Error!">
      <div>
        <h1>There was an error!</h1>
        <p>{errorMessage}</p>
      </div>
    </RootDocument>
  )
}
