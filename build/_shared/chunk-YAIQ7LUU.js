import{b as o}from"/SequentialEGM/build/_shared/chunk-2NH4LW52.js";function z(t){if(!(e=ge.exec(t)))throw new Error("invalid format: "+t);var e;return new K({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function K(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}var ge,et=o(()=>{ge=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;z.prototype=K.prototype;K.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type}});function $t(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function P(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}var D=o(()=>{});function b(t){return t=P(Math.abs(t)),t?t[1]:NaN}var F=o(()=>{D()});function Nt(t,e){return function(r,n){for(var i=r.length,f=[],s=0,x=t[0],m=0;i>0&&x>0&&(m+x+1>n&&(x=Math.max(1,n-m)),f.push(r.substring(i-=x,i+x)),!((m+=x+1)>n));)x=t[s=(s+1)%t.length];return f.reverse().join(e)}}var kt=o(()=>{});function Pt(t){return function(e){return e.replace(/[0-9]/g,function(r){return t[+r]})}}var St=o(()=>{});function Ht(t){t:for(var e=t.length,r=1,n=-1,i;r<e;++r)switch(t[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+t[r])break t;n>0&&(n=0);break}return n>0?t.slice(0,n)+t.slice(i+1):t}var Rt=o(()=>{});function Et(t,e){var r=P(t,e);if(!r)return t+"";var n=r[0],i=r[1],f=i-(rt=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,s=n.length;return f===s?n:f>s?n+new Array(f-s+1).join("0"):f>0?n.slice(0,f)+"."+n.slice(f):"0."+new Array(1-f).join("0")+P(t,Math.max(0,e+f-1))[0]}var rt,nt=o(()=>{D()});function it(t,e){var r=P(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}var vt=o(()=>{D()});var at,zt=o(()=>{D();nt();vt();at={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:$t,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>it(t*100,e),r:it,s:Et,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)}});function ft(t){return t}var Ct=o(()=>{});function At(t){var e=t.grouping===void 0||t.thousands===void 0?ft:Nt(jt.call(t.grouping,Number),t.thousands+""),r=t.currency===void 0?"":t.currency[0]+"",n=t.currency===void 0?"":t.currency[1]+"",i=t.decimal===void 0?".":t.decimal+"",f=t.numerals===void 0?ft:Pt(jt.call(t.numerals,String)),s=t.percent===void 0?"%":t.percent+"",x=t.minus===void 0?"\u2212":t.minus+"",m=t.nan===void 0?"NaN":t.nan+"";function bt(h){h=z(h);var A=h.fill,I=h.align,g=h.sign,L=h.symbol,E=h.zero,_=h.width,tt=h.comma,N=h.precision,pt=h.trim,u=h.type;u==="n"?(tt=!0,u="g"):at[u]||(N===void 0&&(N=12),pt=!0,u="g"),(E||A==="0"&&I==="=")&&(E=!0,A="0",I="=");var ce=L==="$"?r:L==="#"&&/[boxX]/.test(u)?"0"+u.toLowerCase():"",de=L==="$"?n:/[%p]/.test(u)?s:"",yt=at[u],me=/[defgprs%]/.test(u);N=N===void 0?6:/[gprs]/.test(u)?Math.max(1,Math.min(21,N)):Math.max(0,Math.min(20,N));function wt(a){var k=ce,c=de,v,Mt,G;if(u==="c")c=yt(a)+c,a="";else{a=+a;var Y=a<0||1/a<0;if(a=isNaN(a)?m:yt(Math.abs(a),N),pt&&(a=Ht(a)),Y&&+a==0&&g!=="+"&&(Y=!1),k=(Y?g==="("?g:x:g==="-"||g==="("?"":g)+k,c=(u==="s"?qt[8+rt/3]:"")+c+(Y&&g==="("?")":""),me){for(v=-1,Mt=a.length;++v<Mt;)if(G=a.charCodeAt(v),48>G||G>57){c=(G===46?i+a.slice(v+1):a.slice(v))+c,a=a.slice(0,v);break}}}tt&&!E&&(a=e(a,1/0));var Z=k.length+a.length+c.length,w=Z<_?new Array(_-Z+1).join(A):"";switch(tt&&E&&(a=e(w+a,w.length?_-c.length:1/0),w=""),I){case"<":a=k+a+c+w;break;case"=":a=k+w+a+c;break;case"^":a=w.slice(0,Z=w.length>>1)+k+a+c+w.slice(Z);break;default:a=w+k+a+c;break}return f(a)}return wt.toString=function(){return h+""},wt}function ue(h,A){var I=bt((h=z(h),h.type="f",h)),g=Math.max(-8,Math.min(8,Math.floor(b(A)/3)))*3,L=Math.pow(10,-g),E=qt[8+g/3];return function(_){return I(L*_)+E}}return{format:bt,formatPrefix:ue}}var jt,qt,It=o(()=>{F();kt();St();et();Rt();zt();nt();Ct();jt=Array.prototype.map,qt=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"]});function ot(t){return U=At(t),Lt=U.format,_t=U.formatPrefix,U}var U,Lt,_t,Dt=o(()=>{It();ot({thousands:",",grouping:[3],currency:["$",""]})});function be(t){return Math.max(0,-b(Math.abs(t)))}var Ft=o(()=>{F()});function pe(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(b(e)/3)))*3-b(Math.abs(t)))}var Ot=o(()=>{F()});function ye(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,b(e)-b(t))+1}var Tt=o(()=>{F()});var we=o(()=>{Dt();et();Ft();Ot();Tt()});function S(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function C(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}var st=o(()=>{});function $(){}function Gt(){return this.rgb().formatHex()}function Re(){return this.rgb().formatHex8()}function Ee(){return Vt(this).formatHsl()}function Yt(){return this.rgb().formatRgb()}function X(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=Me.exec(t))?(r=e[1].length,e=parseInt(e[1],16),r===6?Zt(e):r===3?new l(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):r===8?B(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):r===4?B(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=$e.exec(t))?new l(e[1],e[2],e[3],1):(e=Ne.exec(t))?new l(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=ke.exec(t))?B(e[1],e[2],e[3],e[4]):(e=Pe.exec(t))?B(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Se.exec(t))?Bt(e[1],e[2]/100,e[3]/100,1):(e=He.exec(t))?Bt(e[1],e[2]/100,e[3]/100,e[4]):Xt.hasOwnProperty(t)?Zt(Xt[t]):t==="transparent"?new l(NaN,NaN,NaN,0):null}function Zt(t){return new l(t>>16&255,t>>8&255,t&255,1)}function B(t,e,r,n){return n<=0&&(t=e=r=NaN),new l(t,e,r,n)}function xt(t){return t instanceof $||(t=X(t)),t?(t=t.rgb(),new l(t.r,t.g,t.b,t.opacity)):new l}function Qt(t,e,r,n){return arguments.length===1?xt(t):new l(t,e,r,n??1)}function l(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function Kt(){return`#${H(this.r)}${H(this.g)}${H(this.b)}`}function ve(){return`#${H(this.r)}${H(this.g)}${H(this.b)}${H((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ut(){let t=V(this.opacity);return`${t===1?"rgb(":"rgba("}${R(this.r)}, ${R(this.g)}, ${R(this.b)}${t===1?")":`, ${t})`}`}function V(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function R(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function H(t){return t=R(t),(t<16?"0":"")+t.toString(16)}function Bt(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new d(t,e,r,n)}function Vt(t){if(t instanceof d)return new d(t.h,t.s,t.l,t.opacity);if(t instanceof $||(t=X(t)),!t)return new d;if(t instanceof d)return t;t=t.rgb();var e=t.r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),f=Math.max(e,r,n),s=NaN,x=f-i,m=(f+i)/2;return x?(e===f?s=(r-n)/x+(r<n)*6:r===f?s=(n-e)/x+2:s=(e-r)/x+4,x/=m<.5?f+i:2-f-i,s*=60):x=m>0&&m<1?0:s,new d(s,x,m,t.opacity)}function Wt(t,e,r,n){return arguments.length===1?Vt(t):new d(t,e,r,n??1)}function d(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function Jt(t){return t=(t||0)%360,t<0?t+360:t}function J(t){return Math.max(0,Math.min(1,t||0))}function ht(t,e,r){return(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)*255}var O,Q,j,T,p,Me,$e,Ne,ke,Pe,Se,He,Xt,lt=o(()=>{st();O=.7,Q=1/O,j="\\s*([+-]?\\d+)\\s*",T="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",p="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Me=/^#([0-9a-f]{3,8})$/,$e=new RegExp(`^rgb\\(${j},${j},${j}\\)$`),Ne=new RegExp(`^rgb\\(${p},${p},${p}\\)$`),ke=new RegExp(`^rgba\\(${j},${j},${j},${T}\\)$`),Pe=new RegExp(`^rgba\\(${p},${p},${p},${T}\\)$`),Se=new RegExp(`^hsl\\(${T},${p},${p}\\)$`),He=new RegExp(`^hsla\\(${T},${p},${p},${T}\\)$`),Xt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};S($,X,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Gt,formatHex:Gt,formatHex8:Re,formatHsl:Ee,formatRgb:Yt,toString:Yt});S(l,Qt,C($,{brighter(t){return t=t==null?Q:Math.pow(Q,t),new l(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?O:Math.pow(O,t),new l(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new l(R(this.r),R(this.g),R(this.b),V(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Kt,formatHex:Kt,formatHex8:ve,formatRgb:Ut,toString:Ut}));S(d,Wt,C($,{brighter(t){return t=t==null?Q:Math.pow(Q,t),new d(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?O:Math.pow(O,t),new d(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new l(ht(t>=240?t-240:t+120,i,n),ht(t,i,n),ht(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new d(Jt(this.h),J(this.s),J(this.l),V(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=V(this.opacity);return`${t===1?"hsl(":"hsla("}${Jt(this.h)}, ${J(this.s)*100}%, ${J(this.l)*100}%${t===1?")":`, ${t})`}`}}))});var te,ee,re=o(()=>{te=Math.PI/180,ee=180/Math.PI});function se(t){if(t instanceof y)return new y(t.l,t.a,t.b,t.opacity);if(t instanceof M)return xe(t);t instanceof l||(t=xt(t));var e=mt(t.r),r=mt(t.g),n=mt(t.b),i=ut((.2225045*e+.7168786*r+.0606169*n)/ie),f,s;return e===r&&r===n?f=s=i:(f=ut((.4360747*e+.3850649*r+.1430804*n)/ne),s=ut((.0139322*e+.0971045*r+.7141733*n)/ae)),new y(116*i-16,500*(f-i),200*(i-s),t.opacity)}function gt(t,e,r,n){return arguments.length===1?se(t):new y(t,e,r,n??1)}function y(t,e,r,n){this.l=+t,this.a=+e,this.b=+r,this.opacity=+n}function ut(t){return t>ze?Math.pow(t,1/3):t/oe+fe}function ct(t){return t>q?t*t*t:oe*(t-fe)}function dt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function mt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Ce(t){if(t instanceof M)return new M(t.h,t.c,t.l,t.opacity);if(t instanceof y||(t=se(t)),t.a===0&&t.b===0)return new M(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*ee;return new M(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function he(t,e,r,n){return arguments.length===1?Ce(t):new M(t,e,r,n??1)}function M(t,e,r,n){this.h=+t,this.c=+e,this.l=+r,this.opacity=+n}function xe(t){if(isNaN(t.h))return new y(t.l,0,0,t.opacity);var e=t.h*te;return new y(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}var W,ne,ie,ae,fe,q,oe,ze,le=o(()=>{st();lt();re();W=18,ne=.96422,ie=1,ae=.82521,fe=4/29,q=6/29,oe=3*q*q,ze=q*q*q;S(y,gt,C($,{brighter(t){return new y(this.l+W*(t??1),this.a,this.b,this.opacity)},darker(t){return new y(this.l-W*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,r=isNaN(this.b)?t:t-this.b/200;return e=ne*ct(e),t=ie*ct(t),r=ae*ct(r),new l(dt(3.1338561*e-1.6168667*t-.4906146*r),dt(-.9787684*e+1.9161415*t+.033454*r),dt(.0719453*e-.2289914*t+1.4052427*r),this.opacity)}}));S(M,he,C($,{brighter(t){return new M(this.h,this.c,this.l+W*(t??1),this.opacity)},darker(t){return new M(this.h,this.c,this.l-W*(t??1),this.opacity)},rgb(){return xe(this).rgb()}}))});var je=o(()=>{lt();le()});export{z as a,Lt as b,_t as c,be as d,pe as e,ye as f,we as g,X as h,Qt as i,he as j,je as k};
