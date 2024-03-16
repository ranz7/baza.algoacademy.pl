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
import { LinkOrA } from '~/components/other/LinkOrA'

const actions = [
  {
    name: 'Język C',
    description: 'Idealny do systemów wbudowanych i programowania systemowego.',
    href: '/knowledge/c',
    icon: CLogo,
  },
  {
    name: 'Olimpiada Informatyczna Juniorów',
    description:
      'Poznaj tajniki złożonych problemów algorytmicznych i zdobądź tytuł',
    href: '/knowledge/oij',
    icon: OIJLogo,
  },
  {
    name: 'Język C++',
    description: 'Idealny dla programów, gdzie szybkość ma znaczenie',
    href: '/knowledge/cpp',
    icon: CppLogo,
  },
  {
    name: 'Olimpiada Informatyczna',
    description:
      'Odnieś sukces w najbardziej cenionym konkursie informatycznym w Polsce',
    href: '/knowledge/oi',
    icon: OILogo,
  },
  {
    name: 'Język Python',
    description:
      'Idealny do analizy danych, systemów inteligentych i automatyzacji',
    href: '/knowledge/python',
    icon: SiPython,
  },
  {
    name: 'Algorytmy i Struktury Danych',
    description:
      'Zrozum podstawy wydajności programów i zabłyśnij na interview',
    href: '/knowledge/aisd',
    icon: TbBinaryTree,
  },
  {
    name: 'Język JavaScript',
    description:
      'Idealny do tworzenia interaktywnych aplikacji i technologii webowych',
    href: '/knowledge/js',
    icon: JsLogo,
  },
  {
    name: 'Sztuczna Inteligencja',
    description:
      'Naucz się najbardziej dynamicznie rozwijającej się technologii',
    href: '/knowledge/ai',
    icon: AiOutlineRobot,
  },
  {
    name: 'Język SQL',
    description: 'Idealny do tworzenia i manipulacji bazami danych',
    href: '/knowledge/sql',
    icon: SqlLogo,
  },
  {
    name: 'Efektywna Nauka',
    description: 'Poznaj techniki wydajnej nauki i zwiększ swoją produktywność',
    href: '/knowledge/nauka',
    icon: BiBrain,
  },
]

const SubjectList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {actions.map((product) => (
            <LinkOrA to={'/SUBJECT_NAME'}>
              <div
                key={product.name}
                className="group my-5 border-2 p-3 relative neon-hover border-gray-100 min-h-20"
              >
                <div className="flex items-center">
                  <h3 className="text-base flex-1 font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <product.icon />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
            </LinkOrA>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubjectList
