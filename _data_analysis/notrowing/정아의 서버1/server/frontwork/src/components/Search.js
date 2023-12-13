import React from 'react';
import '../css/Search.css';

function Search() {
  return (
    <div className='Search'>
      <div className='select-wrapper'>
        <div className='label-left'>차량 유형</div>
        <div className='vehicle'>
          <select className='vehicleType'>
            <option value='select_wheel'>선택</option>
            <option value='threeWheels'>3륜</option>
            <option value='fourWheels'>4륜</option>
          </select>
        </div>
      </div>

      <div className='select-wrapper'>
        <div className='label-left'>가격대</div>
        <div className='price'>
          <select className='priceRange'>
            <option value='select_price'>선택</option>
            <option value='0-100000'>10만원 이하</option>
            <option value='100001-500000'>10만원 - 50만원</option>
            <option value='5000001-1000000'>50만원 - 100만원</option>
          </select>
          
        </div>
      </div>
      
      <div className='select-wrapper'>
        <div className='label-left'>색상</div>
        <div className='price'>
          <select className='priceRange'>
            <option value='select_price'>선택</option>
            <option value='black'>검정</option>
            <option value='white'>흰색</option>
            <option value='red'>빨강</option>
            <option value='blue'>파랑</option>
          </select>
          <button type="submit">검색</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
