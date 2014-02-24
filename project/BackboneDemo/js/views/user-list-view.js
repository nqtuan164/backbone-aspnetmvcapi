
define([
    'jquery',
	'underscore',
 	'backbone',
    'collections/users',
 	'text!templates/user-list-template.html'
], function ($, _, Backbone, Users, UserListTemplate) {
    var UserList = Backbone.View.extend({
        el: '.page',
        render: function () {
            var users = new Users();
            var that = this;
            users.fetch({
                success: function (users) {
                    console.log(users);
                    var compile = _.template(UserListTemplate, { users: users.models });
                    that.$el.html(compile);
                }
            });
        }
    });

    return UserList;
});
