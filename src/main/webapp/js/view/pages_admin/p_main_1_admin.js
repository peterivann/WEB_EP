import {render_sign_in} from '../pages_public/p_sign_in.js';
import {render_main_admin_2} from "./p_main_2_admin.js";
import {render_main_admin_3} from "./p_main_3_admin.js";

        function _render() {
            let page = document.querySelector("body");
            page.innerHTML = "<div class=\"main_2\">\n" +
                "  <div>\n" +
                "    <div class=\"menu\">\n" +
                "      <img class=\"logo_2\" src=\"logo_.png\" width=\"262,5\" height=\"165\" alt=\"\">\n" +
                "      <nav class=\"nav_1\">\n" +
                "        <a id=\"main_1\">Home</a>\n" +
                "        <a id=\"main_2\">User Management</a>\n" +
                "        <a id=\"main_3\">Application Management</a>\n" +
                "        <div id=\"indicator\"></div>\n" +
                "      </nav>\n" +
                "       <h3>Hello, <span>" + localStorage.getItem("login") + "</span></h3>\n" +
                "      <a id=\"exit\"><img class=\"logo_2\" src=\"exit.png\" width=\"25\" height=\"25\" style=\"margin-left: 35px; margin-top: -30px\" alt=\"\"></a>\n" +
                "    </div>\n" +
                "    <h1><span>Welcome</span> to the <span>admin</span> side</h1>\n" +
                "  </div>\n" +
                "<br>\n" +
                "  <h2>\n" +
                "    At the moment, your <span>options</span> are limited to this <span>list</span> :\n" +
                "  </h2>\n" +
                "<br><br><br><br>\n" +
                "  <h2>\n" +
                "       1) Managing roles\n" +
                "  </h2>\n" +
                "<br>\n" +
                "  <h2>\n" +
                "    2) Application Management\n" +
                "  </h2>\n" +
                "</div>"

            let bt_exit = document.getElementById("exit");
            let bt_main_1 = document.getElementById("main_1");
            let bt_main_2 = document.getElementById("main_2");
            let bt_main_3 = document.getElementById("main_3");

            bt_exit.addEventListener("click", render_sign_in);
            bt_main_1.addEventListener("click", render_main_admin_1);
            bt_main_2.addEventListener("click", render_main_admin_2);
            bt_main_3.addEventListener("click", render_main_admin_3);
        }

        export function render_main_admin_1(){
            _render();
        }