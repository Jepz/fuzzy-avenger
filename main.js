require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        marionette: 'libs/backbone.marionette',
        json2: 'libs/json2'
    }
});

define(['jquery', 'underscore', 'backbone', 'marionette'], function () {
    var MyApp = new Backbone.Marionette.Application();

    MyApp.addInitializer(function () {
        require(['router'], function (router) {
            MyApp.AppRouter = router;
            Backbone.history.start();
        });

        require(['assets/javascripts/views/home'], function (view) {
            MyApp.mainRegion.show(view);
        });
    });

    MyApp.addRegions({
        mainRegion: '#content'
    });

    MyApp.start();
    window.MyApp = MyApp;
});