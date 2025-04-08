export default function CommercialOutLink({portfolio}) {
  return (
    <a className="commercial-card" href={portfolio.link} target="_blank" rel="noopener noreferrer">
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
    </a>
  )
}