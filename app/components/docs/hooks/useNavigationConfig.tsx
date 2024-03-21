import { useMatches } from '@remix-run/react'
import { last } from '~/utils/utils'
import * as React from 'react'
import { ConfigSchema } from '~/utils/config'

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

const useNavigationConfig = ({
  config,
  repo,
}: {
  config: ConfigSchema
  repo: string
}) => {
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
  const currentItem = flatMenu[index]

  return {
    navigation: menuConfig,
    prevItem,
    nextItem,
    currentItem,
  }
}

export default useNavigationConfig
