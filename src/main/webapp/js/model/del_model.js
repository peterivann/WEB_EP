import {requestDel, requestTable} from "../transport/request.js";

        class Del{
            constructor() {
                this.del = {
                    arr: []
                };
            }
            get() {
                return this.del;
            }

            set(del) {
                this.del = del;
            }
        }

        let delet = new Del();

        export async function tabl() {
            return await requestTable(delet.get())
        }

        export async function dele(arrr) {
            return await requestDel(arrr);
        }