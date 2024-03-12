import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { Scarf } from '~/components/Scarf'
import { seo } from '~/utils/seo'

export const meta: MetaFunction = () => {
  return seo({
    title: 'AlgoAcademy SUBJECT_NAME | SUBJECT_NAME',
    description: 'Headless range and multi-range slider utilities, React',
    image: 'https://github.com/AlgoAcademyPL/SUBJECT_NAME/raw/main/media/header.png',
  })
}

export const loader = async (context: LoaderFunctionArgs) => {
  if (
    !context.request.url.includes('/SUBJECT_NAME/v') &&
    !context.request.url.includes('/SUBJECT_NAME/latest')
  ) {
    return redirect(`${new URL(context.request.url).origin}/SUBJECT_NAME/latest`)
  }

  return new Response('OK')
}

export default function RouteReactTable() {
  return (
    <>
      <Outlet />
      <Scarf id="dd278e06-bb3f-420c-85c6-6e42d14d8f61" />
    </>
  )
}
