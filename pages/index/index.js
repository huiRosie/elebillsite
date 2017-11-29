// 1. 定义（路由）组件。
const Index = { template: '#index' };
const Out = { template: '#out' };
const In = { template: '#in' };
const Us = { template: '#us' };
const Helper = { template: '#helper' };
const Aide = { template: '#aide' };
const InDet = { template: '#inDetail' };
const Account = { template: '#account' };
const AccountInfo = { template: '#accountInfo' };
const AccountAnnounce = { template: '#accountAnnounce' };
const AccountMes = { template: '#accountMes' };
const AccountOffer = { template: '#accountOffer' };
const AccountBuy = { template: '#accountBuy' };
const AccountMesDet = { template: '#accountMesDet' };
const MyBillDet = { template: '#myBillDet' };
const MyOfferDet = { template: '#myOfferDet' };
const ChangePass = { template: '#changePass' };
const AccInfoEdit = { template: '#accInfoEdit' };
const AccInfoIdent = { template: '#accInfoIdent' };
const Regist = { template: '#regist' };
const HelpLogin = { template: '#helpLogin' };
const HelpIdent = { template: '#helpIdent' };
const HelpIn = { template: '#helpIn' };
const HelpOut = { template: '#helpOut' };
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
	{ path: '', component: Index },
	{ path: '/index', component: Index },
	{ path: '/out', component: Out },
	{ path: '/in', component: In },
	{ path: '/us', component: Us },
	{ path: '/regist', component: Regist },
	{ path: '/helper', component: Helper },
	{ path: '/helpLogin', component: HelpLogin },
	{ path: '/helpIdent', component: HelpIdent },
	{ path: '/helpIn', component: HelpIn },
	{ path: '/helpOut', component: HelpOut },
	{ path: '/aide', component: Aide },
	{ path: '/inDet', component: InDet },
	{ path: '/account', component: Account ,
		children:[
			{
			  	path:'',
			  	component:AccountInfo
			},{
				path:'accountInfo',
			  	component:AccountInfo
			},{
				path:'accountAnnounce',
			  	component:AccountAnnounce
			},{
				path:'accountMes',
			  	component:AccountMes
			},{
				path:'accountOffer',
			  	component:AccountOffer
			},{
				path:'accountBuy',
			  	component:AccountBuy
			},{
				path:'accountMesDet',
			  	component:AccountMesDet
			},{
				path:'myBillDet',
			  	component:MyBillDet
			},{
				path:'myOfferDet',
			  	component:MyOfferDet
			},{
				path:'changePass',
			  	component:ChangePass
			},{
				path:'accInfoEdit',
			  	component:AccInfoEdit
			},{
				path:'accInfoIdent',
			  	component:AccInfoIdent
			}
		]
	}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
	data:{
		outNumber:'10000',
	},
  	router,
  	methods:{
	  	inputChange:function(num){
	  		changeWord(num);
	  	},
		changeWord:function(num) {
			if(!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)){
				return "";
			}
			var unit = "千百拾亿千百拾万千百拾元角分";
			var	str = "";
			num += "00";
			var p = num.indexOf('.');
			if(p >= 0){
				num = num.substring(0, p) + num.substr(p + 1, 2);
			}
			unit = unit.substr(unit.length - num.length);
			for(var i = 0; i < num.length; i++){
				str += '零壹贰叁肆伍陆柒捌玖'.charAt(num.charAt(i)) + unit.charAt(i);
			}	
			return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g,"零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
		},
		navChange:function(){
			
		}
	},
	watch:{
		//banner轮播图
		// var mySwiper = new Swiper('.swiper-container',{
		// 	direction:'horizontal',
		// 	simulateTouch : false,
		// 	loop:true,
		// 	autoplay:5000, 
		// 	speed:5000,
		// 	preloadImages:false, 
		// 	lazyLoading : true,
		// 	lazyLoadingInPrevNext : true,
		// 	lazyLoadingInPrevNextAmount : 1,
		// 	effect : "fade",
		// 	pagination : '.swiper-pagination',
		// 	paginationClickable :true,
		// 	autoplayDisableOnInteraction : false,
		// });
	}
}).$mount('#app');

// 现在，应用已经启动了！