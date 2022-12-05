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

    // useEffect(() => {
    //     checkNextStep();
    // },[email, password])

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

    const firstPart = () => {
        return (
            <>
                <div className="email">
                    <label>Email</label>
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="password">
                    <label>Password (6 or more characters)</label>
                    <input type={hide} onChange={e => setPassword(e.target.value)} value={password}/>
                    <button onClick={hidePassword}>Show</button>
                </div>
                <button onClick={checkNextStep}>Agree & Join</button>
            </>
        )
    }

    const secondPart = () => {
        return (
            <>
                <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" onChange={e => setLastName(e.target.value)} value={lastName}/>
                <button onClick={popUp}>Continue</button>
            </>
        )
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
        )
    }

    console.log(popUpOn)

    return (
        <form onSubmit={handleOnSubmit}>
            { verify === 0 && firstPart() }
            { verify === 1 && secondPart() }
            { popUpOn && thirdPart() }
            <h1>{email} {password} {firstName} {lastName} {country} {phoneNumber}</h1>
        </form>
    );
}