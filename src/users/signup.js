import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import * as client from "./client";

function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li><Link to="/project">Home</Link></li>
                <li><Link to="/project/search">Search</Link></li>
                <li><Link to="/project/signin">Signin</Link></li>
                <li><Link to="/project/signup">Signup</Link></li>
                <li><Link to="/project/account">Account</Link></li>
            </ul>
        </div>
    );
}

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <Navigation /> {/* Include the navigation bar here */}
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <input
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <button onClick={signup}>
                Signup
            </button>
        </div>
    );
}
export default Signup;
