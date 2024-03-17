import { Navigation } from '~/components/header/Navigation'
import * as React from 'react'
import SubjectLogo from '~/components/header/SubjectLogo'

const LeftMenu = ({ navigation, name, palete }: any) => {
  return (
    <div className="hidden lg:relative lg:block lg:flex-none">
      <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
      <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
      <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
      <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
        <SubjectLogo name={name} palete={palete} />
        <div className={'py-2'} />
        <Navigation navigation={navigation} />
      </div>
    </div>
  )
}

export default LeftMenu
