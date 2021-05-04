import React from 'react'



const Login = () => {
    
    return(
        
    <div class="login-wrap">
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Se connecter</label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">S'inscrire</label>
        <div class="login-form">
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
                    <input type="submit" class="button" value="Sign In"/>
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                    <a class="btn-forgot" href="#forgot">Mot de passee oublié ?</a>
                </div>
            </div>
            <div class="sign-up-htm">
                <div class="group">
                    <label for="user" class="label">Identifiant</label>
                    <input id="user" type="text" class="input"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Mot de passe</label>
                    <input id="pass" type="password" class="input" data-type="password"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Confirmation du mot de passe</label>
                    <input id="pass" type="password" class="input" data-type="password"/>
                </div>
                <div class="group">
                    <label for="pass" class="label">Adresse Email</label>
                    <input id="pass" type="text" class="input"/>
                </div>
                <div class="group">
                    <input type="submit" class="button" value="Sign Up"/>
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                    <label for="tab-1">Déjà membres ?</label>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Login