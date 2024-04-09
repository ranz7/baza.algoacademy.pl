import { MarkdownRenderer } from '~/components/docs/md/MarkdownRenderer'
import * as React from 'react'
import { EditOnGithub } from '~/components/docs/EditOnGithub'

export function IndexedArticle({
  title,
  content,
  readTime,
  updateTime,
  repo,
  filePath,
}: {
  title?: string
  content: string
  readTime?: string
  updateTime?: string
  repo: string
  filePath: string
}) {
  return (
    <article>
      {title && (
        <header className="space-y-1">
          {title && (
            <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
              {title}
            </h1>
          )}
        </header>
      )}
      <EditOnGithub repo={repo} filePath={filePath} />

      <div className="pt-1 pb-4 ">
        {updateTime && (
          <div data-nosnippet="true" className=" text-gray-500">
            Aktualizacja: {updateTime}
          </div>
        )}
        {readTime && (
          <div data-nosnippet="true" className=" text-gray-500">
            Zajmie: {readTime}
          </div>
        )}
      </div>
      <div className="h-px bg-gray-500 opacity-20" />
      <div className="h-9" />
      <MarkdownRenderer>{content}</MarkdownRenderer>
      <div className="h-12" />
    </article>
  )
}
