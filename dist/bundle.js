!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),r=i(o),a=n(3),l=i(a),s=n(5),d=i(s),u=n(4),c=i(u),p=n(8),m=i(p),f=n(7),h=i(f),b=n(6),v=i(b),g=[r["default"],l["default"],d["default"],c["default"],m["default"],h["default"],v["default"]];HTMLImports.whenReady(function(){g.forEach(function(e){return Polymer(e)})})},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={is:"hello-world",properties:{name:{type:String,value:"Name"},pressed:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}},listeners:{tap:"toggle"},toggle:function(){this.pressed=!this.pressed},ready:function(){return console.log("ready")},created:function(){return console.log("created")},attached:function(){return console.log("attached")},detached:function(){return console.log("detached")},attributeChanged:function(){return console.log("attributeChanged")}},function(e){var t=n(16),i=n(9),o=e.createElement("div");o.setAttribute("name","hello-world"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){"use strict";function i(){return{is:"pr-clock",properties:{time:{type:String,value:o()},format:{type:String,value:"24h",observer:"_formatChanged",notify:!0}},ready:function(){var e=this;setInterval(function(){e.time=o()},1e3)},getTimeString:function(e,t){switch(t){default:case"24h":return l(e.getHours())+":"+l(e.getMinutes())+":"+l(e.getSeconds());case"12h":return l(r(e.getHours()))+":"+l(e.getMinutes())+":"+l(e.getSeconds())+" "+a(e.getHours())}},_formatChanged:function(e){console.log("pr-clock: time format changed to",e)},handleClick:function(){this.fire("custom-polymer-event","hello!")}}}function o(){return new Date}function r(e){return e>12?e-12:0===e?12:e}function a(e){return e>12?"PM":"AM"}function l(e){return e<10?"0"+e:e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i(),function(e){var t=n(17),i=n(10),o=e.createElement("div");o.setAttribute("name","pr-clock"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={is:"pr-dropdown-row",properties:{value:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0}},listeners:{tap:"_onTap"},_onTap:function(){this.fire("row-click",{value:this.value})},attached:function(){var e=this,t=Polymer.dom(this).parentNode;t.addEventListener("dropdown-value-changed",function(t){var n=t.detail;e.selected=e.value===n.value})}},function(e){var t=n(18),i=n(11),o=e.createElement("div");o.setAttribute("name","pr-dropdown-row"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={is:"pr-dropdown",properties:{opened:{type:Boolean,value:!1},label:{type:String,value:"Choose one"},value:{type:String,notify:!0,reflectToAttribute:!0}},listeners:{"row-click":"_onRowClick"},_onLabelTap:function(){this.open()},_onMaskTap:function(){this.close()},_onRowClick:function(e){this.label=e.target.innerText,this.value=e.detail.value,this.fire("dropdown-value-changed",{value:this.value}),this.close()},open:function(){this.opened=!this.opened;var e=this.getBoundingClientRect(),t=e.left,n=e.width,i=e.height,o=e.top;this.customStyle["--list-top"]=o+i+"px",this.customStyle["--list-left"]=t+"px",this.customStyle["--list-width"]=n+"px",this.updateStyles()},close:function(){this.opened=!1},ready:function(){this.placeholder=this.label}},function(e){var t=n(19),i=n(12),o=e.createElement("div");o.setAttribute("name","pr-dropdown"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={is:"pr-radio-group",properties:{selected:{type:String,value:"",observer:"_setSelected",reflectToAttribute:!0}},listeners:{tap:"_onTap"},_onTap:function(e){"PR-RADIO"!==e.target.nodeName||e.target.checked||this._setSelected(e.target.value)},_validateSelected:function(e){return Polymer.dom(this).querySelectorAll("pr-radio[value]").some(function(t){return t.value===e})},_setSelected:function(e){if(this._validateSelected(e)){var t=Polymer.dom(this),n=t.querySelectorAll('[value="'+e+'"]'),i=t.querySelectorAll("[checked]");i&&i.map(function(e){return e.removeAttribute("checked")}),n&&(n.map(function(e){return e.setAttribute("checked","")}),this.selected=e,this.fire("selected-changed",this.selected))}},attached:function(){var e=this,t=new MutationObserver(function(t){return e._setSelected(e.selected)});t.observe(this,{childList:!0,attributes:!0})}},function(e){var t=n(20),i=n(13),o=e.createElement("div");o.setAttribute("name","pr-radio-group"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={is:"pr-radio",properties:{checked:{type:Boolean,value:!1},value:{type:String,value:"",notify:!0}}},function(e){var t=n(21),i=n(14),o=e.createElement("div");o.setAttribute("name","pr-radio"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={is:"pr-slider",properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0},max:{type:Number,value:100},tracking:{type:Boolean,value:!1}},handleTrack:function(e){switch(e.detail.state){case"start":return Polymer.dom(this.$.bar).classList.add("tracking");case"track":return this.updateValue(e.detail.x);case"end":return Polymer.dom(this.$.bar).classList.remove("tracking")}},handleTap:function(e){this.updateValue(e.detail.x)},updateValue:function(e){var t=this.getRelativePosition(e);this.value=this.convertPositionToValue(t),this.position=t},getRelativePosition:function(e){var t=e-this.$.bar.offsetLeft-this.$.pin.offsetWidth/2;return t>=0&&t<=this.$.bar.offsetWidth?t:t<0?0:this.$.bar.offsetWidth},convertPositionToValue:function(e){return Math.round(e*this.max/this.$.bar.offsetWidth)},convertValueToPosition:function(e){return Math.round(e*this.$.bar.offsetWidth/this.max)},attached:function(){this.position=this.convertValueToPosition(this.value)}},function(e){var t=n(22),i=n(15),o=e.createElement("div");o.setAttribute("name","pr-slider"),o.setAttribute("hidden",""),t.indexOf("<template>")?o.innerHTML=t.replace(/(<template>)([^]*<\/template>)/gim,function(e,t,n){return t+"<style>"+i+"</style>"+n}):o.innerHTML=t.replace("</dom-module>","<template><style>"+i+"</style></template></dom-module>"),e.body.appendChild(o)}(document)},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"p{color:blue}.active-true{outline:1px solid red}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,":host{text-align:center}.content-wrapper{font-size:20px}.time{margin:1em;padding:1em;color:blue;background:#b3ffb3}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,":host{box-sizing:border-box;display:block;padding:20px;width:100%;background:#fff;-webkit-transition:all .1s ease;transition:all .1s ease;cursor:pointer}:host:not(:last-child){border-bottom:1px solid #ccc}:host(:hover),:host([selected]){background:rgba(0,0,255,.3)}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,":host{display:inline-block;width:200px;height:50px;border:1px solid #000;box-sizing:border-box}.label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:calc(100% - 40px);height:100%;padding:0 20px}.list{top:var(--list-top);left:var(--list-left);width:var(--list-width);overflow:hidden;background:#fff;box-sizing:border-box;border:1px solid #000;z-index:1}.list,.mask{position:fixed}.mask{top:0;right:0;bottom:0;left:0}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,":host{display:inline-block}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,":host{cursor:pointer}.radio,:host{display:inline-block}.radio{width:16px;height:16px;border-radius:50%;border:3px solid #ccc;vertical-align:middle;box-shadow:inset 0 0 0 0 #fff;-webkit-transition:all .2s ease;transition:all .2s ease}.radio[checked]{border-color:#999;box-shadow:inset 0 0 0 4px #fff,inset 0 0 0 999px #999}.label{display:inline-block;vertical-align:middle}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,":host{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#bar,:host{-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}#bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:var(--pr-slider-bar-height,7px);background-image:-webkit-linear-gradient(left,var(--pr-slider-bar-background,#ccc) 50%,var(--pr-slider-bar-background-darken,#aaa) 0);background-image:linear-gradient(90deg,var(--pr-slider-bar-background,#ccc) 50%,var(--pr-slider-bar-background-darken,#aaa) 0);background-size:200%;@apply (--pr-slider-bar-theme)}#bar #pin:hover,#bar.tracking #pin{-webkit-transform:translateX(-50%) scale(1.2);transform:translateX(-50%) scale(1.2);@apply (--pr-slider-pin-active-theme)}#pin{position:relative;display:block;width:var(--pr-slider-pin-size,16px);height:var(--pr-slider-pin-size,16px);background:var(--pr-slider-pin-color,#888);border-radius:50%;-webkit-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1);-webkit-transition:transform .2s ease;transition:transform .2s ease;cursor:pointer;@apply (--pr-slider-pin-theme)}",""])},function(e,t){e.exports="<dom-module id=hello-world> <template> <p class$=active-{{pressed}}>{{name}}</p> <input type=text value={{name::input}}> <content></content> </template> </dom-module>"},function(e,t){e.exports="<dom-module id=pr-clock> <template> <div class=content-wrapper> <content></content> </div> <div class=time on-tap=handleClick> [[getTimeString(time, format)]] </div> </template> </dom-module>"},function(e,t){e.exports="<dom-module id=pr-dropdown-row> <template> <content></content> </template> </dom-module>"},function(e,t){e.exports="<dom-module id=pr-dropdown> <template> <div class=mask on-tap=_onMaskTap hidden$={{!opened}}></div> <div class=label on-tap=_onLabelTap> {{label}} </div> <div class=list hidden$={{!opened}}> <content></content> </div> </template> </dom-module>"},function(e,t){e.exports="<dom-module id=pr-radio-group> <template> <content></content> </template> </dom-module>"},function(e,t){e.exports="<dom-module id=pr-radio> <template> <span class=radio checked$=[[checked]]></span> <span class=label> <content></content> </span> </template> </dom-module>"},function(e,t){e.exports='<dom-module id=pr-slider> <template> <div id=bar on-tap=handleTap style="background-position:{{position}}px 0"> <div id=pin on-track=handleTrack style=left:{{position}}px> </div> </div> </template> </dom-module>'}]);