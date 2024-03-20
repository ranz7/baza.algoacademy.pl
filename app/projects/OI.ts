export const repo = 'OI'

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const colorFrom = 'from-fuchsia-500'
export const colorTo = 'to-cyan-500'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
