var page_main_3 = (function() {
        function table() {
                del_model.table(function (res){
                    var n = 0;
                    var p_table = document.getElementById("table_app");
                    str = "<tr>\n" +
                        "                    <th class=\"aaa\"></th>\n" +
                        "                    <th>№</th>\n" +
                        "                    <th>Topic</th>\n" +
                        "                    <th>Contact</th>\n" +
                        "                    <th>Comment</th>\n" +
                        "                </tr>\n";
                    for (var i = 0; i < res.arr.length; i++) {
                        n = n + 1;
                        str = str + "<tr class=\"applicat\">" +
                            "<th class=\"aaa\">" + res.arr[i][0] + "</th>" +
                            "<th>" + n + "</th>" +
                            "<th>" + res.arr[i][1] + "</th>" +
                            "<th>" + res.arr[i][2] + "</th>" +
                            "<th>" + res.arr[i][3] + "</th>" +
                            "</tr>";
                    }
                    p_table.innerHTML = str;

                    select();
                })
            }

        function del() {
                del_model.del(function (){
                    page_main_3.render();
                });
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
                "                <div id=\"indicator2\"></div>\n" +
                "            </nav>\n" +
                "            <h3>Hello, <span>"+ localStorage.getItem("login") +"</span></h3>\n" +
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

            var bt_exit = document.getElementById("exit");
            var bt_del = document.getElementById("delete_");
            var bt_main_1 = document.getElementById("main_1");
            var bt_main_2 = document.getElementById("main_2");
            var bt_main_3 = document.getElementById("main_3");

            bt_exit.addEventListener("click", page_sign_in.render);
            bt_del.addEventListener("click", del);
            bt_main_1.addEventListener("click", page_main_1.render);
            bt_main_2.addEventListener("click", page_main_2.render);
            bt_main_3.addEventListener("click", page_main_3.render)
        }

        function _init() {
            _render();
        }

        return {
            render: _init
        };
    }
)();