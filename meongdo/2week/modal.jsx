import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
    console.log('모달이 켜짐');
  };

  const close = () => {
    setOpen(false);
    console.log('모달이 꺼짐');
  };

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button className="openBtn" onClick={open}>
        버튼 열기
      </button>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-overlay" onClick={close}></div>
          <div className="modal">
            <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고 저쩌고...</p>
            <div className="closeBtn">
              <button onClick={close}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
