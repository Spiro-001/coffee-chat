import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { csrfFetch } from '../../../../../../store/csrf';
import { createLike, destroyLike, updateLike } from '../../../../../../store/like';

export const Comment = ({comment, user}) => {
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
        if (interval <= 0) {
            return "Now";
        }
        return Math.floor(seconds) + "s";
    }

    let interval;

    
    const [elementScope, setElementScope] = useState("");
    const [likeHover, setLikeHover] = useState(false);
    const [emoteId, setEmoteId] =useState(0);
    const [clickedLike, setClickedLike] = useState(false);
    const [likeAmount, setLikeAmount] = useState("");
    const [topLikeArray, setTopLikeArray] = useState("");
    const [runDatabaseChanges, setRunDatabaseChanges] = useState("")
    const [moreOptionClicked, setMoreOptionClicked] = useState(false);
    const [editValue, setEditValue] = useState("");
    const ueId = {userId: user.id, emoteId: 1, likableId: comment.id , likableType: 'Comment'};
    const [editActive, setEditActive] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (likeHover) elementScope.style.display = "flex"
        if (elementScope.className === "anchor-hover-like-hover-comment" && !likeHover) elementScope.style.display = "none"
    },[likeHover])

    useEffect(() => {
        const refreshDatabase = setInterval(() => {
            setRunDatabaseChanges(Date.now())
        },100000);
        return () => clearInterval(refreshDatabase);
    },[runDatabaseChanges])
    
    useEffect(() => {
        const { userId, emoteId, likableId, likableType } = ueId;
        csrfFetch(`/api/likes/${comment.id}`,{
            method: 'POST',
            body: JSON.stringify({
              user_id: userId,
              emote_id: emoteId,
              likable_type: likableType,
              likable_id: likableId
            }),
        }).then(res => res.json()).then(data => {
            for (const [key, value] of Object.entries(data)) {
                if (!Array.isArray(value)) {
                    setLikeAmount(comment.likes ? Object.keys(comment.likes).length : 0)
                    setEmoteId(value.emoteId) 
                    value.userId === userId ? setClickedLike(true) : setClickedLike(false);
                }
            }
            setTopLikeArray(data.topEmotes);
        })
    },[])

    const handleOnClickLikeButton = (e, type) => {
        e.preventDefault();
        const ueId = {userId: user.id, emoteId: type, likableId: comment.id , likableType: 'Comment'};
        // console.log(e.target.lastChild)
        if (clickedLike === false) {
            dispatch(createLike(ueId));
            setClickedLike(true);
            setLikeAmount(likeAmount + 1);
            setTopLikeArray(topLikeArray => [...topLikeArray, type]);
        }
        else {
            dispatch(destroyLike(ueId));
            setClickedLike(false);
            setLikeAmount(likeAmount - 1);
            setTopLikeArray(topLikeArray.slice(0,topLikeArray.length-1));
            e.target.style.color = "rgba(0,0,0,0.6)"
            setEmoteId(1);
            e.target.lastChild.innerHTML = "Like"
        }
    }

    const handleOnClickEmoteButton = (e, type) => {
        e.preventDefault();
        const ueId = {userId: user.id, emoteId: type, likableId: comment.id , likableType: 'Comment'};

        if (clickedLike === false) {
            dispatch(createLike(ueId));
            setClickedLike(true);
            setLikeAmount(likeAmount + 1);
            setTopLikeArray(topLikeArray => [...topLikeArray, type]);
            // console.log(e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML)
            if (type === 1) {
                setEmoteId(1);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Like"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"
            }
            if (type === 2) {
                setEmoteId(2);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Celebrate"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
            }
            if (type === 3) {
                setEmoteId(3);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Support"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi"
            }
            if (type === 4) {
                setEmoteId(4);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Funny"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl"
            }
            if (type === 5) {
                setEmoteId(5);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Love"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm"
            }
            if (type === 6) {
                setEmoteId(6);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Insightful"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl"
            }
            if (type === 7) {
                setEmoteId(7);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Curious"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh"
            }
            
        }
        else {
            dispatch(updateLike(ueId));
            setClickedLike(true);
            setLikeAmount(likeAmount);
            setTopLikeArray(topLikeArray.slice(0,topLikeArray.length-1));
            setTopLikeArray(topLikeArray => [...topLikeArray, type]);
            if (type === 1) {
                setEmoteId(1);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Like"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"
            }
            if (type === 2) {
                setEmoteId(2);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Celebrate"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
            }
            if (type === 3) {
                setEmoteId(3);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Support"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi"
            }
            if (type === 4) {
                setEmoteId(4);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Funny"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl"
            }
            if (type === 5) {
                setEmoteId(5);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Love"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm"
            }
            if (type === 6) {
                setEmoteId(6);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Insightful"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl"
            }
            if (type === 7) {
                setEmoteId(7);
                e.target.parentNode.parentNode.previousSibling.firstChild.lastChild.innerHTML = "Curious"
                e.target.parentNode.parentNode.previousSibling.firstChild.firstChild.src = "https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh"
            }
        }
    }

    const handleOnClickDeleteButton = (e) => {
        e.preventDefault();
        csrfFetch(`/api/comments/${comment.id}`,{
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.remove()
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
        })
    }

    const handleOnClickMoreSetting = (e) => {
        moreOptionClicked ? setMoreOptionClicked(false) : setMoreOptionClicked(true)
        if (e.target.className !== "more-setting-boundary") {
            if (e.target.className.baseVal === '4401') {
                moreOptionClicked ? e.target.parentNode.parentNode.parentNode.nextElementSibling.style.display = "none" : e.target.parentNode.parentNode.parentNode.nextElementSibling.style.display = "flex"
            } else {
                moreOptionClicked ? e.target.parentNode.parentNode.nextElementSibling.style.display = "none" : e.target.parentNode.parentNode.nextElementSibling.style.display = "flex"
            }
        } else {
            moreOptionClicked ?  e.target.nextElementSibling.style.display = "none" : e.target.nextElementSibling.style.display = "flex"
        }
    }

    useEffect(() => {
        console.log(editValue)
    },[editValue])

    const handleOnClickEditButton = (e) => {
        if (e.target.alt === "Edit icon" && !editActive) {
            setEditActive(true)
            setEditValue(e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.innerHTML)
            const InputBoxEdit = document.createElement('input');
            InputBoxEdit.className = "input-edit-comment";
            InputBoxEdit.value = e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.innerHTML
            InputBoxEdit.onchange = handleOnChangeEdit;
    
            const ButtonHolderDiv = document.createElement('div');
            ButtonHolderDiv.className = 'button-holder-edit-comment';
    
            const SubmitFormButton = document.createElement('button');
            SubmitFormButton.innerHTML = "Save Changes"
            SubmitFormButton.className = "button-edit-comment-submit"
            SubmitFormButton.onclick = handleOnSubmitEdit;
    
            const CancelFormButton = document.createElement('button');
            CancelFormButton.innerHTML = "Cancel"
            CancelFormButton.className = 'cancel-button-edit-comment';
    
            ButtonHolderDiv.append(SubmitFormButton)
            ButtonHolderDiv.append(CancelFormButton)
    
            e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.innerHTML = ""
            e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.append(InputBoxEdit)
            e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.append(ButtonHolderDiv)
        }
        if (e.target.parentNode.parentNode.parentNode.nextElementSibling.className === "body-area-text-area" && !editActive) {
            setEditActive(true)
            setEditValue(e.target.parentNode.parentNode.parentNode.nextElementSibling.innerHTML)
            const InputBoxEdit = document.createElement('input');
            InputBoxEdit.className = "input-edit-comment";
            InputBoxEdit.value = e.target.parentNode.parentNode.parentNode.nextElementSibling.innerHTML
            InputBoxEdit.onchange = handleOnChangeEdit;
    
            const ButtonHolderDiv = document.createElement('div');
            ButtonHolderDiv.className = 'button-holder-edit-comment';
    
            const SubmitFormButton = document.createElement('button');
            SubmitFormButton.innerHTML = "Save Changes"
            SubmitFormButton.className = "button-edit-comment-submit"
            SubmitFormButton.onclick = handleOnSubmitEdit;
    
            const CancelFormButton = document.createElement('button');
            CancelFormButton.innerHTML = "Cancel"
            CancelFormButton.className = 'cancel-button-edit-comment';
    
            ButtonHolderDiv.append(SubmitFormButton)
            ButtonHolderDiv.append(CancelFormButton)
    
            e.target.parentNode.parentNode.parentNode.nextElementSibling.innerHTML = ""
            e.target.parentNode.parentNode.parentNode.nextElementSibling.append(InputBoxEdit)
            e.target.parentNode.parentNode.parentNode.nextElementSibling.append(ButtonHolderDiv)
        }
    }

    const handleOnSubmitEdit = (e) => {
        e.preventDefault()
        csrfFetch(`/api/comments/${comment.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                post_id: comment.postId,
                user_id: user.id,
                body: e.target.parentNode.previousSibling.value
            }),
        }).then(res => res.json()).then(data => {
        })
        e.target.parentNode.parentNode.innerHTML = e.target.parentNode.previousSibling.value;
        setEditActive(false)
    }

    const handleOnChangeEdit = (e) => {
        setEditValue(e.target.value)
    }

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
                                    <div className='full-name-comment-name'>
                                        {comment.author.first_name + " " + comment.author.last_name}
                                    </div>
                                    {comment.userId === user.id ?   
                                        <div className='author-badge-for-author'>
                                            <span className='author-badge-text'>
                                                Author
                                            </span>
                                        </div>: ""}
                                </div>
                                <div className='author-occupation'>
                                    Software Engineer at McDonald's
                                </div>
                            </div>
                            <div className='right-side-comment-options'>
                                <div className='time-ago-from-post-comment'>
                                    {timeSince(new Date(comment.createdAt))}
                                </div>
                                <div onClick={handleOnClickMoreSetting} className='more-setting-boundary'>
                                    <div className='triple-dot-more-settings'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" width="16" height="16" focusable="false">
                                            <path className='4401' d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='extra-options-extended'>
                                    {comment.userId === user.id ?
                                        <>
                                            <button onClick={handleOnClickDeleteButton} className='delete-comment-from-post'>
                                                <img alt="Trash icon" src="https://img.icons8.com/material-sharp/512/trash.png"></img>Delete Post
                                            </button>
                                            <button onClick={handleOnClickEditButton} className='delete-comment-from-post'>
                                                <img alt="Edit icon" src="https://img.icons8.com/sf-ultralight-filled/512/pencil.png"></img>Edit
                                            </button>
                                        </> :
                                        <>
                                            <button className='delete-comment-from-post'>
                                                <img alt="Edit icon" src="https://img.icons8.com/material-rounded/512/flag.png "></img>Report
                                            </button>
                                        </>
                                    }
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
                    <div className='like-button-comment-like-post' onClick={e => handleOnClickLikeButton(e, 1)} onMouseEnter={onHoverLikeButton} onMouseLeave={onUnHoverLikeButton}>
                        Like
                    </div>
                </div>
                <div className='anchor-hover-like-hover-comment'>
                        <div className='hover-like-option-choose-emote-comment' 
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
                            <img onClick={e => handleOnClickEmoteButton(e, 1)} className="like-emote" src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l" alt="like" />
                            <img onClick={e => handleOnClickEmoteButton(e, 2)} className="celebrate-emote" src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo" alt="celebrate" />
                            <img onClick={e => handleOnClickEmoteButton(e, 3)} className="support-emote" src="https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi" alt="support" />
                            <img onClick={e => handleOnClickEmoteButton(e, 4)} className="funny-emote" src="https://static-exp1.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl" alt="funny" />
                            <img onClick={e => handleOnClickEmoteButton(e, 5)} className="love-emote" src="https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm" alt="love" />
                            <img onClick={e => handleOnClickEmoteButton(e, 6)} className="insightful-emote" src="https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl" alt="insightful" />
                            <img onClick={e => handleOnClickEmoteButton(e, 7)} className="curious-emote" src="https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh" alt="curious" />
                        </div>
                    </div>
                <div className='emotes-for-comment-likes'>
                    <div className="like-icons-active">
                        {/* append icon svg */}
                        {topLikeArray.includes(1) && <img className="emote-mini" src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like"/>}
                        {topLikeArray.includes(2) && <img className="emote-mini" src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="like"/>}
                        {topLikeArray.includes(3) && <img className="emote-mini" src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1" alt="like"/>}
                        {topLikeArray.includes(4) && <img className="emote-mini" src="https://static.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg" alt="like"/>}
                        {topLikeArray.includes(5) && <img className="emote-mini" src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="like"/>}
                        {topLikeArray.includes(6) && <img className="emote-mini" src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus" alt="like"/>}
                        {topLikeArray.includes(7) && <img className="emote-mini" src="https://static.licdn.com/sc/h/4mv33903v0o9ikpwfuy2ftcc6" alt="like"/>}
                    </div>
                    <div className="amount-of-likes-active">
                        { likeAmount !== 0 ? likeAmount : "" }
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