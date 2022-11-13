import {render_sign_up} from './p_sign_up.js';
import {render_main_1} from "./p_main_1.js";
import {User} from "../../model/user_model.js";
import {autoris} from "../../model/user_model.js";

        async function auto_() {
            let inp_login = document.getElementById("login_in").value;
            let inp_pass = document.getElementById("pass_in").value;
            if (inp_pass !== "" && inp_login !== "") {

                let user_ = {
                    login: inp_login,
                    pass: inp_pass,
                    hash: 0
                };
                let user = new User();

                user.set(user_);

                let dat = await autoris(user);
                let t = document.getElementById("massage_1");
                if (dat.status === 200) {
                    localStorage.setItem("login", inp_login);
                    localStorage.setItem("token", dat.res.hash);
                    render_main_1();
                } else if (dat.status === 400) {
                    document.getElementById("login_in").value = "";
                    document.getElementById("pass_in").value = "";
                    t.textContent = "User not found";
                }

            } else {
                let t = document.getElementById("massage_1");
                t.textContent = "Not all fields were filled in";
            }
        }

        function _render() {
            let page = document.querySelector("body");
            page.innerHTML = "<div class=\"main\">\n" +
                "    <div>\n" +
                "        <h1>Sign <span>in</span></h1>\n" +
                "        <div class=\"sign_up\">\n" +
                "            <div class=\"input-container\">\n" +
                "                <input id=\"login_in\" type=\"text\" required=\"\"/>\n" +
                "                <label>Login</label>\n" +
                "            </div>\n" +
                "            <div class=\"input-container\">\n" +
                "                <input id=\"pass_in\" type=\"password\" required=\"\"/>\n" +
                "                <label>Password</label>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <h5>If you don't have an account <a id=\"a_sign_up\">Sign up</a> </h5>\n" +
                "        <h5 id=\"massage_1\" style=\"color: #ea4c88\"></h5>\n" +
                "        <button id =\"come_in\" class=\"bt3\">Come in</button>\n" +
                "    </div>\n" +
                "</div>\n"

            let bt_a_sign_up = document.getElementById("a_sign_up");
            let bt_come_in = document.getElementById("come_in");

            bt_a_sign_up.addEventListener("click", render_sign_up);
            bt_come_in.addEventListener("click", auto_);
        }

        export function render_sign_in() {
            _render();
        }