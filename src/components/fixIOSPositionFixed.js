//修正iOS固定元素显示错乱，传入需要修正的元素
    function fixFixed(eles) {
        if(!eles||eles.length<=0){
            return;
        }

        //目前只修正iOS部分
        var regiOS=/i(os|pad|phone)/i;
        if(!regiOS.test(navigator.userAgent)){
            return;
        }

        //没有输入，就不修了
        var inputs = document.querySelectorAll('input,textarea'),
            iptL = inputs.length;

        if(iptL<=0){
            return;
        }

        var l=eles.length;
        //
        var _fixEles=function(e){
             var top = document.body.scrollTop || document.documentElement.scrollTop;
             if(l>0){
                for(var i=0;i<l;i++){
                     eles[i].style.cssText='position:absolute;-webkit-transform:translate3D(0,'+top+'px,0)';
                }
                return;
             }
                eles.style.cssText = 'position:absolute;-webkit-transform:translate3D(0,' + top + 'px,0)';
        }

        //滚动绑定事件
        var _fix = function() {
            document.addEventListener('scroll', _fixEles);
        }

        //解绑
        var _unbindFix=function(){
            document.removeEventListener('scroll',_fixEles);
            if(l>0){
                for(var i=0;i<l;i++){
                     eles[i].removeAttribute('style');
                }
                return;
            }
            eles.removeAttribute('style');
        }

        //目前绑在所有可输入元素上,异步加载时有些问题，暂时绑到滚动
        for(var i=0;i<iptL;i++){
            inputs[i].removeEventListener('focus', _fix);
            inputs[i].removeEventListener('blur', _unbindFix);

            inputs[i].addEventListener('focus', _fix);
            inputs[i].addEventListener('blur', _unbindFix)
        }
        // _fix();
    }
;module.exports=fixFixed;