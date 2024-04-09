import { useLocation } from '@remix-run/react'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const ShareUs = () => {
  const location = useLocation()
  const url = 'https://baza.algoacademy.pl/' + location.pathname
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
    })
  }

  return (
    <div data-nosnippet="true" className="sharing-buttons flex flex-wrap">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Options
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <button
                  className={`border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 `}
                  onClick={copyToClipboard}
                  aria-label="Copy to Clipboard"
                >
                  {copied ? (
                    <svg
                      className="h-4 w-4 text-white-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 text-white-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <title>Copy</title>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  )}
                </button>
              </Menu.Item>{' '}
              <Menu.Item>
                <a
                  className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  target="_blank"
                  rel="noopener"
                  href={`https://facebook.com/sharer/sharer.php?u=${url}`}
                  aria-label="Share on Facebook"
                  draggable="false"
                >
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4"
                  >
                    <title>Facebook</title>
                    <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
                  </svg>
                </a>
              </Menu.Item>{' '}
              <Menu.Item>
                <a
                  className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  target="_blank"
                  rel="noopener"
                  href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=Zobacz%20to!&amp;summary=Zobacz%20to!&amp;source=${url}`}
                  aria-label="Share on Linkedin"
                  draggable="false"
                >
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4"
                  >
                    <title>Linkedin</title>
                    <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"></path>
                  </svg>
                </a>
              </Menu.Item>{' '}
              <Menu.Item>
                <a
                  className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  target="_blank"
                  rel="noopener"
                  href={`https://reddit.com/submit/?url=${url}&amp;resubmit=true&amp;title=Zobacz%20to!`}
                  aria-label="Share on Reddit"
                  draggable="false"
                >
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4"
                  >
                    <title>Reddit</title>
                    <path d="M440 204c-15 0-28 6-38 15-35-24-83-40-137-42l28-125 88 20c0 22 18 39 39 39 22 0 40-18 40-39s-17-40-40-40c-15 0-28 9-35 22l-97-22c-5-1-10 3-11 7l-31 138c-53 2-100 18-136 43a53 53 0 0 0-38-16c-56 0-74 74-23 100l-3 24c0 84 95 152 210 152 117 0 211-68 211-152 0-8-1-17-3-25 50-25 32-99-24-99zM129 309a40 40 0 1 1 80 0 40 40 0 0 1-80 0zm215 93c-37 37-139 37-176 0-4-3-4-9 0-13s10-4 13 0c28 28 120 29 149 0 4-4 10-4 14 0s4 10 0 13zm-1-54c-22 0-39-17-39-39a39 39 0 1 1 39 39z"></path>
                  </svg>
                </a>
              </Menu.Item>{' '}
              <Menu.Item>
                <a
                  className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  target="_blank"
                  rel="noopener"
                  href={`https://telegram.me/share/url?text=Zobacz%20to!&amp;url=${url}`}
                  aria-label="Share on Telegram"
                  draggable="false"
                >
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4"
                  >
                    <title>Telegram</title>
                    <path d="M256 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm115 169c-4 39-20 134-28 178-4 19-10 25-17 25-14 2-25-9-39-18l-56-37c-24-17-8-25 6-40 3-4 67-61 68-67l-1-4-5-1q-4 1-105 70-15 10-27 9c-9 0-26-5-38-9-16-5-28-7-27-16q1-7 18-14l145-62c69-29 83-34 92-34 2 0 7 1 10 3l4 7a43 43 0 0 1 0 10z"></path>
                  </svg>
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ShareUs
