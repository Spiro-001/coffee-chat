import './RecentMain.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const LeftSideMain = ({user}) => {
    
    useEffect(() => {

    }, [user])
    
    
    return (
        <div className="left-side-main-feed">
            <div className="profile-left-side-mini-feed">
                <div className="profile-left-side-mini-feed-top">
                    {/* splash art here */}
                    <img className="backdrop-user-self" src={require('../../../../assets/DEMO-USER-BACKDROP.png')}/>
                    <div className="picture-crop-photo-div">
                        <div className="crop">
                            {/* profile picture here */}
                            <img className="profile-picture-self" src={require('../../../../assets/DEMO-USER-PROFILE.png')}/>                            
                        </div>
                    </div>
                    {/* full name here */}
                    <div className="first-last-name-div">
                        <Link to={`/${user.firstName}-${user.lastName}`} className="first-last-name-a-tag">
                            {user.firstName + " " + user.lastName}
                        </Link>
                    </div>
                    <div className="job-title-user-name">
                        {"Software Engineer"}
                    </div>
                    {/* something like fetch user/${user.id}/profile */}
                </div>
                <div className="profile-left-side-mini-feed-second">
                    {/* connections and amount
                    grow your network href
                    who's viewed your profile amount */}
                    <div className="connection-user-feed-div">
                        <Link className="link-to-a-tag-my-network" to="/mynetwork">
                            <div className="row-row-row">
                                <span className="connection-span-text-space">
                                    {"Connections"}
                                </span> 
                                <span className="blue-font-connection-badge">
                                    {"32"}
                                </span>
                            </div>
                            <span className="grow-network-span-connection">
                                {"Grow your network"}
                            </span>
                        </Link>
                        <Link className="link-to-a-tag-my-network-two" to="analytics/profile-views/">
                            <div className="row-row-row">
                                <span className="connection-span-text-space">
                                    {"Who's viewed your profile"}
                                </span> 
                                <span className="blue-font-connection-badge">
                                    {"12"}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="profile-left-side-mini-feed-third">
                    {/* extra feature replace premium features here */}
                    <svg className="goldensquare-thing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="false">
                        <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                        <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                    </svg>
                    <Link className="hire-me-im-a-good-worker" to="/github">Want to hire a software developer?</Link>
                </div>
                <div className="profile-left-side-mini-feed-last">
                    {/* my items */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="bookmark-thing" width="16" height="16" focusable="false">
                        <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
                    </svg>
                    <Link className="my-items-a-tag" to="/my-items/posted-jobs/">
                        {"My items"}
                    </Link>
                </div>
            </div>
            <div className="my-recent-left-side-mini-feed">
                <div className="my-recent-left-side-mini-feed-top">
                    <div className="recent-mini-feed">
                        <span className="recent-title-mini-feed">
                            Recent
                        </span>
                        <ul className="list-element-with-recent">
                            <li className="recent-elements-list">
                                <li-icon aria-hidden="true" type="group" className="community-icon-group" size="small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="community-icon-group-svg" width="16" height="16" focusable="false">
                                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                    </svg>
                                </li-icon>
                                Placeholder Item 1
                            </li>
                            <li className="recent-elements-list">
                                <li-icon aria-hidden="true" type="group" className="community-icon-group" size="small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="community-icon-group-svg" width="16" height="16" focusable="false">
                                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                    </svg>
                                </li-icon>
                                Placeholder Item 2
                            </li>
                            <li className="recent-elements-list">
                                <li-icon aria-hidden="true" type="group" className="community-icon-group" size="small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="community-icon-group-svg" width="16" height="16" focusable="false">
                                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                    </svg>
                                </li-icon>
                                Placeholder Item 3
                            </li>
                        </ul>
                    </div>
                    <div className="groups-mini-feed">
                        <span className="groups-title-mini-feed">
                            Groups
                        </span>
                        <ul className="list-element-with-recent-groups">
                            <li className="recent-elements-list">
                                <li-icon aria-hidden="true" type="group" className="community-icon-group" size="small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="community-icon-group-svg" width="16" height="16" focusable="false">
                                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                    </svg>
                                </li-icon>
                                Group Item 1
                            </li>
                            <li className="recent-elements-list">
                                <li-icon aria-hidden="true" type="group" className="community-icon-group" size="small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="community-icon-group-svg" width="16" height="16" focusable="false">
                                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                    </svg>
                                </li-icon>
                                Group Item 2
                            </li>
                            <li className="recent-elements-list">
                                <li-icon aria-hidden="true" type="group" className="community-icon-group" size="small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="community-icon-group-svg" width="16" height="16" focusable="false">
                                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                                        <circle cx="8" cy="4" r="2"></circle>
                                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                                    </svg>
                                </li-icon>
                                Group Item 3
                            </li>
                            <div className="see-all-button-div">
                                <Link to="#" className="see-all-button">
                                    See all
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <div className="groups-mini-feed-events">
                        <Link to="/events" className="groups-title-mini-feed-events">
                            Events
                        </Link>
                        <button className="add-event-button">
                            <li-icon aria-hidden="true" type="add" className="plus-icon-add-event" size="small">
                                <svg className="plus-svg-add-event" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                </svg>
                            </li-icon>
                        </button>
                    </div>
                    <div className="groups-mini-feed-followed-hashtags">
                        <Link to="/events" className="groups-title-mini-feed-hashtags">
                            Followed Hashtags
                        </Link>
                    </div>
                    <div className="discover-networks-left-side">
                        <Link to="mynetwork/discover-hub/" className="my-network-a-tag-discover">
                            Discover more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}