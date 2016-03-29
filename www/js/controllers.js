angular.module('starter.controllers', [])

.controller('ChatstabCtrl', function($scope, $rootScope) {
  // 总的新信息提示数量
  $rootScope.badges = {
    totalNewMessage: 0
  }
})

// 微信
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

// 微信--聊天
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

})

// 联系人
.controller('FriendsCtrl', function($scope, Friends, $timeout) {
  $scope.friends = Friends.all();

  // 右侧字母导航
  var indexHref = document.querySelector('.index-href');
  var indexHrefAs = indexHref.children;
  // header头部高度
  var headerHeight = document.querySelector('.bar-header').offsetHeight;
  // footer底部高度
  var footerHeight = document.querySelector('.tab-nav').offsetHeight;

  // 设置右侧字母导航的高度
  function setIndexHrefAsHeight() {
    // 页面可视区的高度
    var clientHeight = document.documentElement.clientHeight;
    // 中间内容区的高度
    var contentHeight = clientHeight - headerHeight - footerHeight;

    for(var i=0; i<indexHrefAs.length; i++) {
      var height = contentHeight / indexHrefAs.length;
      indexHrefAs[i].style.height = height + 'px';
    }
  }
  setIndexHrefAsHeight();
  window.addEventListener('resize', setIndexHrefAsHeight);

  // 点击相应字母，页面跳到对应列表项
  var friendsIndexPs = '';
  $timeout(function(){
    friendsIndexPs = document.querySelectorAll('.friends-index');
  }, 2000);

  for(var i=0; i<indexHrefAs.length; i++) {
    indexHrefAs[i].addEventListener('click', function(e) {
      var index = this.innerHTML;

      for( var j=0; j<friendsIndexPs.length; j++) {
        if(friendsIndexPs[j].innerHTML === index) {
          console.log(friendsIndexPs[j].offsetTop);
        }
      }

    })
  }
})

// 联系人--好友信息
.controller('FriendinfoCtrl', function($scope, $stateParams, Friends, $state) {
  // 通过id获取好友的信息
  $scope.friendinfo = Friends.get($stateParams.peopleId);

})

// 发现
.controller('FindCtrl', function($scope) {
})

// 发现--朋友圈
.controller('FriendscircleCtrl', function($scope, $http) {
  $scope.items = [1, 2, 3];
  $scope.doRefresh = function () {
    /*
    $http.get('/dataJson/friendscircle.json')
      .success(function(data) {
        $scope.items = data;
      })
      .finally(function() {
        // 停止广播ion-refresh
        $scope.$broadcast('scroll.refreshComplete');
      });
    */
    $scope.items = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    $scope.$broadcast('scroll.refreshComplete');
  }
})

// 发现--附近的人
.controller('NearbypeopleCtrl', function($scope) {
  // 百度地图API功能
  var map = new BMap.Map("allmap");    // 创建Map实例

  map.centerAndZoom(new BMap.Point(114.075539, 22.535372), 11);  // 初始化地图,设置中心点坐标和地图级别
  //map.centerAndZoom('深圳', 11);
  map.addControl(new BMap.MapTypeControl());   // 添加地图类型控件
  map.addControl(new BMap.GeolocationControl());  // 定位控件
  map.addControl(new BMap.ScaleControl());  // 比例尺控件
  map.addControl(new BMap.NavigationControl()); // 平移缩放控件
  var marker = new BMap.Marker(new BMap.Point(114.075539, 22.535372));  // 创建标注
  map.addOverlay(marker);               // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
  map.setCurrentCity("深圳");          // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
})

// 我
.controller('AboutmeCtrl', function($scope) {})

// 我-我的信息
.controller('UserinfoCtrl', function($scope, Userinfo, $state) {
  $scope.userinfo = Userinfo.all();
});
