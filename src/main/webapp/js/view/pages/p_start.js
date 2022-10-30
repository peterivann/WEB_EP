var page_start = (function() {

        function _render() {
            page.innerHTML = "<div class=\"main\">\n" +
                "                <div>\n" +
                "                    <img class=\"logo\" src=\"logo_.png\" width=\"350\" height=\"220\" alt=\"\">\n" +
                "                        <h1>Welcome to our <span>workshop</span></h1>\n" +
                "                        <div class=\"buts\">\n" +
                "                            <button id=\"sign_in\" class=\"bt1\">Sign in</button>\n" +
                "                            <button id=\"sign_up\" class=\"bt2\">Sign up</button>\n" +
                "                        </div>\n" +
                "                </div>\n" +
                "            </div>"

            var bt_sign_in = document.getElementById("sign_in");
            var bt_sign_up = document.getElementById("sign_up");

            bt_sign_in.addEventListener("click", page_sign_in.render);
            bt_sign_up.addEventListener("click", page_sign_up.render);
        }

        function _init(_page) {
            page = _page;
            _render();
        }

        return {
            render: _init
        };
    }
)();