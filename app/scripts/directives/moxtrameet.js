'use strict';

/**
 * @ngdoc directive
 * @name moxtraDirectivesApp.directive:moxtraMeet
 * @description
 * # moxtraMeet
 */
angular.module('moxtraDirectivesApp')
  .directive('moxtraMeet', function () {

    return {
      template: '<div ng-attr-id={{containerId}}><button type="button" class="btn btn-primary" ng-click="startJoinConf()">{{text}}</button></div>',
      restrict: 'E',
      scope: {
        sessionInfo: '='
      },
      controller: function($scope, $window) {

        // set up initial variables
        $scope.containerId = 'meet-container';
        $scope.text = 'Meet';
        $scope.frameWidth = '100%';
        $scope.frameHeight ='100%';
        $scope.mode = 'start';

        $scope.clientId = $scope.sessionInfo.clientId;
        $scope.clientSecret = $scope.sessionInfo.clientSecret;
        $scope.timestamp = new Date().getTime();
        $scope.uniqueId = $scope.sessionInfo.userId; //'unique_user_id' - Unique ID of how user is identified in your system
        
        var hash = CryptoJS.HmacSHA256($scope.clientId + $scope.uniqueId + $scope.timestamp, $scope.clientSecret);
        var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        $scope.signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');

        $scope.startJoinConf = function() {
          if ($scope.mode === 'start') {
            $scope.getToken();
          } else if ($scope.mode === 'join') {
            $scope.joinMeet();  
          }
        };

        $scope.getToken = function () {
          var initOptions = {
            uniqueid: $scope.uniqueId,
            firstname: $scope.sessionInfo.firstName,
            lastname: $scope.sessionInfo.lastName,
            timestamp: $scope.timestamp,
            signature: $scope.signature,
            get_accesstoken: function(result) {
                console.log('access_token: ' + result.access_token + ' expires in: ' + result.expires_in);
                $scope.startMeet(result.access_token);
            },
            error: function(result) {
                console.log('error code: ' + result.error_code + ' message: ' + result.error_message);
            }
          };
          Moxtra.setup(initOptions);
        };

        $scope.startMeet = function (accessToken) {
          var meet_options = {
            iframe: true, //To open the meet in the same window within an iFrame.
            // tab: true, //To open the meet in a new browser tab, N/A if iframe option is set to true.
            tagid4iframe: $scope.containerId, //ID of the HTML tag within which the Meet window will show up. Refer https://developer.grouphour.com/moxo/docs-js-sdk/#meet
            iframewidth: $scope.frameWidth,
            iframeheight: $scope.frameHeight,
            extension: { 
                'show_dialogs': { 'meet_invite': true } 
            },
            access_token: accessToken,
            start_meet: function(event) {
                $scope.sessionInfo.id = event.session_key;
                $scope.$apply();
                console.log('Meet Started - session_id: '+event.session_id+'session_key: '+event.session_key);
                //Your application server can upload files to meet using the session_id and session_key
            },
            error: function(event) {
                console.log('error code: ' + event.error_code + ' message: ' + event.error_message);
            }//,
            // end_meet: function(event) {
            //     console.log('Meet Ended');
            // }
          };
          Moxtra.meet(meet_options);
        };

        $scope.joinMeet = function() {
          var options = {
            session_key: $scope.sessionInfo.id,
            user_name: $scope.sessionInfo.firstName + ' ' + $scope.sessionInfo.lastName,
            iframe: true,
            tagid4iframe: $scope.containerId,
            iframewidth: $scope.frameWidth,
            iframeheight: $scope.frameHeight,
            extension: { 'show_dialogs': { 'meet_invite': true } },
            // start_meet: function(event) {
            //     //alert("session key: " + event.session_key + " session id: " + event.session_id);
            // },
            error: function(event) {
                $window.alert('error code: ' + event.error_code + ' message: ' + event.error_message);
            } //,
            // end_meet: function(event) {
            //     //alert("Meet ended by host event");
            // },
            // exit_meet: function(event) {
            //     //alert("Meet exit event");
            // }
          };
          Moxtra.joinMeet(options);
        };

      },
      link: function postLink(scope, element, attrs) {
        scope.containerId = attrs.containerId;
        scope.text = attrs.text;
        scope.frameWidth = attrs.frameWidth;
        scope.frameHeight = attrs.frameHeight;
        if (!angular.isUndefined(attrs.mode)) {
          scope.mode = attrs.mode;
        }
        //element.text('this is the moxtraMeet directive');
      }
    };
  });
