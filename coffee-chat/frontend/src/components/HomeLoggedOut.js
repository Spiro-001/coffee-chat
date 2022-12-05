import { LoginForm } from "./LoginForm"
import { Route, NavLink, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

export const HomeLoggedOut = () => {
    document.title = "Coffee Chat: Log In or Sign Up"
    const history = useHistory();
    
    return (
        <div>
            <div className="top-nav-home-logged-out">
                <img alt="Coffee-Chat" src={require("../assets/Coffee-Chat.png")} />
                <ul className="main-options-home-logged-out">
                    <li>
                        <button onClick={e => history.push("/discover")}>Discover</button>
                    </li>
                    <li>
                        <button onClick={e => history.push("/people")}>People</button>
                    </li>
                    <li>
                        <button onClick={e => history.push("/learning")}>Learning</button>
                    </li>
                    <li>
                        <button onClick={e => history.push("/jobs")}>Jobs</button>
                    </li>
                </ul>
                <ul className="join-now-sign-in-home-logged-out">
                    <li>
                        <button onClick={e => history.push("/signup")}>Join now</button>
                    </li>
                    <li>
                        <button onClick={e => history.push("/login")}>Sign In</button>
                    </li>
                </ul>
            </div>
            <h1>Welcome to your professional community</h1>
            <LoginForm />
            <div className="main-bottom-nav-login-button">
                <button onClick={e => history.push('/github')}>Link to my Github</button>
                <button onClick={e => history.push('/login')}>New to LinkedIn? Join now</button>
            </div>
        </div>
    )
}