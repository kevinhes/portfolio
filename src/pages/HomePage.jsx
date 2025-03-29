import { useState } from "react"

export default function HomePage() {
  const [ skillList ] = useState([
    {
      title: '網頁基礎',
      imgUrl: '',
      description: '熟悉 HTML5 語意標籤，能夠撰寫符合 SEO 標準的 HTML 結構'
    },
  ])

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
      <section className="page-layout">
        <div className="container">
          <h2 className="h1 title-deco mb-5">技能</h2>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="h2">HTML</h3>
                  <p>熟悉 HTML5 語意標籤，能夠撰寫符合 SEO 標準的 HTML 結構</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}