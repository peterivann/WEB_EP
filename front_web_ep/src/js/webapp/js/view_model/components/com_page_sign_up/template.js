export default function() {
    return `<style>
  @import url(../../../../../../../dist/app.css)
</style> 
<div class="main">
    <div>
        <h1>Sign <span>up</span></h1>
        <div class="sign_up">
        <div class="input-container">
            <input id="login_in" type="text" required=""/>
            <label>Login</label>
        </div>
        <div class="input-container">
            <input id="pass_in" type="password" required=""/>
            <label>Password</label>
        </div>
            <div class="input-container">
                <input id="pass_reg_in" type="password" required=""/>
                <label>Repeat password</label>
            </div>
        </div>
        <h5>If you have an account <a id="a_sign_in">Sign in</a> </h5>
        <h5 id="massage_1" style="color: #ea4c88"></h5>
        <button id ="come_in" class="bt3">Come in</button>
    </div>
</div>
`}