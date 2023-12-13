import '../css/Station.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

function Station() {
  const [stationlist, setStationlist] = useState([]);

  const {register, handleSubmit} = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://localhost:8080/api/station');
        setStationlist(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = async (citySearch) => {
    try{
      const response = await axios.post('http://localhost:8080/api/staion', citySearch);
      setStationlist(response.data);
      console.log(stationlist);
    } catch(error) {
      console.log(error);
    }
  };


  return (
      <section className='stationListSection'>
        <div id='searchSession'>
          <h2>
          <svg xmlns="http://www.w3.org/2000/svg" height="27" width="23" viewBox="0 0 448 512">
            <path fill='#ffa74e' d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
            </svg>
            &nbsp;&nbsp;의료용스쿠터 충전소 위치        
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
            <button type='submit' id="station_btn">검색</button>
          </form>
        </div>
        <article id='stationTableSession'>
          <div id='station_tableDiv'>
            <table id="station_table">
              <thead>
                <tr>
                  <th rowSpan={2}>번호</th>
                  <th rowSpan={2}>시설명</th>
                  <th rowSpan={2}>주소</th>
                  <th colSpan={3}>운영시간</th>
                  <th rowSpan={2}>동시충전</th>
                  <th rowSpan={2}>타이어 공기주입</th>
                  <th rowSpan={2}>휴대폰 충전</th>
                  <th rowSpan={2}>관리기관</th>
                  <th rowSpan={2}>전화번호</th>
                </tr>
                <tr>
                  <th>평일</th>
                  <th>토요일</th>
                  <th>공휴일</th>
                </tr>
              </thead>
              <tbody>
                {stationlist.map((station) => (
                  <tr key={station.id}>
                    <td>{station.stationSeq}</td>
                    <td>{station.stationName}</td>
                    <td>{station.address}</td>
                    <td>{station.startWeek} - {station.endWeek}</td>
                    <td>{station.startSaturday} - {station.endSaturday}</td>
                    <td>{station.startHoliday} - {station.endHoliday}</td>
                    <td>{station.simultaneousUsers}</td>
                    <td>{station.airInjection}</td>
                    <td>{station.phoneCharging}</td>
                    <td>{station.agency}</td>
                    <td>{station.callNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
  );
};

export default Station;
