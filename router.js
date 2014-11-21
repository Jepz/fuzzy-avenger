define(['marionette'], function () {
    var MyRouter = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': 'home',
            'first': 'first'
        },

        home: function () {
            console.log('home');
        },

        first: function () {
            console.log('first');
        }
    });
    window.MyRouter = MyRouter;
    return MyRouter;
});