import Link from 'next/link'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const [current, setCurrent] = useState(router.pathname)

  const updateCurrent = (pathname: string) => {
    if (current !== pathname) {
      setCurrent(pathname)
    }
  }

  const activeClasses = useCallback(
    (pathname: string) =>
      current === pathname
        ? 'text-blue-700 dark:text-white underline underline-offset-8 pointer-events-none'
        : 'text-gray-700 dark:text-gray-400',
    [current],
  )

  return (
    <header className="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="hidden w-full md:block md:w-auto" id="navbar">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
              <li>
                <Link
                  onClick={() => updateCurrent('/')}
                  className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeClasses(
                    '/',
                  )}`}
                  href="/"
                >
                  главная
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => updateCurrent('/messages')}
                  className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeClasses(
                    '/messages',
                  )}`}
                  href="/messages"
                >
                  доска сообщений
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => updateCurrent('/average-average-numbers')}
                  className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${activeClasses(
                    '/average-average-numbers',
                  )}`}
                  href="/average-numbers"
                >
                  средние числа
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
