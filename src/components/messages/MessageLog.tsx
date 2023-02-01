import { options } from '@/lib/helpers'
import { memo } from 'react'

export interface IMessage {
  author: string
  text: string
  date: number
}

export default memo(function MessageLog(props: { data: IMessage }) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <div className="items-center justify-between mb-3 sm:flex">
          <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
            {new Date(props.data.date * 1000).toLocaleDateString(
              'ru-RU',
              options,
            )}
          </time>
          <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
            {props.data.author}:
          </div>
        </div>
        <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
          {props.data.text}
        </div>
      </div>
    </>
  )
})
