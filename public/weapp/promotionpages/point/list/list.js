(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/point/list/list"],{"05cf":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("c409"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("92aa"))}.bind(null,e)).catch(e.oe)},s={components:{uniPopup:a},data:function(){return{mescroll:null,categoryList:[{id:1,name:"积分换好物"},{id:2,name:"积分换券"},{id:3,name:"积分换红包"}],isLogin:!1,goodsList:[],couponList:[],hongbaoList:[],point:0,token:null,memberInfo:{headimg:""},signState:1}},mixins:[o.default],onShow:function(){var n=this;if(!this.addonIsExit.pointexchange)return this.$util.showToast({title:"商家未开启积分商城",mask:!0,duration:2e3}),void setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),t.getStorageSync("token")&&this.getMemberInfo(),this.getCouponList(),this.getHongbaoList(),this.getSignState()},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,n){t&&this.getMemberInfo()}},methods:{getSignState:function(){var t=this;this.$api.sendRequest({url:"/api/membersignin/getSignStatus",success:function(n){0==n.code&&(t.signState=n.data.is_use)}})},jumpPage:function(t){this.$util.redirectTo(t)},openPointPopup:function(){this.$refs.pointPopup.open()},closePointPopup:function(){this.$refs.pointPopup.close()},getCouponList:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:0,type:2},success:function(n){0==n.code&&n.data?t.couponList=n.data.list:t.$util.showToast({title:n.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getHongbaoList:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:0,type:3},success:function(n){0==n.code&&n.data?t.hongbaoList=n.data.list:t.$util.showToast({title:n.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getData:function(t){var n=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:t.size,page:t.num,type:1},success:function(e){var o=[],i=e.message;0==e.code&&e.data?o=e.data.list:n.$util.showToast({title:i}),t.endSuccess(o.length),1==t.num&&(n.goodsList=[]),n.goodsList=n.goodsList.concat(o),n.$refs.loadingCover&&n.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/point/detail/detail",{id:t.id})},getMemberInfo:function(){var n=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){e.code>=0?(n.token=t.getStorageSync("token"),n.memberInfo=e.data,n.getAccountInfo()):n.token=null}})},getAccountInfo:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(n){0==n.code&&n.data&&(isNaN(parseFloat(n.data.point))||(t.point=parseFloat(n.data.point).toFixed(0)))}})},login:function(){this.$refs.login.open("/promotionpages/point/list/list")},imgError:function(t){this.goodsList[t].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(t){switch(t.type){case 1:return this.$util.img(t.image.split(",")[0],{size:"mid"});case 2:return t.image?this.$util.img(t.image):this.$util.img("upload/uniapp/point/coupon.png");case 3:return t.image?this.$util.img(t.image):this.$util.img("upload/uniapp/point/hongbao.png")}}},onShareAppMessage:function(t){var n="积分兑换，好礼带回家哦",e="/promotionpages/point/list/list";return{title:n,path:e,success:function(t){},fail:function(t){}}}};n.default=s}).call(this,e("543d")["default"])},"5da6":function(t,n,e){},"91e5":function(t,n,e){"use strict";(function(t){e("34b0");o(e("66fd"));var n=o(e("9c52"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"99f6":function(t,n,e){},"9bb1":function(t,n,e){"use strict";var o=e("5da6"),i=e.n(o);i.a},"9c52":function(t,n,e){"use strict";e.r(n);var o=e("f5e2"),i=e("cae4");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("9bb1"),e("f67b");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"67c77354",null,!1,o["a"],s);n["default"]=r.exports},cae4:function(t,n,e){"use strict";e.r(n);var o=e("05cf"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},f5e2:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"92aa"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"790a"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2893"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$util.img("upload/uniapp/point/point_bg.png")),o=t.token&&t.memberInfo.headimg?t.$util.img(t.memberInfo.headimg):null,i=t.token&&!t.memberInfo.headimg?t.$util.getDefaultImage():null,a=t.$util.img("upload/uniapp/point/coupon_bg1.png"),s=t.$util.img("upload/uniapp/point/coupon_bg1.png"),u=t.couponList.length>0?t.__map(t.couponList,(function(n,e){var o=t.__get_orig(n),i="reward"==n.coupon_type?parseFloat(n.money):null,a="discount"==n.coupon_type&&"discount"==n.coupon_type?parseFloat(n.discount):null,s=0!=n.at_least?parseFloat(n.at_least).toFixed(0):null;return{$orig:o,m0:i,m1:a,g5:s}})):null,r=t.$util.img("upload/uniapp/point/hongbao_bg.png"),c=t.hongbaoList.length>0?t.__map(t.hongbaoList,(function(n,e){var o=t.__get_orig(n),i=parseFloat(n.balance).toFixed(0);return{$orig:o,g7:i}})):null,l=t.goodsList.length>0&&t.goodsList.length?t.__map(t.goodsList,(function(n,e){var o=t.__get_orig(n),i=t.goodsImg(n),a=n.price>0&&n.pay_type>0?t.$lang("common.currencySymbol"):null;return{$orig:o,m2:i,m3:a}})):null;t._isMounted||(t.e0=function(n){t.memberInfo.headimg=t.$util.getDefaultImage().default_headimg}),t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,g2:i,g3:a,g4:s,l0:u,g6:r,l1:c,l2:l}})},a=[]},f67b:function(t,n,e){"use strict";var o=e("99f6"),i=e.n(o);i.a}},[["91e5","common/runtime","common/vendor"]]]);