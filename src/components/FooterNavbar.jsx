export default function FooterNavbar() {
  return (
    <footer>
      <section className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <i class="bi bi-envelope-fill fs-4 d-block me-3"></i>
            <a className="d-block" href="mailto:kevinhes1115@gmail.com">kevinhes1115@gmail.com</a>
          </div>
          <nav className="d-flex align-items-center">
            <a href="https://www.linkedin.com/in/kevinhes/" target="_blank" className="me-3">
              <i class="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://github.com/kevinhes" target="_blank" className="me-3">
              <i class="bi bi-github fs-4"></i>
            </a>
          </nav>
        </div>
      </section>
    </footer>
  )
}