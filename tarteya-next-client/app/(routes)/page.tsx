'use client'
import Link from "next/link";
/* 
Здесь будет страница приветствия, фетчинг данных и т.д.

*/
const MainPage = () =>{
  return(
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <div id='1' className="TESTDIV">
1
        </div>
        <div id='2' className="TESTDIV">
2
        </div>
        <div id='3' className="TESTDIV">
3
        </div>
        <div id='4' className="TESTDIV">
4
        </div>
        <div id='5' className="TESTDIV">
5
        </div>
        <div id='6' className="TESTDIV">
6
        </div>
        <div id='7' className="TESTDIV">
7
        </div>
    </div>
  );
}

export default MainPage;