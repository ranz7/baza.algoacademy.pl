import type { FC, HTMLProps } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import { MarkdownLink } from '~/components/docs/md/MarkdownLink'
import { CodeBlock } from '~/components/docs/md/CodeBlock'
import { Prose } from '~/components/docs/Prose'
import clsx from 'clsx'
import remarkGfm from 'remark-gfm'

const CustomHeading = ({
  Comp,
  id,
  ...props
}: HTMLProps<HTMLHeadingElement> & {
  Comp: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) => {
  if (id) {
    return (
      <a href={`#${id}`} className={`anchor-heading`}>
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

const defaultComponents: Record<string, FC> = {
  a: MarkdownLink,
  pre: CodeBlock,
  h1: makeHeading('h1'),
  h2: makeHeading('h2'),
  h3: makeHeading('h3'),
  h4: makeHeading('h4'),
  h5: makeHeading('h5'),
  h6: makeHeading('h6'),
  iframe: (props) => <iframe {...props} className="w-full" />,
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

export const RenderMarkdown = (props: Props) => {
  return (
    <Prose>
      <ReactMarkdown
        plugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        components={{ ...defaultComponents }}
      >
        {props.children}
      </ReactMarkdown>
    </Prose>
  )
}
