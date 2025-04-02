import { useEffect } from 'react';
import { Modal } from 'bootstrap';

export default function CommercialModal({ temporaryPortfolio, setTemporaryPortfolio, commercialModalRef }) {

  useEffect(() => {
    commercialModalRef.current = new Modal(
      document.querySelector('#commercialModal'),
      {
        backdrop: 'static',
      }
    );
  }, [commercialModalRef]);

  const handleModalClose = () => {
    setTemporaryPortfolio(null);
    commercialModalRef.current.hide();
  }

  return (
    <div className="portfolio-modal modal fade" id="commercialModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content position-relative">
          <div className="modal-header">
            <h5>{temporaryPortfolio?.title}</h5>
            <button type="button" className="btn-close" onClick={handleModalClose}></button>
          </div>
          <div className="modal-body">
            <div className="w-50 pe-3 border-end">

            </div>
            <div className='w-50 ps-3'>
              <div className="modal-img">
                <img src={temporaryPortfolio?.imgUrl} alt={temporaryPortfolio?.title} className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}