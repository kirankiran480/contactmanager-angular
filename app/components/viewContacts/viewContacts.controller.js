/**
 * Created by kirangudla on 18/4/17.
 */

(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('contactsController', contactsController);

    contactsController.$inject = ['contactsDataService'];

    function contactsController(contactsDataService) {
       var ctrl = this;
        ctrl.contactsData = contactsDataService.getContactsData();

        ctrl.delete = function (contact) {

            var index = ctrl.contactsData.indexOf(contact);
            ctrl.contactsData.splice(index, 1);
            console.log(index);
            angular.forEach(ctrl.contactsData,function (element,index) {
                element.id = index+1;
            })
        }
    }
})();
