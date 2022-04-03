import React, { useState } from 'react';
import './Modal.css'

const Modal = ({show,closeModal}) => {
    if(!show){
        return null
    }
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-1">
            <div className="bg-white h-[200px] w-[300px] z-2">
                <div className="modal-header">
                    <div className="modal-title">Modal Title</div>
                </div>
                <div className="modal-body">
                    this is modal content
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={()=>closeModal()}>close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;