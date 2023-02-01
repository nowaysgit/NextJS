import { Dispatch, HTMLInputTypeAttribute, memo, SetStateAction } from 'react'

export interface InputProps {
  title?: string
  description?: string
  value: string | number | readonly string[] | undefined
  setValue: Dispatch<SetStateAction<any>>
  required?: boolean
  type?: HTMLInputTypeAttribute
}

export default memo(function Input(props: InputProps) {
  return (
    <div className="mb-2">
      {props.title !== undefined && (
        <label
          htmlFor="default-input"
          className={`flex ${
            props.description !== undefined ? 'mb-0.5' : 'mb-2'
          } text-sm font-medium text-gray-900 dark:text-white`}
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
      {props.description !== undefined && (
        <p className="text-xs mb-2 font-normal text-gray-500 dark:text-gray-300">
          {props.description}
        </p>
      )}
      <input
        type={props.type || 'text'}
        required={props.required || false}
        value={props.value}
        onChange={(el) => props.setValue(el.target.value)}
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  )
})
