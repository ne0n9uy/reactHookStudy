import React,{useReducer} from "react";

function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    };    
}

const Info_useReducer=()=>{
    const [state,dispatch]=useReducer(reducer,
        {
            snack:'',
            reason:''
        }
    );
    const {snack,reason}=state;
    const onChange=(e)=>{dispatch(e.target);};

    return(
        <>
            <input value={snack} onChange={onChange}></input>
            <input value={reason} onChange={onChange}></input>
            <p>좋아하는 과자: {snack}</p>
            <p>좋아하는 이유:{reason}</p>
        </>
    );
}

export default Info_useReducer;