import { memo } from 'react'

export default memo(function Page({ children }: any) {
  return (
    <main className="w-full pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16 mx-auto max-w-screen-2xl">
      {children}
    </main>
  )
})
