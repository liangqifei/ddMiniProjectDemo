/**
 * @param {*跳转地址值 string} url 必填
 * @param {*跳转参数 json} params 选填
 * @param {*成功回调 func} successBack  选填
 * @param {*失败回调 func} failBack  选填
 * @param {*每次都回发生的回调 func} completeBack  选填
 */
export function Dd_navigateTo(url, params={}, successBack, failBack, completeBack) {
  let str = "?";
  for (var key in params) {
    str = str + "&" + key + "=" + params[key]
  };
  dd.navigateTo({
    url: url+str,
    success: function (res) {
      if (successBack && typeof successBack == "Function") {
        successBack(res)
      }
    },
    fail: function (err) {
      if (failBack && typeof failBack == "function") {
        failBack(err);
      }
    },
    complete: function (res) {
      if (completeBack && typeof completeBack == "function") {
        completeBack(res);
      }
    }

  })
}
// export function pageFilter(pageObj,){
//   pageObj.pageNavigateTo=Dd_navigateTo;
//   return pageObj;
// }
/**
 * @description参数是否是其中之一
 * @param {*string} value
 * @param {*array} validList
 * @returns {*boolean}
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value == validList[i]) {
      return true;
    }
  }
  return false;
}
/**
 *@description 文件大小进行格式化,
 * @param {*文件大小 B} filesize
 * @returns {*文件大小格式化} 如果小于1kb返回<1KB,如果小于1M,向下取整，返回整数KB,如果大于1M返回两位小数，类似1.31M
 */
export function FormatSize(fileSize) {
  if (fileSize < 1024) {
    return "<1KB";
  } else {
    var arrUnit = ["B", "KB", "M", "G", "T", "P"];
    var powerIndex = Math.log2(fileSize) / 10;
    powerIndex = Math.floor(powerIndex);
    // index should in the unit range!
    var len = arrUnit.length;
    powerIndex = powerIndex < len ? powerIndex : len - 1;
    var sizeFormatted = fileSize / Math.pow(2, powerIndex * 10);
    if (powerIndex == "1") {
      sizeFormatted = Math.floor(sizeFormatted);
    } else {
      sizeFormatted = sizeFormatted.toFixed(2);
    }

    return sizeFormatted + " " + arrUnit[powerIndex];
  }
}
/**
 * js数组排序 支持数字和字符串
 * @param params
 * @param arrObj   obj     必填  数组对象
 * @param keyName  string  必填  要排序的属性名称
 * @param type     int     选填  默认type:0 正顺  type:1反顺
 * @description
 *  使用示例：
      var temp = [
        {"name":"zjf","score":50,"age":10},
        {"name":"lyy","score":90,"age":5},
        {"name":"zzx","score":90,"age":12}
      ];
      //根据age排序
      var temp1 = arrItemSort(temp,"age",1);
 */
export function arrItemSort(arrObj, keyName, type = 0, isDate = 0) {
  //这里如果 直接等于arrObj，相当于只是对对象的引用，改变排序会同时影响原有对象的排序，而通过arrObj.slice(0)，
  //表示把对象复制给另一个对象，两者间互不影响
  if (!arrObj) {
    return [];
  }
  var tempArrObj = arrObj.slice(0);
  var compare = function (keyName, type) {
    return function (obj1, obj2) {
      var val1 = obj1[keyName];
      var val2 = obj2[keyName];
      if (isDate) {
        val1 = new Date(obj1[keyName]).getTime();
        val2 = new Date(obj2[keyName]).getTime();
      }
      if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
        val1 = Number(val1);
        val2 = Number(val2);
      }
      //如果值为空的，放在最后
      if (val1 == null && val2 == null) {
        return 0;
      } else if (val1 == null && val2 != null) {
        return type == 1 ? -1 : 1;
      } else if (val2 == null && val1 != null) {
        return type == 1 ? 1 : -1;
      }
      //排序
      if (val1 < val2) {
        return type == 1 ? 1 : -1;
      } else if (val1 > val2) {
        return type == 1 ? -1 : 1;
      } else {
        return 0;
      }
    };
  };
  return tempArrObj.sort(compare(keyName, type));
}