import { Fragment, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const navigation = {
  solutions: [
    { name: 'Mentoring', href: 'https://algoacademy.pl/mentoring' },
    { name: 'Dla maturzystów', href: 'https://algoacademy.pl/maturzysci' },
    { name: 'Dla olimpijczyków', href: 'https://algoacademy.pl/olimpijczycy' },
    { name: 'Dla studentów', href: 'https://algoacademy.pl/studenci' },
  ],
  support: [
    { name: 'Kurs C', href: 'https://algoacademy.pl/c' },
    { name: 'Kurs C++', href: 'https://algoacademy.pl/cpp' },
    { name: 'Kurs Python', href: 'https://algoacademy.pl/python' },
    { name: 'Kurs JavaScript', href: 'https://algoacademy.pl/js' },
    { name: 'Kurs SQL', href: 'https://algoacademy.pl/sql' },
  ],
  company: [
    { name: 'Dla firm', href: 'https://algoacademy.pl/dla-firm' },
    {
      name: 'Zostań partnerem',
      href: 'https://algoacademy.pl/zostan-partnerem',
    },
    {
      name: 'Program lojalnościowy',
      href: 'https://algoacademy.pl/program-lojalnosciowy',
    },
  ],
  legal: [
    { name: 'Praca', href: 'https://algoacademy.pl/praca' },
    { name: 'FAQ', href: 'https://algoacademy.pl/kontakt/#faq' },
    { name: 'Regulamin', href: 'https://algoacademy.pl/regulamin' },
    {
      name: 'Polityka prywatności',
      href: 'https://algoacademy.pl/polityka-prywatnosci',
    },
  ],
  social: [
    {
      name: 'Facebook',
      href: '/404',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '/404',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '/404',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/orgs/AlgoAcademyPL/dashboard',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '/404',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function AAFooter() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const form = useRef()

  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState(false)

  // emailjs.sendForm('service_n7f41se', 'template_s5u0ew6', form.current, 'Sqfgw93cQNErqy12k')

  return (
    <footer className="pt-20" aria-labelledby="footer-heading">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 dark:text-gray-100 text-gray-900"
                      >
                        Pomyślnie zapisano do newslettera
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm dark:text-gray-100 text-gray-500">
                          Dziękujemy za zaufanie! Od dzisiaj na Twoją skrzynkę
                          mailową będziemy wysyłać najciekawsze informacje,
                          które pomogą Ci w nauce informatyki.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-aablue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      Powrót
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 dark:text-gray-100 text-gray-900">
                  {' '}
                  Usługi{' '}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 dark:text-gray-100 text-gray-600 hover:dark:text-gray-100 text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 dark:text-gray-100 text-gray-900">
                  {' '}
                  Kursy{' '}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 dark:text-gray-100 text-gray-600 hover:dark:text-gray-100 text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 dark:text-gray-100 text-gray-900">
                  {' '}
                  Współpraca{' '}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 dark:text-gray-100 text-gray-600 hover:dark:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 dark:text-gray-100 text-gray-900">
                  {' '}
                  Informacje{' '}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 dark:text-gray-100 text-gray-600 hover:dark:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 dark:text-gray-100 text-gray-900">
              {' '}
              Zapisz się do naszego newslettera{' '}
            </h3>
            <p className="mt-2 text-sm leading-6 dark:text-gray-100 text-gray-600">
              Otrzymaj dostęp do promocji oraz materiałów specjalnych
            </p>

            <form
              ref={form}
              className="mt-6 sm:flex sm:max-w-md"
              onSubmit={handleSubmit((data) => {
                const topicInput = document.createElement('input')
                topicInput.type = 'hidden'
                topicInput.name = 'topic'
                topicInput.value = 'Nowy zapis do NEWSLETTERA'
                form.current.appendChild(topicInput)

                emailjs.sendForm(
                  'service_n7f41se',
                  'template_llu0msi',
                  form.current,
                  'Sqfgw93cQNErqy12k'
                )

                form.current.removeChild(topicInput)
                setOpen(true)
                form.current.reset()
              })}
            >
              <label htmlFor="emailAddress" className="sr-only">
                Email
              </label>
              <input
                // type="email"
                {...register('emailAddress', {
                  required: 'To pole jest wymagane',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Niepoprawny adres email',
                  },
                })}
                name="emailAddress"
                id="emailAddress"
                // autoComplete="email"
                // required
                className={
                  'w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:dark:text-gray-100 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aablue sm:w-64 sm:text-sm sm:leading-6 xl:w-full ' +
                  (clicked && errors.emailAddress ? 'focus:ring-red-500' : '')
                }
                placeholder="Email"
              />
              <div></div>

              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  onClick={() => {
                    setClicked(1)
                  }}
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-aablue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aablue"
                >
                  Zapisz się
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="dark:text-gray-100 hover:dark:text-gray-100 text-gray-800"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="mt-8 flex items-center text-sm leading-5 dark:text-gray-100 text-gray-500 md:order-1 md:mt-0">
            <a
              href="tel:+48 789 579 079"
              className="flex items-center text-gray-500  dark:text-gray-100 hover:text-white"
            >
              <PhoneIcon className="mr-2 h-5" aria-hidden="true" />
              789 579 079
            </a>

            <a
              href="mailto:kontakt@algoacademy.pl"
              className="flex items-center text-gray-500  dark:text-gray-100 hover:text-white"
            >
              <EnvelopeIcon className="ml-6 mr-2 h-6" aria-hidden="true" />
              kontakt@algoacademy.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// &copy; 2023 AlgoAcademy, Wszelkie prawa zastrzeżone.
