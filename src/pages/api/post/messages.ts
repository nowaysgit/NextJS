import type { NextApiRequest, NextApiResponse } from 'next'
import { Read, Write } from '@/lib/files'
import { IMessage } from '@/interfaces'

type Data = {
  data?: IMessage
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
    const dataFromFile = await Read<IMessage>('messages')
    const newMessage = {
      date: Date.now() / 1000,
      author: data.author,
      text: data.text,
    }
    dataFromFile.push(newMessage)
    await Write<IMessage>('messages', dataFromFile)
    res.status(200).json({ data: newMessage })
  } catch (e: any) {
    console.error(e)
    res.status(500).json({ error: e.message })
  }
}
