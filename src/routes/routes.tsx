import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { paths } from './paths'

const Layout = lazy(() => import('@/components/Layout/Layout'))
const Home = lazy(() => import('@/pages/Home/Home'))

const AppRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path={paths.home} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
