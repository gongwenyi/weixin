angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '老大',
    lastText: '呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵',
    lastTime: '17:15',
    newMessageNum: 99,
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '老二',
    lastText: '拜拜',
    lastTime: '13:15',
    newMessageNum: 700,
    face: 'img/max.png'
  }, {
    id: 2,
    name: '老三',
    lastText: '我先睡了',
    lastTime: '11:15',
    newMessageNum: 20,
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '老四',
    lastText: '明天见',
    lastTime: '10:15',
    newMessageNum: 0,
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '老王',
    lastText: '马上就好了，着什么急啊！讨厌',
    lastTime: '08:15',
    newMessageNum: 2,
    face: 'img/mike.png'
  }, {
    id: 5,
    name: '老二',
    lastText: '拜拜',
    lastTime: '13:15',
    newMessageNum: 7,
    face: 'img/max.png'
  }, {
    id: 6,
    name: '老三',
    lastText: '我先睡了',
    lastTime: '11:15',
    newMessageNum: 0,
    face: 'img/adam.jpg'
  }, {
    id: 7,
    name: '老四',
    lastText: '明天见',
    lastTime: '10:15',
    newMessageNum: 0,
    face: 'img/perry.png'
  }, {
    id: 8,
    name: '老王',
    lastText: '马上就好了，着什么急啊！讨厌',
    lastTime: '08:15',
    newMessageNum: 2,
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    index: 'A',
    peoples: [{
      id: 0,
      name: '老大',
      nickname: '小苹果',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/ben.png'
    }, {
      id: 1,
      name: '老二',
      nickname: '小橘子',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/adam.jpg'],
      face: 'img/max.png'
    }]
  }, {
    index: 'B',
    peoples: [{
      id: 2,
      name: '老三',
      nickname: '小黄瓜',
      phone: '13912346666',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: '老四',
      nickname: '小番茄',
      phone: '13912349999',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/perry.png'
    }]
  }, {
    index: 'C',
    peoples: [{
      id: 4,
      name: '老王',
      nickname: '小星星',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'D',
    peoples: [{
      id: 5,
      name: '老王2',
      nickname: '小苹果2',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'F',
    peoples: [{
      id: 6,
      name: '老王3',
      nickname: '小苹果3',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'H',
    peoples: [{
      id: 7,
      name: '老王4',
      nickname: '小苹果4',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'J',
    peoples: [{
      id: 8,
      name: '老王5',
      nickname: '小苹果5',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'L',
    peoples: [{
      id: 9,
      name: '老王6',
      nickname: '小苹果6',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'X',
    peoples: [{
      id: 10,
      name: '老王7',
      nickname: '小苹果7',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }, {
    index: 'Z',
    peoples: [{
      id: 11,
      name: '老王8',
      nickname: '小苹果8',
      phone: '13912348888',
      photos: ['img/ben.png', 'img/max.png'],
      face: 'img/mike.png'
    }]
  }];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // for (var i = 0; i < friends.length; i++) {
      //   if (friends[i].id === parseInt(friendId)) {
      //     return friends[i];
      //   }
      // }
      for (var i=0; i<friends.length; i++) {
        for(var j=0; j<friends[i].peoples.length; j++) {
          if(friends[i].peoples[j].id === parseInt(friendId)) {
            return friends[i].peoples[j];
          }
        }
      }
      return null;
    }
  };
})

.factory('Userinfo', function() {
  var userinfo = {
    face: 'img/mike.png',
    nickname: '老王',
    weixinhao: '未设置',
    address: '春熙路32号',
    sex: '男',
    area: '四川  成都',
    signature: '即使饥肠辘辘，也要努力hold住'
  };
  return {
    all: function() {
      return userinfo;
    }
  }
});
