import React from "react";

import "./header.css";


function header(){

    return(
        <div className="header">
            <div className="header-navigation">
                <span>동행</span>
                <div id="menu">
                    <ul>
                        <li> <span className="sub-navigate">모집</span> </li>

                        <li>  <span className="sub-navigate">동아리</span>
                            <ul>
                                <li>공고등록</li>
                                <li>지원현황</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header-active">
                <span>로그인</span>
                <span>로그아웃</span>
            </div>
        </div>
    )
}

export default header;