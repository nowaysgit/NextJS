import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import Card from '@/components/UI/Card'
import { memo, useState } from 'react'

export interface INumbersFormProps {
  onSubmit: (value: string) => void
}

export default memo(function NumbersForm(props: INumbersFormProps) {
  const [number, setNumber] = useState<string>('')

  return (
    <Card>
      <Input
        title="Введите число"
        description="После отправки будет вычислено среднее между этим и предыдущим отправленным"
        value={number}
        setValue={setNumber}
        required={true}
        type="number"
      />
      <div>
        <Button
          text="Отправить и получить среднее"
          onClick={(e) => {
            e.preventDefault()
            props.onSubmit(number)
          }}
          disabled={number === ''}
        />
      </div>
    </Card>
  )
})
