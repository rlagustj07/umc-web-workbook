import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("모달이 켜짐");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("모달이 꺼짐");
    setIsModalOpen(false);
  };

  return (

    <div>
      <h1>안녕하세요!</h1>
      <h3>내용내용내용</h3>
      <button id="open" onClick={openModal}>버튼 열기</button>
      {isModalOpen && <Modal closeModal={closeModal}/>}
    </div>
  )
}

export default App
