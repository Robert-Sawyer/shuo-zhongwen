import React from 'react'
import classes from './SignUp.module.css'
import Image from '../../../../assets/images/form1.jpg'

const SignUp = props => {

    return (
        <section className={classes.SignupContainer}>
            <div className={classes.ImgBox}>
                <img src={Image} alt=""/>
            </div>
            <div className={classes.ContentBox}>
                <div className={classes.FormBox}>
                    <h2>Rejestracja</h2>
                    <form>
                        <div className={classes.InputBox}>
                            <span>Login</span>
                            <input type="text" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <span>E-Mail</span>
                            <input type="text" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <span>Hasło</span>
                            <input type="password" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <span>Powtórz hasło</span>
                            <input type="password" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <input type="submit" value="Zarejestruj" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <p>Masz już konto? <a href="/login">Zaloguj się</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp
