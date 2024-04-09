import React, { useEffect, useState } from 'react'
import { FaCopy, FaEdit, FaExternalLinkAlt } from 'react-icons/fa'

import { CheckIcon } from '@heroicons/react/24/solid'

const EditNext = ({
  repo,
  filePath,
  content,
  goPrev,
}: {
  content: string
  repo: string
  filePath: string
  goPrev: () => void
}) => {
  const stepsInit = [
    { id: '01', name: '', status: 'complete' },
    { id: '02', name: '', href: '#', status: 'current' },
    { id: '03', name: '', href: '#', status: 'upcoming' },
  ]

  const [copied, setCopied] = useState(false)
  useEffect(() => {
    setCopied(false)
    setSteps(stepsInit)
  }, [content])
  const [steps, setSteps] = useState(stepsInit)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 4000)
  }

  useEffect(() => {
    if (copied) {
      stepsInit[1].status = 'complete'
      stepsInit[2].status = 'current'
      setSteps(stepsInit)
    }
  }, [copied])

  return (
    <div className="flex lg:mt-20 mt-12 w-full flex-col gap-2">
      <div className="flex w-full flex-col justify-center gap-2 lg:gap-4 items-center">
        <h1
          className={`inline-block
            font-black text-5xl
            md:text-6xl`}
        >
          <span
            className={`
            inline-block  bg-clip-text bg-gradient-to-r to-fuchsia-500 from-sky-500 text-transparent
            underline decoration-4 md:decoration-8 underline-offset-[.5rem] md:underline-offset-[1rem] decoration-gray-200 dark:decoration-gray-800
            mb-2
            `}
          >
            Ostatni krok!
          </span>
        </h1>

        <h2
          className="font-bold text-xl lg:text-2xl max-w-xl text-center
             dark:text-white            "
        >
          Dziękujemy za pomóc. Doceniamy twój czas. Rozwińmy bazę{' '}
          <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
            razem!
          </span>
        </h2>
      </div>

      <nav
        className="max-w-3xl dark:shadow-[1px_2px_9px_5px_#0742F5A9] rounded-md mt-10 md:mt-15 lg:mt-25 bg-white w-full justify-self-center self-center"
        aria-label="Progress"
      >
        <ol
          role="list"
          className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex md:flex-1">
              {step.status === 'complete' ? (
                <>
                  {stepIdx === 0 ? (
                    <button
                      onClick={goPrev}
                      className="group flex w-full items-center"
                    >
                      <span className="flex items-center px-6 py-4 text-sm font-medium">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                          <CheckIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="ml-4 text-sm font-medium text-gray-900">
                          Zaktualizuj bazę
                        </span>
                      </span>
                    </button>
                  ) : (
                    <>
                      {stepIdx === 1 ? (
                        <button
                          onClick={copyToClipboard}
                          className="group flex w-full items-center"
                        >
                          <span className="flex items-center px-6 py-4 text-sm font-medium">
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                              <CheckIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="ml-4 flex text-sm font-medium text-gray-900">
                              Skopiowane!
                              <FaCopy className="pl-2  text-xl  self-center" />
                            </span>
                          </span>
                        </button>
                      ) : (
                        <a
                          href={step.href}
                          className="group flex w-full items-center"
                        >
                          <span className="flex items-center px-6 py-4 text-sm font-medium">
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                              <CheckIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="ml-4 text-sm font-medium text-gray-900">
                              {step.name}
                            </span>
                          </span>
                        </a>
                      )}
                    </>
                  )}
                </>
              ) : step.status === 'current' ? (
                <>
                  {stepIdx === 1 ? (
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center px-6 py-4 text-sm font-medium"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                        <span className="text-indigo-600">{step.id}</span>
                      </span>
                      <span className="ml-4 flex flex-col text-sm font-medium text-indigo-600">
                        Skopiuj do schowka!
                        <span className="ml-4 flex text-sm font-medium text-indigo-600">
                          [click me]
                          <FaCopy className="pl-2 text-xl self-center" />
                        </span>
                      </span>
                    </button>
                  ) : (
                    <a
                      href={`https://github.com/AlgoAcademyPl/${repo}/edit/main/${filePath}`}
                      className="flex items-center px-6 py-4 text-sm font-medium"
                      aria-current="step"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                        <span className="text-indigo-600">{step.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-indigo-600">
                        <FaEdit className="text-xl" /> Zaproponuj zmiany
                      </span>
                    </a>
                  )}
                </>
              ) : (
                <a
                  href={`https://github.com/AlgoAcademyPl/${repo}/edit/main/${filePath}`}
                  className="group flex items-center"
                >
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 items-center flex flex-row text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      <span className="mr-2">Zaproponuj zmiany</span>
                      <FaExternalLinkAlt className="text-md text-center" />
                    </span>
                  </span>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default EditNext
