import React,{useReducer} from "react";

    function reducer(state,action){
        //1.사용할 함수 작성
        return(
            {
                ...state,
                [action.name]:action.value
            }
        );
    };

    const Info_useReducer=()=>{
        const [state,dispatch]=useReducer(reducer,
            { //2.useReducer 통해 사용 함수, 초기값 지정
                snack:'',
                reason:''
            });

        const {snack,reason}=state; //3.state에 변수 추가
        const onChange=(e)=>{
            dispatch(e.target); //4.dispatch 통해 reducer 함수 호출하는 파라미터 지정
        }
        return(
            <>
                <input name="snack" value={snack} onChange={onChange}></input>
                <input name="reason" value={reason} onChange={onChange}></input>
                <p>좋아하는 과자: {snack}</p>
                <p>좋아하는 이유: {reason}</p>
            </>
        );
    }


export default Info_useReducer;