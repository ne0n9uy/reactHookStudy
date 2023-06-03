import React, {useReducer} from "react";
// useReducer: useState보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태 다른 값으로 업데이트 하고 싶을 때
//현재 상태, 업데이트 위해 필요한 정보 담은 action값 전달받아 새 상태 반환 
// 새 상태 만들 때 꼭 불변성 지켜야
// function reducer(state, action){ return {...}; }
// action값 주된 형태: {type: 'INCREMENT', +..}

function reducer(state,action){
    //action.type 따라 다른 작업 수행
    switch(state.value){
        case 'INCREMENT':
            return{value:state.value+1};
        case 'DECREMENT':
            return{value:state.value-1};
        default: //아무것도 해당 안 될 때 기존 상태 반환
            return state;
    }
}

const Counter_useReducer=()=>{
    const [state,dispatch]=useReducer(reducer,{value:0});
//useReducer의 첫번째 인자: 리듀서 함수, 두번째 인자:기본값
//사용 시 state(현재 가리키는 상태), 
//dispatch(액션 발생 함수:함수 내 파라미터로 값 넣으면 리듀서 함수 호출 구조) 값 받아옴
//가장 큰 장점: 컴포넌트 업데이트 로직 컴포넌트 밖으로 뺄 수 있음

    return(
        <>
            <p>현재 카운터 값은 {state.value}입니다.</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>       
        </>
    )
}
export default Counter_useReducer;