import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

`
const LoginTitle = styled.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
`
const Input = styled.input`
    display: block;
    width : 500px;
    height : 40px;
    border-radius : 30px;
    margin-bottom : 20px;
    font-size : 15px;
    font-family: var(--font);
    color: black;
    padding-left : 18px;
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
const Error = styled.div`
    color: red;
    font-size : 13px;
    margin-left : 10px;
    margin-bottom : 13px;
`


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const [notAllow, setNotAllow] = useState(false);

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
        } else if (value.length > 12){
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

    useEffect(() => {
        if(usernameValid && passwordValid) {
            setNotAllow(true);
            return;
        } else {
            setNotAllow(false);
        }
    }, [usernameValid, passwordValid]);


    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            setUsernameError('아이디를 입력해주세요!');
        } 
        if (!password) {
            setPasswordError('비밀번호를 입력해주세요!');
        } 
        if (notAllow) {
            axios.post('http://localhost:8080/auth/login', { 
                username: username, 
                password: password 
            })
            .then(response => {
                alert('로그인에 성공했습니다!');
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate('/', { replace: true });
            })
            .catch((error) => {
                alert('아이디가 존재하지 않거나, 비밀번호가 틀렸습니다.');
                console.log(error);
            });
        };
    };

    //이전 페이지로 돌아갈 때 중복 로그인 페이지로 돌아가지 않도록 함
    useEffect(() => {
        if(localStorage.getItem("token")) {
            //navigate('/', { replace: true });
        }
    }, [])


    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <LoginTitle>로그인 페이지</LoginTitle>
                <div>
                    <Input type='text' placeholder="아이디를 입력해주세요" value={username} onChange={handleUsername} />
                    <div>{!usernameValid && (<Error>{usernameError}</Error>)}</div>
                </div>
                <div>
                    <Input type='password' placeholder="비밀번호를 입력해주세요" value={password} onChange={handlePassword} />
                    <div>{!passwordValid && (<Error>{passwordError}</Error>)}</div>
                </div>
                <ButtonBlock>
                    <StyledButton style={{ backgroundColor: notAllow ? '#e5b409' : 'white' }}>로그인</StyledButton>
                </ButtonBlock>
            </form>
        </Container>
    )
}
export default Login;