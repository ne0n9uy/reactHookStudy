import React, {useState} from "react";
//useMemo: 함수형 컴포넌트 내부 발생 연산 최적화 가능

const getAverage=(nums)=>{
    console.log('평균값 계산중..');
    if(nums.length===0){return 0;}
    const sum=nums.reduce((acm,cur)=>acm+cur);
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    //reduce: 배열 각 요소에 대해 주어진 reducer 실행 + 하나의 결과값 반환
    //acm(누적값) + cur(배열의 현재 요소)
    return sum/nums.length;
}

const Average_useState=()=>{
    //초기값 설정
    const [list,setList]=useState([]);
    const[num,setNum]=useState('');

    //input 초기값 설정
    const onChange=(e)=>{ 
        setNum(e.target.value);
    }
    //btn 클릭 시 이벤트
    const onInsert=(e)=>{
        const nextList=list.concat(parseInt(num));
        setList(nextList);
        setNum(''); //input field 비워줌
        // console.log(list); 입력값 전까지만 출력?
    }
    return(
        <>
            <input value={num} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ui>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>    
                ))}
{/* https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d */}
 {/*map A B  */}
            </ui>
            <p>평균값: {getAverage(list)}</p>
        </>
    );
}

export default Average_useState;