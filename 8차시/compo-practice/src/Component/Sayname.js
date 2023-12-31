import {useState} from 'react';

const Sayname =() =>{
    const [message, setMessage] =useState('');
    const onClickEnter = () => setMessage('Hi!');
    const onClickLeave = () => setMessage("Bye!");

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Sayname;