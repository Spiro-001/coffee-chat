import { useEffect, useState } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { configureStore } from '../../../../store'
import { PostWithoutPhotoWithCaption } from './Types/PostWithoutPhotoWithCaption'
import { PhotoWithPhotoAndCaption } from './Types/PostWithPhotoAndCaption'
import { PostWithPhotoNoCaption } from './Types/PostWithPhotoNoCaption'

export const Post = (type, post, id, user) => {
    const store = configureStore();

    return (
        <Provider store={store}>
            <div id={id} className="main-feed-container">
                {type === "pwpac" && <PhotoWithPhotoAndCaption id={id} post={post} user={user}/>}
                {type === "pwpnc" && <PostWithPhotoNoCaption id={id} post={post} user={user}/>}
                {type === "pwopwc" && <PostWithoutPhotoWithCaption id={id} post={post} user={user}/>}
            </div>
        </Provider>
    )
}
