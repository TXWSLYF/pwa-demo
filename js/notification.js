window.addEventListener('load', e => {
  return new Promise(function(resolve, reject) {
      var permissionResult = Notification.requestPermission(function(result) {
        // 旧版本
        resolve(result);
      });
      if (permissionResult) {
        // 新版本
        permissionResult.then(resolve, reject);
      }
    })
    .then(function(permissionResult) {
      console.log(permissionResult)
      if (permissionResult !== 'granted') {
        // 用户未授权
      }
    });
})