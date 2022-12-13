import { PostWithoutPhotoWithCaption } from './Types/PostWithoutPhotoWithCaption'
import { PhotoWithPhotoAndCaption } from './Types/PostWithPhotoAndCaption'
import { PostWithPhotoNoCaption } from './Types/PostWithPhotoNoCaption'

export const Post = (type, post, id) => {
    return (
        <div id={id} className="main-feed-container">
            {type === "pwpac" && <PhotoWithPhotoAndCaption id={id} post={post}/>}
            {type === "pwpnc" && <PostWithPhotoNoCaption id={id} post={post}/>}
            {type === "pwopwc" && <PostWithoutPhotoWithCaption id={id} post={post}/>}
        </div>
    )
}
