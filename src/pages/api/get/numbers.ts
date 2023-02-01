import type { NextApiRequest, NextApiResponse } from 'next'
import { Read } from '@/lib/files'

export interface INumber {
  date: number
  average: number
  current: number
  previous?: number
}

type Data = {
  data?: INumber[]
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const dataFromFile = await Read<INumber>('average-numbers')
    res.status(200).json({ data: dataFromFile })
  } catch (e) {
    console.error(e)
    res.status(500).json({ data: [] })
  }
}
