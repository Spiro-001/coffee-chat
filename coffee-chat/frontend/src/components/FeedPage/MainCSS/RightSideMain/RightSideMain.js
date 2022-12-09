import News from "../../objectnews.json"
import axios from 'axios'
import './RightSideMain.css'

export const RightSideMain = () => {

    const aDay = 24*60*60*1000;

    const timeSince = (date) => {
        let seconds = Math.floor((new Date() - date) / 1000);
      
        let interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + "y ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + "m ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + "d ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + "h ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + "m ago";
        }
        return Math.floor(seconds) + "s ago";
    }

    const hashUrl = (url) => {
        let hash = 0;

        if (url.length === 0) return hash;
        for (let i = 0; i < url.length; i++) {
            let char = url.charCodeAt(i);
            hash = ((hash << 5) - hash + char); 
            hash = hash & hash;
        }
        return hash
    }

    let clicked = true;
    
    
    const onClickRightMainNews = () => {
        let rightMainNews = document.getElementsByClassName('extended-show-more-news')
        let arrowDropDown = document.getElementsByClassName('show-more-button')
        let rightMainNewsChildren = rightMainNews[0].children

        if (clicked) {
            for (const [key, value] of Object.entries(rightMainNewsChildren)) {
                value.style.height = "45px"
                value.style.opacity ="1.0"
            }
            arrowDropDown[0].children[0].style.transform = "rotate(180deg)"
            // rightMainNews[0].style.height = "45px"
        } else {
            // rightMainNews[0].style.height = "0px"
            for (const [key, value] of Object.entries(rightMainNewsChildren)) {
                value.style.height = "0px"
                value.style.opacity = "0.0"
                arrowDropDown[0].children[0].style.transform = "rotate(0deg)"
            }
        }
        clicked ? clicked = false : clicked = true
    }

    return (
        <div className="right-side-main-feed">
            <div className="coffee-chat-news-feed-main-feed">
                <span className="coffee-chat-news-title">
                    Coffee Chat News
                </span>
                {/* STARTS WITH 5 NEWS SHOW MORE OPTION SHOWS 5 MORE */}
                <ul className="coffee-chat-news-ul">
                    {News[0].data.results.slice(0,5).map(rec => {
                            return (
                                <div key={hashUrl(rec.link) * 3} className={`coffee-news-list-div`}>
                                    <li key={hashUrl(rec.link) * 2} className="coffee-chat-news-li">
                                        <a key={hashUrl(rec.link)} href="#" className="a-tag-news-li-el">                                    
                                            {rec.title.length <= 35 ? rec.title : rec.title.slice(0, 35)[34] === " " ? rec.title.slice(0, 34) + "..." : rec.title.slice(0, 34) + "..."} {rec.id}
                                        </a>
                                    </li>
                                    <span key={rec.link} className="text-information-link">
                                        {timeSince(new Date(rec.pubDate.split(" ").join("T") + "Z"))}
                                    </span>
                                </div>
                            )
                        }
                    )}
                    <div className="extended-show-more-news">
                        {News[0].data.results.slice(5).map(rec => {
                            return (
                                <div key={hashUrl(rec.link) * 3} className={`coffee-news-list-div`}>
                                    <li key={hashUrl(rec.link) * 2} className="coffee-chat-news-li">
                                        <a key={hashUrl(rec.link)} href="#" className="a-tag-news-li-el">                                    
                                            {rec.title.length <= 35 ? rec.title : rec.title.slice(0, 35)[34] === " " ? rec.title.slice(0, 34) + "..." : rec.title.slice(0, 34) + "..."} {rec.id}
                                        </a>
                                    </li>
                                    <span key={rec.link} className="text-information-link">
                                        {timeSince(new Date(rec.pubDate.split(" ").join("T") + "Z"))}
                                    </span>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <button className="show-more-button" onClick={onClickRightMainNews}>
                        Show more
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fillRule="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                            <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                        </svg>
                    </button>
                </ul>
            </div>
        </div>
    )
}