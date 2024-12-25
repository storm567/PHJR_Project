
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","enablePullDownRefresh":false,"rpxCalcMaxDeviceWidth":375,"rpxCalcBaseDeviceWidth":375,"navigationBar":{"backgroundColor":"#FFFFFF","titleText":"uni-starter","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"PHJR_Starter","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.24","entryPagePath":"pages/list/list","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/list/list","iconPath":"/static/tabbar/list.png","selectedIconPath":"/static/tabbar/list_active.png","text":"主页"},{"pagePath":"pages/titlegrid/cart/cart","iconPath":"/static/tabbar/plz.png","selectedIconPath":"/static/tabbar/plz_active.png","text":"贷款申请"},{"pagePath":"pages/grid/grid","iconPath":"/static/tabbar/news.png","selectedIconPath":"/static/tabbar/news_active.png","text":"资讯"},{"pagePath":"pages/ucenter/ucenter","iconPath":"/static/tabbar/me.png","selectedIconPath":"/static/tabbar/me_active.png","text":"我的"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/list/list","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"style":"custom","type":"default"},"isNVue":true}},{"path":"pages/test/test","meta":{"navigationBar":{"titleText":"测试","type":"default"},"isNVue":false}},{"path":"pages/titlegrid/cart/bankcart/bankcart","meta":{"navigationBar":{"titleText":"银行贷款_步骤1","type":"default"},"isNVue":false}},{"path":"pages/titlegrid/cart/uploadData/uploadData","meta":{"navigationBar":{"titleText":"银行贷款_步骤2","type":"default"},"isNVue":false}},{"path":"pages/titlegrid/cart/signing/signing","meta":{"navigationBar":{"titleText":"银行贷款_步骤3","type":"default"},"isNVue":false}},{"path":"pages/webpage/index","meta":{"navigationBar":{"titleText":"详情","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/titlegrid/scan/scan","meta":{"navigationBar":{"titleText":"扫一扫","type":"default"},"isNVue":false}},{"path":"pages/titlegrid/cart/cart","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"贷款","type":"default"},"isNVue":false}},{"path":"pages/titlegrid/wallet/wallet","meta":{"navigationBar":{"titleText":"卡包","type":"default"},"isNVue":false}},{"path":"pages/titlegrid/chat/chat","meta":{"navigationBar":{"titleText":"资讯","type":"default"},"isNVue":false}},{"path":"pages/grid/grid","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/list/search/search","meta":{"navigationBar":{"titleText":"搜索","type":"default"},"isNVue":true}},{"path":"pages/list/detail","meta":{"navigationBar":{"titleText":"文章详情","type":"transparent","buttons":[{"type":"share","fontSize":"22px","text":""}],"coverage":"132px"},"isNVue":false}},{"path":"pages/ucenter/ucenter","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/uni-agree/uni-agree","meta":{"navigationBar":{"style":"custom","type":"default"},"isNVue":true}},{"path":"pages/ucenter/settings/settings","meta":{"navigationBar":{"titleText":"设置","type":"default"},"isNVue":false}},{"path":"pages/ucenter/read-news-log/read-news-log","meta":{"enablePullDownRefresh":true,"navigationBar":{"titleText":"阅读记录","type":"default"},"isNVue":false}},{"path":"pages/ucenter/about/about","meta":{"navigationBar":{"titleText":"关于","type":"default","buttons":[{"type":"share","fontSize":"27px","text":""}]},"isNVue":false}},{"path":"uni_modules/uni-upgrade-center-app/pages/upgrade-popup","meta":{"disableScroll":true,"backgroundColorTop":"transparent","background":"transparent","titleNView":false,"scrollIndicator":false,"animationType":"fade-in","animationDuration":200,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/ucenter/invite/invite","meta":{"enablePullDownRefresh":false,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/news/news/news","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"意见反馈","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/userinfo/userinfo","meta":{"navigationBar":{"titleText":"个人资料","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"实名认证","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/login/login-withoutpwd","meta":{"navigationBar":{"type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/login/login-withpwd","meta":{"navigationBar":{"type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","meta":{"navigationBar":{"titleText":"注销账号","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","meta":{"navigationBar":{"titleText":"绑定手机号码","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/login/login-smscode","meta":{"navigationBar":{"titleText":"手机验证码登录","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/register/register","meta":{"navigationBar":{"titleText":"注册","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/retrieve/retrieve","meta":{"navigationBar":{"titleText":"重置密码","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/common/webview/webview","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"修改密码","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/register/register-by-email","meta":{"navigationBar":{"titleText":"邮箱验证码注册","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","meta":{"navigationBar":{"titleText":"通过邮箱重置密码","type":"default"},"isNVue":false}},{"path":"uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"设置密码","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[{}];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  