import type { HTMLProps } from 'react'
import { useState } from 'react'
import { MarkdownLink } from '~/components/docs/md/MarkdownLink'
import { CodeBlock } from '~/components/docs/md/CodeBlock'
import { Prose } from '~/components/docs/Prose'
import clsx from 'clsx'
import Markdown from 'markdown-to-jsx'
import { Callout } from '~/components/docs/md/Callout'
import MdYouTube from '~/components/docs/md/MdYouTube'
import MdImage from '~/components/docs/md/MdImage'
import { useLocation } from '@remix-run/react'
import MdLatex from '~/components/docs/md/MdLatex'
import MdBigLatex from '~/components/docs/md/MdBigLatex'

const CustomHeading = ({
  Comp,
  id,
  ...props
}: HTMLProps<HTMLHeadingElement> & {
  Comp: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) => {
  const [copied, setCopied] = useState(false)
  const location = useLocation()

  if (id && ['h1', 'h2'].includes(Comp)) {
    return (
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault()
          setCopied(true)
          navigator.clipboard.writeText(
            window.location.href.replace(location.hash, `#${id}`)
          )
          setTimeout(() => setCopied(false), 1000)
        }}
        className={clsx(copied ? `anchor-copied` : `anchor-heading`)}
      >
        <Comp id={id} {...props} />
      </a>
    )
  }
  return <Comp {...props} />
}

const makeHeading =
  (type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', additionalProps?: string) =>
  (props: HTMLProps<HTMLHeadingElement>) =>
    (
      <CustomHeading
        Comp={type}
        {...props}
        className={clsx(props.className, additionalProps)}
      />
    )

const defaultComponents: any = {
  a: MarkdownLink,
  pre: CodeBlock,
  h1: makeHeading('h1'),
  h2: makeHeading('h2'),
  h3: makeHeading('h3'),
  h4: makeHeading('h4'),
  h5: makeHeading('h5'),
  h6: makeHeading('h6'),
  Info: { component: Callout, props: { type: 'note' } },
  Warning: { component: Callout, props: { type: 'warning' } },
  // EVERYTHING IN SUB COMPONENTS SHOULD BE LESS THAN P (span,li etc)
  Latex: MdLatex,
  BigLatex: MdBigLatex,
  img: MdImage,
  YouTube: MdYouTube,
  code: ({ className = '', ...props }: React.HTMLProps<HTMLElement>) => {
    return (
      <code
        {...props}
        className={`border border-gray-500 border-opacity-20 bg-gray-500 bg-opacity-10 rounded p-1${
          className ?? ` ${className}`
        }`}
      />
    )
  },
}

type Props = {
  children: string
}

export const MarkdownRenderer = (props: Props) => {
  return (
    <Prose>
      <Markdown options={{ overrides: defaultComponents }}>
        {props.children}
      </Markdown>
    </Prose>
  )
}
