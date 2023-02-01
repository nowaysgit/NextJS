const fs = require('fs').promises

export async function Read<T>(name: string): Promise<T[]> {
  try {
    const file = await fs.readFile(`./db/${name}.json`, 'utf8')
    return JSON.parse(file)
  } catch (e) {
    return []
  }
}

export async function Write<T>(name: string, data: T[]): Promise<void> {
  try {
    await fs.writeFile(`./db/${name}.json`, JSON.stringify(data), 'utf8')
  } catch (e) {
    throw 'Can not write'
  }
}
