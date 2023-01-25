import './Toe.css';
 import React, { useState } from 'react'
 
 export default function Toegame() {
    
    const [winner, setWinner]= useState('');
    const [count, setCount]= useState(1);
    const [char, setChar]= useState('x');
    const [matrix,setMatrix]= useState([
      ['','',''],
      ['','',''],
      ['','',''],
    ]);

    const getBGClass =(value) =>{
      if(value === 'x') return 'yellow'
      if(value === 'o') return 'orange'

      return '';

    };
    
    const checkWinner=()=> {
      // row check winner
      if(matrix[0][0]&&matrix[0][0]===matrix[0][1]&& matrix[0][1]===matrix[0][2]){
        setWinner(matrix[0][0] + 'is The Winner');
      }
      if(matrix[1][0]&&matrix[1][0]===matrix[1][1]&& matrix[1][1]===matrix[1][2]){
        setWinner(matrix[1][0] + 'is The Winner');
      }
      if(matrix[2][0]&&matrix[2][0]===matrix[2][1]&& matrix[2][1]===matrix[2][2]){
        setWinner(matrix[2][0] + 'is The Winner');
      }
      // check col winner

      if(matrix[0][0]&&matrix[0][0]===matrix[1][0]&& matrix[1][0]===matrix[2][0]){
        setWinner(matrix[2][0] + 'is The Winner');
      }
      if(matrix[0][1]&&matrix[0][1]===matrix[1][1]&& matrix[1][1]===matrix[2][1]){
        setWinner(matrix[2][1] + 'is The Winner');
      }
      if(matrix[0][2]&&matrix[0][2]===matrix[1][2]&& matrix[1][2]===matrix[2][2]){
        setWinner(matrix[2][2] + 'is The Winner');
      }
      // check diagonal winner

      if( matrix[0][0]&&matrix[0][0]===matrix[1][1]&& matrix[1][1]===matrix[2][2]){
        setWinner(matrix[2][2] + 'is The Winner');
      }
      if( matrix[0][2]&&matrix[0][2]===matrix[1][1]&& matrix[1][1]===matrix[2][0]){
        setWinner(matrix[2][0] + 'is The Winner');
      }
      if(count=== 9){
        setWinner('The Match has been Drawn');
      }

    };

    const handleClick = (r,c) =>{
      if(matrix[r][c]) return;
       const tepMatrix=[...matrix];
       tepMatrix[r][c]=char;
       setMatrix(tepMatrix);
       setChar(char === 'x' ? 'o' : 'x');
       setCount(count + 1);
       checkWinner();
    }

   return (
     <div className='app'>
        <div className='header alineCenter'>Tic Tac Toe</div>
        <div className='alineCenter board'>
             {!winner&&<p>{char} Turn Now </p>}
          <div className='gameBoard'>
           
          {  winner||
            matrix.map((row,rindex)=>(
              <div className='row'>
                {
                  row.map((cell,cindex)=>(
                    <div 
                    onClick={()=>handleClick(rindex,cindex)}
                    className={`cell alineCenter ${getBGClass(matrix[rindex][cindex])}`}>
                        {matrix[rindex][cindex]}
                    </div>
                  ))
                }
              </div>
            ))
          }
          </div>
          <button onClick={()=>{
            setWinner('');
            setMatrix([['', '', ''],
            ['', '', ''],
            ['', '', ''],]);
          }}>Restart Game</button>
        </div>
     </div>
   )
 }
 