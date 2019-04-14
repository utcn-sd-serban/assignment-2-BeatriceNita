
import React from "react";

const Login = ({ username, password, onLogin, onChange }) => (
    <div>
        <h2>Login</h2>
        <div>
            <label>Username: </label>
            <input value={username} onChange={ e => onChange("username", e.target.value)} />
            <br />
            <label>Password: </label>
            <input value={password} onChange={ e => onChange("password", e.target.value)} />
            <br />
            <button onClick = {onLogin}>Login</button>
        </div>
    </div>
);

export default Login;
