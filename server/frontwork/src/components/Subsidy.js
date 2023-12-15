import React, {useState} from 'react';
import '../css/Subsidy.css';
import { Link,NavLink } from 'react-router-dom';
import ModalBasic from './ModalBasic';
function Subsidy() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className='Subsidy'>
      <div className='question'>&nbsp;&nbsp;&nbsp;구매전에<br/>확인하셨나요?</div>
      <div className='right-content'>
        <div className='check_subsidy'  onClick={openModal}>나의 보조금 확인<br/>
        <p>보조금을 확인하고 꼼꼼히 구매하세요.</p></div>
        <div className='check_sale_company'><Link to='/sale_company'>우리 지역 판매 업소<br/><p>가까운 위치의 판매업소를 확인하고 방문해보세요.</p></Link></div>
      </div>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen}/>}
    </div>
  );
}

export default Subsidy;