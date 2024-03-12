import { Outlet, json, useLoaderData } from '@remix-run/react'
import {
  repo,
  getBranch,
  colorTo,
  latestVersion,
  colorFrom,
  textColor,
  availableVersions,
} from '~/projects/SUBJECT_NAME'
import { seo } from '~/utils/seo'
import { DocsLayout } from '~/components/DocsLayout'
import { getAlgoAcademyConfig } from '~/utils/config'
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'

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
      version={version === 'latest' ? latestVersion : version!}
      colorFrom={colorFrom}
      colorTo={colorTo}
      textColor={textColor}
      config={config}
      availableVersions={availableVersions}
      repo={repo}
    >
      <Outlet />
    </DocsLayout>
  )
}
