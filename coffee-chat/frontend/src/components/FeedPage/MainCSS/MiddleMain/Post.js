import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { configureStore } from "../../../../store";
import { UserProfile } from "../../../UserProfile/UserProfile";
import { PostWithoutPhotoWithCaption } from "./Types/PostWithoutPhotoWithCaption";
import { PhotoWithPhotoAndCaption } from "./Types/PostWithPhotoAndCaption";
import { PostWithPhotoNoCaption } from "./Types/PostWithPhotoNoCaption";

export const Post = (type, post, id, user) => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div id={id} className="main-feed-container">
        {type === "pwpac" && (
          <PhotoWithPhotoAndCaption id={id} post={post} user={user} />
        )}
        {type === "pwpnc" && (
          <PostWithPhotoNoCaption id={id} post={post} user={user} />
        )}
        {type === "pwopwc" && (
          <PostWithoutPhotoWithCaption id={id} post={post} user={user} />
        )}
      </div>
    </Provider>
  );
};
