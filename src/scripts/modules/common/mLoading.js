/**
 * 操作等待旋转提示，非全屏，可加参数
 * 使用说明：require或webpack,单独使用时显示：waiting.show('可先容器字符串')，去除：waiting.hide();
 * 若修改源码时去掉className :local，变为全屏遮罩
 * @author Zhao Liubin
 */

class Waiting {
  constructor(container) {
    container = document.querySelector(container) || document.body;
    // var box = container.querySelector('.PCwaiting');
    // if (!box) {
    var box = document.createElement('div');
    box.className = 'PCwaiting local';
    if (!container) {
      box.style.position = 'fixed';
    }
    box.innerHTML = '<style>.PCwaiting{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5);z-index:8888}.PCwaiting.local{left:50%;top:40%;width:52px;height:50px;margin:-25px -26px;border-radius:3px;}.PCwaiting:after {content: ""; position: absolute; top: 50%; left: 50%; width: 3px; height: 3px; margin-top: -2px; margin-left: -2px; text-align: center; -webkit-border-radius: 100%; border-radius: 100%; box-shadow:0 0 3px; -webkit-transition: all, 0.3s, linear; transition: all, 0.3s, linear; -webkit-animation: am-wait 1.2s linear infinite; animation: am-wait 1.2s linear infinite;box-shadow:0 -10px 0 1px #eee, 10px 0px #eee, 0 10px #eee, -10px 0 #eee, -7px -7px 0 0.5px #eee, 7px -7px 0 0.5px #eee, 7px 7px #eee, -7px 7px #eee }@-webkit-keyframes am-wait {100% {-webkit-transform: rotate(1turn);transform: rotate(1turn);}}@keyframes am-wait {100% {-webkit-transform: rotate(1turn);transform: rotate(1turn);}</style>';

    this.waitingContainer = container;
    if (container.tagName === 'BODY') {
      box.style.position = 'fixed';
    }
    this.waitingBox = box;
  }

  show() {
    this.waitingContainer.appendChild(this.waitingBox);
    return this;
  }

  hide() {
    this.waitingBox.parentNode == this.waitingContainer && this.remove();
    return this;
  }
  remove() {
    this.waitingContainer.removeChild(this.waitingBox);
  }
}

var exportObj = {
  entity: '',
  select: function(container) {
    return new Waiting(container);
  },
  show: function(container) {
    return this.entity = new Waiting(container).show();
  },
  hide: function() {
    this.entity && this.entity.hide();
  }
};

module.exports = exportObj;