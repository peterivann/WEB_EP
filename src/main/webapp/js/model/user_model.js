import {requestAuth, requestReg, requestRole} from "../transport/request.js";

        export class User {
            constructor() {
                this.user = {
                    id:undefined,
                    login: undefined,
                    pass: undefined,
                    role:undefined,
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

        export function updateRole(user) {
            return requestRole(user.get());
        }
