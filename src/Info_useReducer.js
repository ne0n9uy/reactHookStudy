import React,{useReducer} from "react";

//1. 사용할 함수 정의
function reducer(state, action){ //state, action
    return{ //여러 값 관리
            ...state,
            [action.name]:action.value
        };
}

//2. main 
const Info_useReducer=()=>{
    const [state,dispatch]=useReducer(reducer,{ 
        //useReducer 사용 시 state값, dispatch 함수 받아옴
        //state:현 상태, dispatch: action 발생시킴
        snack:'',
        reason:''
    });
    
    const {snack,reason}=state; //state 할당
    const onChange=(e)=>{
        //action 값 넣어주면 reducer 함수 호출 구조
       dispatch(e.target); //action은 어떤 값도 가능
    }
    
    return(
        <>
            <input name="snack" value={snack} onChange={onChange}></input>
            <input name="reason" value={reason} onChange={onChange}></input>
            <p>좋아하는 과자:{snack}</p>
            <p>좋아하는 이유:{reason}</p>
        </>
        );
    }


export default Info_useReducer;