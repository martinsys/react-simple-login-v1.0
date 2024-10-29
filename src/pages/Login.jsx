import { useState} from "react";
import {login} from "../config/firebase.js";
import {useUserContext} from "../context/UserContext.jsx";
import {useRedirectActiveUser} from "../hooks/useRedirectActiveUser.js";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useUserContext();
    // alternativa con hook
    useRedirectActiveUser(user, "/dashboard");

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        try {
            const credentialUser = await login({ email, password });
            console.log("user logged in", credentialUser);
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
};

export default Login;
