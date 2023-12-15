import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Search from './components/Search';
import Subsidy from './components/Subsidy';
import Ranking from './components/Ranking';
import Banner from './components/Banner';
import Login from './components/Login';
import Logout from './components/Logout';
import CheckSubsidy from './components/CheckSubsidy';
import SearchCarDetail from './components/SearchCarDetail';
import SaleCompany from './components/SaleCompany';
import ChargeCenter from './components/ChargeCenter';
import FreePosting from './components/FreePosting';
import PostingPage from './components/PostingPage';
import Register from './components/Register';
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
                  <Route path='/free_posting' element={<PostingPage />} />
                  <Route path='/check_subsidy' element={<CheckSubsidy />} />
                </Routes>
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/showRegister" element={<Register/>}/>
        </Routes>
      </Router>
    );
}

export default App;