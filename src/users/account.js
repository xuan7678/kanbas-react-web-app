import * as client from "./client";
import React, { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

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

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
    }}, []);

    return (
        <div className="w-50">
            <Navigation /> {/* Include the navigation bar here */}
            <h1>Account</h1>
            {account && (
                <div>

                    <input value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input type='password' value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input type='date' value={account.dob && account.dob.substr(0, 10)}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select value={account.role} onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <br/>
                    <button onClick={save} style={{ backgroundColor: 'blue', color: 'white' }}>
                        Save
                    </button>
                    <button onClick={signout} style={{ backgroundColor: 'red', color: 'white' }}>
                        Signout
                    </button>


                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;
