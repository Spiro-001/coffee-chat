import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import './MainFeed.css'
import './MainCSS/LeftSideMain/LeftSideMain.css'
import './MainCSS/MiddleMain/MiddleMain.css'
import './MainCSS/RightSideMain/RightSideMain.css'
import { useState } from "react"
import { LeftSideMain } from "./MainCSS/LeftSideMain/LeftSideMain"

// TESTING HTML BEFORE BACKEND IS MADE
// '../../assets/DEMO-USER-BACKDROP.png'
// '../../assets/DEMO-USER-PROFILE.png'

export const MainFeed = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)

    const user = useSelector((state) => {
        return state.session.user
    })

    if (!currentUser) return <Redirect to="/"/>

    return (
        <div className="main-feed-page-flex-div-main">
            <div className="side-bar-nav-bar">
                <nav className="main-nav-bar-main-feed-nav">
                    <div className="main-left-side-main-feed">
                        <li-icon className="linked-in-icon-div-element-main-nav" type="app-linkedin-bug-color-icon" size="large" role="img" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </li-icon>
                        <div className="input-search-main-nav-bar-feed">
                            <li-icon aria-hidden="true" type="search" className="search-global-typeahead__search-icon" size="small">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                                </svg>
                            </li-icon>
                            <input className="input-search-bar-find-nav-bar-feed" placeholder="Search"/>
                        </div>
                    </div>
                    <ul className="main-ul-right-side-main-feed">
                        <li className="home-icon-list-item-main-feed">
                            Home
                        </li>
                        <li className="my-network-icon-list-item-main-feed">
                            My Network
                        </li>
                        <li className="jobs-icon-list-item-main-feed">
                            Jobs
                        </li>
                        <li className="messaging-icon-list-item-main-feed">
                            Messaging
                        </li>
                        <li className="notifications-icon-list-item-main-feed">
                            Notifications
                        </li>
                        <li className="my-profile-icon-list-item-main-feed">
                            Me
                        </li>
                    </ul>
                    <button className="work-option-drop-down-menu-right-side-main-feed">
                        <li-icon aria-hidden="true" type="grid" size="large">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                            </svg>
                        </li-icon>
                    </button>
                </nav>
            </div>
            <div className="feed-content-main-division">
                <LeftSideMain user={user}/>
                <div className="middle-main-feed">
                    <div className="start-post-feed-main-mini-feed">
                        <h1>START A POST GOES HERE </h1>
                        <div className="start-post-feed-main-mini-feed-first">

                        </div>
                        <div className="start-post-feed-main-mini-feed-last">
                            
                        </div>
                    </div>
                    <div className="main-feed-container">
                        <h1>MAIN POST GOES HERE</h1>
                        {/* FETCH NEW DATA AND APPEND IT HERE */}
                        <div className="post-with-photo-and-caption">
                            <div className="top-author-of-post">

                            </div>
                            <div className="caption-of-post">

                            </div>
                            <div className="picture-or-media-attatchment">

                            </div>
                            <div className="like-comment-post-association">

                            </div>
                            <div className="bottom-button-comment-and-like">

                            </div>
                        </div>
                        <div className="post-with-photo-no-caption">
                            <div className="top-author-of-post">

                            </div>
                            <div className="picture-or-media-attatchment">

                            </div>
                            <div className="like-comment-post-association">

                            </div>
                            <div className="bottom-button-comment-like-repost-send">

                            </div>
                        </div>
                        <div className="post-no-photo-with-caption">
                            <div className="top-author-of-post">

                            </div>
                            <div className="caption-of-post">

                            </div>
                            <div className="like-comment-post-association">

                            </div>
                            <div className="bottom-button-comment-like-repost-send">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side-main-feed">
                    <div className="coffee-chat-news-feed-main-feed">
                        <h1>COFFEE CHAT NEWS GOES HERE</h1>
                        {/* STARTS WITH 5 NEWS SHOW MORE OPTION SHOWS 5 MORE */}
                        <ul className="coffee-chat-news-ul">
                            <li className="coffee-chat-news-li">

                            </li>
                            <li className="coffee-chat-news-li">

                            </li>
                            <li className="coffee-chat-news-li">

                            </li>
                            <li className="coffee-chat-news-li">

                            </li>
                            <li className="coffee-chat-news-li">

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}