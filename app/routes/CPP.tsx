import type { LoaderFunctionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export const loader = async (context: LoaderFunctionArgs) => {
  if (
    !context.request.url.includes('/CPP/v') &&
    !context.request.url.includes('/CPP/')
  ) {
    return redirect(`${new URL(context.request.url).origin}/CPP/docs/overview`)
  }

  return new Response('OK')
}

export default function RouteReactTable() {
  return (
    <>
      <Outlet />
    </>
  )
  // <Scarf id="dd278e06-bb3f-420c-85c6-6e42d14d8f61" />
}
