window.onload=function(){//�ĵ�������ϲ�ִ�У�д�ں��治��Ҫ��	
	/*ͷ��banner�ֲ���ʼ*/
		var oUl=document.getElementById('Btn-con');
		var aBtn=oUl.getElementsByTagName('li');
		var oWrap=document.getElementById('banner-wrap');
		var aImg=oWrap.getElementsByTagName('li');
		var num=0;
		var oldBtn=aBtn[num];
		var oldImg=aImg[num];
		var timer;//��ʱ��

		oldImg.style.display='block';
		oldBtn.className='show';
		for(var i=0;i<6;i++){
			aBtn[i].index=i;//�Զ�������,�Զ�������ֵ
			aBtn[i].onmouseover=function(){
				
				num=this.index;
				run();
			}
		}
		
		function run(){//������װ������jQuery����ʽ�������������Σ�
				oldBtn.className='';
				oldBtn=aBtn[num];
				aBtn[num].className='show';//this�����˵�ǰ�����Ķ���
				//img	
				oldImg.style.display='none';
				oldImg = aImg[num];
				aImg[num].style.display='block';
		}
		//���ö�ʱ��
		autoplay();
		function autoplay(){
			timer=setInterval(function (){
					run();
					num++;
					if(num==6){
						num=0;
					}
			},1000);//ÿ��1000����ִ��һ�κ���
		}
		oUl.onmouseover=function(){
			clearInterval(timer);//�����ʱ��	
		}
		oUl.onmouseout=function(){//������ʱ��
			autoplay();	
		}
	/*ͷ��banner�ֲ�����*/
	/*ͷ���̶�������ʼ*/
	var oUl=document.getElementById('fixSearch');
	var oNav=document.getElementById('sideNav-con')//��ർ��
	var aA = oNav.getElementsByTagName('a');
	//alert(aA.length);
	var oF1=document.getElementById('F1');
	var oF2=document.getElementById('F2');
	var oF3=document.getElementById('F3');
	var oF4=document.getElementById('F4');
	var oF5=document.getElementById('F5');
	var oF6=document.getElementById('F6');
	var oF7=document.getElementById('F7');
	window.onscroll=function(){//window.onscroll�ĵ���������ʱ�����˺���
		//console.log(oF1.getBoundingClientRect().top);//oF1.getBoundingClientRect()��һ��box������������������top(top,bottom),left(left,right)��ֵ
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//ie||����,����������߶�	
		
		if(scrollTop>=700){
			oUl.style.top='0px';
		}
		else{
			oUl.style.top='-50px';
		}
		//��ർ��
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
	//������ɫ����
	function transBgColor(obj,btn,BgColor){
		//��ർ��
		if(obj.getBoundingClientRect().top<=360&&obj.getBoundingClientRect().top>=-obj.scrollHeight+360){
			btn.style.background=BgColor;
		}
		else{
			btn.style.background='#666';
		}
	}
	window.onresize=function(){//��������ڴ�С�����ı��ʱ��
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
	/*ͷ���̶����������*/
	/*jQuery�Ҳ๺������ʼ*/
	$('#sideStatus .btn').hover(function(){/*��껬�뻬������*/
		$(this).parent().siblings().find('.activeTxt').stop(true,true);
		/*Ԫ�ظ��˾��Զ�λ��width\height100%�ο����Ƕ�λ�����Ŀ��*/
		$(this).parent().find('.activeTxt').stop(true,true).show().animate({'right':'35px','opacity':'1'},1000);
		/*animate ���޸���ʽ ����ִ��ʱ��ms �ص�������������ִ����ɺ�ִ��*/},function(){
		$(this).parent().find('.activeTxt').stop(true,true).animate({'right':'200','opacity':'0'},1000,function(){
		$(this).parent().find('.activeTxt').hide();	
		});
		})
	/*jQuery�Ҳ๺��������*/
}

