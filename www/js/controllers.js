angular.module('starter.controllers', [])

.controller('ChatstabCtrl', function($scope, $rootScope) {
  $rootScope.badges = {
    totalNewMessage: 0
  }
})

.controller('ChatsCtrl', function($scope, $rootScope, Chats, $state, $ionicViewSwitcher, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.chats = Chats.all();

  // 获得总的新信息提示数量
  for(var i=0; i<$scope.chats.length; i++) {
    $rootScope.badges.totalNewMessage += $scope.chats[i].newMessageNum;
  }

  // 点击好友进入聊天界面
  $scope.goin = function(id, chat){
    $state.go('chat-detail', {chatId: id});

    // 500ms后隐藏新信息数量提示
    $timeout(function(){
      // 减掉查看了的信息数量
      $rootScope.badges.totalNewMessage -= chat.newMessageNum;
      chat.newMessageNum = 0;
    }, 500);

  };

  // 添加进入聊天界面的动画
  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    if(toState.name === 'chat-detail'){ // 只有进入chat-detail时才添加动画
      $ionicViewSwitcher.nextDirection('forward');
    }
  });

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('FriendsCtrl', function($scope, Friends, $state, $ionicViewSwitcher) {
  $scope.friends = Friends.all();

  $scope.goin = function(id){
    $state.go('friendinfo', {friendId: id});
  };

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // console.log(event);
    // console.log(toState);
    // console.log(toParams);
    // console.log(fromState);
    // console.log(fromParams);
    if(toState.name === 'friendinfo'){
      $ionicViewSwitcher.nextDirection('forward');
    }
  })
})

.controller('FriendinfoCtrl', function($scope, $stateParams, Friends, $state, $ionicViewSwitcher) {
  // 通过id获取好友的信息
  $scope.friendinfo = Friends.get($stateParams.friendId);

  // 返回上一页
  $scope.goBack = function(){
    $state.go('tab.friends');
  }

  $scope.$on('$stateChangeStart', function(){
    $ionicViewSwitcher.nextDirection('back');
  })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $state,$ionicViewSwitcher) {
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.goBack = function(){
    $state.go('tab.chats');
  }

  $scope.$on('$stateChangeStart', function(){
    $ionicViewSwitcher.nextDirection('back');
  });
})

.controller('FindCtrl', function($scope) {
})

.controller('AboutmeCtrl', function($scope) {})

.controller('UserinfoCtrl', function($scope, Userinfo, $state, $ionicViewSwitcher) {
  $scope.userinfo = Userinfo.all();

  $scope.goBack = function() {
    $state.go('tab.aboutme');
  }

  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    $ionicViewSwitcher.nextDirection('back');
  });
});
