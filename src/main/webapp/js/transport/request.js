function request(data, method, url) {

    if(method === "POST") {
        return new Promise((resolve) => {
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "LOGIN": localStorage.getItem("login"),
                    "TOKEN": localStorage.getItem("token")
                },
                body: JSON.stringify(data)
            })
                .then(async (response) => {
                    if (response.status === 200) {
                        return {
                            status: 200,
                            res: await response.json()
                        }
                    } else if (response.status === 400) {
                        return {
                            status: 404,
                        }
                    }
                    else if (response.status === 404) {
                        return {
                            status: 404,
                        }
                    }
                })
                .then((data) => {
                    resolve(data);
                });
        });
    }

    else if(method === "DELETE") {
        return new Promise((resolve) => {
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "LOGIN": localStorage.getItem("login"),
                    "TOKEN": localStorage.getItem("token"),
                    "ARR": data
                }
            })
                .then(async (response) => {
                    if (response.status === 404) {
                        return {
                            status: 404,
                        }
                    } else if (response.status === 200) {
                        return {
                            status: 200,
                        }
                    }
                })
                .then((data) => {
                    resolve(data);
                });
        });
    }

    else if(method === "GET") {
        return new Promise((resolve) => {
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "LOGIN": localStorage.getItem("login"),
                    "TOKEN": localStorage.getItem("token"),
                }
            })
                .then(async (response) => {
                    if (response.status === 404) {
                        return {
                            status: 404,
                        }
                    } else if (response.status === 200) {
                        return {
                            status: 200,
                            res: await response.json()
                        }
                    }
                })
                .then((data) => {
                    resolve(data);
                });
        });
    }
}

export async function requestAddApl(apl) {
    return await request(apl, "POST", "api/applications");
}

export async function requestTable(del) {
    return await request(del, "GET", "api/applications/user");
}

export async function requestDel(arrr) {
    return await request(arrr, "DELETE", "api/applications/user/application");
}

export async function requestAuth(user) {
    return await request(user, "POST", "api/users/user");
}

export async function requestReg(user) {
    return await request(user, "POST", "api/users");
}