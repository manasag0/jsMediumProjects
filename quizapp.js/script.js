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
loadQuiz()