/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
   let quizOver = 0;
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    startTimer();
  });



  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/

  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'Which tool can you use to ensure code quality?',
      o: ['javascript', 'Jquery', 'Bootstrap', 'EsLint'],
      a: 4,
    },
    {
      q: 'What is the postcode of Melbourne',
      o: ['2000', '3006', '4000', '3000'],
      a: 3,
    },
  ];

  



  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
      Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };
let score = 0;
  // Calculate the score
  const calculateScore = () => {
    // let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);
        console.log(li);
        console.log(r);
        console.log(liElement);
        console.log(radioElement);

        if (quizItem.a == i) {
          liElement.style.border = '3px solid red';
        }

        if (radioElement.checked && quizItem.a ===i) {
          // code for task 1 goes here
          score++;

        }
      }});
      return score;
    };
    // Display score board
    function displayScore(){
      const scoreDiv = document.getElementById('score');
      scoreDiv.innerHTML = `Score: ${score}`;
    }

  // call the displayQuiz function
  displayQuiz();
  // Event listener submit button
 
  const submitButton = document.getElementById('btnSubmit');
  submitButton.addEventListener('click', () =>{
 submitButton.style.display = "none";
  calculateScore();
  displayScore();
  quizOver =1;
  });
 

// Event listener for reset button
const restButton = document.getElementById('btnReset'); 
restButton.addEventListener ('click', () =>{
location.reload();
});

// set timer
function startTimer(){
  let timeleft = 60;
  let downloadTimer = setInterval(function(){
    if(timeleft < 0){
      clearInterval(downloadTimer);
      submitButton.click();
    }
    else if(quizOver === 1){
      clearInterval(downloadTimer);
    }
    else {
      document.getElementById("time").innerHTML = timeleft + "seconds";
    }
    timeleft -= 1;
  }, 2000)
};
});










