import template from './template.js'
import {dele_user, tabl_user} from "../../../model/del_model.js";
import {updateRole, User} from "../../../model/user_model.js";
import {RouterFactory} from "../../router/router.js";

let router = RouterFactory.createInstance();

let _id;

class ComPageMain2Admin extends HTMLElement {

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

    async table() {
        let dat = await tabl_user();
        let res = dat.res;
        if (dat.status === 200){
            let n = 0;
            let p_table = this._root.querySelector("#table_app");
            let str = "<tr>\n" +
                "                    <th class=\"aaa\"></th>\n" +
                "                    <th>№</th>\n" +
                "                    <th>ID</th>\n" +
                "                    <th>Login</th>\n" +
                "                    <th>Role</th>\n" +
                "                </tr>\n";
            for (let i = 0; i < res.length; i++) {
                if(localStorage.getItem("login") !== res[i].login){
                    n = n + 1;
                    str = str + "<tr class=\"applicat\">" +
                        "<th class=\"aaa\">" + res[i].id + "</th>" +
                        "<th>" + n + "</th>" +
                        "<th>" + res[i].id + "</th>" +
                        "<th>" + res[i].login + "</th>" +
                        "<th>" + res[i].role + "</th>" +
                        "</tr>";
                }
            }
            p_table.innerHTML = str;

            this.select();

        }
        else if (dat.status === 404){
            router.go('p_sign_in');
        }
    }

    async update() {
        let arr = _id.split(" ");
        if(arr.length === 2){
            let user_ = {
                id: arr[0],
            };
            let user = new User();
            user.set(user_);

            let dat = await updateRole(user);
            if (dat.status === 200)
                router.go('p_2_admin');
            else if (dat.status === 404)
                router.go('p_sign_in');
        }
        else{
            let t = this._root.querySelector("#massage");
            console.log(t);
            t.textContent = "Select one user";
        }
    }

    async del() {
        let dat = await dele_user(_id);
        if (dat.status === 200)
            router.go('p_2_admin');
        else if (dat.status === 404)
            router.go('p_sign_in');
    }

    _render() {
        if(!this.ownerDocument.defaultView) return;
        this._root.innerHTML = template(this);

        this.table();

        let bt_del = this._root.querySelector("#delete_");
        let bt_upd = this._root.querySelector("#updat_");

        bt_del.addEventListener("click", this.del);
        bt_upd.addEventListener("click", this.update.bind(this));
    }
}

customElements.define('com-p-main-2-admin', ComPageMain2Admin);
