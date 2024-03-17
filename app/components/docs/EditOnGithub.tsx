import { LinkOrA } from '~/components/other/LinkOrA'
import { FaEdit } from 'react-icons/fa'
import * as React from 'react'

export function EditOnGithub({
  repo,
  branch,
  filePath,
}: {
  repo: string
  branch: string
  filePath: string
}) {
  return (
    <div className="py-4 opacity-70">
      <LinkOrA
        to={`https://github.com/${repo}/tree/${branch}/${filePath}`}
        className="flex items-center gap-2"
      >
        <FaEdit /> Edit on GitHub
      </LinkOrA>
    </div>
  )
}
