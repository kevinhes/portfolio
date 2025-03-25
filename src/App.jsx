// router
import { Routes, Route } from 'react-router-dom'

// layout
import FrontLayout from './layouts/FrontLayout'

// page
import HomePage from './pages/HomePage'
import SideProjectPage from './pages/SideProjectPage'
import WorkingPage from './pages/WorkingPage'

// style
import './scss/main.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route index element={<HomePage/>} />
          <Route path='side-project' element={<SideProjectPage/>} />
          <Route path='working' element={<WorkingPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
