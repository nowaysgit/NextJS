import { useState } from 'react'
import TimeLine from '@/components/UI/TimeLine'
import MessageLog from '@/components/messages/MessageLog'
import { Read } from '@/lib/files'
import MessagesForm from '@/components/messages/MessagesForm'
import { IMessage } from '@/interfaces'

export async function getServerSideProps(): Promise<{
  props: { data: IMessage[] }
}> {
  try {
    const data = await Read<IMessage>('messages')

    return { props: { data } }
  } catch (e) {
    console.error(e)
    return { props: { data: [] } }
  }
}

export default function Messages({ data }: { data: IMessage[] }) {
  const [messages, setMessages] = useState<IMessage[]>(data)

  const sendNumber = (author: string, text: string) => {
    fetch('/api/post/messages', {
      method: 'POST',
      body: JSON.stringify({ author, text }),
    })
      .then((res) => res.json())
      .then(({ data, error }: { data: IMessage; error: boolean }) => {
        if (!error) {
          setMessages([...messages, data])
        }
      })
  }
  return (
    <>
      <div className="max-w-2xl">
        <MessagesForm onSubmit={sendNumber} />
      </div>
      <TimeLine element={MessageLog} values={messages} />
    </>
  )
}
