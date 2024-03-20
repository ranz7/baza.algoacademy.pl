export const repo = 'SUBJECT_NAME'
export const shortName = 'SUBJECT_NAME short '

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const gradient = 'from-lime-500 to-emerald-500'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
