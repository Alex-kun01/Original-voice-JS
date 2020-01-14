var timer = null;
var ulBox = document.getElementsByClassName('ulBox')[0];
var leftBtn = document.getElementsByClassName('leftBtn')[0];
var rightBtn = document.getElementsByClassName('rightBtn')[0];
var moveWdith = ulBox.children[0].offsetWidth;//定义一个moveWderPage纪录图片宽度
var num = ulBox.children.length - 1;//定义一个num接收图片的张数-1
var key = true;//定义一个锁
var _index = 0;
var oSpan = document.getElementsByClassName('parBox')[0].getElementsByTagName('span');
//left按钮点击事件
leftBtn.onclick = function(){
    autoMove('left->right');//点击左边按钮执行autoMove并传一个参数'left->right'进去
}
//right按钮点击事件
rightBtn.onclick = function(){
    autoMove('right->left');//点击右边按钮执行autoMove并传一个参数'right->left'进去
}
for(var i = 0;i<oSpan.length;i++){
    (function(myindex){
        oSpan[myindex].onclick = function(){
           key = false;
           clearTimeout(timer);
           _index = myindex;
           styleMoreMOve(ulBox,{left:-_index*moveWdith},function(){
               key = true;
               timer = setTimeout(autoMove,1500);
               changeindex(_index);
           });
        }
    }(i))
}


//direction 方向  默认轮播方向/点击right按钮 left ——>right
//点击left按钮 right ——>left 轮播
function autoMove(direction){
 if(key){//如果锁开着则执行
     key = false;//进入执行后将锁关闭，目的：第一次任务没有执行完，不能进入下一次任务
    clearTimeout(timer);
    if(!direction || direction == 'left->right'){
        styleMoreMOve(ulBox,{left:ulBox.offsetLeft - moveWdith},function(){//执行引入的弹性运动方法
            _index++;
            if(ulBox.offsetLeft == -num * moveWdith){//ul到达最后一张图的瞬间将ul的left归零，即回到第一张图片位置
                _index = 0;
                ulBox.style.left = '0px';
            }
            timer = setTimeout(autoMove,1500);
            key = true;
            changeindex(_index);
        });
    }
    else if(direction == 'right->left'){
        if(ulBox.offsetLeft == 0){//点击右边按钮时，ul距离右边位置为0时瞬间将位置跳到最后一张图的位置
            _index = num;
            ulBox.style.left = -num*moveWdith + 'px';
        }
            styleMoreMOve(ulBox,{left:ulBox.offsetLeft + moveWdith},function(){//执行引入的弹性运动方法
                _index--;
                timer = setTimeout(autoMove,1500);
                key = true;
                changeindex(_index);
        });
    }
 }
}
 timer = setTimeout(autoMove,1500);
 //控制下方小圆点颜色位置
 function changeindex(_index){
     for(var i = 0;i < oSpan.length;i++){
         oSpan[i].className ='';
     }
     oSpan[_index].className = 'active';
 }