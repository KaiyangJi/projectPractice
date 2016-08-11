window.onload=function(){//文档加载完毕才执行，写在后面不需要加	
	/*头部banner轮播开始*/
		var oUl=document.getElementById('Btn-con');
		var aBtn=oUl.getElementsByTagName('li');
		var oWrap=document.getElementById('banner-wrap');
		var aImg=oWrap.getElementsByTagName('li');
		var num=0;
		var oldBtn=aBtn[num];
		var oldImg=aImg[num];
		var timer;//定时器

		oldImg.style.display='block';
		oldBtn.className='show';
		for(var i=0;i<6;i++){
			aBtn[i].index=i;//自定义属性,自定义索引值
			aBtn[i].onmouseover=function(){
				
				num=this.index;
				run();
			}
		}
		
		function run(){//函数封装，类似jQuery（链式操作，函数传参）
				oldBtn.className='';
				oldBtn=aBtn[num];
				aBtn[num].className='show';//this触发了当前函数的对象
				//img	
				oldImg.style.display='none';
				oldImg = aImg[num];
				aImg[num].style.display='block';
		}
		//设置定时器
		autoplay();
		function autoplay(){
			timer=setInterval(function (){
					run();
					num++;
					if(num==6){
						num=0;
					}
			},1000);//每隔1000毫秒执行一次函数
		}
		oUl.onmouseover=function(){
			clearInterval(timer);//清除定时器	
		}
		oUl.onmouseout=function(){//启动定时器
			autoplay();	
		}
	/*头部banner轮播结束*/
	/*头部固定搜索框开始*/
	var oUl=document.getElementById('fixSearch');
	var oNav=document.getElementById('sideNav-con')//左侧导航
	var aA = oNav.getElementsByTagName('a');
	//alert(aA.length);
	var oF1=document.getElementById('F1');
	var oF2=document.getElementById('F2');
	var oF3=document.getElementById('F3');
	var oF4=document.getElementById('F4');
	var oF5=document.getElementById('F5');
	var oF6=document.getElementById('F6');
	var oF7=document.getElementById('F7');
	window.onscroll=function(){//window.onscroll文档发生滚动时触发此函数
		//console.log(oF1.getBoundingClientRect().top);//oF1.getBoundingClientRect()是一个box，输出距离浏览器窗口top(top,bottom),left(left,right)的值
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//ie||其他,浏览器滚动高度	
		
		if(scrollTop>=700){
			oUl.style.top='0px';
		}
		else{
			oUl.style.top='-50px';
		}
		//左侧导航
		if(scrollTop>=600){
			oNav.style.width='35px';
			oNav.style.height='370px';
		}
		else{
			oNav.style.width='0';
			oNav.style.height='0';
		}
		
		transBgColor(oF1,aA[1],'#F7A945');
		transBgColor(oF2,aA[2],'#19C8A9');
		transBgColor(oF3,aA[3],'#F15453');
		transBgColor(oF4,aA[4],'#64C333');
		transBgColor(oF5,aA[5],'#0AA6E8');
		transBgColor(oF6,aA[6],'#EA5F8D');
		transBgColor(oF7,aA[7],'#000');
	}
	//导航变色函数
	function transBgColor(obj,btn,BgColor){
		//左侧导航
		if(obj.getBoundingClientRect().top<=360&&obj.getBoundingClientRect().top>=-obj.scrollHeight+360){
			btn.style.background=BgColor;
		}
		else{
			btn.style.background='#666';
		}
	}
	window.onresize=function(){//浏览器窗口大小发生改变的时候
		var offset=getLeft(oNav);
		if(offset<=20){
			oNav.style.width='0';
			oNav.style.height='0';	
		}
		else{
			oNav.style.width='35px';
			oNav.style.height='370px';
		}
	}
	function getLeft(obj){
		var offsetLeft=obj.offsetLeft;
		if(obj.offsetParent){
			offsetLeft +=getLeft(obj.offsetParent);
		}
		
		return offsetLeft;
	}
	/*头部固定搜索框结束*/
	/*jQuery右侧购物栏开始*/
	$('#sideStatus .btn').hover(function(){/*鼠标滑入滑出函数*/
		$(this).parent().siblings().find('.activeTxt').stop(true,true);
		/*元素给了绝对定位后width\height100%参考的是定位父级的宽高*/
		$(this).parent().find('.activeTxt').stop(true,true).show().animate({'right':'35px','opacity':'1'},1000);
		/*animate 待修改样式 动画执行时间ms 回调函数，即动画执行完成后执行*/},function(){
		$(this).parent().find('.activeTxt').stop(true,true).animate({'right':'200','opacity':'0'},1000,function(){
		$(this).parent().find('.activeTxt').hide();	
		});
		})
	/*jQuery右侧购物栏结束*/
}

