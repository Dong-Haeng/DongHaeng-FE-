import React, { useState } from "react";

import Drop from "../componet/category/Drop";

import List from "../componet/list/List";

import "./Select.css";
import axios from "axios";
import { data } from "../reducers/data";

export default function Select(){

    const list1 = ["전제","모집중", "모집완료"];
    const list2 = ["전체","Academic", "Academic", "Academic"];

    const [club, setClub] = useState([]);

    const [division, setDivision] = useState("");
    const [isrecruiting, setIsrecruiting] = useState("");

    const whereOne = (data)=>{
        setDivision(data);
    }

    const whereTwo = (data)=>{
        setIsrecruiting(data);
    }


    
    const getData = async () =>{
        try{
            const session = JSON.parse(localStorage.getItem('session'));

            console.log("session", session);

            const response = await axios.get("/api/crews",{session})
            
            console.log(response.data);
        }catch(err){
            console.log("Fail to get Data", err);
        }
    }

    getData();

    return(
        <div className="Layout-center">
            
            <div className="Select-Search-bar">
                <Drop
                    list={list1}
                    num="1"
                    where ={whereOne}
                />

                <Drop
                    list={list2}
                    num="2"
                    where={whereTwo}
                />

                <div className="Select-search-bar">
                    <input type="text" />
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>




        </div>
    )
}