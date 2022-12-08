import { useState } from "react";
import { useHistory } from "react-router-dom"
import { LoginFormUAS } from "./LoginFormUAS";
import "./UASLoginForm.css"
import "./LoginFormUAS.css"
import { IsLoadingForm } from "../loadinghtml/IsLoadingForm";

export const UASLoginForm = () => {
    
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    if (history.location.state) {
    }

    if (((history.location.pathname === '/uas/login') || (history.location.pathname === '/login')) && isLoading) { // CONDITIONAL CSS :O <---
        setTimeout(() => {
            // import('./LoginFormUAS.css')
            // import('./UASLoginForm.css')
            // const loadingImage = document.createElement('img')
            // loadingImage.setAttribute('src','https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg')
            // document.getElementsByTagName('body')[0].insertBefore(loadingImage, document.getElementsByTagName('body')[0].children.item(0))
            setIsLoading(false);
        },1000)
    }

    return (
        <>
            {isLoading && <IsLoadingForm />}
            {!isLoading &&
            <div className="main-center-sign-in-uas">
                <nav className="nav-bar-main-sign-in">
                    <a href="/"><img className="logo-uas-main-link" src={require("../assets/Coffee-Chat.png")} /></a>
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
                <div className="list-extra-link">
                    <ul className="list-extra-link-ul">
                        <li className="first-li-extra-link">
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
                            <a href="#">Send Feedback</a>
                        </li>
                    </ul>
                </div>
            </div>
            }
        </>
    )
}

