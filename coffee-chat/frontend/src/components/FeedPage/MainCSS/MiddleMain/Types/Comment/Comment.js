export const Comment = ({comment}) => {
    const aDay = 24*60*60*1000;

    const timeSince = (date) => {
        let seconds = Math.floor((new Date() - date) / 1000);
      
        let interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + "y";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + "m";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + "d";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + "h";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + "m";
        }
        return Math.floor(seconds) + "s";
    }

    return (
        <>
            <div className='comment-section-for-post'>
                <div className='user-profile-picture'>
                    <div className="picture-crop-photo-div-smaller-post-c">
                        <div className='crop-smaller-post-pfp-c'>
                            <img className="author-post-pfp-post-c" src={require('../../../../../../assets/post/happy-businessman-isolated-handsome-man-260nw-609414131.png')} />
                        </div>
                    </div>
                </div>
                <div className='main-text-area-in-comments'>
                    <div className='text-box-from-user'>
                        <div className='top-section-of-text-from-user'>
                            <div className='user-identification-area'>
                                <div className='author-name-title-text-area'>
                                    {comment.author.first_name + " " + comment.author.last_name}
                                </div>
                                <div className='author-occupation'>
                                    Software Engineer at McDonald's
                                </div>
                            </div>
                            <div className='right-side-comment-options'>
                                <div className='time-ago-from-post-comment'>
                                    {timeSince(new Date(comment.createdAt))}
                                </div>
                                <div className='triple-dot-more-settings'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" width="16" height="16" focusable="false">
                                        <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='body-area-text-area'>
                            {comment.body}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-bar-like-reply-area'>
                <div className='like-comment-button'>
                    Like
                </div>
                <div className='emotes-for-comment-likes'>
                    <div className="like-icons-active">
                        {/* append icon svg */}
                        {/* {topLikeArray.includes(1) && <img className="emote-mini" src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like"/>}
                        {topLikeArray.includes(2) && <img className="emote-mini" src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="like"/>}
                        {topLikeArray.includes(3) && <img className="emote-mini" src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1" alt="like"/>}
                        {topLikeArray.includes(4) && <img className="emote-mini" src="https://static.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg" alt="like"/>}
                        {topLikeArray.includes(5) && <img className="emote-mini" src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="like"/>}
                        {topLikeArray.includes(6) && <img className="emote-mini" src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus" alt="like"/>}
                        {topLikeArray.includes(7) && <img className="emote-mini" src="https://static.licdn.com/sc/h/4mv33903v0o9ikpwfuy2ftcc6" alt="like"/>} */}
                    </div>
                    <div className="amount-of-likes-active">
                        {/* get like amount */}
                        {/* likeAmount */}
                    </div>
                </div>
                <div className='reply-button'>
                    {/* Reply */}
                </div>
                <div className='how-many-replies'>
                    {/* 8 Replies */}
                </div>
            </div>
        </>
    )
}