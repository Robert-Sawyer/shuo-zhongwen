import React from 'react'
import classes from "./Login.module.css";
import Image from "../../../../assets/images/form1.jpg";

const Login = props => {

    return (
        <section className={classes.Container}>
            <div className={classes.ImgBox}>
                <img src={Image} alt=""/>
            </div>
            <div className={classes.ContentBox}>
                <div className={classes.FormBox}>
                    <h2>Logowanie</h2>
                    <form>
                        <div className={classes.InputBox}>
                            <span>Login</span>
                            <input type="text" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <span>Hasło</span>
                            <input type="password" name=""/>
                        </div>
                        <div className={classes.Remember}>
                            <label><input type="checkbox" name=""/>Zapamiętaj mnie</label>
                        </div>
                        <div className={classes.InputBox}>
                            <input type="submit" value="Zaloguj" name=""/>
                        </div>
                        <div className={classes.InputBox}>
                            <p>Nie masz konta? <a href="#">Zarejestruj się</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
