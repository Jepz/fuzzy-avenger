define(['marionette'], function () {
    var MyRouter = Marionette.AppRouter.extend();

    var router = new MyRouter({
        appRoutes: {
            'first': 'first'
        },
        controller: {
            first: function () {
                require(['assets/javascripts/views/test'], function (view) {
                    MyApp.mainRegion.show(view);
                });
            }
        }
    });

    Backbone.history.start();

    return router;
});