import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./header.css";
import { useSelector } from "react-redux";


function Header(){

    const { isLogin } = useSelector(state => state.data);
    const { isManger } = useSelector(state => state.data);
    const navigate = useNavigate();

    const MoveToSelect =() =>{
        navigate("/select")
    }

    const MoveToMain =() =>{
        navigate("/")
    }

    return(
        <div className="header">
            <div className="header-navigation">
                <span onClick={MoveToMain}>동행</span>
                <div id="menu">
                    <ul>
                        <li> <span className="sub-navigate" onClick={MoveToSelect}> 모집</span> </li>
                        {
                            isManger===true?
                            <li>  <span className="sub-navigate">동아리</span>
                                <ul>
                                    <li>공고등록</li>
                                    <li>지원현황</li>
                                </ul>
                            </li>
                            :
                            <></>
                        }
                    </ul>
                </div>
            </div>

{
    isLogin==="LogOut"?
    <div className="header-active">
        <span> <Link to="/login"> 로그인 </Link></span>
        <span> <Link to="/signup">회원가입</Link> </span>
    </div>
    :
    <div className="header-user-img"></div>
}
        </div>
    )
}

export default Header;