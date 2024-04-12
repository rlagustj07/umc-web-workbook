function showModalPage() {
    
    if (submitForm()) {
      showModal();
    }
  }
  
function showModal() {
    document.getElementById('modal_bg').style.display = 'block';
    document.getElementById('modalContainer').style.display = 'block';
}


function submitForm() {

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var fullnameError = document.getElementById("fullnameerror");
    var emailError = document.getElementById("emailerror");
    var ageError = document.getElementById("ageerror");
    var passwordError = document.getElementById("passworderror");
    var confirmPasswordError = document.getElementById("confirmpassworderror");

    var right = true;

        if (fullname === "") {
            fullnameError.textContent = "필수 입력 항목입니다!";
            fullnameError.style.color = "red";
            right = false;
    
        } else {
            fullnameError.textContent = "멋진 이름이네요!";
            fullnameError.style.color = "green";
    
        }
    
    
        var emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (email === "") {
            emailError.textContent = "올바른 이메일 형식이 아닙니다!";
            emailError.style.color = "red";
            right = false;
       
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "올바른 이메일 형식이 아닙니다!";
            emailError.style.color = "red";
            right = false;
    
        } 
        else {
            emailError.textContent = "올바른 이메일 형식입니다!";
            emailError.style.color = "green";
    
        }
    
    
    
        if (age === ""){
            ageError.textContent = "나이를 입력해주세요!";
            ageError.style.color = "red";
            right = false;
     
        } else if(isNaN(age) === true){
            ageError.textContent = "숫자 형태로 입력해야합니다!";
            ageError.style.color = "red";
            right = false;
        
        }
        else if (age < 0){
            ageError.textContent = "나이는 음수가 될 수 없습니다!";
            ageError.style.color = "red";
            right = false;
    
        } else if (age % 1 !== 0){
            ageError.textContent = "나이는 소수가 될 수 없습니다!";
            ageError.style.color = "red";
            right = false;
    
        } else if (age < 19){
            ageError.textContent = "미성년자는 가입할 수 없습니다!";
            ageError.style.color = "red";
            right = false;
    
        } else {
            ageError.textContent = "올바른 나이 형식입니다!";
            ageError.style.color = "green";
    
        }
    
    
        var pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
        
        if (password === "") {
            passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다!";
            passwordError.style.color = "red";
            right = false;
    
        } else if (password.length < 4) {
            passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다!";
            passwordError.style.color = "red";
            right = false;
    
        } else if (password.length >12){
            passwordError.textContent = "비밀번호는 최대 12자리입니다!";
            passwordError.style.color = "red";
            right = false;
    
        } else if (!pwRegex.test(password)){
            passwordError.textContent = "비밀번호는 숫자, 영문, 특수문자를 모두 조합해야합니다!";
            passwordError.style.color = "red";
            right = false;
        }
        else {
            passwordError.textContent = "올바른 비밀번호입니다!";
            passwordError.style.color = "green";
    
        }
    
    
        if (confirmPassword === "") {
            confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다!";
            confirmPasswordError.style.color = "red";
            right = false;
    
        } else if (confirmPassword !== password) {
            confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다!";
            confitmPasswordError.style.color = "red";
            right = false;
    
        } else {
            confirmPasswordError.textContent = "비밀번호가 일치합니다!";
            confirmPasswordError.style.color = "green";
    
        }

    return right;
}

function closeModal() {
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("modal_bg").style.display = "none";
}