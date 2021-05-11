import React, { useCallback, useContext} from 'react'
import { Redirect, withRouter } from 'react-router'
import app from '../firebase/firebase'
import { AuthContext } from '../firebase/Auth'


const Login = ({history}) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            history.push("/login");
            } catch (error) {
                alert(error);
            }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/login" />;
    }
    
    return(
        
    <div class="login-wrap">
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Se connecter</label>
        <div class="login-form" onSubmit={handleLogin}>
            <div class="sign-in-htm">
                <div class="group">
                    <label for="user" class="label">Identifiant</label>
                    <input id="user" type="text" class="input"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Mot de passe</label>
                    <input id="pass" type="password" class="input" data-type="password"/>
                </div>
                <div class="group">
                    <input id="check" type="checkbox" class="check" checked/>
                    <label for="check"><span class="icon"></span>Rester connecté</label>
                </div>
                <div class="group">
                    <input type="submit" class="button" value="Se connecter"/>
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                    <a class="btn-forgot" href="#forgot">Mot de passe oublié ?</a>
                </div>
            </div>
        
            
        </div>
    </div>
</div>
);
};

export default withRouter(Login);