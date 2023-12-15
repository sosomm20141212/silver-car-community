import { useState } from 'react';
import ModalBasic from './ModalBasic';

function Modal() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <button onClick={showModal}>모달 예시</button>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen}/>}
        </div>
    )
}

export default Modal;