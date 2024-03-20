export const repo = 'OIJ'

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const colorFrom = 'from-violet-200'
export const colorTo = 'to-pink-200'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
