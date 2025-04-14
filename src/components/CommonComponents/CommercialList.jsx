import { useMemo, useState } from 'react';
import { useLocation, Link } from "react-router-dom"

// components
import CommercialInnerLink from './CommercialInnerLink';
import CommercialOutLink from './CommercialOutLink';

export default function CommercialList() {
  const routerLocation = useLocation().pathname
  const [commercialList] = useState([
    {
      id: 0,
      title: '台北靈糧堂',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/靈糧堂.png',
      description: `
      <p>DCDC 生髮診所官方網站，以 React 建構線上估價多重選擇互動表單，使用客製化 Bootstrap 網格系統完成響應式網站。</p>
      `,
      skills: ['WordPress', 'bootstrap'],
      page: true,
      link: 'https://www.breadoflife.taipei/'
    },
    {
      id: 1,
      title: 'DCDC 生髮診所',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/生髮堂.png',
      description: `
      <p>DCDC 生髮診所官方網站，以 React 建構線上估價多重選擇互動表單，使用客製化 Bootstrap 網格系統完成響應式網站。</p>
      `,
      skills: ['React', 'WordPress', 'bootstrap'],
      page: true,
      link: 'https://dcdchair.com.tw/'
    },
    {
      id: 2,
      title: '德國凱恩礦物塗料',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/凱恩.png',
      description: `
      <p>凱恩礦物塗料官方網站，透過 Popovers 建立選色系統連結案例，並以 Cookie 技術實作客製化提問箱功能。</p>
      `,
      skills: ['WordPress', 'bootstrap'],
      page: true,
      link: 'https://www.keim.com.tw/'
    },
    {
      id: 3,
      title: '台灣大學境外招生資訊',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/台大境外招生.png',
      description: '台灣大學境外招生資訊網站，以 WordPress 為基礎建置官方網站，搭配 Bootstrap 建構 RWD 版型，並使用 JavaScript 增強部分互動效果',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://admissions.ntu.edu.tw/zh-hant/overseas-students/'
    },
    {
      id: 4,
      title: '晶宴會館',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/晶宴.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.amazinghall.com.tw/'
    },
    {
      id: 5,
      title: '集昌股份有限公司',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/集昌.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.tctma.com/'
    },
    {
      id: 6,
      title: '穎美科技',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/穎美.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.yimtex.com.tw/zh-hant/'
    },
    {
      id: 7,
      title: '規則王',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/規則王.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.onerule.com.tw/'
    },
    {
      id: 8,
      title: '比海顧問',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/比海.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://behigh.com.tw/'
    },
    {
      id: 9,
      title: '川慶科技',
      imgUrl: 'portfolio/commercial_web_site/commercial_web_site/川慶.png',
      description: '作品集描述',
      skills: ['WordPress', 'bootstrap'],
      page: false,
      link: 'https://www.chunking.com.tw/'
    }
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