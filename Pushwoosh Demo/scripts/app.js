(function (global) {

    var app = global.app = global.app || {};

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {

        // hide the splash screen as soon as the app is ready. otherwise
        // Cordova will wait 5 very long seconds to do it for you.
        navigator.splashscreen.hide();


        app.application = new kendo.mobile.Application(document.body, {

            // you can change the default transition (slide, zoom or fade)
            transition: 'fade',

            // comment out the following line to get a UI which matches the look
            // and feel of the operating system
            skin: 'flat',
            statusBarStyle: "black-translucent"

        });

    }, false);

})(window);


function scroll() {
    app.scroller().reset();
}


/*(function (global) {
    var app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();

        app.changeSkin = function (e) {
            var mobileSkin = "";

            if (e.sender.element.text() === "Flat") {
                e.sender.element.text("Native");
                mobileSkin = "flat";
            } else {
                e.sender.element.text("Flat");
                mobileSkin = "";
            }

            app.application.skin(mobileSkin);
        };

        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
    }, false);
})(window);*/
