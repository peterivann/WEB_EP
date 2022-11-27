import {render_sign_in} from '../pages_public/p_sign_in.js';
import {render_main_admin_2} from "./p_main_2_admin.js";
import {render_main_admin_1} from "./p_main_1_admin.js";
import {render_response_admin} from "./p_response_admin.js";
import {dele_app, tabl_app_admin} from "../../model/del_model.js";
import select from "../select_app_admin.js";

let a = '';
export default function mas(b) {
    a = b;
}
export function app_id() {
    return a;
}

async function response_admin() {
    let arr = a.split(" ")
    let t = document.getElementById("massage");
    if(arr.length === 2){
        render_response_admin();
    }
    else{
        t.textContent = "Select one application";
    }
}

async function table() {
    let dat = await tabl_app_admin();
    let res = dat.res;
    if (dat.status === 200){
        let n = 0;
        let p_table = document.getElementById("table_app");
        let str = "<tr>\n" +
            "                    <th class=\"aaa\"></th>\n" +
            "                    <th>№</th>\n" +
            "                    <th>User ID</th>\n" +
            "                    <th>Topic</th>\n" +
            "                    <th>Contact</th>\n" +
            "                    <th>Comment</th>\n" +
            "                    <th>Status</th>\n" +
            "                </tr>\n";
        for (let i = 0; i < res.length; i++) {
            n = n + 1;
            str = str + "<tr class=\"applicat\">" +
                "<th class=\"aaa\">" + res[i].id + "</th>" +
                "<th>" + n + "</th>" +
                "<th>" + res[i].id_user + "</th>" +
                "<th>" + res[i].topic + "</th>" +
                "<th>" + res[i].contact + "</th>" +
                "<th>" + res[i].comment + "</th>" +
                "<th>" + res[i].status + "</th>" +
                "</tr>";
        }
        p_table.innerHTML = str;

        select();

    }
    else if (dat.status === 404){
        render_sign_in()
    }
}

async function del() {
    let dat = await dele_app(a);
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
                "        <h1><span>All</span> applications</h1>\n" +
                "        <table id= \"table_app\" class=\"table_dark table_admin\" align=\"center\">\n" +
                "            <tr>\n" +
                "                <th class=\"aaa\"></th>\n" +
                "                <th>№</th>\n" +
                "                <th>User id</th>\n" +
                "                <th>Topic</th>\n" +
                "                <th>Contact</th>\n" +
                "                <th>Comment</th>\n" +
                "                <th>Status</th>\n" +
                "            </tr>\n" +
                "        </table>\n" +
                "                <br>\n" +
                "                <h5 id=\"massage\" style=\"color: #ea4c88\"></h5>\n" +
                "        <div class=\"container-buttons\">\n" +
                "            <button id=\"delete_\" class=\" delete\">Delete</button>\n" +
                "            <button id=\"answer_\" class=\" delete\">Answer</button>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>\n" +
                "<input type=\"text\" class=\"span1\" name=\"pozs\" required>"
            table();


            let bt_exit = document.getElementById("exit");
            let bt_del = document.getElementById("delete_");
            let bt_answ = document.getElementById("answer_");
            let bt_main_1 = document.getElementById("main_1");
            let bt_main_2 = document.getElementById("main_2");
            let bt_main_3 = document.getElementById("main_3");

            bt_exit.addEventListener("click", render_sign_in);
            bt_del.addEventListener("click", del);
            bt_answ.addEventListener("click", response_admin);
            bt_main_1.addEventListener("click", render_main_admin_1);
            bt_main_2.addEventListener("click", render_main_admin_2);
            bt_main_3.addEventListener("click", render_main_admin_3)
        }

        export function render_main_admin_3() {
            _render();
        }
