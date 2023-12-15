import styles from '../css/ModalBasic.css';

function ModalBasic({setModalOpen}){

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
            <svg aria-label="닫기" className="close-button" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>닫기</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
            </button>
            
            <img className='modal-image' src={`${process.env.PUBLIC_URL}/modal_image/subsidy.jpg`} alt="모달 이미지"/>
            
        </div>
    )
}

export default ModalBasic;