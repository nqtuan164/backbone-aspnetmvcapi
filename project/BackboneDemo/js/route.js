/*
 * Router
 */

define([
	'jquery',
	'underscore',
 	'backbone',
    'views/user-list-view',
    'views/user-edit-view',
    'views/user-delete-view'
], function ($, _, Backbone, UserListView, UserEditView, UserDeleteView) {
    var AppRoute = Backbone.Router.extend({
        initialize: function() {
            
        }, 
        routes: {
            '': 'home',
            'new' : 'editUser',
            'edit/:id': 'editUser',
            'delete/:id': 'deleteUser'
        }
    });

    var initialize = function () {
        var router = new AppRoute();

        router.on('route:home', function () {
            var userList = new UserListView();
            userList.render();
            console.log('We are at Home');
        });

        router.on('route:editUser', function (id) {
            console.log("id: " + id);
            var userEdit = new UserEditView();
            userEdit.render({ id: id });
        });

        router.on('route:deleteUser', function (id) {
            console.log("id: " + id);
            var userDelete = new UserDeleteView();
            userDelete.render({ id: id });
        });
        Backbone.history.start();
    }
    return {
        initialize: initialize
    };
})
