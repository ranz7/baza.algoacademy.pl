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

export const meta: MetaFunction = () => {
  return seo({
    title: 'Algo Academy SUBJECT_NAME Docs | SUBJECT_NAME',
    description: 'DOC DESCRIPTION',
  })
}

export default function DocsRoute() {
  const { config } = useLoaderData<typeof loader>()
  const { navigation, prevItem, nextItem } = useNavigationConfig({
    config,
    repo,
  })

  return (
    <DocsLayout
      name="SUBJECT_NAME"
      palete={{ colorFrom, colorTo, textColor }}
      navigation={navigation}
    >
      <Outlet context={{ prevItem, nextItem }} />
    </DocsLayout>
  )
}
