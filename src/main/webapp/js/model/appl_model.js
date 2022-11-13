import {requestAddApl} from '../transport/request.js';

        export class Application{
            constructor() {
                this.application = {
                    poz: 0,
                    topic: undefined,
                    contact: undefined,
                    comment: undefined,
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