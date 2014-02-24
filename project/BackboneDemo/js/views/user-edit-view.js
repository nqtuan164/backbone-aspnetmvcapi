
define([
    'jquery',
	'underscore',
 	'backbone',
    'models/user',
 	'text!templates/user-edit-template.html'
], function ($, _, Backbone, User, UserEditTemplate) {
    var UserEdit = Backbone.View.extend({
        el: '.page',
        render: function (options) {
            //console.log(UserEditTemplate);
            if (options.id) {
                var that = this;
                var user = new User({ id: options.id });
                user.fetch({
                    success: function (user) {
                        console.log(user.toJSON());
                        var template = _.template(UserEditTemplate, { user: user.toJSON() });
                        that.$el.html(template);
                    }
                });
            } else {
                var compile = _.template(UserEditTemplate, { user: null });
                this.$el.html(compile);
            }
        },
        events: {
            'click #edit-user-submit': 'saveUser'
        },
        saveUser: function () {
            var data = $('.edit-form').serializeObject();
            //var data = $('.edit-form').serialize();
            console.log(data);
            var user = new User({ id: data.id });

            user.save(data, {
                success: function () {
                    Backbone.history.navigate('', { trigger: true });
                }
            });

            return false;
        }
    });

    return UserEdit;
});
