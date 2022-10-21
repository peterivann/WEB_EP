var bt_sign_in = document.getElementById("sign_in");
var bt_sign_up = document.getElementById("sign_up");
var login_g;
var pass_g;
var hash;
var arrr;

function p_sign_in(){
    page_sign_in();

    function auto_() {

        var inp_login = document.getElementById("login_in").value;
        var inp_pass = document.getElementById("pass_in").value;
        if (inp_pass != "" && inp_login != "") {
            var auto = {
                login: inp_login,
                pass: inp_pass,
                massage: "",
                hash : 0
            }

            request(auto, "POST", "api/auto", function (res){
                var t = document.getElementById("massage_1");
                if (res.massage == "Yes") {
                    login_g = inp_login;
                    pass_g = inp_pass;
                    hash = res.hash;
                    p_main_1();
                } else {
                    document.getElementById("login_in").value = "";
                    document.getElementById("pass_in").value = "";
                    t.textContent = res.massage;
                }
            })
        }
        else {
            var t = document.getElementById("massage_1");
            t.textContent = "Not all fields were filled in";
        }
    }



    var bt_a_sign_up = document.getElementById("a_sign_up");
    var bt_come_in = document.getElementById("come_in");

    bt_a_sign_up.addEventListener("click", p_sign_up);
    bt_come_in.addEventListener("click", auto_);
}

function p_sign_up(){
    page_sign_up();

    function reg_() {

        var inp_login = document.getElementById("login_in").value;
        var inp_pass = document.getElementById("pass_in").value;
        var inp_pass_rep = document.getElementById("pass_reg_in").value;
        if (inp_pass != "" && inp_login != "" && inp_pass_rep != "") {
            if (inp_pass == inp_pass_rep) {
                var reg = {
                    login: inp_login,
                    pass: inp_pass,
                    massage: "",
                    hash : 0
                }

                request(reg, "POST", "api/reg", function (res){
                    var t = document.getElementById("massage_1");
                    if (res.massage == "Yes") {
                        login_g = inp_login;
                        pass_g = inp_pass;
                        hash = res.hash;
                        p_main_1();
                    } else {
                        document.getElementById("login_in").value = "";
                        document.getElementById("pass_in").value = "";
                        document.getElementById("pass_reg_in").value = "";
                        t.textContent = res.massage;
                    }
                })
            }
            else {
                var t = document.getElementById("massage_1");
                t.textContent = "Passwords don't match";
            }
        }
        else {
            var t = document.getElementById("massage_1");
            t.textContent = "Not all fields were filled in";
        }
    }

    var bt_a_sign_in = document.getElementById("a_sign_in");
    var bt_come_in = document.getElementById("come_in");

    bt_a_sign_in.addEventListener("click", p_sign_in);
    bt_come_in.addEventListener("click", reg_);
}

function p_main_1(){
    page_main_1();

    var bt_exit = document.getElementById("exit");
    var bt_main_1 = document.getElementById("main_1");
    var bt_main_2 = document.getElementById("main_2");
    var bt_main_3 = document.getElementById("main_3");

    bt_exit.addEventListener("click", p_sign_in);
    bt_main_1.addEventListener("click", p_main_1);
    bt_main_2.addEventListener("click", p_main_2);
    bt_main_3.addEventListener("click", p_main_3);
    hash_();
}

function p_main_2(){
    page_main_2();

    function add_ap() {
        var inp_topic = document.querySelector('input[name="test"]:checked').value;
        var inp_contact = document.getElementById("contact_in").value;
        var inp_comment = document.getElementById("comment_in").value;
        if (inp_topic != "" && inp_contact != "" && inp_comment != "") {
            var appl = {
                poz: 0,
                topic: inp_topic,
                contact: inp_contact,
                comment: inp_comment,
                login_user: login_g,
                pass_user: pass_g,
            }
            request(appl, "POST", "api/add_up", function (res){
                document.querySelector('input[name="test"]:checked').value = "";
                document.getElementById("contact_in").value = "";
                document.getElementById("comment_in").value = "";
            })
        }
        else {
            alert("Not all fields were filled in");
        }
    }

    var bt_exit = document.getElementById("exit");
    var bt_main_1 = document.getElementById("main_1");
    var bt_main_2 = document.getElementById("main_2");
    var bt_main_3 = document.getElementById("main_3");
    var bt_ok = document.getElementById("okey");

    bt_exit.addEventListener("click", p_sign_in);
    bt_main_1.addEventListener("click", p_main_1);
    bt_main_2.addEventListener("click", p_main_2);
    bt_main_3.addEventListener("click", p_main_3);
    bt_ok.addEventListener("click", add_ap);
    hash_();
}

function p_main_3(){
    page_main_3();

    function teble() {
        var table = [];
        var arr = [table];
        var appl = {
            arr: arr,
            login_user: login_g,
            pass_user: pass_g,
        }

        request(appl, "POST", "api/table", function (res){
            var n = 0;
            var p_table = document.getElementById("table_app");
            str = "<tr>\n" +
                "                    <th class=\"aaa\"></th>\n" +
                "                    <th>№</th>\n" +
                "                    <th>Topic</th>\n" +
                "                    <th>Contact</th>\n" +
                "                    <th>Comment</th>\n" +
                "                </tr>\n";
            for (var i = 0; i < res.arr.length; i++) {
                n = n + 1;
                str = str + "<tr class=\"applicat\">" +
                    "<th class=\"aaa\">" + res.arr[i][0] + "</th>" +
                    "<th>" + n + "</th>" +
                    "<th>" + res.arr[i][1] + "</th>" +
                    "<th>" + res.arr[i][2] + "</th>" +
                    "<th>" + res.arr[i][3] + "</th>" +
                    "</tr>";
            }
            p_table.innerHTML = str;

            select();
        })
    }

    teble();

    function del_(){
        var delet = {
            element: arrr,
        }
        request(delet, "POST", "api/delet", function (res){
            p_main_3();
        });
    }

    var bt_exit = document.getElementById("exit");
    var bt_del = document.getElementById("delete_");
    var bt_main_1 = document.getElementById("main_1");
    var bt_main_2 = document.getElementById("main_2");
    var bt_main_3 = document.getElementById("main_3");

    bt_exit.addEventListener("click", p_sign_in);
    bt_del.addEventListener("click", del_);
    bt_main_1.addEventListener("click", p_main_1);
    bt_main_2.addEventListener("click", p_main_2);
    bt_main_3.addEventListener("click", p_main_3)
    hash_();
}

bt_sign_in.addEventListener("click", p_sign_in);
bt_sign_up.addEventListener("click", p_sign_up);