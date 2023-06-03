// useContext: 함수형 컴포넌트에서 Context 쉽게 사용
import React, {createContext, useContext} from "react";

const ThemeContext=createContext('black');
const ContextSample=()=>{
    const theme=useContext(ThemeContext);
    const style={
        width:'24px',
        height:'24px',
        background:theme
    }
    return(
        <>
            <div style={style}></div>
        </>
    )
}
export default ContextSample;