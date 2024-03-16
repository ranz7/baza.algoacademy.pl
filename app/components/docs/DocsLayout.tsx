import * as React from 'react'
import { useMatches } from '@remix-run/react'
import { last } from '~/utils/utils'
import type { ConfigSchema } from '~/utils/config'
import Header from '~/components/header/Header'
import PrevNext from '~/components/docs/PrevNext'
import NavigationMenu from '~/components/docs/LeftMenu'

const useMenuConfig = ({ config }: { config: ConfigSchema; repo: string }) => {
  return [
    ...config.menu.map((d) => {
      return {
        label: d.label,
        children: [...d.children.map((d) => ({ ...d, badge: 'core' }))],
      }
    }),
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
  children,
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
    <div>
      <Header
        navigation={menuConfig}
        colorFrom={colorFrom}
        colorTo={colorTo}
        name={name}
      />
      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <NavigationMenu menuConfig={menuConfig} />
        <PrevNext prevItem={prevItem} nextItem={nextItem}>
          {children}
        </PrevNext>
      </div>
    </div>
  )
}
