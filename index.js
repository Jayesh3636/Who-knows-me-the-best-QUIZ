
var readlineSync=require("readline-sync")
var Score = 0;//global variable 
var units = "pts";//global variable units for score units
// input
var Username = readlineSync.question("May I know your name?  ",);
// ------------------------------------------------------------------output---------------------------------------------------------------------
console.log  ("");
console.log  ("Hi "+Username)
console.log  ("Welcome to Who Knows Me Best? Quiz! ");
console.log  ("");

console.log  ("I was wondering I had so many friends who are close to me but then i wondered which friend knows me the best? So I decided to find it out by asking you some questions about myself. Let see who knows me the best! top scorer is the winner. It’s the ultimate friendship test! ");
console.log  ("");
console.log  ("All the best!");
console.log  ("");
console.log  ("---------------------------------------------");
console.log  ("");
console.log  ("Instructions: 10 questions Each correct answer will get 10 points and the highest scorer will be the Person who knows me the best");
console.log  ("");
console.log  ("---------------------------------------------");
console.log  ("Starting now");
console.log( "Your current score is",Score)
console.log  ("Question is");
// ------------------------------------------------------------------Declaring a function for the quiz------------------------------------------------------------
function QA(question,answer)
{
  var useranswer = readlineSync.question(question)
  if (
    useranswer === answer
  ){
    console.log  ("");
    console.log("Thats Correct!");
    Score = Score + 10 ;
    console.log( "Score:",Score,units)
    console.log  ("");
    console.log  ("---------------------");
  }
  else{
    console.log  ("");
    console.log("Opps! That's not Correct.");
    Score = Score + 0;
    console.log  ("Its",answer);
    console.log( "Score:",Score,units);
    
    console.log  ("");
    console.log  ("---------------------");
  }
}

/*Creating a Array of objects
*(which are set of questions&answrs)
*/

var QuesBank = [
{
  question:"Q1. What is my full name? ",
   answer:"jayesh hiralal patil"
},
{
  question:"Q2. When is my birthday? ",
  answer:"8 may 1999"
},
{
  question:"Q3. What to I do Mostly? ",
  answer:"designing"
},   
{
  question:"Q4. I have Graduated in? ",
  answer:"computer enginnering"
},
{
  question:"Q5. Am I a dog or a cat person? ",
  answer:"dog"
},
{
  question:"Q6. Am I more extroverted or introverted? ",
  answer:"introverted"
},
{
  question:"Q7. Am I a goal-driven person? ",
  answer:"yes"
} ,
{
  question:"Q8. As of right now, how many kids do I want to have? ",
  answer:"2"
} ,
{
  question:"Q9. Have I had any near-death experiences? ",
  answer:"yes"
} ,   
{
  question:"Q10. What is my zodiac sign? ",
  answer:"capricorn"
}      
]


/*Accessing the array and calling function QA(question and ans) and giving the parameters
*/

for (var i=0;i< QuesBank.length; i++)
{
  var presentQuestion =  QuesBank[i];
QA(presentQuestion.question,presentQuestion.answer)
 }

/*Displaying the high scores
*/
var highscores = [
  {
  name : "Siddhi",
  score : "100"
},
 {
  name : "sourav",
  score :"90"
},
 {
  name :"tirth",
  score:"80"
}
]
  console.log  ("Recent Highscores are");
for(i=0;i<highscores.length;i++)
{
  console.log  ("");

  var score= highscores[i];
  console.log(score.name, score.score,units);
}