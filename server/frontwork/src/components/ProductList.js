import '../css/ProductList.css';
import axios from 'axios';
import {BrowserRouter,Link, useParams} from "react-router-dom"
import React, { useEffect, useState } from "react";
import Productinfo from './Productinfo';
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
                                        .then((res)=>setProductinfo(res.data))
                                        .catch(()=>console.log('요청실패'))
                                    }}>
                                        {product.vehicleName}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            
            <div className='product_detail'>           
                <Productinfo
                        vehicleName = {productinfo.vehicleName}
                        manufacturer= {productinfo.manufacturer}
                        price= {productinfo.price}
                        color= {productinfo.color}
                        dimensions= {productinfo.dimensions}
                        cargoSize= {productinfo.cargoSize}
                        loadCapacity= {productinfo.loadCapacity}
                        canopy= {productinfo.canopy}
                        wheels= {productinfo.wheels}
                        wheelSize= {productinfo.wheelSize}
                        battery= {productinfo.battery}
                        maximumOutput= {productinfo.maximumOutput}
                        maximumSpeed= {productinfo.maximumSpeed}
                        mileage= {productinfo.mileage}
                        chargingTime= {productinfo.chargingTime}
                        weight= {productinfo.weight}
                        view = {productinfo.view}/>
            </div>       
        </div>
    );
};

export default ProductList;