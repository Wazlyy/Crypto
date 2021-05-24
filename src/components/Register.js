import React, { useCallback} from 'react'
import { withRouter } from 'react-router'
import app from '../firebase/firebase'



const Register = ({ history}) => {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
            } catch (error) {
                alert(error);
            }
    }, [history]);
    
    return(
        <div class="login-wrap">
            <div class="login-html">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign up</label>
                <div class="login-form">
                    <div class="sign-up-htm">
                        <div class="group">
                            <form onSubmit={handleRegister}>
                                <label class="label">
                                    Email
                                    <input class="input" name="email" type="email" placeholder="Email" />
                                </label>
                                <label class="label">
                                    Password
                                    <input class="input" name="password" type="password" placeholder="Password" />
                                </label>
                                <div class="hr"></div>
                                <div class="group">
                                    <input type="submit" class="button" value="Sign up"/>
                                </div>
                                <a href="/Login" class="button">Already Register ?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
)
}


export default withRouter(Register);