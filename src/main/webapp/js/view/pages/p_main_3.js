import select from './select.js';
import {render_main_1} from './p_main_1.js';
import {render_main_2} from './p_main_2.js';
import {render_sign_in} from './p_sign_in.js';
import {dele} from "../../model/del_model.js";
import {tabl} from "../../model/del_model.js";

let a = '';
export default function mas(b) {
    a = b;
}
        async function table() {
            let dat = await tabl();
            let res = dat.res;
            if (dat.status === 200){
                let n = 0;
                let p_table = document.getElementById("table_app");
                let str = "<tr>\n" +
                    "                    <th class=\"aaa\"></th>\n" +
                    "                    <th>№</th>\n" +
                    "                    <th>Topic</th>\n" +
                    "                    <th>Contact</th>\n" +
                    "                    <th>Comment</th>\n" +
                    "                </tr>\n";
                for (let i = 0; i < res.length; i++) {
                    n = n + 1;
                    str = str + "<tr class=\"applicat\">" +
                        "<th class=\"aaa\">" + res[i].id + "</th>" +
                        "<th>" + n + "</th>" +
                        "<th>" + res[i].topic + "</th>" +
                        "<th>" + res[i].contact + "</th>" +
                        "<th>" + res[i].comment + "</th>" +
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
            let dat = await dele(a);
            if (dat.status === 200)
                render_main_3();
            else if (dat.status === 404)
                render_sign_in();
        }

        function _render() {
            let page = document.querySelector("body");
            page.innerHTML = "<div class=\"main_2\">\n" +
                "    <div>\n" +
                "        <div class=\"menu\">\n" +
                "            <img class=\"logo_2\" src=\"logo_.png\" width=\"262,5\" height=\"165\" alt=\"\">\n" +
                "            <nav class=\"nav\">\n" +
                "                <a id=\"main_1\">Home</a>\n" +
                "                <a id=\"main_2\">Submit an application</a>\n" +
                "                <a id=\"main_3\">My applications</a>\n" +
                "                <div id=\"indicator2\"></div>\n" +
                "            </nav>\n" +
                "            <h3>Hello, <span>" + localStorage.getItem("login") + "</span></h3>\n" +
                "            <a id=\"exit\"><img class=\"logo_2\" src=\"exit.png\" width=\"25\" height=\"25\" style=\"margin-left: 35px; margin-top: -30px\" alt=\"\"></a>\n" +
                "        </div>\n" +
                "            <h1><span>Your</span> applications</h1>\n" +
                "            <table id= \"table_app\" class=\"table_dark\" align=\"center\">\n" +
                "                <tr>\n" +
                "                    <th class=\"aaa\"></th>\n" +
                "                    <th>№</th>\n" +
                "                    <th>Topic</th>\n" +
                "                    <th>Contact</th>\n" +
                "                    <th>Comment</th>\n" +
                "                </tr>\n" +
                "            </table>\n" +
                "        <button id=\"delete_\" class=\"bt3 ok delete\">Delete</button>\n" +
                "    </div>\n" +
                "</div>\n" +
                "<input type=\"text\" class=\"span1\" name=\"pozs\" required>\n"

            table();

            let bt_exit = document.getElementById("exit");
            let bt_del = document.getElementById("delete_");
            let bt_main_1 = document.getElementById("main_1");
            let bt_main_2 = document.getElementById("main_2");
            let bt_main_3 = document.getElementById("main_3");

            bt_exit.addEventListener("click", render_sign_in);
            bt_del.addEventListener("click", del);
            bt_main_1.addEventListener("click", render_main_1);
            bt_main_2.addEventListener("click", render_main_2);
            bt_main_3.addEventListener("click", render_main_3)
        }

        export function render_main_3() {
            _render();
        }
