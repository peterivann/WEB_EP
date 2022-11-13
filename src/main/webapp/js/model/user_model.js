import {requestAuth, requestReg} from "../transport/request.js";

        export class User {
            constructor() {
                this.user = {
                    login: undefined,
                    pass: undefined,
                    hash: 0
                };
            }
            get() {
                return this.user;
            }

            set(user) {
                this.user = user;
            }
        }

        export async function autoris(user) {
            return await requestAuth(user.get());
        }

        export function registr(user) {
            return requestReg(user.get());
        }
