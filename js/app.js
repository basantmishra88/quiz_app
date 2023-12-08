const question=[
    {
    "que": "which is markup language ",
    "a": "HTML",
    "b": "css",
    "c": "js",
    "d": "c++",
    "correct": "a"
    },
    {
        "que": "This is a vegetables ",
        "a": "apple",
        "b": "mango",
        "c": "peach",
        "d": "pumkin",
        "correct": "d"
    },
    {
        "que": "This is a fruit ",
        "a": "apple",
        "b": "tomato",
        "c": "potato",
        "d": "turnip",
        "correct": "a"
    },
    {
        "que": "mango is a",
        "a": "fruit",
        "b": "device",
        "c": "mashine",
        "d": "veg",
        "correct": "a"
    },
    {
        "que": "This is metal",
        "a": "wood",
        "b": "iron",
        "c": "oxygen",
        "d": "water",
        "correct": "b"
    },
];

let index=0;
let total=question.length;
let right=0;
let wrong=0;
const optionInputs=document.querySelectorAll(".options");
const quesbox=document.getElementById("quesbox");
const loadQuestion=()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data=question[index];
    quesbox.innerText=`${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=question[index];
    const ans=getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

let getAnswer=()=>{
    let ans;
    optionInputs.forEach((input)=>{
        if(input.checked){
            ans= input.value;
        }
    });
    return ans;
}

const reset=()=>{
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thanks for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>`;
}
loadQuestion();
