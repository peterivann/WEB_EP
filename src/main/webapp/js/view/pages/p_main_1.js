import {render_main_3} from './p_main_3.js';
import {render_main_2} from './p_main_2.js';
import {render_sign_in} from './p_sign_in.js';

        function _render() {
            let page = document.querySelector("body");
            page.innerHTML = "<div class=\"main_2\">\n" +
                "    <div>\n" +
                "        <div class=\"menu\">\n" +
                "            <img class=\"logo_2\" src=\"logo_.png\" width=\"262,5\" height=\"165\" alt=\"\">\n" +
                "            <nav class=\"nav_1\">\n" +
                "                <a id=\"main_1\">Home</a>\n" +
                "                <a id=\"main_2\">Submit an application</a>\n" +
                "                <a id=\"main_3\">My applications</a>\n" +
                "                <div id=\"indicator\"></div>\n" +
                "            </nav>\n" +
                "            <h3>Hello, <span>" + localStorage.getItem("login") + "</span></h3>\n" +
                "            <a id=\"exit\"><img class=\"logo_2\" src=\"exit.png\" width=\"25\" height=\"25\" style=\"margin-left: 35px; margin-top: -30px\" alt=\"\"></a>\n" +
                "        </div>\n" +
                "        <h1>Repair Service (<span>Computer</span> & <span>Mobile Phone</span>)</h1>\n" +
                "    </div>\n" +
                "    <div class=\"info\">\n" +
                "        <div class=\"d_text_1\">\n" +
                "            <h2><span>Computer</span> Maintenance</h2>\n" +
                "            <h3 class=\"text_1\">\n" +
                "                <ul>\n" +
                "                    <li>Prevent and clean up computer viruses and ransomware\n" +
                "                    <li>Solve common computer problems(E-mail transmission reception problems, common printer proble, computer crashes)\n" +
                "                    <li>Set up computer peripherals\n" +
                "                    <li>Providing IT environment and improved recommendations\n" +
                "                    <li>Support for Windows, Linux and Mac platforms daily operation\n" +
                "                    <li>Host authority management\n" +
                "                </ul></h3>\n" +
                "        </div>\n" +
                "        <div class=\"d_text_2\">\n" +
                "            <h2><span>Network</span> Engineering</h2>\n" +
                "            <h3 class=\"text_2\">\n" +
                "                <ul>\n" +
                "                    <li>Computer cabinet, Patch Panel, Switch, UPS,Fiber patch panels and other network equipment installation and management\n" +
                "                    <li>Installation and management of network equipment such as optical fiber distribution frame\n" +
                "                    <li>Provide office network (Cat5e / Cat6 and fiber optic) cabling and fiber optic cabling design and installation\n" +
                "                    <li>PVC,Iron pipes, Metal hose,Rubber hose, Line pipe installation trunking, etc.\n" +
                "                    <li> Electrical Engineering (Electrical Contractor)\n" +
                "                </ul></h3>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"info\">\n" +
                "        <div class=\"d_text_3\">\n" +
                "            <h2><span>Network</span> security and data <span>security</span></h2>\n" +
                "            <h3 class=\"text_1\">\n" +
                "                <ul>\n" +
                "                    <li>VPN solution\n" +
                "                    <li>Firewall installation and setting (Fortigate / SonicWall / Sophos)</ul></h3>\n" +
                "        </div>\n" +
                "        <div class=\"d_text_4\">\n" +
                "            <h2>Setup server <span>deployment</span> and <span>management</span></h2>\n" +
                "            <h3 class=\"text_2\">\n" +
                "                <ul>\n" +
                "                    <li>File sharing server (Windows AD/Linux/NAS) setup and deployment\n" +
                "                    <li>Monitor server health and data backup\n" +
                "                    <li>Computer and server data migration and backup\n" +
                "                </ul></h3>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"contact\">\n" +
                "        <h5>If you have any <span>questions</span>, please email us: <span>peteivan5555@gmaiil.com</span></h5>\n" +
                "    </div>\n" +
                "</div>\n"

            let bt_exit = document.getElementById("exit");
            let bt_main_1 = document.getElementById("main_1");
            let bt_main_2 = document.getElementById("main_2");
            let bt_main_3 = document.getElementById("main_3");

            bt_exit.addEventListener("click", render_sign_in);
            bt_main_1.addEventListener("click", render_main_1);
            bt_main_2.addEventListener("click", render_main_2);
            bt_main_3.addEventListener("click", render_main_3);
        }

        export function render_main_1(){
            _render();
        }