import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function CommercialPage() {
  const { id } = useParams()

  const [commercialList] = useState([
    {
      id: 0,
      title: '台北靈糧堂',
      imgUrl: '/commercial_web_site/靈糧堂.png',
      description:
        `
      <p class="mb-2">此專案為 DCDC 生髮診所打造官方形象網站，主要功能包含醫療資訊展示、頭髮知識部落格、線上諮詢與估價服務。整體架構以 WordPress 為基礎，並搭配自訂頁面設計與 Bootstrap 5 的網格系統，實現良好的響應式體驗。</p>
      <p>為提升使用者互動體驗，線上估價功能以 React 實作，支援多重選取與表單驗證功能，提供流暢的操作流程。</p>
      `,
      responsiblePart: `
      
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
          link: 'https://www.breadoflife.taipei/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['React', 'React router', 'Redux', 'bootstrap']
    },
    {
      id: 1,
      title: 'DCDC 生髮診所',
      imgUrl: '/commercial_web_site/生髮堂.png',
      description:
        `
      <p class="mb-2">此專案為 DCDC 生髮診所打造官方形象網站，主要功能包含醫療資訊展示、頭髮知識部落格、線上諮詢與估價服務。整體架構以 WordPress 為基礎，並搭配自訂頁面設計與 Bootstrap 5 的網格系統，實現良好的響應式體驗。</p>
      <p>為提升使用者互動體驗，線上估價功能以 React 實作，支援多重選取與表單驗證功能，提供流暢的操作流程。</p>
      `,
      responsiblePart: `
      
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
          link: 'https://dcdchair.com.tw/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['React', 'React router', 'Redux', 'bootstrap']
    },
    {
      id: 2,
      title: '德國凱恩礦物塗料',
      imgUrl: '/commercial_web_site/凱恩.png',
      description: `
      <p>凱恩礦物塗料官方網站，透過 Popovers 建立選色系統連結案例，並以 Cookie 技術實作客製化提問箱功能。</p>
      `,
      responsiblePart: `
      
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
          link: 'https://www.keim.com.tw/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['Nuxt', 'Pinia', 'bootstrap']
    },
  ])
  const singlePortfolio = useMemo(() => {
    return commercialList.filter((portfolio) => portfolio.id === Number(id))[0]
  }, [commercialList, id])
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
    </main>)
}