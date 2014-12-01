define(['marionette'], function () {
    var MyRouter = Marionette.AppRouter.extend();

    var router = new MyRouter({
        appRoutes: {
            '': 'home',
            'first': 'first'
        },
        controller: {
            home: function () {
                require(['assets/javascripts/views/home'], function (view) {
                    MyApp.mainRegion.show(view);
                });
            },

            first: function () {
                require(['assets/javascripts/views/test'], function (view) {
                    MyApp.mainRegion.show(view);
                });
            }
        }
    });

    Backbone.history.start({ pushState: true });

    return router;
});