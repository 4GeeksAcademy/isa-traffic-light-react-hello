import React, { useState } from "react"

const TrafficLights = () =>{
    const[color, setColor] = useState('red')
    const[colorPurple, setcoloPurple] = useState('purple')
    const[lights, setLights] = useState(['red', 'yellow', 'green'])

    return(
        <>
            <div className="card m-auto"
            style={{
                height: "4rem", 
                width: "1.5rem",
                background: "black",
                borderRadius: "0",
                }}>
            </div>
        <div className="card d-flex justify-content-center align-items-center m-auto" 
            style={{
            background: "black",
            width: '6rem',
            height: '20rem',
            color: "white",
            fontWeight: "bolder",
            borderRadius: '8px',
          }}>
            <div className="card-body">
            {lights.map((light,index)=>
                <button
                key={index} 
                onClick={()=>setColor(light)} 
                className={`btn ${light === color ? "active" : "" || light === colorPurple ? "active" : ""}`}
                style={{
                    backgroundColor: light,
                    width: "5rem",
                    height: "5rem", 
                    marginTop: "20px",
                    borderRadius: "60%", 
                    cursor: "pointer", 
                    boxShadow: light === color ? "0px 0px 20px lightyellow" : "none" || light === colorPurple ? "0px 0px 20px purple" : "none",
                }}>
                </button>
            )}
            </div>
            {/*<button className="btn btn-primary border-0 mb-2">click me!</button>*/}
        </div>
        </>   
    );
};
export default TrafficLights