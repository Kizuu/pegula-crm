/**
 * Created by Ivana on 17.5.2015..
 */

define([
        'angular',
        'angular-couch-potato',
        'angular-ui-router',
        'angular-resource',
        'angular-sanitize',
    ]
    , function (ng, couchPotato) {

        'use strict';

        var userModule = ng.module('userModule', [
            'ui.router',
            'ngResource',
            'ngSanitize'
        ]);

        couchPotato.configureApp(userModule);

        userModule.config(function ($stateProvider, $couchPotatoProvider) {

            $stateProvider
                .state('app.newUser', {
                    url: '/user/new',
                    reloadOnSearch: false,
                    onEnter: function () {
                        $('body').addClass("minifiedRight");
                    },
                    onExit: function () {
                        $('body').removeClass("minifiedRight");
                    },
                    views: {
                        "content@app": {
                            controller: 'userNewController',
                            templateUrl: 'components/dashboard/user/userNewView.html',
                            resolve: {
                                deps: $couchPotatoProvider.resolveDependencies([
                                    'api/apiService',
                                    'api/userService',
                                    'components/dashboard/user/userEmailDirective',
                                    'components/dashboard/user/userPasswordDirective'
                                ])}
                            },
                        search: {},
                        navigation: {
                            templateUrl: 'components/dashboard/home/navigation/navigationView.html'
                        }
                    },
                    data: {
                        displayName: 'New User'
                    }
                })

                .state('app.editUser', {
                    url: '/user/edit',
                    reloadOnSearch: false,
                    onEnter: function () {
                        $('body').removeClass("minifiedRight");
                    },
                    views: {
                        "content@app": {
                            controller: 'userEditController',
                            templateUrl: 'components/dashboard/user/userEditView.html',
                            resolve: {
                                deps: $couchPotatoProvider.resolveDependencies([
                                    'api/apiService',
                                    'api/userService'
                                ])
                            }
                        },
                        search: {
                            templateUrl: 'components/dashboard/home/search/searchUsersView.html'
                        },
                        navigation: {
                            templateUrl: 'components/dashboard/home/navigation/navigationView.html'
                        }
                    },
                    data: {
                        displayName: 'Edit User'
                    }

                })



        });

        userModule.run(function ($couchPotato) {
            userModule.lazy = $couchPotato;
        });

        return userModule;
    });