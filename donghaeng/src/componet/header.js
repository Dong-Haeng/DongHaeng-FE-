import React from "react";
import "./header.css";

function header(){
    return(
        <div className="header">
            <div className="header-navigation">
                <span>동행</span>
                <span>모집</span>
                <span>동아리</span>
            </div>

            <div className="header-active">
                <span>로그인</span>
                <span>로그아웃</span>
            </div>
        </div>
    )
}

export default header;