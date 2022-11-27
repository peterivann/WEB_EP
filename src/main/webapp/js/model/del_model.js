import {
    requestDelApp,
    requestDelUser,
    requestTableAppAdmin, requestTableAppUser,
    requestTableUser
} from "../transport/request.js";

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

        export async function tabl_user() {
            return await requestTableUser(delet.get())
        }

        export async function dele_user(arrr) {
            return await requestDelUser(arrr);
        }

        export async function tabl_app_admin() {
        return await requestTableAppAdmin(delet.get())
        }

        export async function tabl_app_user() {
        return await requestTableAppUser(delet.get())
        }

        export async function dele_app(arrr) {
        return await requestDelApp(arrr);
        }