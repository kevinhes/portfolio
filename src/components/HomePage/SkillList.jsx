import { useState } from "react"

export default function SkillList() {
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
  return (
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
  )
}