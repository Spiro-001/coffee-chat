import { useState } from "react";
import { useDispatch } from "react-redux"
import { signupUser } from "../store/session";

export const LoginForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userInfo = {email, password, phoneNumber}
        dispatch(signupUser(userInfo));
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            <input type="text" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
            <button type="submit">Agree & Join</button>
        </form>
    );
}