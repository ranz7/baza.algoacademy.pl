import * as React from 'react'
import { NavLink, useMatches, useParams } from '@remix-run/react'
import type { AvailableOptions } from '~/components/Select'
import { last } from '~/utils/utils'
import type { ConfigSchema } from '~/utils/config'
import Header from '~/components/Header'
import NextPrev from '~/components/NextPrev'
import { Navigation } from '~/components/Navigation'

const useMenuConfig = ({
                         config
                       }: {
  config: ConfigSchema
  repo: string
}) => {
  return [
    ...config.menu.map((d) => {
      return {
        label: d.label,
        children: [
          ...d.children.map((d) => ({ ...d, badge: 'core' }))
        ]
      }
    })
  ].filter(Boolean)
}


type DocsLayoutProps = {
  name: string
  colorFrom: string
  colorTo: string
  textColor: string
  config: ConfigSchema
  repo: string
  children: React.ReactNode
}

export function DocsLayout({
                             name,
                             colorFrom,
                             colorTo,
                             textColor,
                             config,
                             repo,
                             children
                           }: DocsLayoutProps) {
  const menuConfig = useMenuConfig({ config, repo })

  const matches = useMatches()
  const lastMatch = last(matches)

  const flatMenu = React.useMemo(
    () => menuConfig.flatMap((d) => d.children),
    [menuConfig]
  )

  const docsMatch = matches.find((d) => d.pathname.includes('/docs'))

  const relativePathname = lastMatch.pathname.replace(
    docsMatch!.pathname + '/',
    ''
  )

  const index = flatMenu.findIndex((d) => d.to === relativePathname)
  const prevItem = flatMenu[index - 1]
  const nextItem = flatMenu[index + 1]


  return (
    <div><Header colorFrom={colorFrom} colorTo={colorTo} name={name} />

      <div
        className={`min-h-screen mx-auto flex flex-col lg:flex-row w-full transition-all duration-300`}
      >
        <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
          <Navigation navigation={menuConfig} />
        </div>
        <NextPrev prevItem={prevItem} colorFrom={colorFrom} nextItem={nextItem} colorTo={colorTo}
                  textColor={textColor}>{children}</NextPrev>
      </div>
    </div>
  )
}
