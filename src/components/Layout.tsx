import Navbar from '@/components/Navbar'
import { memo } from 'react'
import Page from '@/components/Page'

export default memo(function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Page>{children}</Page>
    </>
  )
})
