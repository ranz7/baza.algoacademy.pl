import clsx from 'clsx'
import { DynamicIcon } from '~/icons/DynamicIcon'
import React from 'react'

var Latex = require('react-latex')

const styles = {
  container:
    'bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
} as const
// installation: InstallationIcon,
//   presets: PresetsIcon,
//   plugins: PluginsIcon,
//   theming: ThemingIcon,
//   lightbulb: LightbulbIcon,
//   warning: WarningIcon,
const MdLatex = (props: { title: string; text: string }) => {
  return (
    <span className={`my-8 table justify-center m-auto`}>
      <span
        className={clsx('items-center flex rounded-3xl p-6', styles.container)}
      >
        <DynamicIcon icon="lightbulb" className="h-8 w-8 flex-none" />
        <span className="ml-4">
          <span className={'self-center text-2xl'}>
            <Latex>{props?.text}</Latex>
          </span>
        </span>
      </span>
      {props.title && <span className="text-center">{props.title}</span>}
    </span>
  )
}

export default MdLatex
