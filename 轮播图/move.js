
    function styleMoreMOve (dom,attrobj,callback){
            clearInterval(dom.timer);//首先清除重复定时器
            var ispeed = null,iCur = null;
            dom.timer = setInterval(function(){
                var bstop = true;//设置一个值为true
                //遍历这个对象attrobj
                    for(var attr in attrobj){
                        //判断传入阐述attr是否为opacity
                        if(attr == "opacity"){
                            iCur = parseFloat(getStyle(dom,attr))*100;
                        }else{
                            iCur = parseInt(getStyle(dom,attr));
                        }
                        ispeed = (attrobj[attr] - iCur)/7;
                        ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
                        if(attr == "opacity"){
                            dom.style.opacity = (iCur + ispeed)/100;
                        }else{
                            dom.style[attr] = iCur + ispeed + "px";
                        }
                       //只要有一个值不等于传入的值，那么bstop的值就会改变为false
                       //如果所有值都等于了，则不会执行以下代码，则不改变bstop的值，它依然为true
                       if(iCur != attrobj[attr]){
                              bstop = false;
                       }
                   }//所有值都到达了目标值时，清除计时器
                   if(bstop){
                       clearInterval(dom.timer);
                       callback();
                   }
            },30)
        }

       function  getStyle (dom,attr){//獲取元素的樣式，兼容性方法封裝
            if(window.getComputedStyle){//如果能夠識別該方法
                  return window.getComputedStyle(dom,null)[attr];//直接返回該方法的獲取的值
            }else{
                     return dom.currentStyle[attr];//否則就通過IE的方法獲取值並返回
            }

}