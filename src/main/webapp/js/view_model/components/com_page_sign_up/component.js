import template from './template.js'
import {User} from "../../../model/user_model.js";
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

class ComPageSignUp extends HTMLElement {

    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this._render();
    }

    disconnectedCallback() {
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(attr, prev, next) {
    }

    async reg_() {
        let t;
        let inp_login = this._root.querySelector("#login_in").value;
        let inp_pass = this._root.querySelector("#pass_in").value;
        let inp_pass_rep = this._root.querySelector("#pass_reg_in").value;
        if (inp_pass !== "" && inp_login !== "" && inp_pass_rep !== "") {
            if (inp_pass === inp_pass_rep) {

                let user_ = {
                    login: inp_login,
                    pass: inp_pass,
                    role: "user",
                    hash: 0
                };
                let user = new User();

                user.set(user_)

                let dat = await user.registr(user);
                let t = this._root.querySelector("#massage_1");
                if (dat.status === 200) {
                    localStorage.setItem("login", inp_login);
                    localStorage.setItem("token", dat.res.hash);
                    localStorage.setItem("role", "user");
                    router.go('p_1_user');
                } else if (dat.status === 404) {
                    this._root.querySelector("#login_in").value = "";
                    this._root.querySelector("#pass_in").value = "";
                    this._root.querySelector("#pass_reg_in").value = "";
                    t.textContent = "Such a user already exists";
                }

            } else {
                t = this._root.querySelector("#massage_1");
                t.textContent = "Passwords don't match";
            }
        } else {
            t = this._root.querySelector("#massage_1");
            t.textContent = "Not all fields were filled in";
        }
    }

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        let bt_a_sign_in = this._root.querySelector("#a_sign_in");
        let bt_come_in = this._root.querySelector("#come_in");

        bt_a_sign_in.addEventListener("click",() => router.go('p_sign_in'));
        bt_come_in.addEventListener("click", this.reg_.bind(this));
    }
}

customElements.define('com-p-sign-up', ComPageSignUp);