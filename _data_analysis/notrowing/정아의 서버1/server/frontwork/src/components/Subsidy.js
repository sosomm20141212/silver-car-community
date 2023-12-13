import React from 'react';
import '../css/Subsidy.css';
import { Link,NavLink } from 'react-router-dom';

function Subsidy() {
  return (
    <div className='Subsidy'>
      <div className='question'>&nbsp;&nbsp;&nbsp;구매전에<br></br>확인하셨나요?</div>
      <div className='right-content'>
        <div className='check_subsidy'> <Link to='/check_subsidy'>나의 보조금 확인</Link></div>
        <div className='check_sale_company'><Link to='/sale_company'>우리 지역 판매 업소</Link></div>
      </div>
    </div>
  );
}

export default Subsidy;


