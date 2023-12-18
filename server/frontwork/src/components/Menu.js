import React from 'react';
import '../css/Menu.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      
      <div className='search_car'><Link to="/search_car_detail">모델</Link></div>
      <div className='sale_company'><Link to="/sale_company">판매 업체</Link></div>
      <div className='charge_center'><Link to="/charge_center">충전소</Link></div>
      <div className='community'><Link to="/community">자유게시판</Link></div>
    </div>
  );
}

export default Menu;