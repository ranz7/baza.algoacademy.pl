import * as React from 'react'
import { useOutletContext } from '@remix-run/react'
import PrevNext from '~/components/docs/PrevNext'
import { EditOnGithub } from '~/components/docs/EditOnGithub'
import { IndexedArticle } from '~/components/docs/IndexedArticle'
import RightMenu from '~/components/docs/RightMenu'

export function Doc({
  title,
  content,
  repo,
  filePath,
  readTime,
  updateTime,
}: {
  title?: string
  content: string
  repo: string
  filePath: string
  readTime?: string
  updateTime?: string
}) {
  const { prevItem, currentItem, nextItem } = useOutletContext<any>()

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 md:py-16 py-2 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <p className="font-display text-sm font-medium text-sky-500">
          {currentItem.label}
        </p>

        <IndexedArticle
          readTime={readTime}
          updateTime={updateTime}
          title={title}
          content={content}
        />
        <div className="w-full h-px bg-gray-500 opacity-30" />
        <EditOnGithub repo={repo} filePath={filePath} />
        <div className="h-8" />
        <PrevNext prevItem={prevItem} nextItem={nextItem} />
      </div>
      <RightMenu content={content} />
    </>
  )
}
