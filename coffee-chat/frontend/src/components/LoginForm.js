import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../store/session";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "./LoginForm.css"

export const LoginForm = () => {
    const history = useHistory();
    
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

    const checkEmail = (e) => {
        if (e.target.value.length > 0) {
            document.getElementsByClassName('placeholder-email')[0].style.top = "8px";
            document.getElementsByClassName('placeholder-email')[0].style.fontSize = "12px";
        } else {
            document.getElementsByClassName('placeholder-email')[0].style.top = "25%";
            document.getElementsByClassName('placeholder-email')[0].style.fontSize = "16px";
        }
    }

    const focusEmailValue = (e) => {
        document.getElementsByClassName('placeholder-email')[0].style.top = "8px";
        document.getElementsByClassName('placeholder-email')[0].style.fontSize = "12px";
    }

    const checkPassword = (e) => {
        if (e.target.value.length > 0) {
            document.getElementsByClassName('placeholder-password')[0].style.top = "8px";
            document.getElementsByClassName('placeholder-password')[0].style.fontSize = "12px";
        } else {
            document.getElementsByClassName('placeholder-password')[0].style.top = "25%";
            document.getElementsByClassName('placeholder-password')[0].style.fontSize = "16px";
        }
    }

    const focusPasswordValue = (e) => {
        document.getElementsByClassName('placeholder-password')[0].style.top = "8px";
        document.getElementsByClassName('placeholder-password')[0].style.fontSize = "12px";
    }

    return (
        <form className="login-form-main" onSubmit={handleOnSubmit}>
            <div className="email-login-user-form">
                <input onBlur={checkEmail} onFocus={focusEmailValue} className="email-login-user-form-input" type="text" onChange={e => setEmailOrPhoneNumber(e.target.value)} value={emailOrPhoneNumber}/>
                <label className="placeholder-email">Email or phone number</label>
            </div>
            <div className="password-login-user-form">
                <input onBlur={checkPassword} onFocus={focusPasswordValue} className="password-login-user-form-input" type={hide} onChange={e => setPassword(e.target.value)} value={password}/>
                <label className="placeholder-password">Password</label>
                <button className="hide-button" onClick={hidePassword}>Show</button>
            </div>
            <div className="signin-forgot-div">
                <a className="forgot-password-element" href="#">Forgot password?</a>
                <button className="sign-in-button-main" type="submit">Sign In</button>
            </div>
            <div className="extra-buttons-main">
                <span className="sign-in-divider">or</span>
            </div>
            <div className="button-align-bottom-half">
                <button className="link-to-my-github" onClick={e => history.push('/github')}>Link to my Github</button>
                <button className="link-to-sign-up-page" onClick={e => history.push('/login')}>New to LinkedIn? Join now</button>
            </div>
        </form>
    );
}