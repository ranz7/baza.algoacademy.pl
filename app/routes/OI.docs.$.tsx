import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { repo } from '~/projects/OI'
import { seo } from '~/utils/seo'
import { loadDocs } from '~/utils/docs'
import { Doc } from '~/components/docs/Doc'
import { DefaultErrorBoundary } from '~/components/other/DefaultErrorBoundary'

export const loader = async (context: LoaderFunctionArgs) => {
  const { '*': docsPath, version } = context.params

  return loadDocs({
    repo,

    docPath: `docs/${docsPath}`,
  })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return seo({
    title: `${data?.title} ${data?.repo} | Baza AlgoAcademy`,
    description: `${data?.description}`,
    keywords: `${data?.keywords}, Algorytmy, Programowanie, Edukacja informatyczna, Nauka informatyki, Kursy IT, Rozwój umiejętności IT, AlgoAcademy Polska, Innowacje w edukacji, Programowanie dla początkujących, Zaawansowane algorytmy`,
  })
}

export const ErrorBoundary = DefaultErrorBoundary

export default function Docs() {
  const data = useLoaderData<typeof loader>()

  return <Doc {...data} />
}
