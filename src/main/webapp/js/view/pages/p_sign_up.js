var page_sign_up = (function() {

        function reg_() {
            var inp_login = document.getElementById("login_in").value;
            var inp_pass = document.getElementById("pass_in").value;
            var inp_pass_rep = document.getElementById("pass_reg_in").value;
            if (inp_pass != "" && inp_login != "" && inp_pass_rep != "") {
                if (inp_pass == inp_pass_rep) {

                    var user_ = {
                        login: inp_login,
                        pass: inp_pass,
                        hash : 0
                    }
                    var user = new user_model.user();

                    user.set(user_)

                    user_model.reg(function (res, stat){
                        var t = document.getElementById("massage_1");
                        if (stat == 200) {
                            localStorage.setItem("login", inp_login);
                            localStorage.setItem("token", res.hash);
                            page_main_1.render();
                        } else {
                            document.getElementById("login_in").value = "";
                            document.getElementById("pass_in").value = "";
                            document.getElementById("pass_reg_in").value = "";
                            t.textContent = "Such a user already exists";
                        }
                    }, user)
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

        function _render() {
            page = document.querySelector("body");
            page.innerHTML = "<div class=\"main\">\n" +
                "    <div>\n" +
                "        <h1>Sign <span>up</span></h1>\n" +
                "        <div class=\"sign_up\">\n" +
                "        <div class=\"input-container\">\n" +
                "            <input id=\"login_in\" type=\"text\" required=\"\"/>\n" +
                "            <label>Login</label>\n" +
                "        </div>\n" +
                "        <div class=\"input-container\">\n" +
                "            <input id=\"pass_in\" type=\"password\" required=\"\"/>\n" +
                "            <label>Password</label>\n" +
                "        </div>\n" +
                "            <div class=\"input-container\">\n" +
                "                <input id=\"pass_reg_in\" type=\"password\" required=\"\"/>\n" +
                "                <label>Repeat password</label>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <h5>If you have an account <a id=\"a_sign_in\">Sign in</a> </h5>\n" +
                "        <h5 id=\"massage_1\" style=\"color: #ea4c88\"></h5>\n" +
                "        <button id =\"come_in\" class=\"bt3\">Come in</button>\n" +
                "    </div>\n" +
                "</div>\n"

            var bt_a_sign_in = document.getElementById("a_sign_in");
            var bt_come_in = document.getElementById("come_in");

            bt_a_sign_in.addEventListener("click", page_sign_in.render);
            bt_come_in.addEventListener("click", reg_);
        }

        function _init() {
            _render();
        }

        return {
            render: _init
        };
    }
)();