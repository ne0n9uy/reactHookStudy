import React,{useState,useEffect} from "react";
//useEffect: 렌더링 될 때마다 특정 작업 수행하도록

const Info=()=>{
    const [jelly,setJelly]=useState('');
    const [reason,setReason]=useState('');

//0. 기본값: 렌더링 직후마다 실행
    // useEffect(()=>{
    //     console.log('rendered');
    //     console.log({
    //         jelly,reason
    //     });
    // });
//1. mount시(화면 가장 처음 렌더링,업데이트 필요 x)에만 실행 하고 싶을 때:
//=> 두번째 파라미터로 빈 배열 넣기
    // useEffect(()=>{
    //     console.log('mount 시에만 실행됩니다.');
    //     console.log(jelly,reason); //초기값만 찍힘
    // },[]);

//2. 특정 값이 업데이트 될 때만 실행 하고 싶을 때
// =>두번째 파라미터 배열 안에 검사하고 싶은 변수만
    // useEffect(()=>{
    //     console.log('jelly 값이 업데이트 될 때만 실행됩니다.');
    //     console.log(jelly,reason); //jelly 업뎃 될때만 찍힘
    // },[jelly]);

//3. 뒷정리 하기: 언마운트 되기 전 | 업데이트 직전 작업 수행 원한다면
    useEffect(()=>{
        console.log('기본값으로 렌더링 직후마다 실행');
        console.log(jelly,reason);
        return()=>{ //다음 추가
            console.log('cleanup');
            console.log(jelly,reason);
        };
    });




/* Functions */
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