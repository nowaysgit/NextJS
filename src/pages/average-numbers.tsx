'use client'

import React, { Suspense, useEffect, useState } from 'react'
import NumberLog from '@/components/average-numbers/NumberLog'
import NumbersForm from '@/components/average-numbers/NumbersForm'
import { INumber } from '@/interfaces'

const TimeLine = React.lazy(() => import('@/components/UI/TimeLine'))

export default function AverageNumbers() {
  const [log, setLog] = useState<INumber[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/get/numbers')
      const { data } = await response.json()
      setLog(data)
    }

    fetchData().catch(console.error)
  }, [])

  const sendNumber = async (value: string) => {
    try {
      const response = await fetch('/api/post/numbers', {
        method: 'POST',
        body: JSON.stringify(value),
      })
      const { data, error } = await response.json()
      if (error) {
        throw new Error(error)
      }
      setLog([...log, data])
    } catch (e) {
      console.error(e)
    }
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
