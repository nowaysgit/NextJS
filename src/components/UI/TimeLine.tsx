import React, { memo } from 'react'

export interface TimeLineProps {
  values: any[]
  element: React.FunctionComponent<{ data: any }>
}

export default memo(function TimeLine(props: TimeLineProps) {
  const add = (data: any) =>
    React.createElement(props.element, {
      data: data,
    })

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {props.values
        .map((item) => (
          <li className="mb-10 ml-4" key={item[Object.keys(item)[0]]}>
            {add(item)}
          </li>
        ))
        .reverse()}
    </ol>
  )
})
