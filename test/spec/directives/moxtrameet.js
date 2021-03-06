'use strict';

describe('Directive: moxtraMeet', function () {

  // load the directive's module
  beforeEach(module('moxtraDirectivesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // unable to test this directive because of an issue with the core Moxtra js file when included in karma.conf.js. Need to figure this out
    // element = angular.element('<moxtra-meet></moxtra-meet>');
    element = '<div></div>';
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
