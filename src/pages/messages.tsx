import TimeLine from '@/components/UI/TimeLine'
import MessageLog from '@/components/messages/MessageLog'
import { Read } from '@/lib/files'
import MessagesForm from '@/components/messages/MessagesForm'
import { IMessage } from '@/interfaces'
import Router from 'next/router'

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
  const sendMessage = async (author: string, text: string) => {
    try {
      await fetch('/api/post/messages', {
        method: 'POST',
        body: JSON.stringify({ author, text }),
      })
    } catch (e) {
      console.error(e)
    } finally {
      Router.reload()
    }
  }

  return (
    <>
      <div className="max-w-2xl">
        <MessagesForm onSubmit={sendMessage} />
      </div>
      <TimeLine element={MessageLog} values={data} />
    </>
  )
}
