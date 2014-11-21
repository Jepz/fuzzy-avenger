define(['marionette'], function () {
    var myTemplate = _.template("<div>foo2</div>");
    var HomeView = Backbone.Marionette.LayoutView.extend({
        template: myTemplate,

        initalize: function () {
            console.log('a view');
        }
    });

    return new HomeView;
});