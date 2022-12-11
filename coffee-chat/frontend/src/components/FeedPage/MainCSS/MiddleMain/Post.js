import { PostWithoutPhotoWithCaption } from './Types/PostWithoutPhotoWithCaption'
import { PhotoWithPhotoAndCaption } from './Types/PostWithPhotoAndCaption'
import { PostWithPhotoNoCaption } from './Types/PostWithPhotoNoCaption'

export const Post = ({type}) => {
    return (
        <div className="main-feed-container">
            {type === "pwpac" && <PhotoWithPhotoAndCaption />}
            {type === "pwpnc" && <PostWithPhotoNoCaption />}
            {type === "pwopwc" && <PostWithoutPhotoWithCaption />}
        </div>
    )
}