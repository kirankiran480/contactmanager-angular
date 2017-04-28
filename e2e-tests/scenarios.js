'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('angularstrapApp', function() {
    beforeEach(module('angularstrapApp'));

  it('should automatically redirect to /contacts when location hash/fragment is empty', function() {

      browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/contacts");
  });

  describe('new', function() {

    beforeEach(function() {
      browser.get('#/contacts');
    });


    it('should render #/contacts/new when user navigates to #/contacts/new', function() {

      expect(element.all(by.css('[class="page-header"] h2')).first().getText()).
        toMatch(/Create Contact/);
    });

  });

  describe('edit', function() {

    beforeEach(function() {
      browser.get('#/contacts');
    });


    it('should render edit/:id when user navigates to /#/contacts/edit/:id', function() {

        expect(element.all(by.css('[class="page-header"] h2')).first().getText()).
        toMatch(/Edit Contact/);
    });

  });

  //controller testing
    describe('contactsController', function() {
        beforeEach(module('angularstrapApp'));

        var $controller;

        beforeEach(inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        describe('ctrl.delete', function() {
            beforeEach(function(){
                jasmine.addMatchers(customMatcher);
            });
            it('deletes the contact', function() {
                var ctrl = {};
                var controller = $controller('contactsController', {});
                var contact= controller.contactsData[0];
                controller.delete(contact);
                expect(controller.contactsData).not.toContain(contact);
            });
        });
    });

});
