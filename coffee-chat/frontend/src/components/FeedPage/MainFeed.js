import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
import "./MainFeed.css";
import "./MainCSS/LeftSideMain/LeftSideMain.css";
import "./MainCSS/MiddleMain/MiddleMain.css";
import "./MainCSS/RightSideMain/RightSideMain.css";
import { useEffect, useState } from "react";
import { LeftSideMain } from "./MainCSS/LeftSideMain/LeftSideMain";
import { MiddleMain } from "./MainCSS/MiddleMain/MiddleMain";
import { RightSideMain } from "./MainCSS/RightSideMain/RightSideMain";
import News from "./objectnews.json";
import axios from "axios";
import { logoutUser } from "../../store/session";
import { UserProfile } from "../UserProfile/UserProfile";

// TESTING HTML BEFORE BACKEND IS MADE
// '../../assets/DEMO-USER-BACKDROP.png'
// '../../assets/DEMO-USER-PROFILE.png'

export const MainFeed = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const history = useHistory();
  if (history.location.pathname === "/feed/") history.push("/feed");

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f3f2ef";
    document.getElementsByClassName(
      "home-icon-list-item-main-feed"
    )[0].style.fill = "black";
  }, []);

  const handleMoreOption = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  document.addEventListener("mousedown", (event) => {
    if (
      document
        .getElementsByClassName("my-profile-icon-list-item-main-feed")[0]
        .contains(event.target)
    ) {
      //   setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  });

  useEffect(() => {
    openMenu
      ? (document.getElementsByClassName("me-more-menu")[0].style.display =
          "flex")
      : (document.getElementsByClassName("me-more-menu")[0].style.display =
          "none");
  }, [openMenu]);

  const onClickLogOut = () => {
    document.body.style.backgroundColor = "white";
    dispatch(logoutUser());
  };

  // axios('  https://newsdata.io/api/1/news?apikey=pub_143640d107eac00e44c8cf57b6a10c70a8048&country=us&language=en&category=business ').then(res => console.log(res))
  const user = useSelector((state) => {
    return state.session.user;
  });

  if (!currentUser) return <Redirect to="/" />;

  return (
    <div className="background-gray-for-main-feed">
      <div className="main-feed-page-flex-div-main">
        <div className="side-bar-nav-bar">
          <nav className="main-nav-bar-main-feed-nav">
            <div className="main-left-side-main-feed">
              <li-icon
                className="linked-in-icon-div-element-main-nav"
                type="app-linkedin-bug-color-icon"
                size="large"
                role="img"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  filerule="currentColor"
                  className="linked-in-icon-div-element-main-nav"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </li-icon>
              <div className="input-search-main-nav-bar-feed">
                <li-icon
                  aria-hidden="true"
                  type="search"
                  className="search-global-typeahead__search-icon"
                  size="small"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    filerule="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </li-icon>
                <input
                  className="input-search-bar-find-nav-bar-feed"
                  placeholder="Search"
                />
              </div>
            </div>
            <ul className="main-ul-right-side-main-feed">
              <li className="home-icon-list-item-main-feed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  filerule="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
                Home
              </li>
              {/* <li className="my-network-icon-list-item-main-feed">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" filerule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                                </svg>
                                My Network
                            </li>
                            <li className="jobs-icon-list-item-main-feed">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" filerule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                                </svg>
                                Jobs
                            </li>
                            <li className="messaging-icon-list-item-main-feed">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" filerule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                                </svg>
                                Messaging
                            </li>
                            <li className="notifications-icon-list-item-main-feed">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" filerule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                                </svg>
                                Notifications
                            </li> */}
              <li className="my-profile-icon-list-item-main-feed">
                <div className="picture-crop-photo-div-smaller">
                  <div className="crop-smaller">
                    {/* profile picture here */}
                    <img
                      className="profile-picture-self-smaller"
                      src={require("../../assets/DEMO-USER-PROFILE.png")}
                      alt="pfp"
                    />
                  </div>
                </div>
                <div
                  onClick={handleMoreOption}
                  className="me-arrow-profile-icon-smaller"
                >
                  Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    filerule="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 11L3 6h10z" filerule="evenodd"></path>
                  </svg>
                </div>
                <div className="me-more-menu">
                  <div className="user-profile-more-menu">
                    <div className="full-name-small-menu">
                      <img
                        className="profile-picture-self-smaller-menu"
                        src={require("../../assets/DEMO-USER-PROFILE.png")}
                        alt="pfp"
                      />
                      <div className="name-current-user">
                        <div
                          onClick={(e) => history.push(`/user/${user.id}`)}
                          className="name-of-user"
                        >
                          {user.firstName + " " + user.lastName}
                        </div>
                        <div className="occupation-of-user">
                          Software Engineer
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={onClickLogOut} className="sign-out">
                    Sign Out
                  </div>
                </div>
              </li>
            </ul>
            <button className="work-option-drop-down-menu-right-side-main-feed">
              <li-icon aria-hidden="true" type="grid" size="large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  filerule="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
              </li-icon>
              <div className="work-arrow-thing">
                <span className="work-text-tile-drop-down">Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  filerule="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 11L3 6h10z" filerule="evenodd"></path>
                </svg>
              </div>
            </button>
          </nav>
        </div>
        {history.location.pathname === "/feed" && (
          <div className="feed-content-main-division">
            <LeftSideMain user={user} />
            <MiddleMain user={user} />
            <RightSideMain user={user} />
          </div>
        )}
      </div>
    </div>
  );
};
