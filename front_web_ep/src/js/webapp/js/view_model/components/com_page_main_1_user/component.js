import template from './template.js'

class ComPageMain1User extends HTMLElement {

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
    }
}

customElements.define('com-p-main-1-user', ComPageMain1User);
