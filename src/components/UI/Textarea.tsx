import { Dispatch, memo, SetStateAction } from 'react'

export interface TextareaProps {
  title?: string
  placeholder?: string
  rows?: number
  value: string | number | readonly string[] | undefined
  setValue: Dispatch<any>
  required?: boolean
}

export default memo(function Textarea(props: TextareaProps) {
  return (
    <div className="mb-2">
      {props.title !== undefined && (
        <label
          htmlFor="message"
          className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {props.title}
          {props.value === undefined ||
            (props.value === '' && (
              <p className="text-sm ml-2 font-medium text-red-600 dark:text-red-500">
                *
              </p>
            ))}
        </label>
      )}
      <textarea
        required={props.required || false}
        id="message"
        rows={props.rows || 6}
        value={props.value}
        onChange={(el) => props.setValue(el.target.value)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
      ></textarea>
    </div>
  )
})
