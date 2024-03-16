import { FaEdit } from 'react-icons/fa'
import { RenderMarkdown } from '~/components/docs/md/RenderMarkdown'
import { LinkOrA } from '~/components/LinkOrA'

export function Doc({
  title,
  section,
  content,
  repo,
  branch,
  filePath,
}: {
  title: string
  section: string
  content: string
  repo: string
  branch: string
  filePath: string
}) {
  return (
    <article className="p-4 lg:p-6 overflow-auto w-full">
      {(title || section) && (
        <header className="space-y-1">
          {section && (
            <p className="font-display text-sm font-medium text-sky-500">
              {section}
            </p>
          )}
          {title && (
            <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
              {title}
            </h1>
          )}
        </header>
      )}
      <div className="h-9" />
      <div className="h-px bg-gray-500 opacity-20" />
      <div className="h-9" />
      <RenderMarkdown>{content}</RenderMarkdown>
      <div className="h-12" />
      <div className="w-full h-px bg-gray-500 opacity-30" />
      <div className="py-4 opacity-70">
        <LinkOrA
          to={`https://github.com/${repo}/tree/${branch}/${filePath}`}
          className="flex items-center gap-2"
        >
          <FaEdit /> Edit on GitHub
        </LinkOrA>
      </div>
      <div className="h-24" />
    </article>
  )
}
