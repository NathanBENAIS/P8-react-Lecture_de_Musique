"use strict";const e=/^(column-gap|gap|row-gap)$/i,o=e=>"display"===e.prop&&"grid"===e.value;module.exports=function(p){const r=!("preserve"in Object(p))||Boolean(p.preserve);return{postcssPlugin:"postcss-gap-properties",Declaration(p){e.test(p.prop)&&p.parent.some(o)&&(p.cloneBefore({prop:`grid-${p.prop}`}),r||p.remove())}}},module.exports.postcss=!0;
//# sourceMappingURL=index.cjs.map
