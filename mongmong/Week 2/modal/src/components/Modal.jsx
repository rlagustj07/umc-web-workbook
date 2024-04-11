import './Modal.css'

function Modal({ closeModal }) {

    return (
        <div className="modal">
            <div className="modal-content">
                <h3 className="modal-title">안녕하세요</h3>
                <h3 className="modal-text">모달 내용은 어쩌고 저쩌고...</h3>
                <div className="close">
                    <button id="close" onClick={closeModal}>닫기</button>
                </div>
            </div>
        </div>
    )
  }
  
  export default Modal
  