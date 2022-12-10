import template from './template.js'
import './../../components/top-menu/component.js'
import '../../components/com_page_main_2_user/component.js'
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();


class PageMain2User extends HTMLElement {

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

        let top_menu = this._root.querySelector('top-menu');
        top_menu.Setbt1("Home");
        top_menu.Setbt2("Submit an application");
        top_menu.Setbt3("My applications");

        top_menu.Setbt1_listen(() =>router.go('p_1_user'));
        top_menu.Setbt2_listen(() =>router.go('p_2_user'));
        top_menu.Setbt3_listen(() =>router.go('p_3_user'));

        top_menu.Setindicator("indicator1");

        top_menu.refresh();
    }
}

customElements.define('page-main-2-user',PageMain2User);
