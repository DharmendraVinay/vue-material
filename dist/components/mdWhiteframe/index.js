!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-whiteframe",e.extend(a.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(178),a=o(i);e.exports=t.default},76:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdElevation:[String,Number]},data:function(){return{elevation:0===this.mdElevation?0:this.mdElevation||1}},watch:{mdElevation:function(){this.elevation=this.mdElevation}},computed:{classes:function(){var e=parseInt(this.elevation,10),t="md-whiteframe-";return isNaN(e)||"number"!=typeof e?this.elevation.indexOf("dp")>-1&&(t+=this.elevation):(t+=e,t+="dp"),t}}},e.exports=t.default},81:function(e,t){},178:function(e,t,n){var o,r;n(81),o=n(76);var i=n(183);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=o},183:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-whiteframe",class:e.classes},[e._t("default")])},staticRenderFns:[]}}})});