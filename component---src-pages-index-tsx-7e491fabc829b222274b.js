"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{8839:function(e,a,r){r.r(a),r.d(a,{default:function(){return v}});var t,n=r(7294),c=r(2945),l=r(7182),u=r(5785),s=function(e){var a=e.index,r=e.random,t=e.char,c=e.rows,l=a>=r?a-r:c-(r-a);return n.createElement("div",{key:a,className:"matrix-character matrix-character--"+l,style:{top:20-26*l}},n.createElement("div",{className:"character__level1"},t),n.createElement("div",{className:"character__level2"},t),n.createElement("div",{className:"character__level3"},t))},o=function(e){var a=e.random,r=e.scale,t=e.chars,c=e.rows;return n.createElement("div",{className:"matrix-rainDrop",style:r},t.map((function(e,r){return n.createElement(s,{key:r,index:r,random:a,char:e,rows:c})})))},m=(t="一〇九二人入八刀力十又乃万丈三上下丸久亡凡刃千口土夕大女寸小山川工己干弓才之巾々中互五井今介元公六升午天太夫少尺支文木欠毛火父牛犬王允爪勿只号央失矢未末本主白示立市穴它いうえくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばひびぷへべぺまみむめもやゆよらりるれろわゐんゔ゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ･ｰ0123456789-+=*?!@#<>",(0,u.Z)(t).sort((function(){return Math.random()-.5})).join("")),i=m.length,f=Array(30).fill().map((function(e,a){var r=Math.random();return{transform:"scale("+(r+.5)+") translate("+(500*r-100)+"%, 0)",filter:"blur("+5*Math.abs(.5-r)+"px)"}})),h=Array(30).fill().map((function(){return Math.floor(30*Math.random())})),d=function(){var e=(0,n.useState)(h),a=e[0],r=e[1],t=(0,n.useState)(0),c=t[0],l=t[1],s=(0,n.useState)(function(){for(var e=[],a=0;a<30;a++){for(var r=[],t=0;t<30;t++){var n=m[Math.floor(Math.random()*i)];r.push(n)}e.push(r)}return e}()),d=s[0],v=s[1];return(0,n.useEffect)((function(){var e=setInterval((function(){l((function(e){return e+1}))}),10);return function(){clearTimeout(e)}}),[]),(0,n.useEffect)((function(){var e=(0,u.Z)(d);r(a.map((function(e,a){return c%10==0?0===e?30:e-1:e}))),v(e.map((function(r,t){return e[t].map((function(e,r){return r===a[t]?m[Math.floor(Math.random()*i)]:e}))})))}),[c]),n.createElement("div",{className:"matrix-canvas"},n.createElement("div",{className:"matrix-rain"},d&&d.map((function(e,r){return n.createElement(o,{key:r,chars:e,columnIndex:r,random:a[r],rows:30,scale:f[r]})}))))},v=function(){return n.createElement(l.Z,{className:"home"},n.createElement("div",{className:"homePage"},n.createElement(d,null),n.createElement(c.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7e491fabc829b222274b.js.map