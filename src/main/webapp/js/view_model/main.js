(async ()=>{await true

    let routerModule = await import('./router/router.js');
    let router = routerModule.RouterFactory.createInstance();

    router.add('p_1_admin'  ,  'page-main-1-admin');
    router.add('p_2_admin'  ,  'page-main-2-admin');
    router.add('p_3_admin'  ,  'page-main-3-admin');
    router.add('p_1_user'  ,  'page-main-1-user');
    router.add('p_2_user'  ,  'page-main-2-user');
    router.add('p_3_user'  ,  'page-main-3-user');
    router.add('p_resp_admin', 'page-resp-admin');
    router.add('p_resp_user', 'page-resp-user');
    router.add('p_sign_in'  ,  'page-sign-in');
    router.add('p_sign_up'  ,  'page-sign-up');
    router.add('p_start'  ,  'page-start');

    router.default('p_start');

    router.go();
})();
