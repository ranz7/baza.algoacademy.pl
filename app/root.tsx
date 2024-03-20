import {
  isRouteErrorResponse,
  Outlet,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import styles from '~/styles/tailwind.css'
import docSearchStyles from '@docsearch/css/dist/style.css'
import prismThemeLight from '~/styles/prismThemeLight.css'
import prismThemeDark from '~/styles/prismThemeDark.css'
import custom from '~/styles/custom.css'
import { seo } from '~/utils/seo'
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import { RootDocument } from '~/components/other/RootDocument'
import { DefaultCatchBoundary } from '~/components/other/DefaultCatchBoundary'
import {
  Theme,
  ThemeProvider,
  useTheme,
} from '~/components/theme/ThemeProvider'
import { getThemeSession } from '~/components/theme/theme.server'

export const meta: MetaFunction = () => {
  return seo({
    title:
      'AlgoAcademy: Transformujemy Naukę Informatyki w Polsce | Nauka Algorytmów i Programowania',
    description: `Dołącz do AlgoAcademy i odkryj nową erę nauki informatyki w Polsce. Nasze kursy z algorytmów i programowania są projektowane, by inspirować i rozwijać przyszłe pokolenia specjalistów IT. Stań się częścią rewolucji edukacyjnej już dziś.`,
    keywords:
      'Algorytmy, Programowanie, Edukacja informatyczna, Nauka informatyki, Kursy IT, Rozwój umiejętności IT, AlgoAcademy Polska, Innowacje w edukacji, Programowanie dla początkujących, Zaawansowane algorytmy',
  })
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },

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
    {
      rel: 'stylesheet',
      href: prismThemeDark,
    },
    {
      rel: 'stylesheet',
      href: prismThemeLight,
    },
    {
      rel: 'stylesheet',
      href: custom,
    },
  ]
}

export type LoaderData = {
  theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  }

  return data
}

export default function App() {
  const data = useLoaderData<LoaderData>()

  return (
    <ThemeProvider specifiedTheme={data?.theme}>
      <_App />
    </ThemeProvider>
  )
}

export const _App = () => {
  const [theme] = useTheme()
  return (
    <RootDocument theme={theme}>
      <Outlet />
    </RootDocument>
  )
}

export const ErrorBoundary = () => {
  const error = useRouteError()

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <ThemeProvider specifiedTheme={null}>
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
      </ThemeProvider>
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
    <ThemeProvider specifiedTheme={null}>
      <RootDocument title="Error!">
        <div>
          <h1>There was an error!</h1>
          <p>{errorMessage}</p>
        </div>
      </RootDocument>
    </ThemeProvider>
  )
}
