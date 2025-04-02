import { useMemo, useState } from 'react';
import { useLocation } from "react-router-dom"

export default function PorfolioList() {
  const routerLocation = useLocation().pathname
  const [portfolioList] = useState([
    {
      title: '畫作電商',
      imgUrl: '/畫作電商.png',
      description: '作品集描述',
      skills: ['React', 'React router', 'Redux', 'bootstrap']
    },
    {
      title: '訂房網站',
      imgUrl: '/訂房網站.png',
      description: '作品集描述',
      skills: ['Nuxt', 'Pinia', 'bootstrap']
    },
    {
      title: 'Podcast 形象網站',
      imgUrl: '/建人五四三.png',
      description: '作品集描述',
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
        filteredPortfolioList.map((portfolio, index) => (
          <div className="col-6 mb-4" key={index}>
            <div className="porfolio-card">
              <div className="porfolio-card-body">
                <div>
                  <h4 className='mb-3'>{portfolio.title}</h4>
                  <p> {portfolio.description} </p>
                </div>
                <div className='d-flex flex-wrap justify-content-end'>
                  {
                    portfolio.skills.map((skill, index) => (
                      <p className="badge bg-secondary me-2 mb-2" key={index}>{skill}</p>
                    ))
                  }
                </div>
              </div>
              <div className="porfolio-card-bg">
                <img src={portfolio.imgUrl} alt={portfolio.title} className={`card-img-top`} />
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}