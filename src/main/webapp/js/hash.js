function hash_(){

    var avt = {
        login: login_g,
        pass: pass_g,
        massage: "",
        hash : hash
    }

    request(avt, "POST", "api/hash_u", function (res){
        if (res.massage != "Yes"){
            p_sign_in();
        }
    })
}