import * as React from 'react'
import Header from '~/components/header/Header'
import NavigationMenu from '~/components/docs/LeftMenu'
import AAFooter from '~/components/common/Footer'

type DocsLayoutProps = {
  name: string
  palete: { colorFrom: string; colorTo: string; textColor: string }
  children: React.ReactNode
  navigation: any
}

export function DocsLayout({
  name,
  palete,
  children,
  navigation,
}: DocsLayoutProps) {
  return (
    <div>
      <Header
        navigation={navigation}
        name={name}
        colorFrom={palete.colorFrom}
        colorTo={palete.colorTo}
      />
      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <NavigationMenu name={name} navigation={navigation} palete={palete} />

        {children}
      </div>
      <AAFooter />
    </div>
  )
}
