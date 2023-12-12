import './Store.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

function Store() {
  const [storelist, setStorelist] = useState([]);
  const {register, handleSubmit} = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://localhost:8080/api/store');
        setStorelist(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = async (citySearch) => {
    try{
      const response = await axios.post('http://localhost:8080/api/store', citySearch);
      setStorelist(response.data);
      console.log(storelist);
    } catch(error) {
      console.log(error);
    }
  };
  

//npm install react-hook-form
  return (
      <section className='storeListSection'>
        <div id='searchSession'>
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="25" viewBox="0 0 384 512">
              <path fill='#ffa74e' d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
            </svg>
            &nbsp;&nbsp;보조기기 등록업소 확인        
          </h2>
          <form id='selectCity' onSubmit={handleSubmit(handleSearch)}>
            <select {...register('city')}>
              <option value="">시/도</option>
              <option value="서울특별시">서울특별시</option>
              <option value="부산광역시">부산광역시</option>
              <option value="대구광역시">대구광역시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="광주광역시">광주광역시</option>
              <option value="대전광역시">대전광역시</option>
              <option value="울산광역시">울산광역시</option>
              <option value="세종특별자치시">세종특별자치시</option>
              <option value="경기도">경기도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="제주특별자치도">제주특별자치도</option>
              <option value="강원특별자치도">강원특별자치도</option>
            </select>
            <button type='submit'>검색</button>
          </form>
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
                    <td>&nbsp;{store.address}</td>
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
