angular.module('starter.filter', [])

// 格式化新信息数量提示，如果超过99条，就显示为99+
.filter('formatNewMessaageNum', function() {
  return function(input) {
    if(input > 99){
      return '99+';
    }
    return input;
  }
});