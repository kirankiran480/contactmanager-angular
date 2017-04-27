/**
 * Created by kirangudla on 18/4/17.
 */



/**
 * Created by kirangudla on 18/4/17.
 */

/**
 * Created by kirangudla on 16/4/17.
 */
(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('editContactController', editContactController);

    editContactController.$inject = ['contactsDataService','$state','$filter'];

    function editContactController(contactsDataService,$state,$filter) {
        var ctrlnew = this;
        ctrlnew.contactsData = contactsDataService.getContactsData();

        ctrlnew.newcontactArray = $filter('filter')(ctrlnew.contactsData, {'id': $state.params.id});
        ctrlnew.newcontact = ctrlnew.newcontactArray[0];
       ctrlnew.edit = function(){
           angular.extend( ctrlnew.contactsData,  ctrlnew.newcontact);
            $state.transitionTo('contacts');
        }


    }
})();
