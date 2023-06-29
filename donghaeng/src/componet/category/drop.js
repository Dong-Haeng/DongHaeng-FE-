import React, { useEffect, useState } from "react";
import "./drop.css";

export default function Drop(props){

    const [data, setData] = useState("전체")

    const {list} = props;

    const {num} = props;

    const {where} = props

    useEffect(()=>{
        where(data);
    }, [data])

    const SetName = (event) =>{
        console.log(event.target.id);

        const id = event.target.id;

        const str = document.getElementById(id).innerText;
        
        setData(str);
    }

    return(
        <div className="custom-select-box">
            <ul className="select-box-one">
                <li className="select-title">{data}</li>
            </ul>
            <ul className="select-box-two">
                {
                    list.map((item, index)=>(
                        <li key={index} onClick={SetName} id={`${index}`+`${num}`}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}