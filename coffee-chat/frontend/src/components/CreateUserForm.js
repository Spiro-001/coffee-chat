import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser, signupUser } from "../store/session";
import { Redirect } from "react-router-dom";

export const CreateUserForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verify, setVerify] = useState(false);
    const [nextStep, setNextStep] = useState(false);

    const currentUser = useSelector((state) => state.session.user);
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        checkNextStep();
    },[email, password])

    if (currentUser) return <Redirect to="/feed/" />
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userInfo = {email, password, phoneNumber}
        dispatch(signupUser(userInfo));
    }

    const regExEmail = (email) => {
        return String(email).toLowerCase().match(regEx)
    }

    const checkNextStep = () => {
        if (regExEmail(email) && password.length >= 6) setVerify(true);
        else setVerify(false);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Email</label>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
            <label>Password (6 or more characters)</label>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            { verify &&
            <input type="text" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
            }
            <button type="submit">Agree & Join</button>
        </form>
    );
}