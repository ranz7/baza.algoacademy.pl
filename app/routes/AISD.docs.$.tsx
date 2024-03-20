import { useLoaderData, useParams } from '@remix-run/react'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { getBranch, repo } from '~/projects/AISD'
import { seo } from '~/utils/seo'
import { loadDocs } from '~/utils/docs'
import { Doc } from '~/components/docs/Doc'
import { DefaultErrorBoundary } from '~/components/other/DefaultErrorBoundary'

export const loader = async (context: LoaderFunctionArgs) => {
  const { '*': docsPath, version } = context.params
  const { url } = context.request

  return loadDocs({
    repo,
    branch: getBranch(version),
    docPath: `docs/${docsPath}`,
    currentPath: url,
    redirectPath: url.replace(/\/docs.*/, '/docs/overview'),
  })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return seo({
    title: `${data?.title} ${data?.subject} | Baza AlgoAcademy`,
    description: `${data?.description}`,
    keywords: `${data?.keywords}, Algorytmy, Programowanie, Edukacja informatyczna, Nauka informatyki, Kursy IT, Rozwój umiejętności IT, AlgoAcademy Polska, Innowacje w edukacji, Programowanie dla początkujących, Zaawansowane algorytmy`,
  })
}

export const ErrorBoundary = DefaultErrorBoundary

export default function Docs() {
  const { title, content, filePath } = useLoaderData<typeof loader>()
  const { version } = useParams()
  const branch = getBranch(version)
  return (
    <Doc
      title={title}
      content={content}
      repo={repo}
      branch={branch}
      filePath={filePath}
    />
  )
}
