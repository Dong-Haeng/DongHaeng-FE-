import React, { useState } from "react"
import axios from 'axios';
import "./Login.css";



export default function Login(){

    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");

    const TryLogin = async () =>{

        try {
        const { data } = await axios.post("/api/user/login", {
            headers: {
                'ngrok-skip-browser-warning': '69420'
            },
            data:{
                "email" : ID,
                "password" : PW
            }
        });

            console.log({data});
        } catch(err) {
            console.log("Try Login Err", err);
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