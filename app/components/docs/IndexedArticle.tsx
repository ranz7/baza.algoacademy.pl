import { MarkdownRenderer } from '~/components/docs/md/MarkdownRenderer'
import * as React from 'react'

export function IndexedArticle({
  title,
  content,
}: {
  title: string
  content: string
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
      <div className="h-9" />
      <div className="h-px bg-gray-500 opacity-20" />
      <div className="h-9" />
      <MarkdownRenderer>{content}</MarkdownRenderer>
      <div className="h-12" />
    </article>
  )
}
