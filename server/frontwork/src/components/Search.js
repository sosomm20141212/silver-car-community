import React, { useEffect, useState } from 'react';
import '../css/Search.css';
import axios from 'axios';
const Search=()=> {
 
  const [Product,setProduct]=useState([]);
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  const ProductName = Product
                      .filter(Madeitem => Wheels == Madeitem.wheels)
                      .filter(Madeitem => Manufact === Madeitem.manufacturer)                 
                      .map(Madeitems=>Madeitems.vehicleName);

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
            
          <div className='select-wrapper'>
              
              <div className='Search_vehicle'>
                <select onClick={selectManufact} defaultValue="default" className='Search_vehicleType' required>
                  <option value="default" disabled>
                    제조사
                  </option>
                  {[...new Set(ProductMade)].map((factitem, factkey)=>(
                    <option value={factitem} key={factkey}>{factitem}</option>
                  ))}
                </select>
              </div>
            </div>
         
            <div className='select-wrapper'>
              <div className='Search_vehicle'>
                <select onClick={selectWheels}  defaultValue="default"  className='Search_vehicleType' required>
                <option value="default" disabled>
                    차량유형
                  </option>
                {[...new Set(ProductWheels)].map((Wheelsitem, Wheelskey)=>(
                    <option value={Wheelsitem} key={Wheelskey}>{Wheelsitem}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='select-wrapper'>
              {/* <div className='label-left'>색상</div> */}
              <div className='Search_color'>
                <select defaultValue="default" className='Search_colorType'>
                  <option value="default" disabled>
                    모델명
                  </option>

                  {ProductName.map((Nameitem,Namekey)=>(
                    <option value={Nameitem} key={Namekey}>{Nameitem}</option>
                  ))}
                </select>

                <button type="submit" id="Search_btn">검색</button>
              </div>
            </div>
          </div>

      </div>
    </article>
  );
}

export default Search;
