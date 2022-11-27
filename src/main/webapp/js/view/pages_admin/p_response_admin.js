import {render_main_admin_3} from './p_main_3_admin.js';
import {render_main_admin_2} from './p_main_2_admin.js';
import {render_main_admin_1} from './p_main_1_admin.js';
import {render_sign_in} from '../pages_public/p_sign_in.js';
import {app_id} from './p_main_3_admin.js';
import {add_comment_admin, Application} from "../../model/appl_model.js";


async function comment_admin() {
    let a = app_id();
    let inp_comment = document.getElementById("comment_in").value;
    let arr = a.split(" ")
        let application_ = {
            id: arr[0],
            admin_comment: inp_comment,
        };
        let application = new Application();
        application.set(application_);
        let dat = await add_comment_admin(application);
        if (dat.status === 200)
            render_main_admin_3();
        else if (dat.status === 404)
            render_sign_in();
}

function _render() {
    let page = document.querySelector("body");
    page.innerHTML = "<div class=\"main_2\">\n" +
        "    <div>\n" +
        "        <div class=\"menu\">\n" +
        "            <img class=\"logo_2\" src=\"logo_.png\" width=\"262,5\" height=\"165\" alt=\"\">\n" +
        "            <nav class=\"nav_1\">\n" +
        "                <a id=\"main_1\">Home</a>\n" +
        "                <a id=\"main_2\">User Management</a>\n" +
        "                <a id=\"main_3\">Application Management</a>\n" +
        "                <div id=\"indicator2\"></div>\n" +
        "            </nav>\n" +
        "            <h3>Hello, <span>" + localStorage.getItem("login") + "</span></h3>\n" +
        "            <a id=\"exit\"><img class=\"logo_2\" src=\"exit.png\" width=\"25\" height=\"25\" style=\"margin-left: 35px; margin-top: -30px\" alt=\"\"></a>\n" +
        "        </div>\n" +
        "        <h1><span>Response</span> to <span>the</span> user</h1>\n" +
        "    </div>\n" +
        "    <br>\n" +
        "    <h2 class=\"h2_\">Enter <span>the</span> answer</h2>\n" +
        "    <textarea id= \"comment_in\" class=\"textarea response\" placeholder=\"Enter a message...\"></textarea>\n" +
        "    <button id=\"ok_\" class=\"ok delete\">Ok</button>\n" +
        "</div>"

    let bt_exit = document.getElementById("exit");
    let bt_main_1 = document.getElementById("main_1");
    let bt_main_2 = document.getElementById("main_2");
    let bt_main_3 = document.getElementById("main_3");
    let bt_ok = document.getElementById("ok_");

    bt_exit.addEventListener("click", render_sign_in);
    bt_main_1.addEventListener("click", render_main_admin_1);
    bt_main_2.addEventListener("click", render_main_admin_2);
    bt_main_3.addEventListener("click", render_main_admin_3);
    bt_ok.addEventListener("click", comment_admin);
}

export function render_response_admin(){
    _render();
}