import { SiPython } from 'react-icons/si'
import OIJLogo from 'app/icons/OIJLogo'
import CppLogo from 'app/icons/CppLogo'
import OILogo from 'app/icons/OILogo'
import CLogo from 'app/icons/CLogo'
import JsLogo from 'app/icons/JsLogo'
import SqlLogo from 'app/icons/SqlLogo'

import { TbBinaryTree } from 'react-icons/tb'
import { AiOutlineRobot } from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'

const actions = [
  {
    name: 'Język C',
    description: 'Idealny do systemów wbudowanych i programowania systemowego.',
    href: '/knowledge/c',
    icon: CLogo
  },
  {
    name: 'Olimpiada Informatyczna Juniorów',
    description:
      'Poznaj tajniki złożonych problemów algorytmicznych i zdobądź tytuł',
    href: '/knowledge/oij',
    icon: OIJLogo
  },
  {
    name: 'Język C++',
    description: 'Idealny dla programów, gdzie szybkość ma znaczenie',
    href: '/knowledge/cpp',
    icon: CppLogo
  },
  {
    name: 'Olimpiada Informatyczna',
    description:
      'Odnieś sukces w najbardziej cenionym konkursie informatycznym w Polsce',
    href: '/knowledge/oi',
    icon: OILogo
  },
  {
    name: 'Język Python',
    description:
      'Idealny do analizy danych, systemów inteligentych i automatyzacji',
    href: '/knowledge/python',
    icon: SiPython
  },
  {
    name: 'Algorytmy i Struktury Danych',
    description:
      'Zrozum podstawy wydajności programów i zabłyśnij na interview',
    href: '/knowledge/aisd',
    icon: TbBinaryTree
  },
  {
    name: 'Język JavaScript',
    description:
      'Idealny do tworzenia interaktywnych aplikacji i technologii webowych',
    href: '/knowledge/js',
    icon: JsLogo
  },
  {
    name: 'Sztuczna Inteligencja',
    description:
      'Naucz się najbardziej dynamicznie rozwijającej się technologii',
    href: '/knowledge/ai',
    icon: AiOutlineRobot
  },
  {
    name: 'Język SQL',
    description: 'Idealny do tworzenia i manipulacji bazami danych',
    href: '/knowledge/sql',
    icon: SqlLogo
  },
  {
    name: 'Efektywna Nauka',
    description: 'Poznaj techniki wydajnej nauki i zwiększ swoją produktywność',
    href: '/knowledge/nauka',
    icon: BiBrain
  }
]

const SubjectList = () => {
  return (
    <div
      className='max-w-7xl m-auto divide-y divide-gray-200  rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 gap-5 bg-transparent sm:divide-y-0'>
      {actions.map((action) => (
        <li className='text-sm leading-6'>
          <div className='relative group'>
            <div
              className='absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200'>
            </div>
            <a href='/SUBJECT_NAME' className='cursor-pointer'>
              <div
                className='relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5'>
                <div className='flex items-center space-x-4'>
                                   <div>
                    <h3 className='text-lg font-semibold text-white'>{action.name}</h3>
                  </div>
                </div>
                <p className='leading-normal text-gray-300 text-md'>{action.description}</p>
              </div>
            </a>
          </div>
        </li>
      ))}
    </div>
  )
}


export default SubjectList
