/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('angularstrapApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/contacts');
    // use a state provider for routing

    $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/views/404.html'
        })
        .state('contacts', {

            url: '/contacts',
            templateUrl: 'app/components/viewContacts/views/contactTemplate.html',
            controller: 'contactsController',
            controllerAs: 'ctrl'
        })
        .state('newContact', {

            url: '/contacts/new',
            templateUrl: 'app/shared/views/contactform.html',
            controller: 'newContactController',
            controllerAs: 'ctrlnew'
        })
        .state('editContact', {

            url: '/contacts/edit/:id',
            templateUrl: 'app/shared/views/contactform.html',
            controller: 'editContactController',
            controllerAs: 'ctrlnew'
        });
}]);
