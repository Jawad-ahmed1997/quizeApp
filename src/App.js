import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState} from 'react'
import {useSelector} from 'react-redux'

function App() {
  const [questionind,setquestionind]=useState(0)
  const [marks,setmarks]=useState(0)
  // const [questions,setquestions] =useState()

  const state = useSelector((e)=>e);
  console.log(state);
  const checkAnswer=(cAns,e)=>{
    if(cAns===e){
      setmarks(marks+1)
    }
    setquestionind(questionind+1)
    nextquestion();
  }
  const nextquestion=()=>{
  if(state.QuestionAPI.length-1 === questionind){
      alert(marks);
      console.log(state.QuestionAPI.length)
    }
    else{
      setquestionind(questionind+1)
    }
    
  }
  return (
    <div className=" main mt-3 d-flex justify-content-center w-100  align-items-center flex-column">
      <div className="QuestionField d-flex w-50 justify-content-center align-items-center flex-column bg-light shadow ">
       <h1>Quize APP</h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
        <h5 className="m-2">
          <span className="mr-3 border-rounded border-dark">{questionind+1}</span>{state.QuestionAPI[questionind].question}
        </h5>
        </div>
          
        
        {state.QuestionAPI[questionind].Option.map((e,i)=>
        <Grid className=" mt-1 p-1 w-100 d-flex flex-row " md={6} spacing={2}>
          <button style ={{}} className="btn btn-primary " key={i}
          onClick={()=>checkAnswer(state.QuestionAPI[questionind].correct_answer,e)}>
            {e}
          </button>
        </Grid>)}
        <Grid >
          <button className="btn btn-success" onClick={nextquestion}>
            Next
          </button>
          <grid>
            <typography className=" ml-3 p-2 rounded border">
              <span>Your Score Is {marks}</span>
            </typography>
          </grid>
        </Grid>
        </div>
        </div>
  );
}

export default App;
