import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { LoginForm } from "./LoginForm"

export const Feed = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
    
    if (!currentUser) return <Redirect to="/"/>
    return (
        <div>
            <h1>FEED</h1>
        </div>
    )
}