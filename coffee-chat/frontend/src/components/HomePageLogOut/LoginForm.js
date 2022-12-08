import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../store/session";
import { Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css"

export const LoginForm = () => {
    const history = useHistory();
    
    if (history.location.pathname === '/login' || history.location.pathname === '/') {
        // import("./LoginForm.css")
    }
    
    useEffect(() => {
        document.title = "Coffee Chat Login, Sign in | Coffee Chat";
        if (history.location.state) {
            errorElementEmail.append(document.createTextNode("That's not the right password. Try again or "));
            let aTagFogotPassword = document.createElement('a');
            aTagFogotPassword.append(document.createTextNode('sign in with a one-time link'));
            aTagFogotPassword.className = "a-tag-forgot-password";
            aTagFogotPassword.setAttribute('href', '#');
            errorElementEmail.appendChild(aTagFogotPassword);
            document.getElementsByClassName('signin-forgot-div')[0].insertBefore(errorElementEmail, document.getElementsByClassName('forgot-password-element')[0]);
            document.getElementsByClassName('email-login-user-form-input')[0].style.border = "2px solid rgb(214, 1, 1)"

            document.getElementsByClassName('email-login-user-form-input')[0].focus()
            document.getElementsByClassName('password-login-user-form-input')[0].focus()
        }
    },[])
    const dispatch = useDispatch();

    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState(history.location.state ? history.location.state.emailOrPhoneNumber : "");
    const [password, setPassword] = useState("");
    const [hide, setHide] = useState("password");
    let sendSubmission = false;

    const currentUser = useSelector((state) => state.session.user);
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const regExEmail = (email) => {
        return String(email).toLowerCase().match(regEx);
    }

    if (currentUser) return <Redirect to="/feed/" />
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        checkInputValue(e)
        if (sendSubmission) {
            const userInfo = {emailOrPhoneNumber, password}
            dispatch(loginUser(userInfo)).catch(res => {
                if (res.statusText.toLowerCase() === 'unauthorized') {
                    history.push({
                        pathname: '/uas/login',
                        state: { emailOrPhoneNumber: emailOrPhoneNumber }
                    })
                } 
            })
        }
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
    
    const errorElementEmail = document.createElement('span');
    errorElementEmail.className = "error-render"
    const errorElementPassword = document.createElement('span');
    errorElementPassword.className = "error-render"
    
    const errorElementEmailWrongContent = document.createTextNode('Please enter a valid email address or mobile number.');
    errorElementEmailWrongContent.className = "error-element-email-wrong-content";
    const errorElementEmailNoContent = document.createTextNode('Please enter your email address or mobile number.');
    errorElementEmailNoContent.className = "error-element-email-no-content";
    const errorElementPasswordWrongContent = document.createTextNode('Password must be 6 characters or more.');
    errorElementPasswordWrongContent.className = "error-element-password-wrong-content";
    const errorElementPasswordNoContent = document.createTextNode('Please enter your password.');
    errorElementPasswordNoContent.className = "error-element-password-no-content";
    
    const checkInputValue = (e) => {
        e.preventDefault();
        const inputErrorField = document.getElementsByClassName('first-half-bottom')[0].children;
        
        let emailError = true;
        let passswordError = true;
        let value_toggle = 1

        if (history.location.pathname === '/uas/login') value_toggle = 0

        if (inputErrorField.item(value_toggle).className === "error-render") inputErrorField.item(value_toggle).remove()
        document.getElementsByClassName('email-login-user-form-input')[0].style.border = "2px solid rgb(214, 1, 1)"

        if (emailOrPhoneNumber.length === 0) {
            errorElementEmail.append(errorElementEmailNoContent)
            document.getElementsByClassName('first-half-bottom')[0].insertBefore(errorElementEmail, inputErrorField.item(value_toggle))
        } else if (!regExEmail(emailOrPhoneNumber)) {
            errorElementEmail.append(errorElementEmailWrongContent)
            document.getElementsByClassName('first-half-bottom')[0].insertBefore(errorElementEmail, inputErrorField.item(value_toggle))
        } else {
            document.getElementsByClassName('email-login-user-form-input')[0].style.border = "1px solid #00000099";
            emailError = false;
        }

        if (inputErrorField.item(value_toggle).className !== "error-render") {
            document.getElementsByClassName('password-login-user-form-input')[0].style.border = "2px solid rgb(214, 1, 1)"
            if (password.length === 0) {
                errorElementPassword.append(errorElementPasswordNoContent)
                document.getElementsByClassName('first-half-bottom')[0].insertBefore(errorElementPassword, inputErrorField.item(value_toggle))
            } else if (password.length !== 0 && password.length < 6) {
                errorElementPassword.append(errorElementPasswordWrongContent)
                document.getElementsByClassName('first-half-bottom')[0].insertBefore(errorElementPassword, inputErrorField.item(value_toggle))
            } else {
                document.getElementsByClassName('password-login-user-form-input')[0].style.border = "1px solid #00000099";
                passswordError = false;
            }
        } else {
            passswordError = false;
        }

        if (!emailError && !passswordError) sendSubmission = true;
    }

    return (
        <div className="first-half-bottom">    
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
                    
                    <button className="link-to-my-github" onClick={e => history.push('/github')}>
                        <svg className="github-icon-button" xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Link to my Github
                    </button>
                    <button className="link-to-sign-up-page" onClick={e => history.push('/login')}>
                        New to Coffee Chat? Join now
                    </button>
                </div>
            </form>
        </div>
    );
}