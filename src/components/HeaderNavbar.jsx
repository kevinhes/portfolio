// router
import { Link } from 'react-router-dom'

export default function HeaderNavbar() {
  return (
    <header className='header'>
      <nav className='container bg-light rounded-5'>
        <ul className="list-unstyled d-flex justify-content-center">
          <li>
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li>
            <Link className='nav-link' to="side-project">Side Project</Link>
          </li>
          <li>
            <Link className='nav-link' to="working">Working</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}