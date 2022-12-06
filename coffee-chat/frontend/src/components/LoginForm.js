import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../store/session";
import { Redirect, useParams } from "react-router-dom";
import "./LoginForm.css"

export const LoginForm = () => {
    useEffect(() => {
        document.title = "Coffee Chat Login, Sign in | Coffee Chat"
    },[])
    const dispatch = useDispatch();

    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [hide, setHide] = useState("password");

    const currentUser = useSelector((state) => state.session.user);

    if (currentUser) return <Redirect to="/feed/" />
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userInfo = {emailOrPhoneNumber, password}
        dispatch(loginUser(userInfo));
    }

    const hidePassword = (e) => {
        e.preventDefault();
        switchHideOrShow(e)
    }

    const switchHideOrShow = (e) => {
        if (e.target.innerHTML === "Hide") {
            e.target.innerHTML = "Show";
            setHide("password");
        } else {
            e.target.innerHTML = "Hide";
            setHide("text");
        }
    }

    return (
        <form className="login-form-main" onSubmit={handleOnSubmit}>
            <div className="email-login-user-form">
                <input className="email-login-user-form-input" type="text" onChange={e => setEmailOrPhoneNumber(e.target.value)} value={emailOrPhoneNumber}/>
                <label className="placeholder-email">Email or phone number</label>
            </div>
            <div className="password-login-user-form">
                <input className="password-login-user-form-input" type={hide} onChange={e => setPassword(e.target.value)} value={password}/>
                <label className="placeholder-password">Password</label>
                <button className="hide-button" onClick={hidePassword}>Show</button>
            </div>

            <button type="submit">Sign In</button>
        </form>
    );
}