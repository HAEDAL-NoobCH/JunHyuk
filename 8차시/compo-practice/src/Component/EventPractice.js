import { useState } from "react";

const EventPractice =() => {
    const {username, setUsername} = useState('');
    const {message, setMessage} = useState('');

    const onChangeusername = (e) => setUsername(e.target.value);
    const onChangemessage = (e) => setMessage(e.target.value);
    const onClick =() => {
        alert (username + ': ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress =(e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type = "text"
                name = "username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChangeusername}
            />
            <input
                type = "text"
                name = "message"
                placeholder="입력해주세요"
                value={message}
                onChange={onChangemessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
            
        </div>
    )
}

export default EventPractice;