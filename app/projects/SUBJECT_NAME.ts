export const repo = 'SUBJECT_NAME'

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const colorFrom = 'from-lime-500'
export const colorTo = 'to-emerald-500'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
