!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-bmap-chooselocation",[],e):"object"==typeof exports?exports["vue-bmap-chooselocation"]=e():t["vue-bmap-chooselocation"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var s=a(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function a(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=n(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(a[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){function a(t){for(var e=0;e<t.length;e++){var n=t[e],a=p[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(s(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(s(n.parts[i]));p[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function s(t){var e,n,a=document.querySelector("style["+g+'~="'+t.id+'"]');if(a){if(h)return v;a.parentNode.removeChild(a)}if(y){var s=f++;a=u||(u=i()),e=o.bind(null,a,s,!1),n=o.bind(null,a,s,!0)}else a=i(),e=r.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function o(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function r(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),m.ssrId&&t.setAttribute(g,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(9),p={},l=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,i){h=n,m=i||{};var s=d(t,e);return a(s),function(e){for(var n=[],i=0;i<s.length;i++){var o=s[i],r=p[o.id];r.refs--,n.push(r)}e?(s=d(t,e),a(s)):s=[];for(var i=0;i<n.length;i++){var r=n[i];if(0===r.refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete p[r.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,a,i,s){var o,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,r=t.default);var d="function"==typeof r?r.options:r;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i);var p;if(s?(p=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=p):a&&(p=a),p){var l=d.functional,u=l?d.render:d.beforeCreate;l?(d._injectStyles=p,d.render=function(t,e){return p.call(e),u(t,e)}):d.beforeCreate=u?[].concat(u,p):[p]}return{esModule:o,exports:r,options:d}}},function(t,e,n){"use strict";var a=n(10);e.a={name:"vue-bmap-chooselocation",components:{AddressItem:a.a},mounted:function(){},methods:{itemchecked:function(t){this.checked=t},show:function(){var t=this;this.showstatus=!0,this.$nextTick(function(){t.initMaps(),t.locate(),t.getSuggestion()})},hide:function(){this.showstatus=!1},initMaps:function(){var t=this;this.map=new BMap.Map("map");var e=new BMap.Point(116.404,39.915);this.map.centerAndZoom(e,18),this.map.addEventListener("click",this.onMapClicked),this.map.addEventListener("dragend",function(){var e=t.map.pointToOverlayPixel(t.map.getCenter()),n=t.map.overlayPixelToPoint({x:e.x,y:e.y});t.analyze(n)})},locate:function(){var t=this.map,e=this;(new BMap.Geolocation).getCurrentPosition(function(n){if(this.getStatus()===BMAP_STATUS_SUCCESS){var a=new BMap.Marker(n.point);t.addOverlay(a),t.panTo(n.point),e.analyze(n.point)}else console.log("failed ",this.getStatus())})},getAroundPOI:function(t){var e=this.map,n=new BMap.Point(this.point.lng,this.point.lat),a=this,i=new BMap.LocalSearch(e,{onSearchComplete:function(t){if(i.getStatus()===BMAP_STATUS_SUCCESS){var e=[];t.forEach(function(t){e=e.concat(t.Ar)}),a.potentialLocation=e}else console.warn("get poi error ,code -> ",i.getStatus())}});i.searchNearby(t,n,1e3)},analyze:function(t){var e=this;(new BMap.Geocoder).getLocation(t,function(t){e.point=t.point,e.currentAddress=t.address,e.poiKeyword=t.street||t.address})},getSuggestion:function(){var t=this;new BMap.Autocomplete({input:"suggestId",location:this.map}).addEventListener("onconfirm",function(e){var n=e.item.value;t.searchValue=n.province+n.city+n.district+n.street+n.business,t.setPlace(t.searchValue)})},selectAddress:function(t,e){this.checked=e,console.log(this.checked),console.log(t)},setPlace:function(t){var e=this.map;e.clearOverlays();var n=this,a=new BMap.LocalSearch(e,{onSearchComplete:function(){var t=a.getResults().getPoi(0).point;e.centerAndZoom(t,18),e.addOverlay(new BMap.Marker(t)),n.analyze(t)}});a.search(t)},onMapClicked:function(t){console.log(t)},onBackClick:function(){this.hide()},onOkClick:function(){-1==this.checked?(console.log("已选中当前位置!"),console.log(this.currentAddress,this.point),this.$emit("change",this.currentAddress,this.point),this.hide()):(console.log(this.potentialLocation[this.checked].address,this.potentialLocation[this.checked].point),this.$emit("change",this.potentialLocation[this.checked].address,this.potentialLocation[this.checked].point),this.hide())}},data:function(){return{showstatus:!1,checked:-1,map:null,searchValue:"",currentAddress:"",point:{},poiKeyword:"",potentialLocation:[]}},watch:{poiKeyword:function(t){this.getAroundPOI(["栋","店","小区","学校","餐饮",t])}}}},function(t,e,n){"use strict";e.a={props:{title:{type:String,default:""},address:{type:String,default:""},checked:{type:Boolean,default:!1}},data:function(){return{name2:this.name}},methods:{clear:function(){this.name2=""}},watch:{name:function(t){this.name2=this.name},name2:function(t){console.log(this.name2),this.$emit("change",this.name2)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6);a.a.install=function(t){return t.component(a.a.name,a.a)},e.default=a.a},function(t,e,n){"use strict";function a(t){n(7)}var i=n(3),s=n(14),o=n(2),r=a,c=o(i.a,s.a,!1,r,"data-v-390213d6",null);e.a=c.exports},function(t,e,n){var a=n(8);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("61c9290c",a,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"@import url(https://at.alicdn.com/t/font_1450071_2k03ofa1d9w.css);",""]),e.push([t.i,"[data-v-390213d6]{margin:0;padding:0}input[data-v-390213d6]{outline:none}.ys-map[data-v-390213d6]{height:100%;width:100%;overflow:hidden;position:fixed;top:0;left:0;z-index:0;background:#fff}.ys-map .map-wrapper[data-v-390213d6]{height:50%;position:relative}.ys-map .map-wrapper #map[data-v-390213d6]{height:100%}.ys-map .map-wrapper img[data-v-390213d6]{width:20px;object-fit:contain}.ys-map .map-wrapper .position[data-v-390213d6]{position:absolute;left:50%;font-size:30px;color:#0e96da;top:50%;transform:translate(-50%,-75%);z-index:100;width:20px}.ys-map .map-wrapper .nowposition[data-v-390213d6]{position:absolute;right:20px;bottom:20px;z-index:100;width:20px;font-size:30px;color:#0e96da}.ys-map #tips[data-v-390213d6]{width:100%;height:50%;overflow-y:scroll;position:relative;padding:1px 12px}.ys-map .ys-search-address[data-v-390213d6]{position:absolute;left:0;top:0;width:100%;height:60px;background:#f2f2f2;padding:8px 0;display:flex;justify-content:space-around;align-items:center}.ys-map .ys-search-address .back[data-v-390213d6]{width:20px;object-fit:contain}.ys-map .ys-search-address .okBtn[data-v-390213d6]{background:#e51c23;padding:6px 10px;color:#fff;border-radius:8px;font-size:14px;text-decoration:none}.ys-map .ys-search-address .ys-search-wrapper[data-v-390213d6]{width:70%;border-radius:20px;background:rgba(0,0,0,.06);display:flex;align-items:center}.ys-map .ys-search-address .ys-search-wrapper input[data-v-390213d6]{font-size:14px}.ys-map .ys-search-address .ys-search-wrapper .searchico[data-v-390213d6]{width:24px;fill:#bbb;margin-left:10px;font-size:20px;color:#bbb}.ys-map .ys-search-address .ys-search-wrapper .clear[data-v-390213d6]{margin-right:10px;font-size:20px;color:#bbb}.ys-map .ys-search-address .ys-search-wrapper input[data-v-390213d6]{padding:8px 12px;background:transparent;border:none;width:80%;height:100%}.ys-map .ys-search-address .ys-search-wrapper img[data-v-390213d6]{width:12px;object-fit:contain}.ys-map .search-tips[data-v-390213d6]{position:absolute;left:0;top:50px;background:hsla(0,0%,100%,.8);border:1px solid silver;height:auto;display:none}",""])},function(t,e){t.exports=function(t,e){for(var n=[],a={},i=0;i<e.length;i++){var s=e[i],o=s[0],r=s[1],c=s[2],d=s[3],p={id:t+":"+i,css:r,media:c,sourceMap:d};a[o]?a[o].parts.push(p):n.push(a[o]={id:o,parts:[p]})}return n}},function(t,e,n){"use strict";function a(t){n(11)}var i=n(4),s=n(13),o=n(2),r=a,c=o(i.a,s.a,!1,r,"data-v-51529fa7",null);e.a=c.exports},function(t,e,n){var a=n(12);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(1)("e962e48c",a,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"@import url(https://at.alicdn.com/t/font_1450071_2k03ofa1d9w.css);",""]),e.push([t.i,"[data-v-51529fa7]{margin:0;padding:0}.mpas_items[data-v-51529fa7]{display:flex;justify-content:space-between;align-items:center;flex-wrap:nowrap;flex-direction:row;width:94%}.map_select[data-v-51529fa7]{margin-right:10px}.weizhi[data-v-51529fa7]{padding:8px;border-bottom:1px solid #f5f5f5}.weizhi .title[data-v-51529fa7]{font-size:16px;margin-bottom:5px}.weizhi .address[data-v-51529fa7]{font-size:14px}.icon-xuanze[data-v-51529fa7]{font-size:20px;color:#0f96db}.xuanze[data-v-51529fa7]{color:#0f96db}",""])},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mpas_items"},[n("div",{staticClass:"weizhi"},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"address"},[t._v(t._s(t.address))])]),t._v(" "),t.checked?n("div",{staticClass:"map_select"},[n("i",{staticClass:"icon iconfont icon-xuanze xuanze"})]):t._e()])},i=[],s={render:a,staticRenderFns:i};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showstatus,expression:"showstatus"}],staticClass:"ys-map"},[n("div",{staticClass:"map-wrapper"},[n("div",{attrs:{id:"map"}}),t._v(" "),n("i",{staticClass:"icon iconfont icon-weizhi position"}),t._v(" "),n("i",{staticClass:"icon iconfont icon-dingwei nowposition",on:{click:t.locate}})]),t._v(" "),n("div",{attrs:{id:"tips"}},[n("AddressItem",{attrs:{title:"当前位置",checked:-1==t.checked,address:t.currentAddress,extra:"(以图上标记位置为准)"},nativeOn:{click:function(e){return t.selectAddress(t.currentAddress,-1)}}}),t._v(" "),t._l(t.potentialLocation,function(e,a){return n("AddressItem",{key:a,attrs:{title:e.title,address:e.address,checked:a==t.checked},nativeOn:{click:function(n){return t.selectAddress(e,a)}}})})],2),t._v(" "),n("div",{staticClass:"ys-search-address"},[n("i",{staticClass:"icon iconfont icon-back back",on:{click:t.onBackClick}}),t._v(" "),n("div",{staticClass:"ys-search-wrapper"},[n("i",{staticClass:"icon iconfont icon-search searchico",on:{click:function(e){t.searchValue=""}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{type:"text",title:"",id:"suggestId",placeholder:"定位不准？试试手动输入"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),n("i",{staticClass:"icon iconfont icon-close clear",on:{click:function(e){t.searchValue=""}}})]),t._v(" "),n("a",{staticClass:"okBtn",attrs:{href:"javascript:;"},on:{click:t.onOkClick}},[t._v("确定")])]),t._v(" "),n("div",{staticClass:"search-tips",attrs:{id:"result"}},[t._v("\n      tips\n    ")])])])},i=[],s={render:a,staticRenderFns:i};e.a=s}])});
//# sourceMappingURL=vue-bmap-chooselocation.js.map