import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { LoginFormUAS } from "./LoginFormUAS";
import "./UASLoginForm.css"
import "./LoginFormUAS.css"
import { csrfFetch } from "../store/csrf";
import { useDispatch } from "react-redux";

export const UASLoginForm = () => {
    
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    // const response = csrfFetch(`/api/user/${history.location.state.emailOrPhoneNumber}`, {
    //     method: 'GET'
    // })
    // .then(res => (res.json())
    // .then(res => {
    //     let user = res
        
    // }))
    if (history.location.state) {
    }
    useEffect(() => {
        // const user = csrfFetch(`/api/user/${history.location.state.emailOrPhoneNumber}`, {
        //     method: 'GET'
        // })
        // .then(res => (res.json())
        // .then(res => console.log(res)))
    },[])

    // const userExist = async () => {
    //     let res = await csrfFetch(`/api/user/${history.location.state.emailOrPhoneNumber}`, {
    //         method: 'GET'
    //     })

    //     let user = await res.json();
    //     return user;
    // }
    
    if (history.location.pathname === '/uas/login' && isLoading) { // CONDITIONAL CSS :O <---
        setTimeout(() => {
            // import('./LoginFormUAS.css')
            // import('./UASLoginForm.css')
            setIsLoading(false);
        },1000)
    }


    setTimeout(() => {

    },5000)

    return (
        <>
            {isLoading && <h1>LOADING</h1>}
            {!isLoading &&
            <div className="main-center-sign-in-uas">
                <nav className="nav-bar-main-sign-in">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </nav>
                <div className="main-center-uas-login-uas">
                    <div className="modal-popup-uas">
                        <div className="heading-top-modal-popup-uas">
                            <h1 className="sign-in-modal-popup-uas">Sign in</h1>
                            <label className="description-popup-uas">Stay updated on your professional world</label>
                        </div>
                        <LoginFormUAS />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

