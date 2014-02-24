
define([
    'jquery',
	'underscore',
 	'backbone',
    'models/user',
 	'text!templates/user-delete-template.html'
], function ($, _, Backbone, User, UserDeleteTemplate) {
    var UserList = Backbone.View.extend({
        el: '.page',
        render: function (options) {
            var user = new User({ id: options.id });
            var that = this;
            user.fetch({
                success: function (user) {
                    console.log(user);
                    var compile = _.template(UserDeleteTemplate, { user: user.toJSON() });
                    that.$el.html(compile);
                }
            });
        },
        events: {
            'click #delete-user-submit': 'deleteUser'
        },
        deleteUser: function () {
            var userid = $("#UserId").val();
            var user = new User({ id: userid });
            user.fetch({
                success: function (user) {
                    user.destroy({
                        success: function () {
                            Backbone.history.navigate('', { trigger: true });
                        }
                    });
                }
            });
            return false;
        }
    });

    return UserList;
});
