import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import classes from './SignUp.module.css'
import Image from '../../../../assets/images/form1.jpg'
import {userActions} from "../../../../store/action/user/auth"
import Loader from "../../../UI/Loader/Loader"

const SignUp = props => {

    const [user, setUser] = useState({
        // firstName: '',
        username: '',
        email: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const registering = useSelector(state => state.signup.registering)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.logout())
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)
        if (user.username && user.email && user.password) {
            dispatch(userActions.register(user))
        }
    }

    return (
        <section className={classes.SignupContainer}>
            <div className={classes.ImgBox}>
                <img src={Image} alt=""/>
            </div>
            <div className={classes.ContentBox}>
                <div className={classes.FormBox}>
                    <h2>Rejestracja</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.InputBox}>
                            <span>Login</span>
                            <input type="text" name="username" value={user.username} onChange={handleChange}/>
                            {
                                submitted && !user.username &&
                                <div className={classes.Invalid}>Login jest wymagany</div>
                            }
                        </div>
                        <div className={classes.InputBox}>
                            <span>E-Mail</span>
                            <input type="text" name="email" value={user.email} onChange={handleChange}/>
                            {
                                submitted && !user.email &&
                                <div className={classes.Invalid}>E-Mail jest wymagany</div>
                            }
                        </div>
                        <div className={classes.InputBox}>
                            <span>Hasło</span>
                            <input type="password" name="password" value={user.password} onChange={handleChange}/>
                            {
                                submitted && !user.password &&
                                <div className={classes.Invalid}>Hasło jest wymagane</div>
                            }
                        </div>
                        <div className={classes.InputBox}>
                            <span>Powtórz hasło</span>
                            <input type="password" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <button type="submit" value="Zarejestruj" name="">
                                Zarejestruj
                                {registering && <Loader/>}
                            </button>
                        </div>
                        <div className={classes.InputBox}>
                            <p>Masz już konto? <Link to="/login" className={classes.Link}>Zaloguj się</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp
