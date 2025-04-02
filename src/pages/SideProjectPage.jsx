// components
import PorfolioList from '../components/CommonComponents/PorfoloiList';

export default function SideProjectPage() {
  return (
    <main>
      <section className="banner">
        <section className="contaier position-relative z-index-50 d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="text-white display-3 mb-5">
            個人作品
          </h1>
        </section>
        <div className="banner-bg-filter"></div>
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner background image"
          className="banner-bg" />
      </section>
      <section className="page-layout">
        <div className="container">
          <div className="row">
            <PorfolioList></PorfolioList>
          </div>
        </div>
      </section>
    </main>
  )
}