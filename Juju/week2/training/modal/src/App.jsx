import './App.css';
import React, {useState} from 'react';
import Modal from './assets/modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
      setModalOpen(true);
      console.log("모달이 켜짐");
  };

  return (
    <div>
      <div className='base'>
      <h1>안녕하세요!</h1>
      <h3>내용내용내용</h3>
      <button onClick={openModal}>버튼 열기</button>  
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      
    </div>
  );
}

export default App;
