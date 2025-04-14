import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function CommercialPage() {
  const { id } = useParams()

  const [commercialList] = useState([
    {
      id: 0,
      title: '台北靈糧堂',
      imgUrl: '/commercial_web_site/靈糧堂.png',
      description: `
      <p class="mb-2">面對傳統宗教網站使用不便與維護效率低的問題，重新設計台北靈糧堂官網，提供穩定且直覺的影音與經文查詢體驗。</p>
      <p class="mb-2">透過 WordPress 客製化主題與元件化開發，結合 RESTful API 技術，打造無刷新介面，提升網站互動性與載入效能。JavaScript 播放器支援即時切換講道影音。</p>
      <p>針對後台資料管理，開發自動化上傳插件，協助管理者快速整理上百筆文章資料，優化日常維護流程。</p>
    `,
      responsiblePart: [
        'WordPress 網站架設',
        'WordPress 主題客製化',
        '自製 WordPress 外掛',
        'WordPress RESTful API 建立以及串接',
        'JavaScript 播放器製作',
        '文章、影音上架',
      ],
      skillsDescription: [
        'WordPress',
        '自製 WordPress 外掛',
        'Sass/bootstrap 管理客製化樣式以及元件',
        'PHP CURL 處理 API 請求',
        '解析 RSS 以及 JSON 資料',
        'JavaScript 處理音訊播放',
      ],
      links: [
        {
          link: 'https://www.breadoflife.taipei/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['WordPress', 'PHP', 'cURL', 'bootstrap']
    },
    {
      id: 1,
      title: 'DCDC 生髮診所',
      imgUrl: '/commercial_web_site/生髮堂.png',
      description:
        `
      <p class="mb-2">此專案為 DCDC 生髮診所打造官方形象網站，主要功能包含醫療資訊展示、頭髮知識部落格、線上諮詢與估價服務。</p>
      <p class="mb-2">整體架構以 WordPress 為基礎，並搭配自訂頁面設計與 Bootstrap 5 的網格系統，實現良好的響應式體驗。</p>
      <p>為提升使用者互動體驗，線上估價功能以 React 實作，支援多重選取與表單驗證功能，提供流暢的操作流程。</p>
      `,
      responsiblePart: [
        '網站架構規劃與建置',
        'WordPress 主題客製化與樣式開發',
        'RESTful API 建立與前端串接',
        '開發 React 線上估價功能模組',
      ],
      skillsDescription: [
        'WordPress 與 React 整合開發',
        'Sass/Bootstrap 客製化版型與元件',
        'React Hook Form 表單驗證設計',
        '客製 RESTful API 串接與資料傳遞',
        '使用 Swiper 實作互動式區塊',
      ],
      links: [
        {
          link: 'https://dcdchair.com.tw/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['React', 'React hook form', 'WordPress', 'bootstrap']
    },
    {
      id: 2,
      title: '德國凱恩礦物塗料',
      imgUrl: '/commercial_web_site/凱恩.png',
      description: `
        <p class="mb-2">凱恩礦物塗料官方網站旨在提供完整的塗料知識，主要功能包含色票選擇、案例瀏覽、知識部落格與影音展示。</p>
        <p class="mb-2">為實現色票與實際案例的連結，使用 Bootstrap 的 Popover 功能設計互動式色票選擇系統，點擊後即可快速預覽對應案例。</p>
        <p class="mb-2">網站以 WordPress 為基礎，搭配自訂頁面與 Bootstrap 5 網格系統，實現良好的響應式體驗與模組化維護。</p>
      `,
      responsiblePart: [
        '網站架構設計與建置',
        'WordPress 主題與樣式客製化',
        'Bootstrap Popover 實作選色功能',
        'RESTful API 建立與資料串接',
      ],
      skillsDescription: [
        'WordPress 與 Bootstrap 整合開發',
        'Sass / Bootstrap 打造響應式版型',
        'Popover 建立互動式色票系統',
        '使用 Cookie 實作使用者提問紀錄',
        '使用 Swiper 建立滑動式案例展示區塊',
      ],
      links: [
        {
          link: 'https://www.keim.com.tw/',
          icon: 'bi bi-globe'
        }
      ],
      skills: ['WordPress', 'bootstrap']
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
              <h5 className='mb-5'>商業作品</h5>
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
                <h5 className='mb-3'>負責內容：</h5>
                <ul className="list-unstyled mb-10">
                  {
                    singlePortfolio.responsiblePart.map((skill) => (
                      <li key={skill} className='mb-2'>{skill}</li>
                    ))
                  }
                </ul>
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