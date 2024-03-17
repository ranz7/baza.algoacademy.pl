import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { LinkOrA } from '~/components/other/LinkOrA'
import { CloseIcon } from '~/icons/CloseIcon'
import { MenuIcon } from '~/icons/MenuIcon'
import { Navigation } from '~/components/header/Navigation'

export function MobileNavigation({ navigation }: any) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <MenuIcon className="h-6 w-6 stroke-slate-500" />
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <Dialog.Panel className="min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 dark:bg-slate-900 sm:px-6">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <CloseIcon className="h-6 w-6 stroke-slate-500" />
            </button>
            <LinkOrA to="/" className="ml-6" aria-label="Home page">
              <img
                src="/algo-academy-logo-white.png"
                className="hidden h-7 dark:block"
              />
              <img
                src="/algo-academy-logo-dark.png"
                className="h-7 dark:hidden"
              />
            </LinkOrA>
          </div>
          <Navigation navigation={navigation} className="mt-5 px-1" />
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
