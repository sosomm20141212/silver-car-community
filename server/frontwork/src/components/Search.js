import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Search.css';
import axios from 'axios';
import Productinfo from './Productinfo';
const Search=()=> {
 
  const [Product,setProduct]=useState([]);
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productinfo, setProductinfo] = useState({});
 
  const Productfatch = async()=>{
    try{
      setError(null);
      setProduct([]);
      setLoading(true);

      const res = await(await axios.get('/vehicle')).data;
      setProduct(res);
    }catch(e){
      setError(e);
    }
    setLoading(false);
  };

  useEffect(()=>{
    Productfatch();
  },[]);

  //제조사 
  const[Manufact, setManufact] = useState(null);
  const ProductMade = Product.map(Madeitem => Madeitem.manufacturer);
  const selectManufact = (e)=>{
    setManufact(e.target.value)
  }

  //차량유형
  const[Wheels, setWheels] = useState(null);
  const ProductWheels = Product
                        .filter(Madeitem => Manufact === Madeitem.manufacturer)
                        .map(Madeitems=>Madeitems.wheels);
  const selectWheels = (e)=>{
    setWheels(e.target.value);
  } 
  
  //모델명
  const[Names, setNames] = useState(null);
  const ProductName = Product
                      .filter(Madeitem => Wheels == Madeitem.wheels)
                      .filter(Madeitem => Manufact === Madeitem.manufacturer)                 
                      .map(Madeitems=>Madeitems.vehicleName);
  const selectNames = (e)=>{
    setNames(e.target.value);
  } 

  if (loading) return (<div className='loading'><h1>로딩중..</h1></div>);
  if (error) return (
    <div className='error'>
      <h1>로딩중 에러가 발생했습니다.</h1>
      <button onClick={Productfatch}>다시 불러오기</button>
    </div>);
  
  return (
    <article className='Search_article'>
      <div id = "Search">
          <div id="Search_title">
              <p>대한민국 No.1</p>
              <p>SILVERMOTION에서 전동차를 찾아보세요.</p>
          </div>

          <div className='Search_input'>

           {/* <form> */}
                  <select onClick={selectManufact} defaultValue="default" className='Search_madeType' required>
                    <option value="default" className='option_name' disabled>
                      제조사
                    </option>
                    {[...new Set(ProductMade)].map((factitem, factkey)=>(
                      <option value={factitem} key={factkey}>{factitem}</option>
                    ))}
                  </select>
              
                  <select onClick={selectWheels}  defaultValue="default"  className='Search_wheelsType' required>
                  <option value="default" className='option_name' disabled>
                      차량유형
                    </option>
                  {[...new Set(ProductWheels)].map((Wheelsitem, Wheelskey)=>(
                      <option value={Wheelsitem} key={Wheelskey}>{Wheelsitem}</option>
                    ))}
                  </select>

                  <select onClick={selectNames}defaultValue="default" className='Search_VehicleType'>
                    <option value="default" className='option_name' disabled>
                      모델명
                    </option>

                    {[...new Set(ProductName)].map((Nameitem,Namekey)=>(
                      <option value={Nameitem} key={Namekey}
                      >{Nameitem}</option>
                    ))}
                  </select>
                
                  <button id="Search_btn" onClick={()=>{                 
                                        axios.get("/vehicleinfo",{params:{vehicleName: Names}})
                                        .then((res2)=>setProductinfo(res2.data))
                                        .catch(()=>console.log('요청실패'))
                                    }}>검색</button>
            {/* </form> */}

          </div>
          <div className='product_detail'>
                {(productinfo.vehicleName!=null) && <Productinfo
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
                        weight= {productinfo.weight}/>}
            </div>
      </div>
    </article>
  );
}

export default Search;
