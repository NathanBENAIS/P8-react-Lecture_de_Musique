import e from"postcss-value-parser";var s={preserve:!1};const r=r=>{if(l(r)){const{value:a}=r,t=e(a);t.walk((e=>{o(e)&&c(e)}));const l=t.toString();l!==a&&(s.preserve?r.cloneBefore({value:l}):r.value=l)}},a=/^#([0-9A-Fa-f]{4}(?:[0-9A-Fa-f]{4})?)$/,t=/#([0-9A-Fa-f]{4}(?:[0-9A-Fa-f]{4})?)\b/,l=e=>t.test(e.value),o=e=>"word"===e.type&&a.test(e.value),c=e=>{const s=e.value,r=`0x${5===s.length?s.slice(1).replace(/[0-9A-f]/g,"$&$&"):s.slice(1)}`,[a,t,l,o]=[parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),parseInt(r.slice(6,8),16),Math.round(parseInt(r.slice(8,10),16)/255*1e5)/1e5];e.value=`rgba(${a},${t},${l},${o})`};function n(e){return s.preserve="preserve"in Object(e)&&Boolean(e.preserve),{postcssPlugin:"postcss-color-hex-alpha",Declaration:r}}n.postcss=!0;export{n as default};
//# sourceMappingURL=index.mjs.map
