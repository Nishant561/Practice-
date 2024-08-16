const question = [{
    'ques': 'What is your First Name?',
    'a':'Nishant',
    'b':'Nischal',
    'c':'sujata',
    'd':'Nirmal',
    'correct' : 'a'
},
  {  'ques': 'What is your last Name?',
    'a':'Chaulagain',
    'b':'Baruwal',
    'c':'Karki',
    'd':'Khadka',
    'correct' : 'b'
}
]
var options = document.querySelectorAll(".option");
var inputs = document.querySelector(".inputs");
let index= 0;
let right = 0,
    wrong = 0;
    var data = question;
function loadQuestion(){
    
    reset();
    if(index<data.length) {
        // console.log(data[index].ques);
        for (let i = 0 ; i<=data.length;i++){
    
            document.getElementById("question").innerText = `${index+1} ${data[index].ques}`;
            inputs.children[0].lastElementChild.innerText = `${data[index].a}`;
            inputs.children[1].lastElementChild.innerText = `${data[index].b}`;
            inputs.children[2].lastElementChild.innerText = `${data[index].c}`;
            inputs.children[3].lastElementChild.innerText = `${data[index].d}`;
        }
        


       
        

    }
    else{
        document.querySelector(".container-1").innerText = `${right} ${wrong}`;
    }
    
}
function submit(){
    var checker = checkers();
    var ans = data[index].correct;
    console.log(checker);
    if(checker === ans){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
function checkers(){
    var c;
    options.forEach((kor)=>{
        if(kor.checked){
            c = kor.value;
        }
    })
    return c;
}
function reset(){
    options.forEach((inputs)=>{
        inputs.checked = false;
    }

    )
}


loadQuestion();

