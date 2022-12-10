import template from './template.js'
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

class ComPageStart extends HTMLElement {

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

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        let bt_sign_in = this._root.querySelector("#sign_in");
        let bt_sign_up = this._root.querySelector("#sign_up");

        bt_sign_in.addEventListener("click", () => router.go('p_sign_in'));
        bt_sign_up.addEventListener("click", () => router.go('p_sign_up'));
    }
}

customElements.define('com-p-start', ComPageStart);