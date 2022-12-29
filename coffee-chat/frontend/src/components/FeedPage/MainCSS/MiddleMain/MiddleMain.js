import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { csrfFetch } from "../../../../store/csrf";
import { Post, PostNode } from "./Post";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStateLike } from "../../../../store/like";
import "./StartPost.css";

export const MiddleMain = ({ user }) => {
  const [batchSize, setBatchSize] = useState(5);
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(5);
  const [runDatabaseChanges, setRunDatabaseChanges] = useState("");
  const [idArray, setIdArray] = useState([]);
  const [newPostValue, setNewPostValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newPostSubmitted, setNewPostSubmitted] = useState("");
  const likeStateSelector = useSelector((state) => state);

  useEffect(() => {
    const refreshDatabase = setInterval(() => {
      setRunDatabaseChanges(Date.now());
    }, 100000);

    csrfFetch("/api/posts/all", {
      method: "POST",
      body: JSON.stringify({
        batch_size: batchSize,
        start,
        finish,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (JSON.stringify(data) !== "{}") {
          for (const [id, post] of Object.entries(data.posts)) {
            let postSpace = document.createElement("div");
            postSpace.id = post.createdAt;
            if (!idArray.includes(parseInt(post.id))) {
              const ueId = {
                userId: user.id,
                emoteId: 1,
                likableId: post.id,
                likableType: "Post",
              }; // MAKE SURE TO CHECK FOR POST THAT DONT HAVE LIKES
              if (
                Date.parse(
                  document.getElementsByClassName("middle-main-feed")[0]
                    .lastChild.id
                ) < Date.parse(post.createdAt)
              ) {
                document
                  .getElementsByClassName("middle-main-feed")[0]
                  .lastChild.parentNode.insertBefore(
                    postSpace,
                    document.getElementsByClassName("filter-line-horizontal")[0]
                      .nextElementSibling
                  );
                ReactDOM.render(
                  Post(post.postType, post, post.id, user),
                  postSpace
                );
              } else {
                document
                  .getElementsByClassName("middle-main-feed")[0]
                  .insertBefore(
                    postSpace,
                    document.getElementsByClassName("middle-main-feed")[0]
                      .lastChild.nextSibling
                  );
                ReactDOM.render(
                  Post(post.postType, post, post.id, user),
                  postSpace
                );
              }
            }
            if (!idArray.includes(parseInt(post.id)))
              setIdArray((idArray) => [...idArray, post.id]);
          }
        }
      });
    return () => clearInterval(refreshDatabase);
  }, [runDatabaseChanges, newPostSubmitted]);

  const onClickCreatePost = (e) => {
    e.preventDefault();
    setNewPostValue("");
    document.getElementById("root").style.overflowY = "hidden";
    if (e.target.className === "link-to-popup-create-post") {
      e.target.parentNode.parentNode.parentNode.parentNode.firstChild.children[1].firstChild.children[1].lastChild.lastChild.firstChild.lastChild.innerText =
        "";
    } else {
      e.target.parentNode.parentNode.parentNode.parentNode.firstChild.nextElementSibling.firstChild.firstChild.nextElementSibling.firstChild.lastChild.firstChild.lastChild.innerText =
        "";
    }
    document.getElementsByClassName(
      "new-post-form-post-form"
    )[0].style.display = "flex";
    // setEditPostValue(post.body);
    // setEditSubmited(false);
  };

  const handleCloseNewPostForm = (e) => {
    document.getElementById("root").style.overflowY = "auto";
    document.getElementsByClassName(
      "new-post-form-post-form"
    )[0].style.display = "none";
  };

  const handleHoverPostButton = (e) => {
    if (newPostValue.length > 0) {
      e.target.style.backgroundColor = "#084d91";
      e.target.style.cursor = "pointer";
    } else {
      e.target.style.cursor = "not-allowed";
    }
  };

  const handleUnhoverPostButton = (e) => {
    if (newPostValue.length > 1) e.target.style.backgroundColor = "#0A66C2";
  };

  const handleClickSubmitNewPostForm = (e) => {
    if (newPostValue.length === 0) {
      console.log("ERROR");
    } else {
      csrfFetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({
          user_id: user.id,
          body: newPostValue,
          image_url: imageUrl,
          post_type: "pwpac",
        }),
      }).then((res) => {
        document.getElementsByClassName(
          "new-post-form-post-form"
        )[0].style.display = "none";
        setNewPostSubmitted(Date.now());
      });
    }
  };

  useEffect(() => {
    if (newPostValue !== "") {
      document.getElementsByClassName(
        "save-button-place-post-post"
      )[0].style.color = "white";
      document.getElementsByClassName(
        "save-button-place-post-post"
      )[0].style.backgroundColor = "#0A66C2";
      document.getElementsByClassName(
        "placeholder-post-new-post-form"
      )[0].style.display = "none";
    } else {
      document.getElementsByClassName(
        "placeholder-post-new-post-form"
      )[0].style.display = "block";
      document.getElementsByClassName(
        "save-button-place-post-post"
      )[0].style.color = "rgba(0,0,0,0.4)";
      document.getElementsByClassName(
        "save-button-place-post-post"
      )[0].style.backgroundColor = "rgba(0,0,0,0.1)";
    }
  }, [newPostValue]);

  return (
    <div className="middle-main-feed">
      <div className="start-post-feed-main-mini-feed">
        {/* <h1>START A POST GOES HERE </h1> */}
        <div className="start-post-feed-main-mini-feed-first-start-a-post">
          <div className="picture-crop-photo-div-start-a-post">
            <div className="crop-start-a-post">
              {/* profile picture here */}
              <img
                className="profile-picture-self-start-a-post"
                src={require("../../../../assets/DEMO-USER-PROFILE.png")}
              />
            </div>
          </div>
          <div className="start-a-post-bar">
            <button
              onClick={onClickCreatePost}
              className="link-to-popup-create-post"
            >
              <span>Start a post</span>
            </button>
          </div>
        </div>
        {/* ########################## NEW FORM ########################### */}
        <div className="new-post-form-post-form">
          <div className="pop-up-new-post-form-for-post">
            <div className="heading-top-new-post-form">
              Create a post
              <div className="svg-width-to-right-post">
                <svg
                  className="close-new-post-form-post"
                  onClick={handleCloseNewPostForm}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                </svg>
              </div>
            </div>
            <div className="main-body-element-comment-post">
              <div className="main-new-post-body-section">
                <div className="profile-area-name-pfp">
                  <div className="picture-crop-photo-div-smaller-post">
                    <div className="crop-smaller-post-pfp">
                      <img
                        className="author-post-pfp-post"
                        src={require("../../../../assets/post/happy-businessman-isolated-handsome-man-260nw-609414131.png")}
                        alt="pfp"
                      />
                    </div>
                  </div>
                  {user.firstName + " " + user.lastName}
                </div>
                <div className="width-setter-context-box-post">
                  <div className="context-new-post-post-text-area">
                    <div className="placeholder-post-new-post-form">
                      What do you want to talk about?
                    </div>
                    <div
                      contentEditable="true"
                      onInput={(e) => {
                        if (2) {
                          console.log(e.target.inputMode);
                          setNewPostValue(e.target.innerText);
                        }
                      }}
                      className="text-area-for-new-post-post"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-nav-bar-submit-other-options-post">
              <button
                onMouseLeave={handleUnhoverPostButton}
                onMouseEnter={handleHoverPostButton}
                onClick={handleClickSubmitNewPostForm}
                className="save-button-place-post-post"
                id="post"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        {/* ########################## NEW FORM ########################### */}
        <div className="start-post-feed-main-mini-feed-last">
          {/* <button className="photo-button-start-a-post">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fillRule="currentColor"
              className="svg-photo-button"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            Photo
          </button>
          <button className="video-button-start-a-post">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fillRule="currentColor"
              className="svg-video-button"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            Video
          </button>
          <button className="event-button-start-a-post">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fillRule="currentColor"
              className="svg-event-button"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            Event
          </button>
          <button className="write-article-button-start-a-post">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fillRule="currentColor"
              className="svg-article-button"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            Write article
          </button> */}
        </div>
      </div>
      <div className="filter-line-horizontal">
        <span className="sort-by-text-span">
          Sort by:
          <span className="top-recent-text-span">
            Top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fillRule="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </span>
        </span>
      </div>
    </div>
  );
};
