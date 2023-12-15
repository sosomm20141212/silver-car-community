import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect( ()=> {
        window.sessionStorage.removeItem('accessId');
        alert("로그아웃 되었습니다");
        navigate("/");
    });

    return(
        <div></div>
    )
}


export default Logout;