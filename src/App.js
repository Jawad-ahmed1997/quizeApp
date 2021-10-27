import Button from '@mui/material/Button';
import './App.css';

function App() {
  const data =[
    {"question":"Which of the following sports is not part of the triathlon?",
    "correct_answer":"Horse-Riding","Option":["Cycling","Swimming","Running"]},
    {
    "question":"In what sport is a &quot;shuttlecock&quot; used?",
    "correct_answer":"Badminton","Option":["Table Tennis","Rugby","Cricket"]},
    {
    "question":"Which country will host the 2020 Summer Olympics?",
    "correct_answer":"Japan","Option":["China","Australia","Germany"]},
    {
    "question":"Which boxer was banned for taking a bite out of Evander Holyfield&#039;s ear in 1997?",
    "correct_answer":"Mike Tyson","Option":["Roy Jones Jr.","Evander Holyfield","Lennox Lewis"]},{"category":"Sports","type":"multiple","difficulty":"easy",
    "question":"Which African American is in part responsible for integrating  Major League baseball?",
    "correct_answer":"Jackie Robinson","Option":["Curt Flood","Roy Campanella","Satchell Paige"]},{"category":"Sports","type":"multiple","difficulty":"easy",
    "question":"What is the name of Manchester United&#039;s home stadium?",
    "correct_answer":"Old Trafford","Option":["Anfield","City of Manchester Stadium","St James Park"]},{"category":"Sports","type":"multiple","difficulty":"easy",
    "question":"Who won the premier league title in the 2015-2016 season following a fairy tale run?","correct_answer":"Leicester City","Option":["Tottenham Hotspur","Watford","Stoke City"]},{"category":"Sports","type":"multiple","difficulty":"easy",
    "question":"Who did Steven Gerrard win the Champions League with?",
    "correct_answer":"Liverpool","Option":["Real Madrid","Chelsea","Man City"]},
    {
    "question":"The Los Angeles Dodgers were originally from what U.S. city?",
    "correct_answer":"Brooklyn","Option":["Las Vegas","Boston","Seattle"]},
    {
    "question":"Who won the UEFA Champions League in 2017?",
    "correct_answer":"Real Madrid C.F.","Option":["Atletico Madrid","AS Monaco FC","Juventus F.C."]}
  ]




  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
