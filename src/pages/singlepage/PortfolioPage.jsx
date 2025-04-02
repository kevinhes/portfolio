import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function PortfolioPage() {
  const { id } = useParams()

  const [portfolioList] = useState([
    {
      id: 1,
      title: '畫作電商',
      imgUrl: '/畫作電商.png',
      description: 
      `
      <p class="mb-3">為六角學院 React 課程最終專案，可以進行完整的購物流程包含購物車、結帳、表單驗證以及後台商品管理、文章管理、訂單管理，前台有製作 RWD。</p>
      <p>使用 React 作為框架，React Router 實現 SPA 網站架構並使用 Redux 整合管理應用狀態，串接 API 處理前台以及後台資料，使用 Sass 管理 bootstrap 樣式管理</p>
      `,
      skillsDescription: [
        'React/React Router',
        'Redux 管理數據及方法',
        'Sass/bootstrap 管理客製化樣式以及元件',
        'react-hook-form 處理表單驗證',
        'react-loading 處理載入狀態',
        'sweetalert2 處理提示視窗',
      ],
      links: [
        {
          link: 'https://github.com/kevinhes/gallery-ecommerce',
          icon: 'bi bi-github'
        },
        {
          link: 'https://kevinhes.github.io/gallery-ecommerce/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['React', 'React router', 'Redux', 'bootstrap']
    },
    {
      id: 2,
      title: '訂房網站',
      imgUrl: '/訂房網站.png',
      description: '作品集描述',
      skillsDescription: [
        'React/React Router',
        'Redux 管理數據及方法',
        'Sass/bootstrap 管理客製化樣式以及元件',
        'react-hook-form 處理表單驗證',
        'react-loading 處理載入狀態',
        'sweetalert2 處理提示視窗',
      ],
      links: [
        {
          link: 'https://github.com/kevinhes/gallery-ecommerce',
          icon: 'bi bi-github'
        },
        {
          link: 'https://kevinhes.github.io/gallery-ecommerce/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['Nuxt', 'Pinia', 'bootstrap']
    },
    {
      id: 3,
      title: 'Podcast 形象網站',
      imgUrl: '/建人五四三.png',
      description: '作品集描述',
      skillsDescription: [
        'React/React Router',
        'Redux 管理數據及方法',
        'Sass/bootstrap 管理客製化樣式以及元件',
        'react-hook-form 處理表單驗證',
        'react-loading 處理載入狀態',
        'sweetalert2 處理提示視窗',
      ],
      links: [
        {
          link: 'https://github.com/kevinhes/gallery-ecommerce',
          icon: 'bi bi-github'
        },
        {
          link: 'https://kevinhes.github.io/gallery-ecommerce/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['vue', 'vue router', 'bootstrap']
    },
  ])
  const singlePortfolio = useMemo(() => {
    return portfolioList.filter((portfolio) => portfolio.id === Number(id))[0]
  }, [portfolioList])
  return (
    <main>
      <section className="portfoloi-banner">
        <div className="banner-bg-filter"></div>
        <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="portfoloi banner background" className="w-100 h-100 object-fit-cover" />
      </section>
      <section className="page-layout">
        <section className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className='mb-5'>個人作品</h5>
              <div className="d-flex justify-content-between align-items-center mb-12">
                <h2> {singlePortfolio.title} </h2>
                <div>
                  {
                    singlePortfolio.links.map((link, index) =>
                    (<a
                      key={link.link}
                      href={link.link}
                      target="_blank"
                      className={`${index !== singlePortfolio.links.length - 1 ? 'me-2' : ''}`}
                    >
                      <i className={`${link.icon} text-dark fs-4`}></i>
                    </a>)
                    )
                  }
                </div>
              </div>
              <div className="mb-10">
                <h5 className='mb-3'>技術列表：</h5>
                <ul className="list-unstyled d-flex">
                  {
                    singlePortfolio.skills.map((skill) => (
                      <li key={skill} className='me-2 badge bg-secondary'>{skill}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="mb-5">
                <h5 className='mb-3'>作品介紹：</h5>
                <div className='mb-10' dangerouslySetInnerHTML={{ __html: singlePortfolio.description }}></div>
                <h5 className='mb-3'>使用技術：</h5>
                <ul className="list-unstyled">
                  {
                    singlePortfolio.skillsDescription.map((skill) => (
                      <li key={skill} className='mb-2'>{skill}</li>
                    ))
                  }
                </ul>
              </div>  
            </div>
            <div className="offset-lg-1 col-lg-7">
              <img src={singlePortfolio.imgUrl} alt={singlePortfolio.title} className='w-100 rounded-4 shadow' />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}