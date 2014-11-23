define(['marionette'], function () {
    var myTemplate = _.template('<div id="test">foo</div>');
    var HomeView = Backbone.Marionette.LayoutView.extend({
        template: myTemplate,

        events: {
            'click #test': 'gotoTest'
        },

        initialize: function () {
            console.log('a view');
        },

        gotoTest: function () {
            Backbone.history.navigate('first', {trigger: true});
        }
    });

    return new HomeView;
});