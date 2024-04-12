const inputName = document.getElementById("inputName");
const message1Div = document.getElementById("message1");

let namee = false;

function checkAndShowResultName() {

    if (inputName.value.trim() !== '') {
        message1Div.textContent = '멋진 이름이네요!';
        namee = true;
    } else {
        message1Div.textContent = '';
    }
}

const inputElement = document.getElementById("inputEmail");
const message2Div = document.getElementById("message2");

let email = false;

function checkAndShowResultEmail() {
     var inputString = inputElement.value;

    if (inputString.includes('@')) {
        message2Div.innerHTML = "<span style='color: green;'>올바른 이메일 형식입니다!</span>"; 
        email = true;
    } else {
        message2Div.innerHTML = "<span style='color: red;'>올바른 이메일 형식이 아닙니다!</span>"; 
    }
}

const inputAge = document.getElementById("inputAge");
const message3Div = document.getElementById("message3");

let age = false;

inputAge.addEventListener('input', function() {
    const num = parseFloat(inputAge.value);

    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        message3Div.textContent = '나이를 입력해주세요!';
        message3Div.style.color = 'red';
    } else if (num >= 19) {
        message3Div.textContent = '올바른 나이입니다!';
        message3Div.style.color = 'green';
        age = true;
    } else {
        message3Div.textContent = '19세 이상만 가입이 가능합니다!';
        message3Div.style.color = 'red';
    }
});

const inputPassword = document.getElementById("inputPassword");
const message4Div = document.getElementById("message4");

let password = false;

inputPassword.addEventListener('input', function() {
    const pw = inputPassword.value;

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw);
    const hasNumber = /\d/.test(pw);
    const hasLetter = /[a-zA-Z]/.test(pw);

    if ( pw.length < 4 ) {
        message4Div.textContent = '비밀번호는 최소 4자리 이상이어야 합니다.';
        message4Div.style.color = 'red';
    } else if ( pw.length > 12 ) {
        message4Div.textContent = '비밀번호는 최대 12자리까지 가능합니다.';
        message4Div.style.color = 'red'; 
    } else if (!(hasSpecialChar && hasNumber && hasLetter)) {
        message4Div.textContent = '비밀번호 형식이 올바르지 않습니다.';
        message4Div.style.color = 'red'; 
    } else {
        message4Div.textContent = '올바른 비밀번호입니다!';
        message4Div.style.color = 'green';
        password= true;
    }

});

const inputCheck = document.getElementById("inputCheck");
const message5Div = document.getElementById("message5");

let check= false;

function checkPasswordMatch() {
    const pw = inputPassword.value;
    const confirmPassword = inputCheck.value;

    if (pw === confirmPassword) {
        message5Div.textContent = '비밀번호가 일치합니다!';
        message5Div.style.color = 'green';
        check= true;

    } else {
        message5Div.textContent = '비밀번호가 일치하지 않습니다.';
        message5Div.style.color = 'red'; 
    }
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
    if (namee && email && age && password && check) {
        modal.style.display = "flex";
    }
  };
close.onclick = () => {
    modal.style.display = "none";
  };