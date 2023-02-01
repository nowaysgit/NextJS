import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import Card from '@/components/UI/Card'
import { memo, useState } from 'react'
import Textarea from '@/components/UI/Textarea'

export interface INumbersFormProps {
  onSubmit: (author: string, text: string) => void
}

export default memo(function MessagesForm(props: INumbersFormProps) {
  const [author, setAuthor] = useState<string>('')
  const [text, setText] = useState<string>('')

  return (
    <Card>
      <Input
        title="Автор"
        value={author}
        setValue={setAuthor}
        required={true}
      />
      <Textarea title="Текст" value={text} setValue={setText} required={true} />
      <div>
        <Button
          text="Разместить сообщение"
          onClick={() => props.onSubmit(author, text)}
          disabled={author === '' || text === ''}
        />
      </div>
    </Card>
  )
})
