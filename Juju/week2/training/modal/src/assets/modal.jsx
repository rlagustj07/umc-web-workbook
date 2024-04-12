import React from 'react';
import './modal.css';

export default function Modal ({setModalOpen}){

    const closeModal = () => {
        setModalOpen(false);
        console.log("모달이 꺼짐");
    };


    return(
        <div className='modalBox' >
            <div className='modal'>
                <h3>안녕하세요</h3>
                <h4>모달 내용은 어쩌고 저쩌고</h4>
                <button className='closeBtn' onClick={closeModal}>닫기</button>
            </div>
        </div>

    );
}