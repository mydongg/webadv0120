(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{402:function(t,e,s){},409:function(t,e,s){"use strict";var i=s(402);s.n(i).a},415:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"review"},[s("div",{staticClass:"review__header"},[s("div",{staticClass:"avatar avatar--smol",style:{backgroundImage:"url(https://webdev-api.loftschool.com/"+t.reviewItem.photo+")"}}),s("div",{staticClass:"review__author"},[s("div",{staticClass:"review__name"},[t._v(t._s(t.reviewItem.author))]),s("div",{staticClass:"review__occ"},[t._v(t._s(t.reviewItem.occ))])])]),s("div",{staticClass:"review__body"},[s("div",{staticClass:"review__text"},[t._v(t._s(t.reviewItem.text))]),s("div",{staticClass:"review__controls"},[s("div",{staticClass:"review__change"},[s("a",{staticClass:"controlbutton",on:{click:function(e){return e.preventDefault(),t.updateThisReview(e)}}},[s("div",{staticClass:"controlbutton__text"},[t._v("Править")]),s("div",{staticClass:"controlbutton__icon"},[s("svg",{staticClass:"controlbutton__svg controlbutton__svg--change",attrs:{preserveAspectRatio:"none"}},[s("use",{attrs:{"xlink:href":"sprite.svg#pencil"}})])])])]),s("div",{staticClass:"review__delete"},[s("a",{staticClass:"controlbutton",on:{click:function(e){return e.preventDefault(),t.deleteThisReview(e)}}},[s("div",{staticClass:"controlbutton__text"},[t._v("Удалить")]),s("div",{staticClass:"controlbutton__icon"},[s("svg",{staticClass:"controlbutton__svg controlbutton__svg--remove",attrs:{preserveAspectRatio:"none"}},[s("use",{attrs:{"xlink:href":"sprite.svg#remove"}})])])])])])])])};i._withStripped=!0;var r=s(30);function n(t,e,s,i,r,n,o){try{var a=t[n](o),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(i,r)}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var a={props:{reviewItem:{photo:"",author:"",occ:"",text:"",id:0}},methods:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(Object(s));"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),i.forEach(function(e){o(t,e,s[e])})}return t}({},Object(r.b)("reviews",["deleteReview","setAction","setItemToUpdate"]),Object(r.b)("errors",["setUpdate"]),{deleteThisReview:function(){confirm("Удалить отзыв?")?this.deleteReview(this.reviewItem.id):this.setUpdate("Действие отменено")},updateThisReview:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setAction("");case 2:this.setAction("update"),e=Object.assign({},this.reviewItem),this.setItemToUpdate(e);case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,s=arguments;return new Promise(function(i,r){var o=t.apply(e,s);function a(t){n(o,i,r,a,c,"next",t)}function c(t){n(o,i,r,a,c,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}()})},c=(s(409),s(45)),v=Object(c.a)(a,i,[],!1,null,"4752f91b",null);v.options.__file="src/admin/components/reviewItem.vue";e.default=v.exports}}]);