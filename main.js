(()=>{var Le=Object.create;var te=Object.defineProperty;var Oe=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Me=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty;var fe=a=>{throw TypeError(a)};var De=(a,e,t)=>e in a?te(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var He=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var Fe=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of qe(e))!Pe.call(a,i)&&i!==t&&te(a,i,{get:()=>e[i],enumerable:!(n=Oe(e,i))||n.enumerable});return a};var Ze=(a,e,t)=>(t=a!=null?Le(Me(a)):{},Fe(e||!a||!a.__esModule?te(t,"default",{value:a,enumerable:!0}):t,a));var A=(a,e,t)=>De(a,typeof e!="symbol"?e+"":e,t),Be=(a,e,t)=>e.has(a)||fe("Cannot "+t);var ge=(a,e,t)=>e.has(a)?fe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var J=(a,e,t)=>(Be(a,e,"access private method"),t);var me=He((Z,ne)=>{(function(a,e){typeof Z=="object"&&typeof ne=="object"?ne.exports=e():typeof define=="function"&&define.amd?define([],e):typeof Z=="object"?Z.tag=e():a.tag=e()})(Z,(function(){return(function(){"use strict";var a={145:function(p,c,h){function m(b,f){(f==null||f>b.length)&&(f=b.length);for(var x=0,y=Array(f);x<f;x++)y[x]=b[x];return y}h.d(c,{A:function(){return m}})},284:function(p,c,h){function m(b){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},m(b)}h.d(c,{A:function(){return m}})},458:function(p,c,h){h.d(c,{A:function(){return f}});var m=h(145),b=h(800);function f(x){return(function(y){if(Array.isArray(y))return(0,m.A)(y)})(x)||(function(y){if(typeof Symbol!="undefined"&&y[Symbol.iterator]!=null||y["@@iterator"]!=null)return Array.from(y)})(x)||(0,b.A)(x)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}},800:function(p,c,h){h.d(c,{A:function(){return b}});var m=h(145);function b(f,x){if(f){if(typeof f=="string")return(0,m.A)(f,x);var y={}.toString.call(f).slice(8,-1);return y==="Object"&&f.constructor&&(y=f.constructor.name),y==="Map"||y==="Set"?Array.from(f):y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)?(0,m.A)(f,x):void 0}}}},e={};function t(p){var c=e[p];if(c!==void 0)return c.exports;var h=e[p]={exports:{}};return a[p](h,h.exports,t),h.exports}t.d=function(p,c){for(var h in c)t.o(c,h)&&!t.o(p,h)&&Object.defineProperty(p,h,{enumerable:!0,get:c[h]})},t.o=function(p,c){return Object.prototype.hasOwnProperty.call(p,c)};var n={};t.d(n,{default:function(){return u}});var i=t(458),o=t(284),r=t(800);function s(p,c){return(function(h){if(Array.isArray(h))return h})(p)||(function(h,m){var b=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(b!=null){var f,x,y,E,S=[],z=!0,R=!1;try{if(y=(b=b.call(h)).next,m===0){if(Object(b)!==b)return;z=!1}else for(;!(z=(f=y.call(b)).done)&&(S.push(f.value),S.length!==m);z=!0);}catch(L){R=!0,x=L}finally{try{if(!z&&b.return!=null&&(E=b.return(),Object(E)!==E))return}finally{if(R)throw x}}return S}})(p,c)||(0,r.A)(p,c)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function l(p,c){(c==null||c>p.length)&&(c=p.length);for(var h=0,m=Array(c);h<c;h++)m[h]=p[h];return m}var g=["svg","path","circle","rect","line","polyline","polygon","ellipse","g","defs","use","symbol","text","tspan","textPath","marker","linearGradient","radialGradient"];function u(){for(var p=arguments.length,c=new Array(p),h=0;h<p;h++)c[h]=arguments[h];if(typeof c[1]=="string"||typeof c[2]=="string"){var m=s(c,1)[0],b=typeof c[2]=="string"?c[2]:void 0,f=typeof c[1]=="string"?c[1]:void 0,x=c.find((function(O){return O&&!Array.isArray(O)&&(0,o.A)(O)==="object"}))||{},y=c.find((function(O){return Array.isArray(O)}))||[];return b&&(x.id=b),f&&(x.className=f),k(m,y,x)}if(c=c.filter((function(O){return O!=null})),Array.isArray(c[1])){var E=s(c,3),S=E[0],z=E[1],R=z===void 0?[]:z,L=E[2];return k(S,R,L===void 0?{}:L)}var C=s(c,3),X=C[0],I=C[1],je=I===void 0?{}:I,de=C[2];return k(X,de===void 0?[]:de,je)}function k(p){var c,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(m)&&(h=m,m={}),typeof p=="function")return p(m,h);if(p instanceof Node)c=p;else{if(typeof p!="string")throw new Error("Invalid tag ".concat((0,o.A)(p)));c=g.includes(p)?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p)}!m.children&&Array.isArray(h)&&h.length&&(m.children=h);var b=m.ref;return delete m.ref,Object.keys(m).forEach((function(f){var x=m[f];if(x!==void 0)switch(f){case"child":d(c,[x]);break;case"children":if(!Array.isArray(x))throw new Error("children must be an array of Nodes");d(c,x.flat());break;case"attr":Object.keys(x).forEach((function(S){var z=x[S];z!==void 0&&c.setAttribute(S,z)}));break;case"style":typeof x=="string"?c.setAttribute("style",x):Object.keys(x).forEach((function(S){var z=x[S];z!==void 0&&(c.style[S]=z)}));break;case"dataset":for(var y in x){var E=x[y];if(E===void 0)return;c.dataset[y]=E}break;case"on":Object.keys(x).forEach((function(S){var z=x[S];z!==void 0&&z.forEach((function(R){c.addEventListener(S,R)}))}));break;default:g.includes(p)&&["number","string","bigint"].includes((0,o.A)(x))||/-/.test(f)?c.setAttribute(f,x):c[f]=x}})),b&&b.instanceOfRef&&(b.el=c),c}function d(p,c){var h,m=(function(f,x){var y=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(!y){if(Array.isArray(f)||(y=(function(C,X){if(C){if(typeof C=="string")return l(C,X);var I={}.toString.call(C).slice(8,-1);return I==="Object"&&C.constructor&&(I=C.constructor.name),I==="Map"||I==="Set"?Array.from(C):I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)?l(C,X):void 0}})(f))||x&&f&&typeof f.length=="number"){y&&(f=y);var E=0,S=function(){};return{s:S,n:function(){return E>=f.length?{done:!0}:{done:!1,value:f[E++]}},e:function(C){throw C},f:S}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var z,R=!0,L=!1;return{s:function(){y=y.call(f)},n:function(){var C=y.next();return R=C.done,C},e:function(C){L=!0,z=C},f:function(){try{R||y.return==null||y.return()}finally{if(L)throw z}}}})(c);try{for(m.s();!(h=m.n()).done;){var b=h.value;Array.isArray(b)?d(p,b.flat()):(b=w(b))&&p.appendChild(b)}}catch(f){m.e(f)}finally{m.f()}}function w(p){if(typeof p=="function")return w(p());if(p instanceof Promise){var c=document.createTextNode("");p.then((function(m){if(Array.isArray(m))return(m=m.flat()).forEach((function(b){(b=w(b))&&c.before(b)})),void c.remove();(m=w(m))?c.replaceWith(m):c.remove()})),p=c}else if(p instanceof Text)"clone"in p&&(p=p.clone());else if(!(p instanceof Node)){var h=(0,o.A)(p);if(!["number","bigint","string"].includes(h)||h==="string"&&!p)return null;p=u.text("".concat(p))}return p}return window&&!window.tag&&(window.tag=u),Object.defineProperties(u,{get:{value:function(p){return document.querySelector(p)}},getAll:{value:function(p){var c=document.querySelectorAll(p);return(0,i.A)(c)}},text:{value:function(p){return document.createTextNode(p)}}}),n.default})()}))});var T=Ze(me());function se(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var D=se();function $e(a){D=a}var ve=/[&<>"']/,Qe=new RegExp(ve.source,"g"),Ae=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ue=new RegExp(Ae.source,"g"),Ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ke=a=>Ge[a];function _(a,e){if(e){if(ve.test(a))return a.replace(Qe,ke)}else if(Ae.test(a))return a.replace(Ue,ke);return a}var We=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Xe(a){return a.replace(We,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}var Je=/(^|[^\[])\^/g;function v(a,e){let t=typeof a=="string"?a:a.source;e=e||"";let n={replace:(i,o)=>{let r=typeof o=="string"?o:o.source;return r=r.replace(Je,"$1"),t=t.replace(i,r),n},getRegex:()=>new RegExp(t,e)};return n}function xe(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch(e){return null}return a}var Q={exec:()=>null};function be(a,e){let t=a.replace(/\|/g,(o,r,s)=>{let l=!1,g=r;for(;--g>=0&&s[g]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function K(a,e,t){let n=a.length;if(n===0)return"";let i=0;for(;i<n;){let o=a.charAt(n-i-1);if(o===e&&!t)i++;else if(o!==e&&t)i++;else break}return a.slice(0,n-i)}function Ke(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function ye(a,e,t,n){let i=e.href,o=e.title?_(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;let s={type:"link",raw:t,href:i,title:o,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,s}return{type:"image",raw:t,href:i,title:o,text:_(r)}}function Ve(a,e){let t=a.match(/^(\s+)(?:```)/);if(t===null)return e;let n=t[1];return e.split(`
`).map(i=>{let o=i.match(/^\s+/);if(o===null)return i;let[r]=o;return r.length>=n.length?i.slice(n.length):i}).join(`
`)}var H=class{constructor(e){A(this,"options");A(this,"rules");A(this,"lexer");this.options=e||D}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:K(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],i=Ve(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){let i=K(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=K(n.replace(/^ *>[ \t]?/gm,""),`
`);let i=this.lexer.state.top;this.lexer.state.top=!0;let o=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),i=n.length>1,o={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");let r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),s="",l="",g=!1;for(;e;){let u=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;s=t[0],e=e.substring(s.length);let k=t[2].split(`
`,1)[0].replace(/^\t+/,m=>" ".repeat(3*m.length)),d=e.split(`
`,1)[0],w=0;this.options.pedantic?(w=2,l=k.trimStart()):(w=t[2].search(/[^ ]/),w=w>4?1:w,l=k.slice(w),w+=t[1].length);let p=!1;if(!k&&/^ *$/.test(d)&&(s+=d+`
`,e=e.substring(d.length+1),u=!0),!u){let m=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),b=new RegExp(`^ {0,${Math.min(3,w-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),f=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,w-1)}}#`);for(;e;){let y=e.split(`
`,1)[0];if(d=y,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),f.test(d)||x.test(d)||m.test(d)||b.test(e))break;if(d.search(/[^ ]/)>=w||!d.trim())l+=`
`+d.slice(w);else{if(p||k.search(/[^ ]/)>=4||f.test(k)||x.test(k)||b.test(k))break;l+=`
`+d}!p&&!d.trim()&&(p=!0),s+=y+`
`,e=e.substring(y.length+1),k=d.slice(w)}}o.loose||(g?o.loose=!0:/\n *\n *$/.test(s)&&(g=!0));let c=null,h;this.options.gfm&&(c=/^\[[ xX]\] /.exec(l),c&&(h=c[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:s,task:!!c,checked:h,loose:!1,text:l,tokens:[]}),o.raw+=s}o.items[o.items.length-1].raw=s.trimEnd(),o.items[o.items.length-1].text=l.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){let k=o.items[u].tokens.filter(w=>w.type==="space"),d=k.length>0&&k.some(w=>/\n.*\n/.test(w.raw));o.loose=d}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;let n=be(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(let s of i)/^ *-+: *$/.test(s)?r.align.push("right"):/^ *:-+: *$/.test(s)?r.align.push("center"):/^ *:-+ *$/.test(s)?r.align.push("left"):r.align.push(null);for(let s of n)r.header.push({text:s,tokens:this.lexer.inline(s)});for(let s of o)r.rows.push(be(s,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:_(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;let r=K(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{let r=Ke(t[2],"()");if(r>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){let r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],o=r[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),ye(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," "),o=t[i.toLowerCase()];if(!o){let r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return ye(n,o,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){let r=[...i[0]].length-1,s,l,g=r,u=0,k=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(k.lastIndex=0,t=t.slice(-1*e.length+r);(i=k.exec(t))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(l=[...s].length,i[3]||i[4]){g+=l;continue}else if((i[5]||i[6])&&r%3&&!((r+l)%3)){u+=l;continue}if(g-=l,g>0)continue;l=Math.min(l,l+g+u);let d=[...i[0]][0].length,w=e.slice(0,r+i.index+d+l);if(Math.min(r,l)%2){let c=w.slice(1,-1);return{type:"em",raw:w,text:c,tokens:this.lexer.inlineTokens(c)}}let p=w.slice(2,-2);return{type:"strong",raw:w,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return i&&o&&(n=n.substring(1,n.length-1)),n=_(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=_(t[1]),i="mailto:"+n):(n=_(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n,i;let t;if(t=this.rules.inline.url.exec(e)){let o,r;if(t[2]==="@")o=_(t[0]),r="mailto:"+o;else{let s;do s=t[0],t[0]=(i=(n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])!=null?i:"";while(s!==t[0]);o=_(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=_(t[0]),{type:"text",raw:t[0],text:n}}}},Ye=/^(?: *(?:\n|$))+/,et=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,tt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,G=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Te=/(?:[*+-]|\d{1,9}[.)])/,ze=v(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Te).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),le=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,rt=/^[^\n]+/,ae=/(?!\s*\])(?:\\.|[^\[\]\\])+/,it=v(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ae).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ot=v(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Te).getRegex(),ee="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ce=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,st=v("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ce).replace("tag",ee).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ce=v(le).replace("hr",G).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ee).getRegex(),lt=v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ce).getRegex(),pe={blockquote:lt,code:et,def:it,fences:tt,heading:nt,hr:G,html:st,lheading:ze,list:ot,newline:Ye,paragraph:Ce,table:Q,text:rt},we=v("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",G).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ee).getRegex(),at={...pe,table:we,paragraph:v(le).replace("hr",G).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",we).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ee).getRegex()},ct={...pe,html:v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ce).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(le).replace("hr",G).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ze).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Se=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ee=/^( {2,}|\\)\n(?!\s*$)/,ut=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,W="\\p{P}\\p{S}",ht=v(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,W).getRegex(),dt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,ft=v(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,W).getRegex(),gt=v("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,W).getRegex(),mt=v("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,W).getRegex(),kt=v(/\\([punct])/,"gu").replace(/punct/g,W).getRegex(),xt=v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bt=v(ce).replace("(?:-->|$)","-->").getRegex(),yt=v("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Y=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,wt=v(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Y).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),_e=v(/^!?\[(label)\]\[(ref)\]/).replace("label",Y).replace("ref",ae).getRegex(),Re=v(/^!?\[(ref)\](?:\[\])?/).replace("ref",ae).getRegex(),$t=v("reflink|nolink(?!\\()","g").replace("reflink",_e).replace("nolink",Re).getRegex(),ue={_backpedal:Q,anyPunctuation:kt,autolink:xt,blockSkip:dt,br:Ee,code:pt,del:Q,emStrongLDelim:ft,emStrongRDelimAst:gt,emStrongRDelimUnd:mt,escape:Se,link:wt,nolink:Re,punctuation:ht,reflink:_e,reflinkSearch:$t,tag:yt,text:ut,url:Q},vt={...ue,link:v(/^!?\[(label)\]\((.*?)\)/).replace("label",Y).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Y).getRegex()},re={...ue,escape:v(Se).replace("])","~|])").getRegex(),url:v(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},At={...re,br:v(Ee).replace("{2,}","*").getRegex(),text:v(re.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},V={normal:pe,gfm:at,pedantic:ct},B={normal:ue,gfm:re,breaks:At,pedantic:vt},N=class a{constructor(e){A(this,"tokens");A(this,"options");A(this,"state");A(this,"tokenizer");A(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||D,this.options.tokenizer=this.options.tokenizer||new H,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:V.normal,inline:B.normal};this.options.pedantic?(t.block=V.pedantic,t.inline=B.pedantic):this.options.gfm&&(t.block=V.gfm,this.options.breaks?t.inline=B.breaks:t.inline=B.gfm),this.tokenizer.rules=t}static get rules(){return{block:V,inline:B}}static lex(e,t){return new a(t).lex(e)}static lexInline(e,t){return new a(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(s,l,g)=>l+"    ".repeat(g.length));let n,i,o,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(n=s.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let s=1/0,l=e.slice(1),g;this.options.extensions.startBlock.forEach(u=>{g=u.call({lexer:this},l),typeof g=="number"&&g>=0&&(s=Math.min(s,g))}),s<1/0&&s>=0&&(o=e.substring(0,s+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),r=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,o,r=e,s,l,g;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(g=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,g)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0,k=e.slice(1),d;this.options.extensions.startInline.forEach(w=>{d=w.call({lexer:this},k),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(o)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(g=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}},F=class{constructor(e){A(this,"options");this.options=e||D}code(e,t,n){var o;let i=(o=(t||"").match(/^\S*/))==null?void 0:o[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+_(i)+'">'+(n?e:_(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:_(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){let i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){let i=xe(e);if(i===null)return n;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>",o}image(e,t,n){let i=xe(e);if(i===null)return n;e=i;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(e){return e}},U=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}},j=class a{constructor(e){A(this,"options");A(this,"renderer");A(this,"textRenderer");this.options=e||D,this.options.renderer=this.options.renderer||new F,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new U}static parse(e,t){return new a(t).parse(e)}static parseInline(e,t){return new a(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){let r=o,s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=s||"";continue}}switch(o.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{let r=o;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,Xe(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{let r=o;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{let r=o,s="",l="";for(let u=0;u<r.header.length;u++)l+=this.renderer.tablecell(this.parseInline(r.header[u].tokens),{header:!0,align:r.align[u]});s+=this.renderer.tablerow(l);let g="";for(let u=0;u<r.rows.length;u++){let k=r.rows[u];l="";for(let d=0;d<k.length;d++)l+=this.renderer.tablecell(this.parseInline(k[d].tokens),{header:!1,align:r.align[d]});g+=this.renderer.tablerow(l)}n+=this.renderer.table(s,g);continue}case"blockquote":{let r=o,s=this.parse(r.tokens);n+=this.renderer.blockquote(s);continue}case"list":{let r=o,s=r.ordered,l=r.start,g=r.loose,u="";for(let k=0;k<r.items.length;k++){let d=r.items[k],w=d.checked,p=d.task,c="";if(d.task){let h=this.renderer.checkbox(!!w);g?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=h+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=h+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:h+" "}):c+=h+" "}c+=this.parse(d.tokens,g),u+=this.renderer.listitem(c,p,!!w)}n+=this.renderer.list(u,s,l);continue}case"html":{let r=o;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{let r=o;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=o,s=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<e.length&&e[i+1].type==="text";)r=e[++i],s+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(s):s;continue}default:{let r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){let r=this.options.extensions.renderers[o.type].call({parser:this},o);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=r||"";continue}}switch(o.type){case"escape":{let r=o;n+=t.text(r.text);break}case"html":{let r=o;n+=t.html(r.text);break}case"link":{let r=o;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{let r=o;n+=t.image(r.href,r.title,r.text);break}case"strong":{let r=o;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{let r=o;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{let r=o;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{let r=o;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{let r=o;n+=t.text(r.text);break}default:{let r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}},q=class{constructor(e){A(this,"options");this.options=e||D}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}};A(q,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var P,oe,Ie,ie=class{constructor(...e){ge(this,P);A(this,"defaults",se());A(this,"options",this.setOptions);A(this,"parse",J(this,P,oe).call(this,N.lex,j.parse));A(this,"parseInline",J(this,P,oe).call(this,N.lexInline,j.parseInline));A(this,"Parser",j);A(this,"Renderer",F);A(this,"TextRenderer",U);A(this,"Lexer",N);A(this,"Tokenizer",H);A(this,"Hooks",q);this.use(...e)}walkTokens(e,t){var i,o;let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{let s=r;for(let l of s.header)n=n.concat(this.walkTokens(l.tokens,t));for(let l of s.rows)for(let g of l)n=n.concat(this.walkTokens(g.tokens,t));break}case"list":{let s=r;n=n.concat(this.walkTokens(s.items,t));break}default:{let s=r;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[s.type]?this.defaults.extensions.childTokens[s.type].forEach(l=>{let g=s[l].flat(1/0);n=n.concat(this.walkTokens(g,t))}):s.tokens&&(n=n.concat(this.walkTokens(s.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let r=t.renderers[o.name];r?t.renderers[o.name]=function(...s){let l=o.renderer.apply(this,s);return l===!1&&(l=r.apply(this,s)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=t[o.level];r?r.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),i.extensions=t),n.renderer){let o=this.defaults.renderer||new F(this.defaults);for(let r in n.renderer){if(!(r in o))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;let s=r,l=n.renderer[s],g=o[s];o[s]=(...u)=>{let k=l.apply(o,u);return k===!1&&(k=g.apply(o,u)),k||""}}i.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new H(this.defaults);for(let r in n.tokenizer){if(!(r in o))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let s=r,l=n.tokenizer[s],g=o[s];o[s]=(...u)=>{let k=l.apply(o,u);return k===!1&&(k=g.apply(o,u)),k}}i.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new q;for(let r in n.hooks){if(!(r in o))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;let s=r,l=n.hooks[s],g=o[s];q.passThroughHooks.has(r)?o[s]=u=>{if(this.defaults.async)return Promise.resolve(l.call(o,u)).then(d=>g.call(o,d));let k=l.call(o,u);return g.call(o,k)}:o[s]=(...u)=>{let k=l.apply(o,u);return k===!1&&(k=g.apply(o,u)),k}}i.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,r=n.walkTokens;i.walkTokens=function(s){let l=[];return l.push(r.call(this,s)),o&&(l=l.concat(o.call(this,s))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return N.lex(e,t!=null?t:this.defaults)}parser(e,t){return j.parse(e,t!=null?t:this.defaults)}};P=new WeakSet,oe=function(e,t){return(n,i)=>{let o={...i},r={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);let s=J(this,P,Ie).call(this,!!r.silent,!!r.async);if(typeof n=="undefined"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(s);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let g=t(l,r);return r.hooks&&(g=r.hooks.postprocess(g)),g}catch(l){return s(l)}}},Ie=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+_(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};var M=new ie;function $(a,e){return M.parse(a,e)}$.options=$.setOptions=function(a){return M.setOptions(a),$.defaults=M.defaults,$e($.defaults),$};$.getDefaults=se;$.defaults=D;$.use=function(...a){return M.use(...a),$.defaults=M.defaults,$e($.defaults),$};$.walkTokens=function(a,e){return M.walkTokens(a,e)};$.parseInline=M.parseInline;$.Parser=j;$.parser=j.parse;$.Renderer=F;$.TextRenderer=U;$.Lexer=N;$.lexer=N.lex;$.Tokenizer=H;$.Hooks=q;$.parse=$;var St=$.options,Et=$.setOptions,_t=$.use,Rt=$.walkTokens,It=$.parseInline;var Nt=j.parse,jt=N.lex;var Ne="com.rightfix.jupyterreader",Tt=`
.notebook-viewer {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 0;
  background: #ffffff;
  z-index: 1;
}

.notebook-viewer.no-sidebar {
  left: 0;
}

.notebook-header {
  padding: 8px 12px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
}

.notebook-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
}

.notebook-info {
  font-size: 12px;
  color: #666;
}

.cells-container {
  max-width: 100%;
  padding: 8px;
}

.cell {
  background: #fff;
  border-left: 4px solid transparent;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
}

.cell-code {
  border-left-color: #0071c1;
}

.cell-markdown {
  border-left-color: #21734b;
}

.cell-raw {
  border-left-color: #666;
}

.cell-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.cell-type-badge {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
  text-transform: uppercase;
}

.cell-type-badge.code {
  background: #e3f2fd;
  color: #0071c1;
}

.cell-type-badge.markdown {
  background: #e8f5e9;
  color: #21734b;
}

.cell-type-badge.raw {
  background: #f5f5f5;
  color: #666;
}

.cell-number {
  font-size: 11px;
  color: #888;
  font-family: 'Consolas', monospace;
}

.prompt-area {
  display: flex;
  align-items: flex-start;
  margin-bottom: 6px;
}

.input-prompt {
  color: #0071c1;
  font-family: 'Consolas', monospace;
  font-size: 11px;
  padding: 2px 8px 0 0;
  user-select: none;
  min-width: 60px;
  text-align: right;
  flex-shrink: 0;
}

.output-prompt {
  color: #cc7832;
  font-family: 'Consolas', monospace;
  font-size: 11px;
  padding: 2px 8px 0 0;
  user-select: none;
  min-width: 60px;
  text-align: right;
  flex-shrink: 0;
}

.cell-content {
  flex: 1;
  min-width: 0;
}

.code-content {
  font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  background: #f7f7f7;
  padding: 8px;
  border-radius: 4px;
  overflow-x: auto;
}

.markdown-content {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.markdown-content h1 { font-size: 22px; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin: 16px 0 8px 0; }
.markdown-content h2 { font-size: 18px; margin: 14px 0 6px 0; }
.markdown-content h3 { font-size: 16px; margin: 12px 0 4px 0; }
.markdown-content h4 { font-size: 14px; margin: 10px 0 4px 0; }
.markdown-content h5 { font-size: 13px; margin: 8px 0 4px 0; }
.markdown-content h6 { font-size: 12px; margin: 8px 0 4px 0; color: #666; }

.markdown-content p { margin: 8px 0; }

.markdown-content code {
  background: #f0f0f0;
  padding: 1px 4px;
  border-radius: 2px;
  font-family: 'Consolas', monospace;
  font-size: 12px;
}

.markdown-content pre {
  background: #f7f7f7;
  padding: 10px;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin: 8px 0;
}

.markdown-content pre code {
  background: transparent;
  padding: 0;
}

.markdown-content blockquote {
  border-left: 3px solid #ddd;
  margin: 8px 0;
  padding: 4px 12px;
  color: #666;
  background: #fafafa;
}

.markdown-content ul, .markdown-content ol {
  padding-left: 20px;
  margin: 8px 0;
}

.markdown-content li { margin: 4px 0; }

.markdown-content a {
  color: #0071c1;
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
}

.markdown-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 8px 0;
}

.markdown-content th, .markdown-content td {
  border: 1px solid #ddd;
  padding: 6px 10px;
  text-align: left;
}

.markdown-content th {
  background: #f5f5f5;
  font-weight: 600;
}

.markdown-content img {
  max-width: 100%;
}

.cell-outputs {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #eee;
}

.output {
  margin: 4px 0;
}

.output pre {
  margin: 0;
  font-family: 'Consolas', monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-word;
}

.output-stream { color: #333; }
.output-result { color: #333; }

.output-error {
  color: #d32f2f;
  background: #ffebee;
  padding: 8px;
  border-radius: 4px;
}

.output img {
  max-width: 100%;
}

.empty-notebook {
  text-align: center;
  padding: 40px 16px;
  color: #888;
  font-size: 14px;
}

.read-only-notice {
  background: #fff3e0;
  border: 1px solid #ffb74d;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 8px 0;
  font-size: 12px;
  color: #e65100;
}
`,he=class{constructor(){this.baseUrl="",this.notebookData=null,this.currentFile=null,this.$container=null,this.isCodeMirror=!1,this.editorContainer=null}init(e){this.baseUrl=e,this.injectStyles(),this.detectEditor(),this.registerFileHandler(),this.setupEditorHooks()}detectEditor(){this.isCodeMirror=editorManager.isCodeMirror===!0}registerFileHandler(){acode.registerFileHandler(Ne,{extensions:["ipynb"],handleFile:async e=>{await this.openNotebookFile(e.uri,e.name)}})}setupEditorHooks(){editorManager.on("switch-file",e=>{this.onSwitchFile(e)})}onSwitchFile(e){e&&e.uri===this.currentFile?this.showNotebookInEditor():this.hideNotebookFromEditor()}injectStyles(){if(document.getElementById("jupyter-reader-styles"))return;let e=document.createElement("style");e.id="jupyter-reader-styles",e.textContent=Tt,document.head.appendChild(e)}async openNotebookFile(e,t){try{let n=acode.loader("Loading notebook...","Please wait");n.show();let o=await acode.fsOperation(e).readFile("utf-8"),r=JSON.parse(o);n.hide();let s=editorManager.getFile(e,"uri");if(s)editorManager.switchFile(s);else{let l=editorManager.createFile(e,{name:t,uri:e,language:"json"});editorManager.switchFile(l)}this.notebookData=r,this.currentFile=e,this.renderNotebook(t)}catch(n){acode.alert("Error",`Failed to open notebook: ${n.message}`)}}renderNotebook(e){this.$container=(0,T.default)("div",{className:"notebook-viewer"});let t=(0,T.default)("div",{className:"notebook-header",innerHTML:`
        <div class="notebook-title">${this.escapeHtml(e)}</div>
        <div class="notebook-info">
          ${this.notebookData.cells?this.notebookData.cells.length:0} cells
          ${this.notebookData.metadata&&this.notebookData.metadata.kernelspec?" | "+this.escapeHtml(this.notebookData.metadata.kernelspec.name):""}
        </div>
        <div class="read-only-notice">
          Read-only mode - This notebook cannot be edited
        </div>
      `});this.$container.appendChild(t);let n=(0,T.default)("div",{className:"cells-container"});this.renderCells(n),this.$container.appendChild(n),this.showNotebookInEditor()}renderCells(e){if(e.innerHTML="",!this.notebookData||!this.notebookData.cells||this.notebookData.cells.length===0){e.innerHTML='<div class="empty-notebook">No cells found in this notebook.</div>';return}this.notebookData.cells.forEach((t,n)=>{let i=this.createCellElement(t,n);e.appendChild(i)})}createCellElement(e,t){let n=(0,T.default)("div",{className:`cell cell-${e.cell_type}`}),i=(0,T.default)("div",{className:"cell-header"}),o=(0,T.default)("span",{className:`cell-type-badge ${e.cell_type}`,textContent:e.cell_type});if(i.appendChild(o),e.cell_type==="code"&&e.execution_count){let l=(0,T.default)("span",{className:"cell-number",textContent:`In [${e.execution_count}]:`});i.appendChild(l)}n.appendChild(i);let r=(0,T.default)("div",{className:"cell-content"}),s=this.getSourceText(e.source);if(e.cell_type==="code"){let l=(0,T.default)("div",{className:"prompt-area"}),g=(0,T.default)("div",{className:"input-prompt",textContent:e.execution_count?`[${e.execution_count}]`:"[ ]"});l.appendChild(g);let u=(0,T.default)("div",{className:"code-content",textContent:s});if(l.appendChild(u),r.appendChild(l),e.outputs&&e.outputs.length>0){let k=(0,T.default)("div",{className:"cell-outputs"});e.outputs.forEach(d=>{let w=this.renderOutput(d,e.execution_count);k.appendChild(w)}),r.appendChild(k)}}else if(e.cell_type==="markdown"){r.className="cell-content markdown-content";try{r.innerHTML=$.parse(s)}catch(l){r.textContent=s}}else r.className="cell-content",r.textContent=s;return n.appendChild(r),n}renderOutput(e,t){let n=(0,T.default)("div",{className:"output"});if(e.output_type==="stream"){let i=(0,T.default)("div",{className:"prompt-area"}),o=(0,T.default)("div",{className:"output-prompt",textContent:t?`Out[${t}]:`:"Out[ ]:"});i.appendChild(o);let r=(0,T.default)("div",{className:"output output-stream"}),s=Array.isArray(e.text)?e.text.join(""):e.text;r.innerHTML=`<pre>${this.escapeHtml(s)}</pre>`,i.appendChild(r),n.appendChild(i)}else if(e.output_type==="execute_result"||e.output_type==="display_data"){let i=(0,T.default)("div",{className:"prompt-area"}),o=(0,T.default)("div",{className:"output-prompt",textContent:t?`Out[${t}]:`:"Out[ ]:"});i.appendChild(o);let r=(0,T.default)("div",{className:"output output-result"});if(e.data){if(e.data["text/html"]){let s=Array.isArray(e.data["text/html"])?e.data["text/html"].join(""):e.data["text/html"];r.innerHTML=s}else if(e.data["image/png"]){let s=document.createElement("img");s.src=`data:image/png;base64,${e.data["image/png"]}`,r.appendChild(s)}else if(e.data["image/jpeg"]){let s=document.createElement("img");s.src=`data:image/jpeg;base64,${e.data["image/jpeg"]}`,r.appendChild(s)}else if(e.data["text/plain"]){let s=Array.isArray(e.data["text/plain"])?e.data["text/plain"].join(""):e.data["text/plain"];r.innerHTML=`<pre>${this.escapeHtml(s)}</pre>`}}i.appendChild(r),n.appendChild(i)}else if(e.output_type==="error"){let i=(0,T.default)("div",{className:"prompt-area"}),o=(0,T.default)("div",{className:"output-prompt",textContent:t?`Out[${t}]:`:"Out[ ]:"});i.appendChild(o);let r=(0,T.default)("div",{className:"output output-error"}),s=e.traceback?e.traceback.join(`
`):e.evalue;r.innerHTML=`<pre>${this.escapeHtml(s)}</pre>`,i.appendChild(r),n.appendChild(i)}return n}getSourceText(e){return e?Array.isArray(e)?e.join(""):e:""}escapeHtml(e){Array.isArray(e)&&(e=e.join("")),typeof e!="string"&&(e=String(e));let t=document.createElement("div");return t.textContent=e,t.innerHTML}showNotebookInEditor(){let e=document.querySelector("main")||document.querySelector("#main"),t=document.querySelector("header")||document.querySelector(".header"),n=44;t&&(n=t.offsetHeight||44),this.$container.style.top=n+"px",this.hideEditor();let i=document.querySelector(".notebook-viewer");i&&i.remove(),e?e.appendChild(this.$container):document.body.appendChild(this.$container),this.$container.style.display="block"}hideEditor(){["#editor","#editors",".editor-container",".ace_editor",".cm-editor"].forEach(n=>{let i=document.querySelector(n);i&&(i.style.display="none")});let t=document.querySelector("#editor-area");t&&(t.style.display="none")}showEditor(){["#editor","#editors",".editor-container",".ace_editor",".cm-editor"].forEach(n=>{let i=document.querySelector(n);i&&(i.style.display="")});let t=document.querySelector("#editor-area");t&&(t.style.display="")}hideNotebookFromEditor(){this.$container&&(this.$container.style.display="none"),this.showEditor()}},zt=new he;acode.setPluginInit(Ne,function(a){zt.init(a)});})();
