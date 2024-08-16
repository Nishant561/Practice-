const button = document.querySelector('.button-calculate');

button.addEventListener("click",()=>{
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;

    const result = document.querySelector(".result");

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = "please enter a valid height";
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = "please enter a valid weight";
    }else{
        const bmi = (weight/ ((height*height)*10000)).toFixed(2);
        result.innerHTML =bmi;
    }
})