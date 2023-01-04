import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import "./UserProfile.css";

export const UserProfile = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });
  const { id } = useParams();
  useEffect(() => {
    csrfFetch(`/api/user_id/${id}`)
      .then((e) => e.json())
      .then((r) => setUser(r.user));
  }, []);

  let history = useHistory();

  return (
    <div className="main-profile-page">
      <div className="top-nav-bar">
        <div className="title-menu">
          <span onClick={(e) => history.push("/feed")}>coffee-chat</span>
        </div>
      </div>
      <div className="middle-main-profile">
        <div className="scorecard-profile">
          <div className="background-photo-profile">
            <img
              src={require("../../assets/DEMO-USER-BACKDROP.png")}
              className="background-pfp-list"
              alt="bg-pfp-pic"
            />
          </div>
          <div className="image-profile-picture">
            <img
              src={require("../../assets/DEMO-USER-PROFILE.png")}
              className="pfp-picture-profile"
              alt="pfp-pic"
            />
          </div>
          <div className="information-name-profile">
            {user.firstName + " " + user.lastName}
            <span className="jb-title">Software Engineer</span>
            <span className="other-info">
              <p id="pfp-p">{"Email : " + user.email}</p>
              <p id="pfp-p">{"Phone Number : " + user.phoneNumber}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="bottom-nav-bar"></div>
    </div>
  );
};
