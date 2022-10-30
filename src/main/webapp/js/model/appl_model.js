var appl_model = (function() {

        function Application() {
            this.application = {
                poz: 0,
                topic: undefined,
                contact: undefined,
                comment: undefined,
            };
        }

        Application.prototype.get = function() {
            return this.application;
        }

        Application.prototype.set = function(application) {
            this.application = application;
        }

        function add_apl_(callback, application) {
            request(application.get(), "POST", "api/applications", callback, function() {page_sign_in.render()});
        }

        return {
            add_apl: add_apl_,
            application: Application
        };
    }
)();