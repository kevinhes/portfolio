// router
import { Link } from 'react-router-dom'

export default function HeaderNavbar() {
  return (
    <header className='position-fixed w-100'>
      <nav className='container'>
        <ul className="list-unstyled d-flex justify-content-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="side-project">Side Project</Link>
          </li>
          <li>
            <Link to="working">Working</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}