import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signupUser } from "../store/session";
import { Redirect } from "react-router-dom";
import { CountryDropDown } from "./CountryDropDown";

export const CreateUserForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [verify, setVerify] = useState(0);
    const [popUpOn, setPopUpOn] = useState(false);
    const [hide, setHide] = useState("password");

    const currentUser = useSelector((state) => state.session.user);
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        // console.log(document.getElementsByClassName('password-create-user-form')[0].childNodes[1].value)
        // console.log(document.getElementsByClassName('email-create-user-form')[0].lastElementChild)
    },[])

    if (currentUser) return <Redirect to="/feed/" />
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userInfo = {email, password, phoneNumber}
        dispatch(signupUser(userInfo));
    }

    const regExEmail = (email) => {
        return String(email).toLowerCase().match(regEx)
    }

    const checkNextStep = (e) => {
        e.preventDefault();
        if (regExEmail(email) && password.length >= 6) {
            setVerify(verify + 1);
        } else {
            setVerify(verify);
        }
    }

    const popUp = (e) => {
        e.preventDefault();
        setPopUpOn(true);
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
        const emailElement = document.getElementsByClassName('email-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-email-create-user-form"
        errorElement.appendChild(document.createTextNode("Please enter your email address."));

        if (!regExEmail(e.target.value)) {
            emailElement.childNodes[1].style.border = "2px solid red";
            if (emailElement.lastChild.className !== errorElement.className) emailElement.append(errorElement)
        } else {
            emailElement.childNodes[1].style.border = "";
            if (emailElement.lastChild.className === errorElement.className) emailElement.removeChild(emailElement.lastChild)
        }
    }

    const checkPassword = (e) => {
        const passwordElement = document.getElementsByClassName('password-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-password-create-user-form"
        errorElement.appendChild(document.createTextNode("Please enter your password."));

        if (e.target.value.length < 6) {
            passwordElement.childNodes[1].style.border = "2px solid red";
            if (passwordElement.lastChild.className !== errorElement.className) passwordElement.append(errorElement)
        } else {
            passwordElement.childNodes[1].style.border = "";
            if (passwordElement.lastChild.className === errorElement.className) passwordElement.removeChild(passwordElement.lastChild)
        }
    }

    const onFocusEmail = (e) => {
        const emailElement = document.getElementsByClassName('email-create-user-form')[0];
    }

    const onFocusPassword = (e) => {
        const passwordElement = document.getElementsByClassName('password-create-user-form')[0];
    }

    const firstPart = () => {
        return (
            <>
                <div className="email-create-user-form">
                    <label>Email</label>
                    <input type="text" onBlur={checkEmail} onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="password-create-user-form">
                    <label>Password (6 or more characters)</label>
                    <input type={hide} onBlur={checkPassword} onChange={e => setPassword(e.target.value)} value={password}/>
                    <button onClick={hidePassword}>Show</button>
                </div>
                <div className="agreement-create-user-form">
                    <p>By clicking Agree & Join, you agree to the LinkedIn <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.</p>
                </div>
                <div className="bottom-menu-create-user-form">
                    <hr className="horizontal-line"/>
                    <p>or</p>
                    <hr className="horizontal-line"/>
                    <button className="contine-to-github-button">Continue to Github</button>
                    <p>Already on Coffe Chat? <a href="/login">Sign in</a></p>
                </div>
                <button onClick={checkNextStep}>Agree & Join</button>
            </>
        );
    }

    const secondPart = () => {
        return (
            <>
                <div className="fname-create-user-form">
                    <label>First name</label>
                    <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div className="lname-create-user-form">
                    <label>Last name</label>
                    <input type="text" onChange={e => setLastName(e.target.value)} value={lastName}/>
                </div>
                <button onClick={popUp}>Continue</button>
            </>
        );
    }

    const thirdPart = () => { // POPUP MODAL
        return (
            <>
                <div className="popup-create-user-form">
                    <span onClick={e => {
                        document.getElementsByClassName('popup-create-user-form')[0].style.display = "none"
                        setPopUpOn(false);
                        } 
                    }
                    className="close-popup-create-user-form">&times;</span>
                    <CountryDropDown country={country} setCountry={setCountry}/>
                    <input type="text" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                    <button type="submit">Submit</button>
                </div>
            </>
        );
    }

    return (
        <>
            <h1>Make the most of your professional life</h1>
            <form onSubmit={handleOnSubmit}>
                { verify === 0 && firstPart() }
                { verify === 1 && secondPart() }
                { popUpOn && thirdPart() }
                <h1>{email} {password} {firstName} {lastName} {country} {phoneNumber}</h1>
            </form>
        </>
    );
}