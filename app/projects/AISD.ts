export const repo = 'AISD'

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const colorFrom = 'red-500'
export const colorTo = 'orange-500'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
