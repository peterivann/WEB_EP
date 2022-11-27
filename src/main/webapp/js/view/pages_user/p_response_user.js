import {render_main_3, app_id} from './p_main_3_user.js';
import {render_main_2} from './p_main_2_user.js';
import {render_main_1} from './p_main_1_user.js';
import {render_sign_in} from '../pages_public/p_sign_in.js';
import {get_comment_admin} from "../../model/appl_model.js";


async function comment_admin() {
    let a = app_id();
    let t = document.getElementById("response_");
    let arr = a.split(" ")
    let dat = await get_comment_admin(arr[0]);
    if (dat.status === 200)
        t.textContent = dat.res;
    else if (dat.status === 404)
        render_sign_in();
}

function _render() {
    let page = document.querySelector("body");
    page.innerHTML = "<div class=\"main_2\">\n" +
        "  <div>\n" +
        "    <div class=\"menu\">\n" +
        "      <img class=\"logo_2\" src=\"logo_.png\" width=\"262,5\" height=\"165\" alt=\"\">\n" +
        "      <nav class=\"nav_1\">\n" +
        "        <a id=\"main_1\">Home</a>\n" +
        "        <a id=\"main_2\">Submit an application</a>\n" +
        "        <a id=\"main_3\">My applications</a>\n" +
        "        <div id=\"indicator2\"></div>\n" +
        "      </nav>\n" +
        "      <h3>Hello, <span>" + localStorage.getItem("login") + "</span></h3>\n" +
        "      <a id=\"exit\"><img class=\"logo_2\" src=\"exit.png\" width=\"25\" height=\"25\" style=\"margin-left: 35px; margin-top: -30px\" alt=\"\"></a>\n" +
        "    </div>\n" +
        "    <h1><span>Administrator</span> response</h1>\n" +
        "  </div>\n" +
        "<br>\n" +
        "  <h2 id=\"response_\"></h2>\n" +
        "  <button id=\"back_\" class=\"ok delete\">Back</button>\n" +
        "</div>"

        comment_admin();

    let bt_exit = document.getElementById("exit");
    let bt_main_1 = document.getElementById("main_1");
    let bt_main_2 = document.getElementById("main_2");
    let bt_main_3 = document.getElementById("main_3");
    let bt_back = document.getElementById("back_");

    bt_exit.addEventListener("click", render_sign_in);
    bt_main_1.addEventListener("click", render_main_1);
    bt_main_2.addEventListener("click", render_main_2);
    bt_main_3.addEventListener("click", render_main_3);
    bt_back.addEventListener("click", render_main_3);
}

export function render_response_user(){
    _render();
}