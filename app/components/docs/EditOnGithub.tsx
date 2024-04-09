import { LinkOrA } from '~/components/other/LinkOrA'
import { FaEdit } from 'react-icons/fa'
import * as React from 'react'

export function EditOnGithub({
  repo,
  filePath,
}: {
  repo: string
  filePath: string
}) {
  return (
    <div className="py-4 opacity-70">
      <LinkOrA
        to={`/edit?repo=${repo}&filePath=${filePath.replace(/\.md$/, '')}`}
        className="flex items-center gap-2"
      >
        <FaEdit /> Pomóż nam rozwinąć{' '}
        <span
          className={`font-bold bg-clip-text bg-gradient-to-r  to-fuchsia-500 from-sky-500  text-transparent`}
        >
          tę stronę!
        </span>
      </LinkOrA>
    </div>
  )
}
