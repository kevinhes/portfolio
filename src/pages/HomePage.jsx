import { useState } from "react"

export default function HomePage() {
  const [skillList] = useState([
    {
      title: '網頁基礎技能',
      imgUrl: '/basic_web_skill.png',
      description: '熟悉 HTML、CSS，使用 JavaScript (ES6) 開發互動效果，具備 API 串接經驗。'
    },
    {
      title: '前端樣式管理',
      imgUrl: '/ui-skill.png',
      description: '熟練使用 Sass 管理 Bootstrap，並規劃 RWD 響應式網頁。'
    },
    {
      title: 'Vue 開發經驗',
      imgUrl: '/Vue.js_Logo_2.svg',
      description: '熟悉使用 Vue 3 搭配 Composition API 開發元件，並具備在 Nuxt 3 中建構 SSR 網站的經驗，以提升 SEO 效能，同時善用 Pinia 進行狀態管理。'
    },
    {
      title: 'React 開發經驗',
      imgUrl: '/React-icon.svg',
      description: '熟練使用 Sass 管理 Bootstrap，並規劃 RWD 響應式網頁。'
    },
  ])
  const [portfolioList] = useState([
    {
      title: '作品集名稱',
      imgUrl: '/basic_web_skill.png',
      description: '作品集描述'
    },
    {
      title: '作品集名稱',
      imgUrl: '/basic_web_skill.png',
      description: '作品集描述'
    },
    {
      title: '作品集名稱',
      imgUrl: '/basic_web_skill.png',
      description: '作品集描述'
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
          <h2 className="h1 mb-3 text-center">技能</h2>
          <div className="d-flex justify-content-center title-warp-deco mb-5">
            <div className="title-deco"></div>
          </div>
          <div className="row">
            {
              skillList.map((skill, index) => (
                <div className="col-md-6 col-xl-3 mb-4" key={index}>
                  <div className="card p-4">
                    <div className={`skill-card-img mb-2`}>
                      <img src={skill.imgUrl} alt={skill.title} className={`card-img-top ${index === 2 || index === 3 ? 'w-75' : ''}`} />
                    </div>
                    <div className="card-body p-0">
                      <h3 className="text-center mb-2">{skill.title}</h3>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <div className="page-layout portfolio-layout">
        <div className="container">
          <h2 className="h1 mb-3 text-center">作品集</h2>
          <div className="d-flex justify-content-center title-warp-deco mb-5">
            <div className="title-deco"></div>
          </div>
          <div className="row">

          </div>
        </div>
      </div>
    </main>
  )
}