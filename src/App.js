import React,{useState} from 'react';
import './App.css';
import Average_useState from './Average_useState';
// import Info from './Info';
// import Info_useReducer from './Info_useReducer';
// import Counter_useState from './Counter_useState';
// import Counter_useReducer from './Counter_useReducer';
// import ContextSample from './ContextSample';


function App() {
  //useState 통해 가시성 바꾸기
  // const [visible,setVisible]=useState(false);

  return (
    <div className="App">
      <header className="App-header">
       
       {/* <button onClick={()=>{ */}
         {/* setVisible(!visible); */}
        {/* }}> */}
        {/* {visible? "숨기기":"보이기"}  */}
        {/* true일 때 1, false일 때 2 */}
       {/* </button> */}
       {/* {visible && <Info/>}  */}
       {/* 항상 false. false면 아무것도 x, 둘 다 true면 성립 */}
        
        {/* <Counter/> */}
        {/* <Info/> */}
        {/* <ContextSample /> 검은 사각형 */}
        {/* <Counter_useReducer /> */}
        {/* <Info_useReducer/> */}
        <Average_useState />
      </header>
    </div>
  );
}

export default App;
