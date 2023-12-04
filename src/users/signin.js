import * as client from "./client";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

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

function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };
    return (
        <div>
            <Navigation /> {/* Include the navigation bar here */}
            <h1>Signin</h1>
            <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <input type='password' value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;

