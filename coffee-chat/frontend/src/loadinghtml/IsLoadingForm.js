import "./style.css"

export const IsLoadingForm = () => {

    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <img className="loading-image" src={require("../assets/Coffee-Chat.png")} alt="loading-coffee-chat"/>
                <div className="loading-bar">

                </div>
            </div>
        </div>
    )
}