import template from './template.js'
import {dele_app, tabl_app_admin} from "../../../model/del_model.js";
import {IdFactory_for_admin} from "../domain/service.js";
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

let _id;

class ComPageMain3Admin extends HTMLElement {

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

    select(){
        let num = this._root.querySelector('.span1');
        let tds = this._root.querySelectorAll('.applicat');
        let arr_ = [];
        tds.forEach(function (item){
            item.addEventListener("click", function (){
                let tdp = this.querySelectorAll('th');
                let a = tdp.item(0).textContent;
                this.classList.toggle('back');
                let n = 0;
                for (let i = 0; i < arr_.length; i++) {
                    if (a === arr_[i]) {
                        arr_.splice(i, 1);
                        n = 1;
                        break;
                    }
                }
                if (n === 0) {
                    arr_.push(a);
                }
                let b = "";
                for (let i = 0; i < arr_.length; i++) {
                    b = b + arr_[i] + " ";
                }
                num.value = b;
                console.log(num.value);
                _id = b;
            });
        });
    }

    async response_admin() {
        let arr = _id.split(" ")
        let t = this._root.querySelector("#massage");
        if(arr.length === 2){
            await router.go('p_resp_admin');
            console.log(2);
            let id = IdFactory_for_admin.createInstance();
            id.increase(_id);
        }
        else{
            t.textContent = "Select one application";
        }
    }

    async table() {
        let dat = await tabl_app_admin();
        let res = dat.res;
        if (dat.status === 200){
            let n = 0;
            let p_table = this._root.querySelector("#table_app");
            let str = "<tr>\n" +
                "                    <th class=\"aaa\"></th>\n" +
                "                    <th>№</th>\n" +
                "                    <th>User ID</th>\n" +
                "                    <th>Topic</th>\n" +
                "                    <th>Contact</th>\n" +
                "                    <th>Comment</th>\n" +
                "                    <th>Status</th>\n" +
                "                </tr>\n";
            for (let i = 0; i < res.length; i++) {
                n = n + 1;
                str = str + "<tr class=\"applicat\">" +
                    "<th class=\"aaa\">" + res[i].id + "</th>" +
                    "<th>" + n + "</th>" +
                    "<th>" + res[i].id_user + "</th>" +
                    "<th>" + res[i].topic + "</th>" +
                    "<th>" + res[i].contact + "</th>" +
                    "<th>" + res[i].comment + "</th>" +
                    "<th>" + res[i].status + "</th>" +
                    "</tr>";
            }
            p_table.innerHTML = str;

            this.select();

        }
        else if (dat.status === 404){
            router.go('p_sign_in');
        }
    }

    async del() {
        let dat = await dele_app(_id);
        if (dat.status === 200)
            router.go('p_3_admin');
        else if (dat.status === 404)
            router.go('p_sign_in');
    }

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        this.table();

        let bt_del = this._root.querySelector("#delete_");
        let bt_answ = this._root.querySelector("#answer_");

        bt_del.addEventListener("click", this.del);
        bt_answ.addEventListener("click", this.response_admin.bind(this));
    }
}

customElements.define('com-p-main-3-admin', ComPageMain3Admin);
