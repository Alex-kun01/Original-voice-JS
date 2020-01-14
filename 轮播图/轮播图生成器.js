/**
 * targetArr 参数为一个数组，数组内存放图片路径['./01.jpg','./02.jpg'...]
 */
HTMLDivElement.prototype.myCreatepic = function(targetArr){
    var len = targetArr.length;//获取目标数组长度，即图片张数
// 创建元素
var mybody = document.getElementsByTagName('body')[0];
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
var style = document.createElement('style');
        var ulBox = document.createElement('ul');
        var leftBtn = document.createElement('div');
        var rightBtn = document.createElement('div');
        var parBox = document.createElement('div');

        //创建目标个数的li
        for(var i = 0;i < len;i++){
          ulBox.appendChild(document.createElement('li'));
        }  //在每一个li下创建img标签
        for(var k = 0; k < len;k++){
            ulBox.children[k].appendChild(document.createElement('img'));
        }
           //创建目标个数的span
        for(var i = 0;i < len - 1;i++){
            parBox.appendChild(document.createElement('span'));
          } 
//添加属性
          for(var o = 0; o < len;o++){//给img标签添加src值
            ulBox.children[o].children[0].setAttribute('src',targetArr[o]);
        }
          leftBtn.innerText = '<';
          rightBtn.innerText = '>';
          this.setAttribute('class','myBox');
          ulBox.setAttribute('class','ulBox');
          leftBtn.setAttribute('class','btn leftBtn');
          rightBtn.setAttribute('class','btn rightBtn');
          parBox.setAttribute('class','parBox');
          parBox.children[0].setAttribute('class','active');
//将元素插入到指定位置
          this.appendChild(ulBox);
          this.appendChild(leftBtn);
          this.appendChild(rightBtn);
          this.appendChild(parBox);
          mybody.appendChild(this);
          mybody.appendChild(script);
          head.appendChild(style);
//添加CSS样式
          style.innerText = `         *{
            padding: 0;
            margin: 0;
            list-style: none;
        }
        .myBox{
            position: relative;
            margin: 100px auto 0px;
            width: 400px;
            height: 250px;
            overflow: hidden;
        }
        .myBox .ulBox{
            position: absolute;
            left: 0px;
            top: 0px;
            height: 250px;
            width: 2000px;
        }
        .myBox .ulBox li{
            width: 400px;
            height: 250px;
            float: left;
        }
        .myBox .ulBox li img{
            width: 100%;
            height: 100%;
        }
        .myBox:hover .btn{
            opacity: 0.7;
        }
        .myBox .btn{
            width: 30px;
            height: 40px;
            color: #fff;
            background: #000;
            line-height: 40px;
            position: absolute;
            top: 50%;
            margin-top: -20px;
            text-align: center;
            opacity: 0.2;
            cursor: pointer;
        }
        .myBox .leftBtn{
             left: 5px;
             border-radius: 0 13px 13px 0;
        }
        .myBox .rightBtn{
             right: 5px;
             border-radius: 13px 0 0 13px;
        }
        .myBox .parBox span{
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #ccc;
            border-radius: 50%;
            margin-right: 10px;
        }
        .myBox .parBox .active{
            background-color: #f40;
        }
        .myBox .parBox {
            position: absolute;
            width: 100%;
            bottom: 15px;
            text-align: center;
            cursor: pointer;
            background-color: rgba(#000,#000,#000, 0.4);
        }`;
       

}//myCreatepic结束