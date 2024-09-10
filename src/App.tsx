import { Suspense } from 'react'
import AppRoutes from './routes/routes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Loader from './components/Loader/Loader'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer />
      <AppRoutes />
    </Suspense>
  )
}

export default App
