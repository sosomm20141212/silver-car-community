import './Store.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Store() {
  const [storelist, setStorelist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/store')
    .then(response => {setStorelist(response.data)})
    .catch(error => {console.log(error)});
  }, []);


  return (
      <section className='storeListSection'>
        <div id='searchSession'>
          <h3>
            <svg xmlns='http://www.w3.org/2000/svg' height='18' width='15' viewBox='0 0 384 512'>
              <path fill='#ffa74e' d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z' />
            </svg>
            &nbsp;&nbsp;보조기기 등록업소 확인
          </h3>
          <div id='selectCity'>
            <select>
              <option>시/도</option>
              <option>서울특별시</option>
              <option>부산광역시</option>
              <option>대구광역시</option>
              <option>인천광역시</option>
              <option>광주광역시</option>
              <option>대전광역시</option>
              <option>울산광역시</option>
              <option>세종특별자치시</option>
              <option>경기도</option>
              <option>충청북도</option>
              <option>충청남도</option>
              <option>전라북도</option>
              <option>전라남도</option>
              <option>경상북도</option>
              <option>경상남도</option>
              <option>제주특별자치도</option>
              <option>강원특별자치도</option>
            </select>
            <button>검색</button>
          </div>
        </div>
        <article id='storeTableSession'>
          <div id='tableDiv'>
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>보조기기 업소명</th>
                  <th>주소</th>
                  <th>전화번호</th>
                </tr>
              </thead>
              <tbody>
                {storelist.map((store) => (
                  <tr key={store.id}>
                    <td>{store.storeSeq}</td>
                    <td>{store.storeName}</td>
                    <td>{store.address}</td>
                    <td>{store.callNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
  );
};

export default Store;
