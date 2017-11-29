//屏幕最小高度，适应屏幕
$(window).resize(function(){
	oHeight = $(window).height() - 244;
	$('.container').css('min-height',oHeight);
	if (oHeight-86>400) {
		$('.regist').height(oHeight-86);
	}
})
$(function(){
	//屏幕最小高度，适应屏幕
	oHeight = $(window).height() - 244;
	$('.container').css('min-height',oHeight);
	if (oHeight-86>400) {
		$('.regist').height(oHeight-86);
	}
	//我要收票 ==> 我要竞价 ==>弹窗
	$('.inDetBtnClick').click(function(){
		$('.mark').show();
		$('.bidPouup').show();
		$('.bidPouupClose').click(function(){
			$('.mark').hide();
			$('.bidPouup').hide();
		})
	})  
	//banner轮播图
	var mySwiper = new Swiper('.swiper-container',{
		direction:'horizontal',
		simulateTouch : false,
		loop:true,
		autoplay:5000, 
		speed:5000,
		preloadImages:false, 
		lazyLoading : true,
		lazyLoadingInPrevNext : true,
		lazyLoadingInPrevNextAmount : 1,
		effect : "fade",
		pagination : '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : false,
	});
})


//账户中心侧边栏，点击样式改变
$(".accountSubBox .accountSubNav").click(function(){
	$(this).parent().find('.accountSub').addClass('accountSubActive');
	$(this).parent().siblings().find('.accountSub').removeClass('accountSubActive');
})

 //登录注册切换
 $('.registMainTop a').click(function(){
 	console.log(this)
 	console.log(this.attr)
 	$(this).addClass('registMainTopActive').siblings().removeClass('registMainTopActive');
 	
 })

 //登录注册切换
 $('.registMainTop .registMainTopLogin').click(function(){
	alert(1)
// 	$(this).addClass('registMainTopActive').siblings().removeClass('registMainTopActive');
 	$('.registMainLogin').show();
 	$('.registMainReg').hide();
 })
$('.registMainTop .registMainTopReg').click(function(){
	alert(1)
// 	$(this).addClass('registMainTopActive').siblings().removeClass('registMainTopActive');
 	$('.registMainLogin').css('display','none');
 	$('.registMainReg').css('display','block');
 })