import React from 'react';
import {BrowserRouter,Link, useParams} from "react-router-dom"
import '../css/Productinfo.css';

const Productinfo = ({vehicleName, manufacturer, price, color, dimensions, cargoSize,
    loadCapacity, canopy, wheels, wheelSize, battery, maximumOutput,view,
    maximumSpeed, mileage, chargingTime, weight}) =>{
        return (
            <div className='product_detail'>
                <div>
                    <h3 id='product_info_title'>Product Info</h3>
                    <h1>{vehicleName}</h1>
                    {view!=null&&<div>조회수 : {view}</div>}
                </div>
                
                <div className='product_info'>
                    <img src = {`/vehicle_image/${vehicleName}.jpg`} id="product_image"/>
                    
                    <div id='product_tableDiv'>
                        <table id="product_table">
                            <tr>
                                <td>제조사</td>
                                <td className='td_size'>{manufacturer}</td>
                            </tr>
                            <tr>
                                <td>색상</td>
                                <td>{color}</td>
                            </tr>
                            <tr>
                                <td>가로X폭X높이</td>
                                <td>{dimensions}</td>
                            </tr>
                            <tr>
                                <td>화물칸사이즈</td>
                                <td>{cargoSize}</td>
                            </tr>
                            <tr>
                                <td>화물칸 최대중량</td>
                                <td>{loadCapacity}</td>
                            </tr>
                            <tr>
                                <td>그늘막 유무</td>
                                <td>{canopy}</td>
                            </tr>
                            <tr>
                                <td>바퀴 3륜/4륜</td>
                                <td>{wheels}</td>
                            </tr>
                            <tr>
                                <td>바퀴사이즈</td>
                                <td>{wheelSize}</td>
                            </tr>
                            <tr>
                                <td>배터리정격</td>
                                <td>{battery}</td>
                            </tr>
                            <tr>
                                <td>최대출력</td>
                                <td>{maximumOutput}</td>
                            </tr>
                            <tr>
                                <td>최대속도</td>
                                <td>{maximumSpeed}</td>
                            </tr>
                            <tr>
                                <td>최대거리</td>
                                <td>{mileage}</td>
                            </tr>
                            <tr>
                                <td>충전시간</td>
                                <td>{chargingTime}</td>
                            </tr>
                            <tr>
                                <td>차량무게</td>
                                <td>{weight}</td>
                            </tr>
                        </table>
                        <div className='product_price'>
                            <span>제품 가격</span>
                            <p id="price">{price}</p>
                        </div>
                        <Link to={`https://search.shopping.naver.com/search/all?query=전동차${vehicleName}`}>
                        <button className='Order_btn'><span>주문하기</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

export default Productinfo;