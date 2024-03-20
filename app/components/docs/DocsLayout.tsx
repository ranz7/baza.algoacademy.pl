import * as React from 'react'
import Header from '~/components/header/Header'
import NavigationMenu from '~/components/docs/LeftMenu'
import AAFooter from '~/components/common/Footer'
import Baner from '~/components/landing/Baner'

type DocsLayoutProps = {
  palete: { gradient: string; textColor: string }
  children: React.ReactNode
  navigation: any
  shortName: string
}

export function DocsLayout({
  palete,
  children,
  navigation,
  shortName,
}: DocsLayoutProps) {
  return (
    <div>
      <Baner />
      <Header
        navigation={navigation}
        gradient={palete.gradient}
        shortName={shortName}
      />
      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <NavigationMenu navigation={navigation} palete={palete} />

        {children}
      </div>
      <AAFooter />
    </div>
  )
}
