import '../css/ProductList.css';
import axios from 'axios';
import {BrowserRouter,Link, useParams} from "react-router-dom"
import React, { useEffect, useState } from "react";

const ProductList = ()=>{
    const [productList, setProductList] = useState([]);
    const [productinfo, setProductinfo] = useState({ "vehicleName": "C-1",
                                                    "manufacturer": "JDY",
                                                    "price": 2450000,
                                                    "color": "화이트",
                                                    "dimensions": "1650x700x1100",
                                                    "cargoSize": null,
                                                    "loadCapacity": null,
                                                    "canopy": 0,
                                                    "wheels": 4,
                                                    "wheelSize": "3.00-10 튜브리스",
                                                    "battery": "48V 20Ah",
                                                    "maximumOutput": "500W",
                                                    "maximumSpeed": "20km/h",
                                                    "mileage": "30km",
                                                    "chargingTime": "6시간",
                                                    "weight": "140kg",
                                                    "view": 0},{});
    useEffect(()=>{
        fetch('/vehicle',{
            method:"GET"
        }).then(res=>res.json()).then(res=>{
            console.log(1,res);
            setProductList(res);
        })
    },[]);

    return (
        <div className = "productList_box">
            <div className="model_nav">
                <div className='model_title'>
                    <h3>전동차 모델</h3>
                </div>

                <nav>
                    <ul>
                        {productList.map((product)=>(
                            <li key={product.vehicleName}>
                                    <button className='model_name' onClick={()=>{
                                        axios.get("/vehicleinfo",{params:{vehicleName: product.vehicleName}})
                                        .then((res)=>setProductinfo(res.data), console.log(productinfo))
                                        .catch(()=>console.log('요청실패'))
                                    }}>
                                        {product.vehicleName}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            
            <div className='product_detail'>
                <div>
                    <h3 id='product_info_title'>Product Info</h3>
                    <h1>{productinfo.vehicleName}</h1>
                </div>
                
                <div className='product_info'>
                    <img src = {`/vehicle_image/${productinfo.vehicleName}.jpg`}/>
                    
                    <div id='product_tableDiv'>
                        <table id="product_table">
                            <tr>
                                <td>제조사</td>
                                <td className='td_size'>{productinfo.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>색상</td>
                                <td>{productinfo.color}</td>
                            </tr>
                            <tr>
                                <td>가로X폭X높이</td>
                                <td>{productinfo.dimensions}</td>
                            </tr>
                            <tr>
                                <td>화물칸사이즈</td>
                                <td>{productinfo.cargoSize}</td>
                            </tr>
                            <tr>
                                <td>화물칸 최대중량</td>
                                <td>{productinfo.loadCapacity}</td>
                            </tr>
                            <tr>
                                <td>그늘막 유무</td>
                                <td>{productinfo.canopy}</td>
                            </tr>
                            <tr>
                                <td>바퀴 3륜/4륜</td>
                                <td>{productinfo.wheels}</td>
                            </tr>
                            <tr>
                                <td>바퀴사이즈</td>
                                <td>{productinfo.wheelSize}</td>
                            </tr>
                            <tr>
                                <td>배터리정격</td>
                                <td>{productinfo.battery}</td>
                            </tr>
                            <tr>
                                <td>최대출력</td>
                                <td>{productinfo.maximumOutput}</td>
                            </tr>
                            <tr>
                                <td>최대속도</td>
                                <td>{productinfo.maximumSpeed}</td>
                            </tr>
                            <tr>
                                <td>최대거리</td>
                                <td>{productinfo.mileage}</td>
                            </tr>
                            <tr>
                                <td>충전시간</td>
                                <td>{productinfo.chargingTime}</td>
                            </tr>
                            <tr>
                                <td>차량무게</td>
                                <td>{productinfo.weight}</td>
                            </tr>
                        </table>

                        <div className='product_price'>
                            <span>제품 가격</span>
                            <p id="price">{productinfo.price}</p>
                        </div>
                        <Link to={`https://search.shopping.naver.com/search/all?query=전동차${productinfo.vehicleName}`}>
                        <button className='Order_btn'><span>주문하기</span></button>
                        </Link>
                     
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
};


export default ProductList;