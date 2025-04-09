import { useMemo, useState } from 'react';
import { useLocation, Link } from "react-router-dom"

export default function PorfolioList() {
  const routerLocation = useLocation().pathname
  const [portfolioList] = useState([
    {
      id: 1,
      title: '畫作電商',
      imgUrl: '/畫作電商.png',
      description: '<p class="mb-3">為虛擬畫廊 - ArtNova 的電商網站，整體以凸顯畫作作為重點已增加視覺焦點，可以進行完整的購物流程以及後台商品、文章上架、訂單管理，前台有製作 RWD。</p><p>使用 React 作為框架，React Router 實現 SPA 網站架構並使用 Redux 整合管理應用狀態，串接 API 處理前台以及後台資料</p>',
      skills: ['React', 'React router', 'Redux', 'bootstrap']
    },
    {
      id: 2,
      title: '訂房網站',
      imgUrl: '/訂房網站.png',
      description:
      `
      <p class="mb-3">為六角學院 Nuxt 課程最終專案，可以進行完整的訂房流程包含日期選擇、人數輸入、訂單送出以及後台房型、訂單管理、新聞上架、菜餚上架，前台有製作 RWD。</p>
      <p>使用 Nuxt 作為框架實現 SSR 網站架構並使用 Pinia 整合管理應用狀態，串接 API 處理前台以及後台資料，版型由六角提供</p>
      `,
      skills: ['Nuxt', 'Pinia', 'bootstrap']
    },
    {
      id: 3,
      title: '建人五四三 形象網站',
      imgUrl: '/建人五四三.png',
      description: 
      `
      <p class="mb-3">為建人五四三形象網站，整體以紅黑作為網站設計，可以播放試聽音檔以及對於音檔的操作，播放、暫停以及進度條拖曳</p>
      <p class="mb-3">可以進行完整的購物流程以及後台商品、文章上架、訂單管理，前台有製作 RWD。</p>
      `,
      skills: ['vue', 'vue router', 'bootstrap']
    },

  ])
  const filteredPortfolioList = useMemo(() => {
    if (routerLocation === '/') {
      return portfolioList.filter((_, index) => index <= 1)
    }
    return portfolioList
  }, [portfolioList, routerLocation])
  return (
    <>
      {
        filteredPortfolioList.map((portfolio) => (
          <div className="col-lg-6 mb-4" key={portfolio.id}>
            <Link to={`/side-project/${portfolio.id}`} className="porfolio-card">
              <div className="porfolio-card-body">
                <div>
                  <h4 className='mb-3'>{portfolio.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: portfolio.description }}></p>
                </div>
                <div className='d-flex flex-wrap justify-content-end'>
                  {
                    portfolio.skills.map((skill, index) => (
                      <p className="badge bg-secondary fs-6 me-2 mb-2" key={index}>{skill}</p>
                    ))
                  }
                </div>
              </div>
              <div className="porfolio-card-bg">
                <img src={portfolio.imgUrl} alt={portfolio.title} className={`card-img-top`} />
              </div>
            </Link>
          </div>
        ))
      }
    </>
  )
}