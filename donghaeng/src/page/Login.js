import React, { useEffect, useState } from "react"
import axios from 'axios';
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { setManger, setUserID, setlogin } from "../reducers/data";
import { useNavigate } from "react-router-dom";



export default function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");

    const TryLogin = async () =>{

        console.log(PW)

        try {

            const data ={
                email :ID,
                password: PW,
            }

            const  response  = await axios.post("/api/user/login", data);

            console.log(response.data)

            dispatch(setUserID(response.data.id));
            if(response.data.president === true){
                dispatch(setManger());
            }
            dispatch(setlogin());

            navigate("/");
            
        } catch(err) {
            console.log("Try Login Err", err);
            alert("로그인 실패");
        }
    }

    const chID =(event)=>{
        setID(event.currentTarget.value);
    }

    const chPW=(event)=>{
        setPW(event.currentTarget.value);
    }

    return(
        <div className="Layout-center">
            <p className="login-title">LOGIN</p>

            <div className="Layout-input">
                <label htmlFor="">이메일</label>
                <input type="text" onChange={chID}  value={ID}/>
            </div>

            <div className="Layout-input">
                <label htmlFor="">비밀번호</label>
                <input type="password" value={PW} onChange={chPW}/>
            </div>

            <p className="login-findPW">forget Password?</p>


            <button className="login-button" onClick={TryLogin}>로그인</button>

            <button className="login-button" >회원가입</button>

        </div>
    )
}