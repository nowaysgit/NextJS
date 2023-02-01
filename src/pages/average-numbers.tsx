'use client'

import React, { Suspense, useEffect, useState } from 'react'
import NumberLog from '@/components/average-numbers/NumberLog'
import NumbersForm from '@/components/average-numbers/NumbersForm'
import { INumber } from '@/interfaces'

const TimeLine = React.lazy(() => import('@/components/UI/TimeLine'))

export default function AverageNumbers() {
  const [log, setLog] = useState<INumber[]>([])

  useEffect(() => {
    fetch('/api/get/numbers')
      .then((res) => res.json())
      .then(({ data }: { data: INumber[] }) => {
        setLog(data)
      })
  }, [])

  const sendNumber = (value: string) => {
    fetch('/api/post/numbers', {
      method: 'POST',
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then(({ data, error }: { data: INumber; error: boolean }) => {
        if (!error) {
          setLog([...log, data])
        }
      })
  }
  return (
    <>
      <div className="max-w-2xl">
        <NumbersForm onSubmit={sendNumber} />
      </div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <TimeLine element={NumberLog} values={log} />
      </Suspense>
    </>
  )
}
