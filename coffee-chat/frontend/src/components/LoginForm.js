import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../store/session";
import { Redirect } from "react-router-dom";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [hide, setHide] = useState("password");

    const currentUser = useSelector((state) => state.session.user);

    if (currentUser) return <Redirect to="/feed/" />
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userInfo = {setEmailOrPhoneNumber, password}
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
        <form onSubmit={handleOnSubmit}>
            <div className="email">
                <input placeholder="Email or phone number" type="text" onChange={e => setEmailOrPhoneNumber(e.target.value)} value={emailOrPhoneNumber}/>
            </div>
            <div className="passsword">
                <input placeholder="Password" type={hide} onChange={e => setPassword(e.target.value)} value={password}/>
                <button onClick={hidePassword}>Show</button>
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
}