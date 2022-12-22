import template from './template.js'
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

class TopMenu extends HTMLElement {

    _bt1;
    _bt2;
    _bt3;

    _bt1_listen;
    _bt2_listen;
    _bt3_listen;

    _indicator;

    Getindicator() {
        return this._indicator;
    }

    Setindicator(value) {
        this._indicator = value;
    }

    Getbt1_listen() {
        return this._bt1_listen;
    }

    Setbt1_listen(value) {
        this._bt1_listen = value;
    }

    Getbt2_listen() {
        return this._bt2_listen;
    }

    Setbt2_listen(value) {
        this._bt2_listen = value;
    }

    Getbt3_listen() {
        return this._bt3_listen;
    }

    Setbt3_listen(value) {
        this._bt3_listen = value;
    }

    Getbt1() {
        return this._bt1;
    }

    Setbt1(value) {
        this._bt1 = value;
    }

    Getbt2() {
        return this._bt2;
    }

    Setbt2(value) {
        this._bt2 = value;
    }

    Getbt3() {
        return this._bt3;
    }

    Setbt3(value) {
        this._bt3 = value;
    }

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

        let bt_exit = this._root.querySelector("#exit");
        let bt_main_1 = this._root.querySelector("#main_1");
        let bt_main_2 = this._root.querySelector("#main_2");
        let bt_main_3 = this._root.querySelector("#main_3");

        bt_exit.addEventListener("click",() => router.go('p_sign_in'));
        bt_main_1.addEventListener("click", this._bt1_listen);
        bt_main_2.addEventListener("click", this._bt2_listen);
        bt_main_3.addEventListener("click", this._bt3_listen);
    }

    refresh(){
        this._render();
    }
}

customElements.define('top-menu',TopMenu);

