// router
import { Routes, Route } from 'react-router-dom'

// layout
import FrontLayout from './layouts/FrontLayout'

// page
import HomePage from './pages/HomePage'
import SideProjectPage from './pages/SideProjectPage'
import WorkingPage from './pages/WorkingPage'
import PortfolioPage from './pages/singlepage/PortfolioPage'
import CommercialPage from './pages/singlepage/CommercialPage'

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
          <Route path='/side-project/:id' element={<PortfolioPage/>} />
          <Route path='/commercial-project/:id' element={<CommercialPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
