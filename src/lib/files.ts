const fs = require('fs').promises
import path from 'path'

export async function Read<T>(name: string): Promise<T[]> {
  try {
    const filePath = path.join(process.cwd(), 'db', `${name}.json`)
    const file = await fs.readFile(filePath, 'utf8')
    return JSON.parse(file)
  } catch (e) {
    return []
  }
}

export async function Write<T>(name: string, data: T[]): Promise<void> {
  try {
    const filePath = path.join(process.cwd(), 'db', `${name}.json`)
    await fs.writeFile(filePath, JSON.stringify(data), 'utf8')
  } catch (e) {
    throw new Error('Can not write')
  }
}
