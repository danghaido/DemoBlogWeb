import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({onLogin}) {
    const [account, setAccount] = useState({});
    const navigate = useNavigate();
    async function handleLogin() {
        const response = await fetch("http://localhost:8080/api/login", {
            method: "post",headers: {
            'Accept': 'application /json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify(account)
        });
        if(response.ok) {
            onLogin && onLogin({username: account.username});
            navigate('/stats');
        } else {
            console.log(account.username, account.password);
            alert("Invalid username or password");
        }
    }

    return (
        <div className="login-container">
            <span>Username:</span><br/>
            <input type="text" onChange={(e) => setAccount({...account, username: e.target.value})} />
            <span>Password:</span><br/>
            <input type="password" onChange={(e) => setAccount({...account, password: e.target.value})} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}