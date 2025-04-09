// router
import { Link } from 'react-router-dom'

export default function HeaderNavbar() {
  return (
    <header className='header'>
      <nav className='container bg-light rounded-5'>
        <ul className="list-unstyled d-flex justify-content-center">
          <li>
            <Link className='nav-link' to="/">首頁</Link>
          </li>
          <li>
            <Link className='nav-link' to="side-project">個人作品</Link>
          </li>
          <li>
            <Link className='nav-link' to="working">商業作品</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}