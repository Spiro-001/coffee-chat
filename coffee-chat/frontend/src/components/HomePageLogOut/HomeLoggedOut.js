import { LoginForm } from "./LoginForm"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import "./HomeLoggedOut.css"

export const HomeLoggedOut = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Coffee Chat: Log In or Sign Up"
    },[])
    
    return (
        <main className="home-main-page">
            <div className="home-loggedout-div">
                <nav className="top-nav-home-logged-out">
                    <div className="coffee-logo-div">
                        <img className="coffee-chat-logo" alt="Coffee-Chat" src={require("../../assets/Coffee-Chat.png")} />
                    </div>
                    <ul className="main-options-home-logged-out">
                        <li className="discover-element">
                            <button className="discover-button" onClick={e => history.push("/discover")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" focusable="false" className="lazy-loaded">
                                    <path d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z" fill="currentColor"></path>
                                </svg>
                                <label>Discover</label>
                            </button>
                        </li>
                        <li className="discover-element">
                            <button className="discover-button" onClick={e => history.push("/people")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" focusable="false" className="lazy-loaded">
                                    <path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" fill="currentColor"></path>
                                </svg>
                                <label>People</label>
                            </button>
                        </li>
                        <li className="discover-element">
                            <button className="discover-button" onClick={e => history.push("/learning")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" className="lazy-loaded">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fillOpacity=".25"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fillOpacity=".6"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor"></path>
                                </svg>
                                <label>Learning</label>
                            </button>
                        </li>
                        <li className="discover-element">
                            <button className="discover-button" onClick={e => history.push("/jobs")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" focusable="false" className="lazy-loaded">
                                    <path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" fill="currentColor"></path>
                                </svg>
                                <label>Jobs</label>
                            </button>
                        </li>
                    </ul>
                    <ul className="join-now-sign-in-home-logged-out">
                        <li>
                            <a className="join-now" onClick={e => history.push("/signup")}>Join now</a>
                        </li>
                        <li>
                            <a className="sign-in" onClick={e => history.push("/login")}>Sign in</a>
                        </li>
                    </ul>
                </nav>
                <div className="main-bottom-nav-login-button">
                    <div className="first-half-bottom">
                        <h1 className="welcome-message">Welcome to your professional community</h1>
                        <LoginForm className="login-form" />
                    </div>
                    <div className="img-backsplash-man-div">
                        <img className="img-backsplash-man" src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="img-backsplash-man"/>
                    </div>
                </div>
            </div>
            <div className="background-many-button-div">
                <div className="two-home-page">
                    <div className="heading-one">
                        <h1>Explore topics you are interested in</h1>
                    </div>
                    <div className="many-button-div">
                        <label className="title-in-div">CONTENT TOPICS</label>
                        <ul className="button-binding-ul">
                            <li>
                                <a className="button-a-href-many-button-first" href="#">See All Topics</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Workplace</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Job Search</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Careers</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Interviewing</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Salary and Compensation</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Internships</a>
                            </li>
                            <li>
                                <a className="button-a-href-many-button" href="#">Employee Benefits</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}