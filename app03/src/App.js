import React,{useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 화면이 리로딩이 되면 실행되는 함수
  // useEffect : 최초 데이터를 가져와서 화면에 출력할때
  // 특정변수가 변경될때 명령어를 실행해야 할때 사용
  useEffect(
    ()=>{
      console.log("useEffect 실행");
    }
  );

  useEffect(
    ()=>{
      console.log("useEffect count: "+count);
    },[count]
  );

  useEffect(
    ()=>{
      console.log("useEffect count2: "+count2);
    },[count2]
  );

  useEffect(
    ()=>{
      console.log("처음에만 실행");
    },[]
  );



  const countBtn = ()=>{
    setCount(count+1);
  }
  const countBtn2 = ()=>{
    setCount2(count2+1);
  }
  
  
  
  return (
    <div className="main">
      <h2>게시판</h2>
      <div className="idText">카운트 : {count}</div>
      <button onClick={countBtn}>카운트 증가</button>
      <br/>
      <div className="idText">카운트2 : {count2}</div>
      <button onClick={countBtn2}>카운트2 증가</button>

      <Form/>
      


    </div>
  );
}

export default App;
