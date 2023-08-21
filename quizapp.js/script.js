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

let currentQuestion = 0;
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText=currentQuizData['question'];

    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b ;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;

   
}
submitBtn.addEventListener('click',()=>{
    currentQuestion++;   

    if(currentQuestion<quizData.length){
        loadQuiz();
    } else {
        alert("You have completed the test")
    }
})