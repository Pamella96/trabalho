import React, { useState} from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matricula, setMatricula] = useState('');
    
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    }

    const lidaComEnvioParaHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                />
                <input
                    type="text"
                    value={matricula}
                    onChange={({ target }) => setMatricula(target.value)}
                    placeholder="Matrícula"></input>
                <input
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Senha"
                />
                <button type="submit" onClick={lidaComEnvioParaHome}>Entrar</button>
            </form>
        </div>
    );
}