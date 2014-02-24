// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        templates: '../templates'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function (App) {
    // The "app" dependency is passed in as "App"

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        options.crossDomain = {
            crossDomain: true
        };
        options.xhrFields = {
            withCredentials: true
        };
        options.url = 'http://localhost:56233/api' + options.url;
        console.log(options);
    });

    App.initialize();

});