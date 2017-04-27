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
        .controller('newContactController', newContactController);

    newContactController.$inject = ['contactsDataService','$state'];

    function newContactController(contactsDataService,$state) {
        var ctrlnew = this;
        ctrlnew.contactsData = contactsDataService.getContactsData();

        ctrlnew.newcontact = {};
        ctrlnew.addContact = function(){
            ctrlnew.newcontact.id = ctrlnew.contactsData.length+1;
            ctrlnew.newcontact.avatar =  (Math.floor(Math.random() * 15) + 1) + ".jpg" ;
            ctrlnew.contactsData.push(ctrlnew.newcontact);
            $state.transitionTo('contacts');
        }


    }
})();
