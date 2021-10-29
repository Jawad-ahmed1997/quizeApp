import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState} from 'react'
import { typography } from '@mui/system';

function App() {
  const [questionind,setquestionind]=useState(0)
  const [marks,setmarks]=useState(0)
  const [questions,setquestions] =useState([
    {"question":"Which of the following sports is not part of the triathlon?",
    "correct_answer":"Horse-Riding","Option":["Cycling","Horse-Riding","Swimming","Running"]},
    {"question":"In what sport is a &quot;shuttlecock&quot; used?",
    "correct_answer":"Badminton","Option":["Badminton","Table Tennis","Rugby","Cricket"]},
    {"question":"Which country will host the 2020 Summer Olympics?",
    "correct_answer":"Japan","Option":["China","Australia","Japan","Germany"]},
    {"question":"Which boxer was banned for taking a bite out of Evander Holyfield&#039;s ear in 1997?",
    "correct_answer":"Mike Tyson","Option":["Mike Tyson","Roy Jones Jr.","Evander Holyfield","Lennox Lewis"]},
    {"question":"Which African American is in part responsible for integrating  Major League baseball?",
    "correct_answer":"Jackie Robinson","Option":["Curt Flood","Jack0e Robinson","Roy Campanella","Satchell Paige"]},
    {"question":"What is the name of Manchester United&#039;s home stadium?",
    "correct_answer":"Old Trafford","Option":["Anfield","City of Manchester Stadium","Old Trafford","St James Park"]},
    {"question":"Who won the premier league title in the 2015-2016 season following a fairy tale run?",
    "correct_answer":"Leicester City","Option":["Tottenham Hotspur","Leicester City","Watford","Stoke City"]},
    {"question":"Who did Steven Gerrard win the Champions League with?",
    "correct_answer":"Liverpool","Option":["Real Madrid","Liverpool","Chelsea","Man City"]},
    {"question":"The Los Angeles Dodgers were originally from what U.S. city?",
    "correct_answer":"Brooklyn","Option":["Las Vegas","Boston","Seattle"]},
    {"question":"Who won the UEFA Champions League in 2017?",
    "correct_answer":"Real Madrid C.F.","Option":["Atletico Madrid","AS Monaco FC","Juventus F.C."]}
  ])
  const checkAnswer=(cAns,e)=>{
    if(cAns===e){
      setmarks(marks+1)
    }
    setquestionind(questionind+1)
    nextquestion();
  }
  const nextquestion=()=>{
  if(questions.length-1 === questionind){
      alert(marks);
    }
    else{
      setquestionind(questionind+1)
    }
  }
  return (
    <Grid style ={{height:"100vh" , width:"100vw"}} className="mt-3 d-flex justify-content-center  align-items-center flex-column">
       <Grid spacing={2} className="d-flex justify-content-center align-items-center flex-column bg-light shadow " style ={{maxWidth:"300px",Height:"400px"}}>
        <Grid md={12}>
          <Typography ><span className="mr-1">{questionind+1}</span>{questions[questionind].question}</Typography>
        </Grid>
        {questions[questionind].Option.map((e,i)=>
        <Grid className=" mt-1 p-1 w-100 d-flex flex-row " md={6} spacing={2}>
          <button style ={{}} className="btn btn-primary " key={i}
          onClick={()=>checkAnswer(questions[questionind].correct_answer,e)}>
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
        </Grid>
        </Grid>
  );
}

export default App;
