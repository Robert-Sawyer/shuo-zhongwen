import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import classes from "./Login.module.css"
import Image from "../../../../assets/images/form1.jpg"
import {userActions} from "../../../../store/action/user/auth";
import Loader from "../../../UI/Loader/Loader";

const Login = props => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const { username, password } = inputs
    const [submitted, setSubmitted] = useState(false)
    const loggingIn = useSelector(state => state.auth.loggingIn)
    const dispatch = useDispatch()
    const location = useLocation()

    // useEffect(() => {
    //     dispatch(userActions.logout());
    // }, []);

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(input => ({...input, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)
        if (username && password) {
            const { from } = location.state || {from: {pathname: '/'}}
            dispatch(userActions.login(username, password, from))
        }
    }

    return (
        <section className={classes.Container}>
            <div className={classes.ImgBox}>
                <img src={Image} alt=""/>
            </div>
            <div className={classes.ContentBox}>
                <div className={classes.FormBox}>
                    <h2>Logowanie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.InputBox}>
                            <span>Login</span>
                            <input type="text" name="username" value={username} onChange={handleChange}/>
                            {
                                submitted && !username &&
                                <div className={classes.Invalid}>Login jest wymagany</div>
                            }
                        </div>
                        <div className={classes.InputBox}>
                            <span>Hasło</span>
                            <input type="password" name="password" value={password} onChange={handleChange}/>
                            {
                                submitted && !password &&
                                <div className={classes.Invalid}>Login jest wymagany</div>
                            }
                        </div>
                        <div className={classes.Remember}>
                            <label><input type="checkbox" name=""/>Zapamiętaj mnie</label>
                        </div>
                        <div className={classes.InputBox}>
                            <button type="submit" value="Zaloguj" name="">
                                Zaloguj
                                {loggingIn && <Loader/>}
                            </button>
                        </div>
                        <div className={classes.InputBox}>
                            <p>Nie masz konta? <Link to="/signup" className={classes.Link}>Zarejestruj się</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
