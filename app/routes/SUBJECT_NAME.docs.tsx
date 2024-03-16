import { json, Outlet, useLoaderData } from '@remix-run/react'
import {
  colorFrom,
  colorTo,
  getBranch,
  repo,
  textColor,
} from '~/projects/SUBJECT_NAME'
import { seo } from '~/utils/seo'
import { getAlgoAcademyConfig } from '~/utils/config'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { DocsLayout } from '~/components/docs/DocsLayout'

export const loader = async (context: LoaderFunctionArgs) => {
  const { version } = context.params
  const branch = getBranch(version)

  const config = await getAlgoAcademyConfig(repo, branch)

  return json({
    config,
    version,
  })
}

export const meta: MetaFunction = () => {
  return seo({
    title: 'Algo Academy SUBJECT_NAME Docs | SUBJECT_NAME',
    description: 'DOC DESCRIPTION',
  })
}

export default function DocsRoute() {
  const { version, config } = useLoaderData<typeof loader>()

  return (
    <DocsLayout
      name="SUBJECT_NAME"
      colorFrom={colorFrom}
      colorTo={colorTo}
      textColor={textColor}
      config={config}
      repo={repo}
    >
      <Outlet />
    </DocsLayout>
  )
}
