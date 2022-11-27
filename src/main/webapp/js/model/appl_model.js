import {requestAddApl, requestAddCommAdmin, requestGetCommAdmin} from '../transport/request.js';

        export class Application{
            constructor() {
                this.application = {
                    id:undefined,
                    poz: 0,
                    topic: undefined,
                    contact: undefined,
                    comment: undefined,
                    status:undefined,
                    admin_comment:undefined,
                };
            }

        get() {
            return this.application;
        }

        set(application) {
            this.application = application;
        }

        }

        export async function add_aplic(application) {
            return await requestAddApl(application.get());
        }

        export async function add_comment_admin(application) {
            return await requestAddCommAdmin(application.get());
        }

        export async function get_comment_admin(id) {
            return await requestGetCommAdmin(id);
        }