(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{475:function(t,n,e){var content=e(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("79b4a4c3",content,!0,{sourceMap:!1})},478:function(t,n,e){"use strict";e(8),e(11),e(13),e(14);var r=e(2),o=(e(3),e(41),e(48),e(23),e(6),e(26),e(60),e(219),e(42),e(220),e(221),e(222),e(223),e(224),e(225),e(226),e(227),e(228),e(229),e(230),e(231),e(232),e(43),e(10),e(302),e(1)),c=e(46),l=e(0);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function j(t,n){return v.reduce((function(e,r){return e[t+Object(l.t)(r)]=n(),e}),{})}var m=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},h=j("align",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},O=j("justify",(function(){return{type:String,default:null,validator:w}})),_=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},C=j("alignContent",(function(){return{type:String,default:null,validator:_}})),k={align:Object.keys(h),justify:Object.keys(O),alignContent:Object.keys(C)},x={align:"align",justify:"justify",alignContent:"align-content"};function S(t,n,e){var r=x[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var P=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},h),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:_}},C),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var d=P.get(l);if(!d){var v;for(v in d=[],k)k[v].forEach((function(t){var n=e[t],r=S(v,t,n);r&&d.push(r)}));d.push(Object(r.a)(Object(r.a)(Object(r.a)({"no-gutters":e.noGutters,"row--dense":e.dense},"align-".concat(e.align),e.align),"justify-".concat(e.justify),e.justify),"align-content-".concat(e.alignContent),e.alignContent)),P.set(l,d)}return t(e.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},479:function(t,n,e){"use strict";e(475)},480:function(t,n,e){var r=e(19)((function(i){return i[1]}));r.push([t.i,".mw_500[data-v-8305da4e]{max-width:500px!important}.btn[data-v-8305da4e]{cursor:pointer}",""]),r.locals={},t.exports=r},485:function(t,n,e){"use strict";e.r(n);var r=e(470),o=e(212),c=e(478),l={name:"AboutMe",computed:{isMobile:function(){return this.$vuetify.breakpoint.width<this.$vuetify.breakpoint.mobileBreakpoint}},methods:{goTo:function(link){window.open(link,"_blank")}}},f=(e(479),e(85)),component=Object(f.a)(l,(function(){var t=this,n=t._self._c;return n(c.a,{staticClass:"py-5",class:t.isMobile?"px-0":"px-10",attrs:{justify:"center"}},[n(r.a,{staticClass:"pa-10",attrs:{rounded:""}},[n("h2",{staticClass:"pb-5 text-center"},[t._v("Ana Júlia Oliveira Lins")]),t._v(" "),n("h3",{staticClass:"pb-10 text-center"},[t._v("Frontend Developer")]),t._v(" "),n("h3",{staticClass:"pb-10"},[n(o.a,{staticClass:"mb-1 mr-2",attrs:{color:"pink"}},[t._v(" mdi-email-outline ")]),t._v("\n      analinsdev@gmail.com\n    ")],1),t._v(" "),n("h3",{staticClass:"pb-10"},[n(o.a,{staticClass:"mb-1 mr-2",attrs:{color:"green"}},[t._v(" mdi-whatsapp ")]),t._v("\n      +55 83986404550\n    ")],1),t._v(" "),n("h3",{staticClass:"pb-10 btn",on:{click:function(n){return t.goTo("https://github.com/AnaLinsDev")}}},[n(o.a,{staticClass:"mb-1 mr-2",attrs:{color:"pink"}},[t._v(" mdi-github ")]),t._v("\n      Github\n    ")],1),t._v(" "),n("h3",{staticClass:"pb-10 btn",on:{click:function(n){return t.goTo("https://www.linkedin.com/in/ana-julia-lins-devbrasil/")}}},[n(o.a,{staticClass:"mb-1 mr-2",attrs:{color:"pink"}},[t._v(" mdi-linkedin ")]),t._v("\n      Linkedin\n    ")],1),t._v(" "),n("p",{staticClass:"text-justify mw_500"},[t._v("\n     "+t._s(t.$t("about_me_desc"))+"\n    ")])])],1)}),[],!1,null,"8305da4e",null);n.default=component.exports}}]);