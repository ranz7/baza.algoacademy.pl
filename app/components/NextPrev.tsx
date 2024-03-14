import { LinkOrA } from '~/components/LinkOrA'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import * as React from 'react'

// @ts-ignore
const NextPrev = ({children, prevItem, colorFrom,nextItem, colorTo, textColor}) => {
  return <div className='flex w-full flex-1'>
    <div className='min-w-0 min-h-0 flex relative justify-center flex-1'>
      {children}
      <div
        className='fixed bottom-0 left-0 right-0
                        lg:pl-[250px] z-10'
      >
        <div className='p-4 flex justify-center gap-4'>
          {prevItem ? (
            <LinkOrA
              to={prevItem.to}
              className='flex gap-2 items-center py-1 px-2 text-sm self-start rounded-md
                bg-white text-gray-600 dark:bg-black dark:text-gray-400
                shadow-lg dark:border dark:border-gray-800
                lg:text-lg'
            >
              <FaArrowLeft /> {prevItem.label}
            </LinkOrA>
          ) : null}
          {nextItem ? (
            <LinkOrA
              to={nextItem.to}
              className='py-1 px-2 text-sm self-end rounded-md
                  bg-white dark:bg-black
                  shadow-lg dark:border dark:border-gray-800
                  lg:text-lg
                  '
            >
              <div className='flex gap-2 items-center font-bold'>
                    <span
                      className={`bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}
                    >
                      {nextItem.label}
                    </span>{' '}
                <FaArrowRight className={textColor} />
              </div>
            </LinkOrA>
          ) : null}
        </div>
      </div>
    </div>
  </div>
}

export default NextPrev
