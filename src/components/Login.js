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
            history.push('/login');
            } catch (error) {
                alert(error);
            }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }
    
    return(
        
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Se connecter</label>
            <div class="login-form">
              <div class="sign-in-htm">
                <div class="group">
                  <form onSubmit={handleLogin}>
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
                      <input type="submit" class="button" value="Se connecter"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );  
  };

export default withRouter(Login);