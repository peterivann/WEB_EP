var page_main_2 = (function() {

        function add_apl() {
            var inp_topic = document.querySelector('input[name="test"]:checked').value;
            var inp_contact = document.getElementById("contact_in").value;
            var inp_comment = document.getElementById("comment_in").value;
            if (inp_topic != "" && inp_contact != "" && inp_comment != "") {

                var application_ = {
                    poz: 0,
                    topic: inp_topic,
                    contact: inp_contact,
                    comment: inp_comment,
                }
                var application = new appl_model.application();

                application.set(application_)

                appl_model.add_apl(function (res){
                    document.querySelector('input[name="test"]:checked').value = "";
                    document.getElementById("contact_in").value = "";
                    document.getElementById("comment_in").value = "";
                }, application)
            }
            else {
                alert("Not all fields were filled in");
            }
        }

        function _render() {
            page = document.querySelector("body");
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
                "            <h3>Hello, <span>"+ localStorage.getItem("login") +"</span></h3>\n" +
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

            var bt_exit = document.getElementById("exit");
            var bt_main_1 = document.getElementById("main_1");
            var bt_main_2 = document.getElementById("main_2");
            var bt_main_3 = document.getElementById("main_3");
            var bt_ok = document.getElementById("okey");

            bt_exit.addEventListener("click", page_sign_in.render);
            bt_main_1.addEventListener("click", page_main_1.render);
            bt_main_2.addEventListener("click", page_main_2.render);
            bt_main_3.addEventListener("click", page_main_3.render);
            bt_ok.addEventListener("click", add_apl);
        }

        function _init() {
            _render();
        }

        return {
            render: _init
        };
    }
)();