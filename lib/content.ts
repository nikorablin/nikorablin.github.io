import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const loadBioContent = async (): Promise<string> => {
  const contentPath = path.join(process.cwd(), 'content', 'Bio.md')

  return await readFile(contentPath, 'utf8')
}
