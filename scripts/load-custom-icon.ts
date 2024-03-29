import fs from 'node:fs'

export function loadCustomIcon(path: string) {
  return fs.readFileSync(path, 'utf-8')
}
