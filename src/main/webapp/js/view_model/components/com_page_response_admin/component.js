import template from './template.js'
import {Application} from "../../../model/appl_model.js";
import {IdFactory_for_admin} from "../domain/service.js";
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

class ComPageRespAdmin extends HTMLElement {

    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'closed' });
        this._a = '';
        let id = IdFactory_for_admin.createInstance();
        id.subscribe(this._listener.bind(this));
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

    set a(value) {
        this._a = value;
    }
    get a() {
        return this._a;
    }

    _listener(state) {
        console.log(state);
        this.a = state;
    }

    async comment_admin() {
        let b = this.a;
        console.log(this.a);
        let inp_comment = this._root.querySelector("#comment_in").value;
        let arr = b.split(" ")
        let application_ = {
            id: arr[0],
            admin_comment: inp_comment,
        };
        let application = new Application();
        application.set(application_);
        let dat = await application.add_comment_admin(application);
        if (dat.status === 200)
            router.go('p_3_admin');
        else if (dat.status === 404)
            router.go('p_sign_in');
    }

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        let bt_ok = this._root.querySelector("#ok_");

        bt_ok.addEventListener("click", this.comment_admin.bind(this));
    }
}

customElements.define('com-p-resp-admin', ComPageRespAdmin);
