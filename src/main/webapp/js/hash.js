function hash_(){

    var avt = {
        login: login_g,
        pass: pass_g,
        massage: "",
        hash : hash
    }

    request(avt, "POST", "api/user/token", function (res){
        if (res.massage != "Yes"){
            p_sign_in();
        }
    })
}