// router
import { Link } from 'react-router-dom'

export default function HeaderNavbar() {
  return (
    <header>
      <nav>
        <ul className="list-unstyled">
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