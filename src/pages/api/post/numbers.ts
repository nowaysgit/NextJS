import type { NextApiRequest, NextApiResponse } from 'next'
import { Read, Write } from '@/lib/files'
import { INumber } from '@/interfaces'

type Data = {
  data?: INumber
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Only POST requests allowed' })
      return
    }

    const data = JSON.parse(req.body)
    const dataFromFile = await Read<INumber>('average-numbers')
    const current = Number(data)
    const last = dataFromFile?.[dataFromFile?.length - 1] || null
    const average = !last ? 0 : (Math.abs(last.current) + Math.abs(current)) / 2
    const newNumber = {
      date: Date.now() / 1000,
      average: average,
      current: current,
      previous: last?.current,
    }
    dataFromFile.push(newNumber)
    await Write<INumber>('average-numbers', dataFromFile)
    res.status(200).json({ data: newNumber })
  } catch (e: any) {
    console.error(e)
    res.status(500).json({ error: e.message })
  }
}
