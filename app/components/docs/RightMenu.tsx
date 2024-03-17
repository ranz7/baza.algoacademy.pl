import * as React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { useLocation } from '@remix-run/react'

var slugify = require('slugify')

function markdownToObjects(markdown: string) {
  // Split the input by lines and filter out non-heading lines
  const lines = markdown
    .split('\n')
    .filter((line) => line.trim().startsWith('#'))

  return lines
    .map((line) => {
      // Match the leading '#' characters and the rest of the heading
      const match = line.match(/^(#+)\s*(.*)/)
      if (!match) return null // Skip if the line doesn't match the expected format

      const [, hashes, content] = match
      const lvl = hashes.length // Determine the level by the length of the '#' sequence

      return {
        content,
        slug: slugify(content as string, { lower: true }),
        lvl,
      }
    })
    .filter((item) => item && (item.lvl === 1 || item.lvl === 2)) // Only include lvl 1 and 2, filter out null items
}

function collectHeadings(content: string) {
  const data = markdownToObjects(content)

  const result: any[] = []
  let currentParent: any = null

  data.forEach((item: any) => {
    if (item.lvl === 1) {
      const newItem = {
        id: item.slug,
        title: item.content,
        children: [],
      }
      result.push(newItem)
      currentParent = newItem // Update current parent to this new level 1 item
    } else if (item.lvl === 2 && currentParent) {
      // Add to the current parent's children if it's level 2
      currentParent.children.push({
        id: item.slug,
        title: item.content,
      })
    }
    // Ignore items with lvl greater than 2
  })

  return result
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt - 2
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)

    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

const RightMenu = ({ content }: { content: string }) => {
  const tableOfContents = useMemo(() => collectHeadings(content), [content])
  let currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  const location = useLocation()

  return (
    <div className="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {tableOfContents?.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className="font-display text-sm font-medium text-slate-900 dark:text-white"
            >
              Spis treści
            </h2>
            <ol role="list" className="mt-4 space-y-3 text-sm">
              {tableOfContents.map((section) => (
                <li key={section.id}>
                  <h3>
                    <a
                      href={location.pathname + `#${section.id}`}
                      className={clsx(
                        isActive(section)
                          ? 'text-sky-500'
                          : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                      )}
                    >
                      {section.title}
                    </a>
                  </h3>
                  {section.children.length > 0 && (
                    <ol
                      role="list"
                      className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                    >
                      {section.children.map((subSection) => (
                        <li key={subSection.id}>
                          <a
                            href={location.pathname + `#${subSection.id}`}
                            className={
                              isActive(subSection)
                                ? 'text-sky-500'
                                : 'hover:text-slate-600 dark:hover:text-slate-300'
                            }
                          >
                            {subSection.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  )
}

export default RightMenu
