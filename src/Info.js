import React,{useState} from "react";

const Info=()=>{
    const [jelly,setJelly]=useState('');
    const [reason,setReason]=useState('');
    
    const onChangeJelly=(e)=>{
        setJelly(e.target.value);
    }
    const onChangeReason=(e)=>{
        setReason(e.target.value);
    }
    return(
        <>
            <input value={jelly} onChange={onChangeJelly}/>
            <input value={reason} onChange={onChangeReason}/>
            <p>좋아하는 젤리: {jelly}</p>
            <p>좋아하는 이유: {reason}</p>
        </>
    );
}

export default Info;