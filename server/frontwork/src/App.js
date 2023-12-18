import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Search from './components/Search';
import Subsidy from './components/Subsidy';
import Ranking from './components/Ranking';
import Banner from './components/Banner';
import Login from './components/Login';
import SearchCarDetail from './components/SearchCarDetail';
import SaleCompany from './components/SaleCompany';
import ChargeCenter from './components/ChargeCenter';
import PostingPage from './components/PostingPage';
import Register from './components/Register';
import ReRegister from './components/ReRegister';
import './App.css'

function App() {
    return (
      <Router>
        <Routes>
          <Route
            path='/*'
            element={
              <Layout>
                <Routes>
                  <Route
                    index
                    element={
                      <>
                        <Search />
                        <Ranking />
                        <Banner />
                        <Subsidy />
                      </>
                    }
                  />
                  <Route path='/search_car_detail' element={<SearchCarDetail/>} />
                  <Route path='/sale_company' element={<SaleCompany />} />
                  <Route path='/charge_center' element={<ChargeCenter />} />
                  <Route path='/community*' element={<PostingPage />} />
                </Routes>
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/showRegister" element={<Register/>}/>
          <Route path="/showReRegister" element={<ReRegister/>}/>
        </Routes>
      </Router>
    );
}

export default App;