import React from 'react'



const Register = () => {
    
    return(
        
    <div class="login-wrap">
    <div class="login-html">
        <input id="tab-2" type="radio" name="tab" class="sign-up" checked/><label for="tab-2" class="tab">S'inscrire</label>
        <div class="login-form">
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
                    <input type="submit" class="button" value="S'inscrire"/>
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

export default Register