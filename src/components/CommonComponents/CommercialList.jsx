import { useMemo, useState } from 'react';
import { useLocation, Link } from "react-router-dom"

// components
import CommercialInnerLink from './CommercialInnerLink';
import CommercialOutLink from './CommercialOutLink';

export default function CommercialList() {
  const routerLocation = useLocation().pathname
  const [commercialList] = useState([
    {
      id: 1,
      title: 'DCDC 生髮診所',
      imgUrl: '/commercial_web_site/生髮堂.png',
      description: '作品集描述',
      skills: ['React', 'WordPress', 'bootstrap'],
      page: true,
      link: 'https://dcdchair.com.tw/'
    },
    {
      id: 2,
      title: '德國凱恩礦物塗料',
      imgUrl: '/commercial_web_site/凱恩.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: true,
      link: 'https://www.keim.com.tw/'
    },
    {
      id: 3,
      title: '台大境外招生',
      imgUrl: '/commercial_web_site/台大境外招生.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://admissions.ntu.edu.tw/zh-hant/overseas-students/'
    },
    {
      id: 4,
      title: '晶宴',
      imgUrl: '/commercial_web_site/晶宴.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.amazinghall.com.tw/'
    },
    {
      id: 5,
      title: '集昌',
      imgUrl: '/commercial_web_site/集昌.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.tctma.com/'
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
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            {
              portfolio.page ? (
                <CommercialInnerLink portfolio={portfolio} />
              ) : (
                <CommercialOutLink portfolio={portfolio} />
              )
            }
          </div>
        ))
      }
    </>
  )
}