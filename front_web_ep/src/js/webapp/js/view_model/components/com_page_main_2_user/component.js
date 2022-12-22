import template from './template.js'
import {Application} from "../../../model/appl_model.js";
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

class ComPageMain2User extends HTMLElement {

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

    async add_apl() {
        let inp_topic = this._root.querySelector('input[name="test"]:checked').value;
        let inp_contact = this._root.querySelector("#contact_in").value;
        let inp_comment = this._root.querySelector("#comment_in").value;
        if (inp_topic !== "" && inp_contact !== "" && inp_comment !== "") {

            let application_ = {
                poz: 0,
                topic: inp_topic,
                contact: inp_contact,
                comment: inp_comment,
            };
            let application = new Application();

            application.set(application_)

            let dat = await application.add_aplic(application);

            if (dat.status === 200) {
                this._root.querySelector('input[name="test"]:checked').value = "";
                this._root.querySelector("#contact_in").value = "";
                this._root.querySelector("#comment_in").value = "";
            } else if (dat.status === 404) {
                router.go('p_sign_in');
            }

        } else {
            alert("Not all fields were filled in");
        }
    }

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        let bt_ok = this._root.querySelector("#okey");

        bt_ok.addEventListener("click", this.add_apl.bind(this));
    }
}

customElements.define('com-p-main-2-user', ComPageMain2User);
