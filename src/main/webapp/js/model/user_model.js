var user_model = (function() {

        function User() {
            this.user = {
                login: undefined,
                pass: undefined,
                hash: 0
            };
        }

        User.prototype.get = function() {
            return this.user;
        }

        User.prototype.set = function(user) {
            this.user = user;
        }

        function auto_(callback, user) {
            request(user.get(), "POST", "api/users/user", callback);
        }

        function reg_(callback, user) {
            request(user.get(), "POST", "api/users", callback);
        }

        return {
            auto: auto_,
            reg: reg_,
            user: User
        };
    }
)();