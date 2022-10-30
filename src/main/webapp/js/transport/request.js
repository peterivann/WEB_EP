function request(data, method, url, callback){

    var xhr = new XMLHttpRequest();
    var flagAsync = true;
    if (method != "DELETE" && method != "GET") {
        var body = JSON.stringify(data)
    }
    xhr.open(method, url, flagAsync);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.setRequestHeader("LOGIN", localStorage.getItem("login"));
    xhr.setRequestHeader("TOKEN", localStorage.getItem("token"));

    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if(xhr.status != 404) {
                if (method != "DELETE") {
                    if(xhr.status != 400) {
                        var res = JSON.parse(xhr.responseText);
                        callback(res, this.status);
                    }
                    else{
                        callback();
                    }
                }
                else {
                    callback();
                }
            }
            else {
                page_sign_in.render()
            }
        }
    };
    if (method == "DELETE"){
        xhr.setRequestHeader("ARR", data);
        xhr.send();
    }
    else if(method == "GET"){
        xhr.send();
    }
    else if(xhr.status == 400){
        xhr.send();
    }
    else {
        xhr.send(body);
    }
}