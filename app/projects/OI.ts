export const repo = 'OI'
export const shortName = 'Olimpiada Informatyczna'

export const latestBranch = 'main'
export const latestVersion = 'v0'

export const gradient = 'from-fuchsia-600 to-pink-600'
export const textColor = 'text-emerald-500'

export function getBranch(argVersion?: string) {
  const version = argVersion || latestVersion

  return latestBranch
}
