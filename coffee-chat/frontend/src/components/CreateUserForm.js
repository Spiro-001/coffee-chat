import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signupUser } from "../store/session";
import { Redirect } from "react-router-dom";
import { CountryDropDown } from "./CountryDropDown";
import "./CreateUserForm.css"

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
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);

    const currentUser = useSelector((state) => state.session.user);
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        document.title = "Sign Up | Coffee Chat"
    },[])

    if (currentUser) return <Redirect to="/feed/" />
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userInfo = {email, password, phoneNumber};
        userInfo.phoneNumber = "1" + userInfo.phoneNumber
        dispatch(signupUser(userInfo));
    }

    const regExEmail = (email) => {
        return String(email).toLowerCase().match(regEx);
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
        setCountry("US");
        setPopUpOn(true);
    }

    const hidePassword = (e) => {
        e.preventDefault();
        switchHideOrShow(e);
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
        errorElement.className = "error-email-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter your email address."));
        
        if (!regExEmail(e.target.value)) {
            emailElement.childNodes[1].style.border = "1px solid red";
            if (emailElement.lastChild.className !== errorElement.className) emailElement.append(errorElement);
        } else {
            setIsFocusedEmail(false);
            emailElement.childNodes[1].style.border = "";
            if (emailElement.lastChild.className === errorElement.className) emailElement.removeChild(emailElement.lastChild);
        }
    }

    const checkPassword = (e) => {
        const passwordElement = document.getElementsByClassName('password-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-password-create-user-form";


        if (e.target.value.length === 0) {
            passwordElement.childNodes[1].style.border = "1px solid red";
            errorElement.appendChild(document.createTextNode("Please enter your password."));
            if (passwordElement.lastChild.className !== errorElement.className) passwordElement.append(errorElement);
        } else if (e.target.value.length < 6) {
            passwordElement.childNodes[1].style.border = "1px solid red";
            errorElement.appendChild(document.createTextNode("Password must be 6 characters or more."));
            errorElement.style.right = "50px";
            if (passwordElement.lastChild.className !== errorElement.className) passwordElement.append(errorElement);
        } else {
            setIsFocusedEmail(false);
            passwordElement.childNodes[1].style.border = "";
            if (passwordElement.lastChild.className === errorElement.className) passwordElement.removeChild(passwordElement.lastChild);
        }
    }

    const checkFirstName = (e) => {
        const fnameElement = document.getElementsByClassName('fname-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-fname-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter you first name."));

        if (e.target.value.length === 0) {
            fnameElement.childNodes[1].style.border = "2px solid red";
            if (fnameElement.lastChild.className !== errorElement.className) fnameElement.append(errorElement);
        } else {
            fnameElement.childNodes[1].style.border = "";
            if (fnameElement.lastChild.className === errorElement.className) fnameElement.removeChild(fnameElement.lastChild);
        }
    }

    const checkLastName = (e) => {
        const lnameElement = document.getElementsByClassName('lname-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-lname-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter you last name."));

        if (e.target.value.length === 0) {
            lnameElement.childNodes[1].style.border = "2px solid red";
            if (lnameElement.lastChild.className !== errorElement.className) lnameElement.append(errorElement);
        } else {
            lnameElement.childNodes[1].style.border = "";
            if (lnameElement.lastChild.className === errorElement.className) lnameElement.removeChild(lnameElement.lastChild);
        }
    }

    const checkPhoneNumber = (e) => {
        e.preventDefault();
        setPhoneNumber(phoneNumber.replace(/[^0-9]+/g, ''))
        const phoneNumberElement = document.getElementsByClassName('phone-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-phone-create-user-form";
        errorElement.appendChild(document.createTextNode("Oops, this isn't a valid phone number. Try entering it again."));

        if (phoneNumberElement.lastChild.className !== errorElement.className) phoneNumberElement.append(errorElement);
    }

    const onFocusEmail = (e) => {
        const emailElement = document.getElementsByClassName('email-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-email-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter your email address."));

        emailElement.childNodes[1].style.border = "";
        if (emailElement.lastChild.className === errorElement.className) emailElement.removeChild(emailElement.lastChild);
    }

    const onFocusPassword = (e) => {
        const passwordElement = document.getElementsByClassName('password-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "error-password-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter your password."));

        passwordElement.childNodes[1].style.border = "";
        if (passwordElement.lastChild.className === errorElement.className) passwordElement.removeChild(passwordElement.lastChild);
    }

    const onFocusFirstName = (e) => {
        const fnameElement = document.getElementsByClassName('fname-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "fname-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter you first name."));

        fnameElement.childNodes[1].style.border = "";
        if (fnameElement.lastChild.className === errorElement.className) fnameElement.removeChild(fnameElement.lastChild);
    }

    const onFocusLastName = (e) => {
        const lnameElement = document.getElementsByClassName('lname-create-user-form')[0];
        const errorElement = document.createElement('p');
        errorElement.className = "lname-create-user-form";
        errorElement.appendChild(document.createTextNode("Please enter you last name."));

        lnameElement.childNodes[1].style.border = "";
        if (lnameElement.lastChild.className === errorElement.className) lnameElement.removeChild(lnameElement.lastChild);
    }

    const firstPart = () => {
        return (
            <div className="first-form-step-create-user">
                <div className="email-create-user-form">
                    <label className="label-create-user-form-email">Email</label>
                    <input className="input-create-user-form-email" type="text" 
                        onBlur={checkEmail} 
                        onChange={e => {
                            onFocusEmail(e);
                            setEmail(e.target.value);
                            console.log("hi")
                            }
                        }
                        onFocus={e => {
                            if (isFocusedEmail) document.getElementsByClassName('input-create-user-form-email')[0].style.border = "2px solid red";
                            setIsFocusedEmail(true);
                            }
                        }
                        value={email}/>
                </div>
                <div className="password-create-user-form">
                    <label className="label-create-user-form-password">Password (6 or more characters)</label>
                    <input className="input-create-user-form-password" type={hide} 
                        onBlur={checkPassword} 
                        onChange={e => {
                            onFocusPassword(e);
                            setPassword(e.target.value);
                            }
                        }
                        onFocus={e => {
                            if (isFocusedPassword) document.getElementsByClassName('input-create-user-form-password')[0].style.border = "2px solid red";
                            setIsFocusedPassword(true);
                        }}
                        value={password}/>
                    <button className="hide-button-create-form" onClick={hidePassword}>Show</button>
                </div>
                <div className="agreement-create-user-form">
                    <div className="div-create-user-form-agreement">
                        {"By clicking Agree & Join, you agree to the Coffee Chat "}
                        <a className="a-create-user-form" href="#">{"User Agreement, "}</a>
                        <a className="a-create-user-form" href="#">{"Privacy Policy,"}</a>{" and "}
                        <a className="a-create-user-form" href="#">{"Cookie Policy."}</a>
                    </div>
                </div>
                <button className="button-next-step-one-create-user-form" onClick={checkNextStep}>Agree & Join</button>
                <div className="bottom-menu-create-user-form">
                    <div className="div-create-user-form">
                        <span className="or-middle-seperator">or</span>
                    </div>
                    <button className="contine-to-github-button">
                        <svg className="github-icon-button" xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <p className="continue-to-git-hub-create-form">Continue to Github</p>
                    </button>
                    <div className="div-create-user-form-already-on-cc">
                        {"Already on Coffee Chat? "} 
                        <a className="to-login-create-user-form" href="/login">
                            {"Sign in"}
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    const secondPart = () => {
        return (
            <div className="first-form-step-create-user">
                <div className="fname-create-user-form">
                    <label className="label-create-user-form-first-name">First name</label>
                    <input className="input-create-user-form-fname" 
                        type="text" 
                        onBlur={checkFirstName}
                        onChange={e => {
                            onFocusFirstName(e);
                            setFirstName(e.target.value);
                            }
                        } 
                        value={firstName}/>
                </div>
                <div className="lname-create-user-form">
                    <label className="label-create-user-form-last-name">Last name</label>
                    <input className="input-create-user-form-fname" 
                        type="text"
                        onBlur={checkLastName}
                        onChange={e => {
                            onFocusLastName(e);
                            setLastName(e.target.value);
                            }
                        } 
                        value={lastName}/>
                </div>
                <button className="button-create-user-form"
                    onClick={popUp}>Continue</button>
            </div>
        );
    }

    const thirdPart = () => { // POPUP MODAL
        return (
            <>
                <div className="background-gray-popup-blur"/>
                <div className="popup-create-user-form">
                    <div className="top-menu-popup-create-user-form">
                        <span className="text-security-popup-create-form">Security verification</span>
                        <span onClick={e => {
                            document.getElementsByClassName('popup-create-user-form')[0].style.display = "none"
                            setPhoneNumber('');
                            setCountry('')
                            setPopUpOn(false);
                            } 
                        }
                            className="close-popup-create-user-form">&times;
                        </span>
                    </div>
                    <div className="more-text-for-security-create-form">
                        <span className="extra-security-two-auth-create-form">Just a quick security check</span>
                        <span className="extra-security-two-auth-more-text-create-form">
                            {"As an extra security step, we'll need to give you a vertification code to register. "}
                            <a href="#" className="a-tag-for-learn-more-create-form">Learn More</a>
                        </span>
                    </div>
                    <div className="select-a-name-create-form">
                        <span className="select-a-name-text-create-form">Select country</span>
                        <CountryDropDown 
                            country={country} 
                            setCountry={setCountry}/>
                    </div>
                    <div className="phone-create-user-form">
                        <span className="phone-number-place-holder-create-form">Phone number</span>
                        <div className="phone-number-input-area-create-form">
                            <label className="area-code-for-country-create-form">+1</label>
                            <input className="input-for-phone-number-create-form" type="text" 
                                onChange={e => setPhoneNumber(e.target.value)} 
                                value={phoneNumber}/>
                        </div>
                    </div>
                    <div className="phone-create-user-form-div">
                        {phoneNumber.length < 5 && <button className="button-before-validate-submit-create-form" onClick={checkPhoneNumber}>Submit</button>}
                        {phoneNumber.length >= 5 && <button className="button-real-submit-create-form"type="submit">Submit</button>}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="body-create-form">
            <div className="logo-uas-main-link-create-form">
                <a href="/"><img className="logo-img-uas-main-link-create-form" src={require("../assets/Coffee-Chat.png")} /></a>
            </div>
            <div className="main-user-create-form-div-start">
                <h1 className="h1-create-user-form">Make the most of your professional life</h1>
                <form className="main-form-submit-create-user" onSubmit={handleOnSubmit}>
                    { verify === 0 && firstPart() }
                    { verify === 1 && secondPart() }
                    { popUpOn && thirdPart() }
                </form>
                <div className="looking-for-bussiness-a-tag">
                    <span className="text-span-bussiness">{"Looking to create a page for a business? "}</span>
                    <a className="looking-for-a-tag" href="#">{"Get help"}</a>
                </div>
            </div>
            <div className="bottom-nav-bar-create-form">
                <ul className="list-extra-link-ul-create-form">
                    <li className="first-li-extra-link-create-form">
                        <img className="logo-uas-main-link-bottom-nav" src={require("../assets/Coffee-Chat.png")} /> © 2022
                    </li>
                    <li>
                        <a href="#">User Agreement</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Community Guidelines</a>
                    </li>
                    <li>
                        <a href="#">Cookie Policy</a>
                    </li>
                    <li>
                        <a href="#">Copyright Policy</a>
                    </li>
                    <li>
                        <a href="#">Brand Policy</a>
                    </li>
                    <li>
                        <a href="#">Guest Controls</a>
                    </li>
                    <li>
                        <a href="#">Community Guidelines</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}