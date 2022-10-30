var del_model = (function() {
        var table = [];
        var arr = [table];

        function Del() {
            this.del = {
                arr: arr
            };
        }

        Del.prototype.get = function() {
            return this.del;
        }

        Del.prototype.set = function(del) {
            this.del = del;
        }

        var del = new Del();

        function table_ (callback) {
            request(del.get(), "GET", "api/applications/user", callback);
        }

        function del_ (callback) {
            request(arrr, "DELETE", "api/applications/user/application", callback);
        }

        return {
            del: del_,
            table: table_,
        };
    }
)();