"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("postcss-value-parser")),r={preserve:!0};const s=/^place-(content|items|self)/,l=e=>("preserve"in Object(e)&&(r.preserve=Boolean(e.preserve)),{postcssPlugin:"postcss-place",Declaration:(e,{result:l})=>{s.test(e)&&((e,{result:l})=>{const o=e.prop.match(s)[1];let a;try{a=t.default(e.value)}catch(t){e.warn(l,`Failed to parse value '${e.value}'. Leaving the original value intact.`)}if(void 0===a)return;let n=[];n=a.nodes.length?a.nodes.filter((e=>"word"===e.type||"function"===e.type)).map((e=>t.default.stringify(e))):[t.default.stringify(a)],e.cloneBefore({prop:`align-${o}`,value:n[0]}),e.cloneBefore({prop:`justify-${o}`,value:n[1]||n[0]}),r.preserve||e.remove()})(e,{result:l})}});l.postcss=!0,module.exports=l;
//# sourceMappingURL=index.cjs.map
