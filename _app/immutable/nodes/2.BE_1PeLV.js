var x_=Object.defineProperty;var y_=(r,e,t)=>e in r?x_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Nt=(r,e,t)=>y_(r,typeof e!="symbol"?e+"":e,t);import{n as Et,P as b_,Q as Ka,J as No,E as M_,r as S_,R as Ln,S as ai,C as T_,T as Ei,s as zt,c as yt,u as bt,g as Mt,b as St,q as ft,e as Lu,f as Iu,h as Du,k as Le,y as wp,m as Ne,U as E_,x as Er,A as Ar,d as ot,v as gt,l as at,V as Wn,W as ln,X as As,Y as A_,Z as Wh,_ as w_,t as ws,j as Cs,p as Va,$ as Xh,a as yo,a0 as Cp,a1 as Rp,a2 as Uo,a3 as C_}from"../chunks/scheduler.Ba_pz72M.js";import{g as Wt,a as q,c as Xt,t as H,S as kt,i as Ht,b as Te,d as Ee,m as Ae,e as we,f as Pp}from"../chunks/index.BWd3zC2b.js";import{w as pn,d as Nu,r as R_}from"../chunks/index.CAI8Zb1s.js";const Lp=typeof window<"u";let qh=Lp?()=>window.performance.now():()=>Date.now(),Uu=Lp?r=>requestAnimationFrame(r):Et;function P_(r){Uu=r}const pr=new Set;function Ip(r){pr.forEach(e=>{e.c(r)||(pr.delete(e),e.f())}),pr.size!==0&&Uu(Ip)}function L_(r){let e;return pr.size===0&&Uu(Ip),{promise:new Promise(t=>{pr.add(e={c:r,f:t})}),abort(){pr.delete(e)}}}function $h(r,e){const t=e.token={};function n(i,s,o,a){if(e.token!==t)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=i&&(e.current=i)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(Wt(),q(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),Xt())}):e.block.d(1),l.c(),H(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[s]=l),u&&M_()}if(b_(r)){const i=Ka();if(r.then(s=>{No(i),n(e.then,1,e.value,s),No(null)},s=>{if(No(i),n(e.catch,2,e.error,s),No(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function I_(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function jr(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Dp(r,e){q(r,1,1,()=>{e.delete(r.key)})}function Np(r,e,t,n,i,s,o,a,c,l,u,h){let f=r.length,d=s.length,p=f;const _={};for(;p--;)_[r[p].key]=p;const g=[],m=new Map,x=new Map,v=[];for(p=d;p--;){const S=h(i,s,p),R=t(S);let b=o.get(R);b?v.push(()=>b.p(S,e)):(b=l(R,S),b.c()),m.set(R,g[p]=b),R in _&&x.set(R,Math.abs(p-_[R]))}const y=new Set,M=new Set;function E(S){H(S,1),S.m(a,u),o.set(S.key,S),u=S.first,d--}for(;f&&d;){const S=g[d-1],R=r[f-1],b=S.key,T=R.key;S===R?(u=S.first,f--,d--):m.has(T)?!o.has(b)||y.has(b)?E(S):M.has(T)?f--:x.get(b)>x.get(T)?(M.add(b),E(S)):(y.add(T),f--):(c(R,o),f--)}for(;f--;){const S=r[f];m.has(S.key)||c(S,o)}for(;d;)E(g[d-1]);return S_(v),g}function bo(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=e[s];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);r[s]=a}else for(const c in o)i[c]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Ja(r){return typeof r=="object"&&r!==null?r:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="159",hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Up=0,Il=1,Op=2,D_=3,N_=0,Ou=1,Qa=2,si=3,li=0,Sn=1,Un=2,U_=2,bi=0,ys=1,Dl=2,Nl=3,Ul=4,Fp=5,ki=100,Bp=101,zp=102,Ol=103,Fl=104,kp=200,Hp=201,Vp=202,Gp=203,Ga=204,Wa=205,Wp=206,Xp=207,qp=208,$p=209,Yp=210,jp=211,Zp=212,Kp=213,Jp=214,Qp=0,em=1,tm=2,eo=3,nm=4,im=5,sm=6,rm=7,Mo=0,om=1,am=2,Mi=0,cm=1,lm=2,um=3,Fu=4,hm=5,Bl="attached",fm="detached",ec=300,Ai=301,Xi=302,to=303,no=304,Cr=306,qi=1e3,cn=1001,vr=1002,Ft=1003,io=1004,O_=1004,mr=1005,F_=1005,Rt=1006,tc=1007,B_=1007,ui=1008,z_=1008,Si=1009,dm=1010,pm=1011,nc=1012,Bu=1013,yi=1014,Yn=1015,xr=1016,zu=1017,ku=1018,Hi=1020,mm=1021,Cn=1023,gm=1024,_m=1025,Vi=1026,Rs=1027,vm=1028,Hu=1029,xm=1030,Vu=1031,Gu=1033,Ua=33776,Oa=33777,Fa=33778,Ba=33779,zl=35840,kl=35841,Hl=35842,Vl=35843,Wu=36196,Gl=37492,Wl=37496,Xl=37808,ql=37809,$l=37810,Yl=37811,jl=37812,Zl=37813,Kl=37814,Jl=37815,Ql=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,za=36492,ru=36494,ou=36495,ym=36283,au=36284,cu=36285,lu=36286,bm=2200,Mm=2201,Sm=2202,yr=2300,Ps=2301,ka=2302,gs=2400,_s=2401,so=2402,ic=2500,Xu=2501,Tm=0,qu=1,Xa=2,$u=3e3,Gi=3001,Em=3200,Am=3201,Yi=0,wm=1,On="",wt="srgb",sn="srgb-linear",sc="display-p3",So="display-p3-linear",ro="linear",xt="srgb",oo="rec709",ao="p3",k_=0,ds=7680,H_=7681,V_=7682,G_=7683,W_=34055,X_=34056,q_=5386,$_=512,Y_=513,j_=514,Z_=515,K_=516,J_=517,Q_=518,uu=519,Cm=512,Rm=513,Pm=514,Yu=515,Lm=516,Im=517,Dm=518,Nm=519,co=35044,Um=35048,e0=35040,t0=35045,n0=35049,i0=35041,s0=35046,r0=35050,o0=35042,a0="100",hu="300 es",qa=1035,jn=2e3,br=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yh=1234567;const bs=Math.PI/180,Mr=180/Math.PI;function Fn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Bt(r,e,t){return Math.max(e,Math.min(t,r))}function ju(r,e){return(r%e+e)%e}function c0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function l0(r,e,t){return r!==e?(t-r)/(e-r):0}function Zr(r,e,t){return(1-t)*r+t*e}function u0(r,e,t,n){return Zr(r,e,1-Math.exp(-t*n))}function h0(r,e=1){return e-Math.abs(ju(r,e*2)-e)}function f0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function d0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function p0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function m0(r,e){return r+Math.random()*(e-r)}function g0(r){return r*(.5-Math.random())}function _0(r){r!==void 0&&(Yh=r);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(r){return r*bs}function x0(r){return r*Mr}function fu(r){return(r&r-1)===0&&r!==0}function y0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $a(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function b0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*p,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*p,a*l);break;case"ZYZ":r.set(c*p,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rc={DEG2RAD:bs,RAD2DEG:Mr,generateUUID:Fn,clamp:Bt,euclideanModulo:ju,mapLinear:c0,inverseLerp:l0,lerp:Zr,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:v0,radToDeg:x0,isPowerOfTwo:fu,ceilPowerOfTwo:y0,floorPowerOfTwo:$a,setQuaternionFromProperEuler:b0,normalize:et,denormalize:Rn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,s,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],x=i[1],v=i[4],y=i[7],M=i[2],E=i[5],S=i[8];return s[0]=o*_+a*x+c*M,s[3]=o*g+a*v+c*E,s[6]=o*m+a*y+c*S,s[1]=l*_+u*x+h*M,s[4]=l*g+u*v+h*E,s[7]=l*m+u*y+h*S,s[2]=f*_+d*x+p*M,s[5]=f*g+d*v+p*E,s[8]=f*m+d*y+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new Ke;function Om(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const M0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ur(r,e){return new M0[r](e)}function lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fm(){const r=lo("canvas");return r.style.display="block",r}const jh={};function Kr(r){r in jh||(jh[r]=!0,console.warn(r))}const Zh=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[sn]:{transfer:ro,primaries:oo,toReference:r=>r,fromReference:r=>r},[wt]:{transfer:xt,primaries:oo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[So]:{transfer:ro,primaries:ao,toReference:r=>r.applyMatrix3(Kh),fromReference:r=>r.applyMatrix3(Zh)},[sc]:{transfer:xt,primaries:ao,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Kh),fromReference:r=>r.applyMatrix3(Zh).convertLinearToSRGB()}},S0=new Set([sn,So]),pt={enabled:!0,_workingColorSpace:sn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!S0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Oo[e].toReference,i=Oo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Oo[r].primaries},getTransfer:function(r){return r===On?ro:Oo[r].transfer}};function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gs;class Zu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=lo("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gr(t[n]/255)*255):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class vs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gc(i[o].image)):s.push(Gc(i[o]))}else s=Gc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;class It extends hi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=cn,i=cn,s=Rt,o=ui,a=Cn,c=Si,l=It.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Fn(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gi?wt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Gi:$u}set encoding(e){Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?wt:On}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=ec;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,M=(m+1)/2,E=(u+f)/4,S=(h+_)/4,R=(p+g)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=S/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=R/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=R/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bm extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gi?wt:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oc extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A0 extends Bn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new oc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ku extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w0 extends Bn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ku(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class C0 extends Bn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==p){let g=1-a;const m=c*f+l*d+u*p+h*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,m*x);g=Math.sin(g*E)/M,a=Math.sin(a*E)/M}const y=a*x;if(c=c*g+f*y,l=l*g+d*y,u=u*g+p*y,h=h*g+_*y,g===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-a*d,e[t+2]=l*p+u*d+a*f-c*h,e[t+3]=u*p-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new w,Jh=new nn;class Yt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Bo.subVectors(this.max,Nr),Ws.subVectors(e.a,Nr),Xs.subVectors(e.b,Nr),qs.subVectors(e.c,Nr),Pi.subVectors(Xs,Ws),Li.subVectors(qs,Xs),Qi.subVectors(Ws,qs);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Qi.z,Qi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Qi.z,0,-Qi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Qi.y,Qi.x,0];return!Xc(t,Ws,Xs,qs,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,Ws,Xs,qs,Bo))?!1:(zo.crossVectors(Pi,Li),t=[zo.x,zo.y,zo.z],Xc(t,Ws,Xs,qs,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new w,new w,new w,new w,new w,new w,new w,new w],Xn=new w,Fo=new Yt,Ws=new w,Xs=new w,qs=new w,Pi=new w,Li=new w,Qi=new w,Nr=new w,Bo=new w,zo=new w,es=new w;function Xc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){es.fromArray(r,s);const a=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const R0=new Yt,Ur=new w,qc=new w;class jt{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(qc)),this.expandByPoint(Ur.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new w,$c=new w,ko=new w,Ii=new w,Yc=new w,Ho=new w,jc=new w;class Fs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$c.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub($c);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Ii.dot(this.direction),c=-Ii.dot(ko),l=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*c-a,f=o*a-c,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($c).addScaledVector(ko,f),d}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,s){Yc.subVectors(t,e),Ho.subVectors(n,e),jc.crossVectors(Yc,Ho);let o=this.direction.dot(jc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const c=a*this.direction.dot(Ho.crossVectors(Ii,Ho));if(c<0)return null;const l=a*this.direction.dot(Yc.cross(Ii));if(l<0||c+l>o)return null;const u=-a*Ii.dot(jc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,g){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,g)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,L0)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Di.crossVectors(n,Dn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Di.crossVectors(n,Dn)),Di.normalize(),Vo.crossVectors(Dn,Di),i[0]=Di.x,i[4]=Vo.x,i[8]=Dn.x,i[1]=Di.y,i[5]=Vo.y,i[9]=Dn.y,i[2]=Di.z,i[6]=Vo.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],v=n[7],y=n[11],M=n[15],E=i[0],S=i[4],R=i[8],b=i[12],T=i[1],O=i[5],z=i[9],ee=i[13],D=i[2],k=i[6],j=i[10],Z=i[14],oe=i[3],K=i[7],ne=i[11],V=i[15];return s[0]=o*E+a*T+c*D+l*oe,s[4]=o*S+a*O+c*k+l*K,s[8]=o*R+a*z+c*j+l*ne,s[12]=o*b+a*ee+c*Z+l*V,s[1]=u*E+h*T+f*D+d*oe,s[5]=u*S+h*O+f*k+d*K,s[9]=u*R+h*z+f*j+d*ne,s[13]=u*b+h*ee+f*Z+d*V,s[2]=p*E+_*T+g*D+m*oe,s[6]=p*S+_*O+g*k+m*K,s[10]=p*R+_*z+g*j+m*ne,s[14]=p*b+_*ee+g*Z+m*V,s[3]=x*E+v*T+y*D+M*oe,s[7]=x*S+v*O+y*k+M*K,s[11]=x*R+v*z+y*j+M*ne,s[15]=x*b+v*ee+y*Z+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+g*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],x=h*g*l-_*f*l+_*c*d-a*g*d-h*c*m+a*f*m,v=p*f*l-u*g*l-p*c*d+o*g*d+u*c*m-o*f*m,y=u*_*l-p*h*l+p*a*d-o*_*d-u*a*m+o*h*m,M=p*h*c-u*_*c-p*a*f+o*_*f+u*a*g-o*h*g,E=t*x+n*v+i*y+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=x*S,e[1]=(_*f*s-h*g*s-_*i*d+n*g*d+h*i*m-n*f*m)*S,e[2]=(a*g*s-_*c*s+_*i*l-n*g*l-a*i*m+n*c*m)*S,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*S,e[4]=v*S,e[5]=(u*g*s-p*f*s+p*i*d-t*g*d-u*i*m+t*f*m)*S,e[6]=(p*c*s-o*g*s-p*i*l+t*g*l+o*i*m-t*c*m)*S,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*S,e[8]=y*S,e[9]=(p*h*s-u*_*s-p*n*d+t*_*d+u*n*m-t*h*m)*S,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*m+t*a*m)*S,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*S,e[12]=M*S,e[13]=(u*_*i-p*h*i+p*n*f-t*_*f-u*n*g+t*h*g)*S,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*g-t*a*g)*S,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,p=s*h,_=o*u,g=o*h,m=a*h,x=c*l,v=c*u,y=c*h,M=n.x,E=n.y,S=n.z;return i[0]=(1-(_+m))*M,i[1]=(d+y)*M,i[2]=(p-v)*M,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+m))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(p+v)*S,i[9]=(g-x)*S,i[10]=(1-(f+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$s.set(i[0],i[1],i[2]).length();const o=$s.set(i[4],i[5],i[6]).length(),a=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const l=1/s,u=1/o,h=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=jn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===jn)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===br)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=jn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u;let p,_;if(a===jn)p=(o+s)*h,_=-2*h;else if(a===br)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new w,qn=new He,P0=new w(0,0,0),L0=new w(1,1,1),Di=new w,Vo=new w,Dn=new w,Qh=new He,ef=new nn;class To{constructor(e=0,t=0,n=0,i=To.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}To.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const tf=new w,Ys=new nn,mi=new He,Go=new w,Or=new w,D0=new w,N0=new nn,nf=new w(1,0,0),sf=new w(0,1,0),rf=new w(0,0,1),U0={type:"added"},O0={type:"removed"};class ut extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new w,t=new To,n=new nn,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ke}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(sf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(sf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Or,Go,this.up):mi.lookAt(Go,Or,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(mi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(U0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new w(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new w,gi=new w,Zc=new w,_i=new w,js=new w,Zs=new w,of=new w,Kc=new w,Jc=new w,Qc=new w;let Wo=!1;class wn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$n.subVectors(i,t),gi.subVectors(n,t),Zc.subVectors(e,t);const o=$n.dot($n),a=$n.dot(gi),c=$n.dot(Zc),l=gi.dot(gi),u=gi.dot(Zc),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,p=(o*u-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,n,i,s,o,a,c){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,_i),c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),gi.subVectors(e,t),$n.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),$n.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;js.subVectors(i,n),Zs.subVectors(s,n),Kc.subVectors(e,n);const c=js.dot(Kc),l=Zs.dot(Kc);if(c<=0&&l<=0)return t.copy(n);Jc.subVectors(e,i);const u=js.dot(Jc),h=Zs.dot(Jc);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(js,o);Qc.subVectors(e,s);const d=js.dot(Qc),p=Zs.dot(Qc);if(p>=0&&d<=p)return t.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Zs,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return of.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(of,a);const m=1/(g+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(js,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function el(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=ju(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=el(o,s,e+1/3),this.g=el(o,s,e),this.b=el(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return pt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Bt(fn.r*255,0,255))*65536+Math.round(Bt(fn.g*255,0,255))*256+Math.round(Bt(fn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=wt){pt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Xo);const n=Zr(Ni.h,Xo.h,t),i=Zr(Ni.s,Xo.s,t),s=Zr(Ni.l,Xo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ve;ve.NAMES=zm;let F0=0;class Zt extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ys,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mn extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xi=B0();function B0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function An(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Bt(r,-65504,65504),xi.floatView[0]=r;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function qr(r){const e=r>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(r&1023)]+xi.exponentTable[e],xi.floatView[0]}const z0={toHalfFloat:An,fromHalfFloat:qr},qt=new w,qo=new J;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==co&&(e.usage=this.usage),e}}class k0 extends mt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class H0 extends mt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class V0 extends mt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class G0 extends mt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ju extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class W0 extends mt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Qu extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class X0 extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=qr(this.array[e*this.itemSize]);return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=An(t),this}getY(e){let t=qr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=An(t),this}getZ(e){let t=qr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=An(t),this}getW(e){let t=qr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=An(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=An(t),this.array[e+1]=An(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=An(t),this.array[e+1]=An(n),this.array[e+2]=An(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=An(t),this.array[e+1]=An(n),this.array[e+2]=An(i),this.array[e+3]=An(s),this}}class Ie extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}class q0 extends mt{constructor(e,t,n){super(new Float64Array(e),t,n)}}let $0=0;const Hn=new He,tl=new ut,Ks=new w,Nn=new Yt,Fr=new Yt,tn=new w;class Je extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Om(e)?Qu:Ju)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Nn.min,Fr.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,Fr.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(Fr.min),Nn.expandByPoint(Fr.max))}Nn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(Ks.fromBufferAttribute(e,l),tn.add(Ks)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new w,u[T]=new w;const h=new w,f=new w,d=new w,p=new J,_=new J,g=new J,m=new w,x=new w;function v(T,O,z){h.fromArray(i,T*3),f.fromArray(i,O*3),d.fromArray(i,z*3),p.fromArray(o,T*2),_.fromArray(o,O*2),g.fromArray(o,z*2),f.sub(h),d.sub(h),_.sub(p),g.sub(p);const ee=1/(_.x*g.y-g.x*_.y);isFinite(ee)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(ee),x.copy(d).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(ee),l[T].add(m),l[O].add(m),l[z].add(m),u[T].add(x),u[O].add(x),u[z].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,O=y.length;T<O;++T){const z=y[T],ee=z.start,D=z.count;for(let k=ee,j=ee+D;k<j;k+=3)v(n[k+0],n[k+1],n[k+2])}const M=new w,E=new w,S=new w,R=new w;function b(T){S.fromArray(s,T*3),R.copy(S);const O=l[T];M.copy(O),M.sub(S.multiplyScalar(S.dot(O))).normalize(),E.crossVectors(R,O);const ee=E.dot(u[T])<0?-1:1;c[T*4]=M.x,c[T*4+1]=M.y,c[T*4+2]=M.z,c[T*4+3]=ee}for(let T=0,O=y.length;T<O;++T){const z=y[T],ee=z.start,D=z.count;for(let k=ee,j=ee+D;k<j;k+=3)b(n[k+0]),b(n[k+1]),b(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new w,s=new w,o=new w,a=new w,c=new w,l=new w,u=new w,h=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let m=0;m<u;m++)f[p++]=l[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Je,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new He,ts=new Fs,$o=new jt,cf=new w,Js=new w,Qs=new w,er=new w,nl=new w,Yo=new w,jo=new J,Zo=new J,Ko=new J,lf=new w,uf=new w,hf=new w,Jo=new w,Qo=new w;class At extends ut{constructor(e=new Je,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(nl.fromBufferAttribute(h,e),o?Yo.addScaledVector(nl,u):Yo.addScaledVector(nl.sub(t),u))}t.add(Yo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!($o.containsPoint(ts.origin)===!1&&(ts.intersectSphere($o,cf)===null||ts.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(af.copy(s).invert(),ts.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){const E=a.getX(y),S=a.getX(y+1),R=a.getX(y+2);i=ea(this,m,e,n,l,u,h,E,S,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=ea(this,o,e,n,l,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){const E=y,S=y+1,R=y+2;i=ea(this,m,e,n,l,u,h,E,S,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=g,v=g+1,y=g+2;i=ea(this,o,e,n,l,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Y0(r,e,t,n,i,s,o,a){let c;if(e.side===Sn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===li,a),c===null)return null;Qo.copy(a),Qo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Qo);return l<t.near||l>t.far?null:{distance:l,point:Qo.clone(),object:r}}function ea(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Js),r.getVertexPosition(c,Qs),r.getVertexPosition(l,er);const u=Y0(r,e,t,n,Js,Qs,er,Jo);if(u){i&&(jo.fromBufferAttribute(i,a),Zo.fromBufferAttribute(i,c),Ko.fromBufferAttribute(i,l),u.uv=wn.getInterpolation(Jo,Js,Qs,er,jo,Zo,Ko,new J)),s&&(jo.fromBufferAttribute(s,a),Zo.fromBufferAttribute(s,c),Ko.fromBufferAttribute(s,l),u.uv1=wn.getInterpolation(Jo,Js,Qs,er,jo,Zo,Ko,new J),u.uv2=u.uv1),o&&(lf.fromBufferAttribute(o,a),uf.fromBufferAttribute(o,c),hf.fromBufferAttribute(o,l),u.normal=wn.getInterpolation(Jo,Js,Qs,er,lf,uf,hf,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new w,materialIndex:0};wn.getNormal(Js,Qs,er,h.normal),u.face=h}return u}class Ri extends Je{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function p(_,g,m,x,v,y,M,E,S,R,b){const T=y/S,O=M/R,z=y/2,ee=M/2,D=E/2,k=S+1,j=R+1;let Z=0,oe=0;const K=new w;for(let ne=0;ne<j;ne++){const V=ne*O-ee;for(let xe=0;xe<k;xe++){const W=xe*T-z;K[_]=W*x,K[g]=V*v,K[m]=D,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[m]=E>0?1:-1,u.push(K.x,K.y,K.z),h.push(xe/S),h.push(1-ne/R),Z+=1}}for(let ne=0;ne<R;ne++)for(let V=0;V<S;V++){const xe=f+V+k*ne,W=f+V+k*(ne+1),L=f+(V+1)+k*(ne+1),U=f+(V+1)+k*ne;c.push(xe,W,U),c.push(W,L,U),oe+=6}a.addGroup(d,oe,b),d+=oe,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(r){const e={};for(let t=0;t<r.length;t++){const n=Sr(r[t]);for(const i in n)e[i]=n[i]}return e}function j0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function km(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const cc={clone:Sr,merge:xn};var Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lc extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends lc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Hm extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(tr,nr,e,t);i.layers=this.layers,this.add(i);const s=new $t(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new $t(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new $t(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new $t(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new $t(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Eo extends It{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vm extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?wt:On),this.texture=new Eo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ri(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:bi});s.uniforms.tEquirect.value=t;const o=new At(i,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Rt),new Hm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const il=new w,J0=new w,Q0=new Ke;class ri{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=il.subVectors(n,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Q0.getNormalMatrix(e),i=this.coplanarPoint(il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new jt,ta=new w;class Ao{constructor(e=new ri,t=new ri,n=new ri,i=new ri,s=new ri,o=new ri){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,f-l,g-d,y-m).normalize(),n[1].setComponents(c+s,f+l,g+d,y+m).normalize(),n[2].setComponents(c+o,f+u,g+p,y+x).normalize(),n[3].setComponents(c-o,f-u,g-p,y-x).normalize(),n[4].setComponents(c-a,f-h,g-_,y-v).normalize(),t===jn)n[5].setComponents(c+a,f+h,g+_,y+v).normalize();else if(t===br)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ta.x=i.normal.x>0?e.max.x:e.min.x,ta.y=i.normal.y>0?e.max.y:e.min.y,ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ev(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,d=h.byteLength,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,u,h){const f=u.array,d=u._updateRange,p=u.updateRanges;if(r.bindBuffer(h,l),d.count===-1&&p.length===0&&r.bufferSubData(h,0,f),p.length!==0){for(let _=0,g=p.length;_<g;_++){const m=p[_];t?r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class Rr extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const x=m*f-o;for(let v=0;v<l;v++){const y=v*h-s;p.push(y,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const v=x+l*m,y=x+l*(m+1),M=x+1+l*(m+1),E=x+1+l*m;d.push(v,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Av=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ex=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ay=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,by=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,My=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ey=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Py=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:cv,batching_pars_vertex:lv,batching_vertex:uv,begin_vertex:hv,beginnormal_vertex:fv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:vv,clipping_planes_vertex:xv,color_fragment:yv,color_pars_fragment:bv,color_pars_vertex:Mv,color_vertex:Sv,common:Tv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Av,displacementmap_pars_vertex:wv,displacementmap_vertex:Cv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Pv,colorspace_fragment:Lv,colorspace_pars_fragment:Iv,envmap_fragment:Dv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Uv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:Yv,envmap_vertex:Fv,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:kv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Vv,lightmap_fragment:Gv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:qv,lights_pars_begin:$v,lights_toon_fragment:jv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:cx,map_pars_fragment:lx,map_particle_fragment:ux,map_particle_pars_fragment:hx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:dx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:yx,normal_pars_vertex:bx,normal_vertex:Mx,normalmap_pars_fragment:Sx,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:wx,opaque_fragment:Cx,packing:Rx,premultiplied_alpha_fragment:Px,project_vertex:Lx,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:Bx,shadowmask_pars_fragment:zx,skinbase_vertex:kx,skinning_pars_vertex:Hx,skinning_vertex:Vx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:qx,tonemapping_pars_fragment:$x,transmission_fragment:Yx,transmission_pars_fragment:jx,uv_pars_fragment:Zx,uv_pars_vertex:Kx,uv_vertex:Jx,worldpos_vertex:Qx,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:sy,cube_frag:ry,depth_vert:oy,depth_frag:ay,distanceRGBA_vert:cy,distanceRGBA_frag:ly,equirect_vert:uy,equirect_frag:hy,linedashed_vert:fy,linedashed_frag:dy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:xy,meshnormal_vert:yy,meshnormal_frag:by,meshphong_vert:My,meshphong_frag:Sy,meshphysical_vert:Ty,meshphysical_frag:Ey,meshtoon_vert:Ay,meshtoon_frag:wy,points_vert:Cy,points_frag:Ry,shadow_vert:Py,shadow_frag:Ly,sprite_vert:Iy,sprite_frag:Dy},ge={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},bn={basic:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ve(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:xn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:xn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ve(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:xn([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:xn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:xn([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:xn([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:xn([ge.common,ge.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:xn([ge.lights,ge.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};bn.physical={uniforms:xn([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const na={r:0,b:0,g:0};function Ny(r,e,t,n,i,s,o){const a=new ve(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function p(g,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cr)?(u===void 0&&(u=new At(new Ri(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Sr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new Rr(2,2),new zn({name:"BackgroundMaterial",uniforms:Sr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,m){g.getRGB(na,km(r)),n.buffers.color.setClear(na.r,na.g,na.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:p}}function Uy(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null);let l=c,u=!1;function h(D,k,j,Z,oe){let K=!1;if(o){const ne=_(Z,j,k);l!==ne&&(l=ne,d(l.object)),K=m(D,Z,j,oe),K&&x(D,Z,j,oe)}else{const ne=k.wireframe===!0;(l.geometry!==Z.id||l.program!==j.id||l.wireframe!==ne)&&(l.geometry=Z.id,l.program=j.id,l.wireframe=ne,K=!0)}oe!==null&&t.update(oe,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,R(D,k,j,Z),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function p(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,k,j){const Z=j.wireframe===!0;let oe=a[D.id];oe===void 0&&(oe={},a[D.id]=oe);let K=oe[k.id];K===void 0&&(K={},oe[k.id]=K);let ne=K[Z];return ne===void 0&&(ne=g(f()),K[Z]=ne),ne}function g(D){const k=[],j=[],Z=[];for(let oe=0;oe<i;oe++)k[oe]=0,j[oe]=0,Z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:Z,object:D,attributes:{},index:null}}function m(D,k,j,Z){const oe=l.attributes,K=k.attributes;let ne=0;const V=j.getAttributes();for(const xe in V)if(V[xe].location>=0){const L=oe[xe];let U=K[xe];if(U===void 0&&(xe==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),xe==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),L===void 0||L.attribute!==U||U&&L.data!==U.data)return!0;ne++}return l.attributesNum!==ne||l.index!==Z}function x(D,k,j,Z){const oe={},K=k.attributes;let ne=0;const V=j.getAttributes();for(const xe in V)if(V[xe].location>=0){let L=K[xe];L===void 0&&(xe==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),xe==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const U={};U.attribute=L,L&&L.data&&(U.data=L.data),oe[xe]=U,ne++}l.attributes=oe,l.attributesNum=ne,l.index=Z}function v(){const D=l.newAttributes;for(let k=0,j=D.length;k<j;k++)D[k]=0}function y(D){M(D,0)}function M(D,k){const j=l.newAttributes,Z=l.enabledAttributes,oe=l.attributeDivisors;j[D]=1,Z[D]===0&&(r.enableVertexAttribArray(D),Z[D]=1),oe[D]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),oe[D]=k)}function E(){const D=l.newAttributes,k=l.enabledAttributes;for(let j=0,Z=k.length;j<Z;j++)k[j]!==D[j]&&(r.disableVertexAttribArray(j),k[j]=0)}function S(D,k,j,Z,oe,K,ne){ne===!0?r.vertexAttribIPointer(D,k,j,oe,K):r.vertexAttribPointer(D,k,j,Z,oe,K)}function R(D,k,j,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const oe=Z.attributes,K=j.getAttributes(),ne=k.defaultAttributeValues;for(const V in K){const xe=K[V];if(xe.location>=0){let W=oe[V];if(W===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const L=W.normalized,U=W.itemSize,_e=t.get(W);if(_e===void 0)continue;const be=_e.buffer,ze=_e.type,ie=_e.bytesPerElement,Me=n.isWebGL2===!0&&(ze===r.INT||ze===r.UNSIGNED_INT||W.gpuType===Bu);if(W.isInterleavedBufferAttribute){const Ve=W.data,I=Ve.stride,me=W.offset;if(Ve.isInstancedInterleavedBuffer){for(let te=0;te<xe.locationSize;te++)M(xe.location+te,Ve.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let te=0;te<xe.locationSize;te++)y(xe.location+te);r.bindBuffer(r.ARRAY_BUFFER,be);for(let te=0;te<xe.locationSize;te++)S(xe.location+te,U/xe.locationSize,ze,L,I*ie,(me+U/xe.locationSize*te)*ie,Me)}else{if(W.isInstancedBufferAttribute){for(let Ve=0;Ve<xe.locationSize;Ve++)M(xe.location+Ve,W.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ve=0;Ve<xe.locationSize;Ve++)y(xe.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Ve=0;Ve<xe.locationSize;Ve++)S(xe.location+Ve,U/xe.locationSize,ze,L,U*ie,U/xe.locationSize*Ve*ie,Me)}}else if(ne!==void 0){const L=ne[V];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(xe.location,L);break;case 3:r.vertexAttrib3fv(xe.location,L);break;case 4:r.vertexAttrib4fv(xe.location,L);break;default:r.vertexAttrib1fv(xe.location,L)}}}}E()}function b(){z();for(const D in a){const k=a[D];for(const j in k){const Z=k[j];for(const oe in Z)p(Z[oe].object),delete Z[oe];delete k[j]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const j in k){const Z=k[j];for(const oe in Z)p(Z[oe].object),delete Z[oe];delete k[j]}delete a[D.id]}function O(D){for(const k in a){const j=a[k];if(j[D.id]===void 0)continue;const Z=j[D.id];for(const oe in Z)p(Z[oe].object),delete Z[oe];delete j[D.id]}}function z(){ee(),u=!0,l!==c&&(l=c,d(l.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:z,resetDefaultState:ee,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function Oy(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,h,f),t.update(h,s,f)}function l(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(u[p],h[p]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];t.update(p,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Fy(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),M=v&&y,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function By(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ri,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):l();else{const x=s?0:n,v=x*4;let y=m.clippingState||null;c.value=y,y=u(p,f,v,d);for(let M=0;M!==v;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function zy(r){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Ai:a===no&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Vm(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bs extends lc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,ff=[.125,.215,.35,.446,.526,.582],ms=20,sl=new Bs,df=new ve;let rl=null,ol=0,al=0;const ps=(1+Math.sqrt(5))/2,ir=1/ps,pf=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,ps,ir),new w(0,ps,-ir),new w(ir,0,ps),new w(-ir,0,ps),new w(ps,ir,0),new w(-ps,ir,0)];class du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,ol,al),e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:xr,format:Cn,colorSpace:sn,depthBuffer:!1},i=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(s)),this._blurMaterial=Hy(s,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,i){const a=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(df),u.toneMapping=Mi,u.autoClear=!1;const d=new Mn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),p=new At(new Ri,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(df),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):x===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;ia(i,x*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=pf[(i-1)%pf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ms-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):ms;g>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const m=[];let x=0;for(let S=0;S<ms;++S){const R=S/_,b=Math.exp(-R*R/2);m.push(b),S===0?x+=b:S<g&&(x+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-hr?i-v+hr:0),E=4*(this._cubeSize-y);ia(t,M,E,3*y,2*y),c.setRenderTarget(t),c.render(h,sl)}}function ky(r){const e=[],t=[],n=[];let i=r;const s=r-hr+1+ff.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-hr?c=ff[o-r+hr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,g=2,m=1,x=new Float32Array(_*p*d),v=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let E=0;E<d;E++){const S=E%3*2/3-1,R=E>2?0:-1,b=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(b,_*p*E),v.set(f,g*p*E);const T=[E,E,E,E,E,E];y.set(T,m*p*E)}const M=new Je;M.setAttribute("position",new mt(x,_)),M.setAttribute("uv",new mt(v,g)),M.setAttribute("faceIndex",new mt(y,m)),e.push(M),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(r,e,t){const n=new Bn(r,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hy(r,e,t){const n=new Float32Array(ms),i=new w(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gf(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _f(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===to||c===no,u=c===Ai||c===Xi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new du(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new du(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wy(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],r.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],E=x[v+1],S=x[v+2];f.push(M,E,E,S,S,M)}}else if(p!==void 0){const x=p.array;_=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,E=v+1,S=v+2;f.push(M,E,E,S,S,M)}}else return;const g=new(Om(f)?Qu:Ju)(f,1);g.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Xy(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){r.drawElements(s,p,a,d*c),t.update(p,s,1)}function h(d,p,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,d*c,_),t.update(p,s,_)}function f(d,p,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(s,p,0,a,d,0,_);let m=0;for(let x=0;x<_;x++)m+=p[x];t.update(m,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function qy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $y(r,e){return r[0]-e[0]}function Yy(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jy(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let D=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let R=0;x===!0&&(R=1),v===!0&&(R=2),y===!0&&(R=3);let b=u.attributes.position.count*R,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const O=new Float32Array(b*T*4*p),z=new oc(O,b,T,p);z.type=Yn,z.needsUpdate=!0;const ee=R*4;for(let k=0;k<p;k++){const j=M[k],Z=E[k],oe=S[k],K=b*T*4*k;for(let ne=0;ne<j.count;ne++){const V=ne*ee;x===!0&&(o.fromBufferAttribute(j,ne),O[K+V+0]=o.x,O[K+V+1]=o.y,O[K+V+2]=o.z,O[K+V+3]=0),v===!0&&(o.fromBufferAttribute(Z,ne),O[K+V+4]=o.x,O[K+V+5]=o.y,O[K+V+6]=o.z,O[K+V+7]=0),y===!0&&(o.fromBufferAttribute(oe,ne),O[K+V+8]=o.x,O[K+V+9]=o.y,O[K+V+10]=o.z,O[K+V+11]=oe.itemSize===4?o.w:1)}}_={count:p,texture:z,size:new J(b,T)},s.set(u,_),u.addEventListener("dispose",D)}let g=0;for(let x=0;x<f.length;x++)g+=f[x];const m=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const y=p[v];y[0]=v,y[1]=f[v]}p.sort(Yy);for(let v=0;v<8;v++)v<d&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort($y);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],E=y[1];M!==Number.MAX_SAFE_INTEGER&&E?(_&&u.getAttribute("morphTarget"+v)!==_[M]&&u.setAttribute("morphTarget"+v,_[M]),g&&u.getAttribute("morphNormal"+v)!==g[M]&&u.setAttribute("morphNormal"+v,g[M]),i[v]=E,m+=E):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Zy(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class th extends It{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=yi),n===void 0&&u===Rs&&(n=Hi),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wm=new It,Xm=new th(1,1);Xm.compareFunction=Yu;const qm=new oc,$m=new Ku,Ym=new Eo,vf=[],xf=[],yf=new Float32Array(16),bf=new Float32Array(9),Mf=new Float32Array(4);function Pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vf[i];if(s===void 0&&(s=new Float32Array(i),vf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uc(r,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ky(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function Qy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function tb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Mf.set(n),r.uniformMatrix2fv(this.addr,!1,Mf),Jt(t,n)}}function nb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;bf.set(n),r.uniformMatrix3fv(this.addr,!1,bf),Jt(t,n)}}function ib(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;yf.set(n),r.uniformMatrix4fv(this.addr,!1,yf),Jt(t,n)}}function sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function cb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function fb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Xm:Wm;t.setTexture2D(e||s,i)}function db(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$m,i)}function pb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ym,i)}function mb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qm,i)}function gb(r){switch(r){case 5126:return Ky;case 35664:return Jy;case 35665:return Qy;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return rb;case 35668:case 35672:return ob;case 35669:case 35673:return ab;case 5125:return cb;case 36294:return lb;case 36295:return ub;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(r,e){r.uniform1fv(this.addr,e)}function vb(r,e){const t=Pr(e,this.size,2);r.uniform2fv(this.addr,t)}function xb(r,e){const t=Pr(e,this.size,3);r.uniform3fv(this.addr,t)}function yb(r,e){const t=Pr(e,this.size,4);r.uniform4fv(this.addr,t)}function bb(r,e){const t=Pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mb(r,e){const t=Pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Sb(r,e){const t=Pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Tb(r,e){r.uniform1iv(this.addr,e)}function Eb(r,e){r.uniform2iv(this.addr,e)}function Ab(r,e){r.uniform3iv(this.addr,e)}function wb(r,e){r.uniform4iv(this.addr,e)}function Cb(r,e){r.uniform1uiv(this.addr,e)}function Rb(r,e){r.uniform2uiv(this.addr,e)}function Pb(r,e){r.uniform3uiv(this.addr,e)}function Lb(r,e){r.uniform4uiv(this.addr,e)}function Ib(r,e,t){const n=this.cache,i=e.length,s=uc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Wm,s[o])}function Db(r,e,t){const n=this.cache,i=e.length,s=uc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$m,s[o])}function Nb(r,e,t){const n=this.cache,i=e.length,s=uc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ym,s[o])}function Ub(r,e,t){const n=this.cache,i=e.length,s=uc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qm,s[o])}function Ob(r){switch(r){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return bb;case 35675:return Mb;case 35676:return Sb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return Ab;case 35669:case 35673:return wb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ub}}class Fb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gb(t.type)}}class Bb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ob(t.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Sf(r,e){r.seq.push(e),r.map[e.id]=e}function kb(r,e,t){const n=r.name,i=n.length;for(cl.lastIndex=0;;){const s=cl.exec(n),o=cl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Sf(t,l===void 0?new Fb(a,r,e):new Bb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new zb(a),Sf(t,h)),t=h}}}class Ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);kb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Tf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Hb=37297;let Vb=0;function Gb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Wb(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===ao&&t===oo?n="LinearDisplayP3ToLinearSRGB":e===oo&&t===ao&&(n="LinearSRGBToLinearDisplayP3"),r){case sn:case So:return[n,"LinearTransferOETF"];case wt:case sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ef(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Gb(r.getShaderSource(e),o)}else return i}function Xb(r,e){const t=Wb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qb(r,e){let t;switch(e){case cm:t="Linear";break;case lm:t="Reinhard";break;case um:t="OptimizedCineon";break;case Fu:t="ACESFilmic";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $b(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function Yb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function $r(r){return r!==""}function Af(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(r){return r.replace(Zb,Jb)}const Kb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jb(r,e){let t=Xe[e];if(t===void 0){const n=Kb.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pu(t)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(r){return r.replace(Qb,eM)}function eM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function nM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ai:case Xi:e="ENVMAP_TYPE_CUBE";break;case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function sM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mo:e="ENVMAP_BLENDING_MULTIPLY";break;case om:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function rM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tM(t),l=nM(t),u=iM(t),h=sM(t),f=rM(t),d=t.isWebGL2?"":$b(t),p=Yb(s),_=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($r).join(`
`),g.length>0&&(g+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter($r).join(`
`),m.length>0&&(m+=`
`)):(g=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[d,Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Xb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=pu(o),o=Af(o,t),o=wf(o,t),a=pu(a),a=Af(a,t),a=wf(a,t),o=Cf(o),a=Cf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+g+o,y=x+m+a,M=Tf(i,i.VERTEX_SHADER,v),E=Tf(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(O){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),ee=i.getShaderInfoLog(M).trim(),D=i.getShaderInfoLog(E).trim();let k=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,E);else{const Z=Ef(i,M,"vertex"),oe=Ef(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+Z+`
`+oe)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(ee===""||D==="")&&(j=!1);j&&(O.diagnostics={runnable:k,programLog:z,vertexShader:{log:ee,prefix:g},fragmentShader:{log:D,prefix:m}})}i.deleteShader(M),i.deleteShader(E),R=new Ha(i,_),b=jb(i,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,Hb)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let aM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lM(e),t.set(e,n)),n}}class lM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function uM(r,e,t,n,i,s,o){const a=new ac,c=new cM,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function g(b,T,O,z,ee){const D=z.fog,k=ee.geometry,j=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),oe=Z&&Z.mapping===Cr?Z.image.height:null,K=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,V=ne!==void 0?ne.length:0;let xe=0;k.morphAttributes.position!==void 0&&(xe=1),k.morphAttributes.normal!==void 0&&(xe=2),k.morphAttributes.color!==void 0&&(xe=3);let W,L,U,_e;if(K){const gn=bn[K];W=gn.vertexShader,L=gn.fragmentShader}else W=b.vertexShader,L=b.fragmentShader,c.update(b),U=c.getVertexShaderID(b),_e=c.getFragmentShaderID(b);const be=r.getRenderTarget(),ze=ee.isInstancedMesh===!0,ie=ee.isBatchedMesh===!0,Me=!!b.map,Ve=!!b.matcap,I=!!Z,me=!!b.aoMap,te=!!b.lightMap,fe=!!b.bumpMap,re=!!b.normalMap,Fe=!!b.displacementMap,Ce=!!b.emissiveMap,Re=!!b.metalnessMap,qe=!!b.roughnessMap,ct=b.anisotropy>0,Tt=b.clearcoat>0,P=b.iridescence>0,A=b.sheen>0,G=b.transmission>0,le=ct&&!!b.anisotropyMap,ae=Tt&&!!b.clearcoatMap,ue=Tt&&!!b.clearcoatNormalMap,Oe=Tt&&!!b.clearcoatRoughnessMap,de=P&&!!b.iridescenceMap,Se=P&&!!b.iridescenceThicknessMap,N=A&&!!b.sheenColorMap,pe=A&&!!b.sheenRoughnessMap,se=!!b.specularMap,$e=!!b.specularColorMap,Be=!!b.specularIntensityMap,We=G&&!!b.transmissionMap,Ue=G&&!!b.thicknessMap,De=!!b.gradientMap,it=!!b.alphaMap,F=b.alphaTest>0,ye=!!b.alphaHash,ce=!!b.extensions,Q=!!k.attributes.uv1,he=!!k.attributes.uv2,Ge=!!k.attributes.uv3;let st=Mi;return b.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(st=r.toneMapping),{isWebGL2:u,shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:L,defines:b.defines,customVertexShaderID:U,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ie,instancing:ze,instancingColor:ze&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:sn,map:Me,matcap:Ve,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:oe,aoMap:me,lightMap:te,bumpMap:fe,normalMap:re,displacementMap:f&&Fe,emissiveMap:Ce,normalMapObjectSpace:re&&b.normalMapType===wm,normalMapTangentSpace:re&&b.normalMapType===Yi,metalnessMap:Re,roughnessMap:qe,anisotropy:ct,anisotropyMap:le,clearcoat:Tt,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:Oe,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:Se,sheen:A,sheenColorMap:N,sheenRoughnessMap:pe,specularMap:se,specularColorMap:$e,specularIntensityMap:Be,transmission:G,transmissionMap:We,thicknessMap:Ue,gradientMap:De,opaque:b.transparent===!1&&b.blending===ys,alphaMap:it,alphaTest:F,alphaHash:ye,combine:b.combine,mapUv:Me&&_(b.map.channel),aoMapUv:me&&_(b.aoMap.channel),lightMapUv:te&&_(b.lightMap.channel),bumpMapUv:fe&&_(b.bumpMap.channel),normalMapUv:re&&_(b.normalMap.channel),displacementMapUv:Fe&&_(b.displacementMap.channel),emissiveMapUv:Ce&&_(b.emissiveMap.channel),metalnessMapUv:Re&&_(b.metalnessMap.channel),roughnessMapUv:qe&&_(b.roughnessMap.channel),anisotropyMapUv:le&&_(b.anisotropyMap.channel),clearcoatMapUv:ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:N&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(b.sheenRoughnessMap.channel),specularMapUv:se&&_(b.specularMap.channel),specularColorMapUv:$e&&_(b.specularColorMap.channel),specularIntensityMapUv:Be&&_(b.specularIntensityMap.channel),transmissionMapUv:We&&_(b.transmissionMap.channel),thicknessMapUv:Ue&&_(b.thicknessMap.channel),alphaMapUv:it&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||ct),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Q,vertexUv2s:he,vertexUv3s:Ge,pointsUvs:ee.isPoints===!0&&!!k.attributes.uv&&(Me||it),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Me&&b.map.isVideoTexture===!0&&pt.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Un,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ce&&b.extensions.derivatives===!0,extensionFragDepth:ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)T.push(O),T.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(x(T,b),v(T,b),T.push(r.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function x(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const T=p[b.type];let O;if(T){const z=bn[T];O=cc.clone(z.uniforms)}else O=b.uniforms;return O}function M(b,T){let O;for(let z=0,ee=l.length;z<ee;z++){const D=l[z];if(D.cacheKey===T){O=D,++O.usedTimes;break}}return O===void 0&&(O=new oM(r,T,b,s),l.push(O)),O}function E(b){if(--b.usedTimes===0){const T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),b.destroy()}}function S(b){c.remove(b)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:S,programs:l,dispose:R}}function hM(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Lf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,p,_,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),e++,m}function a(h,f,d,p,_,g){const m=o(h,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(h,f,d,p,_,g){const m=o(h,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||fM),n.length>1&&n.sort(f||Pf),i.length>1&&i.sort(f||Pf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function dM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Lf,r.set(n,[o])):i>=s.length?(o=new Lf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ve};break;case"SpotLight":t={position:new w,direction:new w,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function mM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gM=0;function _M(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vM(r,e){const t=new pM,n=mM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new w);const s=new w,o=new He,a=new He;function c(u,h){let f=0,d=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,g=0,m=0,x=0,v=0,y=0,M=0,E=0,S=0,R=0,b=0;u.sort(_M);const T=h===!0?Math.PI:1;for(let z=0,ee=u.length;z<ee;z++){const D=u[z],k=D.color,j=D.intensity,Z=D.distance,oe=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=k.r*j*T,d+=k.g*j*T,p+=k.b*j*T;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],j);b++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const ne=D.shadow,V=n.get(D);V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[_]=V,i.directionalShadowMap[_]=oe,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=K,_++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(k).multiplyScalar(j*T),K.distance=Z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[m]=K;const ne=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,ne.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[m]=ne.matrix,D.castShadow){const V=n.get(D);V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[m]=V,i.spotShadowMap[m]=oe,E++}m++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(k).multiplyScalar(j),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=K,x++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*T),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ne=D.shadow,V=n.get(D);V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=K,g++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(j*T),K.groundColor.copy(D.groundColor).multiplyScalar(j*T),i.hemi[v]=K,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;const O=i.hash;(O.directionalLength!==_||O.pointLength!==g||O.spotLength!==m||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==M||O.numSpotShadows!==E||O.numSpotMaps!==S||O.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,O.directionalLength=_,O.pointLength=g,O.spotLength=m,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=M,O.numSpotShadows=E,O.numSpotMaps=S,O.numLightProbes=b,i.version=gM++)}function l(u,h){let f=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function If(r,e){const t=new vM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function xM(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new If(r,e),t.set(s,[c])):o>=a.length?(c=new If(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class hc extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nh extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MM(r,e,t){let n=new Ao;const i=new J,s=new J,o=new dt,a=new hc({depthPacking:Am}),c=new nh,l={},u=t.maxTextureSize,h={[li]:Sn,[Sn]:li,[Un]:Un},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:yM,fragmentShader:bM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Je;p.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let m=this.type;this.render=function(M,E,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),O=r.state;O.setBlending(bi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=m!==si&&this.type===si,ee=m===si&&this.type!==si;for(let D=0,k=M.length;D<k;D++){const j=M[D],Z=j.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const oe=Z.getFrameExtents();if(i.multiply(oe),s.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/oe.x),i.x=s.x*oe.x,Z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/oe.y),i.y=s.y*oe.y,Z.mapSize.y=s.y)),Z.map===null||z===!0||ee===!0){const ne=this.type!==si?{minFilter:Ft,magFilter:Ft}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Bn(i.x,i.y,ne),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const K=Z.getViewportCount();for(let ne=0;ne<K;ne++){const V=Z.getViewport(ne);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),O.viewport(o),Z.updateMatrices(j,ne),n=Z.getFrustum(),y(E,S,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===si&&x(Z,S),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(R,b,T)};function x(M,E){const S=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(E,null,S,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(E,null,S,d,_,null)}function v(M,E,S,R){let b=null;const T=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)b=T;else if(b=S.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=b.uuid,z=E.uuid;let ee=l[O];ee===void 0&&(ee={},l[O]=ee);let D=ee[z];D===void 0&&(D=b.clone(),ee[z]=D),b=D}if(b.visible=E.visible,b.wireframe=E.wireframe,R===si?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=r.properties.get(b);O.light=S}return b}function y(M,E,S,R,b){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const z=e.update(M),ee=M.material;if(Array.isArray(ee)){const D=z.groups;for(let k=0,j=D.length;k<j;k++){const Z=D[k],oe=ee[Z.materialIndex];if(oe&&oe.visible){const K=v(M,oe,R,b);M.onBeforeShadow(r,M,E,S,z,K,Z),r.renderBufferDirect(S,null,z,K,M,Z),M.onAfterShadow(r,M,E,S,z,K,Z)}}}else if(ee.visible){const D=v(M,ee,R,b);M.onBeforeShadow(r,M,E,S,z,D,null),r.renderBufferDirect(S,null,z,D,M,null),M.onAfterShadow(r,M,E,S,z,D,null)}}const O=M.children;for(let z=0,ee=O.length;z<ee;z++)y(O[z],E,S,R,b)}}function SM(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const ye=new dt;let ce=null;const Q=new dt(0,0,0,0);return{setMask:function(he){ce!==he&&!F&&(r.colorMask(he,he,he,he),ce=he)},setLocked:function(he){F=he},setClear:function(he,Ge,st,Qt,gn){gn===!0&&(he*=Qt,Ge*=Qt,st*=Qt),ye.set(he,Ge,st,Qt),Q.equals(ye)===!1&&(r.clearColor(he,Ge,st,Qt),Q.copy(ye))},reset:function(){F=!1,ce=null,Q.set(-1,0,0,0)}}}function s(){let F=!1,ye=null,ce=null,Q=null;return{setTest:function(he){he?ie(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(he){ye!==he&&!F&&(r.depthMask(he),ye=he)},setFunc:function(he){if(ce!==he){switch(he){case Qp:r.depthFunc(r.NEVER);break;case em:r.depthFunc(r.ALWAYS);break;case tm:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case nm:r.depthFunc(r.EQUAL);break;case im:r.depthFunc(r.GEQUAL);break;case sm:r.depthFunc(r.GREATER);break;case rm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=he}},setLocked:function(he){F=he},setClear:function(he){Q!==he&&(r.clearDepth(he),Q=he)},reset:function(){F=!1,ye=null,ce=null,Q=null}}}function o(){let F=!1,ye=null,ce=null,Q=null,he=null,Ge=null,st=null,Qt=null,gn=null;return{setTest:function(vt){F||(vt?ie(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(vt){ye!==vt&&!F&&(r.stencilMask(vt),ye=vt)},setFunc:function(vt,_n,ti){(ce!==vt||Q!==_n||he!==ti)&&(r.stencilFunc(vt,_n,ti),ce=vt,Q=_n,he=ti)},setOp:function(vt,_n,ti){(Ge!==vt||st!==_n||Qt!==ti)&&(r.stencilOp(vt,_n,ti),Ge=vt,st=_n,Qt=ti)},setLocked:function(vt){F=vt},setClear:function(vt){gn!==vt&&(r.clearStencil(vt),gn=vt)},reset:function(){F=!1,ye=null,ce=null,Q=null,he=null,Ge=null,st=null,Qt=null,gn=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},d={},p=new WeakMap,_=[],g=null,m=!1,x=null,v=null,y=null,M=null,E=null,S=null,R=null,b=new ve(0,0,0),T=0,O=!1,z=null,ee=null,D=null,k=null,j=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,K=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ne)[1]),oe=K>=1):ne.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),oe=K>=2);let V=null,xe={};const W=r.getParameter(r.SCISSOR_BOX),L=r.getParameter(r.VIEWPORT),U=new dt().fromArray(W),_e=new dt().fromArray(L);function be(F,ye,ce,Q){const he=new Uint8Array(4),Ge=r.createTexture();r.bindTexture(F,Ge),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ce;st++)n&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(ye,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ye+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return Ge}const ze={};ze[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),ze[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ze[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ze[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ie(r.DEPTH_TEST),c.setFunc(eo),Ce(!1),Re(Il),ie(r.CULL_FACE),re(bi);function ie(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function Me(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function Ve(F,ye){return d[F]!==ye?(r.bindFramebuffer(F,ye),d[F]=ye,n&&(F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ye),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ye)),!0):!1}function I(F,ye){let ce=_,Q=!1;if(F)if(ce=p.get(ye),ce===void 0&&(ce=[],p.set(ye,ce)),F.isWebGLMultipleRenderTargets){const he=F.texture;if(ce.length!==he.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Ge=0,st=he.length;Ge<st;Ge++)ce[Ge]=r.COLOR_ATTACHMENT0+Ge;ce.length=he.length,Q=!0}}else ce[0]!==r.COLOR_ATTACHMENT0&&(ce[0]=r.COLOR_ATTACHMENT0,Q=!0);else ce[0]!==r.BACK&&(ce[0]=r.BACK,Q=!0);Q&&(t.isWebGL2?r.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function me(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const te={[ki]:r.FUNC_ADD,[Bp]:r.FUNC_SUBTRACT,[zp]:r.FUNC_REVERSE_SUBTRACT};if(n)te[Ol]=r.MIN,te[Fl]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(te[Ol]=F.MIN_EXT,te[Fl]=F.MAX_EXT)}const fe={[kp]:r.ZERO,[Hp]:r.ONE,[Vp]:r.SRC_COLOR,[Ga]:r.SRC_ALPHA,[Yp]:r.SRC_ALPHA_SATURATE,[qp]:r.DST_COLOR,[Wp]:r.DST_ALPHA,[Gp]:r.ONE_MINUS_SRC_COLOR,[Wa]:r.ONE_MINUS_SRC_ALPHA,[$p]:r.ONE_MINUS_DST_COLOR,[Xp]:r.ONE_MINUS_DST_ALPHA,[jp]:r.CONSTANT_COLOR,[Zp]:r.ONE_MINUS_CONSTANT_COLOR,[Kp]:r.CONSTANT_ALPHA,[Jp]:r.ONE_MINUS_CONSTANT_ALPHA};function re(F,ye,ce,Q,he,Ge,st,Qt,gn,vt){if(F===bi){m===!0&&(Me(r.BLEND),m=!1);return}if(m===!1&&(ie(r.BLEND),m=!0),F!==Fp){if(F!==x||vt!==O){if((v!==ki||E!==ki)&&(r.blendEquation(r.FUNC_ADD),v=ki,E=ki),vt)switch(F){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dl:r.blendFunc(r.ONE,r.ONE);break;case Nl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ul:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Nl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ul:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,S=null,R=null,b.set(0,0,0),T=0,x=F,O=vt}return}he=he||ye,Ge=Ge||ce,st=st||Q,(ye!==v||he!==E)&&(r.blendEquationSeparate(te[ye],te[he]),v=ye,E=he),(ce!==y||Q!==M||Ge!==S||st!==R)&&(r.blendFuncSeparate(fe[ce],fe[Q],fe[Ge],fe[st]),y=ce,M=Q,S=Ge,R=st),(Qt.equals(b)===!1||gn!==T)&&(r.blendColor(Qt.r,Qt.g,Qt.b,gn),b.copy(Qt),T=gn),x=F,O=!1}function Fe(F,ye){F.side===Un?Me(r.CULL_FACE):ie(r.CULL_FACE);let ce=F.side===Sn;ye&&(ce=!ce),Ce(ce),F.blending===ys&&F.transparent===!1?re(bi):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);const Q=F.stencilWrite;l.setTest(Q),Q&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(F){z!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),z=F)}function Re(F){F!==Up?(ie(r.CULL_FACE),F!==ee&&(F===Il?r.cullFace(r.BACK):F===Op?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),ee=F}function qe(F){F!==D&&(oe&&r.lineWidth(F),D=F)}function ct(F,ye,ce){F?(ie(r.POLYGON_OFFSET_FILL),(k!==ye||j!==ce)&&(r.polygonOffset(ye,ce),k=ye,j=ce)):Me(r.POLYGON_OFFSET_FILL)}function Tt(F){F?ie(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+Z-1),V!==F&&(r.activeTexture(F),V=F)}function A(F,ye,ce){ce===void 0&&(V===null?ce=r.TEXTURE0+Z-1:ce=V);let Q=xe[ce];Q===void 0&&(Q={type:void 0,texture:void 0},xe[ce]=Q),(Q.type!==F||Q.texture!==ye)&&(V!==ce&&(r.activeTexture(ce),V=ce),r.bindTexture(F,ye||ze[F]),Q.type=F,Q.texture=ye)}function G(){const F=xe[V];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){U.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),U.copy(F))}function We(F){_e.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),_e.copy(F))}function Ue(F,ye){let ce=h.get(ye);ce===void 0&&(ce=new WeakMap,h.set(ye,ce));let Q=ce.get(F);Q===void 0&&(Q=r.getUniformBlockIndex(ye,F.name),ce.set(F,Q))}function De(F,ye){const Q=h.get(ye).get(F);u.get(ye)!==Q&&(r.uniformBlockBinding(ye,Q,F.__bindingPointIndex),u.set(ye,Q))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},V=null,xe={},d={},p=new WeakMap,_=[],g=null,m=!1,x=null,v=null,y=null,M=null,E=null,S=null,R=null,b=new ve(0,0,0),T=0,O=!1,z=null,ee=null,D=null,k=null,j=null,U.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ie,disable:Me,bindFramebuffer:Ve,drawBuffers:I,useProgram:me,setBlending:re,setMaterial:Fe,setFlipSided:Ce,setCullFace:Re,setLineWidth:qe,setPolygonOffset:ct,setScissorTest:Tt,activeTexture:P,bindTexture:A,unbindTexture:G,compressedTexImage2D:le,compressedTexImage3D:ae,texImage2D:se,texImage3D:$e,updateUBOMapping:Ue,uniformBlockBinding:De,texStorage2D:N,texStorage3D:pe,texSubImage2D:ue,texSubImage3D:Oe,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:Be,viewport:We,reset:it}}function TM(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,A){return m?new OffscreenCanvas(P,A):lo("canvas")}function v(P,A,G,le){let ae=1;if((P.width>le||P.height>le)&&(ae=le/Math.max(P.width,P.height)),ae<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=A?$a:Math.floor,Oe=ue(ae*P.width),de=ue(ae*P.height);_===void 0&&(_=x(Oe,de));const Se=G?x(Oe,de):_;return Se.width=Oe,Se.height=de,Se.getContext("2d").drawImage(P,0,0,Oe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Oe+"x"+de+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return fu(P.width)&&fu(P.height)}function M(P){return a?!1:P.wrapS!==cn||P.wrapT!==cn||P.minFilter!==Ft&&P.minFilter!==Rt}function E(P,A){return P.generateMipmaps&&A&&P.minFilter!==Ft&&P.minFilter!==Rt}function S(P){r.generateMipmap(P)}function R(P,A,G,le,ae=!1){if(a===!1)return A;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===r.RED&&(G===r.FLOAT&&(ue=r.R32F),G===r.HALF_FLOAT&&(ue=r.R16F),G===r.UNSIGNED_BYTE&&(ue=r.R8)),A===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ue=r.R8UI),G===r.UNSIGNED_SHORT&&(ue=r.R16UI),G===r.UNSIGNED_INT&&(ue=r.R32UI),G===r.BYTE&&(ue=r.R8I),G===r.SHORT&&(ue=r.R16I),G===r.INT&&(ue=r.R32I)),A===r.RG&&(G===r.FLOAT&&(ue=r.RG32F),G===r.HALF_FLOAT&&(ue=r.RG16F),G===r.UNSIGNED_BYTE&&(ue=r.RG8)),A===r.RGBA){const Oe=ae?ro:pt.getTransfer(le);G===r.FLOAT&&(ue=r.RGBA32F),G===r.HALF_FLOAT&&(ue=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ue=Oe===xt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(P,A,G){return E(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==Ft&&P.minFilter!==Rt?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){return P===Ft||P===io||P===mr?r.NEAREST:r.LINEAR}function O(P){const A=P.target;A.removeEventListener("dispose",O),ee(A),A.isVideoTexture&&p.delete(A)}function z(P){const A=P.target;A.removeEventListener("dispose",z),k(A)}function ee(P){const A=n.get(P);if(A.__webglInit===void 0)return;const G=P.source,le=g.get(G);if(le){const ae=le[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&D(P),Object.keys(le).length===0&&g.delete(G)}n.remove(P)}function D(P){const A=n.get(P);r.deleteTexture(A.__webglTexture);const G=P.source,le=g.get(G);delete le[A.__cacheKey],o.memory.textures--}function k(P){const A=P.texture,G=n.get(P),le=n.get(A);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(G.__webglFramebuffer[ae]))for(let ue=0;ue<G.__webglFramebuffer[ae].length;ue++)r.deleteFramebuffer(G.__webglFramebuffer[ae][ue]);else r.deleteFramebuffer(G.__webglFramebuffer[ae]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[ae])}else{if(Array.isArray(G.__webglFramebuffer))for(let ae=0;ae<G.__webglFramebuffer.length;ae++)r.deleteFramebuffer(G.__webglFramebuffer[ae]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ae=0;ae<G.__webglColorRenderbuffer.length;ae++)G.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[ae]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,ue=A.length;ae<ue;ae++){const Oe=n.get(A[ae]);Oe.__webglTexture&&(r.deleteTexture(Oe.__webglTexture),o.memory.textures--),n.remove(A[ae])}n.remove(A),n.remove(P)}let j=0;function Z(){j=0}function oe(){const P=j;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),j+=1,P}function K(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ne(P,A){const G=n.get(P);if(P.isVideoTexture&&ct(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,P,A);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+A)}function V(P,A){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ie(G,P,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+A)}function xe(P,A){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ie(G,P,A);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+A)}function W(P,A){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Me(G,P,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+A)}const L={[qi]:r.REPEAT,[cn]:r.CLAMP_TO_EDGE,[vr]:r.MIRRORED_REPEAT},U={[Ft]:r.NEAREST,[io]:r.NEAREST_MIPMAP_NEAREST,[mr]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[tc]:r.LINEAR_MIPMAP_NEAREST,[ui]:r.LINEAR_MIPMAP_LINEAR},_e={[Cm]:r.NEVER,[Nm]:r.ALWAYS,[Rm]:r.LESS,[Yu]:r.LEQUAL,[Pm]:r.EQUAL,[Dm]:r.GEQUAL,[Lm]:r.GREATER,[Im]:r.NOTEQUAL};function be(P,A,G){if(G?(r.texParameteri(P,r.TEXTURE_WRAP_S,L[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,L[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,L[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,U[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,U[A.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==cn||A.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,T(A.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Ft&&A.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,_e[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ft||A.minFilter!==mr&&A.minFilter!==ui||A.type===Yn&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ze(P,A){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",O));const le=A.source;let ae=g.get(le);ae===void 0&&(ae={},g.set(le,ae));const ue=K(A);if(ue!==P.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ae[ue].usedTimes++;const Oe=ae[P.__cacheKey];Oe!==void 0&&(ae[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(A)),P.__cacheKey=ue,P.__webglTexture=ae[ue].texture}return G}function ie(P,A,G){let le=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=r.TEXTURE_3D);const ae=ze(P,A),ue=A.source;t.bindTexture(le,P.__webglTexture,r.TEXTURE0+G);const Oe=n.get(ue);if(ue.version!==Oe.__version||ae===!0){t.activeTexture(r.TEXTURE0+G);const de=pt.getPrimaries(pt.workingColorSpace),Se=A.colorSpace===On?null:pt.getPrimaries(A.colorSpace),N=A.colorSpace===On||de===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const pe=M(A)&&y(A.image)===!1;let se=v(A.image,pe,!1,u);se=Tt(A,se);const $e=y(se)||a,Be=s.convert(A.format,A.colorSpace);let We=s.convert(A.type),Ue=R(A.internalFormat,Be,We,A.colorSpace,A.isVideoTexture);be(le,A,$e);let De;const it=A.mipmaps,F=a&&A.isVideoTexture!==!0&&Ue!==Wu,ye=Oe.__version===void 0||ae===!0,ce=b(A,se,$e);if(A.isDepthTexture)Ue=r.DEPTH_COMPONENT,a?A.type===Yn?Ue=r.DEPTH_COMPONENT32F:A.type===yi?Ue=r.DEPTH_COMPONENT24:A.type===Hi?Ue=r.DEPTH24_STENCIL8:Ue=r.DEPTH_COMPONENT16:A.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Vi&&Ue===r.DEPTH_COMPONENT&&A.type!==nc&&A.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=yi,We=s.convert(A.type)),A.format===Rs&&Ue===r.DEPTH_COMPONENT&&(Ue=r.DEPTH_STENCIL,A.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Hi,We=s.convert(A.type))),ye&&(F?t.texStorage2D(r.TEXTURE_2D,1,Ue,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ue,se.width,se.height,0,Be,We,null));else if(A.isDataTexture)if(it.length>0&&$e){F&&ye&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,it[0].width,it[0].height);for(let Q=0,he=it.length;Q<he;Q++)De=it[Q],F?t.texSubImage2D(r.TEXTURE_2D,Q,0,0,De.width,De.height,Be,We,De.data):t.texImage2D(r.TEXTURE_2D,Q,Ue,De.width,De.height,0,Be,We,De.data);A.generateMipmaps=!1}else F?(ye&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,se.width,se.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,Be,We,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,se.width,se.height,0,Be,We,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){F&&ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ue,it[0].width,it[0].height,se.depth);for(let Q=0,he=it.length;Q<he;Q++)De=it[Q],A.format!==Cn?Be!==null?F?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,De.width,De.height,se.depth,Be,De.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,Ue,De.width,De.height,se.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,De.width,De.height,se.depth,Be,We,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,Ue,De.width,De.height,se.depth,0,Be,We,De.data)}else{F&&ye&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,it[0].width,it[0].height);for(let Q=0,he=it.length;Q<he;Q++)De=it[Q],A.format!==Cn?Be!==null?F?t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(r.TEXTURE_2D,Q,0,0,De.width,De.height,Be,We,De.data):t.texImage2D(r.TEXTURE_2D,Q,Ue,De.width,De.height,0,Be,We,De.data)}else if(A.isDataArrayTexture)F?(ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ue,se.width,se.height,se.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Be,We,se.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,se.width,se.height,se.depth,0,Be,We,se.data);else if(A.isData3DTexture)F?(ye&&t.texStorage3D(r.TEXTURE_3D,ce,Ue,se.width,se.height,se.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Be,We,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,se.width,se.height,se.depth,0,Be,We,se.data);else if(A.isFramebufferTexture){if(ye)if(F)t.texStorage2D(r.TEXTURE_2D,ce,Ue,se.width,se.height);else{let Q=se.width,he=se.height;for(let Ge=0;Ge<ce;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,Ue,Q,he,0,Be,We,null),Q>>=1,he>>=1}}else if(it.length>0&&$e){F&&ye&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,it[0].width,it[0].height);for(let Q=0,he=it.length;Q<he;Q++)De=it[Q],F?t.texSubImage2D(r.TEXTURE_2D,Q,0,0,Be,We,De):t.texImage2D(r.TEXTURE_2D,Q,Ue,Be,We,De);A.generateMipmaps=!1}else F?(ye&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,se.width,se.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,We,se)):t.texImage2D(r.TEXTURE_2D,0,Ue,Be,We,se);E(A,$e)&&S(le),Oe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Me(P,A,G){if(A.image.length!==6)return;const le=ze(P,A),ae=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const ue=n.get(ae);if(ae.version!==ue.__version||le===!0){t.activeTexture(r.TEXTURE0+G);const Oe=pt.getPrimaries(pt.workingColorSpace),de=A.colorSpace===On?null:pt.getPrimaries(A.colorSpace),Se=A.colorSpace===On||Oe===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const N=A.isCompressedTexture||A.image[0].isCompressedTexture,pe=A.image[0]&&A.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!N&&!pe?se[Q]=v(A.image[Q],!1,!0,l):se[Q]=pe?A.image[Q].image:A.image[Q],se[Q]=Tt(A,se[Q]);const $e=se[0],Be=y($e)||a,We=s.convert(A.format,A.colorSpace),Ue=s.convert(A.type),De=R(A.internalFormat,We,Ue,A.colorSpace),it=a&&A.isVideoTexture!==!0,F=ue.__version===void 0||le===!0;let ye=b(A,$e,Be);be(r.TEXTURE_CUBE_MAP,A,Be);let ce;if(N){it&&F&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,De,$e.width,$e.height);for(let Q=0;Q<6;Q++){ce=se[Q].mipmaps;for(let he=0;he<ce.length;he++){const Ge=ce[he];A.format!==Cn?We!==null?it?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,Ge.width,Ge.height,We,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,De,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,Ge.width,Ge.height,We,Ue,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,De,Ge.width,Ge.height,0,We,Ue,Ge.data)}}}else{ce=A.mipmaps,it&&F&&(ce.length>0&&ye++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,De,se[0].width,se[0].height));for(let Q=0;Q<6;Q++)if(pe){it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,se[Q].width,se[Q].height,We,Ue,se[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,se[Q].width,se[Q].height,0,We,Ue,se[Q].data);for(let he=0;he<ce.length;he++){const st=ce[he].image[Q].image;it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,st.width,st.height,We,Ue,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,De,st.width,st.height,0,We,Ue,st.data)}}else{it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,We,Ue,se[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,We,Ue,se[Q]);for(let he=0;he<ce.length;he++){const Ge=ce[he];it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,We,Ue,Ge.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,De,We,Ue,Ge.image[Q])}}}E(A,Be)&&S(r.TEXTURE_CUBE_MAP),ue.__version=ae.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ve(P,A,G,le,ae,ue){const Oe=s.convert(G.format,G.colorSpace),de=s.convert(G.type),Se=R(G.internalFormat,Oe,de,G.colorSpace);if(!n.get(A).__hasExternalTextures){const pe=Math.max(1,A.width>>ue),se=Math.max(1,A.height>>ue);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,ue,Se,pe,se,A.depth,0,Oe,de,null):t.texImage2D(ae,ue,Se,pe,se,0,Oe,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),qe(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ae,n.get(G).__webglTexture,0,Re(A)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,ae,n.get(G).__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(P,A,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let le=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||qe(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Yn?le=r.DEPTH_COMPONENT32F:ae.type===yi&&(le=r.DEPTH_COMPONENT24));const ue=Re(A);qe(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,le,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,le,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const le=Re(A);G&&qe(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,A.width,A.height):qe(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const le=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0;ae<le.length;ae++){const ue=le[ae],Oe=s.convert(ue.format,ue.colorSpace),de=s.convert(ue.type),Se=R(ue.internalFormat,Oe,de,ue.colorSpace),N=Re(A);G&&qe(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,N,Se,A.width,A.height):qe(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,Se,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Se,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ne(A.depthTexture,0);const le=n.get(A.depthTexture).__webglTexture,ae=Re(A);if(A.depthTexture.format===Vi)qe(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(A.depthTexture.format===Rs)qe(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function te(P){const A=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");me(A.__webglFramebuffer,P)}else if(G){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]=r.createRenderbuffer(),I(A.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),I(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(P,A,G){const le=n.get(P);A!==void 0&&Ve(le.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&te(P)}function re(P){const A=P.texture,G=n.get(P),le=n.get(A);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=A.version,o.memory.textures++);const ae=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Oe=y(P)||a;if(ae){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let Se=0;Se<A.mipmaps.length;Se++)G.__webglFramebuffer[de][Se]=r.createFramebuffer()}else G.__webglFramebuffer[de]=r.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<A.mipmaps.length;de++)G.__webglFramebuffer[de]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ue)if(i.drawBuffers){const de=P.texture;for(let Se=0,N=de.length;Se<N;Se++){const pe=n.get(de[Se]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&qe(P)===!1){const de=ue?A:[A];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Se=0;Se<de.length;Se++){const N=de[Se];G.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Se]);const pe=s.convert(N.format,N.colorSpace),se=s.convert(N.type),$e=R(N.internalFormat,pe,se,N.colorSpace,P.isXRRenderTarget===!0),Be=Re(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,$e,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,G.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),I(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),be(r.TEXTURE_CUBE_MAP,A,Oe);for(let de=0;de<6;de++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)Ve(G.__webglFramebuffer[de][Se],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else Ve(G.__webglFramebuffer[de],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);E(A,Oe)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const de=P.texture;for(let Se=0,N=de.length;Se<N;Se++){const pe=de[Se],se=n.get(pe);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),be(r.TEXTURE_2D,pe,Oe),Ve(G.__webglFramebuffer,P,pe,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,0),E(pe,Oe)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,le.__webglTexture),be(de,A,Oe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)Ve(G.__webglFramebuffer[Se],P,A,r.COLOR_ATTACHMENT0,de,Se);else Ve(G.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,de,0);E(A,Oe)&&S(de),t.unbindTexture()}P.depthBuffer&&te(P)}function Fe(P){const A=y(P)||a,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,ae=G.length;le<ae;le++){const ue=G[le];if(E(ue,A)){const Oe=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=n.get(ue).__webglTexture;t.bindTexture(Oe,de),S(Oe),t.unbindTexture()}}}function Ce(P){if(a&&P.samples>0&&qe(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,le=P.height;let ae=r.COLOR_BUFFER_BIT;const ue=[],Oe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(P),Se=P.isWebGLMultipleRenderTargets===!0;if(Se)for(let N=0;N<A.length;N++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let N=0;N<A.length;N++){ue.push(r.COLOR_ATTACHMENT0+N),P.depthBuffer&&ue.push(Oe);const pe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(pe===!1&&(P.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),Se&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[N]),pe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Oe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Oe])),Se){const se=n.get(A[N]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,G,le,0,0,G,le,ae,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let N=0;N<A.length;N++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,de.__webglColorRenderbuffer[N]);const pe=n.get(A[N]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Re(P){return Math.min(h,P.samples)}function qe(P){const A=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(P){const A=o.render.frame;p.get(P)!==A&&(p.set(P,A),P.update())}function Tt(P,A){const G=P.colorSpace,le=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===qa||G!==sn&&G!==On&&(pt.getTransfer(G)===xt?a===!1?e.has("EXT_sRGB")===!0&&le===Cn?(P.format=qa,P.minFilter=Rt,P.generateMipmaps=!1):A=Zu.sRGBToLinear(A):(le!==Cn||ae!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}this.allocateTextureUnit=oe,this.resetTextureUnits=Z,this.setTexture2D=ne,this.setTexture2DArray=V,this.setTexture3D=xe,this.setTextureCube=W,this.rebindTextures=fe,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=qe}function jm(r,e,t){const n=t.isWebGL2;function i(s,o=On){let a;const c=pt.getTransfer(o);if(s===Si)return r.UNSIGNED_BYTE;if(s===zu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ku)return r.UNSIGNED_SHORT_5_5_5_1;if(s===dm)return r.BYTE;if(s===pm)return r.SHORT;if(s===nc)return r.UNSIGNED_SHORT;if(s===Bu)return r.INT;if(s===yi)return r.UNSIGNED_INT;if(s===Yn)return r.FLOAT;if(s===xr)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mm)return r.ALPHA;if(s===Cn)return r.RGBA;if(s===gm)return r.LUMINANCE;if(s===_m)return r.LUMINANCE_ALPHA;if(s===Vi)return r.DEPTH_COMPONENT;if(s===Rs)return r.DEPTH_STENCIL;if(s===qa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vm)return r.RED;if(s===Hu)return r.RED_INTEGER;if(s===xm)return r.RG;if(s===Vu)return r.RG_INTEGER;if(s===Gu)return r.RGBA_INTEGER;if(s===Ua||s===Oa||s===Fa||s===Ba)if(c===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zl||s===kl||s===Hl||s===Vl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gl||s===Wl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gl)return c===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xl||s===ql||s===$l||s===Yl||s===jl||s===Zl||s===Kl||s===Jl||s===Ql||s===eu||s===tu||s===nu||s===iu||s===su)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ql)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$l)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jl)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===eu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===iu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===su)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===za||s===ru||s===ou)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===za)return c===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ru)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ou)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ym||s===au||s===cu||s===lu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===za)return a.COMPRESSED_RED_RGTC1_EXT;if(s===au)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Zm extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EM={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class AM extends hi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const _=t.getContextAttributes();let g=null,m=null;const x=[],v=[],y=new J;let M=null;const E=new $t;E.layers.enable(1),E.viewport=new dt;const S=new $t;S.layers.enable(2),S.viewport=new dt;const R=[E,S],b=new Zm;b.layers.enable(1),b.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let L=x[W];return L===void 0&&(L=new ll,x[W]=L),L.getTargetRaySpace()},this.getControllerGrip=function(W){let L=x[W];return L===void 0&&(L=new ll,x[W]=L),L.getGripSpace()},this.getHand=function(W){let L=x[W];return L===void 0&&(L=new ll,x[W]=L),L.getHandSpace()};function z(W){const L=v.indexOf(W.inputSource);if(L===-1)return;const U=x[L];U!==void 0&&(U.update(W.inputSource,W.frame,l||o),U.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",D);for(let W=0;W<x.length;W++){const L=v[W];L!==null&&(v[W]=null,x[W].disconnect(L))}T=null,O=null,e.setRenderTarget(g),d=null,f=null,h=null,i=null,m=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const L={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Bn(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let L=null,U=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=_.stencil?Rs:Vi,U=_.stencil?Hi:yi);const be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new Bn(f.textureWidth,f.textureHeight,{format:Cn,type:Si,depthTexture:new th(f.textureWidth,f.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ze=e.properties.get(m);ze.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(W){for(let L=0;L<W.removed.length;L++){const U=W.removed[L],_e=v.indexOf(U);_e>=0&&(v[_e]=null,x[_e].disconnect(U))}for(let L=0;L<W.added.length;L++){const U=W.added[L];let _e=v.indexOf(U);if(_e===-1){for(let ze=0;ze<x.length;ze++)if(ze>=v.length){v.push(U),_e=ze;break}else if(v[ze]===null){v[ze]=U,_e=ze;break}if(_e===-1)break}const be=x[_e];be&&be.connect(U)}}const k=new w,j=new w;function Z(W,L,U){k.setFromMatrixPosition(L.matrixWorld),j.setFromMatrixPosition(U.matrixWorld);const _e=k.distanceTo(j),be=L.projectionMatrix.elements,ze=U.projectionMatrix.elements,ie=be[14]/(be[10]-1),Me=be[14]/(be[10]+1),Ve=(be[9]+1)/be[5],I=(be[9]-1)/be[5],me=(be[8]-1)/be[0],te=(ze[8]+1)/ze[0],fe=ie*me,re=ie*te,Fe=_e/(-me+te),Ce=Fe*-me;L.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ce),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Re=ie+Fe,qe=Me+Fe,ct=fe-Ce,Tt=re+(_e-Ce),P=Ve*Me/qe*Re,A=I*Me/qe*Re;W.projectionMatrix.makePerspective(ct,Tt,P,A,Re,qe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function oe(W,L){L===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(L.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;b.near=S.near=E.near=W.near,b.far=S.far=E.far=W.far,(T!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,O=b.far);const L=W.parent,U=b.cameras;oe(b,L);for(let _e=0;_e<U.length;_e++)oe(U[_e],L);U.length===2?Z(b,E,S):b.projectionMatrix.copy(E.projectionMatrix),K(W,b,L)};function K(W,L,U){U===null?W.matrix.copy(L.matrixWorld):(W.matrix.copy(U.matrixWorld),W.matrix.invert(),W.matrix.multiply(L.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(L.projectionMatrix),W.projectionMatrixInverse.copy(L.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Mr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let ne=null;function V(W,L){if(u=L.getViewerPose(l||o),p=L,u!==null){const U=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let _e=!1;U.length!==b.cameras.length&&(b.cameras.length=0,_e=!0);for(let be=0;be<U.length;be++){const ze=U[be];let ie=null;if(d!==null)ie=d.getViewport(ze);else{const Ve=h.getViewSubImage(f,ze);ie=Ve.viewport,be===0&&(e.setRenderTargetTextures(m,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(m))}let Me=R[be];Me===void 0&&(Me=new $t,Me.layers.enable(be),Me.viewport=new dt,R[be]=Me),Me.matrix.fromArray(ze.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ze.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(ie.x,ie.y,ie.width,ie.height),be===0&&(b.matrix.copy(Me.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_e===!0&&b.cameras.push(Me)}}for(let U=0;U<x.length;U++){const _e=v[U],be=x[U];_e!==null&&be!==void 0&&be.update(_e,L,l||o)}ne&&ne(W,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),p=null}const xe=new Gm;xe.setAnimationLoop(V),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}}function wM(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,km(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,x,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function CM(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(p(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const M=v.program;n.updateUBOMapping(x,M);const E=e.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){const v=h();x.__bindingPointIndex=v;const y=r.createBuffer(),M=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,S=y.length;E<S;E++){const R=y[E];if(d(R,E,M)===!0){const b=R.__offset,T=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let z=0;z<T.length;z++){const ee=T[z],D=_(ee);typeof ee=="number"?(R.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,b+O,R.__data)):ee.isMatrix3?(R.__data[0]=ee.elements[0],R.__data[1]=ee.elements[1],R.__data[2]=ee.elements[2],R.__data[3]=ee.elements[0],R.__data[4]=ee.elements[3],R.__data[5]=ee.elements[4],R.__data[6]=ee.elements[5],R.__data[7]=ee.elements[0],R.__data[8]=ee.elements[6],R.__data[9]=ee.elements[7],R.__data[10]=ee.elements[8],R.__data[11]=ee.elements[0]):(ee.toArray(R.__data,O),O+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,R.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const E=Array.isArray(M)?M:[M],S=[];for(let R=0;R<E.length;R++)S.push(E[R].clone());y[v]=S}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const E=Array.isArray(y[v])?y[v]:[y[v]],S=Array.isArray(M)?M:[M];for(let R=0;R<E.length;R++){const b=E[R];if(b.equals(S[R])===!1)return b.copy(S[R]),!0}}return!1}function p(x){const v=x.uniforms;let y=0;const M=16;let E=0;for(let S=0,R=v.length;S<R;S++){const b=v[S],T={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let z=0,ee=O.length;z<ee;z++){const D=O[z],k=_(D);T.boundary+=k.boundary,T.storage+=k.storage}if(b.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,S>0){E=y%M;const z=M-E;E!==0&&z-T.boundary<0&&(y+=M-E,b.__offset=y)}y+=T.storage}return E=y%M,E>0&&(y+=M-E),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}class ih{constructor(e={}){const{canvas:t=Fm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const v=this;let y=!1,M=0,E=0,S=null,R=-1,b=null;const T=new dt,O=new dt;let z=null;const ee=new ve(0);let D=0,k=t.width,j=t.height,Z=1,oe=null,K=null;const ne=new dt(0,0,k,j),V=new dt(0,0,k,j);let xe=!1;const W=new Ao;let L=!1,U=!1,_e=null;const be=new He,ze=new J,ie=new w,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return S===null?Z:1}let I=n;function me(C,B){for(let $=0;$<C.length;$++){const Y=C[$],X=t.getContext(Y,B);if(X!==null)return X}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wr}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ye,!1),I===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),I=me(B,C),I===null)throw me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,fe,re,Fe,Ce,Re,qe,ct,Tt,P,A,G,le,ae,ue,Oe,de,Se,N,pe,se,$e,Be,We;function Ue(){te=new Gy(I),fe=new Fy(I,te,e),te.init(fe),$e=new jm(I,te,fe),re=new SM(I,te,fe),Fe=new qy(I),Ce=new hM,Re=new TM(I,te,re,Ce,fe,$e,Fe),qe=new zy(v),ct=new Vy(v),Tt=new ev(I,fe),Be=new Uy(I,te,Tt,fe),P=new Wy(I,Tt,Fe,Be),A=new Zy(I,P,Tt,Fe),N=new jy(I,fe,Re),Oe=new By(Ce),G=new uM(v,qe,ct,te,fe,Be,Oe),le=new wM(v,Ce),ae=new dM,ue=new xM(te,fe),Se=new Ny(v,qe,ct,re,A,f,c),de=new MM(v,A,fe),We=new CM(I,Fe,fe,re),pe=new Oy(I,te,Fe,fe),se=new Xy(I,te,Fe,fe),Fe.programs=G.programs,v.capabilities=fe,v.extensions=te,v.properties=Ce,v.renderLists=ae,v.shadowMap=de,v.state=re,v.info=Fe}Ue();const De=new AM(v,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(k,j,!1))},this.getSize=function(C){return C.set(k,j)},this.setSize=function(C,B,$=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,j=B,t.width=Math.floor(C*Z),t.height=Math.floor(B*Z),$===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*Z,j*Z).floor()},this.setDrawingBufferSize=function(C,B,$){k=C,j=B,Z=$,t.width=Math.floor(C*$),t.height=Math.floor(B*$),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,B,$,Y){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,B,$,Y),re.viewport(T.copy(ne).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,B,$,Y){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,B,$,Y),re.scissor(O.copy(V).multiplyScalar(Z).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){re.setScissorTest(xe=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(C=!0,B=!0,$=!0){let Y=0;if(C){let X=!1;if(S!==null){const Pe=S.texture.format;X=Pe===Gu||Pe===Vu||Pe===Hu}if(X){const Pe=S.texture.type,ke=Pe===Si||Pe===yi||Pe===nc||Pe===Hi||Pe===zu||Pe===ku,Ye=Se.getClearColor(),je=Se.getClearAlpha(),nt=Ye.r,Ze=Ye.g,Qe=Ye.b;ke?(d[0]=nt,d[1]=Ze,d[2]=Qe,d[3]=je,I.clearBufferuiv(I.COLOR,0,d)):(p[0]=nt,p[1]=Ze,p[2]=Qe,p[3]=je,I.clearBufferiv(I.COLOR,0,p))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT),$&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ae.dispose(),ue.dispose(),Ce.dispose(),qe.dispose(),ct.dispose(),A.dispose(),Be.dispose(),We.dispose(),G.dispose(),De.dispose(),De.removeEventListener("sessionstart",gn),De.removeEventListener("sessionend",vt),_e&&(_e.dispose(),_e=null),_n.stop()};function it(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Fe.autoReset,B=de.enabled,$=de.autoUpdate,Y=de.needsUpdate,X=de.type;Ue(),Fe.autoReset=C,de.enabled=B,de.autoUpdate=$,de.needsUpdate=Y,de.type=X}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const B=C.target;B.removeEventListener("dispose",ce),Q(B)}function Q(C){he(C),Ce.remove(C)}function he(C){const B=Ce.get(C).programs;B!==void 0&&(B.forEach(function($){G.releaseProgram($)}),C.isShaderMaterial&&G.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,$,Y,X,Pe){B===null&&(B=Me);const ke=X.isMesh&&X.matrixWorld.determinant()<0,Ye=m_(C,B,$,Y,X);re.setMaterial(Y,ke);let je=$.index,nt=1;if(Y.wireframe===!0){if(je=P.getWireframeAttribute($),je===void 0)return;nt=2}const Ze=$.drawRange,Qe=$.attributes.position;let Vt=Ze.start*nt,In=(Ze.start+Ze.count)*nt;Pe!==null&&(Vt=Math.max(Vt,Pe.start*nt),In=Math.min(In,(Pe.start+Pe.count)*nt)),je!==null?(Vt=Math.max(Vt,0),In=Math.min(In,je.count)):Qe!=null&&(Vt=Math.max(Vt,0),In=Math.min(In,Qe.count));const en=In-Vt;if(en<0||en===1/0)return;Be.setup(X,Y,Ye,$,je);let fi,Ct=pe;if(je!==null&&(fi=Tt.get(je),Ct=se,Ct.setIndex(fi)),X.isMesh)Y.wireframe===!0?(re.setLineWidth(Y.wireframeLinewidth*Ve()),Ct.setMode(I.LINES)):Ct.setMode(I.TRIANGLES);else if(X.isLine){let rt=Y.linewidth;rt===void 0&&(rt=1),re.setLineWidth(rt*Ve()),X.isLineSegments?Ct.setMode(I.LINES):X.isLineLoop?Ct.setMode(I.LINE_LOOP):Ct.setMode(I.LINE_STRIP)}else X.isPoints?Ct.setMode(I.POINTS):X.isSprite&&Ct.setMode(I.TRIANGLES);if(X.isBatchedMesh)Ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Ct.renderInstances(Vt,en,X.count);else if($.isInstancedBufferGeometry){const rt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Fc=Math.min($.instanceCount,rt);Ct.renderInstances(Vt,en,Fc)}else Ct.render(Vt,en)};function Ge(C,B,$){C.transparent===!0&&C.side===Un&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,Do(C,B,$),C.side=li,C.needsUpdate=!0,Do(C,B,$),C.side=Un):Do(C,B,$)}this.compile=function(C,B,$=null){$===null&&($=C),g=ue.get($),g.init(),x.push(g),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),C!==$&&C.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(v._useLegacyLights);const Y=new Set;return C.traverse(function(X){const Pe=X.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const Ye=Pe[ke];Ge(Ye,$,X),Y.add(Ye)}else Ge(Pe,$,X),Y.add(Pe)}),x.pop(),g=null,Y},this.compileAsync=function(C,B,$=null){const Y=this.compile(C,B,$);return new Promise(X=>{function Pe(){if(Y.forEach(function(ke){Ce.get(ke).currentProgram.isReady()&&Y.delete(ke)}),Y.size===0){X(C);return}setTimeout(Pe,10)}te.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let st=null;function Qt(C){st&&st(C)}function gn(){_n.stop()}function vt(){_n.start()}const _n=new Gm;_n.setAnimationLoop(Qt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(C){st=C,De.setAnimationLoop(C),C===null?_n.stop():_n.start()},De.addEventListener("sessionstart",gn),De.addEventListener("sessionend",vt),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(B),B=De.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,B,S),g=ue.get(C,x.length),g.init(),x.push(g),be.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(be),U=this.localClippingEnabled,L=Oe.init(this.clippingPlanes,U),_=ae.get(C,m.length),_.init(),m.push(_),ti(C,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(oe,K),this.info.render.frame++,L===!0&&Oe.beginShadows();const $=g.state.shadowsArray;if(de.render($,C,B),L===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(_,C),g.setupLights(v._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let X=0,Pe=Y.length;X<Pe;X++){const ke=Y[X];Bh(_,C,ke,ke.viewport)}}else Bh(_,C,B);S!==null&&(Re.updateMultisampleRenderTarget(S),Re.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(v,C,B),Be.resetDefaultState(),R=-1,b=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ti(C,B,$,Y){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){Y&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const ke=A.update(C),Ye=C.material;Ye.visible&&_.push(C,ke,Ye,$,ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const ke=A.update(C),Ye=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ie.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ie.copy(ke.boundingSphere.center)),ie.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(Ye)){const je=ke.groups;for(let nt=0,Ze=je.length;nt<Ze;nt++){const Qe=je[nt],Vt=Ye[Qe.materialIndex];Vt&&Vt.visible&&_.push(C,ke,Vt,$,ie.z,Qe)}}else Ye.visible&&_.push(C,ke,Ye,$,ie.z,null)}}const Pe=C.children;for(let ke=0,Ye=Pe.length;ke<Ye;ke++)ti(Pe[ke],B,$,Y)}function Bh(C,B,$,Y){const X=C.opaque,Pe=C.transmissive,ke=C.transparent;g.setupLightsView($),L===!0&&Oe.setGlobalState(v.clippingPlanes,$),Pe.length>0&&p_(X,Pe,B,$),Y&&re.viewport(T.copy(Y)),X.length>0&&Io(X,B,$),Pe.length>0&&Io(Pe,B,$),ke.length>0&&Io(ke,B,$),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function p_(C,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Pe=fe.isWebGL2;_e===null&&(_e=new Bn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?xr:Si,minFilter:ui,samples:Pe?4:0})),v.getDrawingBufferSize(ze),Pe?_e.setSize(ze.x,ze.y):_e.setSize($a(ze.x),$a(ze.y));const ke=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(ee),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ye=v.toneMapping;v.toneMapping=Mi,Io(C,$,Y),Re.updateMultisampleRenderTarget(_e),Re.updateRenderTargetMipmap(_e);let je=!1;for(let nt=0,Ze=B.length;nt<Ze;nt++){const Qe=B[nt],Vt=Qe.object,In=Qe.geometry,en=Qe.material,fi=Qe.group;if(en.side===Un&&Vt.layers.test(Y.layers)){const Ct=en.side;en.side=Sn,en.needsUpdate=!0,zh(Vt,$,Y,In,en,fi),en.side=Ct,en.needsUpdate=!0,je=!0}}je===!0&&(Re.updateMultisampleRenderTarget(_e),Re.updateRenderTargetMipmap(_e)),v.setRenderTarget(ke),v.setClearColor(ee,D),v.toneMapping=Ye}function Io(C,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Pe=C.length;X<Pe;X++){const ke=C[X],Ye=ke.object,je=ke.geometry,nt=Y===null?ke.material:Y,Ze=ke.group;Ye.layers.test($.layers)&&zh(Ye,B,$,je,nt,Ze)}}function zh(C,B,$,Y,X,Pe){C.onBeforeRender(v,B,$,Y,X,Pe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,B,$,Y,C,Pe),X.transparent===!0&&X.side===Un&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,v.renderBufferDirect($,B,Y,X,C,Pe),X.side=li,X.needsUpdate=!0,v.renderBufferDirect($,B,Y,X,C,Pe),X.side=Un):v.renderBufferDirect($,B,Y,X,C,Pe),C.onAfterRender(v,B,$,Y,X,Pe)}function Do(C,B,$){B.isScene!==!0&&(B=Me);const Y=Ce.get(C),X=g.state.lights,Pe=g.state.shadowsArray,ke=X.state.version,Ye=G.getParameters(C,X.state,Pe,B,$),je=G.getProgramCacheKey(Ye);let nt=Y.programs;Y.environment=C.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(C.isMeshStandardMaterial?ct:qe).get(C.envMap||Y.environment),nt===void 0&&(C.addEventListener("dispose",ce),nt=new Map,Y.programs=nt);let Ze=nt.get(je);if(Ze!==void 0){if(Y.currentProgram===Ze&&Y.lightsStateVersion===ke)return Hh(C,Ye),Ze}else Ye.uniforms=G.getUniforms(C),C.onBuild($,Ye,v),C.onBeforeCompile(Ye,v),Ze=G.acquireProgram(Ye,je),nt.set(je,Ze),Y.uniforms=Ye.uniforms;const Qe=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Oe.uniform),Hh(C,Ye),Y.needsLights=__(C),Y.lightsStateVersion=ke,Y.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Ze,Y.uniformsList=null,Ze}function kh(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Ha.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Hh(C,B){const $=Ce.get(C);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function m_(C,B,$,Y,X){B.isScene!==!0&&(B=Me),Re.resetTextureUnits();const Pe=B.fog,ke=Y.isMeshStandardMaterial?B.environment:null,Ye=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:sn,je=(Y.isMeshStandardMaterial?ct:qe).get(Y.envMap||ke),nt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Qe=!!$.morphAttributes.position,Vt=!!$.morphAttributes.normal,In=!!$.morphAttributes.color;let en=Mi;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(en=v.toneMapping);const fi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ct=fi!==void 0?fi.length:0,rt=Ce.get(Y),Fc=g.state.lights;if(L===!0&&(U===!0||C!==b)){const kn=C===b&&Y.id===R;Oe.setState(Y,C,kn)}let Dt=!1;Y.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Fc.state.version||rt.outputColorSpace!==Ye||X.isBatchedMesh&&rt.batching===!1||!X.isBatchedMesh&&rt.batching===!0||X.isInstancedMesh&&rt.instancing===!1||!X.isInstancedMesh&&rt.instancing===!0||X.isSkinnedMesh&&rt.skinning===!1||!X.isSkinnedMesh&&rt.skinning===!0||X.isInstancedMesh&&rt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&rt.instancingColor===!1&&X.instanceColor!==null||rt.envMap!==je||Y.fog===!0&&rt.fog!==Pe||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Oe.numPlanes||rt.numIntersection!==Oe.numIntersection)||rt.vertexAlphas!==nt||rt.vertexTangents!==Ze||rt.morphTargets!==Qe||rt.morphNormals!==Vt||rt.morphColors!==In||rt.toneMapping!==en||fe.isWebGL2===!0&&rt.morphTargetsCount!==Ct)&&(Dt=!0):(Dt=!0,rt.__version=Y.version);let Ki=rt.currentProgram;Dt===!0&&(Ki=Do(Y,B,X));let Vh=!1,Dr=!1,Bc=!1;const un=Ki.getUniforms(),Ji=rt.uniforms;if(re.useProgram(Ki.program)&&(Vh=!0,Dr=!0,Bc=!0),Y.id!==R&&(R=Y.id,Dr=!0),Vh||b!==C){un.setValue(I,"projectionMatrix",C.projectionMatrix),un.setValue(I,"viewMatrix",C.matrixWorldInverse);const kn=un.map.cameraPosition;kn!==void 0&&kn.setValue(I,ie.setFromMatrixPosition(C.matrixWorld)),fe.logarithmicDepthBuffer&&un.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&un.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Dr=!0,Bc=!0)}if(X.isSkinnedMesh){un.setOptional(I,X,"bindMatrix"),un.setOptional(I,X,"bindMatrixInverse");const kn=X.skeleton;kn&&(fe.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),un.setValue(I,"boneTexture",kn.boneTexture,Re)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(un.setOptional(I,X,"batchingTexture"),un.setValue(I,"batchingTexture",X._matricesTexture,Re));const zc=$.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0&&fe.isWebGL2===!0)&&N.update(X,$,Ki),(Dr||rt.receiveShadow!==X.receiveShadow)&&(rt.receiveShadow=X.receiveShadow,un.setValue(I,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ji.envMap.value=je,Ji.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Dr&&(un.setValue(I,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&g_(Ji,Bc),Pe&&Y.fog===!0&&le.refreshFogUniforms(Ji,Pe),le.refreshMaterialUniforms(Ji,Y,Z,j,_e),Ha.upload(I,kh(rt),Ji,Re)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ha.upload(I,kh(rt),Ji,Re),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&un.setValue(I,"center",X.center),un.setValue(I,"modelViewMatrix",X.modelViewMatrix),un.setValue(I,"normalMatrix",X.normalMatrix),un.setValue(I,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const kn=Y.uniformsGroups;for(let kc=0,v_=kn.length;kc<v_;kc++)if(fe.isWebGL2){const Gh=kn[kc];We.update(Gh,Ki),We.bind(Gh,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function g_(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function __(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,B,$){Ce.get(C.texture).__webglTexture=B,Ce.get(C.depthTexture).__webglTexture=$;const Y=Ce.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const $=Ce.get(C);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,$=0){S=C,M=B,E=$;let Y=!0,X=null,Pe=!1,ke=!1;if(C){const je=Ce.get(C);je.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1):je.__webglFramebuffer===void 0?Re.setupRenderTarget(C):je.__hasExternalTextures&&Re.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ke=!0);const Ze=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?X=Ze[B][$]:X=Ze[B],Pe=!0):fe.isWebGL2&&C.samples>0&&Re.useMultisampledRTT(C)===!1?X=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[$]:X=Ze,T.copy(C.viewport),O.copy(C.scissor),z=C.scissorTest}else T.copy(ne).multiplyScalar(Z).floor(),O.copy(V).multiplyScalar(Z).floor(),z=xe;if(re.bindFramebuffer(I.FRAMEBUFFER,X)&&fe.drawBuffers&&Y&&re.drawBuffers(C,X),re.viewport(T),re.scissor(O),re.setScissorTest(z),Pe){const je=Ce.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,je.__webglTexture,$)}else if(ke){const je=Ce.get(C.texture),nt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,$||0,nt)}R=-1},this.readRenderTargetPixels=function(C,B,$,Y,X,Pe,ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){re.bindFramebuffer(I.FRAMEBUFFER,Ye);try{const je=C.texture,nt=je.format,Ze=je.type;if(nt!==Cn&&$e.convert(nt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ze===xr&&(te.has("EXT_color_buffer_half_float")||fe.isWebGL2&&te.has("EXT_color_buffer_float"));if(Ze!==Si&&$e.convert(Ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Yn&&(fe.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Y&&$>=0&&$<=C.height-X&&I.readPixels(B,$,Y,X,$e.convert(nt),$e.convert(Ze),Pe)}finally{const je=S!==null?Ce.get(S).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(C,B,$=0){const Y=Math.pow(2,-$),X=Math.floor(B.image.width*Y),Pe=Math.floor(B.image.height*Y);Re.setTexture2D(B,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,C.x,C.y,X,Pe),re.unbindTexture()},this.copyTextureToTexture=function(C,B,$,Y=0){const X=B.image.width,Pe=B.image.height,ke=$e.convert($.format),Ye=$e.convert($.type);Re.setTexture2D($,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,C.x,C.y,X,Pe,ke,Ye,B.image.data):B.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,ke,B.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Y,C.x,C.y,ke,Ye,B.image),Y===0&&$.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(C,B,$,Y,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,ke=C.max.y-C.min.y+1,Ye=C.max.z-C.min.z+1,je=$e.convert(Y.format),nt=$e.convert(Y.type);let Ze;if(Y.isData3DTexture)Re.setTexture3D(Y,0),Ze=I.TEXTURE_3D;else if(Y.isDataArrayTexture)Re.setTexture2DArray(Y,0),Ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const Qe=I.getParameter(I.UNPACK_ROW_LENGTH),Vt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),In=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),fi=I.getParameter(I.UNPACK_SKIP_IMAGES),Ct=$.isCompressedTexture?$.mipmaps[0]:$.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,C.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,C.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?I.texSubImage3D(Ze,X,B.x,B.y,B.z,Pe,ke,Ye,je,nt,Ct.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ze,X,B.x,B.y,B.z,Pe,ke,Ye,je,Ct.data)):I.texSubImage3D(Ze,X,B.x,B.y,B.z,Pe,ke,Ye,je,nt,Ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,In),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fi),X===0&&Y.generateMipmaps&&I.generateMipmap(Ze),re.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Re.setTextureCube(C,0):C.isData3DTexture?Re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Re.setTexture2DArray(C,0):Re.setTexture2D(C,0),re.unbindTexture()},this.resetState=function(){M=0,E=0,S=null,re.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===So?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Gi:$u}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?wt:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Km extends ih{}Km.prototype.isWebGL1Renderer=!0;class fc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let sh=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class wo{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new w;class Pn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rh extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sr;const Br=new w,rr=new w,or=new w,ar=new J,zr=new J,Jm=new He,sa=new w,kr=new w,ra=new w,Df=new J,ul=new J,Nf=new J;class Qm extends ut{constructor(e=new rh){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wo(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Pn(n,3,0,!1)),sr.setAttribute("uv",new Pn(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Jm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;oa(sa.set(-.5,-.5,0),or,o,rr,i,s),oa(kr.set(.5,-.5,0),or,o,rr,i,s),oa(ra.set(.5,.5,0),or,o,rr,i,s),Df.set(0,0),ul.set(1,0),Nf.set(1,1);let a=e.ray.intersectTriangle(sa,kr,ra,!1,Br);if(a===null&&(oa(kr.set(-.5,.5,0),or,o,rr,i,s),ul.set(0,1),a=e.ray.intersectTriangle(sa,ra,kr,!1,Br),a===null))return;const c=e.ray.origin.distanceTo(Br);c<e.near||c>e.far||t.push({distance:c,point:Br.clone(),uv:wn.getInterpolation(Br,sa,kr,ra,Df,ul,Nf,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oa(r,e,t,n,i,s){ar.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(zr.x=s*ar.x-i*ar.y,zr.y=i*ar.x+s*ar.y):zr.copy(ar),r.copy(e),r.x+=zr.x,r.y+=zr.y,r.applyMatrix4(Jm)}const aa=new w,Uf=new w;class eg extends ut{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){aa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(aa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){aa.setFromMatrixPosition(e.matrixWorld),Uf.setFromMatrixPosition(this.matrixWorld);const n=aa.distanceTo(Uf)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Of=new w,Ff=new dt,Bf=new dt,RM=new w,zf=new He,ca=new w,hl=new jt,kf=new He,fl=new Fs;class oh extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bl,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(i),e.ray.intersectsSphere(hl)!==!1&&(kf.copy(i).invert(),fl.copy(e.ray).applyMatrix4(kf),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ff.fromBufferAttribute(i.attributes.skinIndex,e),Bf.fromBufferAttribute(i.attributes.skinWeight,e),Of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Bf.getComponent(s);if(o!==0){const a=Ff.getComponent(s);zf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(RM.copy(Of).applyMatrix4(zf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class pc extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ms extends It{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Ft,u=Ft,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hf=new He,PM=new He;class Co{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:PM;Hf.multiplyMatrices(a,t[s]),Hf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Co(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ms(t,e,e,Cn,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pc),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ls extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cr=new He,Vf=new He,la=[],Gf=new Yt,LM=new He,Hr=new At,Vr=new jt;class mc extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,LM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Gf.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Gf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Vr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,cr),Vf.multiplyMatrices(n,cr),Hr.matrixWorld=Vf,Hr.raycast(e,la);for(let o=0,a=la.length;o<a;o++){const c=la[o];c.instanceId=s,c.object=this,t.push(c)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function IM(r,e){return r.z-e.z}function DM(r,e){return e.z-r.z}class NM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const lr="batchId",Ui=new He,Wf=new He,UM=new He,Xf=new He,dl=new Ao,ua=new Yt,is=new jt,Gr=new w,pl=new NM,dn=new At,ha=[];function OM(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class tg extends At{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Je,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ms(t,e,e,Cn,Yn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const c=e.getAttribute(a),{array:l,itemSize:u,normalized:h}=c,f=new l.constructor(n*u),d=new c.constructor(f,u,h);d.setUsage(c.usage),t.setAttribute(a,d)}if(e.getIndex()!==null){const a=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new mt(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(lr,new mt(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(lr))throw new Error(`BatchedMesh: Geometry cannot use attribute "${lr}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===lr)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Ui),this.getBoundingBoxAt(i,ua).applyMatrix4(Ui),t.union(ua))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Ui),this.getBoundingSphereAt(i,is).applyMatrix4(Ui),t.union(is))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,f=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;h.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,UM.toArray(p,_*16),d.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Yt,sphereInitialized:!1,sphere:new jt});const g=this.geometry.getAttribute(lr);for(let m=0;m<i.vertexCount;m++)g.setX(i.vertexStart+m,_);return g.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const d in n.attributes){if(d===lr)continue;const p=t.getAttribute(d),_=n.getAttribute(d);OM(p,_,c);const g=p.itemSize;for(let m=p.count,x=l;m<x;m++){const v=c+m;for(let y=0;y<g;y++)_.setComponent(v,y,0)}_.needsUpdate=!0}if(i){const d=a.indexStart;for(let p=0;p<o.count;p++)s.setX(d+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)s.setX(d+p,c);s.needsUpdate=!0}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=i?o.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.box,o=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const a=o.index,c=o.attributes.position,l=this._drawRanges[e];for(let u=l.start,h=l.start+l.count;u<h;u++){let f=u;a&&(f=a.getX(f)),s.expandByPoint(Gr.fromBufferAttribute(c,f))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,ua),ua.getCenter(s.center);const a=o.index,c=o.attributes.position,l=this._drawRanges[e];let u=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let d=h;a&&(d=a.getX(d)),Gr.fromBufferAttribute(c,d),u=Math.max(u,s.center.distanceToSquared(Gr))}s.radius=Math.sqrt(u),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;dn.material=this.material,dn.geometry.index=c.index,dn.geometry.attributes=c.attributes,dn.geometry.boundingBox===null&&(dn.geometry.boundingBox=new Yt),dn.geometry.boundingSphere===null&&(dn.geometry.boundingSphere=new jt);for(let l=0;l<o;l++){if(!n[l]||!i[l])continue;const u=s[l];dn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,dn.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,dn.geometry.boundingBox),this.getBoundingSphereAt(l,dn.geometry.boundingSphere),dn.raycast(e,ha);for(let h=0,f=ha.length;h<f;h++){const d=ha[h];d.object=this,d.batchId=l,t.push(d)}ha.length=0}dn.material=null,dn.geometry.index=null,dn.geometry.attributes={},dn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._visibility,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),dl.setFromProjectionMatrix(Xf,e.isWebGPURenderer?br:jn));let d=0;if(this.sortObjects){Wf.copy(this.matrixWorld).invert(),Gr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Wf);for(let g=0,m=c.length;g<m;g++)if(c[g]){this.getMatrixAt(g,Ui),this.getBoundingSphereAt(g,is).applyMatrix4(Ui);let x=!1;if(f&&(x=!dl.intersectsSphere(is)),!x){const v=Gr.distanceTo(is.center);pl.push(h[g],v)}}const p=pl.list,_=this.customSort;_===null?p.sort(s.transparent?DM:IM):_.call(this,p,n);for(let g=0,m=p.length;g<m;g++){const x=p[g];l[d]=x.start*a,u[d]=x.count,d++}pl.reset()}else for(let p=0,_=c.length;p<_;p++)if(c[p]){let g=!1;if(f&&(this.getMatrixAt(p,Ui),this.getBoundingSphereAt(p,is).applyMatrix4(Ui),g=!dl.intersectsSphere(is)),!g){const m=h[p];l[d]=m.start*a,u[d]=m.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class mn extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qf=new w,$f=new w,Yf=new He,ml=new Fs,fa=new jt;class wi extends ut{constructor(e=new Je,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)qf.fromBufferAttribute(t,i-1),$f.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qf.distanceTo($f);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Yf.copy(i).invert(),ml.copy(e.ray).applyMatrix4(Yf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,u=new w,h=new w,f=new w,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=d){const M=p.getX(v),E=p.getX(v+1);if(l.fromBufferAttribute(g,M),u.fromBufferAttribute(g,E),ml.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=d){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),ml.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const jf=new w,Zf=new w;class Kn extends wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jf.fromBufferAttribute(t,i),Zf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jf.distanceTo(Zf);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ah extends wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gc extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kf=new He,mu=new Fs,da=new jt,pa=new w;class ch extends ut{constructor(e=new Je,t=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=s,e.ray.intersectsSphere(da)===!1)return;Kf.copy(i).invert(),mu.copy(e.ray).applyMatrix4(Kf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const g=l.getX(p);pa.fromBufferAttribute(h,g),Jf(pa,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)pa.fromBufferAttribute(h,p),Jf(pa,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jf(r,e,t,n,i,s,o){const a=mu.distanceSqToPoint(r);if(a<t){const c=new w;mu.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class FM extends It{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Rt,this.magFilter=s!==void 0?s:Rt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class BM extends It{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ft,this.minFilter=Ft,this.generateMipmaps=!1,this.needsUpdate=!0}}class _c extends It{constructor(e,t,n,i,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class zM extends _c{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=cn}}class kM extends _c{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class HM extends It{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new J:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],s=[],o=[],a=new w,c=new He;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new w)}s[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Bt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Bt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vc extends Jn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new J,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ng extends vc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lh(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ma=new w,gl=new lh,_l=new lh,vl=new lh;class ig extends Jn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(ma.subVectors(i[0],i[1]).add(i[0]),l=ma);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ma.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ma),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),gl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,g),_l.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,g),vl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),_l.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),vl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(gl.calc(c),_l.calc(c),vl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qf(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function VM(r,e){const t=1-r;return t*t*e}function GM(r,e){return 2*(1-r)*r*e}function WM(r,e){return r*r*e}function Jr(r,e,t,n){return VM(r,e)+GM(r,t)+WM(r,n)}function XM(r,e){const t=1-r;return t*t*t*e}function qM(r,e){const t=1-r;return 3*t*t*r*e}function $M(r,e){return 3*(1-r)*r*r*e}function YM(r,e){return r*r*r*e}function Qr(r,e,t,n,i){return XM(r,e)+qM(r,t)+$M(r,n)+YM(r,i)}class uh extends Jn{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qr(e,i.x,s.x,o.x,a.x),Qr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sg extends Jn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qr(e,i.x,s.x,o.x,a.x),Qr(e,i.y,s.y,o.y,a.y),Qr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hh extends Jn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rg extends Jn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends Jn{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Jr(e,i.x,s.x,o.x),Jr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xc extends Jn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Jr(e,i.x,s.x,o.x),Jr(e,i.y,s.y,o.y),Jr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dh extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Qf(a,c.x,l.x,u.x,h.x),Qf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var Ya=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:ig,CubicBezierCurve:uh,CubicBezierCurve3:sg,EllipseCurve:vc,LineCurve:hh,LineCurve3:rg,QuadraticBezierCurve:fh,QuadraticBezierCurve3:xc,SplineCurve:dh});class og extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ya[i.type]().fromJSON(i))}return this}}class uo extends og{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hh(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new fh(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new uh(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new dh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new vc(e,t,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ro extends Je{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Bt(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/t,h=new w,f=new J,d=new w,p=new w,_=new w;let g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let x=0;x<=t;x++){const v=n+x*u*i,y=Math.sin(v),M=Math.cos(v);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*M,o.push(h.x,h.y,h.z),f.x=x/t,f.y=E/(e.length-1),a.push(f.x,f.y);const S=c[3*E+0]*y,R=c[3*E+1],b=c[3*E+0]*M;l.push(S,R,b)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,M=y,E=y+e.length,S=y+e.length+1,R=y+1;s.push(M,E,R),s.push(S,R,E)}this.setIndex(s),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.points,e.segments,e.phiStart,e.phiLength)}}class yc extends Ro{constructor(e=1,t=1,n=4,i=8){const s=new uo;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new yc(e.radius,e.length,e.capSegments,e.radialSegments)}}class bc extends Je{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new w,u=new J;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lr extends Je{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function x(){const y=new w,M=new w;let E=0;const S=(t-e)/n;for(let R=0;R<=s;R++){const b=[],T=R/s,O=T*(t-e)+e;for(let z=0;z<=i;z++){const ee=z/i,D=ee*c+a,k=Math.sin(D),j=Math.cos(D);M.x=O*k,M.y=-T*n+g,M.z=O*j,h.push(M.x,M.y,M.z),y.set(k,S,j).normalize(),f.push(y.x,y.y,y.z),d.push(ee,1-T),b.push(p++)}_.push(b)}for(let R=0;R<i;R++)for(let b=0;b<s;b++){const T=_[b][R],O=_[b+1][R],z=_[b+1][R+1],ee=_[b][R+1];u.push(T,O,ee),u.push(O,z,ee),E+=6}l.addGroup(m,E,0),m+=E}function v(y){const M=p,E=new J,S=new w;let R=0;const b=y===!0?e:t,T=y===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),p++;const O=p;for(let z=0;z<=i;z++){const D=z/i*c+a,k=Math.cos(D),j=Math.sin(D);S.x=b*j,S.y=g*T,S.z=b*k,h.push(S.x,S.y,S.z),f.push(0,T,0),E.x=k*.5+.5,E.y=j*.5*T+.5,d.push(E.x,E.y),p++}for(let z=0;z<i;z++){const ee=M+z,D=O+z;y===!0?u.push(D,D+1,ee):u.push(D+1,D,ee),R+=3}l.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends Lr{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new w,y=new w,M=new w;for(let E=0;E<t.length;E+=3)d(t[E+0],v),d(t[E+1],y),d(t[E+2],M),c(v,y,M,x)}function c(x,v,y,M){const E=M+1,S=[];for(let R=0;R<=E;R++){S[R]=[];const b=x.clone().lerp(y,R/E),T=v.clone().lerp(y,R/E),O=E-R;for(let z=0;z<=O;z++)z===0&&R===E?S[R][z]=b:S[R][z]=b.clone().lerp(T,z/O)}for(let R=0;R<E;R++)for(let b=0;b<2*(E-R)-1;b++){const T=Math.floor(b/2);b%2===0?(f(S[R][T+1]),f(S[R+1][T]),f(S[R][T])):(f(S[R][T+1]),f(S[R+1][T+1]),f(S[R+1][T]))}}function l(x){const v=new w;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const x=new w;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=g(x)/2/Math.PI+.5,M=m(x)/Math.PI+.5;o.push(y,1-M)}p(),h()}function h(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],M=o[x+4],E=Math.max(v,y,M),S=Math.min(v,y,M);E>.9&&S<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),M<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){const x=new w,v=new w,y=new w,M=new w,E=new J,S=new J,R=new J;for(let b=0,T=0;b<s.length;b+=9,T+=6){x.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),E.set(o[T+0],o[T+1]),S.set(o[T+2],o[T+3]),R.set(o[T+4],o[T+5]),M.copy(x).add(v).add(y).divideScalar(3);const O=g(M);_(E,T+0,x,O),_(S,T+2,v,O),_(R,T+4,y,O)}}function _(x,v,y,M){M<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=M/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.vertices,e.indices,e.radius,e.details)}}class Sc extends ji{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sc(e.radius,e.detail)}}const ga=new w,_a=new w,xl=new w,va=new wn;class ag extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(bs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=va;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),va.getNormal(xl),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=h[x],M=h[v],E=va[u[x]],S=va[u[v]],R=`${y}_${M}`,b=`${M}_${y}`;b in f&&f[b]?(xl.dot(f[b].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(S.x,S.y,S.z)),f[b]=null):R in f||(f[R]={index0:l[x],index1:l[v],normal:xl.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:g}=f[p];ga.fromBufferAttribute(a,_),_a.fromBufferAttribute(a,g),d.push(ga.x,ga.y,ga.z),d.push(_a.x,_a.y,_a.z)}this.setAttribute("position",new Ie(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ss extends uo{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new uo().fromJSON(i))}return this}}const jM={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=cg(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(n&&(s=eS(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(let p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return ho(s,o,t,a,c,d,0),o}};function cg(r,e,t,n,i){let s,o;if(i===hS(r,e,t,n)>0)for(s=e;s<t;s+=n)o=ed(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=ed(s,r[s],r[s+1],o);return o&&Tc(o,o.next)&&(po(o),o=o.next),o}function Is(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Tc(t,t.next)||Pt(t.prev,t,t.next)===0)){if(po(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ho(r,e,t,n,i,s,o){if(!r)return;!o&&s&&rS(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?KM(r,n,i,s):ZM(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),po(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=JM(Is(r),e,t),ho(r,e,t,n,i,s,2)):o===2&&QM(r,e,t,n,i,s):ho(Is(r),e,t,n,i,s,1);break}}}function ZM(r){const e=r.prev,t=r,n=r.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&fr(i,a,s,c,o,l,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function KM(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Pt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,m=gu(d,p,e,t,n),x=gu(_,g,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&fr(a,u,c,h,l,f,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&fr(a,u,c,h,l,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&fr(a,u,c,h,l,f,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&fr(a,u,c,h,l,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function JM(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Tc(i,s)&&lg(i,n,n.next,s)&&fo(i,s)&&fo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),po(n),po(n.next),n=r=s),n=n.next}while(n!==r);return Is(n)}function QM(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cS(o,a)){let c=ug(o,a);o=Is(o,o.next),c=Is(c,c.next),ho(o,e,t,n,i,s,0),ho(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function eS(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=cg(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(aS(l));for(i.sort(tS),s=0;s<i.length;s++)t=nS(i[s],t);return t}function tS(r,e){return r.x-e.x}function nS(r,e){const t=iS(r,e);if(!t)return e;const n=ug(t,r);return Is(n,n.next),Is(t,t.next)}function iS(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&fr(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),fo(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&sS(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function sS(r,e){return Pt(r.prev,r,e.prev)<0&&Pt(e.next,r,r.next)<0}function rS(r,e,t,n){let i=r;do i.z===0&&(i.z=gu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,oS(i)}function oS(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function gu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function aS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function fr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function cS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!lS(r,e)&&(fo(r,e)&&fo(e,r)&&uS(r,e)&&(Pt(r.prev,r,e.prev)||Pt(r,e.prev,e))||Tc(r,e)&&Pt(r.prev,r,r.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Tc(r,e){return r.x===e.x&&r.y===e.y}function lg(r,e,t,n){const i=ya(Pt(r,e,t)),s=ya(Pt(r,e,n)),o=ya(Pt(t,n,r)),a=ya(Pt(t,n,e));return!!(i!==s&&o!==a||i===0&&xa(r,t,e)||s===0&&xa(r,n,e)||o===0&&xa(t,r,n)||a===0&&xa(t,e,n))}function xa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ya(r){return r>0?1:r<0?-1:0}function lS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&lg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function fo(r,e){return Pt(r.prev,r,r.next)<0?Pt(r,e,r.next)>=0&&Pt(r,r.prev,e)>=0:Pt(r,e,r.prev)<0||Pt(r,r.next,e)<0}function uS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ug(r,e){const t=new _u(r.i,r.x,r.y),n=new _u(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ed(r,e,t,n){const i=new _u(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function po(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _u(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ci{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ci.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];td(e),nd(n,e);let o=e.length;t.forEach(td);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,nd(n,t[c]);const a=jM.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function td(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function nd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ec extends Je{constructor(e=new Ss([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ie(i,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:fS;let v,y=!1,M,E,S,R;m&&(v=m.getSpacedPoints(u),y=!0,f=!1,M=m.computeFrenetFrames(u,!1),E=new w,S=new w,R=new w),f||(g=0,d=0,p=0,_=0);const b=a.extractPoints(l);let T=b.shape;const O=b.holes;if(!ci.isClockWise(T)){T=T.reverse();for(let I=0,me=O.length;I<me;I++){const te=O[I];ci.isClockWise(te)&&(O[I]=te.reverse())}}const ee=ci.triangulateShape(T,O),D=T;for(let I=0,me=O.length;I<me;I++){const te=O[I];T=T.concat(te)}function k(I,me,te){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(me,te)}const j=T.length,Z=ee.length;function oe(I,me,te){let fe,re,Fe;const Ce=I.x-me.x,Re=I.y-me.y,qe=te.x-I.x,ct=te.y-I.y,Tt=Ce*Ce+Re*Re,P=Ce*ct-Re*qe;if(Math.abs(P)>Number.EPSILON){const A=Math.sqrt(Tt),G=Math.sqrt(qe*qe+ct*ct),le=me.x-Re/A,ae=me.y+Ce/A,ue=te.x-ct/G,Oe=te.y+qe/G,de=((ue-le)*ct-(Oe-ae)*qe)/(Ce*ct-Re*qe);fe=le+Ce*de-I.x,re=ae+Re*de-I.y;const Se=fe*fe+re*re;if(Se<=2)return new J(fe,re);Fe=Math.sqrt(Se/2)}else{let A=!1;Ce>Number.EPSILON?qe>Number.EPSILON&&(A=!0):Ce<-Number.EPSILON?qe<-Number.EPSILON&&(A=!0):Math.sign(Re)===Math.sign(ct)&&(A=!0),A?(fe=-Re,re=Ce,Fe=Math.sqrt(Tt)):(fe=Ce,re=Re,Fe=Math.sqrt(Tt/2))}return new J(fe/Fe,re/Fe)}const K=[];for(let I=0,me=D.length,te=me-1,fe=I+1;I<me;I++,te++,fe++)te===me&&(te=0),fe===me&&(fe=0),K[I]=oe(D[I],D[te],D[fe]);const ne=[];let V,xe=K.concat();for(let I=0,me=O.length;I<me;I++){const te=O[I];V=[];for(let fe=0,re=te.length,Fe=re-1,Ce=fe+1;fe<re;fe++,Fe++,Ce++)Fe===re&&(Fe=0),Ce===re&&(Ce=0),V[fe]=oe(te[fe],te[Fe],te[Ce]);ne.push(V),xe=xe.concat(V)}for(let I=0;I<g;I++){const me=I/g,te=d*Math.cos(me*Math.PI/2),fe=p*Math.sin(me*Math.PI/2)+_;for(let re=0,Fe=D.length;re<Fe;re++){const Ce=k(D[re],K[re],fe);be(Ce.x,Ce.y,-te)}for(let re=0,Fe=O.length;re<Fe;re++){const Ce=O[re];V=ne[re];for(let Re=0,qe=Ce.length;Re<qe;Re++){const ct=k(Ce[Re],V[Re],fe);be(ct.x,ct.y,-te)}}}const W=p+_;for(let I=0;I<j;I++){const me=f?k(T[I],xe[I],W):T[I];y?(S.copy(M.normals[0]).multiplyScalar(me.x),E.copy(M.binormals[0]).multiplyScalar(me.y),R.copy(v[0]).add(S).add(E),be(R.x,R.y,R.z)):be(me.x,me.y,0)}for(let I=1;I<=u;I++)for(let me=0;me<j;me++){const te=f?k(T[me],xe[me],W):T[me];y?(S.copy(M.normals[I]).multiplyScalar(te.x),E.copy(M.binormals[I]).multiplyScalar(te.y),R.copy(v[I]).add(S).add(E),be(R.x,R.y,R.z)):be(te.x,te.y,h/u*I)}for(let I=g-1;I>=0;I--){const me=I/g,te=d*Math.cos(me*Math.PI/2),fe=p*Math.sin(me*Math.PI/2)+_;for(let re=0,Fe=D.length;re<Fe;re++){const Ce=k(D[re],K[re],fe);be(Ce.x,Ce.y,h+te)}for(let re=0,Fe=O.length;re<Fe;re++){const Ce=O[re];V=ne[re];for(let Re=0,qe=Ce.length;Re<qe;Re++){const ct=k(Ce[Re],V[Re],fe);y?be(ct.x,ct.y+v[u-1].y,v[u-1].x+te):be(ct.x,ct.y,h+te)}}}L(),U();function L(){const I=i.length/3;if(f){let me=0,te=j*me;for(let fe=0;fe<Z;fe++){const re=ee[fe];ze(re[2]+te,re[1]+te,re[0]+te)}me=u+g*2,te=j*me;for(let fe=0;fe<Z;fe++){const re=ee[fe];ze(re[0]+te,re[1]+te,re[2]+te)}}else{for(let me=0;me<Z;me++){const te=ee[me];ze(te[2],te[1],te[0])}for(let me=0;me<Z;me++){const te=ee[me];ze(te[0]+j*u,te[1]+j*u,te[2]+j*u)}}n.addGroup(I,i.length/3-I,0)}function U(){const I=i.length/3;let me=0;_e(D,me),me+=D.length;for(let te=0,fe=O.length;te<fe;te++){const re=O[te];_e(re,me),me+=re.length}n.addGroup(I,i.length/3-I,1)}function _e(I,me){let te=I.length;for(;--te>=0;){const fe=te;let re=te-1;re<0&&(re=I.length-1);for(let Fe=0,Ce=u+g*2;Fe<Ce;Fe++){const Re=j*Fe,qe=j*(Fe+1),ct=me+fe+Re,Tt=me+re+Re,P=me+re+qe,A=me+fe+qe;ie(ct,Tt,P,A)}}}function be(I,me,te){c.push(I),c.push(me),c.push(te)}function ze(I,me,te){Me(I),Me(me),Me(te);const fe=i.length/3,re=x.generateTopUV(n,i,fe-3,fe-2,fe-1);Ve(re[0]),Ve(re[1]),Ve(re[2])}function ie(I,me,te,fe){Me(I),Me(me),Me(fe),Me(me),Me(te),Me(fe);const re=i.length/3,Fe=x.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Ve(Fe[0]),Ve(Fe[1]),Ve(Fe[3]),Ve(Fe[1]),Ve(Fe[2]),Ve(Fe[3])}function Me(I){i.push(c[I*3+0]),i.push(c[I*3+1]),i.push(c[I*3+2])}function Ve(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ya[i.type]().fromJSON(i)),new Ec(n,e.options)}}const fS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new J(s,o),new J(a,c),new J(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-h),new J(f,1-p),new J(_,1-m)]:[new J(a,1-c),new J(u,1-h),new J(d,1-p),new J(g,1-m)]}};function dS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ac extends ji{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class Po extends ji{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Po(e.radius,e.detail)}}class wc extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,d=new w,p=new J;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,v=x,y=x+n+1,M=x+n+2,E=x+1;a.push(v,y,E),a.push(y,M,E)}}this.setIndex(a),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cc extends Je{constructor(e=new Ss([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ie(i,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const p=f.holes;ci.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const x=p[g];ci.isClockWise(x)===!0&&(p[g]=x.reverse())}const _=ci.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const x=p[g];d=d.concat(x)}for(let g=0,m=d.length;g<m;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],v=x[0]+h,y=x[1]+h,M=x[2]+h;n.push(v,y,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return pS(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Cc(n,e.curveSegments)}}function pS(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class zs extends Je{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new w,f=new w,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const E=M/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(E+y,1-v),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const v=u[m][x+1],y=u[m][x],M=u[m+1][x],E=u[m+1][x+1];(m!==0||o>0)&&d.push(v,y,E),(m!==n-1||c<Math.PI)&&d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends ji{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rc(e.radius,e.detail)}}class Pc extends Je{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new w,h=new w,f=new w;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,x=(i+1)*d+p;o.push(_,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lc extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new w,f=new w,d=new w,p=new w,_=new w,g=new w,m=new w;for(let v=0;v<=n;++v){const y=v/n*s*Math.PI*2;x(y,s,o,e,d),x(y+.01,s,o,e,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let M=0;M<=i;++M){const E=M/i*Math.PI*2,S=-t*Math.cos(E),R=t*Math.sin(E);h.x=d.x+(S*m.x+R*_.x),h.y=d.y+(S*m.y+R*_.y),h.z=d.z+(S*m.z+R*_.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(v/n),u.push(M/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const M=(i+1)*(v-1)+(y-1),E=(i+1)*v+(y-1),S=(i+1)*v+y,R=(i+1)*(v-1)+y;a.push(M,E,R),a.push(E,S,R)}this.setIndex(a),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(u,2));function x(v,y,M,E,S){const R=Math.cos(v),b=Math.sin(v),T=M/y*v,O=Math.cos(T);S.x=E*(2+O)*.5*R,S.y=E*(2+O)*b*.5,S.z=E*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ic extends Je{constructor(e=new xc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new J;let u=new w;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function _(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),x(),m()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],M=o.binormals[v];for(let E=0;E<=i;E++){const S=E/i*Math.PI*2,R=Math.sin(S),b=-Math.cos(S);c.x=b*y.x+R*M.x,c.y=b*y.y+R*M.y,c.z=b*y.z+R*M.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const M=(i+1)*(v-1)+(y-1),E=(i+1)*v+(y-1),S=(i+1)*v+y,R=(i+1)*(v-1)+y;p.push(M,E,R),p.push(E,S,R)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)l.x=v/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ic(new Ya[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ph extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new w,s=new w;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let p=f,_=f+d;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),x=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),s.fromBufferAttribute(o,x),id(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),id(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function id(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var sd=Object.freeze({__proto__:null,BoxGeometry:Ri,CapsuleGeometry:yc,CircleGeometry:bc,ConeGeometry:Mc,CylinderGeometry:Lr,DodecahedronGeometry:Sc,EdgesGeometry:ag,ExtrudeGeometry:Ec,IcosahedronGeometry:Ac,LatheGeometry:Ro,OctahedronGeometry:Po,PlaneGeometry:Rr,PolyhedronGeometry:ji,RingGeometry:wc,ShapeGeometry:Cc,SphereGeometry:zs,TetrahedronGeometry:Rc,TorusGeometry:Pc,TorusKnotGeometry:Lc,TubeGeometry:Ic,WireframeGeometry:ph});class hg extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class mh extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ks extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends ks{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fg extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dg extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class pg extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class mg extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gg extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _g extends mn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function xs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function gh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function mS(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*i;if(!(p<t||p>=n)){h.push(l.times[d]);for(let _=0;_<u;++_)f.push(l.values[d*u+_])}}h.length!==0&&(l.times=xs(h,l.times.constructor),l.values=xs(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function gS(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let _;if(s<=a.times[0]){const m=u,x=h-u;_=a.values.slice(m,x)}else if(s>=a.times[p]){const m=p*h+u,x=m+h-u;_=a.values.slice(m,x)}else{const m=a.createInterpolant(),x=u,v=h-u;m.evaluate(s),_=m.resultBuffer.slice(x,v)}c==="quaternion"&&new nn().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const x=m*d+f;if(c==="quaternion")nn.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const v=d-f*2;for(let y=0;y<v;++y)l.values[x+y]-=_[y]}}}return r.blendMode=Xu,r}const _S={convertArray:xs,isTypedArray:vg,getKeyframeOrder:xg,sortedArray:vu,flattenJSON:gh,subclip:mS,makeClipAdditive:gS};class Ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yg extends Ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _s:s=e,a=2*t-n;break;case so:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _s:o=e,c=2*n-t;break;case so:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*_+.5*p,y=d*g-d*_;for(let M=0;M!==a;++M)s[M]=m*o[u+M]+x*o[l+M]+v*o[c+M]+y*o[h+M];return s}}class _h extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class bg extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&vg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ps;class Hs extends ei{}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=yr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class vh extends ei{}vh.prototype.ValueTypeName="color";class Ds extends ei{}Ds.prototype.ValueTypeName="number";class Mg extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)nn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class $i extends ei{InterpolantFactoryMethodLinear(e){return new Mg(this.times,this.values,this.getValueSize(),e)}}$i.prototype.ValueTypeName="quaternion";$i.prototype.DefaultInterpolation=Ps;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends ei{}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=yr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends ei{}Ns.prototype.ValueTypeName="vector";class Tr{constructor(e,t=-1,n,i=ic){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ei.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=xg(c);c=vu(c,1,u),l=vu(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ds(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,_){if(d.length!==0){const g=[],m=[];gh(d,g,m,p),g.length!==0&&_.push(new h(f,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const g=[],m=[];for(let x=0;x!==f[p].morphTargets.length;++x){const v=f[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Ds(".morphTargetInfluence["+_+"]",g,m))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ns,d+".position",f,"pos",i),n($i,d+".quaternion",f,"rot",i),n(Ns,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return vh;case"quaternion":return $i;case"bool":case"boolean":return Hs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vS(r.type);if(r.times===void 0){const t=[],n=[];gh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Us={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const Sg=new xh;class Tn{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class yS extends Error{constructor(e,t){super(e),this.response=t}}class Zn extends Tn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Us.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vi[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){h.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let E=0,S=u.length;E<S;E++){const R=u[E];R.onProgress&&R.onProgress(M)}m.enqueue(y),x()}})}}});return new Response(g)}else throw new yS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Us.add(e,l);const u=vi[e];delete vi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bS extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Zn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Tr.parse(e[n]);t.push(i)}return t}}class MS extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new _c,c=new Zn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const d=s.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=Rt),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Rt),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class mo extends Tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Us.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=lo("img");function c(){u(),Us.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class SS extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=new Eo;s.colorSpace=wt;const o=new mo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class TS extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ms,a=new Zn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:cn,o.wrapT=l.wrapT!==void 0?l.wrapT:cn,o.magFilter=l.magFilter!==void 0?l.magFilter:Rt,o.minFilter=l.minFilter!==void 0?l.minFilter:Rt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=ui),l.mipmapCount===1&&(o.minFilter=Rt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Tg extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=new It,o=new mo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zi extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Eg extends Zi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yl=new He,rd=new w,od=new w;class yh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ES extends yh{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Mr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bh extends Zi{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ES}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ad=new He,Wr=new w,bl=new w;class AS extends yh{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wr),bl.copy(n.position),bl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bl),n.updateMatrixWorld(),i.makeTranslation(-Wr.x,-Wr.y,-Wr.z),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad)}}class Mh extends Zi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new AS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wS extends yh{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ag extends Zi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wg extends Zi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Cg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Rg extends Zi{constructor(e=new Cg,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Dc extends Tn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Zn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Dc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new ve().setHex(o.value);break;case"v2":i.uniforms[s].value=new J().fromArray(o.value);break;case"v3":i.uniforms[s].value=new w().fromArray(o.value);break;case"v4":i.uniforms[s].value=new dt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new Ke().fromArray(o.value);break;case"m4":i.uniforms[s].value=new He().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:hg,SpriteMaterial:rh,RawShaderMaterial:mh,ShaderMaterial:zn,PointsMaterial:gc,MeshPhysicalMaterial:Qn,MeshStandardMaterial:ks,MeshPhongMaterial:fg,MeshToonMaterial:dg,MeshNormalMaterial:pg,MeshLambertMaterial:mg,MeshDepthMaterial:hc,MeshDistanceMaterial:nh,MeshBasicMaterial:Mn,MeshMatcapMaterial:gg,LineDashedMaterial:_g,LineBasicMaterial:mn,Material:Zt};return new t[e]}}class Wi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Th extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Pg extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Zn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const g=d.interleavedBuffers[p],m=s(d,g.buffer),x=ur(g.type,m),v=new wo(x,g.stride);return v.uuid=g.uuid,t[p]=v,v}function s(d,p){if(n[p]!==void 0)return n[p];const g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new Th:new Je,a=e.data.index;if(a!==void 0){const d=ur(a.type,a.array);o.setIndex(new mt(d,1))}const c=e.data.attributes;for(const d in c){const p=c[d];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new Pn(g,p.itemSize,p.offset,p.normalized)}else{const g=ur(p.type,p.array),m=p.isInstancedBufferAttribute?Ls:mt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const p=l[d],_=[];for(let g=0,m=p.length;g<m;g++){const x=p[g];let v;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);v=new Pn(y,x.itemSize,x.offset,x.normalized)}else{const y=ur(x.type,x.array);v=new mt(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}o.morphAttributes[d]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,p=h.length;d!==p;++d){const _=h[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new w;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new jt(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class CS extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Wi.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Zn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Wi.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Zn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ss().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Co().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Pg;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in sd?a=sd[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Dc;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Tr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:ur(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new xh(t);s=new mo(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new Ms(m.data,m.width,m.height)))}i[h.uuid]=new vs(d)}else{const d=a(h.url);i[h.uuid]=new vs(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:ur(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new mo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=await s(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Ms(p.data,p.width,p.height)))}n[c.uuid]=new vs(u)}else{const u=await s(c.url);n[c.uuid]=new vs(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new Eo,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Ms:u=new It,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,RS)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],cd),u.wrapT=n(a.wrap[1],cd)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,ld)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,ld)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":o=new sh,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ve(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new dc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new fc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new $t(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Bs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Ag(e.color,e.intensity);break;case"DirectionalLight":o=new Sh(e.color,e.intensity);break;case"PointLight":o=new Mh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new wg(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new bh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new Eg(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Rg().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new oh(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new At(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;o=new mc(u,h,f),o.instanceMatrix=new Ls(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new Ls(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=c(e.material),o=new tg(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const g=new Yt;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new jt;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":o=new eg;break;case"Line":o=new wi(a(e.geometry),c(e.material));break;case"LineLoop":o=new ah(a(e.geometry),c(e.material));break;case"LineSegments":o=new Kn(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new ch(a(e.geometry),c(e.material));break;case"Sprite":o=new Qm(c(e.material));break;case"Group":o=new Gn;break;case"Bone":o=new pc;break;default:o=new ut}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const RS={UVMapping:ec,CubeReflectionMapping:Ai,CubeRefractionMapping:Xi,EquirectangularReflectionMapping:to,EquirectangularRefractionMapping:no,CubeUVReflectionMapping:Cr},cd={RepeatWrapping:qi,ClampToEdgeWrapping:cn,MirroredRepeatWrapping:vr},ld={NearestFilter:Ft,NearestMipmapNearestFilter:io,NearestMipmapLinearFilter:mr,LinearFilter:Rt,LinearMipmapNearestFilter:tc,LinearMipmapLinearFilter:ui};class Lg extends Tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Us.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Us.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let ba;class Eh{static getContext(){return ba===void 0&&(ba=new(window.AudioContext||window.webkitAudioContext)),ba}static setContext(e){ba=e}}class PS extends Tn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Zn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);Eh.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const ud=new He,hd=new He,ss=new He;class LS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new $t,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new $t,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ss.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(bs*t.fov*.5)/t.zoom;let a,c;hd.elements[12]=-i,ud.elements[12]=i,a=-o*t.aspect+s,c=o*t.aspect+s,ss.elements[0]=2*t.near/(c-a),ss.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(ss),a=-o*t.aspect-s,c=o*t.aspect-s,ss.elements[0]=2*t.near/(c-a),ss.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(ss)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(hd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ud)}}class Ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fd(){return(typeof performance>"u"?Date:performance).now()}const rs=new w,dd=new nn,IS=new w,os=new w;class DS extends ut{constructor(){super(),this.type="AudioListener",this.context=Eh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ig}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(rs,dd,IS),os.set(0,0,-1).applyQuaternion(dd),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(rs.x,i),t.positionY.linearRampToValueAtTime(rs.y,i),t.positionZ.linearRampToValueAtTime(rs.z,i),t.forwardX.linearRampToValueAtTime(os.x,i),t.forwardY.linearRampToValueAtTime(os.y,i),t.forwardZ.linearRampToValueAtTime(os.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(rs.x,rs.y,rs.z),t.setOrientation(os.x,os.y,os.z,n.x,n.y,n.z)}}class Dg extends ut{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const as=new w,pd=new nn,NS=new w,cs=new w;class US extends Dg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(as,pd,NS),cs.set(0,0,1).applyQuaternion(pd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(as.x,n),t.positionY.linearRampToValueAtTime(as.y,n),t.positionZ.linearRampToValueAtTime(as.z,n),t.orientationX.linearRampToValueAtTime(cs.x,n),t.orientationY.linearRampToValueAtTime(cs.y,n),t.orientationZ.linearRampToValueAtTime(cs.z,n)}else t.setPosition(as.x,as.y,as.z),t.setOrientation(cs.x,cs.y,cs.z)}}class OS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Ng{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;nn.multiplyQuaternionsFlat(e,o,e,t,e,n),nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ah="\\[\\]\\.:\\/",FS=new RegExp("["+Ah+"]","g"),wh="[^"+Ah+"]",BS="[^"+Ah.replace("\\.","")+"]",zS=/((?:WC+[\/:])*)/.source.replace("WC",wh),kS=/(WCOD+)?/.source.replace("WCOD",BS),HS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),VS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),GS=new RegExp("^"+zS+kS+HS+VS+"$"),WS=["material","materials","bones","map"];class XS{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FS,"")}static parseTrackName(e){const t=GS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);WS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=XS;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Fn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let p=t[d];if(p===void 0){p=c++,t[d]=p,e.push(f);for(let _=0,g=o;_!==g;++_)s[_].push(new ht(f,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,g=e[_];t[g.uuid]=p,e[p]=g,t[d]=_,e[_]=f;for(let m=0,x=o;m!==x;++m){const v=s[m],y=v[_];let M=v[p];v[p]=y,M===void 0&&(M=new ht(f,n[m],i[m])),v[_]=M}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let d=0,p=i;d!==p;++d){const _=n[d],g=_[h],m=_[u];_[u]=g,_[h]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],p=--o,_=e[p];t[d.uuid]=h,e[h]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let g=0,m=i;g!==m;++g){const x=n[g],v=x[f],y=x[p];x[h]=v,x[f]=y,x.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[h]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let f=u,d=c.length;f!==d;++f){const p=c[f];h[f]=new ht(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Ug{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:gs,endingEnd:gs};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Xu:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ic:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Sm;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===bm){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:gs:i.endingStart=so,t?i.endingEnd=this.zeroSlopeAtEnd?_s:gs:i.endingEnd=so)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const $S=new Float32Array(1);class YS extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new Ng(ht.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new _h(new Float32Array(2),new Float32Array(2),1,$S),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Tr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ic),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Ug(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Tr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ch{constructor(e){this.value=e}clone(){return new Ch(this.value.clone===void 0?this.value:this.value.clone())}}let jS=0;class ZS extends hi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.usage=co,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class ja extends wo{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class KS{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class JS{constructor(e,t,n=0,i=1/0){this.ray=new Fs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xu(e,this,n,t),n.sort(md),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)xu(e[i],this,n,t);return n.sort(md),n}}function md(r,e){return r.distance-e.distance}function xu(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)xu(i[s],e,t,!0)}}class yu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class QS{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const gd=new J;class eT{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _d=new w,Ma=new w;class Og{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_d.subVectors(e,this.start),Ma.subVectors(this.end,this.start);const n=Ma.dot(Ma);let s=Ma.dot(_d)/n;return t&&(s=Bt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const vd=new w;class tT extends ut{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Je,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ie(i,3));const s=new mn({fog:!1,toneMapped:!1});this.cone=new Kn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),vd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(vd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Oi=new w,Sa=new He,Ml=new He;class nT extends Kn{constructor(e){const t=Fg(e),n=new Je,i=[],s=[],o=new ve(0,0,1),a=new ve(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Ie(i,3)),n.setAttribute("color",new Ie(s,3));const c=new mn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ml.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Sa.multiplyMatrices(Ml,a.matrixWorld),Oi.setFromMatrixPosition(Sa),i.setXYZ(o,Oi.x,Oi.y,Oi.z),Sa.multiplyMatrices(Ml,a.parent.matrixWorld),Oi.setFromMatrixPosition(Sa),i.setXYZ(o+1,Oi.x,Oi.y,Oi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Fg(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Fg(r.children[t]));return e}class iT extends At{constructor(e,t,n){const i=new zs(t,4,2),s=new Mn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const sT=new w,xd=new ve,yd=new ve;class rT extends ut{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Po(t);i.rotateY(Math.PI*.5),this.material=new Mn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new mt(o,3)),this.add(new At(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");xd.copy(this.light.color),yd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?xd:yd;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(sT.setFromMatrixPosition(this.light.matrixWorld).negate())}}class oT extends Kn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=f===s?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new Je;u.setAttribute("position",new Ie(c,3)),u.setAttribute("color",new Ie(l,3));const h=new mn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class aT extends Kn{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new ve(s),o=new ve(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const _=h&1?s:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?s:o,d=e-e/n*h;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;a.push(g,0,m),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,a.push(g,0,m),c.push(f.r,f.g,f.b)}}const l=new Je;l.setAttribute("position",new Ie(a,3)),l.setAttribute("color",new Ie(c,3));const u=new mn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const bd=new w,Ta=new w,Md=new w;class cT extends ut{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Je;i.setAttribute("position",new Ie([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new mn({fog:!1,toneMapped:!1});this.lightPlane=new wi(i,s),this.add(this.lightPlane),i=new Je,i.setAttribute("position",new Ie([0,0,0,0,0,1],3)),this.targetLine=new wi(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),bd.setFromMatrixPosition(this.light.matrixWorld),Ta.setFromMatrixPosition(this.light.target.matrixWorld),Md.subVectors(Ta,bd),this.lightPlane.lookAt(Ta),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ta),this.targetLine.scale.z=Md.length()}}const Ea=new w,Ut=new lc;class lT extends Kn{constructor(e){const t=new Je,n=new mn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Ie(i,3)),t.setAttribute("color",new Ie(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new ve(16755200),u=new ve(16711680),h=new ve(43775),f=new ve(16777215),d=new ve(3355443);this.setColors(l,u,h,f,d)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Ut.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Gt("c",t,e,Ut,0,0,-1),Gt("t",t,e,Ut,0,0,1),Gt("n1",t,e,Ut,-n,-i,-1),Gt("n2",t,e,Ut,n,-i,-1),Gt("n3",t,e,Ut,-n,i,-1),Gt("n4",t,e,Ut,n,i,-1),Gt("f1",t,e,Ut,-n,-i,1),Gt("f2",t,e,Ut,n,-i,1),Gt("f3",t,e,Ut,-n,i,1),Gt("f4",t,e,Ut,n,i,1),Gt("u1",t,e,Ut,n*.7,i*1.1,-1),Gt("u2",t,e,Ut,-n*.7,i*1.1,-1),Gt("u3",t,e,Ut,0,i*2,-1),Gt("cf1",t,e,Ut,-n,0,1),Gt("cf2",t,e,Ut,n,0,1),Gt("cf3",t,e,Ut,0,-i,1),Gt("cf4",t,e,Ut,0,i,1),Gt("cn1",t,e,Ut,-n,0,-1),Gt("cn2",t,e,Ut,n,0,-1),Gt("cn3",t,e,Ut,0,-i,-1),Gt("cn4",t,e,Ut,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Gt(r,e,t,n,i,s,o){Ea.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Ea.x,Ea.y,Ea.z)}}const Aa=new Yt;class uT extends Kn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Je;s.setIndex(new mt(n,1)),s.setAttribute("position",new mt(i,3)),super(s,new mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Aa.setFromObject(this.object),Aa.isEmpty())return;const t=Aa.min,n=Aa.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class hT extends Kn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Je;s.setIndex(new mt(n,1)),s.setAttribute("position",new Ie(i,3)),super(s,new mn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class fT extends wi{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Je;o.setAttribute("position",new Ie(s,3)),o.computeBoundingSphere(),super(o,new mn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Je;c.setAttribute("position",new Ie(a,3)),c.computeBoundingSphere(),this.add(new At(c,new Mn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Sd=new w;let wa,Sl;class dT extends ut{constructor(e=new w(0,0,1),t=new w(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",wa===void 0&&(wa=new Je,wa.setAttribute("position",new Ie([0,0,0,0,1,0],3)),Sl=new Lr(0,.5,1,5,1),Sl.translate(0,-.5,0)),this.position.copy(t),this.line=new wi(wa,new mn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new At(Sl,new Mn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Sd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Sd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class pT extends Kn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Je;i.setAttribute("position",new Ie(t,3)),i.setAttribute("color",new Ie(n,3));const s=new mn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ve,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class mT{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new uo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let v=0,y=m.length;v<y;v++){const M=m[v],E=new Ss;E.curves=M.curves,x.push(E)}return x}function n(m,x){const v=x.length;let y=!1;for(let M=v-1,E=0;E<v;M=E++){let S=x[M],R=x[E],b=R.x-S.x,T=R.y-S.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(S=x[E],b=-b,R=x[M],T=-T),m.y<S.y||m.y>R.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{const O=T*(m.x-S.x)-b*(m.y-S.y);if(O===0)return!0;if(O<0)continue;y=!y}}else{if(m.y!==S.y)continue;if(R.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=R.x)return!0}}return y}const i=ci.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Ss,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let m=0,x=s.length;m<x;m++)a=s[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[p]&&p++,f[p]={s:new Ss,p:_},f[p].s.curves=a.curves,u&&p++,d[p]=[]):d[p].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let m=!1,x=0;for(let v=0,y=f.length;v<y;v++)h[v]=[];for(let v=0,y=f.length;v<y;v++){const M=d[v];for(let E=0;E<M.length;E++){const S=M[E];let R=!0;for(let b=0;b<f.length;b++)n(S.p,f[b].p)&&(v!==b&&x++,R?(R=!1,h[b].push(S)):m=!0);R&&h[v].push(S)}}x>0&&m===!1&&(d=h)}let g;for(let m=0,x=f.length;m<x;m++){c=f[m].s,l.push(c),g=d[m];for(let v=0,y=g.length;v<y;v++)c.holes.push(g[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);const gT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Fu,AddEquation:ki,AddOperation:am,AdditiveAnimationBlendMode:Xu,AdditiveBlending:Dl,AlphaFormat:mm,AlwaysCompare:Nm,AlwaysDepth:em,AlwaysStencilFunc:uu,AmbientLight:Ag,AnimationAction:Ug,AnimationClip:Tr,AnimationLoader:bS,AnimationMixer:YS,AnimationObjectGroup:qS,AnimationUtils:_S,ArcCurve:ng,ArrayCamera:Zm,ArrowHelper:dT,AttachedBindMode:Bl,Audio:Dg,AudioAnalyser:OS,AudioContext:Eh,AudioListener:DS,AudioLoader:PS,AxesHelper:pT,BackSide:Sn,BasicDepthPacking:Em,BasicShadowMap:N_,BatchedMesh:tg,Bone:pc,BooleanKeyframeTrack:Hs,Box2:eT,Box3:Yt,Box3Helper:hT,BoxGeometry:Ri,BoxHelper:uT,BufferAttribute:mt,BufferGeometry:Je,BufferGeometryLoader:Pg,ByteType:dm,Cache:Us,Camera:lc,CameraHelper:lT,CanvasTexture:HM,CapsuleGeometry:yc,CatmullRomCurve3:ig,CineonToneMapping:um,CircleGeometry:bc,ClampToEdgeWrapping:cn,Clock:Ig,Color:ve,ColorKeyframeTrack:vh,ColorManagement:pt,CompressedArrayTexture:zM,CompressedCubeTexture:kM,CompressedTexture:_c,CompressedTextureLoader:MS,ConeGeometry:Mc,ConstantAlphaFactor:Kp,ConstantColorFactor:jp,CubeCamera:Hm,CubeReflectionMapping:Ai,CubeRefractionMapping:Xi,CubeTexture:Eo,CubeTextureLoader:SS,CubeUVReflectionMapping:Cr,CubicBezierCurve:uh,CubicBezierCurve3:sg,CubicInterpolant:yg,CullFaceBack:Il,CullFaceFront:Op,CullFaceFrontBack:D_,CullFaceNone:Up,Curve:Jn,CurvePath:og,CustomBlending:Fp,CustomToneMapping:hm,CylinderGeometry:Lr,Cylindrical:QS,Data3DTexture:Ku,DataArrayTexture:oc,DataTexture:Ms,DataTextureLoader:TS,DataUtils:z0,DecrementStencilOp:G_,DecrementWrapStencilOp:X_,DefaultLoadingManager:Sg,DepthFormat:Vi,DepthStencilFormat:Rs,DepthTexture:th,DetachedBindMode:fm,DirectionalLight:Sh,DirectionalLightHelper:cT,DiscreteInterpolant:bg,DisplayP3ColorSpace:sc,DodecahedronGeometry:Sc,DoubleSide:Un,DstAlphaFactor:Wp,DstColorFactor:qp,DynamicCopyUsage:r0,DynamicDrawUsage:Um,DynamicReadUsage:n0,EdgesGeometry:ag,EllipseCurve:vc,EqualCompare:Pm,EqualDepth:nm,EqualStencilFunc:j_,EquirectangularReflectionMapping:to,EquirectangularRefractionMapping:no,Euler:To,EventDispatcher:hi,ExtrudeGeometry:Ec,FileLoader:Zn,Float16BufferAttribute:X0,Float32BufferAttribute:Ie,Float64BufferAttribute:q0,FloatType:Yn,Fog:dc,FogExp2:fc,FramebufferTexture:BM,FrontSide:li,Frustum:Ao,GLBufferAttribute:KS,GLSL1:a0,GLSL3:hu,GreaterCompare:Lm,GreaterDepth:sm,GreaterEqualCompare:Dm,GreaterEqualDepth:im,GreaterEqualStencilFunc:Q_,GreaterStencilFunc:K_,GridHelper:oT,Group:Gn,HalfFloatType:xr,HemisphereLight:Eg,HemisphereLightHelper:rT,IcosahedronGeometry:Ac,ImageBitmapLoader:Lg,ImageLoader:mo,ImageUtils:Zu,IncrementStencilOp:V_,IncrementWrapStencilOp:W_,InstancedBufferAttribute:Ls,InstancedBufferGeometry:Th,InstancedInterleavedBuffer:ja,InstancedMesh:mc,Int16BufferAttribute:G0,Int32BufferAttribute:W0,Int8BufferAttribute:k0,IntType:Bu,InterleavedBuffer:wo,InterleavedBufferAttribute:Pn,Interpolant:Ir,InterpolateDiscrete:yr,InterpolateLinear:Ps,InterpolateSmooth:ka,InvertStencilOp:q_,KeepStencilOp:ds,KeyframeTrack:ei,LOD:eg,LatheGeometry:Ro,Layers:ac,LessCompare:Rm,LessDepth:tm,LessEqualCompare:Yu,LessEqualDepth:eo,LessEqualStencilFunc:Z_,LessStencilFunc:Y_,Light:Zi,LightProbe:Rg,Line:wi,Line3:Og,LineBasicMaterial:mn,LineCurve:hh,LineCurve3:rg,LineDashedMaterial:_g,LineLoop:ah,LineSegments:Kn,LinearDisplayP3ColorSpace:So,LinearEncoding:$u,LinearFilter:Rt,LinearInterpolant:_h,LinearMipMapLinearFilter:z_,LinearMipMapNearestFilter:B_,LinearMipmapLinearFilter:ui,LinearMipmapNearestFilter:tc,LinearSRGBColorSpace:sn,LinearToneMapping:cm,LinearTransfer:ro,Loader:Tn,LoaderUtils:Wi,LoadingManager:xh,LoopOnce:bm,LoopPingPong:Sm,LoopRepeat:Mm,LuminanceAlphaFormat:_m,LuminanceFormat:gm,MOUSE:hs,Material:Zt,MaterialLoader:Dc,MathUtils:rc,Matrix3:Ke,Matrix4:He,MaxEquation:Fl,Mesh:At,MeshBasicMaterial:Mn,MeshDepthMaterial:hc,MeshDistanceMaterial:nh,MeshLambertMaterial:mg,MeshMatcapMaterial:gg,MeshNormalMaterial:pg,MeshPhongMaterial:fg,MeshPhysicalMaterial:Qn,MeshStandardMaterial:ks,MeshToonMaterial:dg,MinEquation:Ol,MirroredRepeatWrapping:vr,MixOperation:om,MultiplyBlending:Ul,MultiplyOperation:Mo,NearestFilter:Ft,NearestMipMapLinearFilter:F_,NearestMipMapNearestFilter:O_,NearestMipmapLinearFilter:mr,NearestMipmapNearestFilter:io,NeverCompare:Cm,NeverDepth:Qp,NeverStencilFunc:$_,NoBlending:bi,NoColorSpace:On,NoToneMapping:Mi,NormalAnimationBlendMode:ic,NormalBlending:ys,NotEqualCompare:Im,NotEqualDepth:rm,NotEqualStencilFunc:J_,NumberKeyframeTrack:Ds,Object3D:ut,ObjectLoader:CS,ObjectSpaceNormalMap:wm,OctahedronGeometry:Po,OneFactor:Hp,OneMinusConstantAlphaFactor:Jp,OneMinusConstantColorFactor:Zp,OneMinusDstAlphaFactor:Xp,OneMinusDstColorFactor:$p,OneMinusSrcAlphaFactor:Wa,OneMinusSrcColorFactor:Gp,OrthographicCamera:Bs,P3Primaries:ao,PCFShadowMap:Ou,PCFSoftShadowMap:Qa,PMREMGenerator:du,Path:uo,PerspectiveCamera:$t,Plane:ri,PlaneGeometry:Rr,PlaneHelper:fT,PointLight:Mh,PointLightHelper:iT,Points:ch,PointsMaterial:gc,PolarGridHelper:aT,PolyhedronGeometry:ji,PositionalAudio:US,PropertyBinding:ht,PropertyMixer:Ng,QuadraticBezierCurve:fh,QuadraticBezierCurve3:xc,Quaternion:nn,QuaternionKeyframeTrack:$i,QuaternionLinearInterpolant:Mg,RED_GREEN_RGTC2_Format:cu,RED_RGTC1_Format:ym,REVISION:wr,RGBADepthPacking:Am,RGBAFormat:Cn,RGBAIntegerFormat:Gu,RGBA_ASTC_10x10_Format:nu,RGBA_ASTC_10x5_Format:Ql,RGBA_ASTC_10x6_Format:eu,RGBA_ASTC_10x8_Format:tu,RGBA_ASTC_12x10_Format:iu,RGBA_ASTC_12x12_Format:su,RGBA_ASTC_4x4_Format:Xl,RGBA_ASTC_5x4_Format:ql,RGBA_ASTC_5x5_Format:$l,RGBA_ASTC_6x5_Format:Yl,RGBA_ASTC_6x6_Format:jl,RGBA_ASTC_8x5_Format:Zl,RGBA_ASTC_8x6_Format:Kl,RGBA_ASTC_8x8_Format:Jl,RGBA_BPTC_Format:za,RGBA_ETC2_EAC_Format:Wl,RGBA_PVRTC_2BPPV1_Format:Vl,RGBA_PVRTC_4BPPV1_Format:Hl,RGBA_S3TC_DXT1_Format:Oa,RGBA_S3TC_DXT3_Format:Fa,RGBA_S3TC_DXT5_Format:Ba,RGB_BPTC_SIGNED_Format:ru,RGB_BPTC_UNSIGNED_Format:ou,RGB_ETC1_Format:Wu,RGB_ETC2_Format:Gl,RGB_PVRTC_2BPPV1_Format:kl,RGB_PVRTC_4BPPV1_Format:zl,RGB_S3TC_DXT1_Format:Ua,RGFormat:xm,RGIntegerFormat:Vu,RawShaderMaterial:mh,Ray:Fs,Raycaster:JS,Rec709Primaries:oo,RectAreaLight:wg,RedFormat:vm,RedIntegerFormat:Hu,ReinhardToneMapping:lm,RenderTarget:Bm,RepeatWrapping:qi,ReplaceStencilOp:H_,ReverseSubtractEquation:zp,RingGeometry:wc,SIGNED_RED_GREEN_RGTC2_Format:lu,SIGNED_RED_RGTC1_Format:au,SRGBColorSpace:wt,SRGBTransfer:xt,Scene:sh,ShaderChunk:Xe,ShaderLib:bn,ShaderMaterial:zn,ShadowMaterial:hg,Shape:Ss,ShapeGeometry:Cc,ShapePath:mT,ShapeUtils:ci,ShortType:pm,Skeleton:Co,SkeletonHelper:nT,SkinnedMesh:oh,Source:vs,Sphere:jt,SphereGeometry:zs,Spherical:yu,SphericalHarmonics3:Cg,SplineCurve:dh,SpotLight:bh,SpotLightHelper:tT,Sprite:Qm,SpriteMaterial:rh,SrcAlphaFactor:Ga,SrcAlphaSaturateFactor:Yp,SrcColorFactor:Vp,StaticCopyUsage:s0,StaticDrawUsage:co,StaticReadUsage:t0,StereoCamera:LS,StreamCopyUsage:o0,StreamDrawUsage:e0,StreamReadUsage:i0,StringKeyframeTrack:Vs,SubtractEquation:Bp,SubtractiveBlending:Nl,TOUCH:fs,TangentSpaceNormalMap:Yi,TetrahedronGeometry:Rc,Texture:It,TextureLoader:Tg,TorusGeometry:Pc,TorusKnotGeometry:Lc,Triangle:wn,TriangleFanDrawMode:Xa,TriangleStripDrawMode:qu,TrianglesDrawMode:Tm,TubeGeometry:Ic,TwoPassDoubleSide:U_,UVMapping:ec,Uint16BufferAttribute:Ju,Uint32BufferAttribute:Qu,Uint8BufferAttribute:H0,Uint8ClampedBufferAttribute:V0,Uniform:Ch,UniformsGroup:ZS,UniformsLib:ge,UniformsUtils:cc,UnsignedByteType:Si,UnsignedInt248Type:Hi,UnsignedIntType:yi,UnsignedShort4444Type:zu,UnsignedShort5551Type:ku,UnsignedShortType:nc,VSMShadowMap:si,Vector2:J,Vector3:w,Vector4:dt,VectorKeyframeTrack:Ns,VideoTexture:FM,WebGL1Renderer:Km,WebGL3DRenderTarget:w0,WebGLArrayRenderTarget:A0,WebGLCoordinateSystem:jn,WebGLCubeRenderTarget:Vm,WebGLMultipleRenderTargets:C0,WebGLRenderTarget:Bn,WebGLRenderer:ih,WebGLUtils:jm,WebGPUCoordinateSystem:br,WireframeGeometry:ph,WrapAroundEnding:so,ZeroCurvatureEnding:gs,ZeroFactor:kp,ZeroSlopeEnding:_s,ZeroStencilOp:k_,_SRGBAFormat:qa,createCanvasElement:Fm,sRGBEncoding:Gi},Symbol.toStringTag,{value:"Module"}));function _T(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Bi{constructor(){Nt(this,"allVertices",{});Nt(this,"isolatedVertices",{});Nt(this,"connectedVertices",{});Nt(this,"sortedConnectedValues",[]);Nt(this,"needsSort",!1);Nt(this,"emitter",_T());Nt(this,"emit",this.emitter.emit.bind(this.emitter));Nt(this,"on",this.emitter.on.bind(this.emitter));Nt(this,"off",this.emitter.off.bind(this.emitter));Nt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class vT{constructor(e,t,n){Nt(this,"key");Nt(this,"stage");Nt(this,"callback");Nt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class xT extends Bi{constructor(t,n,i){super();Nt(this,"key");Nt(this,"scheduler");Nt(this,"callback",(t,n)=>n());Nt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const s=new vT(this,t,n);return this.add(t,s,i),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(s=>{const o=performance.now();s.run(i??t);const a=performance.now()-o;n[s.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class yT extends Bi{constructor(t){super();Nt(this,"lastTime",performance.now());Nt(this,"clampDeltaTo",.1);Nt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new xT(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},s=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-s,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const yn=(r,e)=>{const t=Nu(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});Ln(()=>{i(),n&&n()})},_t=r=>{const e=pn(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},Nc=new $t(75,0,.1,1e3);Nc.position.z=5;Nc.lookAt(0,0,0);const bT=()=>Nc,MT=r=>{yn(r.size,e=>{if(r.camera.current===Nc){const t=r.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),r.invalidate()}})},ST=Symbol("use-legacy-frame-compatibility-context"),TT=()=>{const r={useFrameOrders:[],useRenderOrders:[]};return ai(ST,r),r},ET=r=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await T_(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((u,h)=>{var f;(u===0||l)&&((f=h==null?void 0:h.dispose)==null||f.call(h),e.disposableObjects.delete(h))}),e.shouldDispose=!1)},collectDisposableObjects:(l,u)=>{const h=u??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&h.push(l),Object.entries(l).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,h)})),h},addDisposableObjects:l=>{l.forEach(u=>{const h=e.disposableObjects.get(u);h?e.disposableObjects.set(u,h+1):e.disposableObjects.set(u,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(u=>{const h=e.disposableObjects.get(u);h&&h>0&&e.disposableObjects.set(u,h-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=TT(),n=new yT,i=n.createStage(Symbol("threlte-main-stage")),s=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(l,u){a.shouldRender()&&u()}}),o=s.createTask(Symbol("threlte-auto-render-task"),l=>{t.length>0||a.renderer.render(a.scene,a.camera.current)}),a={size:Nu([r.userSize,r.parentSize],([l,u])=>l||u),camera:_t(bT()),scene:new sh,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:_t(r.colorSpace),toneMapping:_t(r.toneMapping),dpr:_t(r.dpr),useLegacyLights:_t(r.useLegacyLights),shadows:_t(r.shadows),colorManagementEnabled:_t(r.colorManagementEnabled),renderMode:_t(r.renderMode),autoRender:_t(r.autoRender),scheduler:n,mainStage:i,renderStage:s,autoRenderTask:o,shouldRender:()=>a.renderMode.current==="always"||a.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||a.renderMode.current==="manual"&&e.advance};MT(a);const c=_t({});return ai("threlte",a),ai("threlte-internal-context",e),ai("threlte-user-context",c),a},Rh=typeof window<"u",AT=()=>{const r=_t({width:0,height:0});if(!Rh)return{parentSize:r,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=a=>{i.disconnect(),s.disconnect(),i.observe(a),s.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===r.current.width&&l===r.current.height||r.set({width:c,height:l})}),s=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),o=a=>{t=a;const c=t.parentElement;c&&(r.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Ln(()=>{i.disconnect(),s.disconnect()}),{parentSize:r,parentSizeAction:o}};function Bg(r,e){const t=pn(r);let n=r;const i=t.subscribe(a=>n=a);return Ln(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const En=()=>{const r=Ei("threlte");if(r===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return r},Ph=Symbol("threlte-hierarchical-parent-context"),Lh=()=>Ei(Ph),wT=r=>ai(Ph,r),CT=r=>{const e=Bg(r);return ai(Ph,e),e};function RT(r){let e;const t=r[7].default,n=yt(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&64)&&bt(n,t,i,i[6],e?St(t,i[6],s,null):Mt(i[6]),null)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}const PT=()=>({onChildMount:Ei("threlte-hierarchical-object-on-mount"),onChildDestroy:Ei("threlte-hierarchical-object-on-destroy")});function LT(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{onChildMount:a=void 0}=e;const c=m=>{a==null||a(m)};let{onChildDestroy:l=void 0}=e;const u=m=>{l==null||l(m)},{invalidate:h}=En(),f=Lh();ft(r,f,m=>t(5,n=m));let{parent:d=n}=e;const p=PT();o&&((g=p.onChildMount)==null||g.call(p,o),h());const _=Bg(o,(m,x)=>{var v,y;x&&((v=p.onChildDestroy)==null||v.call(p,x),h()),m&&((y=p.onChildMount)==null||y.call(p,m),h())});return Ln(()=>{var m;o&&((m=p.onChildDestroy)==null||m.call(p,o),h())}),ai("threlte-hierarchical-object-on-mount",c),ai("threlte-hierarchical-object-on-destroy",u),wT(_),r.$$set=m=>{"object"in m&&t(2,o=m.object),"onChildMount"in m&&t(3,a=m.onChildMount),"onChildDestroy"in m&&t(4,l=m.onChildDestroy),"parent"in m&&t(1,d=m.parent),"$$scope"in m&&t(6,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(1,d=n),r.$$.dirty&4&&_.set(o)},[f,d,o,a,l,n,s,i]}class zg extends kt{constructor(e){super(),Ht(this,e,LT,RT,zt,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function IT(r){let e;const t=r[1].default,n=yt(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&bt(n,t,i,i[4],e?St(t,i[4],s,null):Mt(i[4]),null)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function DT(r){let e,t;return e=new zg({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[IT]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function NT(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class kg extends kt{constructor(e){super(),Ht(this,e,NT,DT,zt,{object:0})}}const UT=()=>{ai("threlte-cache",[])},OT=wr.replace("dev",""),FT=Number.parseInt(OT),BT=r=>{const e=pn(void 0),t=(n,i)=>{r.renderer=new ih({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(r.renderer)};return yn([r.colorManagementEnabled],([n])=>{pt.enabled=n}),yn([e,r.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),yn([e,r.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),yn([e,r.size],([n,i])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(i.width,i.height)}),yn([e,r.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=Qa))}),yn([e,r.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),yn([e,r.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},Hg=()=>Ei("threlte-internal-context");function Td(r){let e,t;return e=new kg({props:{object:r[0].scene,$$slots:{default:[zT]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function zT(r){let e;const t=r[15].default,n=yt(t,r,r[17],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,null):Mt(i[17]),null)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function kT(r){let e,t,n,i,s=r[2]&&Td(r);return{c(){e=Lu("canvas"),s&&s.c(),this.h()},l(o){e=Iu(o,"CANVAS",{class:!0});var a=Du(e);s&&s.l(a),a.forEach(Le),this.h()},h(){wp(e,"class","svelte-o3oskp")},m(o,a){Ne(o,e,a),s&&s.m(e,null),r[16](e),t=!0,n||(i=E_(r[4].call(null,e)),n=!0)},p(o,[a]){o[2]?s?(s.p(o,a),a&4&&H(s,1)):(s=Td(o),s.c(),H(s,1),s.m(e,null)):s&&(Wt(),q(s,1,1,()=>{s=null}),Xt())},i(o){t||(H(s),t=!0)},o(o){q(s),t=!1},d(o){o&&Le(e),s&&s.d(),r[16](null),n=!1,i()}}}function HT(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{colorManagementEnabled:o=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=Rh?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:h=Qa}=e,{size:f=void 0}=e,{toneMapping:d=Fu}=e,{useLegacyLights:p=!(FT>=155)}=e,{autoRender:_=!0}=e,g,m=pn(!1);ft(r,m,T=>t(2,n=T));const x=pn(f),{parentSize:v,parentSizeAction:y}=AT(),M=ET({colorManagementEnabled:o,colorSpace:a,dpr:c,renderMode:l,parentSize:v,autoRender:_,shadows:h,toneMapping:d,useLegacyLights:p,userSize:x}),E=Hg(),S=M;yn([m,S.autoRender],([T,O])=>(T&&O?S.autoRenderTask.start():S.autoRenderTask.stop(),()=>{S.autoRenderTask.stop()})),UT();const{createRenderer:R}=BT(S);Er(()=>{R(g,u),S.renderer.setAnimationLoop(T=>{E.dispose(),S.scheduler.run(T),E.resetFrameInvalidation()}),m.set(!0)}),Ln(()=>{var T;E.dispose(!0),S.scheduler.dispose(),(T=S.renderer)==null||T.dispose()});function b(T){Ar[T?"unshift":"push"](()=>{g=T,t(1,g)})}return r.$$set=T=>{"colorManagementEnabled"in T&&t(5,o=T.colorManagementEnabled),"colorSpace"in T&&t(6,a=T.colorSpace),"dpr"in T&&t(7,c=T.dpr),"renderMode"in T&&t(8,l=T.renderMode),"rendererParameters"in T&&t(9,u=T.rendererParameters),"shadows"in T&&t(10,h=T.shadows),"size"in T&&t(11,f=T.size),"toneMapping"in T&&t(12,d=T.toneMapping),"useLegacyLights"in T&&t(13,p=T.useLegacyLights),"autoRender"in T&&t(14,_=T.autoRender),"$$scope"in T&&t(17,s=T.$$scope)},r.$$.update=()=>{r.$$.dirty&2048&&x.set(f),r.$$.dirty&64&&S.colorSpace.set(a),r.$$.dirty&128&&S.dpr.set(c),r.$$.dirty&256&&S.renderMode.set(l),r.$$.dirty&16384&&S.autoRender.set(_),r.$$.dirty&1024&&S.shadows.set(h),r.$$.dirty&4096&&S.toneMapping.set(d)},[S,g,n,m,y,o,a,c,l,u,h,f,d,p,_,i,b,s]}class VT extends kt{constructor(e){super(),Ht(this,e,HT,kT,zt,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function GT(r){let e;const t=r[9].default,n=yt(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&bt(n,t,i,i[8],e?St(t,i[8],s,null):Mt(i[8]),null)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}const Ed="threlte-disposable-object-context";function WT(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=Hg();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const d=Ei(Ed);ft(r,d,g=>t(7,i=g));const p=pn(f??i??!0);ft(r,p,g=>t(6,n=g)),ai(Ed,p);let _=n?a(u):[];return c(_),Ln(()=>{l(_)}),r.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,f=g.dispose),"$$scope"in g&&t(8,o=g.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&p.set(f??i??!0),r.$$.dirty&116&&u!==h&&(l(_),t(5,_=n?a(u):[]),c(_),t(4,h=u))},[d,p,u,f,h,_,n,i,o,s]}class XT extends kt{constructor(e){super(),Ht(this,e,WT,GT,zt,{object:2,dispose:3})}}const qT=/^\s*class\s+/,$T=r=>typeof r!="function"?!1:qT.test(r.toString()),YT=r=>Array.isArray(r),Ad=(r,e)=>$T(r)?YT(e)?new r(...e):new r:r,jT=r=>"isObject3D"in r,wd=r=>"dispose"in r,Vg=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Tl=Symbol("initialValueBeforeAttach"),ZT=()=>{const{invalidate:r}=En();let e=!1,t=Tl,n,i,s;const o=(c,l,u)=>{if(a(),!u){const h=c;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:h,key:f}=Vg(l,u);t=h[f],h[f]=c,i=h,s=f}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Tl&&(i[s]=t,t=Tl,i=void 0,s=void 0),e=!1,r())};return Ln(()=>{a()}),{update:o}},KT=r=>r&&r.isCamera,Gg=r=>r&&r.isOrthographicCamera,Wg=r=>r&&r.isPerspectiveCamera,JT=r=>Wg(r)||Gg(r),QT=()=>{const{invalidate:r,size:e,camera:t}=En();let n,i;Ln(()=>{i==null||i()});const s=c=>{n&&(Gg(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):Wg(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(c,l)=>{if(i==null||i(),l||!JT(c)){n=void 0;return}n=c,i=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!KT(c)||!l||(t.set(c),r())}}},Lo=()=>{const r=Ka(),e=(n,i)=>{const s=r.$$.callbacks[n];s&&s.forEach(o=>{o(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!r.$$.callbacks[n],enumerable:!0}),e},eE=()=>{const r=Lo(),e=[];let t,n=!1;const i=()=>{e.forEach(a=>a()),e.length=0,r("create",{ref:t,cleanup:a=>{e.push(a)}})},s=o=>{t=o,n&&i()};return Er(()=>{i(),n=!0}),Ln(()=>{e.forEach(o=>o())}),{updateRef:s}},Cd=r=>!!(r!=null&&r.addEventListener),tE=()=>{const r=Lo(),e=Ka(),t=c=>{c!=null&&c.type&&r(c.type,c)},n=(c,l)=>{Cd(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},i=(c,l)=>{Cd(c)&&l.forEach(u=>{c.addEventListener(u,t)})},s=pn(),o=pn([]);return yn([s,o],([c,l])=>(i(c,l),()=>n(c,l))),Er(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{s.set(c)}}},nE=r=>{const t=Ei("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(r)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let s=[];return Ln(()=>{s.forEach(l=>l())}),{updateRef:l=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,l);h&&s.push(h)})},updateProps:l=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,l)})},pluginsProps:i}},iE=new Set(["$$scope","$$slots","type","args","attach","instance"]),sE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),rE=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Rd=(r,e,t)=>{var n,i,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=r[e])==null?void 0:n.setScalar)=="function"&&!((i=r[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((s=r[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},oE=()=>{const{invalidate:r}=En(),e=new Map,t=new Map,n=(s,o,a,c)=>{if(rE(a)){const h=e.get(o);if(h&&h.instance===s&&h.value===a)return;e.set(o,{instance:s,value:a})}const{key:l,target:u}=Vg(s,o);if(a!=null){const h=t.get(o);if(h)h(u,l,a);else{const f=Rd(u,l,a);t.set(o,f),f(u,l,a)}}else Rd(u,l,a)(u,l,a);c.manualCamera||sE.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,o,a)=>{var c;for(const l in o)!iE.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&n(s,l,o[l],a),r()}}},aE=r=>({ref:r&2}),Pd=r=>({ref:r[1]}),cE=r=>({ref:r&2}),Ld=r=>({ref:r[1]});function Id(r){let e,t;return e=new XT({props:{object:r[1],dispose:r[0]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function lE(r){let e;const t=r[10].default,n=yt(t,r,r[11],Pd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&bt(n,t,i,i[11],e?St(t,i[11],s,aE):Mt(i[11]),Pd)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function uE(r){let e,t;return e=new kg({props:{object:r[1],$$slots:{default:[hE]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&2050&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function hE(r){let e;const t=r[10].default,n=yt(t,r,r[11],Ld);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&bt(n,t,i,i[11],e?St(t,i[11],s,cE):Mt(i[11]),Ld)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function fE(r){let e=wd(r[1]),t,n,i,s,o,a,c=e&&Id(r);const l=[uE,lE],u=[];function h(f,d){return d&2&&(n=null),n==null&&(n=!!jT(f[1])),n?0:1}return i=h(r,-1),s=u[i]=l[i](r),{c(){c&&c.c(),t=ot(),s.c(),o=gt()},l(f){c&&c.l(f),t=at(f),s.l(f),o=gt()},m(f,d){c&&c.m(f,d),Ne(f,t,d),u[i].m(f,d),Ne(f,o,d),a=!0},p(f,[d]){d&2&&(e=wd(f[1])),e?c?(c.p(f,d),d&2&&H(c,1)):(c=Id(f),c.c(),H(c,1),c.m(t.parentNode,t)):c&&(Wt(),q(c,1,1,()=>{c=null}),Xt());let p=i;i=h(f,d),i===p?u[i].p(f,d):(Wt(),q(u[p],1,1,()=>{u[p]=null}),Xt(),s=u[i],s?s.p(f,d):(s=u[i]=l[i](f),s.c()),H(s,1),s.m(o.parentNode,o))},i(f){a||(H(c),H(s),a=!0)},o(f){q(c),q(s),a=!1},d(f){f&&(Le(t),Le(o)),c&&c.d(f),u[i].d(f)}}}function dE(r,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Wn(e,n),s,{$$slots:o={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=Lh();ft(r,p,O=>t(9,s=O));const _=eE();let g=Ad(c,l);_.updateRef(g);let m=!1;const x=()=>{if(!m){m=!0;return}t(1,g=Ad(c,l)),_.updateRef(g)};let{ref:v=g}=e;const y=CT(g),M=nE({ref:g,props:e}),E=(M==null?void 0:M.pluginsProps)??[],S=oE(),R=QT(),b=ZT(),T=tE();return r.$$set=O=>{t(23,e=ln(ln({},e),As(O))),t(22,i=Wn(e,n)),"is"in O&&t(4,c=O.is),"args"in O&&t(5,l=O.args),"attach"in O&&t(6,u=O.attach),"manual"in O&&t(7,h=O.manual),"makeDefault"in O&&t(8,f=O.makeDefault),"dispose"in O&&t(0,d=O.dispose),"ref"in O&&t(3,v=O.ref),"$$scope"in O&&t(11,a=O.$$scope)},r.$$.update=()=>{r.$$.dirty&48&&x(),r.$$.dirty&2&&t(3,v=g),r.$$.dirty&2&&y.set(g),S.updateProps(g,i,{manualCamera:h,pluginsProps:E}),r.$$.dirty&130&&R.update(g,h),r.$$.dirty&258&&R.makeDefaultCamera(g,f),r.$$.dirty&578&&b.update(g,s,u),r.$$.dirty&2&&T.updateRef(g),r.$$.dirty&2&&(M==null||M.updateRef(g)),M==null||M.updateProps(e),M==null||M.updateRestProps(i)},e=As(e),[d,g,p,v,c,l,u,h,f,s,o,a]}let Xg=class extends kt{constructor(e){super(),Ht(this,e,dE,fE,zt,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const pE={},mE=(r,e)=>{const t=pE[e]||gT[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...r,props:{...r.props,is:t}}},gE=r=>new Proxy(class{},{construct(e,[t]){const n=t;return new Xg(mE(n,r))}}),tt=new Proxy(class{},{construct(r,[e]){const t=e;return new Xg(t)},get(r,e){return gE(e)}});function Ci(r,e,t){if(!Rh)return{task:void 0,start:()=>{},stop:()=>{},started:R_(!1)};let n,i,s;Bi.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=En();let a=o.mainStage;if(s){if(s.stage)if(Bi.isValue(s.stage))a=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);a=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const p=s.after[d];if(Bi.isValue(p)){a=p.stage;break}}else Bi.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const p=s.before[d];if(Bi.isValue(p)){a=p.stage;break}}else Bi.isValue(s.before)&&(a=s.before.stage)}const{autoInvalidations:c}=Ei("threlte-internal-context"),l=pn(!1),u=a.createTask(n,i,s),h=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.add(i),u.start()},f=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.delete(i),u.stop()};return(s==null?void 0:s.autoStart)??!0?h():f(),Ln(()=>{a&&a.removeTask(n)}),{task:u,start:h,stop:f,started:{subscribe:l.subscribe}}}function _E(r,e,t){const n=Ei("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(r in i||(i[r]=e),i)),n.current[r]):Nu(n,i=>i[r])}const Ih=()=>{const r=Ka(),e=pn(void 0);return yn(e,t=>{t&&Object.entries(r.$$.callbacks).forEach(n=>{const[i,s]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...s):t.$$.callbacks[i]=s})}),e},Dd=async r=>{if((navigator==null?void 0:navigator.xr)===void 0)return"unsupported";if(location.protocol!=="https:")return"insecure";try{return await navigator.xr.isSessionSupported(r)?"supported":"unsupported"}catch(e){return e.name==="SecurityError"?"blocked":"unsupported"}},Yr=_t(!1),go=_t(!1),Ti=_t(void 0),bu=_t(void 0),Ts=_t(void 0),Mu={left:_t(void 0),right:_t(void 0)},qg={left:_t(void 0),right:_t(void 0)},$g=_t({left:{enabled:!1,hovering:!1},right:{enabled:!1,hovering:!1}}),Dh={left:_t(void 0),right:_t(void 0)},Nh=_t({left:{enabled:!1,hovering:!1},right:{enabled:!1,hovering:!1}}),vE={left:_t(void 0),right:_t(void 0)},xE=(r,e)=>{if(!(r===void 0&&e===void 0))return r&&e===void 0?{optionalFeatures:[r]}:r&&e?{...e,optionalFeatures:[...new Set([...e.optionalFeatures??[],r])]}:e},yE=async(r,e,t)=>{const n=Ti.current,i=n!==void 0;if(t==="enter"&&i)return n;if(t==="exit"&&!i)return;if(i){await n.end(),Ti.set(void 0);return}if(Ts.current===void 0)throw new Error("An <XR> component was not created when attempting to toggle a session.");const s=xE(bu.current,e),o=await navigator.xr.requestSession(r,s);return await Ts.current.setSession(o),Ti.set(o),o};function bE(r){return{c:Et,l:Et,m:Et,p:Et,d:Et}}function ME(r){let e,t,n;function i(u,h){if(u[11]==="unsupported")return AE;if(u[11]==="insecure")return EE;if(u[11]==="blocked")return TE;if(u[11]==="supported")return SE}let s=i(r),o=s&&s(r),a=[r[4]],c={};for(let u=0;u<a.length;u+=1)c=ln(c,a[u]);function l(...u){return r[8](r[11],...u)}return{c(){e=Lu("button"),o&&o.c(),this.h()},l(u){e=Iu(u,"BUTTON",{});var h=Du(e);o&&o.l(h),h.forEach(Le),this.h()},h(){Wh(e,c)},m(u,h){Ne(u,e,h),o&&o.m(e,null),e.autofocus&&e.focus(),t||(n=w_(e,"click",l),t=!0)},p(u,h){r=u,s===(s=i(r))&&o?o.p(r,h):(o&&o.d(1),o=s&&s(r),o&&(o.c(),o.m(e,null))),Wh(e,c=bo(a,[h&16&&r[4]]))},d(u){u&&Le(e),o&&o.d(),t=!1,n()}}}function SE(r){let e=r[2]?"Exit":"Enter",t,n,i;return{c(){t=ws(e),n=ot(),i=ws(r[1])},l(s){t=Cs(s,e),n=at(s),i=Cs(s,r[1])},m(s,o){Ne(s,t,o),Ne(s,n,o),Ne(s,i,o)},p(s,o){o&4&&e!==(e=s[2]?"Exit":"Enter")&&Va(t,e),o&2&&Va(i,s[1])},d(s){s&&(Le(t),Le(n),Le(i))}}}function TE(r){let e,t;return{c(){e=ws(r[1]),t=ws(" blocked")},l(n){e=Cs(n,r[1]),t=Cs(n," blocked")},m(n,i){Ne(n,e,i),Ne(n,t,i)},p(n,i){i&2&&Va(e,n[1])},d(n){n&&(Le(e),Le(t))}}}function EE(r){let e;return{c(){e=ws("HTTPS needed")},l(t){e=Cs(t,"HTTPS needed")},m(t,n){Ne(t,e,n)},p:Et,d(t){t&&Le(e)}}}function AE(r){let e,t;return{c(){e=ws(r[1]),t=ws(" unsupported")},l(n){e=Cs(n,r[1]),t=Cs(n," unsupported")},m(n,i){Ne(n,e,i),Ne(n,t,i)},p(n,i){i&2&&Va(e,n[1])},d(n){n&&(Le(e),Le(t))}}}function wE(r){return{c:Et,l:Et,m:Et,p:Et,d:Et}}function CE(r){let e,t,n={ctx:r,current:null,token:null,hasCatch:!1,pending:wE,then:ME,catch:bE,value:11};return $h(t=Dd(r[0]),n),{c(){e=gt(),n.block.c()},l(i){e=gt(),n.block.l(i)},m(i,s){Ne(i,e,s),n.block.m(i,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e},p(i,[s]){r=i,n.ctx=r,s&1&&t!==(t=Dd(r[0]))&&$h(t,n)||I_(n,r,s)},i:Et,o:Et,d(i){i&&Le(e),n.block.d(i),n.token=null,n=null}}}function RE(r,e,t){let n;const i=["mode","sessionInit","force","styled"];let s=Wn(e,i),o,a;ft(r,Ts,_=>t(9,o=_)),ft(r,Ti,_=>t(2,a=_));let{mode:c}=e,{sessionInit:l=void 0}=e,{force:u=void 0}=e,{styled:h=!0}=e;const f=A_(),d=async(_,g)=>{if(!o)throw new Error("The <XR> component was not created. This is required to start an XR session.");if(f("click",{state:g,nativeEvent:_}),g==="supported")try{await yE(c,l,u)}catch(m){f("error",m)}},p=(_,g)=>d(g,_);return r.$$set=_=>{e=ln(ln({},e),As(_)),t(4,s=Wn(e,i)),"mode"in _&&t(0,c=_.mode),"sessionInit"in _&&t(5,l=_.sessionInit),"force"in _&&t(6,u=_.force),"styled"in _&&t(7,h=_.styled)},r.$$.update=()=>{r.$$.dirty&1&&t(1,n={"immersive-vr":"VR","immersive-ar":"AR",inline:"inline"}[c]),h&&t(4,s.style=`
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      border: 1px solid white;
      background: rgba(0, 0, 0, 0.1);
      color: white;
      outline: none;
      z-index: 10;
      ${s.style??""}
    `,s)},[c,n,a,d,s,l,u,h,p]}class PE extends kt{constructor(e){super(),Ht(this,e,RE,CE,zt,{mode:0,sessionInit:5,force:6,styled:7})}}function LE(r){let e,t;const n=[{sessionInit:{domOverlay:typeof document<"u"?{root:document.body}:void 0,requiredFeatures:["plane-detection"],optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers","hit-test"]}},r[0],{mode:"immersive-ar"}];let i={};for(let s=0;s<n.length;s+=1)i=ln(i,n[s]);return e=new PE({props:i}),e.$on("click",r[1]),e.$on("error",r[2]),{c(){Te(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){Ae(e,s,o),t=!0},p(s,[o]){const a=o&1?bo(n,[o&0&&{sessionInit:{domOverlay:typeof document<"u"?{root:document.body}:void 0,requiredFeatures:["plane-detection"],optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers","hit-test"]}},o&1&&Ja(s[0]),n[2]]):{};e.$set(a)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){we(e,s)}}}function IE(r,e,t){const n=[];let i=Wn(e,n);function s(a){Xh.call(this,r,a)}function o(a){Xh.call(this,r,a)}return r.$$set=a=>{e=ln(ln({},e),As(a)),t(0,i=Wn(e,n))},[i,s,o]}class DE extends kt{constructor(e){super(),Ht(this,e,IE,LE,zt,{})}}const Nd=new Yt,Ca=new w;class Yg extends Th{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ie(e,3)),this.setAttribute("uv",new Ie(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ja(t,6,1);return this.setAttribute("instanceStart",new Pn(n,3,0)),this.setAttribute("instanceEnd",new Pn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ja(t,6,1);return this.setAttribute("instanceColorStart",new Pn(n,3,0)),this.setAttribute("instanceColorEnd",new Pn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ph(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Nd.setFromBufferAttribute(t),this.boundingBox.union(Nd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ca.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ca)),Ca.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ca));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new J(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};bn.line={uniforms:cc.merge([ge.common,ge.fog,ge.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Uh extends zn{constructor(e){super({type:"LineMaterial",uniforms:cc.clone(bn.line.uniforms),vertexShader:bn.line.vertexShader,fragmentShader:bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Ud=new w,Od=new w,rn=new dt,on=new dt,ni=new dt,El=new w,Al=new He,an=new Og,Fd=new w,Ra=new Yt,Pa=new jt,ii=new dt;let oi,Es;function Bd(r,e,t){return ii.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ii.multiplyScalar(1/ii.w),ii.x=Es/t.width,ii.y=Es/t.height,ii.applyMatrix4(r.projectionMatrixInverse),ii.multiplyScalar(1/ii.w),Math.abs(Math.max(ii.x,ii.y))}function NE(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){an.start.fromBufferAttribute(i,a),an.end.fromBufferAttribute(s,a),an.applyMatrix4(t);const l=new w,u=new w;oi.distanceSqToSegment(an.start,an.end,u,l),u.distanceTo(l)<Es*.5&&e.push({point:u,pointOnLine:l,distance:oi.origin.distanceTo(u),object:r,face:null,faceIndex:a,uv:null,uv1:null})}}function UE(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;oi.at(1,ni),ni.w=1,ni.applyMatrix4(e.matrixWorldInverse),ni.applyMatrix4(n),ni.multiplyScalar(1/ni.w),ni.x*=s.x/2,ni.y*=s.y/2,ni.z=0,El.copy(ni),Al.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(rn.fromBufferAttribute(c,f),on.fromBufferAttribute(l,f),rn.w=1,on.w=1,rn.applyMatrix4(Al),on.applyMatrix4(Al),rn.z>h&&on.z>h)continue;if(rn.z>h){const v=rn.z-on.z,y=(rn.z-h)/v;rn.lerp(on,y)}else if(on.z>h){const v=on.z-rn.z,y=(on.z-h)/v;on.lerp(rn,y)}rn.applyMatrix4(n),on.applyMatrix4(n),rn.multiplyScalar(1/rn.w),on.multiplyScalar(1/on.w),rn.x*=s.x/2,rn.y*=s.y/2,on.x*=s.x/2,on.y*=s.y/2,an.start.copy(rn),an.start.z=0,an.end.copy(on),an.end.z=0;const _=an.closestPointToPointParameter(El,!0);an.at(_,Fd);const g=rc.lerp(rn.z,on.z,_),m=g>=-1&&g<=1,x=El.distanceTo(Fd)<Es*.5;if(m&&x){an.start.fromBufferAttribute(c,f),an.end.fromBufferAttribute(l,f),an.start.applyMatrix4(o),an.end.applyMatrix4(o);const v=new w,y=new w;oi.distanceSqToSegment(an.start,an.end,y,v),t.push({point:y,pointOnLine:v,distance:oi.origin.distanceTo(y),object:r,face:null,faceIndex:f,uv:null,uv1:null})}}}class OE extends At{constructor(e=new Yg,t=new Uh({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Ud.fromBufferAttribute(t,o),Od.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Ud.distanceTo(Od);const s=new ja(i,2,1);return e.setAttribute("instanceDistanceStart",new Pn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Pn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;oi=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Es=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Pa.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Es*.5;else{const h=Math.max(i.near,Pa.distanceToPoint(oi.origin));l=Bd(i,h,c.resolution)}if(Pa.radius+=l,oi.intersectsSphere(Pa)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ra.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Es*.5;else{const h=Math.max(i.near,Ra.distanceToPoint(oi.origin));u=Bd(i,h,c.resolution)}Ra.expandByScalar(u),oi.intersectsBox(Ra)!==!1&&(n?NE(this,t):UE(this,i,t))}}class jg extends Yg{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class FE extends OE{constructor(e=new jg,t=new Uh({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function BE(r){let e,t,n,i;return e=new tt({props:{is:r[2]}}),n=new tt({props:{is:Uh,linewidth:.004}}),{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=at(s),Ee(n.$$.fragment,s)},m(s,o){Ae(e,s,o),Ne(s,t,o),Ae(n,s,o),i=!0},p:Et,i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){q(e.$$.fragment,s),q(n.$$.fragment,s),i=!1},d(s){s&&Le(t),we(e,s),we(n,s)}}}function zE(r){let e,t;return e=new tt({props:{is:FE,visible:r[0]!==void 0,"position.z":-.01,$$slots:{default:[BE]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.visible=n[0]!==void 0),i&64&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function kE(r){let e;const t=r[5].default,n=yt(t,r,r[6],null),i=n||zE(r);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,[o]){n?n.p&&(!e||o&64)&&bt(n,t,s,s[6],e?St(t,s[6],o,null):Mt(s[6]),null):i&&i.p&&(!e||o&1)&&i.p(s,e?o:-1)},i(s){e||(H(i,s),e=!0)},o(s){q(i,s),e=!1},d(s){i&&i.d(s)}}}const wl=40;function HE(r,e,t){let n,i,s=Et,o=()=>(s(),s=yo(n,E=>t(0,i=E)),n);r.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:c}=e,{handedness:l}=e,{targetRay:u}=e,h=new jg;const f=new w,d=new w,p=new xc,_=new Float32Array(wl*3),g=new w,m=new J,x=new J,v=(E=.3)=>{if(n.current===void 0)return;const S=n.current.point;u.getWorldPosition(f),d.x=(f.x+S.x)/2,d.y=(f.y+S.y)/2,d.z=(f.z+S.z)/2;const R=Math.log1p(m.set(f.x,f.z).distanceTo(x.set(S.x,S.z)));d.y+=R,p.v0.lerp(f,E),p.v1.lerp(d,E),p.v2.lerp(S,E);for(let b=0,T=0;b<wl;b+=1,T+=3){const O=b/wl;p.getPoint(O,g),_[T+0]=g.x,_[T+1]=g.y,_[T+2]=g.z}h.setPositions(_)},{start:y,stop:M}=Ci(()=>{v()},{autoStart:!1});return r.$$set=E=>{"handedness"in E&&t(3,l=E.handedness),"targetRay"in E&&t(4,u=E.targetRay),"$$scope"in E&&t(6,c=E.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&o(t(1,n=Dh[l])),r.$$.dirty&1&&(i===void 0?M():(v(1),y()))},[i,n,h,l,u,a,c]}class Zg extends kt{constructor(e){super(),Ht(this,e,HE,kE,zt,{handedness:3,targetRay:4})}}function zd(r){return Object.prototype.toString.call(r)==="[object Date]"}function Su(r,e,t,n){if(typeof t=="number"||zd(t)){const i=n-t,s=(t-e)/(r.dt||1/60),o=r.opts.stiffness*i,a=r.opts.damping*s,c=(o-a)*r.inv_mass,l=(s+c)*r.dt;return Math.abs(l)<r.opts.precision&&Math.abs(i)<r.opts.precision?n:(r.settled=!1,zd(t)?new Date(t.getTime()+l):t+l)}else{if(Array.isArray(t))return t.map((i,s)=>Su(r,e[s],t[s],n[s]));if(typeof t=="object"){const i={};for(const s in t)i[s]=Su(r,e[s],t[s],n[s]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function VE(r,e={}){const t=pn(r),{stiffness:n=.15,damping:i=.8,precision:s=.01}=e;let o,a,c,l=r,u=r,h=1,f=0,d=!1;function p(g,m={}){u=g;const x=c={};return r==null||m.hard||_.stiffness>=1&&_.damping>=1?(d=!0,o=qh(),l=g,t.set(r=u),Promise.resolve()):(m.soft&&(f=1/((m.soft===!0?.5:+m.soft)*60),h=0),a||(o=qh(),d=!1,a=L_(v=>{if(d)return d=!1,a=null,!1;h=Math.min(h+f,1);const y={inv_mass:h,opts:_,settled:!0,dt:(v-o)*60/1e3},M=Su(y,l,r,u);return o=v,l=r,t.set(r=M),y.settled&&(a=null),!y.settled})),new Promise(v=>{a.promise.then(()=>{x===c&&v()})}))}const _={set:p,update:(g,m)=>p(g(u,r),m),subscribe:t.subscribe,stiffness:n,damping:i,precision:s};return _}function GE(r){let e,t,n,i;return e=new tt.PlaneGeometry({}),n=new tt({props:{is:r[1]}}),{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=at(s),Ee(n.$$.fragment,s)},m(s,o){Ae(e,s,o),Ne(s,t,o),Ae(n,s,o),i=!0},p(s,o){const a={};o&2&&(a.is=s[1]),n.$set(a)},i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){q(e.$$.fragment,s),q(n.$$.fragment,s),i=!1},d(s){s&&Le(t),we(e,s),we(n,s)}}}function WE(r){let e,t;return e=new tt.Mesh({props:{scale:r[0],$$slots:{default:[GE]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.scale=n[0]),i&66&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function XE(r,e,t){let{color:n=new ve("white")}=e,{size:i=.03}=e,{thickness:s=.035}=e;const o=`
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;
    attribute vec2 uv;
    attribute vec3 position;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,a=`
    precision mediump float;
    uniform float thickness;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      float radius = 0.1;
      float dist = length(vUv - vec2(0.5));
      float alpha = 1.0 - step(thickness, abs(distance(vUv, vec2(0.5)) - 0.25));
      gl_FragColor = vec4(color, alpha);
    }
  `,c=new mh({vertexShader:o,fragmentShader:a,uniforms:{thickness:{value:s},color:{value:n}},side:Un,transparent:!0,depthTest:!1});return r.$$set=l=>{"color"in l&&t(2,n=l.color),"size"in l&&t(0,i=l.size),"thickness"in l&&t(3,s=l.thickness)},r.$$.update=()=>{r.$$.dirty&8&&t(1,c.uniforms.thickness.value=s,c),r.$$.dirty&4&&t(1,c.uniforms.color.value=n,c)},[i,c,n,s]}class Kg extends kt{constructor(e){super(),Ht(this,e,XE,WE,zt,{color:2,size:0,thickness:3})}}function qE(r){let e,t;return e=new Kg({props:{size:r[2],thickness:.015}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.size=n[2]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function $E(r){let e;const t=r[6].default,n=yt(t,r,r[7],null),i=n||qE(r);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){n?n.p&&(!e||o&128)&&bt(n,t,s,s[7],e?St(t,s[7],o,null):Mt(s[7]),null):i&&i.p&&(!e||o&4)&&i.p(s,e?o:-1)},i(s){e||(H(i,s),e=!0)},o(s){q(i,s),e=!1},d(s){i&&i.d(s)}}}function YE(r){let e,t;return e=new tt({props:{is:r[3],visible:r[0]!==void 0,$$slots:{default:[$E]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.visible=n[0]!==void 0),i&132&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function jE(r,e,t){let n,i,s=Et,o=()=>(s(),s=yo(n,x=>t(0,i=x)),n),a;r.$$.on_destroy.push(()=>s());let{$$slots:c={},$$scope:l}=e,{handedness:u}=e;const h=new Gn,f=new w,d=new Ke,p=new w,{start:_,stop:g}=Ci(()=>{if(n.current===void 0)return;const{point:x,face:v,object:y}=n.current;h.position.lerp(x,.4),v&&(d.getNormalMatrix(y.matrixWorld),p.copy(v.normal).applyMatrix3(d).normalize(),h.lookAt(f.addVectors(x,p)))},{autoStart:!1}),m=VE(.1,{stiffness:.2});return ft(r,m,x=>t(2,a=x)),r.$$set=x=>{"handedness"in x&&t(5,u=x.handedness),"$$scope"in x&&t(7,l=x.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&o(t(1,n=Dh[u])),r.$$.dirty&1&&(i===void 0?(m.set(.1),g()):(m.set(1),h.position.copy(i.point),_()))},[i,n,a,h,m,u,c,l]}class Jg extends kt{constructor(e){super(),Ht(this,e,jE,YE,zt,{handedness:5})}}function ZE(r){let e;const t=r[1].default,n=yt(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&bt(n,t,i,i[4],e?St(t,i[4],s,null):Mt(i[4]),null)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function KE(r){let e,t;return e=new zg({props:{onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[ZE]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,[i]){const s={};i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function JE(r,e,t){let{$$slots:n={},$$scope:i}=e;const{scene:s}=En(),o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class Qg extends kt{constructor(e){super(),Ht(this,e,JE,KE,zt,{})}}function QE(r){let e,t,n,i;return e=new tt.CylinderGeometry({props:{args:[.002,.002,.2,16,1,!1]}}),n=new tt.RawShaderMaterial({props:{transparent:!0,vertexShader:`
          uniform mat4 modelViewMatrix;
          uniform mat4 projectionMatrix;
          attribute vec2 uv;
          attribute vec3 position;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          precision mediump float;
          varying vec2 vUv;
          void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, pow(vUv.y - 1.0, 2.0));
          }
        `}}),{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=at(s),Ee(n.$$.fragment,s)},m(s,o){Ae(e,s,o),Ne(s,t,o),Ae(n,s,o),i=!0},p:Et,i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){q(e.$$.fragment,s),q(n.$$.fragment,s),i=!1},d(s){s&&Le(t),we(e,s),we(n,s)}}}function eA(r){let e,t;return e=new tt.Mesh({props:{"rotation.x":-Math.PI/2,"position.z":-.1,$$slots:{default:[QE]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&256&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function tA(r){let e;const t=r[7].default,n=yt(t,r,r[8],null),i=n||eA(r);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&256)&&bt(n,t,s,s[8],e?St(t,s[8],o,null):Mt(s[8]),null)},i(s){e||(H(i,s),e=!0)},o(s){q(i,s),e=!1},d(s){i&&i.d(s)}}}function nA(r){let e,t;return e=new tt.Group({props:{visible:r[0],$$slots:{default:[tA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.visible=n[0]),i&256&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function iA(r,e,t){let n,i,s,o,a=Et,c=()=>(a(),a=yo(i,p=>t(4,o=p)),i),l,u;ft(r,Nh,p=>t(5,l=p)),ft(r,$g,p=>t(6,u=p)),r.$$.on_destroy.push(()=>a());let{$$slots:h={},$$scope:f}=e,{handedness:d}=e;return r.$$set=p=>{"handedness"in p&&t(2,d=p.handedness),"$$scope"in p&&t(8,f=p.$$scope)},r.$$.update=()=>{r.$$.dirty&68&&t(3,n=u[d].hovering),r.$$.dirty&4&&c(t(1,i=Dh[d])),r.$$.dirty&60&&t(0,s=l[d].enabled||n&&o===void 0)},[s,i,d,n,o,l,u,h,f]}class e_ extends kt{constructor(e){super(),Ht(this,e,iA,nA,zt,{handedness:2})}}function sA(r){let e,t;return e=new Kg({}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function rA(r){let e;const t=r[5].default,n=yt(t,r,r[6],null),i=n||sA();return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&64)&&bt(n,t,s,s[6],e?St(t,s[6],o,null):Mt(s[6]),null)},i(s){e||(H(i,s),e=!0)},o(s){q(i,s),e=!1},d(s){i&&i.d(s)}}}function oA(r){let e,t;return e=new tt({props:{is:r[1],visible:r[0],$$slots:{default:[rA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.visible=n[0]),i&64&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function aA(r,e,t){let n,i,s;ft(r,Nh,_=>t(4,s=_));let{$$slots:o={},$$scope:a}=e,{handedness:c}=e;const l=new Gn,u=new w,h=new Ke,f=new w,{start:d,stop:p}=Ci(()=>{if(i.current===void 0)return;const{point:_,face:g,object:m}=i.current;l.position.lerp(_,.4),g&&(h.getNormalMatrix(m.matrixWorld),f.copy(g.normal).applyMatrix3(h).normalize(),l.lookAt(u.addVectors(_,f)))},{autoStart:!1});return r.$$set=_=>{"handedness"in _&&t(2,c=_.handedness),"$$scope"in _&&t(6,a=_.$$scope)},r.$$.update=()=>{r.$$.dirty&20&&t(0,n=s[c].hovering),r.$$.dirty&4&&t(3,i=vE[c]),r.$$.dirty&9&&(n?(l.position.copy(i.current.point),d()):p())},[n,l,c,i,s,o,a]}class t_ extends kt{constructor(e){super(),Ht(this,e,aA,oA,zt,{handedness:2})}}const Oh=_t(void 0),Fh=_t(void 0),n_=_t(void 0),Za=r=>{switch(r){case"left":return Oh;case"right":return Fh;case"none":return n_;default:throw new Error("useController handedness must be left, right, or none.")}},cA=r=>({}),kd=r=>({}),lA=r=>({}),Hd=r=>({}),uA=r=>({}),Vd=r=>({}),hA=r=>({}),Gd=r=>({}),fA=r=>({}),Wd=r=>({}),dA=r=>({}),Xd=r=>({});function qd(r){let e,t,n,i=r[5]&&$d(r),s=r[4]&&Yd(r);return{c(){i&&i.c(),e=ot(),s&&s.c(),t=gt()},l(o){i&&i.l(o),e=at(o),s&&s.l(o),t=gt()},m(o,a){i&&i.m(o,a),Ne(o,e,a),s&&s.m(o,a),Ne(o,t,a),n=!0},p(o,a){o[5]?i?(i.p(o,a),a&32&&H(i,1)):(i=$d(o),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(Wt(),q(i,1,1,()=>{i=null}),Xt()),o[4]?s?(s.p(o,a),a&16&&H(s,1)):(s=Yd(o),s.c(),H(s,1),s.m(t.parentNode,t)):s&&(Wt(),q(s,1,1,()=>{s=null}),Xt())},i(o){n||(H(i),H(s),n=!0)},o(o){q(i),q(s),n=!1},d(o){o&&(Le(e),Le(t)),i&&i.d(o),s&&s.d(o)}}}function $d(r){let e,t;return e=new tt({props:{is:r[5],$$slots:{default:[mA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&32&&(s.is=n[5]),i&131080&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function pA(r){let e,t;return e=new tt({props:{is:r[3]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.is=n[3]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function mA(r){let e,t;const n=r[16].default,i=yt(n,r,r[17],null),s=i||pA(r),o=r[16].grip,a=yt(o,r,r[17],Xd);return{c(){s&&s.c(),e=ot(),a&&a.c()},l(c){s&&s.l(c),e=at(c),a&&a.l(c)},m(c,l){s&&s.m(c,l),Ne(c,e,l),a&&a.m(c,l),t=!0},p(c,l){i?i.p&&(!t||l&131072)&&bt(i,n,c,c[17],t?St(n,c[17],l,null):Mt(c[17]),null):s&&s.p&&(!t||l&8)&&s.p(c,t?l:-1),a&&a.p&&(!t||l&131072)&&bt(a,o,c,c[17],t?St(o,c[17],l,dA):Mt(c[17]),Xd)},i(c){t||(H(s,c),H(a,c),t=!0)},o(c){q(s,c),q(a,c),t=!1},d(c){c&&Le(e),s&&s.d(c),a&&a.d(c)}}}function Yd(r){let e,t;return e=new tt({props:{is:r[4],$$slots:{default:[xA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.is=n[4]),i&131591&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function jd(r){let e,t,n,i;const s=[_A,gA],o=[];function a(c,l){return c[9]["pointer-ray"]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=gt()},l(c){t.l(c),n=gt()},m(c,l){o[e].m(c,l),Ne(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(Wt(),q(o[u],1,1,()=>{o[u]=null}),Xt(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),H(t,1),t.m(n.parentNode,n))},i(c){i||(H(t),i=!0)},o(c){q(t),i=!1},d(c){c&&Le(n),o[e].d(c)}}}function gA(r){let e,t;return e=new e_({props:{handedness:r[0]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function _A(r){let e,t;return e=new e_({props:{handedness:r[0],$$slots:{default:[vA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function vA(r){let e;const t=r[16]["pointer-ray"],n=yt(t,r,r[17],Gd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,hA):Mt(i[17]),Gd)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function xA(r){let e,t,n;const i=r[16]["target-ray"],s=yt(i,r,r[17],Wd);let o=(r[2]||r[1])&&jd(r);return{c(){s&&s.c(),e=ot(),o&&o.c(),t=gt()},l(a){s&&s.l(a),e=at(a),o&&o.l(a),t=gt()},m(a,c){s&&s.m(a,c),Ne(a,e,c),o&&o.m(a,c),Ne(a,t,c),n=!0},p(a,c){s&&s.p&&(!n||c&131072)&&bt(s,i,a,a[17],n?St(i,a[17],c,fA):Mt(a[17]),Wd),a[2]||a[1]?o?(o.p(a,c),c&6&&H(o,1)):(o=jd(a),o.c(),H(o,1),o.m(t.parentNode,t)):o&&(Wt(),q(o,1,1,()=>{o=null}),Xt())},i(a){n||(H(s,a),H(o),n=!0)},o(a){q(s,a),q(o),n=!1},d(a){a&&(Le(e),Le(t)),s&&s.d(a),o&&o.d(a)}}}function Zd(r){let e,t,n,i;const s=[bA,yA],o=[];function a(c,l){return c[9]["pointer-cursor"]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=gt()},l(c){t.l(c),n=gt()},m(c,l){o[e].m(c,l),Ne(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(Wt(),q(o[u],1,1,()=>{o[u]=null}),Xt(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),H(t,1),t.m(n.parentNode,n))},i(c){i||(H(t),i=!0)},o(c){q(t),i=!1},d(c){c&&Le(n),o[e].d(c)}}}function yA(r){let e,t;return e=new t_({props:{handedness:r[0]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function bA(r){let e,t;return e=new t_({props:{handedness:r[0],$$slots:{default:[MA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function MA(r){let e;const t=r[16]["pointer-cursor"],n=yt(t,r,r[17],Vd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,uA):Mt(i[17]),Vd)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function Kd(r){let e,t,n,i,s,o,a;const c=[TA,SA],l=[];function u(p,_){return p[9]["teleport-ray"]?0:1}e=u(r),t=l[e]=c[e](r);const h=[wA,AA],f=[];function d(p,_){return p[9]["teleport-ray"]?0:1}return i=d(r),s=f[i]=h[i](r),{c(){t.c(),n=ot(),s.c(),o=gt()},l(p){t.l(p),n=at(p),s.l(p),o=gt()},m(p,_){l[e].m(p,_),Ne(p,n,_),f[i].m(p,_),Ne(p,o,_),a=!0},p(p,_){let g=e;e=u(p),e===g?l[e].p(p,_):(Wt(),q(l[g],1,1,()=>{l[g]=null}),Xt(),t=l[e],t?t.p(p,_):(t=l[e]=c[e](p),t.c()),H(t,1),t.m(n.parentNode,n));let m=i;i=d(p),i===m?f[i].p(p,_):(Wt(),q(f[m],1,1,()=>{f[m]=null}),Xt(),s=f[i],s?s.p(p,_):(s=f[i]=h[i](p),s.c()),H(s,1),s.m(o.parentNode,o))},i(p){a||(H(t),H(s),a=!0)},o(p){q(t),q(s),a=!1},d(p){p&&(Le(n),Le(o)),l[e].d(p),f[i].d(p)}}}function SA(r){let e,t;return e=new Zg({props:{targetRay:r[4],handedness:r[0]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.targetRay=n[4]),i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function TA(r){let e,t;return e=new Zg({props:{targetRay:r[4],handedness:r[0],$$slots:{default:[EA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.targetRay=n[4]),i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function EA(r){let e;const t=r[16]["teleport-ray"],n=yt(t,r,r[17],Hd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,lA):Mt(i[17]),Hd)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function AA(r){let e,t;return e=new Jg({props:{handedness:r[0]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function wA(r){let e,t;return e=new Jg({props:{handedness:r[0],$$slots:{default:[CA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function CA(r){let e;const t=r[16]["teleport-cursor"],n=yt(t,r,r[17],kd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,cA):Mt(i[17]),kd)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function RA(r){let e,t,n,i=r[2]&&Zd(r),s=r[1]&&r[4]!==void 0&&Kd(r);return{c(){i&&i.c(),e=ot(),s&&s.c(),t=gt()},l(o){i&&i.l(o),e=at(o),s&&s.l(o),t=gt()},m(o,a){i&&i.m(o,a),Ne(o,e,a),s&&s.m(o,a),Ne(o,t,a),n=!0},p(o,a){o[2]?i?(i.p(o,a),a&4&&H(i,1)):(i=Zd(o),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(Wt(),q(i,1,1,()=>{i=null}),Xt()),o[1]&&o[4]!==void 0?s?(s.p(o,a),a&18&&H(s,1)):(s=Kd(o),s.c(),H(s,1),s.m(t.parentNode,t)):s&&(Wt(),q(s,1,1,()=>{s=null}),Xt())},i(o){n||(H(i),H(s),n=!0)},o(o){q(i),q(s),n=!1},d(o){o&&(Le(e),Le(t)),i&&i.d(o),s&&s.d(o)}}}function PA(r){let e,t,n,i=!r[7]&&qd(r);return t=new Qg({props:{$$slots:{default:[RA]},$$scope:{ctx:r}}}),{c(){i&&i.c(),e=ot(),Te(t.$$.fragment)},l(s){i&&i.l(s),e=at(s),Ee(t.$$.fragment,s)},m(s,o){i&&i.m(s,o),Ne(s,e,o),Ae(t,s,o),n=!0},p(s,[o]){s[7]?i&&(Wt(),q(i,1,1,()=>{i=null}),Xt()):i?(i.p(s,o),o&128&&H(i,1)):(i=qd(s),i.c(),H(i,1),i.m(e.parentNode,e));const a={};o&131607&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){n||(H(i),H(t.$$.fragment,s),n=!0)},o(s){q(i),q(t.$$.fragment,s),n=!1},d(s){s&&Le(e),i&&i.d(s),we(t,s)}}}const LA={left:Oh,right:Fh};function IA(r,e,t){let n,i,s,o,a,c,l,u,h,f,d=Et,p=()=>(d(),d=yo(n,R=>t(15,f=R)),n),_;ft(r,$g,R=>t(13,u=R)),ft(r,Nh,R=>t(14,h=R)),ft(r,go,R=>t(7,_=R)),r.$$.on_destroy.push(()=>d());let{$$slots:g={},$$scope:m}=e;const x=Cp(g);let{left:v=void 0}=e,{right:y=void 0}=e,{hand:M=void 0}=e;const E=Lo(),S=pn(v?"left":y?"right":M);return ft(r,S,R=>t(0,l=R)),Mu[l].set(E),r.$$set=R=>{"left"in R&&t(10,v=R.left),"right"in R&&t(11,y=R.right),"hand"in R&&t(12,M=R.hand),"$$scope"in R&&t(17,m=R.$$scope)},r.$$.update=()=>{r.$$.dirty&7168&&S.set(v?"left":y?"right":M),r.$$.dirty&1&&Mu[l].set(E),r.$$.dirty&1&&p(t(6,n=LA[l])),r.$$.dirty&32768&&t(5,i=f==null?void 0:f.grip),r.$$.dirty&32768&&t(4,s=f==null?void 0:f.targetRay),r.$$.dirty&32768&&t(3,o=f==null?void 0:f.model),r.$$.dirty&16385&&t(2,a=h[l].enabled),r.$$.dirty&8193&&t(1,c=u[l].enabled)},[l,c,a,o,s,i,n,_,S,x,v,y,M,u,h,f,g,m]}class Tu extends kt{constructor(e){super(),Ht(this,e,IA,PA,zt,{left:10,right:11,hand:12})}}const i_=_t(void 0),s_=_t(void 0),DA=r=>({}),Jd=r=>({}),NA=r=>({}),Qd=r=>({});function ep(r){let e,t,n,i;e=new tt({props:{is:r[0].hand,$$slots:{default:[UA]},$$scope:{ctx:r}}});let s=r[6]["target-ray"]!==void 0&&np(r);return{c(){Te(e.$$.fragment),t=ot(),s&&s.c(),n=gt()},l(o){Ee(e.$$.fragment,o),t=at(o),s&&s.l(o),n=gt()},m(o,a){Ae(e,o,a),Ne(o,t,a),s&&s.m(o,a),Ne(o,n,a),i=!0},p(o,a){const c={};a&1&&(c.is=o[0].hand),a&16456&&(c.$$scope={dirty:a,ctx:o}),e.$set(c),o[6]["target-ray"]!==void 0?s?(s.p(o,a),a&64&&H(s,1)):(s=np(o),s.c(),H(s,1),s.m(n.parentNode,n)):s&&(Wt(),q(s,1,1,()=>{s=null}),Xt())},i(o){i||(H(e.$$.fragment,o),H(s),i=!0)},o(o){q(e.$$.fragment,o),q(s),i=!1},d(o){o&&(Le(t),Le(n)),we(e,o),s&&s.d(o)}}}function tp(r){let e,t;return e=new tt({props:{is:r[3]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.is=n[3]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function UA(r){let e,t,n=r[6].default===void 0&&tp(r);return{c(){n&&n.c(),e=gt()},l(i){n&&n.l(i),e=gt()},m(i,s){n&&n.m(i,s),Ne(i,e,s),t=!0},p(i,s){i[6].default===void 0?n?(n.p(i,s),s&64&&H(n,1)):(n=tp(i),n.c(),H(n,1),n.m(e.parentNode,e)):n&&(Wt(),q(n,1,1,()=>{n=null}),Xt())},i(i){t||(H(n),t=!0)},o(i){q(n),t=!1},d(i){i&&Le(e),n&&n.d(i)}}}function np(r){let e,t;return e=new tt({props:{is:r[0].targetRay,$$slots:{default:[OA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.is=n[0].targetRay),i&16384&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function OA(r){let e;const t=r[12]["target-ray"],n=yt(t,r,r[14],Qd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16384)&&bt(n,t,i,i[14],e?St(t,i[14],s,NA):Mt(i[14]),Qd)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function ip(r){let e,t;return e=new Qg({props:{$$slots:{default:[BA]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&16388&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function FA(r){let e,t;const n=r[12].wrist,i=yt(n,r,r[14],Jd),s=r[12].default,o=yt(s,r,r[14],null);return{c(){i&&i.c(),e=ot(),o&&o.c()},l(a){i&&i.l(a),e=at(a),o&&o.l(a)},m(a,c){i&&i.m(a,c),Ne(a,e,c),o&&o.m(a,c),t=!0},p(a,c){i&&i.p&&(!t||c&16384)&&bt(i,n,a,a[14],t?St(n,a[14],c,DA):Mt(a[14]),Jd),o&&o.p&&(!t||c&16384)&&bt(o,s,a,a[14],t?St(s,a[14],c,null):Mt(a[14]),null)},i(a){t||(H(i,a),H(o,a),t=!0)},o(a){q(i,a),q(o,a),t=!1},d(a){a&&Le(e),i&&i.d(a),o&&o.d(a)}}}function BA(r){let e,t,n;function i(o){r[13](o)}let s={$$slots:{default:[FA]},$$scope:{ctx:r}};return r[2]!==void 0&&(s.ref=r[2]),e=new tt.Group({props:s}),Ar.push(()=>Pp(e,"ref",i)),{c(){Te(e.$$.fragment)},l(o){Ee(e.$$.fragment,o)},m(o,a){Ae(e,o,a),n=!0},p(o,a){const c={};a&16384&&(c.$$scope={dirty:a,ctx:o}),!t&&a&4&&(t=!0,c.ref=o[2],Rp(()=>t=!1)),e.$set(c)},i(o){n||(H(e.$$.fragment,o),n=!0)},o(o){q(e.$$.fragment,o),n=!1},d(o){we(e,o)}}}function zA(r){var o;let e,t,n,i=((o=r[0])==null?void 0:o.hand)&&r[1]&&ep(r),s=r[1]&&ip(r);return{c(){i&&i.c(),e=ot(),s&&s.c(),t=gt()},l(a){i&&i.l(a),e=at(a),s&&s.l(a),t=gt()},m(a,c){i&&i.m(a,c),Ne(a,e,c),s&&s.m(a,c),Ne(a,t,c),n=!0},p(a,[c]){var l;(l=a[0])!=null&&l.hand&&a[1]?i?(i.p(a,c),c&3&&H(i,1)):(i=ep(a),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(Wt(),q(i,1,1,()=>{i=null}),Xt()),a[1]?s?(s.p(a,c),c&2&&H(s,1)):(s=ip(a),s.c(),H(s,1),s.m(t.parentNode,t)):s&&(Wt(),q(s,1,1,()=>{s=null}),Xt())},i(a){n||(H(i),H(s),n=!0)},o(a){q(i),q(s),n=!1},d(a){a&&(Le(e),Le(t)),i&&i.d(a),s&&s.d(a)}}}const kA={left:i_,right:s_};function HA(r,e,t){let n,i,s,o,a=Et,c=()=>(a(),a=yo(n,b=>t(0,o=b)),n),l,u;ft(r,go,b=>t(1,u=b)),r.$$.on_destroy.push(()=>a());let{$$slots:h={},$$scope:f}=e;const d=Cp(h);let{left:p=void 0}=e,{right:_=void 0}=e,{hand:g=void 0}=e;const m=Lo(),{xr:x}=En().renderer,v=x.getReferenceSpace(),y=pn(p?"left":_?"right":g);ft(r,y,b=>t(11,l=b));let M;const{start:E,stop:S}=Ci(()=>{var D;const b=x.getFrame(),T=i.get("wrist");if(T===void 0||v===null)return;const O=(D=b.getJointPose)==null?void 0:D.call(b,T,v);if(O==null)return;const{position:z,orientation:ee}=O.transform;M.position.set(z.x,z.y,z.z),M.quaternion.set(ee.x,ee.y,ee.z,ee.w)},{autoStart:!1});function R(b){M=b,t(2,M)}return r.$$set=b=>{"left"in b&&t(7,p=b.left),"right"in b&&t(8,_=b.right),"hand"in b&&t(9,g=b.hand),"$$scope"in b&&t(14,f=b.$$scope)},r.$$.update=()=>{r.$$.dirty&896&&y.set(p?"left":_?"right":g),r.$$.dirty&2048&&qg[l].set(m),r.$$.dirty&1&&t(10,i=o==null?void 0:o.inputSource),r.$$.dirty&1026&&(u&&(d.wrist||d.default)&&i?E():S()),r.$$.dirty&2048&&c(t(4,n=kA[l])),r.$$.dirty&1&&t(3,s=o==null?void 0:o.model)},[o,u,M,s,n,y,d,p,_,g,i,l,h,R,f]}class Eu extends kt{constructor(e){super(),Ht(this,e,HA,zA,zt,{left:7,right:8,hand:9})}}const VA={isPresenting:Yr,isHandTracking:go,session:Ti,xrFrame:{get current(){return Ts.current.getFrame()}}},GA=()=>VA,La=new Gn,WA=()=>{const{renderer:r,camera:e}=En(),{xr:t}=r,n=Ci(()=>{const s=t.getReferenceSpace();if(s===null)return;const o=t.getFrame().getViewerPose(s);if(o==null)return;const{position:a,orientation:c}=o.transform;La.position.set(a.x,a.y,a.z),La.quaternion.set(c.x,c.y,c.z,c.w)},{autoStart:!1,autoInvalidate:!1}),i=Ci(()=>{La.position.copy(e.current.position),La.quaternion.copy(e.current.quaternion)},{autoStart:!1,autoInvalidate:!1});yn(GA().isPresenting,s=>{s?(n.start(),i.stop()):(n.stop(),i.start())})},XA=()=>{if(typeof window>"u")return;const r=t=>requestAnimationFrame(t),e={fn:r};P_(t=>e.fn(t)),yn(Ti,t=>{t?e.fn=n=>t.requestAnimationFrame(n):e.fn=r}),Ln(()=>e.fn=r)};function sp(r,e){if(e===Tm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Xa||e===qu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Xa)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class r_ extends Tn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ZA(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new l1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Wi.extractUrlBase(e);o=Wi.resolveURL(l,this.path)}else o=Wi.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Zn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===o_){try{o[lt.KHR_BINARY_GLTF]=new u1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new S1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new YA;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new h1(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new f1;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new d1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function qA(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $A{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new ve(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],sn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sh(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Mh(u),l.distance=h;break;case"spot":l=new bh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class YA{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(i)}}class jA{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ZA{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(a,a)}return Promise.all(s)}}class KA{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class JA{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class QA{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class e1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class t1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class n1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(s)}}class i1{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class s1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class r1{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class o1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class a1{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class c1{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class l1{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Vn.TRIANGLES&&l.mode!==Vn.TRIANGLE_STRIP&&l.mode!==Vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const p of h){const _=new He,g=new w,m=new nn,x=new w(1,1,1),v=new mc(p.geometry,p.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(g,m,x));for(const y in c)if(y==="_COLOR_0"){const M=c[y];v.instanceColor=new Ls(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);ut.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const o_="glTF",Xr=12,rp={JSON:1313821514,BIN:5130562};class u1{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xr,s=new DataView(e,Xr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===rp.JSON){const l=new Uint8Array(e,Xr+o,a);this.content=n.decode(l)}else if(c===rp.BIN){const l=Xr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class h1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Au[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Au[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=_r[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const p=f.attributes[d],_=c[d];_!==void 0&&(p.normalized=_)}h(f)},a,l)})})}}class f1{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class d1{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class a_ extends Ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,p=e*l,_=p-l,g=-2*d+3*f,m=d-f,x=1-g,v=m-f+h;for(let y=0;y!==a;y++){const M=o[_+y+a],E=o[_+y+c]*u,S=o[p+y+a],R=o[p+y]*u;s[y]=x*M+v*E+g*S+m*R}return s}}const p1=new nn;class m1 extends a_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return p1.fromArray(s).normalize().toArray(s),s}}const Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},op={9728:Ft,9729:Rt,9984:io,9985:tc,9986:mr,9987:ui},ap={33071:cn,33648:vr,10497:qi},Cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Au={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g1={CUBICSPLINE:void 0,LINEAR:Ps,STEP:yr},Rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ks({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),r.DefaultMaterial}function ls(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function v1(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function x1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y1(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pl(t.attributes):e=r.indices+":"+Pl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Pl(r.targets[n]);return e}function Pl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function wu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const M1=new He;class S1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Tg(this.options.manager):this.textureLoader=new Lg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ls(s,a,i),zi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Wi.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Cl[i.type],a=_r[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new mt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Cl[i.type],l=_r[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(x);v||(_=new l(a,m*d,i.count*d/u),v=new wo(_,d/u),t.cache.add(x,v)),g=new Pn(v,c,f%d/u,p)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),g=new mt(_,c,p);if(i.sparse!==void 0){const m=Cl.SCALAR,x=_r[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new x(o[1],v,i.sparse.count*m),E=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new mt(g.array.slice(),g.itemSize,g.normalized));for(let S=0,R=M.length;S<R;S++){const b=M[S];if(g.setX(b,E[S*c]),c>=2&&g.setY(b,E[S*c+1]),c>=3&&g.setZ(b,E[S*c+2]),c>=4&&g.setW(b,E[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=op[f.magFilter]||Rt,u.minFilter=op[f.minFilter]||ui,u.wrapS=ap[f.wrapS]||qi,u.wrapT=ap[f.wrapT]||qi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(_){const g=new It(_);g.needsUpdate=!0,f(g)}),t.load(Wi.resolveURL(h,s.path),p,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||b1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new gc,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new mn,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ks}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,wt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Un);const u=s.alphaMode||Rl.OPAQUE;if(u===Rl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Mn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new J(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Mn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Mn){const h=s.emissiveFactor;a.emissive=new ve().setRGB(h[0],h[1],h[2],sn)}return s.emissiveTexture!==void 0&&o!==Mn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,wt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),zi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ls(i,h,s),h})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return cp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=y1(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=cp(new Je,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?_1(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,p=u.length;d<p;d++){const _=u[d],g=o[d];let m;const x=l[d];if(g.mode===Vn.TRIANGLES||g.mode===Vn.TRIANGLE_STRIP||g.mode===Vn.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new oh(_,x):new At(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Vn.TRIANGLE_STRIP?m.geometry=sp(m.geometry,qu):g.mode===Vn.TRIANGLE_FAN&&(m.geometry=sp(m.geometry,Xa));else if(g.mode===Vn.LINES)m=new Kn(_,x);else if(g.mode===Vn.LINE_STRIP)m=new wi(_,x);else if(g.mode===Vn.LINE_LOOP)m=new ah(_,x);else if(g.mode===Vn.POINTS)m=new ch(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&x1(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),zi(m,s),g.extensions&&ls(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&ls(i,h[0],s),h[0];const f=new Gn;s.extensions&&ls(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(rc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new He;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Co(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],p=i.samplers[d.sampler],_=d.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],p=h[2],_=h[3],g=h[4],m=[];for(let x=0,v=f.length;x<v;x++){const y=f[x],M=d[x],E=p[x],S=_[x],R=g[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const b=n._createAnimationTracks(y,M,E,S,R);if(b)for(let T=0;T<b.length;T++)m.push(b[T])}return new Tr(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,M1)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new pc:l.length>1?u=new Gn:l.length===1?u=l[0]:u=new ut,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),zi(u,s),s.extensions&&ls(n,u,s),s.matrix!==void 0){const h=new He;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Gn;n.name&&(s.name=i.createUniqueName(n.name)),zi(s,n),n.extensions&&ls(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Zt||f instanceof It)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Fi[s.path]===Fi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Fi[s.path]){case Fi.weights:l=Ds;break;case Fi.rotation:l=$i;break;case Fi.position:case Fi.scale:l=Ns;break;default:switch(n.itemSize){case 1:l=Ds;break;case 2:case 3:default:l=Ns;break}break}const u=i.interpolation!==void 0?g1[i.interpolation]:Ps,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+Fi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wu(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof $i?m1:a_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function T1(r,e,t){const n=e.attributes,i=new Yt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){const u=wu(_r[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new w,c=new w;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=wu(_r[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new jt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function cp(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Au[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return pt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),zi(r,e),T1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?v1(r,e.targets,t):r})}const Ot={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function c_(r){const e=await fetch(r);if(e.ok)return e.json();throw new Error(e.statusText)}async function E1(r){if(!r)throw new Error("No basePath supplied");return await c_(`${r}/profilesList.json`)}async function A1(r,e,t=null,n=!0){if(!r)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await E1(e);let s;if(r.profiles.some(c=>{const l=i[c];return l&&(s={profileId:c,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}),!!s}),!s){if(!t)throw new Error("No matching profile name found");const c=i[t];if(!c)throw new Error(`No matching profile name found and default profile "${t}" missing.`);s={profileId:t,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}}const o=await c_(s.profilePath);let a;if(n){let c;if(r.handedness==="any"?c=o.layouts[Object.keys(o.layouts)[0]]:c=o.layouts[r.handedness],!c)throw new Error(`No matching handedness, ${r.handedness}, in profile ${s.profileId}`);c.assetPath&&(a=s.profilePath.replace("profile.json",c.assetPath))}return{profile:o,assetPath:a}}const w1={xAxis:0,yAxis:0,button:0,state:Ot.ComponentState.DEFAULT};function C1(r=0,e=0){let t=r,n=e;if(Math.sqrt(r*r+e*e)>1){const o=Math.atan2(e,r);t=Math.cos(o),n=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class R1{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===Ot.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(w1)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:s,normalizedYAxis:o}=C1(e,t);switch(this.componentProperty){case Ot.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?s:.5;break;case Ot.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?o:.5;break;case Ot.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case Ot.ComponentProperty.STATE:this.valueNodeProperty===Ot.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class P1{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new R1(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:Ot.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=Ot.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=Ot.ComponentState.PRESSED:(t.touched||this.values.button>Ot.ButtonTouchThreshold)&&(this.values.state=Ot.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===Ot.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>Ot.AxisTouchThreshold&&(this.values.state=Ot.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===Ot.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>Ot.AxisTouchThreshold&&(this.values.state=Ot.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class L1{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const s=this.layoutDescription.components[i];this.components[i]=new P1(i,s)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const I1="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",D1="generic-trigger";class N1 extends ut{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:s,maxNode:o,value:a,valueNodeProperty:c}=n;i&&(c===Ot.VisualResponseProperty.VISIBILITY?i.visible=a:c===Ot.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(s.quaternion,o.quaternion,a),i.position.lerpVectors(s.position,o.position,a)))})}))}}function U1(r,e){Object.values(r.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:s}=t;if(n===Ot.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const o=new zs(.001),a=new Mn({color:255}),c=new At(o,a);t.touchPointNode.add(c)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(s).forEach(o=>{const{valueNodeName:a,minNodeName:c,maxNodeName:l,valueNodeProperty:u}=o;if(u===Ot.VisualResponseProperty.TRANSFORM){if(o.minNode=e.getObjectByName(c),o.maxNode=e.getObjectByName(l),!o.minNode){console.warn(`Could not find ${c} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${l} in the model`);return}}o.valueNode=e.getObjectByName(a),o.valueNode||console.warn(`Could not find ${a} in the model`)})})}function lp(r,e){U1(r.motionController,e),r.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=r.envMap,t.material.needsUpdate=!0)}),r.add(e)}class O1{constructor(e=null){this.gltfLoader=e,this.path=I1,this._assetCache={},this.gltfLoader||(this.gltfLoader=new r_)}createControllerModel(e){const t=new N1;let n=null;return e.addEventListener("connected",i=>{const s=i.data;s.targetRayMode!=="tracked-pointer"||!s.gamepad||A1(s,this.path,D1).then(({profile:o,assetPath:a})=>{t.motionController=new L1(s,o,a);const c=this._assetCache[t.motionController.assetUrl];if(c)n=c.scene.clone(),lp(t,n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,l=>{this._assetCache[t.motionController.assetUrl]=l,n=l.scene.clone(),lp(t,n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}const l_=()=>{const{xr:r}=En().renderer;return()=>{var t,n;let e=!1;return(n=(t=r.getSession())==null?void 0:t.inputSources)==null||n.forEach(i=>{i.hand&&(e=!0)}),e}},F1=()=>{const r=new O1,e={left:Oh,right:Fh,none:n_},{xr:t}=En().renderer,n=l_(),i=[t.getController(0),t.getController(1)],s=new Map;i.forEach((o,a)=>{s.set(o,{targetRay:o,grip:t.getControllerGrip(a),model:r.createControllerModel(o)})}),Er(()=>{const o=l=>{var h,f;if(n())return;const{data:u}=l;(f=(h=Mu[u.handedness])==null?void 0:h.current)==null||f.call(h,l.type,l)};function a(l){const{model:u,targetRay:h,grip:f}=s.get(this),{data:d}=l;e[l.data.handedness].set({inputSource:d,targetRay:h,grip:f,model:u}),o(l)}const c=l=>{o(l),e[l.data.handedness].set(void 0)};for(const l of i)l.addEventListener("connected",a),l.addEventListener("disconnected",c),l.addEventListener("select",o),l.addEventListener("selectstart",o),l.addEventListener("selectend",o),l.addEventListener("squeeze",o),l.addEventListener("squeezestart",o),l.addEventListener("squeezeend",o);return()=>{for(const l of i)l.removeEventListener("connected",a),l.removeEventListener("disconnected",c),l.removeEventListener("select",o),l.removeEventListener("selectstart",o),l.removeEventListener("selectend",o),l.removeEventListener("squeeze",o),l.removeEventListener("squeezestart",o),l.removeEventListener("squeezeend",o);e.left.set(void 0),e.right.set(void 0),e.none.set(void 0)}})},up=new He,hp=new w;class fp{constructor(e,t,n,i,s){this.controller=t,this.handModel=e,this.envMap=null;let o;!s||!s.primitive||s.primitive==="sphere"?o=new zs(1,10,10):s.primitive==="box"&&(o=new Ri(1,1,1));const a=new ks;this.handMesh=new mc(o,a,30),this.handMesh.frustumCulled=!1,this.handMesh.instanceMatrix.setUsage(Um),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const t=this.controller.joints;let n=0;for(let i=0;i<this.joints.length;i++){const s=t[this.joints[i]];s.visible&&(hp.setScalar(s.jointRadius||.008),up.compose(s.position,s.quaternion,hp),this.handMesh.setMatrixAt(i,up),n++)}this.handMesh.count=n,this.handMesh.instanceMatrix.needsUpdate=!0}}const B1="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class z1{constructor(e,t,n,i,s=null){this.controller=t,this.handModel=e,this.bones=[],s===null&&(s=new r_,s.setPath(n||B1)),s.load(`${i}.glb`,o=>{const a=o.scene.children[0];this.handModel.add(a);const c=a.getObjectByProperty("type","SkinnedMesh");c.frustumCulled=!1,c.castShadow=!0,c.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(u=>{const h=a.getObjectByName(u);h!==void 0?h.jointName=u:console.warn(`Couldn't find ${u} in ${i} hand mesh`),this.bones.push(h)})})}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const n=this.bones[t];if(n){const i=e[n.jointName];if(i.visible){const s=i.position;n.position.copy(s),n.quaternion.copy(i.quaternion)}}}}}class k1 extends ut{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class H1{constructor(){this.path=null}setPath(e){return this.path=e,this}createHandModel(e,t){const n=new k1(e);return e.addEventListener("connected",i=>{const s=i.data;s.hand&&!n.motionController&&(n.xrInputSource=s,t===void 0||t==="spheres"?n.motionController=new fp(n,e,this.path,s.handedness,{primitive:"sphere"}):t==="boxes"?n.motionController=new fp(n,e,this.path,s.handedness,{primitive:"box"}):t==="mesh"&&(n.motionController=new z1(n,e,this.path,s.handedness))),e.visible=!0}),e.addEventListener("disconnected",()=>{e.visible=!1}),n}}const V1=()=>{const r=new H1,e={left:i_,right:s_},{xr:t}=En().renderer,n=l_(),i=[t.getHand(0),t.getHand(1)],s=new Map;i.forEach((o,a)=>{s.set(o,{hand:o,targetRay:t.getController(a),model:r.createHandModel(o,"mesh")})}),Er(()=>{const o=l=>{var f,d;if(!n())return;const u=l,h="handedness"in u?u.handedness:u.data.handedness;(d=(f=qg[h])==null?void 0:f.current)==null||d.call(f,l.type,l)};function a(l){const u=this,{model:h,targetRay:f}=s.get(this),{data:d}=l,{handedness:p,hand:_}=d;e[p].set({hand:u,model:h,inputSource:_,targetRay:f}),o(l)}const c=l=>{o(l),e[l.data.handedness].set(void 0)};for(const l of i)l.addEventListener("connected",a),l.addEventListener("disconnected",c),l.addEventListener("pinchstart",o),l.addEventListener("pinchend",o);return()=>{for(const l of i)l.removeEventListener("connected",a),l.removeEventListener("disconnected",c),l.removeEventListener("pinchstart",o),l.removeEventListener("pinchend",o);e.left.set(void 0),e.right.set(void 0)}})},G1=r=>({}),dp=r=>({});function W1(r){let e;const t=r[7].fallback,n=yt(t,r,r[6],dp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&64)&&bt(n,t,i,i[6],e?St(t,i[6],s,G1):Mt(i[6]),dp)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function X1(r){let e;const t=r[7].default,n=yt(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&64)&&bt(n,t,i,i[6],e?St(t,i[6],s,null):Mt(i[6]),null)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function q1(r){let e,t,n,i;const s=[X1,W1],o=[];function a(c,l){return c[0]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=gt()},l(c){t.l(c),n=gt()},m(c,l){o[e].m(c,l),Ne(c,n,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Wt(),q(o[u],1,1,()=>{o[u]=null}),Xt(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),H(t,1),t.m(n.parentNode,n))},i(c){i||(H(t),i=!0)},o(c){q(t),i=!1},d(c){c&&Le(n),o[e].d(c)}}}function $1(r,e,t){let n,i,s,o,a,c;ft(r,bu,b=>t(9,n=b)),ft(r,Ts,b=>t(10,i=b)),ft(r,Ti,b=>t(11,s=b)),ft(r,go,b=>t(12,o=b)),ft(r,Yr,b=>t(0,c=b));let{$$slots:l={},$$scope:u}=e,{foveation:h=1}=e,{frameRate:f=void 0}=e,{referenceSpace:d="local-floor"}=e;const p=Lo(),{renderer:_,renderMode:g}=En();ft(r,g,b=>t(13,a=b));const{xr:m}=_;let x=a;XA(),WA(),F1(),V1();const v=()=>{Yr.set(!0),p("sessionstart",{type:"sessionstart",target:s})},y=()=>{p("sessionend",{type:"sessionend",target:s}),Yr.set(!1),Ti.set(void 0)},M=b=>{p("visibilitychange",{...b,target:s})},E=b=>{Uo(go,o=Object.values(b.session.inputSources).some(T=>T.hand),o),p("inputsourceschange",{...b,target:s})},S=b=>{p("visibilitychange",{...b,target:s})},R=b=>{if(b!==void 0)try{s==null||s.updateTargetFrameRate(b)}catch{}};return yn(Ti,b=>{if(b!==void 0)return b.addEventListener("visibilitychange",M),b.addEventListener("inputsourceschange",E),b.addEventListener("frameratechange",S),m.setFoveation(h),R(f),()=>{b.removeEventListener("visibilitychange",M),b.removeEventListener("inputsourceschange",E),b.removeEventListener("frameratechange",S)}}),yn(Yr,b=>{b?(x=g.current,g.set("always")):g.set(x)}),Er(()=>(Uo(Ts,i=m,i),t(5,m.enabled=!0,m),m.addEventListener("sessionstart",v),m.addEventListener("sessionend",y),()=>{Uo(Ts,i=void 0,i),t(5,m.enabled=!1,m),m.removeEventListener("sessionstart",v),m.removeEventListener("sessionend",y)})),r.$$set=b=>{"foveation"in b&&t(2,h=b.foveation),"frameRate"in b&&t(3,f=b.frameRate),"referenceSpace"in b&&t(4,d=b.referenceSpace),"$$scope"in b&&t(6,u=b.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&R(f),r.$$.dirty&36&&m.setFoveation(h),r.$$.dirty&48&&(m.setReferenceSpaceType(d),Uo(bu,n=d,n))},[c,g,h,f,d,m,u,l]}class pp extends kt{constructor(e){super(),Ht(this,e,$1,q1,zt,{foveation:2,frameRate:3,referenceSpace:4})}}Za("left"),Za("right");new w;Za("left"),Za("right");new w;new w;new w;new w;const Y1={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},j1={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`},us=r=>{let e=!1;const t=pn(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}},Z1=r=>({ref:r[1]&1024}),mp=r=>({ref:r[41]});function K1(r){let e,t,n,i,s;e=new tt.Mesh({props:{"scale.y":-1,"rotation.x":-Math.PI/2,material:r[10],geometry:r[0]}}),n=new tt({props:{is:r[9],manual:!0}});const o=r[27].default,a=yt(o,r,r[29],mp);return{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment),i=ot(),a&&a.c()},l(c){Ee(e.$$.fragment,c),t=at(c),Ee(n.$$.fragment,c),i=at(c),a&&a.l(c)},m(c,l){Ae(e,c,l),Ne(c,t,l),Ae(n,c,l),Ne(c,i,l),a&&a.m(c,l),s=!0},p(c,l){const u={};l[0]&1&&(u.geometry=c[0]),e.$set(u),a&&a.p&&(!s||l[0]&536870912|l[1]&1024)&&bt(a,o,c,c[29],s?St(o,c[29],l,Z1):Mt(c[29]),mp)},i(c){s||(H(e.$$.fragment,c),H(n.$$.fragment,c),H(a,c),s=!0)},o(c){q(e.$$.fragment,c),q(n.$$.fragment,c),q(a,c),s=!1},d(c){c&&(Le(t),Le(i)),we(e,c),we(n,c),a&&a.d(c)}}}function J1(r){let e,t;return e=new tt.Group({props:{"rotation.x":Math.PI/2,$$slots:{default:[K1]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i[0]&536870913|i[1]&1024&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Q1(r){let e,t;const n=[r[12]];let i={$$slots:{default:[J1,({ref:s})=>({41:s}),({ref:s})=>[0,s?1024:0]]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=ln(i,n[s]);return e=new tt.Group({props:i}),r[28](e),{c(){Te(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){Ae(e,s,o),t=!0},p(s,o){const a=o[0]&4096?bo(n,[Ja(s[12])]):{};o[0]&536870913|o[1]&1024&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){r[28](null),we(e,s)}}}function ew(r,e,t){const n=["opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","refresh"];let i=Wn(e,n),s,o,a,c,l,u,h,f,{$$slots:d={},$$scope:p}=e,{opacity:_=1}=e,{width:g=1}=e,{height:m=1}=e,{blur:x=1}=e,{far:v=10}=e,{smooth:y=!0}=e,{resolution:M=512}=e,{frames:E=1/0}=e,{scale:S=10}=e,{color:R="#000000"}=e,{depthWrite:b=!1}=e;const{scene:T,renderer:O}=En(),z=us(()=>g*(Array.isArray(S)?S[0]:S||1));ft(r,z,ie=>t(26,h=ie));const ee=us(()=>m*(Array.isArray(S)?S[1]:S||1));ft(r,ee,ie=>t(25,u=ie));const D=us(()=>{const ie=new Bn(M,M);return ie.texture.generateMipmaps=!1,ie.texture.colorSpace=O.outputColorSpace,ie});ft(r,D,ie=>t(36,c=ie));const k=us(()=>{const ie=new Bn(M,M);return ie.texture.generateMipmaps=!1,ie});ft(r,k,ie=>t(35,a=ie));const j=us(()=>new Rr(h,u).rotateX(Math.PI/2));ft(r,j,ie=>t(0,o=ie));const Z=us(()=>new At(o));ft(r,Z,ie=>t(37,l=ie));const oe=us(()=>{const ie=new hc({depthTest:!1,depthWrite:!1});return ie.onBeforeCompile=Me=>{Me.uniforms={...Me.uniforms,uColor:{value:new ve(R).convertSRGBToLinear()}},Me.fragmentShader=`uniform vec3 uColor;
`+Me.fragmentShader,Me.fragmentShader=Me.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),Me.fragmentShader=Me.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},ie});ft(r,oe,ie=>t(34,s=ie));const K=new zn({...Y1,depthTest:!1}),ne=new zn({...j1,depthTest:!1}),V=new Bs(-h/2,h/2,u/2,-u/2,0,v);V.updateProjectionMatrix();const xe=new Mn({map:c.texture,transparent:!0,opacity:_,depthWrite:b}),W=ie=>{const Me=l;Me.visible=!0,Me.material=K,K.uniforms.tDiffuse.value=c.texture,K.uniforms.h.value=ie*1/256,O.setRenderTarget(a),O.render(Me,V),Me.material=ne,ne.uniforms.tDiffuse.value=a.texture,ne.uniforms.v.value=ie*1/256,O.setRenderTarget(c),O.render(Me,V),Me.visible=!1},L=()=>{const ie=T.background;T.background=null;const Me=T.overrideMaterial;T.overrideMaterial=s;const Ve=O.getClearAlpha();O.setClearAlpha(0),O.setRenderTarget(c),O.render(T,V),T.overrideMaterial=Me,W(x),y&&W(x*.4),O.setRenderTarget(null),T.background=ie,O.setClearAlpha(Ve)},U=()=>{L()};let _e=0;Ci(()=>{(E===1/0||_e<E)&&(L(),_e+=1)}),Ln(()=>{c.dispose(),a.dispose(),o.dispose(),s.dispose(),K.dispose(),ne.dispose(),xe.dispose()});const be=Ih();ft(r,be,ie=>t(1,f=ie));function ze(ie){Ar[ie?"unshift":"push"](()=>{f=ie,be.set(f)})}return r.$$set=ie=>{e=ln(ln({},e),As(ie)),t(12,i=Wn(e,n)),"opacity"in ie&&t(13,_=ie.opacity),"width"in ie&&t(14,g=ie.width),"height"in ie&&t(15,m=ie.height),"blur"in ie&&t(16,x=ie.blur),"far"in ie&&t(17,v=ie.far),"smooth"in ie&&t(18,y=ie.smooth),"resolution"in ie&&t(19,M=ie.resolution),"frames"in ie&&t(20,E=ie.frames),"scale"in ie&&t(21,S=ie.scale),"color"in ie&&t(22,R=ie.color),"depthWrite"in ie&&t(23,b=ie.depthWrite),"$$scope"in ie&&t(29,p=ie.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2113536&&z.memoize([g,S]),r.$$.dirty[0]&2129920&&ee.memoize(m,S),r.$$.dirty[0]&524288&&D.memoize(M),r.$$.dirty[0]&524288&&k.memoize(M),r.$$.dirty[0]&100663296&&j.memoize(h,u),r.$$.dirty[0]&1&&Z.memoize(o),r.$$.dirty[0]&4194304&&oe.memoize(R)},[o,f,z,ee,D,k,j,Z,oe,V,xe,be,i,_,g,m,x,v,y,M,E,S,R,b,U,u,h,d,ze,p]}class tw extends kt{constructor(e){super(),Ht(this,e,ew,Q1,zt,{opacity:13,width:14,height:15,blur:16,far:17,smooth:18,resolution:19,frames:20,scale:21,color:22,depthWrite:23,refresh:24},null,[-1,-1])}get refresh(){return this.$$.ctx[24]}}const nw=Number.parseInt(wr.replace("dev","")),iw=`
  varying vec3 localPosition;
  varying vec4 worldPosition;

  uniform vec3 worldCamProjPosition;
	uniform vec3 worldPlanePosition;
	uniform float fadeDistance;
	uniform bool infiniteGrid;
	uniform bool followCamera;

	uniform int coord0;
	uniform int coord1;
	uniform int coord2;

	void main() {
		localPosition = vec3(
		  position[coord0],
			position[coord1],
			position[coord2]
		);

		if (infiniteGrid) {
		  localPosition *= 1.0 + fadeDistance;
		}

		worldPosition = modelMatrix * vec4(localPosition, 1.0);
		if (followCamera) {
		  worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
      localPosition = (inverse(modelMatrix) * worldPosition).xyz;
		}

		gl_Position = projectionMatrix * viewMatrix * worldPosition;
	}
`,sw=`
  #define PI 3.141592653589793

	varying vec3 localPosition;
	varying vec4 worldPosition;

	uniform vec3 worldCamProjPosition;
	uniform float cellSize;
	uniform float sectionSize;
	uniform vec3 cellColor;
	uniform vec3 sectionColor;
	uniform float fadeDistance;
	uniform float fadeStrength;
	uniform float cellThickness;
	uniform float sectionThickness;
	uniform vec3 backgroundColor;
	uniform float backgroundOpacity;

	uniform bool infiniteGrid;

	uniform int coord0;
	uniform int coord1;
	uniform int coord2;

	// 0 - default; 1 - lines; 2 - circles; 3 - polar
	uniform int gridType;

  // lineGrid coord for lines
	uniform int lineGridCoord;

	// circlegrid max radius
	uniform float circleGridMaxRadius;

	// polar grid dividers
	uniform float polarCellDividers;
	uniform float polarSectionDividers;

	float getSquareGrid(float size, float thickness, vec3 localPos) {
		vec2 coord = localPos.xy / size;

		vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
		float line = min(grid.x, grid.y) + 1.0 - thickness;

		return 1.0 - min(line, 1.0);
	}

	float getLinesGrid(float size, float thickness, vec3 localPos) {
		float coord = localPos[lineGridCoord] / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		return 1.0 - min(line, 1.0);
	}

	float getCirclesGrid(float size, float thickness, vec3 localPos) {
		float coord = length(localPos.xy) / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		if (!infiniteGrid && circleGridMaxRadius > 0. && coord > circleGridMaxRadius + thickness * 0.05) {
		  discard;
		}

		return 1.0 - min(line, 1.0);
	}

	float getPolarGrid(float size, float thickness, float polarDividers, vec3 localPos) {
		float rad = length(localPos.xy) / size;
		vec2 coord = vec2(rad, atan(localPos.x, localPos.y) * polarDividers / PI) ;

		vec2 wrapped = vec2(coord.x, fract(coord.y / (2.0 * polarDividers)) * (2.0 * polarDividers));
		vec2 coordWidth = fwidth(coord);
		vec2 wrappedWidth = fwidth(wrapped);
		vec2 width = (coord.y < -polarDividers * 0.5 || coord.y > polarDividers * 0.5 ? wrappedWidth : coordWidth) * (1.+thickness*0.25);

		// Compute anti-aliased world-space grid lines
		vec2 grid = abs(fract(coord - 0.5) - 0.5) / width;
		float line = min(grid.x, grid.y);

if (!infiniteGrid && circleGridMaxRadius > 0.0 && rad > circleGridMaxRadius + thickness * 0.05) {
		  discard;
		}

		return 1.0 - min(line, 1.0);
	}

	void main() {
		float g1 = 0.0;
		float g2 = 0.0;

		vec3 localPos = vec3(localPosition[coord0], localPosition[coord1], localPosition[coord2]);

		if (gridType == 0) {
			g1 = getSquareGrid(cellSize, cellThickness, localPos);
			g2 = getSquareGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 1) {
			g1 = getLinesGrid(cellSize, cellThickness, localPos);
			g2 = getLinesGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 2) {
			g1 = getCirclesGrid(cellSize, cellThickness, localPos);
			g2 = getCirclesGrid(sectionSize, sectionThickness, localPos);

		} else if (gridType == 3) {
			g1 = getPolarGrid(cellSize, cellThickness, polarCellDividers, localPos);
			g2 = getPolarGrid(sectionSize, sectionThickness, polarSectionDividers, localPos);
		}

		float dist = distance(worldCamProjPosition, worldPosition.xyz);
		float d = 1.0 - min(dist / fadeDistance, 1.0);
		float fadeFactor = pow(d, fadeStrength) * 0.95;

		vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

		if (backgroundOpacity > 0.0) {
			float linesAlpha = clamp((g1 + g2) * fadeFactor, 0.0,1.0);
			vec3 finalColor = mix(backgroundColor, color, linesAlpha);
			float blendedAlpha = max(linesAlpha, backgroundOpacity * fadeFactor);
			gl_FragColor = vec4(finalColor, blendedAlpha);

		} else {
			gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
			gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
		}

		if (gl_FragColor.a <= 0.0) {
		  discard;
		}

		#include <tonemapping_fragment>
		#include <${nw<154?"encodings_fragment":"colorspace_fragment"}>
	}
`,rw=r=>({ref:r[0]&1}),gp=r=>({ref:r[0]});function ow(r){let e,t;return e=new tt.PlaneGeometry({props:{args:typeof r[1]=="number"?[r[1],r[1]]:r[1]}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i[0]&2&&(s.args=typeof n[1]=="number"?[n[1],n[1]]:n[1]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function aw(r){let e,t,n;e=new tt.ShaderMaterial({props:{fragmentShader:sw,vertexShader:iw,uniforms:r[3],transparent:!0,side:r[2]}});const i=r[25].default,s=yt(i,r,r[28],gp),o=s||ow(r);return{c(){Te(e.$$.fragment),t=ot(),o&&o.c()},l(a){Ee(e.$$.fragment,a),t=at(a),o&&o.l(a)},m(a,c){Ae(e,a,c),Ne(a,t,c),o&&o.m(a,c),n=!0},p(a,c){const l={};c[0]&8&&(l.uniforms=a[3]),c[0]&4&&(l.side=a[2]),e.$set(l),s?s.p&&(!n||c[0]&268435457)&&bt(s,i,a,a[28],n?St(i,a[28],c,rw):Mt(a[28]),gp):o&&o.p&&(!n||c[0]&2)&&o.p(a,n?c:[-1,-1])},i(a){n||(H(e.$$.fragment,a),H(o,a),n=!0)},o(a){q(e.$$.fragment,a),q(o,a),n=!1},d(a){a&&Le(t),we(e,a),o&&o.d(a)}}}function cw(r){let e,t,n;const i=[{frustumCulled:!1},r[6]];function s(a){r[27](a)}let o={$$slots:{default:[aw,({ref:a})=>({0:a}),({ref:a})=>[a?1:0]]},$$scope:{ctx:r}};for(let a=0;a<i.length;a+=1)o=ln(o,i[a]);return r[0]!==void 0&&(o.ref=r[0]),e=new tt.Mesh({props:o}),r[26](e),Ar.push(()=>Pp(e,"ref",s)),{c(){Te(e.$$.fragment)},l(a){Ee(e.$$.fragment,a)},m(a,c){Ae(e,a,c),n=!0},p(a,c){const l=c[0]&64?bo(i,[i[0],Ja(a[6])]):{};c[0]&268435471&&(l.$$scope={dirty:c,ctx:a}),!t&&c[0]&1&&(t=!0,l.ref=a[0],Rp(()=>t=!1)),e.$set(l)},i(a){n||(H(e.$$.fragment,a),n=!0)},o(a){q(e.$$.fragment,a),n=!1},d(a){r[26](null),we(e,a)}}}function lw(r,e,t){const n=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","side","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let i=Wn(e,n),s,{$$slots:o={},$$scope:a}=e,{cellColor:c="#000000"}=e,{sectionColor:l="#0000ee"}=e,{cellSize:u=1}=e,{backgroundColor:h="#dadada"}=e,{backgroundOpacity:f=0}=e,{sectionSize:d=10}=e,{plane:p="xz"}=e,{gridSize:_=[20,20]}=e,{followCamera:g=!1}=e,{infiniteGrid:m=!1}=e,{fadeDistance:x=100}=e,{fadeStrength:v=1}=e,{cellThickness:y=1}=e,{sectionThickness:M=2}=e,{side:E=Un}=e,{type:S="grid"}=e,{axis:R="x"}=e,{maxRadius:b=0}=e,{cellDividers:T=6}=e,{sectionDividers:O=2}=e,{ref:z}=e;const{invalidate:ee,camera:D}=En(),k=new ri,j=new w(0,1,0),Z=new w(0,0,0),oe={x:0,y:1,z:2},K={xz:"xzy",xy:"xyz",zy:"zyx"},ne={grid:0,lines:1,circular:2,polar:3},V={cellSize:{value:u},sectionSize:{value:d},cellColor:{value:new ve(c)},sectionColor:{value:new ve(l)},backgroundColor:{value:new ve(h)},backgroundOpacity:{value:f},fadeDistance:{value:x},fadeStrength:{value:v},cellThickness:{value:y},sectionThickness:{value:M},infiniteGrid:{value:m},followCamera:{value:g},coord0:{value:0},coord1:{value:2},coord2:{value:1},gridType:{value:ne.grid},lineGridCoord:{value:oe[R]},circleGridMaxRadius:{value:b},polarCellDividers:{value:T},polarSectionDividers:{value:O},worldCamProjPosition:{value:new w},worldPlanePosition:{value:new w}};Ci(()=>{k.setFromNormalAndCoplanarPoint(j,Z).applyMatrix4(z.matrixWorld);const U=z.material,_e=U.uniforms.worldCamProjPosition,be=U.uniforms.worldPlanePosition;k.projectPoint(D.current.position,_e.value),be.value.set(0,0,0).applyMatrix4(z.matrixWorld),ee()});const xe=Ih();ft(r,xe,U=>t(4,s=U));function W(U){Ar[U?"unshift":"push"](()=>{s=U,xe.set(s)})}function L(U){z=U,t(0,z)}return r.$$set=U=>{e=ln(ln({},e),As(U)),t(6,i=Wn(e,n)),"cellColor"in U&&t(7,c=U.cellColor),"sectionColor"in U&&t(8,l=U.sectionColor),"cellSize"in U&&t(9,u=U.cellSize),"backgroundColor"in U&&t(10,h=U.backgroundColor),"backgroundOpacity"in U&&t(11,f=U.backgroundOpacity),"sectionSize"in U&&t(12,d=U.sectionSize),"plane"in U&&t(13,p=U.plane),"gridSize"in U&&t(1,_=U.gridSize),"followCamera"in U&&t(14,g=U.followCamera),"infiniteGrid"in U&&t(15,m=U.infiniteGrid),"fadeDistance"in U&&t(16,x=U.fadeDistance),"fadeStrength"in U&&t(17,v=U.fadeStrength),"cellThickness"in U&&t(18,y=U.cellThickness),"sectionThickness"in U&&t(19,M=U.sectionThickness),"side"in U&&t(2,E=U.side),"type"in U&&t(20,S=U.type),"axis"in U&&t(21,R=U.axis),"maxRadius"in U&&t(22,b=U.maxRadius),"cellDividers"in U&&t(23,T=U.cellDividers),"sectionDividers"in U&&t(24,O=U.sectionDividers),"ref"in U&&t(0,z=U.ref),"$$scope"in U&&t(28,a=U.$$scope)},r.$$.update=()=>{if(r.$$.dirty[0]&8192){const U=K[p],_e=U.charAt(0),be=U.charAt(1),ze=U.charAt(2);t(3,V.coord0.value=oe[_e],V),t(3,V.coord1.value=oe[be],V),t(3,V.coord2.value=oe[ze],V)}if(r.$$.dirty[0]&512&&t(3,V.cellSize.value=u,V),r.$$.dirty[0]&4096&&t(3,V.sectionSize.value=d,V),r.$$.dirty[0]&2048&&t(3,V.backgroundOpacity.value=f,V),r.$$.dirty[0]&65536&&t(3,V.fadeDistance.value=x,V),r.$$.dirty[0]&131072&&t(3,V.fadeStrength.value=v,V),r.$$.dirty[0]&262144&&t(3,V.cellThickness.value=y,V),r.$$.dirty[0]&524288&&t(3,V.sectionThickness.value=M,V),r.$$.dirty[0]&16384&&t(3,V.followCamera.value=g,V),r.$$.dirty[0]&32768&&t(3,V.infiniteGrid.value=m,V),r.$$.dirty[0]&32505856){switch(S){case"grid":{t(3,V.gridType.value=ne.grid,V);break}case"lines":{t(3,V.gridType.value=ne.lines,V),t(3,V.lineGridCoord.value=oe[R],V);break}case"circular":{t(3,V.gridType.value=ne.circular,V),t(3,V.circleGridMaxRadius.value=b,V);break}case"polar":{t(3,V.gridType.value=ne.polar,V),t(3,V.circleGridMaxRadius.value=b,V),t(3,V.polarCellDividers.value=T,V),t(3,V.polarSectionDividers.value=O,V);break}}ee()}r.$$.dirty[0]&136&&V.cellColor.value.set(c),r.$$.dirty[0]&264&&V.sectionColor.value.set(l),r.$$.dirty[0]&1032&&V.backgroundColor.value.set(h)},[z,_,E,V,s,xe,i,c,l,u,h,f,d,p,g,m,x,v,y,M,S,R,b,T,O,o,W,L,a]}class uw extends kt{constructor(e){super(),Ht(this,e,lw,cw,zt,{cellColor:7,sectionColor:8,cellSize:9,backgroundColor:10,backgroundOpacity:11,sectionSize:12,plane:13,gridSize:1,followCamera:14,infiniteGrid:15,fadeDistance:16,fadeStrength:17,cellThickness:18,sectionThickness:19,side:2,type:20,axis:21,maxRadius:22,cellDividers:23,sectionDividers:24,ref:0},null,[-1,-1])}}const hw=()=>_E("threlte-controls",{orbitControls:pn(void 0),trackballControls:pn(void 0)}),_p={type:"change"},Ll={type:"start"},vp={type:"end"},Ia=new Fs,xp=new ri,fw=Math.cos(70*rc.DEG2RAD);let dw=class extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",A),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_p),n.update(),s=i.NONE},this.update=function(){const N=new w,pe=new nn().setFromUnitVectors(e.up,new w(0,1,0)),se=pe.clone().invert(),$e=new w,Be=new nn,We=new w,Ue=2*Math.PI;return function(it=null){const F=n.object.position;N.copy(F).sub(n.target),N.applyQuaternion(pe),a.setFromVector3(N),n.autoRotate&&s===i.NONE&&O(b(it)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ye=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(ye)&&isFinite(ce)&&(ye<-Math.PI?ye+=Ue:ye>Math.PI&&(ye-=Ue),ce<-Math.PI?ce+=Ue:ce>Math.PI&&(ce-=Ue),ye<=ce?a.theta=Math.max(ye,Math.min(ce,a.theta)):a.theta=a.theta>(ye+ce)/2?Math.max(ye,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*l),N.setFromSpherical(a),N.applyQuaternion(se),F.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Q=!1;if(n.zoomToCursor&&E){let he=null;if(n.object.isPerspectiveCamera){const Ge=N.length();he=K(Ge*l);const st=Ge-he;n.object.position.addScaledVector(y,st),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ge=new w(M.x,M.y,0);Ge.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Q=!0;const st=new w(M.x,M.y,0);st.unproject(n.object),n.object.position.sub(st).add(Ge),n.object.updateMatrixWorld(),he=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(he).add(n.object.position):(Ia.origin.copy(n.object.position),Ia.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ia.direction))<fw?e.lookAt(n.target):(xp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ia.intersectPlane(xp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Q=!0);return l=1,E=!1,Q||$e.distanceToSquared(n.object.position)>o||8*(1-Be.dot(n.object.quaternion))>o||We.distanceToSquared(n.target)>0?(n.dispatchEvent(_p),$e.copy(n.object.position),Be.copy(n.object.quaternion),We.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ae),n.domElement.removeEventListener("pointerdown",Ce),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Re),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new yu,c=new yu;let l=1;const u=new w,h=new J,f=new J,d=new J,p=new J,_=new J,g=new J,m=new J,x=new J,v=new J,y=new w,M=new J;let E=!1;const S=[],R={};function b(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function O(N){c.theta-=N}function z(N){c.phi-=N}const ee=function(){const N=new w;return function(se,$e){N.setFromMatrixColumn($e,0),N.multiplyScalar(-se),u.add(N)}}(),D=function(){const N=new w;return function(se,$e){n.screenSpacePanning===!0?N.setFromMatrixColumn($e,1):(N.setFromMatrixColumn($e,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(se),u.add(N)}}(),k=function(){const N=new w;return function(se,$e){const Be=n.domElement;if(n.object.isPerspectiveCamera){const We=n.object.position;N.copy(We).sub(n.target);let Ue=N.length();Ue*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*se*Ue/Be.clientHeight,n.object.matrix),D(2*$e*Ue/Be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(se*(n.object.right-n.object.left)/n.object.zoom/Be.clientWidth,n.object.matrix),D($e*(n.object.top-n.object.bottom)/n.object.zoom/Be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(N){if(!n.zoomToCursor)return;E=!0;const pe=n.domElement.getBoundingClientRect(),se=N.clientX-pe.left,$e=N.clientY-pe.top,Be=pe.width,We=pe.height;M.x=se/Be*2-1,M.y=-($e/We)*2+1,y.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function ne(N){h.set(N.clientX,N.clientY)}function V(N){oe(N),m.set(N.clientX,N.clientY)}function xe(N){p.set(N.clientX,N.clientY)}function W(N){f.set(N.clientX,N.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;O(2*Math.PI*d.x/pe.clientHeight),z(2*Math.PI*d.y/pe.clientHeight),h.copy(f),n.update()}function L(N){x.set(N.clientX,N.clientY),v.subVectors(x,m),v.y>0?j(T()):v.y<0&&Z(T()),m.copy(x),n.update()}function U(N){_.set(N.clientX,N.clientY),g.subVectors(_,p).multiplyScalar(n.panSpeed),k(g.x,g.y),p.copy(_),n.update()}function _e(N){oe(N),N.deltaY<0?Z(T()):N.deltaY>0&&j(T()),n.update()}function be(N){let pe=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),pe=!0;break}pe&&(N.preventDefault(),n.update())}function ze(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const N=.5*(S[0].pageX+S[1].pageX),pe=.5*(S[0].pageY+S[1].pageY);h.set(N,pe)}}function ie(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const N=.5*(S[0].pageX+S[1].pageX),pe=.5*(S[0].pageY+S[1].pageY);p.set(N,pe)}}function Me(){const N=S[0].pageX-S[1].pageX,pe=S[0].pageY-S[1].pageY,se=Math.sqrt(N*N+pe*pe);m.set(0,se)}function Ve(){n.enableZoom&&Me(),n.enablePan&&ie()}function I(){n.enableZoom&&Me(),n.enableRotate&&ze()}function me(N){if(S.length==1)f.set(N.pageX,N.pageY);else{const se=Se(N),$e=.5*(N.pageX+se.x),Be=.5*(N.pageY+se.y);f.set($e,Be)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;O(2*Math.PI*d.x/pe.clientHeight),z(2*Math.PI*d.y/pe.clientHeight),h.copy(f)}function te(N){if(S.length===1)_.set(N.pageX,N.pageY);else{const pe=Se(N),se=.5*(N.pageX+pe.x),$e=.5*(N.pageY+pe.y);_.set(se,$e)}g.subVectors(_,p).multiplyScalar(n.panSpeed),k(g.x,g.y),p.copy(_)}function fe(N){const pe=Se(N),se=N.pageX-pe.x,$e=N.pageY-pe.y,Be=Math.sqrt(se*se+$e*$e);x.set(0,Be),v.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),j(v.y),m.copy(x)}function re(N){n.enableZoom&&fe(N),n.enablePan&&te(N)}function Fe(N){n.enableZoom&&fe(N),n.enableRotate&&me(N)}function Ce(N){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",Re),n.domElement.addEventListener("pointerup",qe)),ue(N),N.pointerType==="touch"?G(N):ct(N))}function Re(N){n.enabled!==!1&&(N.pointerType==="touch"?le(N):Tt(N))}function qe(N){Oe(N),S.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",Re),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(vp),s=i.NONE}function ct(N){let pe;switch(N.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case hs.DOLLY:if(n.enableZoom===!1)return;V(N),s=i.DOLLY;break;case hs.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;xe(N),s=i.PAN}else{if(n.enableRotate===!1)return;ne(N),s=i.ROTATE}break;case hs.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;ne(N),s=i.ROTATE}else{if(n.enablePan===!1)return;xe(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ll)}function Tt(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(N);break;case i.DOLLY:if(n.enableZoom===!1)return;L(N);break;case i.PAN:if(n.enablePan===!1)return;U(N);break}}function P(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(Ll),_e(N),n.dispatchEvent(vp))}function A(N){n.enabled===!1||n.enablePan===!1||be(N)}function G(N){switch(de(N),S.length){case 1:switch(n.touches.ONE){case fs.ROTATE:if(n.enableRotate===!1)return;ze(),s=i.TOUCH_ROTATE;break;case fs.PAN:if(n.enablePan===!1)return;ie(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case fs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(),s=i.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ll)}function le(N){switch(de(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;te(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(N),n.update();break;default:s=i.NONE}}function ae(N){n.enabled!==!1&&N.preventDefault()}function ue(N){S.push(N)}function Oe(N){delete R[N.pointerId];for(let pe=0;pe<S.length;pe++)if(S[pe].pointerId==N.pointerId){S.splice(pe,1);return}}function de(N){let pe=R[N.pointerId];pe===void 0&&(pe=new J,R[N.pointerId]=pe),pe.set(N.pageX,N.pageY)}function Se(N){const pe=N.pointerId===S[0].pointerId?S[1]:S[0];return R[pe.pointerId]}n.domElement.addEventListener("contextmenu",ae),n.domElement.addEventListener("pointerdown",Ce),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}};const pw=r=>({ref:r&1}),yp=r=>({ref:r[0]});function mw(r){let e;const t=r[6].default,n=yt(t,r,r[8],yp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&257)&&bt(n,t,i,i[8],e?St(t,i[8],s,pw):Mt(i[8]),yp)},i(i){e||(H(n,i),e=!0)},o(i){q(n,i),e=!1},d(i){n&&n.d(i)}}}function gw(r){let e,t;const n=[{is:r[0]},r[5]];let i={$$slots:{default:[mw,({ref:s})=>({0:s}),({ref:s})=>s?1:0]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=ln(i,n[s]);return e=new tt({props:i}),r[7](e),e.$on("change",r[3]),{c(){Te(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){Ae(e,s,o),t=!0},p(s,[o]){const a=o&33?bo(n,[o&1&&{is:s[0]},o&32&&Ja(s[5])]):{};o&257&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){r[7](null),we(e,s)}}}function _w(r,e,t){const n=["ref"];let i=Wn(e,n),s,o,{$$slots:a={},$$scope:c}=e;const l=Lh();ft(r,l,v=>t(9,s=v));const u=v=>v.isCamera,{renderer:h,invalidate:f}=En();if(!u(s))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const d=new dw(s,h.domElement),{start:p,stop:_}=Ci(()=>d.update(),{autoStart:!1,autoInvalidate:!1}),g=Ih();ft(r,g,v=>t(1,o=v));const{orbitControls:m}=hw();m.set(d),Ln(()=>m.set(void 0));function x(v){Ar[v?"unshift":"push"](()=>{o=v,g.set(o)})}return r.$$set=v=>{e=ln(ln({},e),As(v)),t(5,i=Wn(e,n)),"$$scope"in v&&t(8,c=v.$$scope)},r.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[d,o,l,f,g,i,a,x,c]}class vw extends kt{constructor(e){super(),Ht(this,e,_w,gw,zt,{ref:0})}get ref(){return this.$$.ctx[0]}}new He;new He;new At;`${Xe.logdepthbuf_pars_vertex}${Xe.fog_pars_vertex}${Xe.logdepthbuf_vertex}${Xe.fog_vertex}`;`${Xe.tonemapping_fragment}${Xe.colorspace_fragment}`;`${Xe.tonemapping_fragment}${Xe.colorspace_fragment}`;const xw=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,yw=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,bw=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Mw=bw,Sw=`
	${xw}
	${yw}
`;`${Mw}${Sw}${Xe.tonemapping_fragment}${Xe.colorspace_fragment}`;for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new Bs(-1,1,1,-1,0,1);class Tw extends Je{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}}new Tw;var u_={exports:{}};u_.exports=Uc;u_.exports.default=Uc;function Uc(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=h_(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,u,h,f,d;if(n&&(s=Rw(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(var p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return _o(s,o,t,a,c,d,0),o}function h_(r,e,t,n,i){var s,o;if(i===Pu(r,e,t,n)>0)for(s=e;s<t;s+=n)o=bp(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=bp(s,r[s],r[s+1],o);return o&&Oc(o,o.next)&&(xo(o),o=o.next),o}function Os(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Oc(t,t.next)||Lt(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(r,e,t,n,i,s,o){if(r){!o&&s&&Nw(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Aw(r,n,i,s):Ew(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),xo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=ww(Os(r),e,t),_o(r,e,t,n,i,s,2)):o===2&&Cw(r,e,t,n,i,s):_o(Os(r),e,t,n,i,s,1);break}}}}function Ew(r){var e=r.prev,t=r,n=r.next;if(Lt(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&dr(i,a,s,c,o,l,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Aw(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Lt(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,m=Cu(d,p,e,t,n),x=Cu(_,g,e,t,n),v=r.prevZ,y=r.nextZ;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&dr(a,u,c,h,l,f,v.x,v.y)&&Lt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&dr(a,u,c,h,l,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&dr(a,u,c,h,l,f,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&dr(a,u,c,h,l,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ww(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Oc(i,s)&&f_(i,n,n.next,s)&&vo(i,s)&&vo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),xo(n),xo(n.next),n=r=s),n=n.next}while(n!==r);return Os(n)}function Cw(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Fw(o,a)){var c=d_(o,a);o=Os(o,o.next),c=Os(c,c.next),_o(o,e,t,n,i,s,0),_o(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Rw(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=h_(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ow(l));for(i.sort(Pw),s=0;s<i.length;s++)t=Lw(i[s],t);return t}function Pw(r,e){return r.x-e.x}function Lw(r,e){var t=Iw(r,e);if(!t)return e;var n=d_(t,r);return Os(n,n.next),Os(t,t.next)}function Iw(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&dr(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),vo(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Dw(o,t)))&&(o=t,h=f)),t=t.next;while(t!==c);return o}function Dw(r,e){return Lt(r.prev,r,e.prev)<0&&Lt(e.next,r,r.next)<0}function Nw(r,e,t,n){var i=r;do i.z===0&&(i.z=Cu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Uw(i)}function Uw(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function Cu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ow(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function dr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Fw(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Bw(r,e)&&(vo(r,e)&&vo(e,r)&&zw(r,e)&&(Lt(r.prev,r,e.prev)||Lt(r,e.prev,e))||Oc(r,e)&&Lt(r.prev,r,r.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Oc(r,e){return r.x===e.x&&r.y===e.y}function f_(r,e,t,n){var i=Na(Lt(r,e,t)),s=Na(Lt(r,e,n)),o=Na(Lt(t,n,r)),a=Na(Lt(t,n,e));return!!(i!==s&&o!==a||i===0&&Da(r,t,e)||s===0&&Da(r,n,e)||o===0&&Da(t,r,n)||a===0&&Da(t,e,n))}function Da(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Na(r){return r>0?1:r<0?-1:0}function Bw(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&f_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function vo(r,e){return Lt(r.prev,r,r.next)<0?Lt(r,e,r.next)>=0&&Lt(r,r.prev,e)>=0:Lt(r,e,r.prev)<0||Lt(r,r.next,e)<0}function zw(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function d_(r,e){var t=new Ru(r.i,r.x,r.y),n=new Ru(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bp(r,e,t,n){var i=new Ru(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ru(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Uc.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(Pu(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:r.length;o-=Math.abs(Pu(r,l,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;h+=Math.abs((r[f]-r[p])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[p+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Pu(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Uc.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new J;new J;var Mp;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(Mp||(Mp={}));function kw(r,e,t){const n=r.slice();return n[5]=e[t],n}function Sp(r,e,t){const n=r.slice();return n[8]=e[t],n}function Tp(r,e,t){const n=r.slice();return n[11]=e[t],n}function Ep(r,e){let t,n,i,s,o;return n=new Eu({props:{hand:e[11]}}),n.$on("pinchstart",e[3]),n.$on("connected",e[1]),n.$on("disconnected",e[1]),n.$on("pinchstart",e[1]),n.$on("pinchend",e[1]),s=new Tu({props:{hand:e[11]}}),s.$on("connected",e[2]),s.$on("disconnected",e[2]),s.$on("select",e[2]),s.$on("squeeze",e[2]),s.$on("selectstart",e[2]),s.$on("selectend",e[2]),s.$on("squeezestart",e[2]),s.$on("squeezeend",e[2]),{key:r,first:null,c(){t=gt(),Te(n.$$.fragment),i=ot(),Te(s.$$.fragment),this.h()},l(a){t=gt(),Ee(n.$$.fragment,a),i=at(a),Ee(s.$$.fragment,a),this.h()},h(){this.first=t},m(a,c){Ne(a,t,c),Ae(n,a,c),Ne(a,i,c),Ae(s,a,c),o=!0},p(a,c){e=a},i(a){o||(H(n.$$.fragment,a),H(s.$$.fragment,a),o=!0)},o(a){q(n.$$.fragment,a),q(s.$$.fragment,a),o=!1},d(a){a&&(Le(t),Le(i)),we(n,a),we(s,a)}}}function Hw(r){let e=[],t=new Map,n,i,s=jr(r[4]);const o=a=>a[11];for(let a=0;a<s.length;a+=1){let c=Tp(r,s,a),l=o(c);t.set(l,e[a]=Ep(l,c))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=gt()},l(a){for(let c=0;c<e.length;c+=1)e[c].l(a);n=gt()},m(a,c){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,c);Ne(a,n,c),i=!0},p(a,c){c&30&&(s=jr(a[4]),Wt(),e=Np(e,c,o,1,a,s,t,n.parentNode,Dp,Ep,n,Tp),Xt())},i(a){if(!i){for(let c=0;c<s.length;c+=1)H(e[c]);i=!0}},o(a){for(let c=0;c<e.length;c+=1)q(e[c]);i=!1},d(a){a&&Le(n);for(let c=0;c<e.length;c+=1)e[c].d(a)}}}function Vw(r){let e,t,n,i;return e=new tt.CircleGeometry({props:{args:[1]}}),n=new tt.MeshBasicMaterial({}),{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=at(s),Ee(n.$$.fragment,s)},m(s,o){Ae(e,s,o),Ne(s,t,o),Ae(n,s,o),i=!0},p:Et,i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){q(e.$$.fragment,s),q(n.$$.fragment,s),i=!1},d(s){s&&Le(t),we(e,s),we(n,s)}}}function Ap(r,e){let t,n,i;return n=new tt({props:{is:e[8]}}),{key:r,first:null,c(){t=gt(),Te(n.$$.fragment),this.h()},l(s){t=gt(),Ee(n.$$.fragment,s),this.h()},h(){this.first=t},m(s,o){Ne(s,t,o),Ae(n,s,o),i=!0},p(s,o){e=s;const a={};o&1&&(a.is=e[8]),n.$set(a)},i(s){i||(H(n.$$.fragment,s),i=!0)},o(s){q(n.$$.fragment,s),i=!1},d(s){s&&Le(t),we(n,s)}}}function Gw(r){let e,t;return e=new vw({props:{enableZoom:!0,enableDamping:!0,"target.y":1.5}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p:Et,i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Ww(r){let e,t,n,i,s;return e=new tt.BoxGeometry({}),n=new tt.MeshStandardMaterial({props:{color:"#0059BA"}}),{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment),i=ot()},l(o){Ee(e.$$.fragment,o),t=at(o),Ee(n.$$.fragment,o),i=at(o)},m(o,a){Ae(e,o,a),Ne(o,t,a),Ae(n,o,a),Ne(o,i,a),s=!0},p:Et,i(o){s||(H(e.$$.fragment,o),H(n.$$.fragment,o),s=!0)},o(o){q(e.$$.fragment,o),q(n.$$.fragment,o),s=!1},d(o){o&&(Le(t),Le(i)),we(e,o),we(n,o)}}}function Xw(r){let e,t;return e=new tt.Mesh({props:{"position.y":1.2,"position.z":-2*r[5],$$slots:{default:[Ww]},$$scope:{ctx:r}}}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},p(n,i){const s={};i&16384&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function qw(r){let e,t,n,i,s,o,a,c,l,u,h=[],f=new Map,d,p,_,g,m,x,v,y,M,E,S,R,b,T,O,z,ee,D,k,j,Z,oe,K;e=new pp({props:{$$slots:{default:[Hw]},$$scope:{ctx:r}}}),n=new tt.Mesh({props:{rotation:[-Math.PI/2,0,0],$$slots:{default:[Vw]},$$scope:{ctx:r}}}),s=new tt.PerspectiveCamera({props:{makeDefault:!0,position:[0,1.8,1]}}),s.$on("create",$w),a=new tt.AmbientLight({}),l=new tt.DirectionalLight({});let ne=jr(r[0]);const V=L=>L[8].uuid;for(let L=0;L<ne.length;L+=1){let U=Sp(r,ne,L),_e=V(U);f.set(_e,h[L]=Ap(_e,U))}p=new pp({}),g=new Tu({props:{left:!0}}),x=new Tu({props:{right:!0}}),y=new Eu({props:{left:!0}}),E=new Eu({props:{right:!0}}),R=new tt.PerspectiveCamera({props:{makeDefault:!0,position:[-10,10,10],fov:15,$$slots:{default:[Gw]},$$scope:{ctx:r}}}),T=new tt.DirectionalLight({props:{intensity:.8,"position.x":5,"position.y":10}}),z=new tt.AmbientLight({props:{intensity:.2}}),D=new uw({props:{"position.y":-.001,cellColor:"#ffffff",sectionColor:"#ffffff",sectionThickness:0,fadeDistance:25,cellSize:2}}),j=new tw({props:{scale:10,blur:2,far:2.5,opacity:.5}});let xe=jr([1,2,3]),W=[];for(let L=0;L<3;L+=1)W[L]=Xw(kw(r,xe,L));return{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment),i=ot(),Te(s.$$.fragment),o=ot(),Te(a.$$.fragment),c=ot(),Te(l.$$.fragment),u=ot();for(let L=0;L<h.length;L+=1)h[L].c();d=ot(),Te(p.$$.fragment),_=ot(),Te(g.$$.fragment),m=ot(),Te(x.$$.fragment),v=ot(),Te(y.$$.fragment),M=ot(),Te(E.$$.fragment),S=ot(),Te(R.$$.fragment),b=ot(),Te(T.$$.fragment),O=ot(),Te(z.$$.fragment),ee=ot(),Te(D.$$.fragment),k=ot(),Te(j.$$.fragment),Z=ot();for(let L=0;L<3;L+=1)W[L].c();oe=gt()},l(L){Ee(e.$$.fragment,L),t=at(L),Ee(n.$$.fragment,L),i=at(L),Ee(s.$$.fragment,L),o=at(L),Ee(a.$$.fragment,L),c=at(L),Ee(l.$$.fragment,L),u=at(L);for(let U=0;U<h.length;U+=1)h[U].l(L);d=at(L),Ee(p.$$.fragment,L),_=at(L),Ee(g.$$.fragment,L),m=at(L),Ee(x.$$.fragment,L),v=at(L),Ee(y.$$.fragment,L),M=at(L),Ee(E.$$.fragment,L),S=at(L),Ee(R.$$.fragment,L),b=at(L),Ee(T.$$.fragment,L),O=at(L),Ee(z.$$.fragment,L),ee=at(L),Ee(D.$$.fragment,L),k=at(L),Ee(j.$$.fragment,L),Z=at(L);for(let U=0;U<3;U+=1)W[U].l(L);oe=gt()},m(L,U){Ae(e,L,U),Ne(L,t,U),Ae(n,L,U),Ne(L,i,U),Ae(s,L,U),Ne(L,o,U),Ae(a,L,U),Ne(L,c,U),Ae(l,L,U),Ne(L,u,U);for(let _e=0;_e<h.length;_e+=1)h[_e]&&h[_e].m(L,U);Ne(L,d,U),Ae(p,L,U),Ne(L,_,U),Ae(g,L,U),Ne(L,m,U),Ae(x,L,U),Ne(L,v,U),Ae(y,L,U),Ne(L,M,U),Ae(E,L,U),Ne(L,S,U),Ae(R,L,U),Ne(L,b,U),Ae(T,L,U),Ne(L,O,U),Ae(z,L,U),Ne(L,ee,U),Ae(D,L,U),Ne(L,k,U),Ae(j,L,U),Ne(L,Z,U);for(let _e=0;_e<3;_e+=1)W[_e]&&W[_e].m(L,U);Ne(L,oe,U),K=!0},p(L,[U]){const _e={};U&16384&&(_e.$$scope={dirty:U,ctx:L}),e.$set(_e);const be={};U&16384&&(be.$$scope={dirty:U,ctx:L}),n.$set(be),U&1&&(ne=jr(L[0]),Wt(),h=Np(h,U,V,1,L,ne,f,d.parentNode,Dp,Ap,d,Sp),Xt());const ze={};U&16384&&(ze.$$scope={dirty:U,ctx:L}),R.$set(ze)},i(L){if(!K){H(e.$$.fragment,L),H(n.$$.fragment,L),H(s.$$.fragment,L),H(a.$$.fragment,L),H(l.$$.fragment,L);for(let U=0;U<ne.length;U+=1)H(h[U]);H(p.$$.fragment,L),H(g.$$.fragment,L),H(x.$$.fragment,L),H(y.$$.fragment,L),H(E.$$.fragment,L),H(R.$$.fragment,L),H(T.$$.fragment,L),H(z.$$.fragment,L),H(D.$$.fragment,L),H(j.$$.fragment,L);for(let U=0;U<3;U+=1)H(W[U]);K=!0}},o(L){q(e.$$.fragment,L),q(n.$$.fragment,L),q(s.$$.fragment,L),q(a.$$.fragment,L),q(l.$$.fragment,L);for(let U=0;U<h.length;U+=1)q(h[U]);q(p.$$.fragment,L),q(g.$$.fragment,L),q(x.$$.fragment,L),q(y.$$.fragment,L),q(E.$$.fragment,L),q(R.$$.fragment,L),q(T.$$.fragment,L),q(z.$$.fragment,L),q(D.$$.fragment,L),q(j.$$.fragment,L),W=W.filter(Boolean);for(let U=0;U<3;U+=1)q(W[U]);K=!1},d(L){L&&(Le(t),Le(i),Le(o),Le(c),Le(u),Le(d),Le(_),Le(m),Le(v),Le(M),Le(S),Le(b),Le(O),Le(ee),Le(k),Le(Z),Le(oe)),we(e,L),we(n,L),we(s,L),we(a,L),we(l,L);for(let U=0;U<h.length;U+=1)h[U].d(L);we(p,L),we(g,L),we(x,L),we(y,L),we(E,L),we(R,L),we(T,L),we(z,L),we(D,L),we(j,L),C_(W,L)}}}const $w=({ref:r})=>r.lookAt(0,1.8,0);function Yw(r,e,t){let n=[];return[n,c=>{console.log("Hand",c)},c=>{console.log("Controller",c)},c=>{const l=c.target,u=.05,h=new Ri(u,u,u),f=new ks({color:Math.random()*16777215}),d=new At(h,f),p=l.joints["index-finger-tip"];d.position.copy(p.position),d.quaternion.copy(p.quaternion),n.push(d),t(0,n)},["left","right"]]}class jw extends kt{constructor(e){super(),Ht(this,e,Yw,qw,zt,{})}}function Zw(r){let e,t;return e=new jw({}),{c(){Te(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Ae(e,n,i),t=!0},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){q(e.$$.fragment,n),t=!1},d(n){we(e,n)}}}function Kw(r){let e,t,n,i;return e=new VT({props:{$$slots:{default:[Zw]},$$scope:{ctx:r}}}),n=new DE({}),{c(){Te(e.$$.fragment),t=ot(),Te(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=at(s),Ee(n.$$.fragment,s)},m(s,o){Ae(e,s,o),Ne(s,t,o),Ae(n,s,o),i=!0},p(s,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){q(e.$$.fragment,s),q(n.$$.fragment,s),i=!1},d(s){s&&Le(t),we(e,s),we(n,s)}}}class Jw extends kt{constructor(e){super(),Ht(this,e,null,Kw,zt,{})}}function Qw(r){let e,t,n;return t=new Jw({}),{c(){e=Lu("div"),Te(t.$$.fragment),this.h()},l(i){e=Iu(i,"DIV",{class:!0});var s=Du(e);Ee(t.$$.fragment,s),s.forEach(Le),this.h()},h(){wp(e,"class","svelte-1cwcxaa")},m(i,s){Ne(i,e,s),Ae(t,e,null),n=!0},p:Et,i(i){n||(H(t.$$.fragment,i),n=!0)},o(i){q(t.$$.fragment,i),n=!1},d(i){i&&Le(e),we(t)}}}class aC extends kt{constructor(e){super(),Ht(this,e,null,Qw,zt,{})}}export{aC as component};
