import { useMemo, useState } from 'react';
import { useLocation } from "react-router-dom"

export default function CommercialList() {
  const routerLocation = useLocation().pathname
  const [commercialList] = useState([
    {
      title: '生髮堂',
      imgUrl: '/commercial_web_site/生髮堂.png',
      description: '作品集描述',
      skills: ['React', 'WordPress', 'bootstrap']
    },
    {
      title: '凱恩',
      imgUrl: '/commercial_web_site/凱恩.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap']
    },
    {
      title: '台大境外招生',
      imgUrl: '/commercial_web_site/台大境外招生.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap']
    },
    {
      title: '晶宴',
      imgUrl: '/commercial_web_site/晶宴.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap']
    },
    {
      title: '集昌',
      imgUrl: '/commercial_web_site/集昌.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap']
    },
  ])
  const filteredCommercialList = useMemo(() => {
    if (routerLocation === '/') {
      return commercialList.filter((_, index) => index <= 3)
    }
    return commercialList
  }, [commercialList, routerLocation])
  return (
    <>
      {
        filteredCommercialList.map((portfolio, index) => (
          <div className="col-3 mb-4" key={index}>
            <div className="commercial-card">
              <div className="card-img-wrapper">
                <img src={portfolio.imgUrl} alt={portfolio.title} className={`card-img-top`} />
              </div>
              <div className="card-body">
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
            </div>
          </div>
        ))
      }
    </>
  )
}