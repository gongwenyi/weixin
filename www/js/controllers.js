angular.module('starter.controllers', [])

.controller('ChatstabCtrl', function($scope, $rootScope) {
  // 总的新信息提示数量
  $rootScope.badges = {
    totalNewMessage: 0
  }
})

.controller('ChatsCtrl', function($scope, $rootScope, Chats, $state, $timeout) {
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
  $scope.goin = function(chat){
    // 500ms后隐藏新信息数量提示
    $timeout(function(){
      // 减掉查看了的信息数量
      $rootScope.badges.totalNewMessage -= chat.newMessageNum;
      chat.newMessageNum = 0;
    }, 500);

  };

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends, $state) {
  $scope.friends = Friends.all();

})

.controller('FriendinfoCtrl', function($scope, $stateParams, Friends, $state) {
  // 通过id获取好友的信息
  $scope.friendinfo = Friends.get($stateParams.peopleId);


})

.controller('FindCtrl', function($scope) {
})

.controller('FriendscircleCtrl', function($scope) {

})

.controller('AboutmeCtrl', function($scope) {})

.controller('UserinfoCtrl', function($scope, Userinfo, $state) {
  $scope.userinfo = Userinfo.all();
});
