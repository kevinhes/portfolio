import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function PortfolioPage() {
  const { id } = useParams()
  
  const [portfolioList] = useState([
    {
      id: 1,
      title: '畫作電商',
      imgUrl: '/畫作電商.png',
      description: '<p>為六角學院 React 課程最終專案，可以進行完整的購物流程以及後台商品、文章上架、訂單管理，前台有製作 RWD。</p><p>使用 React 作為框架，React Router 實現 SPA 網站架構並使用 Redux 整合管理應用狀態，串接 API 處理前台以及後台資料</p>',
      skills: ['React', 'React router', 'Redux', 'bootstrap']
    },
    {
      id: 2,
      title: '訂房網站',
      imgUrl: '/訂房網站.png',
      description: '作品集描述',
      skills: ['Nuxt', 'Pinia', 'bootstrap']
    },
    {
      id: 3,
      title: 'Podcast 形象網站',
      imgUrl: '/建人五四三.png',
      description: '作品集描述',
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
            <div className="col-lg-5">
              <h5 className='mb-5'>個人作品</h5>
              <div className="d-flex">
                <h2> {singlePortfolio.title} </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}