import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import '../css/Layout.css';
function Layout({ children }) {

    return (
        <React.Fragment>
          <Header />
            <div id="Header_Logo">
              <a href="/">
                  <img src='./silvermotion.png' alt='silvermotion' id='Logo_img'></img>
              </a>
            </div>
          <Menu />
          {children}
          <Footer />
        </React.Fragment>
      );
    }
    
export default Layout;