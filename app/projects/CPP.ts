export const repo = 'CPP'
export const shortName = 'C++'

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const gradient = 'from-amber-500 to-violet-400'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
