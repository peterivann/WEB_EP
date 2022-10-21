function page_sign_in(){
    var page = document.querySelector("body")
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
}

function page_sign_up(){
    var page = document.querySelector("body")
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
}

function page_main_1(){
    var page = document.querySelector("body")
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
        "            <h3>Hello, <span>User</span></h3>\n" +
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
}

function page_main_2(){
    var page = document.querySelector("body")
    page.innerHTML = "<div class=\"main_2\">\n" +
        "    <div>\n" +
        "        <div class=\"menu\">\n" +
        "            <img class=\"logo_2\" src=\"logo_.png\" width=\"262,5\" height=\"165\" alt=\"\">\n" +
        "            <nav class=\"nav\">\n" +
        "                <a id=\"main_1\">Home</a>\n" +
        "                <a id=\"main_2\">Submit an application</a>\n" +
        "                <a id=\"main_3\">My applications</a>\n" +
        "                <div id=\"indicator1\"></div>\n" +
        "            </nav>\n" +
        "            <h3>Hello, <span>User</span></h3>\n" +
        "            <a id=\"exit\"><img class=\"logo_2\" src=\"exit.png\" width=\"25\" height=\"25\" style=\"margin-left: 35px; margin-top: -30px\" alt=\"\"></a>\n" +
        "        </div>\n" +
        "        <div class=\"apli\">\n" +
        "            <h1><span>Creating</span> an application</h1>\n" +
        "            <div class=\"menu\">\n" +
        "                <div>\n" +
        "                    <h2 class=\"h2_\"><span>Choose</span> a topic</h2>\n" +
        "                    <div class=\"select\" tabindex=\"1\">\n" +
        "                        <input class=\"selectopt\" name=\"test\" type=\"radio\" id=\"opt1\" value='Computer Maintenance' checked>\n" +
        "                        <label for=\"opt1\" class=\"option\">Computer Maintenance</label>\n" +
        "                        <input class=\"selectopt\" name=\"test\" type=\"radio\" id=\"opt2\" value='Network Engineering'>\n" +
        "                        <label for=\"opt2\" class=\"option\">Network Engineering</label>\n" +
        "                        <input class=\"selectopt\" name=\"test\" type=\"radio\" id=\"opt3\" value='Network security and data security'>\n" +
        "                        <label for=\"opt3\" class=\"option\">Network security and data security</label>\n" +
        "                        <input class=\"selectopt\" name=\"test\" type=\"radio\" id=\"opt4\" value='Setup server deployment and management'>\n" +
        "                        <label for=\"opt4\" class=\"option\">Setup server deployment and management</label>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"input_contact\">\n" +
        "                    <h2 class=\"h2_\"><span>Specify</span> contacts</h2>\n" +
        "                    <div class=\"input-container number\">\n" +
        "                        <input id= \"contact_in\" type=\"text\" required=\"\"/>\n" +
        "                        <label>Contact</label>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <h2 class=\"h2_\"><span>Describe</span> the problem</h2>\n" +
        "            <textarea id= \"comment_in\" class=\"textarea\" placeholder=\"Enter a message...\"></textarea>\n" +
        "        </div>\n" +
        "        <button id= \"okey\" class=\"bt3 ok\">ok</button>\n" +
        "    </div>\n" +
        "</div>\n"
}

function page_main_3(){
    var page = document.querySelector("body")
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
        "            <h3>Hello, <span>User</span></h3>\n" +
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
}