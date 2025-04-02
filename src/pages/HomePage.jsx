// components
import SkillList from "../components/HomePage/SkillList"
import PorfolioList from "../components/CommonComponents/PorfoloiList";
import CommercialList from "../components/CommonComponents/CommercialList";

export default function HomePage() {

  return (
    <main>
      <section className="banner">
        <section className="contaier position-relative z-index-50 d-flex flex-column justify-content-center align-items-center h-100">
          <h2 className="text-center text-white display-3 mb-5">
            <span className="mb-3 d-block">
              您好，我是姜宥先
            </span>
            <span className="d-block">
              我是一名前端工程師
            </span>
          </h2>
          <div className="d-flex justify-content-center">
            <a href="https://www.cake.me/kevinhes1115" target="_blank" className="btn btn-primary btn-lg">履歷</a>
          </div>
        </section>
        <div className="banner-bg-filter"></div>
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner background image"
          className="banner-bg" />
      </section>
      <div className="page-layout portfolio-layout">
        <div className="container">
          <h2 className="h1 mb-3 text-center">個人作品</h2>
          <div className="d-flex justify-content-center title-warp-deco mb-5">
            <div className="title-deco"></div>
          </div>
          <div className="row">
            <PorfolioList />
          </div>
        </div>
      </div>
      <div className="page-layout portfolio-layout">
        <div className="container">
          <h2 className="h1 mb-3 text-center">商業作品</h2>
          <div className="d-flex justify-content-center title-warp-deco mb-5">
            <div className="title-deco"></div>
          </div>
          <div className="row">
            <CommercialList />
          </div>
        </div>
      </div>
      <SkillList />
    </main>
  )
}