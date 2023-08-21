const quizData = [
    {
        question:"How old is Manasa",
        a: '10',
        b: '17',
        c: '29',
        d: '35',
        corrent: 'c'
    },{
        question:'What is the capital of India?',
        a:'Delhi',
        b:'Hydrabad',
        c:'Benglore',
        d:'Mumbai',
        corrent:'a'
    },
    {
        question : "Which one of these is not an animal?",
        a:'Elefant',
        b:'Cat',
        c:'Dog',
        d:'table',
        correct:'d'
    },
    {
        question:"What does HTML stands for?",
        a:'Hyper Text Markup Languagae',
        b:'Hello Travel Maker Line',
        c:'Hurry To Make Limka',
        d:'House Transfore Market Limited',
        correct: 'a'
    }
]

const questionEl = document.getElementById('question');
const answerEles = document.querySelectorAll(".answer")
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz')

let currentQuestion = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    selectedAnswers()
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText=currentQuizData['question'];

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

   
}

function getSelected(){

    let answer = undefined
    answerEles.forEach((answersEl)=>{
        if(answersEl.checked){
           return answer = answersEl.id
        }
    }) 
    return answer;
}  

function selectedAnswers(){
 answerEles.forEach((answersEl)=>{
    answersEl.checked = false
 })
}

submitBtn.addEventListener('click',()=>{
    currentQuestion++;  
    
    const answer = getSelected();
    if(answer){
        currentQuestion++
   console.log(answer)

    if(currentQuestion<quizData.length){
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length}</h2>`
    }
    }
})