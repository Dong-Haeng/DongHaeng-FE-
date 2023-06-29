import React, { useEffect, useState } from "react";

import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const navigate = useNavigate();

    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const [CPW, setCPW] = useState("");
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Univer, setUniver] = useState("")

    const Check =()=>{
        const target = document.getElementById("isSame");
        if(CPW !== PW){
            target.style.border = "1px solid red";
        }else{
            target.style.border = "1px solid #939393"
        }
    }

    const chID = (event)=>{
        setID(event.currentTarget.value);
    }

    const chPW = (event)=>{
        setPW(event.currentTarget.value);
    }

    const chCPW = (event)=>{
        setCPW(event.currentTarget.value);
    }

    const chN = (event)=>{
        setName(event.currentTarget.value);
    }

    const chP = (event)=>{
        setPhone(event.currentTarget.value);
    }

    useEffect(()=>{
        Check();
    },[CPW])

    const GetUniver =() =>{

        if(ID===""){
            alert("이메일을 적어주세요")
        }else{
            setUniver("KONKUK");
        }
    }

    const ComeIN = async () =>{
        if(ID==="" || PW==="" || CPW==="" || PW!==CPW || Name==="" || Phone===""){
            alert("정보를 입력해주세요")
        }else if(Phone.length !== 11){
            alert("올바르지 않은 전화번호입니다.")
        }else{
            console.log(Name, ID, PW, Phone, Univer)

            


            try{
                const data ={
                    name: Name,
                    email: ID,
                    password: PW,
                    phone: Phone,
                    university: Univer,
                }

                const {response} = await axios.post("/api/user/signUp", data);

                console.log({response});

                alert("회원가입 완료");

                navigate("/login");

            }catch(err){
                console.log("Error! " ,err)
            }
        }
    }


    return(
        <div className="Layout-center">

            <p className="login-title">회원가입</p>

            <div className="Signup-email">
                <div className="Layout-input-Signup">
                    <label htmlFor="">이메일</label>
                    <input type="text" onChange={chID}  value={ID} className="Email-input"/>
                </div>
                <div className="Certified-btn" onClick={GetUniver}> <span>인증번호</span> </div>
            </div>

            <div className="Layout-input-Signup Singup-margin" id="School">
                <label>학교</label>
                <input type="text" value={Univer} readOnly/>
                <p>*학교는 이메일을 통해 자동 인증됩니다.</p>
            </div>

            <div className="Layout-input-Signup">
                <label htmlFor="">비밀번호</label>
                <input type="password" onChange={chPW}  value={PW}/>
            </div>

            <div className="Layout-input-Signup Singup-margin">
                <label htmlFor="">비밀번호 확인</label>
                <input type="password" onChange={chCPW}  value={CPW} id="isSame"/>
            </div>

            <div className="Layout-input-Signup">
                <label htmlFor="">이름</label>
                <input type="text" onChange={chN}  value={Name}/>
            </div>

            <div className="Layout-input-Signup Singup-margin" id="Phone">
                <label htmlFor="">전화번호</label>
                <input type="text" onChange={chP}  value={Phone}/>
                <p>* '-'를 제외하고 적어주세요</p>
            </div>

            <div className="Signup-Btn" onClick={ComeIN}> <span>회원가입</span></div>

        </div>
    );
}