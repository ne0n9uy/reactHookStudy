import React, {useState} from "react";

const Counter=()=>{
    var [value,setValue]=useState(0);
    return(
        <>
            <p>현재 값은 {value}입니다.</p>
            <button onClick={()=>setValue
            (value+1)}>+1</button>
            <button onClick={()=>setValue
            (value-1)}>-1</button>
            <button onClick={()=>setValue(value=0)}>reset</button>
        </>
    );
}
export default Counter;