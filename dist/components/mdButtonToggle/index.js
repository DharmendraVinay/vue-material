!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueMaterial=o():t.VueMaterial=o()}(this,function(){return function(t){function o(d){if(e[d])return e[d].exports;var n=e[d]={exports:{},id:d,loaded:!1};return t[d].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="/",o(0)}({0:function(t,o,e){t.exports=e(10)},10:function(t,o,e){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}function n(t){t.component("md-button-toggle",t.extend(l.default)),t.material.styles.push(m.default)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=n;var g=e(130),l=d(g),r=e(107),m=d(r);t.exports=o.default},40:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=void 0;o.default={props:{mdSingle:Boolean},mounted:function(){var t=this;this.$children.forEach(function(o){var d=o.$el,n="md-toggle";e=function(){t.mdSingle?(t.$children.forEach(function(t){t.$el.classList.remove(n)}),d.classList.add(n)):d.classList.toggle(n)},d&&d.classList.contains("md-button")&&d.addEventListener("click",e)})},beforeDestroy:function(){this.$children.forEach(function(t){var o=t.$el;o&&o.classList.contains("md-button")&&o.removeEventListener("click",e)})}},t.exports=o.default},83:function(t,o){},107:function(t,o){t.exports='.THEME_NAME .md-button-toggle .md-button:after,.THEME_NAME.md-button-toggle .md-button:after{width:1px;position:absolute;top:0;bottom:0;left:0;content:" "}.THEME_NAME .md-button-toggle .md-toggle,.THEME_NAME.md-button-toggle .md-toggle{color:BACKGROUND-CONTRAST-600;background-color:BACKGROUND-COLOR-500}.THEME_NAME .md-button-toggle .md-toggle:hover:not([disabled]),.THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]){background-color:BACKGROUND-COLOR-600}.THEME_NAME .md-button-toggle .md-toggle+.md-toggle:after,.THEME_NAME.md-button-toggle .md-toggle+.md-toggle:after{background-color:BACKGROUND-COLOR-600}.THEME_NAME .md-button-toggle.md-primary .md-toggle,.THEME_NAME.md-button-toggle.md-primary .md-toggle{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME .md-button-toggle.md-primary .md-toggle:hover:not([disabled]),.THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]){background-color:PRIMARY-COLOR-600}.THEME_NAME .md-button-toggle.md-primary .md-toggle+.md-toggle:after,.THEME_NAME.md-button-toggle.md-primary .md-toggle+.md-toggle:after{background-color:PRIMARY-COLOR-700}.THEME_NAME .md-button-toggle.md-accent .md-toggle,.THEME_NAME.md-button-toggle.md-accent .md-toggle{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME .md-button-toggle.md-accent .md-toggle:hover:not([disabled]),.THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]){background-color:ACCENT-COLOR-600}.THEME_NAME .md-button-toggle.md-accent .md-toggle+.md-toggle:after,.THEME_NAME.md-button-toggle.md-accent .md-toggle+.md-toggle:after{background-color:ACCENT-COLOR-700}.THEME_NAME .md-button-toggle.md-warn .md-toggle,.THEME_NAME.md-button-toggle.md-warn .md-toggle{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME .md-button-toggle.md-warn .md-toggle:hover:not([disabled]),.THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]){background-color:WARN-COLOR-600}.THEME_NAME .md-button-toggle.md-warn .md-toggle+.md-toggle:after,.THEME_NAME.md-button-toggle.md-warn .md-toggle+.md-toggle:after{background-color:WARN-COLOR-700}.THEME_NAME .md-button-toggle [disabled],.THEME_NAME.md-button-toggle [disabled]{color:rgba(0,0,0,0.26)}.THEME_NAME .md-button-toggle [disabled].md-toggle,.THEME_NAME.md-button-toggle [disabled].md-toggle{color:BACKGROUND-CONTRAST-0.2;background-color:rgba(0,0,0,0.26)}\n'},130:function(t,o,e){var d,n;e(83),d=e(40);var g=e(186);n=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(n=d=d.default),"function"==typeof n&&(n=n.options),n.render=g.render,n.staticRenderFns=g.staticRenderFns,t.exports=d},186:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement;return o("div",{staticClass:"md-button-group md-button-toggle"},[t._t("default")])},staticRenderFns:[]}}})});