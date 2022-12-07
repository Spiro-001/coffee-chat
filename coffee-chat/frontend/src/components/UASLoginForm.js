import { LoginForm } from "./LoginForm"
import './UASLoginForm.css'
export const UASLoginForm = () => {
    return (
        <div className="main-center-uas-login">
            <div className="modal-popup">
                <div className="heading-top-modal-popup">
                    <h1 className="sign-in-modal-popup">Sign in</h1>
                    <label className="description-popup">Stay updated on your professional world</label>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

