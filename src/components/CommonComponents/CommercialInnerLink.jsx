import { Link } from 'react-router-dom';

export default function CommercialInnerLink({ portfolio }) {
  return (
    <Link to={`/commercial-project/${portfolio.id}`} className="commercial-card">
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
              <p className="badge bg-secondary me-2 mb-2 fs-7" key={index}>{skill}</p>
            ))
          }
        </div>
      </div>
    </Link>
  )
}