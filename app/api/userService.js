/**
 * Created by Ivana on 10.6.2015..
 */
/**
 * Created by Ivana on 28.5.2015..
 */
define(['appModule'], function (module) {

    'use strict';

    return module.registerFactory('userService', function (apiService) {

        var userService = {

            /**
             * Gets the user with the provided email and returns a promise
             * @param email
             * @returns {*}
             */
            'getUser': function (email) {
                return apiService.request({
                    'method': "GET",
                    'url': "/users/" + email
                })
            },

            /**
             * Gets the list of all users and returns a promise
             * @returns {*}
             */
            'getUsers': function () {
                return apiService.request({
                    'method': "GET",
                    'url': "/users"
                })
            },

            /**
             * Creates a new user from the provided user param
             * and returns a promise
             * @param user
             * @returns {*}
             */
            'createUser': function (user) {
                return apiService.request({
                    'method': "POST",
                    'url': "/users",
                    'data': user
                });
            },

            /**
             * Updates the user with the provided email and user properties
             * and returns a promise
             * @param email
             * @param user
             * @returns {*}
             */
            'updateUser': function (email, user) {
                return apiService.request({
                    method: "PUT",
                    url: "/users/" + email,
                    data: user
                });
            },

            /**
             * Gets all users that match the criteria passed in data
             * and returns a promise
             * @param data
             * @returns {*}
             */
            'searchUsers': function (data) {
                return apiService.request({
                    'method': "GET",
                    'url': "/users",
                    'params':{
                        'search' : data
                    }
                })
            },

            /**
             * Changes the status of the user with the provided email
             * to 'deactivated'
             * @param email
             * @returns {*}
             */
            'deactivateUser': function(email){
                return apiService.request({
                    'method': 'PATCH',
                    'url': '/users/' + email,
                    'data': {
                        'status': 'deactivated'
                    }
                })
            }
        }

        return userService;
    })
});
