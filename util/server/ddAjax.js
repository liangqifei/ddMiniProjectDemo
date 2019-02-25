function ddRequest(method = "GET", url, data, onComplete) {
  return new Promise((resolve, reject) => {
    dd.httpRequest({
      url: url,
      method: method,
      data: data,
      dataType: 'json',
      success: function (res) {
        resolve(res.data)
      },
      fail: function (res) {
        reject(res)
      },
      complete: function (res) {
        if (onComplete && typeof onComplete == "function") {
          onComplete(res)
        }
      }
    });
  })
}

/**
 * get请求，传参数
 * @param {*} url 
 * @param {*} data 
 * @param {*} onSuccess 
 * @param {*} onComplete 
 */
export function getRequest(url = "", data = {}, onSuccess, onComplete) {
  return ddRequest("GET", url, data, onComplete).
    then(res => {
      if (onSuccess && typeof onSuccess == "function") {
        onSuccess(res)
      }
    })
    .catch(ex => {
      console.log(ex)
    })
}
/**
 * get请求方式2 传对象
 * {
      url:activityUrl, 
      data:{ pageNum: 1},
      onSuccess:(res)=>{
        console.log(res)
      },
      onComplete:()=>{

      }
    }
 */
export function getRequest2(fetachObj) {
  let configObj = {
    url: "",
    data: {},
    onSuccess: () => {
      console.log(1)
    },
    onComplete: () => {
      console.log(2)
    }
  }
  configObj=Object.assign(configObj,fetachObj)
  console.log(configObj)
  return ddRequest("GET", configObj.url, configObj.data, configObj.onComplete).
    then(res => {
      if (configObj.onSuccess && typeof configObj.onSuccess == "function") {
        configObj.onSuccess(res)
      }
    })
    .catch(ex => {
      console.log(ex)
    })
}
export function postRequest(url = "", data = {}, onSuccess, onComplete) {
  return ddRequest("POST", url, data, onComplete).
    then(res => {
      if (onSuccess && typeof onSuccess == "function") {
        onSuccess(res)
      }
    })
    .catch(ex => {
      console.log(ex)
    })
}
/**
 * 
 * @param {*} fetachObj 
 * @example 
 * {
      url:activityUrl, 
      data:{ pageNum: 1},
      onSuccess:(res)=>{
        console.log(res)
      },
      onComplete:()=>{

      }
    }
 */
export function postRequest2(fetachObj) {
  let configObj = {
    url: "",
    data: {},
    onSuccess: () => {
      console.log(1)
    },
    onComplete: () => {
      console.log(2)
    }
  }
  configObj=Object.assign(configObj,fetachObj)
  console.log(configObj)
  return ddRequest("GET", configObj.url, configObj.data, configObj.onComplete).
    then(res => {
      if (configObj.onSuccess && typeof configObj.onSuccess == "function") {
        configObj.onSuccess(res)
      }
    })
    .catch(ex => {
      console.log(ex)
    })
}