import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// function Hi() {
// return <div>hello world</div>
// } 

const Hi = () => {
  return <div>
    hello world
  </div>

}


// const Room = () =>{
//   const [isLit , setLit] = React.useState(true);
//   return <div>
//     the room is {(isLit)? "Lit" : "dark"}
 

//   <button onClick={()=> setLit (!isLit)}>
//     flip
//   </button>
//   </div>
// }

// const Room = () => {
//   const  [isLit , setLit] = useState(true);
  


//   return(
//     <div className={`room{(isLit)? 'lit' : 'dark'}`}>
//      the room is {(isLit)? "lit" : "dark"}

//      <br/>

//      <button onClick={() => setLit(!isLit)}>flip</button>
//     </div>

//   )
// }


const Room = () => {
  const [isLit , setLit] = useState(true);
  const light = (isLit)? 'lit' : 'dark';

  return(
    <div className={`room ${light}` }>
      the room is  {light}
   
    <button onClick={()=> setLit(!isLit)}>flip</button>

    </div>

  )
}


const Mediapg = () => {
  return <div>
    <Hi/>
    <Room/>
  </div>
}



ReactDOM.render(<Mediapg/> , document.querySelector("#root"))