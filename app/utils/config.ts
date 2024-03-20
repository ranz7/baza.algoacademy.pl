import { z } from 'zod'
import { fetchRepoFile } from './documents.server'

export type FrameworkMenu = {
  framework: string
  menuItems: MenuItem[]
}

export type MenuItem = {
  label: string | React.ReactNode
  children: {
    label: string | React.ReactNode
    to: string
    badge?: string
  }[]
}

const menuItemSchema = z.object({
  label: z.string(),
  children: z.array(
    z.object({
      label: z.string(),
      to: z.string(),
      badge: z.string().optional(),
    })
  ),
})

const configSchema = z.object({
  menu: z.array(menuItemSchema),
  users: z.array(z.string()).optional(),
})

export type ConfigSchema = z.infer<typeof configSchema>

/**
 Fetch the config file for the project and validate it.
 */
export async function getAlgoAcademyConfig(repo: string, branch: string) {
  const config = await fetchRepoFile(repo, branch, `docs/config.json`)

  if (!config) {
    throw new Error('Repo docs/config.json not found!')
  }

  try {
    const algoAcademyDocsConfigFromJson = JSON.parse(config)
    const validationResult = configSchema.safeParse(
      algoAcademyDocsConfigFromJson
    )

    if (!validationResult.success) {
      // Log the issues that come up during validation
      console.error(JSON.stringify(validationResult.error, null, 2))
      throw new Error('Zod validation failed')
    }

    return validationResult.data
  } catch (e) {
    throw new Error('Invalid docs/config.json file')
  }
}
