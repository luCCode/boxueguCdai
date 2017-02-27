requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        common:'js/common/common',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',

        // 自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',
        homeLogin:'js/home/login',
        homeRepass:'js/home/repass'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});
//引用公用的js配置
// 所有的页面都需要这两个js，先加载他们。
require(['jquery', 'bootstrap','common']);

/*
 *这里获取页面的pathname，然后对应的加载js。
 * 根据路径引用自己独特的js
 * */
(function(window) {

    var pathname = window.location.pathname;
    switch(pathname) {
        case '/html/user/list.html':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
        case '/html/teacher/add.html':
            require(['teacherAdd']);
            break;
        case '/html/teacher/list.html':
            require(['teacherList']);
            break;
        case '/html/home/login.html':
            require(['homeLogin']);
            break;
        case '/html/home/repass.html':
            require(['homeRepass']);
            break;

    }


})(window);
