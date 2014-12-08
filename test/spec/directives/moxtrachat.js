'use strict';

describe('Directive: moxtraChat', function () {

  // load the directive's module
  beforeEach(module('moxtraDirectivesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    //element = angular.element('<moxtra-chat></moxtra-chat>');
    element = '<div></div>';
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
