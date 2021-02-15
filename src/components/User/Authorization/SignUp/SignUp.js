import React from 'react'
import classes from './SignUp.module.css'
import Image from '../../../../assets/images/form1.jpg'

const SignUp = props => {

    return (
        <section className={classes.Container}>
            <div className={classes.ImgBox}>
                <img src={Image} alt=""/>
            </div>
            <div className={classes.ContentBox}>
                <div className={classes.FormBox}>
                    <h2>Login</h2>
                    <form>
                        <div className={classes.InputBox}>
                            <span>Username</span>
                            <input type="text" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <span>Password</span>
                            <input type="password" name=""/>
                        </div>
                        <div className={classes.Remember}>
                            <label><input type="checkbox" name=""/>Remember me</label>
                        </div>
                        <div className={classes.InputBox}>
                            <input type="submit" value="Sign In" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <p>Don't have a account? <a href="#">Sing Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp
