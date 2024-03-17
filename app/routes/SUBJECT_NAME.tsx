import type { LoaderFunctionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader = async (context: LoaderFunctionArgs) => {
  return redirect(
    `${new URL(context.request.url).origin}/SUBJECT_NAME/docs/overview`
  )
}
