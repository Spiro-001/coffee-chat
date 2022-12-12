import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostWithPhotoAndCaption.css'

export const PhotoWithPhotoAndCaption = ({post}) => {

    const [likeHover, setLikeHover] = useState(false);
    const [elementScope, setElementScope] = useState("");

    useEffect(() => {
        if (likeHover) elementScope.style.display = "flex"
        if (elementScope.className === "anchor-hover-like-hover" && !likeHover) elementScope.style.display = "none"
    },[likeHover])

    let interval;

    const onHoverLikeButton = (e) => {
        if (interval) clearTimeout(interval)
        setElementScope(e.target.parentNode.nextElementSibling)
        setLikeHover(true)
    }

    const onUnHoverLikeButton = (e) => {
        interval = setTimeout(() => {
            setLikeHover(false)
        },500)
    }

    return (
        <div className="post-with-photo-and-caption">
            <div className='more-options-for-post'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fillRule="currentColor" width="24" height="24" focusable="false">
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                </svg>
            </div>
            <div className="top-author-of-post">
                <div className="picture-crop-photo-div-smaller-post">
                    <div className='crop-smaller-post-pfp'>
                        <img className="author-post-pfp-post" src={require('../../../../../assets/post/happy-businessman-isolated-handsome-man-260nw-609414131.png')} />
                    </div>
                </div>
                <Link className="link-to-profile-post" to="#" >     
                    <div className="information-author-div">
                        <span className='full-name-author-of-post'>
                            <span className='full-name-link-to-profile'>John Wayne</span>
                        </span>
                        <span className='full-name-author-of-post'>
                            Private Investor at Bloomberg
                        </span>
                        <span className='ago-time-post'>
                            1w
                        </span>
                    </div>
                </Link>
                <div className="follow-plus-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fillRule="currentColor" width="16" height="16" focusable="false">
                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                    </svg>
                    Follow
                </div>
            </div>
            <div className="caption-of-post">
                <div className="body-caption-post-text">
                    The national stock price has been all time low! We must buy, buy, buy. Don't sell, keep your stocks untill we reach a 25% profit! Everyone will make money as long as we don't sell!
                </div>
            </div>
            <div className="picture-or-media-attatchment">
                <img className="post-image-in-post-main" src={require('../../../../../assets/post/stock-market-ticker-shows-gains-losses-day-48714927.jpg')} />
            </div>
            <div className="like-comment-post-association">
                <div className="like-icons-active">
                    {/* append icon svg */}
                    <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like"/>
                </div>
                <div className="amount-of-likes-active">
                    {/* get like amount */}
                    Liam Xaviar and 12 others
                </div>
                <div className='amount-of-comment-repost'>
                    <div className="comment-amount-active">
                        {/* get repost amount */}
                        5 comments
                    </div>
                    <div className="repost-amount-active">
                        {/* get repost amount */}
                        3 reposts
                    </div>
                </div>
            </div>
            <div className="bottom-button-comment-and-like">
                <div className="like-icon-post" onMouseEnter={onHoverLikeButton} onMouseLeave={onUnHoverLikeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fillRule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>
                    Like
                </div>
                <div className="comment-icon-post">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fillRule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>
                    Comment
                </div>
                <div className="repost-icon-post">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="repost-medium" data-supported-dps="24x24" fillRule="currentColor">
                        <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
                    </svg>
                    Repost
                </div>
                <div className="send-icon-post">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fillRule="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    Send
                </div>
            </div>
            <div className='anchor-hover-like-hover'>
                <div className='hover-like-option-choose-emote' 
                    onMouseEnter={e => {
                        setLikeHover(true); 
                        clearTimeout(interval);
                        }
                    } 
                    onMouseLeave={e => {
                        interval = setTimeout(() => {
                            setLikeHover(false)
                        },500)
                        }
                    }>
                    <img className="like-emote" src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l" alt="like" />
                    <img className="celebrate-emote" src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo" alt="celebrate" />
                    <img className="support-emote" src="https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi" alt="support" />
                    <img className="funny-emote" src="https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl" alt="funny" />
                    <img className="love-emote" src="https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm" alt="love" />
                    <img className="insightful-emote" src="https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl" alt="insightful" />
                    <img className="curious-emote" src="https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh" alt="curious" />
                </div>
            </div>
        </div>
    );
}