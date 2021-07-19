import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [{ user }, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
        console.log(user);
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to Youtube</h1>
                </div>
                <Button type="submit" onClick={signIn} >Sign in With Google</Button>
            </div>
        </div>
    )
}


export default Login