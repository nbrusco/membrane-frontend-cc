import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Layout
