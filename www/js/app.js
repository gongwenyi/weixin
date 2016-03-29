// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filter'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // 微信
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  // 微信--聊天
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })
  // 联系人
  .state('tab.friends', {
    url: '/friends',
    views: {
      'tab-friends': {
        templateUrl: 'templates/tab-friends.html',
        controller: 'FriendsCtrl'
      }
    }
  })
  // 联系人--好友信息
  .state('tab.friendinfo', {
    url: '/friends/:peopleId',
    views: {
      'tab-friends': {
        templateUrl: 'templates/friendinfo.html',
        controller: 'FriendinfoCtrl'
      }
    }
  })
  // 发现
  .state('tab.find', {
    url: '/find',
    views: {
      'tab-find': {
        templateUrl: 'templates/tab-find.html',
        controller: 'FindCtrl'
      }
    }
  })
  // 发现--朋友圈
  .state('tab.friendscircle', {
    url: '/find/friendscircle',
    views: {
      'tab-find': {
        templateUrl: 'templates/friendscircle.html',
        controller: 'FriendscircleCtrl'
      }
    }
  })
  // 发现--附近的人
  .state('tab.nearbypeople', {
    url: '/find/nearbypeople',
    views: {
      'tab-find': {
        templateUrl: 'templates/nearbypeople.html',
        controller: 'NearbypeopleCtrl'
      }
    }
  })
  // 我
  .state('tab.aboutme', {
    url: '/aboutme',
    views: {
      'tab-aboutme': {
        templateUrl: 'templates/tab-aboutme.html',
        controller: 'AboutmeCtrl'
      }
    }
  })
  // 我-我的信息
  .state('tab.userinfo', {
    url: '/aboutme/userinfo',
    views: {
      'tab-aboutme': {
        templateUrl: 'templates/userinfo.html',
        controller: 'UserinfoCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/chats');

})

.config(function($ionicConfigProvider) {

  // 修改ion-tabs在android手机位于底部,并且取消顶部的横线
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');
});
