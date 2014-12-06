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
    // element = angular.element('<moxtra-meet></moxtra-meet>');
    element = '<div></div>';
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
