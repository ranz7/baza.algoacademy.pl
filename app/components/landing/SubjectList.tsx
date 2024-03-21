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
import { gradient as AISDgradient } from '~/projects/AISD'
import { gradient as CPPgradient } from '~/projects/CPP'
import { gradient as OIgradient } from '~/projects/OI'
import { gradient as OIJgradient } from '~/projects/OIJ'

const actions = [
  {
    name: 'Język C',
    description: 'Idealny do systemów wbudowanych i programowania systemowego.',
    href: '',
    icon: CLogo,
    gradient: 'from-gray-500 to-neutral-500',
  },
  {
    name: 'Olimpiada Informatyczna Juniorów',
    description:
      'Poznaj tajniki złożonych problemów algorytmicznych i zdobądź tytuł',
    href: '/OIJ',
    icon: OIJLogo,
    gradient: OIJgradient,
  },
  {
    name: 'Język C++',
    description: 'Idealny dla programów, gdzie szybkość ma znaczenie',
    href: 'CPP',
    icon: CppLogo,
    gradient: CPPgradient,
  },
  {
    name: 'Olimpiada Informatyczna',
    description:
      'Odnieś sukces w najbardziej cenionym konkursie informatycznym w Polsce',
    href: 'OI',
    icon: OILogo,
    gradient: OIgradient,
  },
  {
    name: 'Język Python',
    description:
      'Idealny do analizy danych, systemów inteligentych i automatyzacji',
    href: '',
    icon: SiPython,
    gradient: 'from-gray-500 to-neutral-500',
  },
  {
    name: 'Algorytmy i Struktury Danych',
    description:
      'Zrozum podstawy wydajności programów i zabłyśnij na interview',
    href: 'AISD',
    icon: TbBinaryTree,
    gradient: AISDgradient,
  },
  {
    name: 'Język JavaScript',
    description:
      'Idealny do tworzenia interaktywnych aplikacji i technologii webowych',
    href: '',
    icon: JsLogo,
    gradient: 'from-gray-500 to-neutral-500',
  },
  {
    name: 'Sztuczna Inteligencja',
    description:
      'Naucz się najbardziej dynamicznie rozwijającej się technologii',
    href: '',
    icon: AiOutlineRobot,
    gradient: 'from-gray-500 to-neutral-500',
  },
  {
    name: 'Język SQL',
    description: 'Idealny do tworzenia i manipulacji bazami danych',
    href: '',
    icon: SqlLogo,
    gradient: 'from-gray-500 to-neutral-500',
  },
  {
    name: 'Efektywna Nauka',
    description: 'Poznaj techniki wydajnej nauki i zwiększ swoją produktywność',
    href: '',
    icon: BiBrain,
    gradient: 'from-gray-500 to-neutral-500',
  },
]

const SubjectList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-6 gap-y-0 lg:gap-x-8">
          {actions.map((product) => (
            <LinkOrA
              key={product.name}
              to={product.href}
              disabled={product.href === ''}
            >
              <div
                key={product.name}
                className="group my-5 border-2 p-3 relative neon-hover border-gray-100 min-h-20"
              >
                <div className="flex items-center">
                  <h3
                    className={`text-base flex-1 font-semibold  
                    bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                  >
                    {product.name}
                  </h3>
                  <product.icon color="black" />
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
