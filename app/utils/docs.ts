import { json } from '@remix-run/node'
import { extractFrontMatter, fetchRepoFile } from '~/utils/documents.server'
import RemoveMarkdown from 'remove-markdown'

export async function loadDocs({
  repo,
  docPath,
}: {
  repo: string
  docPath: string
}) {
  if (!docPath) {
    throw new Error('Invalid docPath')
  }
  const filePath = `${docPath}.md`
  const fetched = await fetchRepoFile(repo, filePath)

  const frontMatter = extractFrontMatter(fetched?.text ?? '')
  const description = RemoveMarkdown(frontMatter.excerpt ?? '')

  return json(
    {
      title: frontMatter.data?.title,
      section: frontMatter.data?.section,
      keywords: frontMatter.data?.keywords,
      readTime: frontMatter.data?.readTime,
      updateTime: frontMatter.data?.updateTime,
      description,
      filePath,
      content: frontMatter.content,
      repo,
    },
    {
      headers: {
        'Cache-Control': 's-maxage=1, stale-while-revalidate=300',
      },
    }
  )
}
