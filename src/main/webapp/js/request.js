function request(data, method, url, callback){

    var xhr = new XMLHttpRequest();

    var flagAsync = true;
    var body = JSON.stringify(data)
    xhr.open(method, url, flagAsync);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhr.responseText);
            callback(res);
        }
    };
    xhr.send(body);
}