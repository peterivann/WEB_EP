function request(data, method, url, callback){

    var xhr = new XMLHttpRequest();

    var flagAsync = true;
    var body = JSON.stringify(data)
    xhr.open(method, url, flagAsync);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.setRequestHeader("LOGIN", localStorage.getItem("login"));
    xhr.setRequestHeader("TOKEN", localStorage.getItem("token"));

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(xhr.responseText != "No") {
                var res = JSON.parse(xhr.responseText);
                callback(res);
            }
            else {
                p_sign_in();
            }
        }
    };
    xhr.send(body);
}