import template from './template.js'
import {Application} from "../../../model/appl_model.js";
import {IdFactory_for_user} from "../domain/service.js";
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

class ComPageRespUser extends HTMLElement {

    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'closed' });
        this._a = '';
        let id = IdFactory_for_user.createInstance();
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
        this.comment_admin();
    }

    async comment_admin() {
        let b = this.a;
        console.log(this.a);
        let t = this._root.querySelector("#response_");
        let arr = b.split(" ")
        let application = new Application();
        let dat = await application.get_comment_admin(arr[0]);
        if (dat.status === 200)
            t.textContent = dat.res;
        else if (dat.status === 404)
            router.go('p_sign_in');
    }

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        let bt_back = this._root.querySelector("#back_");

        bt_back.addEventListener("click",() => router.go('p_3_user'));
    }
}

customElements.define('com-p-resp-user', ComPageRespUser);
