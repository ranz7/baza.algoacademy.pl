import { json, Outlet, useLoaderData } from '@remix-run/react'
import {
  getBranch,
  gradient,
  repo,
  shortName,
  textColor,
} from '~/projects/SUBJECT_NAME'
import { getAlgoAcademyConfig } from '~/utils/config'
import type { LoaderFunctionArgs } from '@remix-run/node'
import { DocsLayout } from '~/components/docs/DocsLayout'
import useNavigationConfig from '~/components/docs/hooks/useNavigationConfig'

export const loader = async (context: LoaderFunctionArgs) => {
  const { version } = context.params
  const branch = getBranch(version)

  const config = await getAlgoAcademyConfig(repo, branch)

  return json({
    config,
    version,
  })
}

export default function DocsRoute() {
  const { config } = useLoaderData<typeof loader>()
  const { navigation, prevItem, currentItem, nextItem } = useNavigationConfig({
    config,
    repo,
  })

  return (
    <DocsLayout
      shortName={shortName}
      palete={{ gradient, textColor }}
      navigation={navigation}
    >
      <Outlet context={{ prevItem, currentItem, nextItem }} />
    </DocsLayout>
  )
}
