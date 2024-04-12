const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease"); 

increase.onclick = () => {  
    const current = parseInt(number.innerText, 10);  
    number.innerText = current + 1;
    /*console.log("increase 가 클릭됨");*/
};

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
    /*console.log("decrease 가 클릭됨");*/
}

/*console.log(number);
console.log(increase);
console.log(decrease);*/