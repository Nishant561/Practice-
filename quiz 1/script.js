const question = [
    {
        "ques": "What is your name?",
        "a": "Nishant",
        "b": "Bipin",
        "c": "Krishna",
        "d": "Nischal",
        "correct": "a"
    },
    {
        "ques": "What is your last name?",
        "a": "Mandal",
        "b": "karki",
        "c": "Baruwal",
        "d": "Chaulagain",
        "correct": "c"
    },
    {
        "ques": "What is your city?",
        "a": "pkr",
        "b": "ktm",
        "c": "brt",
        "d": "itr",
        "correct": "b"
    }
];

let index = 0,
    right = 0,
    wrong = 0;

const quest = document.querySelector(".quest");
const inputs = document.querySelectorAll(".inputs");
const btn = document.querySelector("#btn");
const ans = document.querySelectorAll(".ans");
const main = document.querySelector(".main");

function addQuestion() {
    reset();
    btn.style.display ="none";
    if (index < question.length) {
        quest.innerHTML = question[index].ques;
        inputs[0].lastElementChild.innerHTML = question[index].a;
        inputs[1].lastElementChild.innerHTML = question[index].b;
        inputs[2].lastElementChild.innerHTML = question[index].c;
        inputs[3].lastElementChild.innerHTML = question[index].d;
        visibility();
    } else {
        main.innerHTML = `Your answer is ${right} right and ${wrong} wrong`;
    }
}

function checker() {
    let checkedValue = null;
    ans.forEach((input) => {
        if (input.checked) {
            checkedValue = input.value;
        }
    });
    return checkedValue;
}

function reset() {
    ans.forEach((input) => {
        input.checked = false;
    });
}

function submit() {
    let ans1 = checker();
    if (ans1 === question[index].correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    addQuestion();
}
function checked() {
    let isChecked = false;
    ans.forEach((input) => {
        if (input.checked) {
            isChecked = true;
        }
    });


    return isChecked;
}
function visibility(){
    ans.forEach((input) => {
        input.addEventListener("change", () => {
            if (checked()) {
                btn.style.display = "block"; // Show the button
            } else {
                btn.style.display = "none"; // Hide the button
            }
        });
    });
    
}

btn.addEventListener("click", function () {
    submit();
});

addQuestion(); 
// Call the function to display the first question
