webpackJsonp([0],{"+t/R":function(t,s){},"0iQC":function(t,s){},"6MiN":function(t,s,e){t.exports=e.p+"static/img/code.4efef3d.jpg"},"9IXB":function(t,s){},"9QAi":function(t,s,e){t.exports=e.p+"static/img/lb.379a5e7.jpg"},Dhni:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={data:function(){return{items:[{cls:"al-about",alias:"关于",url:"/about"},{cls:"al-skill",alias:"技能",url:"/skill"},{cls:"al-expirence",alias:"经历",url:"/expirence"},{cls:"al-program",alias:"项目",url:"/program"},{cls:"al-contact",alias:"联系",url:"/contact"}],currentIndex:0}},methods:{selItem:function(t,s){console.log(s),this.currentIndex=t,this.$router.push({path:s})}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navs"},t._l(t.items,function(s,a){return e("div",{key:s.id,staticClass:"navs-item",class:{active:t.currentIndex===a},on:{click:function(e){t.selItem(a,s.url)}}},[e("span",{staticClass:"al",class:s.cls}),t._v(" "),e("span",[t._v(t._s(s.alias))])])}),0)},staticRenderFns:[]};var r={name:"App",components:{navs:e("VU/8")(n,i,!1,function(t){e("giZf")},null,null).exports}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("router-view"),this._v(" "),s("navs")],1)},staticRenderFns:[]};var l=e("VU/8")(r,c,!1,function(t){e("+t/R")},null,null).exports,o=e("/ocq"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content about"},[a("img",{staticClass:"avatar mar-b-20",attrs:{src:e("9QAi")}}),t._v(" "),a("span",{staticClass:"name mar-b-20"},[t._v("罗兵")]),t._v(" "),a("span",{staticClass:"objective mar-b-20"},[t._v("求职意向 / 前端开发")]),t._v(" "),a("div",{staticClass:"tags"},[a("span",{staticClass:"tag mar-r-10"},[t._v("H5")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("小程序")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("WEB开发")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("29岁")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("本科（全日制）")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("二年经验")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("现居星沙")]),t._v(" "),a("span",{staticClass:"tag mar-r-10"},[t._v("16年自学前端开发")]),t._v(" "),a("span",{staticClass:"tag"},[t._v("随时到岗")])])])}]};var p=e("VU/8")({},v,!1,function(t){e("qNlh")},null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content skill",staticStyle:{"background-color":"#31c27c"}},[e("div",{staticClass:"star-wraper"},[e("div",{staticClass:"star-outer star"},[e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner"},[t._v("小程序")])]),t._v(" "),e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner"},[t._v("VUE")])]),t._v(" "),e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner"},[t._v("UI框架")])]),t._v(" "),e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner"},[t._v("GIT")])])]),t._v(" "),e("div",{staticClass:"star-inner star"},[e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("HTML")])]),t._v(" "),e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("CSS")])]),t._v(" "),e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("JS")])]),t._v(" "),e("div",{staticClass:"wheel-wraper"},[e("div",{staticClass:"wheel-inner",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("ES6")])])])])])}]};var u=e("VU/8")({},_,!1,function(t){e("c1Wt")},null,null).exports,h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content expirence"},[s("router-view"),this._v(" "),s("div",{staticClass:"circle"},[s("router-link",{attrs:{tag:"span",to:"/expirence/expirenceone"}}),this._v(" "),s("router-link",{attrs:{tag:"span",to:"/expirence/expirencetwo"}})],1)],1)},staticRenderFns:[]};var d=e("VU/8")({},h,!1,function(t){e("varL")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content program"},[s("div",{staticClass:"program-content"},[s("span",{staticClass:"title"},[this._v("共销客")]),this._v(" "),s("span",{staticClass:"desc"},[this._v("项目描述：共销客是一款微信群营销工具，客户群为高级微商，工具由一个公众号、一个小程序组成，小程序使用WEPY框架开发，本人负责其中部分功能模块的开发，和同组后端开发人员配合分离开发，所负责的功能模块有线上商城、卖家秀、团队、文章采集等")])]),this._v(" "),s("div",{staticClass:"program-content"},[s("span",{staticClass:"title"},[this._v("在线简历、企业官网")]),this._v(" "),s("span",{staticClass:"desc"},[this._v("项目描述：该简历采用flex布局，自适应终端，适配PC端、移动端，未使用任何UI框架编码；各类型企业官网兼容IE8+，具备良好的兼容性、扩展性")])])])}]};var m=e("VU/8")({},f,!1,function(t){e("fDSi")},null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content info"},[s("span",{staticClass:"tel"},[this._v("Telphone : 139-7581-3169")]),this._v(" "),s("span",{staticClass:"qq"},[this._v("QQ : 449037345")]),this._v(" "),s("img",{staticClass:"code",attrs:{src:e("6MiN")}})])}]};var w=e("VU/8")({},C,!1,function(t){e("0iQC")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"expirence-content-wraper"},[e("span",{staticClass:"al al-js"}),t._v(" "),e("div",{staticClass:"expirence-content"},[e("span",{staticClass:"company"},[t._v("北京博卡软件开发有限公司")]),t._v(" "),e("span",{staticClass:"duration"},[t._v("2017.11-2019.1")]),t._v(" "),e("span",{staticClass:"degree"},[t._v("软件外包 / 前端开发")]),t._v(" "),e("ul",{staticClass:"work-items"},[e("li",[t._v("1、根据UI设计稿，完成WEB页、H5页开发")]),t._v(" "),e("li",[t._v("2、公众号、小程序开发")]),t._v(" "),e("li",[t._v("3、掌握技能：VUE、GIT、小程序开发（原生、WEPY）、JS（原生、JQUERY），前后端分离开发工作模式")])])])])}]};var g=e("VU/8")({},x,!1,function(t){e("9IXB")},null,null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"expirence-content-wraper"},[e("span",{staticClass:"al al-html5"}),t._v(" "),e("div",{staticClass:"expirence-content"},[e("span",{staticClass:"company"},[t._v("长沙牛企网络有限公司")]),t._v(" "),e("span",{staticClass:"duration"},[t._v("2017.1-2017.11")]),t._v(" "),e("span",{staticClass:"degree"},[t._v("软件外包 / 前端开发")]),t._v(" "),e("ul",{staticClass:"work-items"},[e("li",[t._v("1、根据UI设计稿，完成WEB页开发")]),t._v(" "),e("li",[t._v("2、掌握技能：DIV+CSS布局、BOOTSTRAP框架")]),t._v(" "),e("li",[t._v("3、同期工作之余，认真研读《javascript高级程序设计》，努力提升自己原生JS的编码能力")])])])])}]};var S=e("VU/8")({},E,!1,function(t){e("t/7t")},null,null).exports;a.a.use(o.a);var U=new o.a({linkActiveClass:"active",routes:[{path:"/about",name:"about",component:p},{path:"/skill",name:"skill",component:u},{path:"/expirence",name:"expirence",component:d,children:[{path:"expirenceone",component:g},{path:"expirencetwo",component:S},{path:"/expirence",redirect:"/expirence/expirenceone"}]},{path:"/program",name:"program",component:m},{path:"/contact",name:"contact",component:w},{path:"/",redirect:"/about"}]});e("Dhni");a.a.config.productionTip=!1,new a.a({el:"#app",router:U,components:{App:l},template:"<App/>"})},c1Wt:function(t,s){},fDSi:function(t,s){},giZf:function(t,s){},qNlh:function(t,s){},"t/7t":function(t,s){},varL:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.91468912b8f93e2f84fd.js.map