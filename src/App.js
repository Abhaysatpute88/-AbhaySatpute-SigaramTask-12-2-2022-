import React from 'react'

function App() {
  var randomArray=["Box #1","Box #2","Box #3","Box #4","Box #5","Box #6","Box #7","Box #8","Box #9","Box #10","Box #11","Box #12","Box #13","Box #14","Box #15","Box #16"]

  const handleClick1=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("1").innerHTML=randomItem
    document.getElementById("1").style.backgroundColor="red";
    document.getElementById("1").style.color="white";

  }
  const handleClick2=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("2").innerHTML=randomItem
    document.getElementById("2").style.backgroundColor="red";
    document.getElementById("2").style.color="white";

  }
  const handleClick3=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("3").innerHTML=randomItem
    document.getElementById("3").style.backgroundColor="red";
    document.getElementById("3").style.color="white";

  }
  const handleClick4=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("4").innerHTML=randomItem
    document.getElementById("4").style.backgroundColor="red";
    document.getElementById("4").style.color="white";

  }
  const handleClick5=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("5").innerHTML=randomItem
    document.getElementById("5").style.backgroundColor="red";
    document.getElementById("5").style.color="white";

  }
  const handleClick6=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("6").innerHTML=randomItem
    document.getElementById("6").style.backgroundColor="red";
    document.getElementById("6").style.color="white";

  }
  const handleClick7=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("7").innerHTML=randomItem
    document.getElementById("7").style.backgroundColor="red";
    document.getElementById("7").style.color="white";

  }
  const handleClick8=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("8").innerHTML=randomItem
    document.getElementById("8").style.backgroundColor="red";
    document.getElementById("8").style.color="white";

  }
  const handleClick9=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("9").innerHTML=randomItem
    document.getElementById("9").style.backgroundColor="red";
    document.getElementById("9").style.color="white";

  }
  const handleClick10=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("10").innerHTML=randomItem
    document.getElementById("10").style.backgroundColor="red";
    document.getElementById("10").style.color="white";

  }
  const handleClick11=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("11").innerHTML=randomItem
    document.getElementById("11").style.backgroundColor="red";
    document.getElementById("11").style.color="white";

  }
  const handleClick12=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("12").innerHTML=randomItem
    document.getElementById("12").style.backgroundColor="red";
    document.getElementById("12").style.color="white";

  }
  const handleClick13=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("13").innerHTML=randomItem
    document.getElementById("13").style.backgroundColor="red";
    document.getElementById("13").style.color="white";

  }
  const handleClick14=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("14").innerHTML=randomItem
    document.getElementById("14").style.backgroundColor="red";
    document.getElementById("14").style.color="white";

  }
  const handleClick15=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("15").innerHTML=randomItem
    document.getElementById("15").style.backgroundColor="red";
    document.getElementById("15").style.color="white";

  }
  const handleClick16=()=>{
    var randomItem=randomArray[Math.floor(Math.random()* randomArray.length)]
    document.getElementById("16").innerHTML=randomItem
    document.getElementById("16").style.backgroundColor="red";
    document.getElementById("16").style.color="white";

  }

  return (
    <div>
      <table>
        <tr>
           <td id='1' onClick={handleClick1}></td>
           <td id='2' onClick={handleClick2}></td>
           <td id='3' onClick={handleClick3}></td>
           <td id='4' onClick={handleClick4}></td>
         </tr>
         <tr>
            <td id='5' onClick={handleClick5}></td>
            <td id='6' onClick={handleClick6}></td>
            <td id='7' onClick={handleClick7}></td>
            <td id='8' onClick={handleClick8}></td>
         </tr>
         <tr>
           <td id='9' onClick={handleClick9}></td>
           <td id='10' onClick={handleClick10}></td>
           <td id='11' onClick={handleClick11}></td>
           <td id='12' onClick={handleClick12}></td>
         </tr>
         <tr>
           <td id='13' onClick={handleClick13}></td>
           <td id='14' onClick={handleClick14}></td>
           <td id='15' onClick={handleClick15}></td>
           <td id='16' onClick={handleClick16}></td>
         </tr>
      </table>
    </div>
  )
}

export default App