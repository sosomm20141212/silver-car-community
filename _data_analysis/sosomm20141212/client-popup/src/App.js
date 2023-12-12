import './App.css';

import React, { useState }  from 'react';


//npm install react-modal
function App() {
    const [modalIsOpne, setModalIsOpne] = useState(false);

    const openPopup = () => {
        const newWindow = window.open('', '_blank', 'width=700,height=700');
        newWindow.document.body.innerHTML = `
          <div  style="text-align: center;">
            <img src="subsidy.jpg" style="max-width: 100%; max-height: 100%;" />
          </div>
        `;
      };
    
    return (
        <>
            <button onClick={openPopup}>보조금 지원 자격</button>
        </>
    );
}

export default App;
