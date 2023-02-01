import React, { memo } from 'react'

type CardProps = {
  children?: React.ReactNode
}

export default memo(function Card(props: CardProps) {
  return (
    <>
      <form className="w-full flex flex-col mb-10 gap-y-6 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {props.children}
      </form>
    </>
  )
})
