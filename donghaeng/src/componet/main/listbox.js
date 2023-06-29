import React from "react"
import "./listbox.css";

export default function listbox({text, link, top}){

    return(
        <div className="navigate-listbox" style={{top:top}}>
            <span>{text}</span>
        </div>
    )
}