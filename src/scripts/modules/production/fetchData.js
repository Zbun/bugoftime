// import URI from '@scripts/uri.js';
/**
 * 获取数据通用方法
 * @date   2016-11-28
 * @author zhao.liubin@zol.com.cn
 * @param  {[Object]} 传入{target:'需要禁用当前点击按钮时传入当前按钮对象',cmd:'URL',para:{},callback:function(){}}
 * @return {[type]}
 */

import loading from '@scripts/loading.js';
import loadingH5 from '@scripts/mLoading.js';
var server = window.APISERVER || localStorage.APIServer; //临时调试接口地址，本地存储，随时修改
localStorage.APIServer = /\/$/.test(server) ? server : server + '/';

function fetchData(arg) {
  // var api = arg.api;
  var tokenReal = localStorage.token || '';
  var api = (arg.API || arg.api || '').replace(/\s*/g, '');
  var hideLoading = arg.hideLoading; //隐藏加载动画
  var hideTips = arg.hideTips; //隐藏弹窗提示
  var hideOkTips = arg.hideOkTips; //隐藏操作成功的提示
  api = /^\//.test(api) ? api.substr(1) : api; //过滤以'/开头的API'
  if (!api && !arg.url) {
    console.warn('需要传入API地址，如：API:"/p/list/"');
    return;
  }
  var finalServer = localStorage.APIServer || server; //最终请求服务器
  var finalUrl = ''; //最终接口地址
  if (arg.url) {
    finalUrl = arg.url;
  } else {
    finalUrl = finalServer + api;
  }
  var argPara = arg.para || {};
  var para = Object.assign({ token: tokenReal }, argPara);
  var dataList = [];
  var target = arg.target || ''; //防止多次点击时，传当前点击按钮节点
  var async = true;
  if (typeof (arg.async) != void 0) {
    async = arg.async;
  }

  if (target.nodeType) {
    if (target.nodeType == 1) {
      target.classList.add('disabled');
    } else {
      console.warn('需要传入一个节点，检查下哦');
    }
  }
  var l1 = '';
  if (!hideLoading) {
    if (arg.isH5) {
      l1 = loadingH5.show();
    } else {

      l1 = loading.show();
    }
  }
  var fnFinish = function () {
    if (!hideLoading) {
      l1.hide();
    }
    (target.nodeType && target.nodeType == 1) && target.classList.remove('disabled');
  };
  var callback = function (data) {
    fnFinish();
    var d = data;
    let resStatus = d.ResponseID !== undefined ? d.ResponseID : d.Status;
    if (d) {
      switch (parseInt(resStatus)) {
        case 0:
          {
            if (!hideOkTips) {
              if (!hideTips && d.Msg) {
                $showTips(d.Msg);
              }
            }

            //处理服务器返回消息，一般用于登录页面
            if (d.Msg && typeof arg.handlerMessage == 'function') {
              arg.handlerMessage(d.Msg);
            }
            dataList = d.Data;
            //请求成功执行回执操作callback
            if (typeof arg.callback == 'function') {
              if (dataList == undefined) {
                dataList = '';
              }
              arg.callback(dataList);
            } else {
              // console.warn('callback 需要方法类型，请检查');
            }
            break;
          }
        case 1:
          {
            //登录状态失效跳转至登录页
            $showTips(d.Msg, 'error');
            localStorage.token = '';
            localStorage.userName = '';
            localStorage.referrerHash = location.hash;
            setTimeout(function () {
              // top.window.location = '/login.html';
              if (top == window) {
                location.hash = 'login';
                location.reload();
              } else {
                top.window.location = window.G_LOGINHREF || '/#/login';
              }

            }, 200);
            break;
          }
        default:
          {
            if (!hideTips && d.Msg) {
              $showTips(d.Msg, 'error');
            }
            //处理服务器返回消息，一般用于登录页面
            if (d.Msg && typeof arg.handlerMessage == 'function') {
              arg.handlerMessage(d.Msg);
            }
            //请求成功，但可能需要处理错误时回调方法 errorCallbak
            if (typeof arg.errorCallback == 'function') {
              arg.errorCallback(d);
            }
          }
      }
    }
  };

  return $.ajax({
    url: finalUrl,
    type: 'POST',
    beforeSend: function (request) {
      // request.setRequestHeader("ACCESS_TOKEN", tokenReal);
    },
    headers: {
      // ACCESS_TOKEN: tokenReal
    },
    data: para,
    dataType: 'json',
    success: callback,
    complete() {
      // fnFinish();
    },
    error(xhr) {
      fnFinish();
      !hideTips && $showTips('请求出错咯，状态码：' + xhr.status, 'error', '', 3800);
    },
    async: async
  });
}
module.exports = fetchData;