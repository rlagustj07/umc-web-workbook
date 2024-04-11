const open = document.getElementById("submit");
const close = document.getElementById("close");
const modal = document.querySelector(".modal");

function Red(s){
    return "<span style='font-size:13px; color:red;'>" + s + "</span>";
}

function Green(s){
    return "<span style='font-size:13px; color:green;'>" + s + "</span>";
}

function containsAllTypes(inputString) {
    const hasLetter = /[a-zA-Z]/.test(inputString);
    const hasNumber = /\d/.test(inputString);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputString);

    return hasLetter && hasNumber && hasSpecialChar;
}

open.onclick = () => {
    let name_ = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let checkpassword = document.getElementById("checkpassword").value;
    let checkall = 0;

    // name
    if(name_ == ""){
        document.getElementById("rname").innerHTML = Red("필수 입력 항목입니다!");
    }
    else{
        document.getElementById("rname").innerHTML = Green("멋진 이름이네요!");
        checkall++;
    }

    // email
    if(email.includes("@")){
        document.getElementById("remail").innerHTML = Green("올바른 이메일 형식입니다!");
        checkall++;
    }
    else{
        document.getElementById("remail").innerHTML = Red("올바른 이메일 형식이 아닙니다!");
    }

    // age
    if (age == ""){
        document.getElementById("rage").innerHTML = Red("나이를 입력해주세요!");
    }
    else if (isNaN(Number(age))){
        document.getElementById("rage").innerHTML = Red("나이는 숫자 형식이어야 합니다!");
    }
    else if (Number(age) < 0){
        document.getElementById("rage").innerHTML = Red("나이는 음수가 될 수 없습니다!");
    }
    else if (Number(age) % 1 != 0){
        document.getElementById("rage").innerHTML = Red("나이는 소수가 될 수 없습니다!");
    }
    else if (Number(age) < 19){
        document.getElementById("rage").innerHTML = Red("미성년자는 가입할 수 없습니다!");
    }
    else
    {
        document.getElementById("rage").innerHTML = Green("올바른 나이 형식입니다!");
        checkall++;
    }

    // password
    if (password.length < 4){
        document.getElementById("rpassword").innerHTML = Red("비밀번호는 최소 4자리 이상이어야 합니다.");
    }
    else if (password.length > 12){
        document.getElementById("rpassword").innerHTML = Red("비밀번호는 최대 12자리까지 가능합니다.");
    }
    else if (!containsAllTypes(password)){
        document.getElementById("rpassword").innerHTML = Red("비밀번호는 영어, 숫자, 특수문자를 모두 조합해서 작성해야 합니다.");
    }
    else{
        document.getElementById("rpassword").innerHTML = Green("올바른 비밀번호입니다!");
        checkall++;
    }

    // same password
    if ((checkpassword != password)||(password == "")){
        document.getElementById("rcheckpassword").innerHTML = Red("비밀번호가 일치하지 않습니다.");
    }
    else{
        document.getElementById("rcheckpassword").innerHTML = Green("비밀번호가 일치합니다");
        checkall++;
    }
    
    if(checkall == 5){
        modal.style.display = "flex";
    }
};

close.onclick = () => {
    modal.style.display = "none";
};