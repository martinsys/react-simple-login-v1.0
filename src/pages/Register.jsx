import {useState} from "react";
import {register} from "../config/firebase.js";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        try {
            const credentialUser = await register({ email, password });
            console.log("user created", credentialUser);
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Register</h1>
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

export default Register;
