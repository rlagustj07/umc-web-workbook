import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


/*input의 focus를 자꾸 잃어버림 -> 해당 컴포넌트 밖에 styled components 생성*/
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const SignupTitle = styled.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
`
const Error = styled.div`
    color: red;
    font-size : 13px;
    margin-left : 10px;
    margin-bottom : 13px;
`
const StyledButton = styled.button`
    width: 500px;
    height: 50px;
    border: transparent;
    border-radius: 30px;
    color: black;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
`
const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    width : 500px;
    height : 40px;
    border-radius : 30px;
    margin-bottom : 20px;
    font-size : 15px;
    font-family: var(--font);
    color: black;
    padding-left : 18px;
`
const UnderBox = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom : 50px;
`

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');

    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [pwConfirmError, setPwConfirmError] = useState('');

    const [nameValid, setNameValid] = useState(false);
    const [usernameValid, setUsernameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [ageValid, setAgeValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [pwConfirmValid, setPwConfirmValid] = useState(false);

    const [notAllow, setNotAllow] = useState(false);

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        if (!value) {
            setNameValid(false);
            setNameError('이름을 입력해주세요!');
        } else {
            setNameValid(true);
            setNameError('');
        }
    };

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
        if (!value) {
            setUsernameValid(false);
            setUsernameError('아이디를 입력해주세요!');
        } else {
            setUsernameValid(true);
            setUsernameError('');
        }
    };

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (!value) {
            setEmailValid(false);
            setEmailError('이메일을 입력해주세요!');
        } else if (emailRegex.test(email)) {
            setEmailValid(true);
            setEmailError('');

        } else {
            setEmailValid(false);
            setEmailError('이메일 형식에 맞게 다시 입력해주세요!');
        }
    };

    const handleAge = (e) => {
        const value = e.target.value;
        setAge(value);
        if (!value) {
            setAgeValid(false);
            setAgeError('나이를 입력해주세요!');
          } else if(isNaN(value) === true) {
            setAgeValid(false);
            setAgeError('나이는 숫자로 입력해주세요!');
          } else if (value < 0) {
            setAgeValid(false);
            setAgeError('나이는 양수여야합니다!');
          } else if (value % 1 !== 0) {
            setAgeValid(false);
            setAgeError('나이를 실수로 입력할 수 없습니다!');
          } else if (value < 19) {
            setAgeValid(false);
            setAgeError('19세 이상만 사용 가능합니다!');
          } else {
            setAgeValid(true);
            setAgeError('');
          }
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        var pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
        if (!value) {
            setPasswordValid(false);
            setPasswordError('비밀번호를 입력해주세요!');
        } else if (value.length < 4) {
            setPasswordValid(false);
            setPasswordError('최소 4자리 이상 입력해주세요!');
        } else if (value.length >12){
            setPasswordValid(false);
            setPasswordError('최대 12자리까지 입력 가능합니다!');
        } else if (!pwRegex.test(value)){
            setPasswordValid(false);
            setPasswordError('비밀번호는 영어, 숫자, 특수문자를 포함해주세요!');
        } else {
            setPasswordValid(true);
              setPasswordError('');
        }
    };

    const handlePwConfirm = (e) => {
        const value = e.target.value;
        setPwConfirm(value);
        if (!value) {
            setPwConfirmValid(false);
            setPwConfirmError('비밀번호를 다시 입력해주세요!');
        } else if (value !== password) {
            setPwConfirmValid(false);
            setPwConfirmError('비밀번호가 일치하지 않습니다!');
        } else {
            setPwConfirmValid(true);
            setPwConfirmError('');
        }
    }

    useEffect(() => {
        if(nameValid && usernameValid && emailValid && ageValid && passwordValid && pwConfirmValid) {
            setNotAllow(true);
            return;
        }
        setNotAllow(false);
    }, [nameValid, usernameValid, emailValid, ageValid, passwordValid, pwConfirmValid]);



    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setNameError('이름을 입력해주세요!');
        } 
        if (!username) {
            setUsernameError('아이디를 입력해주세요!');
        } 
        if (!email) {
            setEmailError('이메일을 입력해주세요!');
        } 
        if (!age) {
            setAgeError('나이를 입력해주세요!');
        } 
        if (!password) {
            setPasswordError('비밀번호를 입력해주세요!');
        } 
        if (!pwConfirm) {
            setPwConfirmError('비밀번호를 다시 입력해주세요!');
        }
        if (notAllow) {
            axios.post('http://localhost:8080/auth/signup', { 
                name: name,
                username: username, 
                email: email, 
                age: age, 
                password: password
            })
            .then(response => {
                alert('회원가입에 성공했습니다!');
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate('/login', { replace: true });
            })
            .catch((error) => {
                alert(error.message);
                console.log(error);
            });
        }
    };


    return (<>
        <Container>
            <form onSubmit={handleSubmit}>
                <SignupTitle>회원가입 페이지</SignupTitle>
                <div>
                    <Input type='text' placeholder="이름을 입력해주세요" value={name} onChange={handleName} />
                    <div>{!nameValid && (<Error>{nameError}</Error>)}</div>
                </div>
                <div>
                    <Input type='text' placeholder="아이디를 입력해주세요" value={username} onChange={handleUsername} />
                    <div>{!usernameValid && (<Error>{usernameError}</Error>)}</div>
                </div>
                <div>
                    <Input type='email' placeholder="이메일을 입력해주세요" value={email} onChange={handleEmail} />
                    <div>{!emailValid && (<Error>{emailError}</Error>)}</div>
                </div>
                <div>
                    <Input type='age' placeholder="나이를 입력해주세요" value={age} onChange={handleAge} />
                    <div>{!ageValid && (<Error>{ageError}</Error>)}</div>
                </div>
                <div>
                    <Input type='password' placeholder="비밀번호를 입력해주세요" value={password} onChange={handlePassword} />
                    <div>{!passwordValid && (<Error>{passwordError}</Error>)}</div>
                </div>
                <div>
                    <Input type='password' placeholder="비밀번호 확인" value={pwConfirm} onChange={handlePwConfirm} />
                    <div>{!pwConfirmValid && (<Error>{pwConfirmError}</Error>)}</div>
                </div>
                <ButtonBlock>
                    <StyledButton style={{ backgroundColor: notAllow ? '#e5b409' : 'white' }}>제출하기</StyledButton>
                </ButtonBlock>
            </form>
        </Container>
        <UnderBox>
            <span style={{ marginRight: '20px' }}>이미 아이디가 있으신가요?</span>
            <NavLink to={'/login'} 
            style={{ fontWeight: 'bold', marginLeft: '20px', textDecoration: 'none', color: 'white' }}>
                로그인 페이지로 이동하기
            </NavLink>
        </UnderBox>
        </>

    )
};

export default Signup;