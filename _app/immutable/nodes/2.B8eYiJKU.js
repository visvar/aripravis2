var av=Object.defineProperty;var cv=(r,e,t)=>e in r?av(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Nt=(r,e,t)=>cv(r,typeof e!="symbol"?e+"":e,t);import{n as At,P as lv,Q as Nc,J as sa,E as uv,r as hv,R as In,S as hi,C as fv,T as Ii,s as Ht,c as yt,u as bt,g as Mt,b as St,q as ut,e as wh,f as Ah,h as Eh,k as De,y as Wm,m as Oe,U as dv,x as Zr,A as Vs,d as ht,v as gt,l as ft,V as Xn,W as ln,X as Fr,Y as pv,Z as Wf,_ as mv,t as Br,j as kr,p as xc,$ as Xf,a as Go,a0 as Xm,a1 as qm,a2 as oa,a3 as gv}from"../chunks/scheduler.Ba_pz72M.js";import{g as kt,a as $,c as zt,t as H,S as Vt,i as Gt,b as Ae,d as Ee,m as Te,e as Ce,f as $m}from"../chunks/index.BWd3zC2b.js";import{w as pn,d as Th,r as _v}from"../chunks/index.CAI8Zb1s.js";const Ym=typeof window<"u";let qf=Ym?()=>window.performance.now():()=>Date.now(),Ch=Ym?r=>requestAnimationFrame(r):At;function vv(r){Ch=r}const Cs=new Set;function Zm(r){Cs.forEach(e=>{e.c(r)||(Cs.delete(e),e.f())}),Cs.size!==0&&Ch(Zm)}function xv(r){let e;return Cs.size===0&&Ch(Zm),{promise:new Promise(t=>{Cs.add(e={c:r,f:t})}),abort(){Cs.delete(e)}}}function $f(r,e){const t=e.token={};function n(i,s,o,a){if(e.token!==t)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=i&&(e.current=i)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(kt(),$(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),zt())}):e.block.d(1),l.c(),H(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[s]=l),u&&uv()}if(lv(r)){const i=Nc();if(r.then(s=>{sa(i),n(e.then,1,e.value,s),sa(null)},s=>{if(sa(i),n(e.catch,2,e.error,s),sa(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function yv(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function Ss(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Km(r,e){$(r,1,1,()=>{e.delete(r.key)})}function jm(r,e,t,n,i,s,o,a,c,l,u,h){let f=r.length,d=s.length,p=f;const _={};for(;p--;)_[r[p].key]=p;const g=[],m=new Map,x=new Map,v=[];for(p=d;p--;){const S=h(i,s,p),R=t(S);let b=o.get(R);b?v.push(()=>b.p(S,e)):(b=l(R,S),b.c()),m.set(R,g[p]=b),R in _&&x.set(R,Math.abs(p-_[R]))}const y=new Set,M=new Set;function A(S){H(S,1),S.m(a,u),o.set(S.key,S),u=S.first,d--}for(;f&&d;){const S=g[d-1],R=r[f-1],b=S.key,w=R.key;S===R?(u=S.first,f--,d--):m.has(w)?!o.has(b)||y.has(b)?A(S):M.has(w)?f--:x.get(b)>x.get(w)?(M.add(b),A(S)):(y.add(w),f--):(c(R,o),f--)}for(;f--;){const S=r[f];m.has(S.key)||c(S,o)}for(;d;)A(g[d-1]);return hv(v),g}function Wo(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=e[s];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);r[s]=a}else for(const c in o)i[c]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Uc(r){return typeof r=="object"&&r!==null?r:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="159",yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jm=0,yu=1,Qm=2,bv=3,Mv=0,Rh=1,Oc=2,ci=3,pi=0,Sn=1,On=2,Sv=2,Ci=0,Pr=1,bu=2,Mu=3,Su=4,eg=5,Zi=100,tg=101,ng=102,wu=103,Au=104,ig=200,rg=201,sg=202,og=203,yc=204,bc=205,ag=206,cg=207,lg=208,ug=209,hg=210,fg=211,dg=212,pg=213,mg=214,gg=0,_g=1,vg=2,yo=3,xg=4,yg=5,bg=6,Mg=7,Xo=0,Sg=1,wg=2,Ri=0,Ag=1,Eg=2,Tg=3,Ph=4,Cg=5,Eu="attached",Rg="detached",Fc=300,Di=301,er=302,bo=303,Mo=304,Ws=306,tr=1e3,cn=1001,Ds=1002,Ft=1003,So=1004,wv=1004,Rs=1005,Av=1005,Rt=1006,Bc=1007,Ev=1007,mi=1008,Tv=1008,Pi=1009,Pg=1010,Lg=1011,kc=1012,Lh=1013,Ti=1014,Kn=1015,Ns=1016,Ih=1017,Dh=1018,Ki=1020,Ig=1021,Cn=1023,Dg=1024,Ng=1025,ji=1026,zr=1027,Ug=1028,Nh=1029,Og=1030,Uh=1031,Oh=1033,lc=33776,uc=33777,hc=33778,fc=33779,Tu=35840,Cu=35841,Ru=35842,Pu=35843,Fh=36196,Lu=37492,Iu=37496,Du=37808,Nu=37809,Uu=37810,Ou=37811,Fu=37812,Bu=37813,ku=37814,zu=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,qu=37821,dc=36492,$u=36494,Yu=36495,Fg=36283,Zu=36284,Ku=36285,ju=36286,Bg=2200,kg=2201,zg=2202,Us=2300,Hr=2301,pc=2302,Ar=2400,Er=2401,wo=2402,zc=2500,Bh=2501,Hg=0,kh=1,Mc=2,zh=3e3,Ji=3001,Vg=3200,Gg=3201,ir=0,Wg=1,Fn="",Tt="srgb",rn="srgb-linear",Hc="display-p3",qo="display-p3-linear",Ao="linear",xt="srgb",Eo="rec709",To="p3",Cv=0,Mr=7680,Rv=7681,Pv=7682,Lv=7683,Iv=34055,Dv=34056,Nv=5386,Uv=512,Ov=513,Fv=514,Bv=515,kv=516,zv=517,Hv=518,Ju=519,Xg=512,qg=513,$g=514,Hh=515,Yg=516,Zg=517,Kg=518,jg=519,Co=35044,Jg=35048,Vv=35040,Gv=35045,Wv=35049,Xv=35041,qv=35046,$v=35050,Yv=35042,Zv="100",Qu="300 es",Sc=1035,jn=2e3,Os=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yf=1234567;const Lr=Math.PI/180,Fs=180/Math.PI;function Bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Bt(r,e,t){return Math.max(e,Math.min(t,r))}function Vh(r,e){return(r%e+e)%e}function Kv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function jv(r,e,t){return r!==e?(t-r)/(e-r):0}function go(r,e,t){return(1-t)*r+t*e}function Jv(r,e,t,n){return go(r,e,1-Math.exp(-t*n))}function Qv(r,e=1){return e-Math.abs(Vh(r,e*2)-e)}function ex(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function nx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ix(r,e){return r+Math.random()*(e-r)}function rx(r){return r*(.5-Math.random())}function sx(r){r!==void 0&&(Yf=r);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ox(r){return r*Lr}function ax(r){return r*Fs}function eh(r){return(r&r-1)===0&&r!==0}function cx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lx(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*p,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*p,a*l);break;case"ZYZ":r.set(c*p,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vc={DEG2RAD:Lr,RAD2DEG:Fs,generateUUID:Bn,clamp:Bt,euclideanModulo:Vh,mapLinear:Kv,inverseLerp:jv,lerp:go,damp:Jv,pingpong:Qv,smoothstep:ex,smootherstep:tx,randInt:nx,randFloat:ix,randFloatSpread:rx,seededRandom:sx,degToRad:ox,radToDeg:ax,isPowerOfTwo:eh,ceilPowerOfTwo:cx,floorPowerOfTwo:wc,setQuaternionFromProperEuler:lx,normalize:et,denormalize:Rn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,o,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],x=i[1],v=i[4],y=i[7],M=i[2],A=i[5],S=i[8];return s[0]=o*_+a*x+c*M,s[3]=o*g+a*v+c*A,s[6]=o*m+a*y+c*S,s[1]=l*_+u*x+h*M,s[4]=l*g+u*v+h*A,s[7]=l*m+u*y+h*S,s[2]=f*_+d*x+p*M,s[5]=f*g+d*v+p*A,s[8]=f*m+d*y+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new je;function Qg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const ux={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ws(r,e){return new ux[r](e)}function Ro(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function e_(){const r=Ro("canvas");return r.style.display="block",r}const Zf={};function _o(r){r in Zf||(Zf[r]=!0,console.warn(r))}const Kf=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jf=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[rn]:{transfer:Ao,primaries:Eo,toReference:r=>r,fromReference:r=>r},[Tt]:{transfer:xt,primaries:Eo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[qo]:{transfer:Ao,primaries:To,toReference:r=>r.applyMatrix3(jf),fromReference:r=>r.applyMatrix3(Kf)},[Hc]:{transfer:xt,primaries:To,toReference:r=>r.convertSRGBToLinear().applyMatrix3(jf),fromReference:r=>r.applyMatrix3(Kf).convertLinearToSRGB()}},hx=new Set([rn,qo]),pt={enabled:!0,_workingColorSpace:rn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hx.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=aa[e].toReference,i=aa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return aa[r].primaries},getTransfer:function(r){return r===Fn?Ao:aa[r].transfer}};function Ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ns;class Gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Ro("canvas")),ns.width=e.width,ns.height=e.height;const n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ps(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class Tr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Rl(i[o].image)):s.push(Rl(i[o]))}else s=Rl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dx=0;class It extends gi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=cn,i=cn,s=Rt,o=mi,a=Cn,c=Pi,l=It.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Bn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ji?Tt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Ji:zh}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?Tt:Fn}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Fc;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,M=(m+1)/2,A=(u+f)/4,S=(h+_)/4,R=(p+g)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=S/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=R/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=R/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t_ extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?Tt:Fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends t_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class px extends kn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Gc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Wh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mx extends kn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Wh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class gx extends kn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==p){let g=1-a;const m=c*f+l*d+u*p+h*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),A=Math.atan2(M,m*x);g=Math.sin(g*A)/M,a=Math.sin(a*A)/M}const y=a*x;if(c=c*g+f*y,l=l*g+d*y,u=u*g+p*y,h=h*g+_*y,g===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-a*d,e[t+2]=l*p+u*d+a*f-c*h,e[t+3]=u*p-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new T,Jf=new nn;class Yt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),la.subVectors(this.max,Ks),is.subVectors(e.a,Ks),rs.subVectors(e.b,Ks),ss.subVectors(e.c,Ks),Bi.subVectors(rs,is),ki.subVectors(ss,rs),cr.subVectors(is,ss);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-cr.z,cr.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,cr.z,0,-cr.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-cr.y,cr.x,0];return!Ll(t,is,rs,ss,la)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,is,rs,ss,la))?!1:(ua.crossVectors(Bi,ki),t=[ua.x,ua.y,ua.z],Ll(t,is,rs,ss,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new T,new T,new T,new T,new T,new T,new T,new T],qn=new T,ca=new Yt,is=new T,rs=new T,ss=new T,Bi=new T,ki=new T,cr=new T,Ks=new T,la=new T,ua=new T,lr=new T;function Ll(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){lr.fromArray(r,s);const a=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),c=e.dot(lr),l=t.dot(lr),u=n.dot(lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _x=new Yt,js=new T,Il=new T;class Zt{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_x.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Il)),this.expandByPoint(js.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new T,Dl=new T,ha=new T,zi=new T,Nl=new T,fa=new T,Ul=new T;class Kr{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dl.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=zi.dot(this.direction),c=-zi.dot(ha),l=zi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*c-a,f=o*a-c,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dl).addScaledVector(ha,f),d}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){Nl.subVectors(t,e),fa.subVectors(n,e),Ul.crossVectors(Nl,fa);let o=this.direction.dot(Ul),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const c=a*this.direction.dot(fa.crossVectors(zi,fa));if(c<0)return null;const l=a*this.direction.dot(Nl.cross(zi));if(l<0||c+l>o)return null;const u=-a*zi.dot(Ul);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,g){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,g)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,xx)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Hi.crossVectors(n,Nn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Hi.crossVectors(n,Nn)),Hi.normalize(),da.crossVectors(Nn,Hi),i[0]=Hi.x,i[4]=da.x,i[8]=Nn.x,i[1]=Hi.y,i[5]=da.y,i[9]=Nn.y,i[2]=Hi.z,i[6]=da.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],v=n[7],y=n[11],M=n[15],A=i[0],S=i[4],R=i[8],b=i[12],w=i[1],U=i[5],k=i[9],W=i[13],N=i[2],P=i[6],O=i[10],G=i[14],oe=i[3],Q=i[7],j=i[11],z=i[15];return s[0]=o*A+a*w+c*N+l*oe,s[4]=o*S+a*U+c*P+l*Q,s[8]=o*R+a*k+c*O+l*j,s[12]=o*b+a*W+c*G+l*z,s[1]=u*A+h*w+f*N+d*oe,s[5]=u*S+h*U+f*P+d*Q,s[9]=u*R+h*k+f*O+d*j,s[13]=u*b+h*W+f*G+d*z,s[2]=p*A+_*w+g*N+m*oe,s[6]=p*S+_*U+g*P+m*Q,s[10]=p*R+_*k+g*O+m*j,s[14]=p*b+_*W+g*G+m*z,s[3]=x*A+v*w+y*N+M*oe,s[7]=x*S+v*U+y*P+M*Q,s[11]=x*R+v*k+y*O+M*j,s[15]=x*b+v*W+y*G+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+g*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],x=h*g*l-_*f*l+_*c*d-a*g*d-h*c*m+a*f*m,v=p*f*l-u*g*l-p*c*d+o*g*d+u*c*m-o*f*m,y=u*_*l-p*h*l+p*a*d-o*_*d-u*a*m+o*h*m,M=p*h*c-u*_*c-p*a*f+o*_*f+u*a*g-o*h*g,A=t*x+n*v+i*y+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return e[0]=x*S,e[1]=(_*f*s-h*g*s-_*i*d+n*g*d+h*i*m-n*f*m)*S,e[2]=(a*g*s-_*c*s+_*i*l-n*g*l-a*i*m+n*c*m)*S,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*S,e[4]=v*S,e[5]=(u*g*s-p*f*s+p*i*d-t*g*d-u*i*m+t*f*m)*S,e[6]=(p*c*s-o*g*s-p*i*l+t*g*l+o*i*m-t*c*m)*S,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*S,e[8]=y*S,e[9]=(p*h*s-u*_*s-p*n*d+t*_*d+u*n*m-t*h*m)*S,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*m+t*a*m)*S,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*S,e[12]=M*S,e[13]=(u*_*i-p*h*i+p*n*f-t*_*f-u*n*g+t*h*g)*S,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*g-t*a*g)*S,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,p=s*h,_=o*u,g=o*h,m=a*h,x=c*l,v=c*u,y=c*h,M=n.x,A=n.y,S=n.z;return i[0]=(1-(_+m))*M,i[1]=(d+y)*M,i[2]=(p-v)*M,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+m))*A,i[6]=(g+x)*A,i[7]=0,i[8]=(p+v)*S,i[9]=(g-x)*S,i[10]=(1-(f+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);const l=1/s,u=1/o,h=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=jn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===jn)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Os)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=jn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u;let p,_;if(a===jn)p=(o+s)*h,_=-2*h;else if(a===Os)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new T,$n=new ze,vx=new T(0,0,0),xx=new T(1,1,1),Hi=new T,da=new T,Nn=new T,Qf=new ze,ed=new nn;class $o{constructor(e=0,t=0,n=0,i=$o.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$o.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yx=0;const td=new T,as=new nn,bi=new ze,pa=new T,Js=new T,bx=new T,Mx=new nn,nd=new T(1,0,0),id=new T(0,1,0),rd=new T(0,0,1),Sx={type:"added"},wx={type:"removed"};class ct extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new T,t=new $o,n=new nn,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new je}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Js,pa,this.up):bi.lookAt(pa,Js,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),as.setFromRotationMatrix(bi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new T(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new T,Mi=new T,Ol=new T,Si=new T,cs=new T,ls=new T,sd=new T,Fl=new T,Bl=new T,kl=new T;let ma=!1;class Tn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yn.subVectors(i,t),Mi.subVectors(n,t),Ol.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Mi),c=Yn.dot(Ol),l=Mi.dot(Mi),u=Mi.dot(Ol),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,p=(o*u-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,n,i,s,o,a,c){return ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ma=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Si),c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ma=!0),Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;cs.subVectors(i,n),ls.subVectors(s,n),Fl.subVectors(e,n);const c=cs.dot(Fl),l=ls.dot(Fl);if(c<=0&&l<=0)return t.copy(n);Bl.subVectors(e,i);const u=cs.dot(Bl),h=ls.dot(Bl);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(cs,o);kl.subVectors(e,s);const d=cs.dot(kl),p=ls.dot(kl);if(p>=0&&d<=p)return t.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(ls,a);const g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return sd.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(sd,a);const m=1/(g+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function zl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Vh(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zl(o,s,e+1/3),this.g=zl(o,s,e),this.b=zl(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=n_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=Cl(e.r),this.g=Cl(e.g),this.b=Cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return pt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Bt(fn.r*255,0,255))*65536+Math.round(Bt(fn.g*255,0,255))*256+Math.round(Bt(fn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Tt){pt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ga);const n=go(Vi.h,ga.h,t),i=go(Vi.s,ga.s,t),s=go(Vi.l,ga.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const fn=new _e;_e.NAMES=n_;let Ax=0;class Kt extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Pr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=bc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mn extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ei=Ex();function Ex(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function En(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Bt(r,-65504,65504),Ei.floatView[0]=r;const e=Ei.uint32View[0],t=e>>23&511;return Ei.baseTable[t]+((e&8388607)>>Ei.shiftTable[t])}function lo(r){const e=r>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[e]+(r&1023)]+Ei.exponentTable[e],Ei.floatView[0]}const Tx={toHalfFloat:En,fromHalfFloat:lo},qt=new T,_a=new J;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),e}}class Cx extends mt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Rx extends mt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Px extends mt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Lx extends mt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Xh extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ix extends mt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class qh extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dx extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=lo(this.array[e*this.itemSize]);return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=En(t),this}getY(e){let t=lo(this.array[e*this.itemSize+1]);return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=En(t),this}getZ(e){let t=lo(this.array[e*this.itemSize+2]);return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=En(t),this}getW(e){let t=lo(this.array[e*this.itemSize+3]);return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=En(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(n),this.array[e+2]=En(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=En(t),this.array[e+1]=En(n),this.array[e+2]=En(i),this.array[e+3]=En(s),this}}class Le extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}class Nx extends mt{constructor(e,t,n){super(new Float64Array(e),t,n)}}let Ux=0;const Vn=new ze,Hl=new ct,us=new T,Un=new Yt,Qs=new Yt,tn=new T;class Je extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?qh:Xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Un.min,Qs.min),Un.expandByPoint(tn),tn.addVectors(Un.max,Qs.max),Un.expandByPoint(tn)):(Un.expandByPoint(Qs.min),Un.expandByPoint(Qs.max))}Un.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(e,l),tn.add(us)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new T,u[w]=new T;const h=new T,f=new T,d=new T,p=new J,_=new J,g=new J,m=new T,x=new T;function v(w,U,k){h.fromArray(i,w*3),f.fromArray(i,U*3),d.fromArray(i,k*3),p.fromArray(o,w*2),_.fromArray(o,U*2),g.fromArray(o,k*2),f.sub(h),d.sub(h),_.sub(p),g.sub(p);const W=1/(_.x*g.y-g.x*_.y);isFinite(W)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(W),x.copy(d).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(W),l[w].add(m),l[U].add(m),l[k].add(m),u[w].add(x),u[U].add(x),u[k].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,U=y.length;w<U;++w){const k=y[w],W=k.start,N=k.count;for(let P=W,O=W+N;P<O;P+=3)v(n[P+0],n[P+1],n[P+2])}const M=new T,A=new T,S=new T,R=new T;function b(w){S.fromArray(s,w*3),R.copy(S);const U=l[w];M.copy(U),M.sub(S.multiplyScalar(S.dot(U))).normalize(),A.crossVectors(R,U);const W=A.dot(u[w])<0?-1:1;c[w*4]=M.x,c[w*4+1]=M.y,c[w*4+2]=M.z,c[w*4+3]=W}for(let w=0,U=y.length;w<U;++w){const k=y[w],W=k.start,N=k.count;for(let P=W,O=W+N;P<O;P+=3)b(n[P+0]),b(n[P+1]),b(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new T,s=new T,o=new T,a=new T,c=new T,l=new T,u=new T,h=new T;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let m=0;m<u;m++)f[p++]=l[d++]}return new mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Je,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new ze,ur=new Kr,va=new Zt,ad=new T,hs=new T,fs=new T,ds=new T,Vl=new T,xa=new T,ya=new J,ba=new J,Ma=new J,cd=new T,ld=new T,ud=new T,Sa=new T,wa=new T;class Et extends ct{constructor(e=new Je,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Vl.fromBufferAttribute(h,e),o?xa.addScaledVector(Vl,u):xa.addScaledVector(Vl.sub(t),u))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(va.containsPoint(ur.origin)===!1&&(ur.intersectSphere(va,ad)===null||ur.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(s).invert(),ur.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){const A=a.getX(y),S=a.getX(y+1),R=a.getX(y+2);i=Aa(this,m,e,n,l,u,h,A,S,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Aa(this,o,e,n,l,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){const A=y,S=y+1,R=y+2;i=Aa(this,m,e,n,l,u,h,A,S,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=g,v=g+1,y=g+2;i=Aa(this,o,e,n,l,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Ox(r,e,t,n,i,s,o,a){let c;if(e.side===Sn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===pi,a),c===null)return null;wa.copy(a),wa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:r}}function Aa(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,hs),r.getVertexPosition(c,fs),r.getVertexPosition(l,ds);const u=Ox(r,e,t,n,hs,fs,ds,Sa);if(u){i&&(ya.fromBufferAttribute(i,a),ba.fromBufferAttribute(i,c),Ma.fromBufferAttribute(i,l),u.uv=Tn.getInterpolation(Sa,hs,fs,ds,ya,ba,Ma,new J)),s&&(ya.fromBufferAttribute(s,a),ba.fromBufferAttribute(s,c),Ma.fromBufferAttribute(s,l),u.uv1=Tn.getInterpolation(Sa,hs,fs,ds,ya,ba,Ma,new J),u.uv2=u.uv1),o&&(cd.fromBufferAttribute(o,a),ld.fromBufferAttribute(o,c),ud.fromBufferAttribute(o,l),u.normal=Tn.getInterpolation(Sa,hs,fs,ds,cd,ld,ud,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new T,materialIndex:0};Tn.getNormal(hs,fs,ds,h.normal),u.face=h}return u}class Fi extends Je{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(h,2));function p(_,g,m,x,v,y,M,A,S,R,b){const w=y/S,U=M/R,k=y/2,W=M/2,N=A/2,P=S+1,O=R+1;let G=0,oe=0;const Q=new T;for(let j=0;j<O;j++){const z=j*U-W;for(let xe=0;xe<P;xe++){const K=xe*w-k;Q[_]=K*x,Q[g]=z*v,Q[m]=N,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[m]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(xe/S),h.push(1-j/R),G+=1}}for(let j=0;j<R;j++)for(let z=0;z<S;z++){const xe=f+z+P*j,K=f+z+P*(j+1),re=f+(z+1)+P*(j+1),Y=f+(z+1)+P*j;c.push(xe,K,Y),c.push(K,re,Y),oe+=6}a.addGroup(d,oe,b),d+=oe,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(r){const e={};for(let t=0;t<r.length;t++){const n=Bs(r[t]);for(const i in n)e[i]=n[i]}return e}function Fx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function i_(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const Xc={clone:Bs,merge:xn};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qc extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends qc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class r_ extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ps,ms,e,t);i.layers=this.layers,this.add(i);const s=new $t(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new $t(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new $t(ps,ms,e,t);a.layers=this.layers,this.add(a);const c=new $t(ps,ms,e,t);c.layers=this.layers,this.add(c);const l=new $t(ps,ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yo extends It{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?Tt:Fn),this.texture=new Yo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fi(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ci});s.uniforms.tEquirect.value=t;const o=new Et(i,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Rt),new r_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Gl=new T,zx=new T,Hx=new je;class li{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gl.subVectors(n,t).cross(zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hx.getNormalMatrix(e),i=this.coplanarPoint(Gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Zt,Ea=new T;class Zo{constructor(e=new li,t=new li,n=new li,i=new li,s=new li,o=new li){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,f-l,g-d,y-m).normalize(),n[1].setComponents(c+s,f+l,g+d,y+m).normalize(),n[2].setComponents(c+o,f+u,g+p,y+x).normalize(),n[3].setComponents(c-o,f-u,g-p,y-x).normalize(),n[4].setComponents(c-a,f-h,g-_,y-v).normalize(),t===jn)n[5].setComponents(c+a,f+h,g+_,y+v).normalize();else if(t===Os)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vx(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,d=h.byteLength,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,u,h){const f=u.array,d=u._updateRange,p=u.updateRanges;if(r.bindBuffer(h,l),d.count===-1&&p.length===0&&r.bufferSubData(h,0,f),p.length!==0){for(let _=0,g=p.length;_<g;_++){const m=p[_];t?r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class Xs extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const x=m*f-o;for(let v=0;v<l;v++){const y=v*h-s;p.push(y,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const v=x+l*m,y=x+l*(m+1),M=x+1+l*(m+1),A=x+1+l*m;d.push(v,y,A),d.push(y,M,A)}this.setIndex(d),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wx=`#ifdef USE_ALPHAHASH
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
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
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
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jx=`#ifdef USE_BATCHING
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
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`
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
}`,by=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
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
#endif`,Vy=`struct PhysicalMaterial {
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
}`,Gy=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tb=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ob=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,jb=`#define DISTANCE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,sM=`#define LAMBERT
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
}`,oM=`#define MATCAP
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
}`,aM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,lM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,gM=`uniform float size;
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,yM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Gx,alphahash_pars_fragment:Wx,alphamap_fragment:Xx,alphamap_pars_fragment:qx,alphatest_fragment:$x,alphatest_pars_fragment:Yx,aomap_fragment:Zx,aomap_pars_fragment:Kx,batching_pars_vertex:jx,batching_vertex:Jx,begin_vertex:Qx,beginnormal_vertex:ey,bsdfs:ty,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ay,color_fragment:cy,color_pars_fragment:ly,color_pars_vertex:uy,color_vertex:hy,common:fy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:_y,emissivemap_pars_fragment:vy,colorspace_fragment:xy,colorspace_pars_fragment:yy,envmap_fragment:by,envmap_common_pars_fragment:My,envmap_pars_fragment:Sy,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Ey,fog_pars_vertex:Ty,fog_fragment:Cy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Py,lightmap_fragment:Ly,lightmap_pars_fragment:Iy,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Uy,lights_toon_fragment:Fy,lights_toon_pars_fragment:By,lights_phong_fragment:ky,lights_phong_pars_fragment:zy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Gy,lights_fragment_maps:Wy,lights_fragment_end:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:Zy,map_fragment:Ky,map_pars_fragment:jy,map_particle_fragment:Jy,map_particle_pars_fragment:Qy,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:ab,normal_pars_fragment:cb,normal_pars_vertex:lb,normal_vertex:ub,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:yb,dithering_pars_fragment:bb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Sb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Eb,shadowmask_pars_fragment:Tb,skinbase_vertex:Cb,skinning_pars_vertex:Rb,skinning_vertex:Pb,skinnormal_vertex:Lb,specularmap_fragment:Ib,specularmap_pars_fragment:Db,tonemapping_fragment:Nb,tonemapping_pars_fragment:Ub,transmission_fragment:Ob,transmission_pars_fragment:Fb,uv_pars_fragment:Bb,uv_pars_vertex:kb,uv_vertex:zb,worldpos_vertex:Hb,background_vert:Vb,background_frag:Gb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:qb,cube_frag:$b,depth_vert:Yb,depth_frag:Zb,distanceRGBA_vert:Kb,distanceRGBA_frag:jb,equirect_vert:Jb,equirect_frag:Qb,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:cM,meshnormal_frag:lM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:fM,meshphysical_frag:dM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:vM,shadow_frag:xM,sprite_vert:yM,sprite_frag:bM},ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},bn={basic:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:xn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:xn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:xn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:xn([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:xn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:xn([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:xn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:xn([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:xn([ge.common,ge.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:xn([ge.lights,ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};bn.physical={uniforms:xn([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ta={r:0,b:0,g:0};function MM(r,e,t,n,i,s,o){const a=new _e(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function p(g,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ws)?(u===void 0&&(u=new Et(new Fi(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Bs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Et(new Xs(2,2),new zn({name:"BackgroundMaterial",uniforms:Bs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,m){g.getRGB(Ta,i_(r)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:p}}function SM(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null);let l=c,u=!1;function h(N,P,O,G,oe){let Q=!1;if(o){const j=_(G,O,P);l!==j&&(l=j,d(l.object)),Q=m(N,G,O,oe),Q&&x(N,G,O,oe)}else{const j=P.wireframe===!0;(l.geometry!==G.id||l.program!==O.id||l.wireframe!==j)&&(l.geometry=G.id,l.program=O.id,l.wireframe=j,Q=!0)}oe!==null&&t.update(oe,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,R(N,P,O,G),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function p(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,P,O){const G=O.wireframe===!0;let oe=a[N.id];oe===void 0&&(oe={},a[N.id]=oe);let Q=oe[P.id];Q===void 0&&(Q={},oe[P.id]=Q);let j=Q[G];return j===void 0&&(j=g(f()),Q[G]=j),j}function g(N){const P=[],O=[],G=[];for(let oe=0;oe<i;oe++)P[oe]=0,O[oe]=0,G[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:G,object:N,attributes:{},index:null}}function m(N,P,O,G){const oe=l.attributes,Q=P.attributes;let j=0;const z=O.getAttributes();for(const xe in z)if(z[xe].location>=0){const re=oe[xe];let Y=Q[xe];if(Y===void 0&&(xe==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),xe==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),re===void 0||re.attribute!==Y||Y&&re.data!==Y.data)return!0;j++}return l.attributesNum!==j||l.index!==G}function x(N,P,O,G){const oe={},Q=P.attributes;let j=0;const z=O.getAttributes();for(const xe in z)if(z[xe].location>=0){let re=Q[xe];re===void 0&&(xe==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),xe==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));const Y={};Y.attribute=re,re&&re.data&&(Y.data=re.data),oe[xe]=Y,j++}l.attributes=oe,l.attributesNum=j,l.index=G}function v(){const N=l.newAttributes;for(let P=0,O=N.length;P<O;P++)N[P]=0}function y(N){M(N,0)}function M(N,P){const O=l.newAttributes,G=l.enabledAttributes,oe=l.attributeDivisors;O[N]=1,G[N]===0&&(r.enableVertexAttribArray(N),G[N]=1),oe[N]!==P&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,P),oe[N]=P)}function A(){const N=l.newAttributes,P=l.enabledAttributes;for(let O=0,G=P.length;O<G;O++)P[O]!==N[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function S(N,P,O,G,oe,Q,j){j===!0?r.vertexAttribIPointer(N,P,O,oe,Q):r.vertexAttribPointer(N,P,O,G,oe,Q)}function R(N,P,O,G){if(n.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const oe=G.attributes,Q=O.getAttributes(),j=P.defaultAttributeValues;for(const z in Q){const xe=Q[z];if(xe.location>=0){let K=oe[z];if(K===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const re=K.normalized,Y=K.itemSize,Pe=t.get(K);if(Pe===void 0)continue;const Me=Pe.buffer,Ge=Pe.type,ne=Pe.bytesPerElement,ye=n.isWebGL2===!0&&(Ge===r.INT||Ge===r.UNSIGNED_INT||K.gpuType===Lh);if(K.isInterleavedBufferAttribute){const He=K.data,I=He.stride,me=K.offset;if(He.isInstancedInterleavedBuffer){for(let te=0;te<xe.locationSize;te++)M(xe.location+te,He.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let te=0;te<xe.locationSize;te++)y(xe.location+te);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let te=0;te<xe.locationSize;te++)S(xe.location+te,Y/xe.locationSize,Ge,re,I*ne,(me+Y/xe.locationSize*te)*ne,ye)}else{if(K.isInstancedBufferAttribute){for(let He=0;He<xe.locationSize;He++)M(xe.location+He,K.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let He=0;He<xe.locationSize;He++)y(xe.location+He);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let He=0;He<xe.locationSize;He++)S(xe.location+He,Y/xe.locationSize,Ge,re,Y*ne,Y/xe.locationSize*He*ne,ye)}}else if(j!==void 0){const re=j[z];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(xe.location,re);break;case 3:r.vertexAttrib3fv(xe.location,re);break;case 4:r.vertexAttrib4fv(xe.location,re);break;default:r.vertexAttrib1fv(xe.location,re)}}}}A()}function b(){k();for(const N in a){const P=a[N];for(const O in P){const G=P[O];for(const oe in G)p(G[oe].object),delete G[oe];delete P[O]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const P=a[N.id];for(const O in P){const G=P[O];for(const oe in G)p(G[oe].object),delete G[oe];delete P[O]}delete a[N.id]}function U(N){for(const P in a){const O=a[P];if(O[N.id]===void 0)continue;const G=O[N.id];for(const oe in G)p(G[oe].object),delete G[oe];delete O[N.id]}}function k(){W(),u=!0,l!==c&&(l=c,d(l.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:k,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function wM(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,h,f),t.update(h,s,f)}function l(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(u[p],h[p]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];t.update(p,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function AM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),M=v&&y,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function EM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new li,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):l();else{const x=s?0:n,v=x*4;let y=m.clippingState||null;c.value=y,y=u(p,f,v,d);for(let M=0;M!==v;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function TM(r){let e=new WeakMap;function t(o,a){return a===bo?o.mapping=Di:a===Mo&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===Mo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new s_(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jr extends qc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,hd=[.125,.215,.35,.446,.526,.582],wr=20,Wl=new jr,fd=new _e;let Xl=null,ql=0,$l=0;const Sr=(1+Math.sqrt(5))/2,gs=1/Sr,dd=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Sr,gs),new T(0,Sr,-gs),new T(gs,0,Sr),new T(-gs,0,Sr),new T(Sr,gs,0),new T(-Sr,gs,0)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,$l),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Ns,format:Cn,colorSpace:rn,depthBuffer:!1},i=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CM(s)),this._blurMaterial=RM(s,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,n,i){const a=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(fd),u.toneMapping=Ri,u.autoClear=!1;const d=new Mn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),p=new Et(new Fi,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(fd),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):x===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;Ca(i,x*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ca(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Wl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=dd[(i-1)%dd.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wr-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):wr;g>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wr}`);const m=[];let x=0;for(let S=0;S<wr;++S){const R=S/_,b=Math.exp(-R*R/2);m.push(b),S===0?x+=b:S<g&&(x+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-As?i-v+As:0),A=4*(this._cubeSize-y);Ca(t,M,A,3*y,2*y),c.setRenderTarget(t),c.render(h,Wl)}}function CM(r){const e=[],t=[],n=[];let i=r;const s=r-As+1+hd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-As?c=hd[o-r+As-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,g=2,m=1,x=new Float32Array(_*p*d),v=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let A=0;A<d;A++){const S=A%3*2/3-1,R=A>2?0:-1,b=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(b,_*p*A),v.set(f,g*p*A);const w=[A,A,A,A,A,A];y.set(w,m*p*A)}const M=new Je;M.setAttribute("position",new mt(x,_)),M.setAttribute("uv",new mt(v,g)),M.setAttribute("faceIndex",new mt(y,m)),e.push(M),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pd(r,e,t){const n=new kn(r,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function RM(r,e,t){const n=new Float32Array(wr),i=new T(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function md(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function gd(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function $h(){return`

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
	`}function PM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===bo||c===Mo,u=c===Di||c===er;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new th(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new th(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function LM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function IM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],r.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],A=x[v+1],S=x[v+2];f.push(M,A,A,S,S,M)}}else if(p!==void 0){const x=p.array;_=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,A=v+1,S=v+2;f.push(M,A,A,S,S,M)}}else return;const g=new(Qg(f)?qh:Xh)(f,1);g.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function DM(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){r.drawElements(s,p,a,d*c),t.update(p,s,1)}function h(d,p,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,d*c,_),t.update(p,s,_)}function f(d,p,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(s,p,0,a,d,0,_);let m=0;for(let x=0;x<_;x++)m+=p[x];t.update(m,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function NM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function UM(r,e){return r[0]-e[0]}function OM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function FM(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let N=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",N)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let R=0;x===!0&&(R=1),v===!0&&(R=2),y===!0&&(R=3);let b=u.attributes.position.count*R,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*w*4*p),k=new Gc(U,b,w,p);k.type=Kn,k.needsUpdate=!0;const W=R*4;for(let P=0;P<p;P++){const O=M[P],G=A[P],oe=S[P],Q=b*w*4*P;for(let j=0;j<O.count;j++){const z=j*W;x===!0&&(o.fromBufferAttribute(O,j),U[Q+z+0]=o.x,U[Q+z+1]=o.y,U[Q+z+2]=o.z,U[Q+z+3]=0),v===!0&&(o.fromBufferAttribute(G,j),U[Q+z+4]=o.x,U[Q+z+5]=o.y,U[Q+z+6]=o.z,U[Q+z+7]=0),y===!0&&(o.fromBufferAttribute(oe,j),U[Q+z+8]=o.x,U[Q+z+9]=o.y,U[Q+z+10]=o.z,U[Q+z+11]=oe.itemSize===4?o.w:1)}}_={count:p,texture:k,size:new J(b,w)},s.set(u,_),u.addEventListener("dispose",N)}let g=0;for(let x=0;x<f.length;x++)g+=f[x];const m=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const y=p[v];y[0]=v,y[1]=f[v]}p.sort(OM);for(let v=0;v<8;v++)v<d&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(UM);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],A=y[1];M!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[M]&&u.setAttribute("morphTarget"+v,_[M]),g&&u.getAttribute("morphNormal"+v)!==g[M]&&u.setAttribute("morphNormal"+v,g[M]),i[v]=A,m+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function BM(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Yh extends It{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:ji,u!==ji&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ji&&(n=Ti),n===void 0&&u===zr&&(n=Ki),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const a_=new It,c_=new Yh(1,1);c_.compareFunction=Hh;const l_=new Gc,u_=new Wh,h_=new Yo,_d=[],vd=[],xd=new Float32Array(16),yd=new Float32Array(9),bd=new Float32Array(4);function qs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_d[i];if(s===void 0&&(s=new Float32Array(i),_d[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $c(r,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function GM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;bd.set(n),r.uniformMatrix2fv(this.addr,!1,bd),Jt(t,n)}}function WM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;yd.set(n),r.uniformMatrix3fv(this.addr,!1,yd),Jt(t,n)}}function XM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;xd.set(n),r.uniformMatrix4fv(this.addr,!1,xd),Jt(t,n)}}function qM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function KM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function eS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?c_:a_;t.setTexture2D(e||s,i)}function tS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||u_,i)}function nS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||h_,i)}function iS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||l_,i)}function rS(r){switch(r){case 5126:return kM;case 35664:return zM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return $M;case 35668:case 35672:return YM;case 35669:case 35673:return ZM;case 5125:return KM;case 36294:return jM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}function sS(r,e){r.uniform1fv(this.addr,e)}function oS(r,e){const t=qs(e,this.size,2);r.uniform2fv(this.addr,t)}function aS(r,e){const t=qs(e,this.size,3);r.uniform3fv(this.addr,t)}function cS(r,e){const t=qs(e,this.size,4);r.uniform4fv(this.addr,t)}function lS(r,e){const t=qs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function uS(r,e){const t=qs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hS(r,e){const t=qs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fS(r,e){r.uniform1iv(this.addr,e)}function dS(r,e){r.uniform2iv(this.addr,e)}function pS(r,e){r.uniform3iv(this.addr,e)}function mS(r,e){r.uniform4iv(this.addr,e)}function gS(r,e){r.uniform1uiv(this.addr,e)}function _S(r,e){r.uniform2uiv(this.addr,e)}function vS(r,e){r.uniform3uiv(this.addr,e)}function xS(r,e){r.uniform4uiv(this.addr,e)}function yS(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a_,s[o])}function bS(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||u_,s[o])}function MS(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||h_,s[o])}function SS(r,e,t){const n=this.cache,i=e.length,s=$c(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||l_,s[o])}function wS(r){switch(r){case 5126:return sS;case 35664:return oS;case 35665:return aS;case 35666:return cS;case 35674:return lS;case 35675:return uS;case 35676:return hS;case 5124:case 35670:return fS;case 35667:case 35671:return dS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return SS}}class AS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rS(t.type)}}class ES{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wS(t.type)}}class TS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function Md(r,e){r.seq.push(e),r.map[e.id]=e}function CS(r,e,t){const n=r.name,i=n.length;for(Yl.lastIndex=0;;){const s=Yl.exec(n),o=Yl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Md(t,l===void 0?new AS(a,r,e):new ES(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new TS(a),Md(t,h)),t=h}}}class mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);CS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Sd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const RS=37297;let PS=0;function LS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function IS(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===To&&t===Eo?n="LinearDisplayP3ToLinearSRGB":e===Eo&&t===To&&(n="LinearSRGBToLinearDisplayP3"),r){case rn:case qo:return[n,"LinearTransferOETF"];case Tt:case Hc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function wd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+LS(r.getShaderSource(e),o)}else return i}function DS(r,e){const t=IS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function NS(r,e){let t;switch(e){case Ag:t="Linear";break;case Eg:t="Reinhard";break;case Tg:t="OptimizedCineon";break;case Ph:t="ACESFilmic";break;case Cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function US(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(uo).join(`
`)}function OS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function uo(r){return r!==""}function Ad(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(r){return r.replace(BS,zS)}const kS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zS(r,e){let t=Xe[e];if(t===void 0){const n=kS.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(r){return r.replace(HS,VS)}function VS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function WS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Di:case er:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function qS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Sg:e="ENVMAP_BLENDING_MIX";break;case wg:e="ENVMAP_BLENDING_ADD";break}return e}function $S(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function YS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=GS(t),l=WS(t),u=XS(t),h=qS(t),f=$S(t),d=t.isWebGL2?"":US(t),p=OS(s),_=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(uo).join(`
`),g.length>0&&(g+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(uo).join(`
`),m.length>0&&(m+=`
`)):(g=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),m=[d,Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ri?NS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,DS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),o=nh(o),o=Ad(o,t),o=Ed(o,t),a=nh(a),a=Ad(a,t),a=Ed(a,t),o=Td(o),a=Td(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+g+o,y=x+m+a,M=Sd(i,i.VERTEX_SHADER,v),A=Sd(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(U){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),W=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(A).trim();let P=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(P=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,A);else{const G=wd(i,M,"vertex"),oe=wd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+G+`
`+oe)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||N==="")&&(O=!1);O&&(U.diagnostics={runnable:P,programLog:k,vertexShader:{log:W,prefix:g},fragmentShader:{log:N,prefix:m}})}i.deleteShader(M),i.deleteShader(A),R=new mc(i,_),b=FS(i,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,RS)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let ZS=0;class KS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jS(e),t.set(e,n)),n}}class jS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function JS(r,e,t,n,i,s,o){const a=new Wc,c=new KS,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function g(b,w,U,k,W){const N=k.fog,P=W.geometry,O=b.isMeshStandardMaterial?k.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),oe=G&&G.mapping===Ws?G.image.height:null,Q=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,z=j!==void 0?j.length:0;let xe=0;P.morphAttributes.position!==void 0&&(xe=1),P.morphAttributes.normal!==void 0&&(xe=2),P.morphAttributes.color!==void 0&&(xe=3);let K,re,Y,Pe;if(Q){const gn=bn[Q];K=gn.vertexShader,re=gn.fragmentShader}else K=b.vertexShader,re=b.fragmentShader,c.update(b),Y=c.getVertexShaderID(b),Pe=c.getFragmentShaderID(b);const Me=r.getRenderTarget(),Ge=W.isInstancedMesh===!0,ne=W.isBatchedMesh===!0,ye=!!b.map,He=!!b.matcap,I=!!G,me=!!b.aoMap,te=!!b.lightMap,fe=!!b.bumpMap,se=!!b.normalMap,Fe=!!b.displacementMap,Se=!!b.emissiveMap,we=!!b.metalnessMap,qe=!!b.roughnessMap,ot=b.anisotropy>0,wt=b.clearcoat>0,L=b.iridescence>0,E=b.sheen>0,V=b.transmission>0,le=ot&&!!b.anisotropyMap,ae=wt&&!!b.clearcoatMap,ue=wt&&!!b.clearcoatNormalMap,Ue=wt&&!!b.clearcoatRoughnessMap,de=L&&!!b.iridescenceMap,be=L&&!!b.iridescenceThicknessMap,D=E&&!!b.sheenColorMap,pe=E&&!!b.sheenRoughnessMap,ie=!!b.specularMap,$e=!!b.specularColorMap,Be=!!b.specularIntensityMap,We=V&&!!b.transmissionMap,Ne=V&&!!b.thicknessMap,Ie=!!b.gradientMap,it=!!b.alphaMap,F=b.alphaTest>0,ve=!!b.alphaHash,ce=!!b.extensions,ee=!!P.attributes.uv1,he=!!P.attributes.uv2,Ve=!!P.attributes.uv3;let rt=Ri;return b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(rt=r.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:re,defines:b.defines,customVertexShaderID:Y,customFragmentShaderID:Pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ne,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:rn,map:ye,matcap:He,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:oe,aoMap:me,lightMap:te,bumpMap:fe,normalMap:se,displacementMap:f&&Fe,emissiveMap:Se,normalMapObjectSpace:se&&b.normalMapType===Wg,normalMapTangentSpace:se&&b.normalMapType===ir,metalnessMap:we,roughnessMap:qe,anisotropy:ot,anisotropyMap:le,clearcoat:wt,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ue,iridescence:L,iridescenceMap:de,iridescenceThicknessMap:be,sheen:E,sheenColorMap:D,sheenRoughnessMap:pe,specularMap:ie,specularColorMap:$e,specularIntensityMap:Be,transmission:V,transmissionMap:We,thicknessMap:Ne,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===Pr,alphaMap:it,alphaTest:F,alphaHash:ve,combine:b.combine,mapUv:ye&&_(b.map.channel),aoMapUv:me&&_(b.aoMap.channel),lightMapUv:te&&_(b.lightMap.channel),bumpMapUv:fe&&_(b.bumpMap.channel),normalMapUv:se&&_(b.normalMap.channel),displacementMapUv:Fe&&_(b.displacementMap.channel),emissiveMapUv:Se&&_(b.emissiveMap.channel),metalnessMapUv:we&&_(b.metalnessMap.channel),roughnessMapUv:qe&&_(b.roughnessMap.channel),anisotropyMapUv:le&&_(b.anisotropyMap.channel),clearcoatMapUv:ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:D&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(b.sheenRoughnessMap.channel),specularMapUv:ie&&_(b.specularMap.channel),specularColorMapUv:$e&&_(b.specularColorMap.channel),specularIntensityMapUv:Be&&_(b.specularIntensityMap.channel),transmissionMapUv:We&&_(b.transmissionMap.channel),thicknessMapUv:Ne&&_(b.thicknessMap.channel),alphaMapUv:it&&_(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(se||ot),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:he,vertexUv3s:Ve,pointsUvs:W.isPoints===!0&&!!P.attributes.uv&&(ye||it),fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ye&&b.map.isVideoTexture===!0&&pt.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ce&&b.extensions.derivatives===!0,extensionFragDepth:ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)w.push(U),w.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(x(w,b),v(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function v(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const w=p[b.type];let U;if(w){const k=bn[w];U=Xc.clone(k.uniforms)}else U=b.uniforms;return U}function M(b,w){let U;for(let k=0,W=l.length;k<W;k++){const N=l[k];if(N.cacheKey===w){U=N,++U.usedTimes;break}}return U===void 0&&(U=new YS(r,w,b,s),l.push(U)),U}function A(b){if(--b.usedTimes===0){const w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function S(b){c.remove(b)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:S,programs:l,dispose:R}}function QS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ew(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Rd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,p,_,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),e++,m}function a(h,f,d,p,_,g){const m=o(h,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(h,f,d,p,_,g){const m=o(h,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||ew),n.length>1&&n.sort(f||Rd),i.length>1&&i.sort(f||Rd)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function tw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Pd,r.set(n,[o])):i>=s.length?(o=new Pd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function nw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new _e};break;case"SpotLight":t={position:new T,direction:new T,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function iw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rw=0;function sw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ow(r,e){const t=new nw,n=iw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new T);const s=new T,o=new ze,a=new ze;function c(u,h){let f=0,d=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,g=0,m=0,x=0,v=0,y=0,M=0,A=0,S=0,R=0,b=0;u.sort(sw);const w=h===!0?Math.PI:1;for(let k=0,W=u.length;k<W;k++){const N=u[k],P=N.color,O=N.intensity,G=N.distance,oe=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=P.r*O*w,d+=P.g*O*w,p+=P.b*O*w;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],O);b++}else if(N.isDirectionalLight){const Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const j=N.shadow,z=n.get(N);z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.directionalShadow[_]=z,i.directionalShadowMap[_]=oe,i.directionalShadowMatrix[_]=N.shadow.matrix,y++}i.directional[_]=Q,_++}else if(N.isSpotLight){const Q=t.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(P).multiplyScalar(O*w),Q.distance=G,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[m]=Q;const j=N.shadow;if(N.map&&(i.spotLightMap[S]=N.map,S++,j.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[m]=j.matrix,N.castShadow){const z=n.get(N);z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.spotShadow[m]=z,i.spotShadowMap[m]=oe,A++}m++}else if(N.isRectAreaLight){const Q=t.get(N);Q.color.copy(P).multiplyScalar(O),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=Q,x++}else if(N.isPointLight){const Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity*w),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const j=N.shadow,z=n.get(N);z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=oe,i.pointShadowMatrix[g]=N.shadow.matrix,M++}i.point[g]=Q,g++}else if(N.isHemisphereLight){const Q=t.get(N);Q.skyColor.copy(N.color).multiplyScalar(O*w),Q.groundColor.copy(N.groundColor).multiplyScalar(O*w),i.hemi[v]=Q,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==_||U.pointLength!==g||U.spotLength!==m||U.rectAreaLength!==x||U.hemiLength!==v||U.numDirectionalShadows!==y||U.numPointShadows!==M||U.numSpotShadows!==A||U.numSpotMaps!==S||U.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,U.directionalLength=_,U.pointLength=g,U.spotLength=m,U.rectAreaLength=x,U.hemiLength=v,U.numDirectionalShadows=y,U.numPointShadows=M,U.numSpotShadows=A,U.numSpotMaps=S,U.numLightProbes=b,i.version=rw++)}function l(u,h){let f=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function Ld(r,e){const t=new ow(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function aw(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Ld(r,e),t.set(s,[c])):o>=a.length?(c=new Ld(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yc extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zh extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
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
}`;function uw(r,e,t){let n=new Zo;const i=new J,s=new J,o=new dt,a=new Yc({depthPacking:Gg}),c=new Zh,l={},u=t.maxTextureSize,h={[pi]:Sn,[Sn]:pi,[On]:On},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:cw,fragmentShader:lw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Je;p.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let m=this.type;this.render=function(M,A,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Ci),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==ci&&this.type===ci,W=m===ci&&this.type!==ci;for(let N=0,P=M.length;N<P;N++){const O=M[N],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const oe=G.getFrameExtents();if(i.multiply(oe),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/oe.x),i.x=s.x*oe.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/oe.y),i.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||k===!0||W===!0){const j=this.type!==ci?{minFilter:Ft,magFilter:Ft}:{};G.map!==null&&G.map.dispose(),G.map=new kn(i.x,i.y,j),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const Q=G.getViewportCount();for(let j=0;j<Q;j++){const z=G.getViewport(j);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),U.viewport(o),G.updateMatrices(O,j),n=G.getFrustum(),y(A,S,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===ci&&x(G,S),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(R,b,w)};function x(M,A){const S=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new kn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(A,null,S,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(A,null,S,d,_,null)}function v(M,A,S,R){let b=null;const w=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)b=w;else if(b=S.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=b.uuid,k=A.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let N=W[k];N===void 0&&(N=b.clone(),W[k]=N),b=N}if(b.visible=A.visible,b.wireframe=A.wireframe,R===ci?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=r.properties.get(b);U.light=S}return b}function y(M,A,S,R,b){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===ci)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const k=e.update(M),W=M.material;if(Array.isArray(W)){const N=k.groups;for(let P=0,O=N.length;P<O;P++){const G=N[P],oe=W[G.materialIndex];if(oe&&oe.visible){const Q=v(M,oe,R,b);M.onBeforeShadow(r,M,A,S,k,Q,G),r.renderBufferDirect(S,null,k,Q,M,G),M.onAfterShadow(r,M,A,S,k,Q,G)}}}else if(W.visible){const N=v(M,W,R,b);M.onBeforeShadow(r,M,A,S,k,N,null),r.renderBufferDirect(S,null,k,N,M,null),M.onAfterShadow(r,M,A,S,k,N,null)}}const U=M.children;for(let k=0,W=U.length;k<W;k++)y(U[k],A,S,R,b)}}function hw(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const ve=new dt;let ce=null;const ee=new dt(0,0,0,0);return{setMask:function(he){ce!==he&&!F&&(r.colorMask(he,he,he,he),ce=he)},setLocked:function(he){F=he},setClear:function(he,Ve,rt,Qt,gn){gn===!0&&(he*=Qt,Ve*=Qt,rt*=Qt),ve.set(he,Ve,rt,Qt),ee.equals(ve)===!1&&(r.clearColor(he,Ve,rt,Qt),ee.copy(ve))},reset:function(){F=!1,ce=null,ee.set(-1,0,0,0)}}}function s(){let F=!1,ve=null,ce=null,ee=null;return{setTest:function(he){he?ne(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(he){ve!==he&&!F&&(r.depthMask(he),ve=he)},setFunc:function(he){if(ce!==he){switch(he){case gg:r.depthFunc(r.NEVER);break;case _g:r.depthFunc(r.ALWAYS);break;case vg:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case xg:r.depthFunc(r.EQUAL);break;case yg:r.depthFunc(r.GEQUAL);break;case bg:r.depthFunc(r.GREATER);break;case Mg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=he}},setLocked:function(he){F=he},setClear:function(he){ee!==he&&(r.clearDepth(he),ee=he)},reset:function(){F=!1,ve=null,ce=null,ee=null}}}function o(){let F=!1,ve=null,ce=null,ee=null,he=null,Ve=null,rt=null,Qt=null,gn=null;return{setTest:function(vt){F||(vt?ne(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(vt){ve!==vt&&!F&&(r.stencilMask(vt),ve=vt)},setFunc:function(vt,_n,si){(ce!==vt||ee!==_n||he!==si)&&(r.stencilFunc(vt,_n,si),ce=vt,ee=_n,he=si)},setOp:function(vt,_n,si){(Ve!==vt||rt!==_n||Qt!==si)&&(r.stencilOp(vt,_n,si),Ve=vt,rt=_n,Qt=si)},setLocked:function(vt){F=vt},setClear:function(vt){gn!==vt&&(r.clearStencil(vt),gn=vt)},reset:function(){F=!1,ve=null,ce=null,ee=null,he=null,Ve=null,rt=null,Qt=null,gn=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},d={},p=new WeakMap,_=[],g=null,m=!1,x=null,v=null,y=null,M=null,A=null,S=null,R=null,b=new _e(0,0,0),w=0,U=!1,k=null,W=null,N=null,P=null,O=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Q=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),oe=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),oe=Q>=2);let z=null,xe={};const K=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Y=new dt().fromArray(K),Pe=new dt().fromArray(re);function Me(F,ve,ce,ee){const he=new Uint8Array(4),Ve=r.createTexture();r.bindTexture(F,Ve),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<ce;rt++)n&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(ve,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ve+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return Ve}const Ge={};Ge[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ge[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ge[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ge[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ne(r.DEPTH_TEST),c.setFunc(yo),Se(!1),we(yu),ne(r.CULL_FACE),se(Ci);function ne(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function ye(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function He(F,ve){return d[F]!==ve?(r.bindFramebuffer(F,ve),d[F]=ve,n&&(F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ve),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ve)),!0):!1}function I(F,ve){let ce=_,ee=!1;if(F)if(ce=p.get(ve),ce===void 0&&(ce=[],p.set(ve,ce)),F.isWebGLMultipleRenderTargets){const he=F.texture;if(ce.length!==he.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Ve=0,rt=he.length;Ve<rt;Ve++)ce[Ve]=r.COLOR_ATTACHMENT0+Ve;ce.length=he.length,ee=!0}}else ce[0]!==r.COLOR_ATTACHMENT0&&(ce[0]=r.COLOR_ATTACHMENT0,ee=!0);else ce[0]!==r.BACK&&(ce[0]=r.BACK,ee=!0);ee&&(t.isWebGL2?r.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function me(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const te={[Zi]:r.FUNC_ADD,[tg]:r.FUNC_SUBTRACT,[ng]:r.FUNC_REVERSE_SUBTRACT};if(n)te[wu]=r.MIN,te[Au]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(te[wu]=F.MIN_EXT,te[Au]=F.MAX_EXT)}const fe={[ig]:r.ZERO,[rg]:r.ONE,[sg]:r.SRC_COLOR,[yc]:r.SRC_ALPHA,[hg]:r.SRC_ALPHA_SATURATE,[lg]:r.DST_COLOR,[ag]:r.DST_ALPHA,[og]:r.ONE_MINUS_SRC_COLOR,[bc]:r.ONE_MINUS_SRC_ALPHA,[ug]:r.ONE_MINUS_DST_COLOR,[cg]:r.ONE_MINUS_DST_ALPHA,[fg]:r.CONSTANT_COLOR,[dg]:r.ONE_MINUS_CONSTANT_COLOR,[pg]:r.CONSTANT_ALPHA,[mg]:r.ONE_MINUS_CONSTANT_ALPHA};function se(F,ve,ce,ee,he,Ve,rt,Qt,gn,vt){if(F===Ci){m===!0&&(ye(r.BLEND),m=!1);return}if(m===!1&&(ne(r.BLEND),m=!0),F!==eg){if(F!==x||vt!==U){if((v!==Zi||A!==Zi)&&(r.blendEquation(r.FUNC_ADD),v=Zi,A=Zi),vt)switch(F){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bu:r.blendFunc(r.ONE,r.ONE);break;case Mu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Su:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Mu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Su:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,S=null,R=null,b.set(0,0,0),w=0,x=F,U=vt}return}he=he||ve,Ve=Ve||ce,rt=rt||ee,(ve!==v||he!==A)&&(r.blendEquationSeparate(te[ve],te[he]),v=ve,A=he),(ce!==y||ee!==M||Ve!==S||rt!==R)&&(r.blendFuncSeparate(fe[ce],fe[ee],fe[Ve],fe[rt]),y=ce,M=ee,S=Ve,R=rt),(Qt.equals(b)===!1||gn!==w)&&(r.blendColor(Qt.r,Qt.g,Qt.b,gn),b.copy(Qt),w=gn),x=F,U=!1}function Fe(F,ve){F.side===On?ye(r.CULL_FACE):ne(r.CULL_FACE);let ce=F.side===Sn;ve&&(ce=!ce),Se(ce),F.blending===Pr&&F.transparent===!1?se(Ci):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);const ee=F.stencilWrite;l.setTest(ee),ee&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Se(F){k!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),k=F)}function we(F){F!==Jm?(ne(r.CULL_FACE),F!==W&&(F===yu?r.cullFace(r.BACK):F===Qm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),W=F}function qe(F){F!==N&&(oe&&r.lineWidth(F),N=F)}function ot(F,ve,ce){F?(ne(r.POLYGON_OFFSET_FILL),(P!==ve||O!==ce)&&(r.polygonOffset(ve,ce),P=ve,O=ce)):ye(r.POLYGON_OFFSET_FILL)}function wt(F){F?ne(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function L(F){F===void 0&&(F=r.TEXTURE0+G-1),z!==F&&(r.activeTexture(F),z=F)}function E(F,ve,ce){ce===void 0&&(z===null?ce=r.TEXTURE0+G-1:ce=z);let ee=xe[ce];ee===void 0&&(ee={type:void 0,texture:void 0},xe[ce]=ee),(ee.type!==F||ee.texture!==ve)&&(z!==ce&&(r.activeTexture(ce),z=ce),r.bindTexture(F,ve||Ge[F]),ee.type=F,ee.texture=ve)}function V(){const F=xe[z];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){Y.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Y.copy(F))}function We(F){Pe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ne(F,ve){let ce=h.get(ve);ce===void 0&&(ce=new WeakMap,h.set(ve,ce));let ee=ce.get(F);ee===void 0&&(ee=r.getUniformBlockIndex(ve,F.name),ce.set(F,ee))}function Ie(F,ve){const ee=h.get(ve).get(F);u.get(ve)!==ee&&(r.uniformBlockBinding(ve,ee,F.__bindingPointIndex),u.set(ve,ee))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},z=null,xe={},d={},p=new WeakMap,_=[],g=null,m=!1,x=null,v=null,y=null,M=null,A=null,S=null,R=null,b=new _e(0,0,0),w=0,U=!1,k=null,W=null,N=null,P=null,O=null,Y.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ne,disable:ye,bindFramebuffer:He,drawBuffers:I,useProgram:me,setBlending:se,setMaterial:Fe,setFlipSided:Se,setCullFace:we,setLineWidth:qe,setPolygonOffset:ot,setScissorTest:wt,activeTexture:L,bindTexture:E,unbindTexture:V,compressedTexImage2D:le,compressedTexImage3D:ae,texImage2D:ie,texImage3D:$e,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:D,texStorage3D:pe,texSubImage2D:ue,texSubImage3D:Ue,compressedTexSubImage2D:de,compressedTexSubImage3D:be,scissor:Be,viewport:We,reset:it}}function fw(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return m?new OffscreenCanvas(L,E):Ro("canvas")}function v(L,E,V,le){let ae=1;if((L.width>le||L.height>le)&&(ae=le/Math.max(L.width,L.height)),ae<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ue=E?wc:Math.floor,Ue=ue(ae*L.width),de=ue(ae*L.height);_===void 0&&(_=x(Ue,de));const be=V?x(Ue,de):_;return be.width=Ue,be.height=de,be.getContext("2d").drawImage(L,0,0,Ue,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ue+"x"+de+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return eh(L.width)&&eh(L.height)}function M(L){return a?!1:L.wrapS!==cn||L.wrapT!==cn||L.minFilter!==Ft&&L.minFilter!==Rt}function A(L,E){return L.generateMipmaps&&E&&L.minFilter!==Ft&&L.minFilter!==Rt}function S(L){r.generateMipmap(L)}function R(L,E,V,le,ae=!1){if(a===!1)return E;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=E;if(E===r.RED&&(V===r.FLOAT&&(ue=r.R32F),V===r.HALF_FLOAT&&(ue=r.R16F),V===r.UNSIGNED_BYTE&&(ue=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ue=r.R8UI),V===r.UNSIGNED_SHORT&&(ue=r.R16UI),V===r.UNSIGNED_INT&&(ue=r.R32UI),V===r.BYTE&&(ue=r.R8I),V===r.SHORT&&(ue=r.R16I),V===r.INT&&(ue=r.R32I)),E===r.RG&&(V===r.FLOAT&&(ue=r.RG32F),V===r.HALF_FLOAT&&(ue=r.RG16F),V===r.UNSIGNED_BYTE&&(ue=r.RG8)),E===r.RGBA){const Ue=ae?Ao:pt.getTransfer(le);V===r.FLOAT&&(ue=r.RGBA32F),V===r.HALF_FLOAT&&(ue=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ue=Ue===xt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(L,E,V){return A(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==Ft&&L.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){return L===Ft||L===So||L===Rs?r.NEAREST:r.LINEAR}function U(L){const E=L.target;E.removeEventListener("dispose",U),W(E),E.isVideoTexture&&p.delete(E)}function k(L){const E=L.target;E.removeEventListener("dispose",k),P(E)}function W(L){const E=n.get(L);if(E.__webglInit===void 0)return;const V=L.source,le=g.get(V);if(le){const ae=le[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(L),Object.keys(le).length===0&&g.delete(V)}n.remove(L)}function N(L){const E=n.get(L);r.deleteTexture(E.__webglTexture);const V=L.source,le=g.get(V);delete le[E.__cacheKey],o.memory.textures--}function P(L){const E=L.texture,V=n.get(L),le=n.get(E);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(V.__webglFramebuffer[ae]))for(let ue=0;ue<V.__webglFramebuffer[ae].length;ue++)r.deleteFramebuffer(V.__webglFramebuffer[ae][ue]);else r.deleteFramebuffer(V.__webglFramebuffer[ae]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ae])}else{if(Array.isArray(V.__webglFramebuffer))for(let ae=0;ae<V.__webglFramebuffer.length;ae++)r.deleteFramebuffer(V.__webglFramebuffer[ae]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ae=0;ae<V.__webglColorRenderbuffer.length;ae++)V.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ae]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ae=0,ue=E.length;ae<ue;ae++){const Ue=n.get(E[ae]);Ue.__webglTexture&&(r.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(E[ae])}n.remove(E),n.remove(L)}let O=0;function G(){O=0}function oe(){const L=O;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),O+=1,L}function Q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function j(L,E){const V=n.get(L);if(L.isVideoTexture&&ot(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const le=L.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(V,L,E);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function z(L,E){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function xe(L,E){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,E);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function K(L,E){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ye(V,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const re={[tr]:r.REPEAT,[cn]:r.CLAMP_TO_EDGE,[Ds]:r.MIRRORED_REPEAT},Y={[Ft]:r.NEAREST,[So]:r.NEAREST_MIPMAP_NEAREST,[Rs]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[Bc]:r.LINEAR_MIPMAP_NEAREST,[mi]:r.LINEAR_MIPMAP_LINEAR},Pe={[Xg]:r.NEVER,[jg]:r.ALWAYS,[qg]:r.LESS,[Hh]:r.LEQUAL,[$g]:r.EQUAL,[Kg]:r.GEQUAL,[Yg]:r.GREATER,[Zg]:r.NOTEQUAL};function Me(L,E,V){if(V?(r.texParameteri(L,r.TEXTURE_WRAP_S,re[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,re[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,re[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Y[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Y[E.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==cn||E.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Ft&&E.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ft||E.minFilter!==Rs&&E.minFilter!==mi||E.type===Kn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(L,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ge(L,E){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",U));const le=E.source;let ae=g.get(le);ae===void 0&&(ae={},g.set(le,ae));const ue=Q(E);if(ue!==L.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ae[ue].usedTimes++;const Ue=ae[L.__cacheKey];Ue!==void 0&&(ae[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&N(E)),L.__cacheKey=ue,L.__webglTexture=ae[ue].texture}return V}function ne(L,E,V){let le=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=r.TEXTURE_3D);const ae=Ge(L,E),ue=E.source;t.bindTexture(le,L.__webglTexture,r.TEXTURE0+V);const Ue=n.get(ue);if(ue.version!==Ue.__version||ae===!0){t.activeTexture(r.TEXTURE0+V);const de=pt.getPrimaries(pt.workingColorSpace),be=E.colorSpace===Fn?null:pt.getPrimaries(E.colorSpace),D=E.colorSpace===Fn||de===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const pe=M(E)&&y(E.image)===!1;let ie=v(E.image,pe,!1,u);ie=wt(E,ie);const $e=y(ie)||a,Be=s.convert(E.format,E.colorSpace);let We=s.convert(E.type),Ne=R(E.internalFormat,Be,We,E.colorSpace,E.isVideoTexture);Me(le,E,$e);let Ie;const it=E.mipmaps,F=a&&E.isVideoTexture!==!0&&Ne!==Fh,ve=Ue.__version===void 0||ae===!0,ce=b(E,ie,$e);if(E.isDepthTexture)Ne=r.DEPTH_COMPONENT,a?E.type===Kn?Ne=r.DEPTH_COMPONENT32F:E.type===Ti?Ne=r.DEPTH_COMPONENT24:E.type===Ki?Ne=r.DEPTH24_STENCIL8:Ne=r.DEPTH_COMPONENT16:E.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ji&&Ne===r.DEPTH_COMPONENT&&E.type!==kc&&E.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ti,We=s.convert(E.type)),E.format===zr&&Ne===r.DEPTH_COMPONENT&&(Ne=r.DEPTH_STENCIL,E.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ki,We=s.convert(E.type))),ve&&(F?t.texStorage2D(r.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ie.width,ie.height,0,Be,We,null));else if(E.isDataTexture)if(it.length>0&&$e){F&&ve&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,it[0].width,it[0].height);for(let ee=0,he=it.length;ee<he;ee++)Ie=it[ee],F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ie.width,Ie.height,Be,We,Ie.data):t.texImage2D(r.TEXTURE_2D,ee,Ne,Ie.width,Ie.height,0,Be,We,Ie.data);E.generateMipmaps=!1}else F?(ve&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,ie.width,ie.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,Be,We,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,ie.width,ie.height,0,Be,We,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,it[0].width,it[0].height,ie.depth);for(let ee=0,he=it.length;ee<he;ee++)Ie=it[ee],E.format!==Cn?Be!==null?F?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Ie.width,Ie.height,ie.depth,Be,Ie.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Ne,Ie.width,Ie.height,ie.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Ie.width,Ie.height,ie.depth,Be,We,Ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Ne,Ie.width,Ie.height,ie.depth,0,Be,We,Ie.data)}else{F&&ve&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,it[0].width,it[0].height);for(let ee=0,he=it.length;ee<he;ee++)Ie=it[ee],E.format!==Cn?Be!==null?F?t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Ie.width,Ie.height,Be,Ie.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ie.width,Ie.height,Be,We,Ie.data):t.texImage2D(r.TEXTURE_2D,ee,Ne,Ie.width,Ie.height,0,Be,We,Ie.data)}else if(E.isDataArrayTexture)F?(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,ie.width,ie.height,ie.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Be,We,ie.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,Be,We,ie.data);else if(E.isData3DTexture)F?(ve&&t.texStorage3D(r.TEXTURE_3D,ce,Ne,ie.width,ie.height,ie.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Be,We,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,Be,We,ie.data);else if(E.isFramebufferTexture){if(ve)if(F)t.texStorage2D(r.TEXTURE_2D,ce,Ne,ie.width,ie.height);else{let ee=ie.width,he=ie.height;for(let Ve=0;Ve<ce;Ve++)t.texImage2D(r.TEXTURE_2D,Ve,Ne,ee,he,0,Be,We,null),ee>>=1,he>>=1}}else if(it.length>0&&$e){F&&ve&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,it[0].width,it[0].height);for(let ee=0,he=it.length;ee<he;ee++)Ie=it[ee],F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Be,We,Ie):t.texImage2D(r.TEXTURE_2D,ee,Ne,Be,We,Ie);E.generateMipmaps=!1}else F?(ve&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,ie.width,ie.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,We,ie)):t.texImage2D(r.TEXTURE_2D,0,Ne,Be,We,ie);A(E,$e)&&S(le),Ue.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ye(L,E,V){if(E.image.length!==6)return;const le=Ge(L,E),ae=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+V);const ue=n.get(ae);if(ae.version!==ue.__version||le===!0){t.activeTexture(r.TEXTURE0+V);const Ue=pt.getPrimaries(pt.workingColorSpace),de=E.colorSpace===Fn?null:pt.getPrimaries(E.colorSpace),be=E.colorSpace===Fn||Ue===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const D=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let ee=0;ee<6;ee++)!D&&!pe?ie[ee]=v(E.image[ee],!1,!0,l):ie[ee]=pe?E.image[ee].image:E.image[ee],ie[ee]=wt(E,ie[ee]);const $e=ie[0],Be=y($e)||a,We=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type),Ie=R(E.internalFormat,We,Ne,E.colorSpace),it=a&&E.isVideoTexture!==!0,F=ue.__version===void 0||le===!0;let ve=b(E,$e,Be);Me(r.TEXTURE_CUBE_MAP,E,Be);let ce;if(D){it&&F&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Ie,$e.width,$e.height);for(let ee=0;ee<6;ee++){ce=ie[ee].mipmaps;for(let he=0;he<ce.length;he++){const Ve=ce[he];E.format!==Cn?We!==null?it?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Ve.width,Ve.height,We,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Ie,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Ve.width,Ve.height,We,Ne,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Ie,Ve.width,Ve.height,0,We,Ne,Ve.data)}}}else{ce=E.mipmaps,it&&F&&(ce.length>0&&ve++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Ie,ie[0].width,ie[0].height));for(let ee=0;ee<6;ee++)if(pe){it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ie[ee].width,ie[ee].height,We,Ne,ie[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ie,ie[ee].width,ie[ee].height,0,We,Ne,ie[ee].data);for(let he=0;he<ce.length;he++){const rt=ce[he].image[ee].image;it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,rt.width,rt.height,We,Ne,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Ie,rt.width,rt.height,0,We,Ne,rt.data)}}else{it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,We,Ne,ie[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ie,We,Ne,ie[ee]);for(let he=0;he<ce.length;he++){const Ve=ce[he];it?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,We,Ne,Ve.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Ie,We,Ne,Ve.image[ee])}}}A(E,Be)&&S(r.TEXTURE_CUBE_MAP),ue.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function He(L,E,V,le,ae,ue){const Ue=s.convert(V.format,V.colorSpace),de=s.convert(V.type),be=R(V.internalFormat,Ue,de,V.colorSpace);if(!n.get(E).__hasExternalTextures){const pe=Math.max(1,E.width>>ue),ie=Math.max(1,E.height>>ue);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,ue,be,pe,ie,E.depth,0,Ue,de,null):t.texImage2D(ae,ue,be,pe,ie,0,Ue,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),qe(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ae,n.get(V).__webglTexture,0,we(E)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,ae,n.get(V).__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(L,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer&&!E.stencilBuffer){let le=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||qe(E)){const ae=E.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Kn?le=r.DEPTH_COMPONENT32F:ae.type===Ti&&(le=r.DEPTH_COMPONENT24));const ue=we(E);qe(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,le,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,le,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(E.depthBuffer&&E.stencilBuffer){const le=we(E);V&&qe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,E.width,E.height):qe(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const le=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ae=0;ae<le.length;ae++){const ue=le[ae],Ue=s.convert(ue.format,ue.colorSpace),de=s.convert(ue.type),be=R(ue.internalFormat,Ue,de,ue.colorSpace),D=we(E);V&&qe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,be,E.width,E.height):qe(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,be,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,be,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const le=n.get(E.depthTexture).__webglTexture,ae=we(E);if(E.depthTexture.format===ji)qe(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(E.depthTexture.format===zr)qe(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function te(L){const E=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");me(E.__webglFramebuffer,L)}else if(V){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=r.createRenderbuffer(),I(E.__webglDepthbuffer[le],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),I(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(L,E,V){const le=n.get(L);E!==void 0&&He(le.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&te(L)}function se(L){const E=L.texture,V=n.get(L),le=n.get(E);L.addEventListener("dispose",k),L.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=E.version,o.memory.textures++);const ae=L.isWebGLCubeRenderTarget===!0,ue=L.isWebGLMultipleRenderTargets===!0,Ue=y(L)||a;if(ae){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let be=0;be<E.mipmaps.length;be++)V.__webglFramebuffer[de][be]=r.createFramebuffer()}else V.__webglFramebuffer[de]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)V.__webglFramebuffer[de]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ue)if(i.drawBuffers){const de=L.texture;for(let be=0,D=de.length;be<D;be++){const pe=n.get(de[be]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&qe(L)===!1){const de=ue?E:[E];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let be=0;be<de.length;be++){const D=de[be];V.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[be]);const pe=s.convert(D.format,D.colorSpace),ie=s.convert(D.type),$e=R(D.internalFormat,pe,ie,D.colorSpace,L.isXRRenderTarget===!0),Be=we(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,$e,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,V.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),I(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Me(r.TEXTURE_CUBE_MAP,E,Ue);for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)He(V.__webglFramebuffer[de][be],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,be);else He(V.__webglFramebuffer[de],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);A(E,Ue)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const de=L.texture;for(let be=0,D=de.length;be<D;be++){const pe=de[be],ie=n.get(pe);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Me(r.TEXTURE_2D,pe,Ue),He(V.__webglFramebuffer,L,pe,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),A(pe,Ue)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?de=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,le.__webglTexture),Me(de,E,Ue),a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)He(V.__webglFramebuffer[be],L,E,r.COLOR_ATTACHMENT0,de,be);else He(V.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,de,0);A(E,Ue)&&S(de),t.unbindTexture()}L.depthBuffer&&te(L)}function Fe(L){const E=y(L)||a,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let le=0,ae=V.length;le<ae;le++){const ue=V[le];if(A(ue,E)){const Ue=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=n.get(ue).__webglTexture;t.bindTexture(Ue,de),S(Ue),t.unbindTexture()}}}function Se(L){if(a&&L.samples>0&&qe(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,le=L.height;let ae=r.COLOR_BUFFER_BIT;const ue=[],Ue=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(L),be=L.isWebGLMultipleRenderTargets===!0;if(be)for(let D=0;D<E.length;D++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let D=0;D<E.length;D++){ue.push(r.COLOR_ATTACHMENT0+D),L.depthBuffer&&ue.push(Ue);const pe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(pe===!1&&(L.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),be&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[D]),pe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ue]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ue])),be){const ie=n.get(E[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,V,le,0,0,V,le,ae,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let D=0;D<E.length;D++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,de.__webglColorRenderbuffer[D]);const pe=n.get(E[D]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function we(L){return Math.min(h,L.samples)}function qe(L){const E=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(L){const E=o.render.frame;p.get(L)!==E&&(p.set(L,E),L.update())}function wt(L,E){const V=L.colorSpace,le=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Sc||V!==rn&&V!==Fn&&(pt.getTransfer(V)===xt?a===!1?e.has("EXT_sRGB")===!0&&le===Cn?(L.format=Sc,L.minFilter=Rt,L.generateMipmaps=!1):E=Gh.sRGBToLinear(E):(le!==Cn||ae!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=oe,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=xe,this.setTextureCube=K,this.rebindTextures=fe,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=He,this.useMultisampledRTT=qe}function f_(r,e,t){const n=t.isWebGL2;function i(s,o=Fn){let a;const c=pt.getTransfer(o);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Ih)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Dh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Pg)return r.BYTE;if(s===Lg)return r.SHORT;if(s===kc)return r.UNSIGNED_SHORT;if(s===Lh)return r.INT;if(s===Ti)return r.UNSIGNED_INT;if(s===Kn)return r.FLOAT;if(s===Ns)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ig)return r.ALPHA;if(s===Cn)return r.RGBA;if(s===Dg)return r.LUMINANCE;if(s===Ng)return r.LUMINANCE_ALPHA;if(s===ji)return r.DEPTH_COMPONENT;if(s===zr)return r.DEPTH_STENCIL;if(s===Sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ug)return r.RED;if(s===Nh)return r.RED_INTEGER;if(s===Og)return r.RG;if(s===Uh)return r.RG_INTEGER;if(s===Oh)return r.RGBA_INTEGER;if(s===lc||s===uc||s===hc||s===fc)if(c===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tu||s===Cu||s===Ru||s===Pu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Tu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lu||s===Iu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Lu)return c===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Iu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Du||s===Nu||s===Uu||s===Ou||s===Fu||s===Bu||s===ku||s===zu||s===Hu||s===Vu||s===Gu||s===Wu||s===Xu||s===qu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Du)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ou)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ku)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qu)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dc||s===$u||s===Yu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dc)return c===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$u)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fg||s===Zu||s===Ku||s===ju)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ku)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ju)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ki?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class d_ extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dw={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dw)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pw extends gi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const _=t.getContextAttributes();let g=null,m=null;const x=[],v=[],y=new J;let M=null;const A=new $t;A.layers.enable(1),A.viewport=new dt;const S=new $t;S.layers.enable(2),S.viewport=new dt;const R=[A,S],b=new d_;b.layers.enable(1),b.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=x[K];return re===void 0&&(re=new Zl,x[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=x[K];return re===void 0&&(re=new Zl,x[K]=re),re.getGripSpace()},this.getHand=function(K){let re=x[K];return re===void 0&&(re=new Zl,x[K]=re),re.getHandSpace()};function k(K){const re=v.indexOf(K.inputSource);if(re===-1)return;const Y=x[re];Y!==void 0&&(Y.update(K.inputSource,K.frame,l||o),Y.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",N);for(let K=0;K<x.length;K++){const re=v[K];re!==null&&(v[K]=null,x[K].disconnect(re))}w=null,U=null,e.setRenderTarget(g),d=null,f=null,h=null,i=null,m=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new kn(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,Y=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?zr:ji,Y=_.stencil?Ki:Ti);const Me={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new kn(f.textureWidth,f.textureHeight,{format:Cn,type:Pi,depthTexture:new Yh(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ge=e.properties.get(m);Ge.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(K){for(let re=0;re<K.removed.length;re++){const Y=K.removed[re],Pe=v.indexOf(Y);Pe>=0&&(v[Pe]=null,x[Pe].disconnect(Y))}for(let re=0;re<K.added.length;re++){const Y=K.added[re];let Pe=v.indexOf(Y);if(Pe===-1){for(let Ge=0;Ge<x.length;Ge++)if(Ge>=v.length){v.push(Y),Pe=Ge;break}else if(v[Ge]===null){v[Ge]=Y,Pe=Ge;break}if(Pe===-1)break}const Me=x[Pe];Me&&Me.connect(Y)}}const P=new T,O=new T;function G(K,re,Y){P.setFromMatrixPosition(re.matrixWorld),O.setFromMatrixPosition(Y.matrixWorld);const Pe=P.distanceTo(O),Me=re.projectionMatrix.elements,Ge=Y.projectionMatrix.elements,ne=Me[14]/(Me[10]-1),ye=Me[14]/(Me[10]+1),He=(Me[9]+1)/Me[5],I=(Me[9]-1)/Me[5],me=(Me[8]-1)/Me[0],te=(Ge[8]+1)/Ge[0],fe=ne*me,se=ne*te,Fe=Pe/(-me+te),Se=Fe*-me;re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Se),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const we=ne+Fe,qe=ye+Fe,ot=fe-Se,wt=se+(Pe-Se),L=He*ye/qe*we,E=I*ye/qe*we;K.projectionMatrix.makePerspective(ot,wt,L,E,we,qe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function oe(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;b.near=S.near=A.near=K.near,b.far=S.far=A.far=K.far,(w!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,U=b.far);const re=K.parent,Y=b.cameras;oe(b,re);for(let Pe=0;Pe<Y.length;Pe++)oe(Y[Pe],re);Y.length===2?G(b,A,S):b.projectionMatrix.copy(A.projectionMatrix),Q(K,b,re)};function Q(K,re,Y){Y===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(Y.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)};let j=null;function z(K,re){if(u=re.getViewerPose(l||o),p=re,u!==null){const Y=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Pe=!1;Y.length!==b.cameras.length&&(b.cameras.length=0,Pe=!0);for(let Me=0;Me<Y.length;Me++){const Ge=Y[Me];let ne=null;if(d!==null)ne=d.getViewport(Ge);else{const He=h.getViewSubImage(f,Ge);ne=He.viewport,Me===0&&(e.setRenderTargetTextures(m,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(m))}let ye=R[Me];ye===void 0&&(ye=new $t,ye.layers.enable(Me),ye.viewport=new dt,R[Me]=ye),ye.matrix.fromArray(Ge.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ge.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ne.x,ne.y,ne.width,ne.height),Me===0&&(b.matrix.copy(ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Pe===!0&&b.cameras.push(ye)}}for(let Y=0;Y<x.length;Y++){const Pe=v[Y],Me=x[Y];Pe!==null&&Me!==void 0&&Me.update(Pe,re,l||o)}j&&j(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),p=null}const xe=new o_;xe.setAnimationLoop(z),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}function mw(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,i_(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,x,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gw(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(p(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const M=v.program;n.updateUBOMapping(x,M);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const v=h();x.__bindingPointIndex=v;const y=r.createBuffer(),M=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,S=y.length;A<S;A++){const R=y[A];if(d(R,A,M)===!0){const b=R.__offset,w=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let k=0;k<w.length;k++){const W=w[k],N=_(W);typeof W=="number"?(R.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,b+U,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=W.elements[0],R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=W.elements[0],R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=W.elements[0]):(W.toArray(R.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,R.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const A=Array.isArray(M)?M:[M],S=[];for(let R=0;R<A.length;R++)S.push(A[R].clone());y[v]=S}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],S=Array.isArray(M)?M:[M];for(let R=0;R<A.length;R++){const b=A[R];if(b.equals(S[R])===!1)return b.copy(S[R]),!0}}return!1}function p(x){const v=x.uniforms;let y=0;const M=16;let A=0;for(let S=0,R=v.length;S<R;S++){const b=v[S],w={boundary:0,storage:0},U=Array.isArray(b.value)?b.value:[b.value];for(let k=0,W=U.length;k<W;k++){const N=U[k],P=_(N);w.boundary+=P.boundary,w.storage+=P.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,S>0){A=y%M;const k=M-A;A!==0&&k-w.boundary<0&&(y+=M-A,b.__offset=y)}y+=w.storage}return A=y%M,A>0&&(y+=M-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}class Kh{constructor(e={}){const{canvas:t=e_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const v=this;let y=!1,M=0,A=0,S=null,R=-1,b=null;const w=new dt,U=new dt;let k=null;const W=new _e(0);let N=0,P=t.width,O=t.height,G=1,oe=null,Q=null;const j=new dt(0,0,P,O),z=new dt(0,0,P,O);let xe=!1;const K=new Zo;let re=!1,Y=!1,Pe=null;const Me=new ze,Ge=new J,ne=new T,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return S===null?G:1}let I=n;function me(C,B){for(let q=0;q<C.length;q++){const Z=C[q],X=t.getContext(Z,B);if(X!==null)return X}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gs}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ve,!1),I===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),I=me(B,C),I===null)throw me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,fe,se,Fe,Se,we,qe,ot,wt,L,E,V,le,ae,ue,Ue,de,be,D,pe,ie,$e,Be,We;function Ne(){te=new LM(I),fe=new AM(I,te,e),te.init(fe),$e=new f_(I,te,fe),se=new hw(I,te,fe),Fe=new NM(I),Se=new QS,we=new fw(I,te,se,Se,fe,$e,Fe),qe=new TM(v),ot=new PM(v),wt=new Vx(I,fe),Be=new SM(I,te,wt,fe),L=new IM(I,wt,Fe,Be),E=new BM(I,L,wt,Fe),D=new FM(I,fe,we),Ue=new EM(Se),V=new JS(v,qe,ot,te,fe,Be,Ue),le=new mw(v,Se),ae=new tw,ue=new aw(te,fe),be=new MM(v,qe,ot,se,E,f,c),de=new uw(v,E,fe),We=new gw(I,Fe,fe,se),pe=new wM(I,te,Fe,fe),ie=new DM(I,te,Fe,fe),Fe.programs=V.programs,v.capabilities=fe,v.extensions=te,v.properties=Se,v.renderLists=ae,v.shadowMap=de,v.state=se,v.info=Fe}Ne();const Ie=new pw(v,I);this.xr=Ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(P,O,!1))},this.getSize=function(C){return C.set(P,O)},this.setSize=function(C,B,q=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,O=B,t.width=Math.floor(C*G),t.height=Math.floor(B*G),q===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(P*G,O*G).floor()},this.setDrawingBufferSize=function(C,B,q){P=C,O=B,G=q,t.width=Math.floor(C*q),t.height=Math.floor(B*q),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,B,q,Z){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,B,q,Z),se.viewport(w.copy(j).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,B,q,Z){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,B,q,Z),se.scissor(U.copy(z).multiplyScalar(G).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){se.setScissorTest(xe=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(C=!0,B=!0,q=!0){let Z=0;if(C){let X=!1;if(S!==null){const Re=S.texture.format;X=Re===Oh||Re===Uh||Re===Nh}if(X){const Re=S.texture.type,ke=Re===Pi||Re===Ti||Re===kc||Re===Ki||Re===Ih||Re===Dh,Ye=be.getClearColor(),Ze=be.getClearAlpha(),nt=Ye.r,Ke=Ye.g,Qe=Ye.b;ke?(d[0]=nt,d[1]=Ke,d[2]=Qe,d[3]=Ze,I.clearBufferuiv(I.COLOR,0,d)):(p[0]=nt,p[1]=Ke,p[2]=Qe,p[3]=Ze,I.clearBufferiv(I.COLOR,0,p))}else Z|=I.COLOR_BUFFER_BIT}B&&(Z|=I.DEPTH_BUFFER_BIT),q&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ae.dispose(),ue.dispose(),Se.dispose(),qe.dispose(),ot.dispose(),E.dispose(),Be.dispose(),We.dispose(),V.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",gn),Ie.removeEventListener("sessionend",vt),Pe&&(Pe.dispose(),Pe=null),_n.stop()};function it(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Fe.autoReset,B=de.enabled,q=de.autoUpdate,Z=de.needsUpdate,X=de.type;Ne(),Fe.autoReset=C,de.enabled=B,de.autoUpdate=q,de.needsUpdate=Z,de.type=X}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const B=C.target;B.removeEventListener("dispose",ce),ee(B)}function ee(C){he(C),Se.remove(C)}function he(C){const B=Se.get(C).programs;B!==void 0&&(B.forEach(function(q){V.releaseProgram(q)}),C.isShaderMaterial&&V.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,q,Z,X,Re){B===null&&(B=ye);const ke=X.isMesh&&X.matrixWorld.determinant()<0,Ye=iv(C,B,q,Z,X);se.setMaterial(Z,ke);let Ze=q.index,nt=1;if(Z.wireframe===!0){if(Ze=L.getWireframeAttribute(q),Ze===void 0)return;nt=2}const Ke=q.drawRange,Qe=q.attributes.position;let Wt=Ke.start*nt,Dn=(Ke.start+Ke.count)*nt;Re!==null&&(Wt=Math.max(Wt,Re.start*nt),Dn=Math.min(Dn,(Re.start+Re.count)*nt)),Ze!==null?(Wt=Math.max(Wt,0),Dn=Math.min(Dn,Ze.count)):Qe!=null&&(Wt=Math.max(Wt,0),Dn=Math.min(Dn,Qe.count));const en=Dn-Wt;if(en<0||en===1/0)return;Be.setup(X,Z,Ye,q,Ze);let vi,Ct=pe;if(Ze!==null&&(vi=wt.get(Ze),Ct=ie,Ct.setIndex(vi)),X.isMesh)Z.wireframe===!0?(se.setLineWidth(Z.wireframeLinewidth*He()),Ct.setMode(I.LINES)):Ct.setMode(I.TRIANGLES);else if(X.isLine){let st=Z.linewidth;st===void 0&&(st=1),se.setLineWidth(st*He()),X.isLineSegments?Ct.setMode(I.LINES):X.isLineLoop?Ct.setMode(I.LINE_LOOP):Ct.setMode(I.LINE_STRIP)}else X.isPoints?Ct.setMode(I.POINTS):X.isSprite&&Ct.setMode(I.TRIANGLES);if(X.isBatchedMesh)Ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Ct.renderInstances(Wt,en,X.count);else if(q.isInstancedBufferGeometry){const st=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Sl=Math.min(q.instanceCount,st);Ct.renderInstances(Wt,en,Sl)}else Ct.render(Wt,en)};function Ve(C,B,q){C.transparent===!0&&C.side===On&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,ra(C,B,q),C.side=pi,C.needsUpdate=!0,ra(C,B,q),C.side=On):ra(C,B,q)}this.compile=function(C,B,q=null){q===null&&(q=C),g=ue.get(q),g.init(),x.push(g),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),C!==q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(v._useLegacyLights);const Z=new Set;return C.traverse(function(X){const Re=X.material;if(Re)if(Array.isArray(Re))for(let ke=0;ke<Re.length;ke++){const Ye=Re[ke];Ve(Ye,q,X),Z.add(Ye)}else Ve(Re,q,X),Z.add(Re)}),x.pop(),g=null,Z},this.compileAsync=function(C,B,q=null){const Z=this.compile(C,B,q);return new Promise(X=>{function Re(){if(Z.forEach(function(ke){Se.get(ke).currentProgram.isReady()&&Z.delete(ke)}),Z.size===0){X(C);return}setTimeout(Re,10)}te.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let rt=null;function Qt(C){rt&&rt(C)}function gn(){_n.stop()}function vt(){_n.start()}const _n=new o_;_n.setAnimationLoop(Qt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(C){rt=C,Ie.setAnimationLoop(C),C===null?_n.stop():_n.start()},Ie.addEventListener("sessionstart",gn),Ie.addEventListener("sessionend",vt),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(B),B=Ie.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,B,S),g=ue.get(C,x.length),g.init(),x.push(g),Me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Me),Y=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,Y),_=ae.get(C,m.length),_.init(),m.push(_),si(C,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(oe,Q),this.info.render.frame++,re===!0&&Ue.beginShadows();const q=g.state.shadowsArray;if(de.render(q,C,B),re===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(_,C),g.setupLights(v._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let X=0,Re=Z.length;X<Re;X++){const ke=Z[X];Bf(_,C,ke,ke.viewport)}}else Bf(_,C,B);S!==null&&(we.updateMultisampleRenderTarget(S),we.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(v,C,B),Be.resetDefaultState(),R=-1,b=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function si(C,B,q,Z){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){Z&&ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);const ke=E.update(C),Ye=C.material;Ye.visible&&_.push(C,ke,Ye,q,ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const ke=E.update(C),Ye=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ne.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ne.copy(ke.boundingSphere.center)),ne.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(Ye)){const Ze=ke.groups;for(let nt=0,Ke=Ze.length;nt<Ke;nt++){const Qe=Ze[nt],Wt=Ye[Qe.materialIndex];Wt&&Wt.visible&&_.push(C,ke,Wt,q,ne.z,Qe)}}else Ye.visible&&_.push(C,ke,Ye,q,ne.z,null)}}const Re=C.children;for(let ke=0,Ye=Re.length;ke<Ye;ke++)si(Re[ke],B,q,Z)}function Bf(C,B,q,Z){const X=C.opaque,Re=C.transmissive,ke=C.transparent;g.setupLightsView(q),re===!0&&Ue.setGlobalState(v.clippingPlanes,q),Re.length>0&&nv(X,Re,B,q),Z&&se.viewport(w.copy(Z)),X.length>0&&ia(X,B,q),Re.length>0&&ia(Re,B,q),ke.length>0&&ia(ke,B,q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function nv(C,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Re=fe.isWebGL2;Pe===null&&(Pe=new kn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Ns:Pi,minFilter:mi,samples:Re?4:0})),v.getDrawingBufferSize(Ge),Re?Pe.setSize(Ge.x,Ge.y):Pe.setSize(wc(Ge.x),wc(Ge.y));const ke=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(W),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Ye=v.toneMapping;v.toneMapping=Ri,ia(C,q,Z),we.updateMultisampleRenderTarget(Pe),we.updateRenderTargetMipmap(Pe);let Ze=!1;for(let nt=0,Ke=B.length;nt<Ke;nt++){const Qe=B[nt],Wt=Qe.object,Dn=Qe.geometry,en=Qe.material,vi=Qe.group;if(en.side===On&&Wt.layers.test(Z.layers)){const Ct=en.side;en.side=Sn,en.needsUpdate=!0,kf(Wt,q,Z,Dn,en,vi),en.side=Ct,en.needsUpdate=!0,Ze=!0}}Ze===!0&&(we.updateMultisampleRenderTarget(Pe),we.updateRenderTargetMipmap(Pe)),v.setRenderTarget(ke),v.setClearColor(W,N),v.toneMapping=Ye}function ia(C,B,q){const Z=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Re=C.length;X<Re;X++){const ke=C[X],Ye=ke.object,Ze=ke.geometry,nt=Z===null?ke.material:Z,Ke=ke.group;Ye.layers.test(q.layers)&&kf(Ye,B,q,Ze,nt,Ke)}}function kf(C,B,q,Z,X,Re){C.onBeforeRender(v,B,q,Z,X,Re),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,B,q,Z,C,Re),X.transparent===!0&&X.side===On&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,v.renderBufferDirect(q,B,Z,X,C,Re),X.side=pi,X.needsUpdate=!0,v.renderBufferDirect(q,B,Z,X,C,Re),X.side=On):v.renderBufferDirect(q,B,Z,X,C,Re),C.onAfterRender(v,B,q,Z,X,Re)}function ra(C,B,q){B.isScene!==!0&&(B=ye);const Z=Se.get(C),X=g.state.lights,Re=g.state.shadowsArray,ke=X.state.version,Ye=V.getParameters(C,X.state,Re,B,q),Ze=V.getProgramCacheKey(Ye);let nt=Z.programs;Z.environment=C.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(C.isMeshStandardMaterial?ot:qe).get(C.envMap||Z.environment),nt===void 0&&(C.addEventListener("dispose",ce),nt=new Map,Z.programs=nt);let Ke=nt.get(Ze);if(Ke!==void 0){if(Z.currentProgram===Ke&&Z.lightsStateVersion===ke)return Hf(C,Ye),Ke}else Ye.uniforms=V.getUniforms(C),C.onBuild(q,Ye,v),C.onBeforeCompile(Ye,v),Ke=V.acquireProgram(Ye,Ze),nt.set(Ze,Ke),Z.uniforms=Ye.uniforms;const Qe=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ue.uniform),Hf(C,Ye),Z.needsLights=sv(C),Z.lightsStateVersion=ke,Z.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Ke,Z.uniformsList=null,Ke}function zf(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=mc.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Hf(C,B){const q=Se.get(C);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function iv(C,B,q,Z,X){B.isScene!==!0&&(B=ye),we.resetTextureUnits();const Re=B.fog,ke=Z.isMeshStandardMaterial?B.environment:null,Ye=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:rn,Ze=(Z.isMeshStandardMaterial?ot:qe).get(Z.envMap||ke),nt=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Qe=!!q.morphAttributes.position,Wt=!!q.morphAttributes.normal,Dn=!!q.morphAttributes.color;let en=Ri;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(en=v.toneMapping);const vi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=vi!==void 0?vi.length:0,st=Se.get(Z),Sl=g.state.lights;if(re===!0&&(Y===!0||C!==b)){const Hn=C===b&&Z.id===R;Ue.setState(Z,C,Hn)}let Dt=!1;Z.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Sl.state.version||st.outputColorSpace!==Ye||X.isBatchedMesh&&st.batching===!1||!X.isBatchedMesh&&st.batching===!0||X.isInstancedMesh&&st.instancing===!1||!X.isInstancedMesh&&st.instancing===!0||X.isSkinnedMesh&&st.skinning===!1||!X.isSkinnedMesh&&st.skinning===!0||X.isInstancedMesh&&st.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&st.instancingColor===!1&&X.instanceColor!==null||st.envMap!==Ze||Z.fog===!0&&st.fog!==Re||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ue.numPlanes||st.numIntersection!==Ue.numIntersection)||st.vertexAlphas!==nt||st.vertexTangents!==Ke||st.morphTargets!==Qe||st.morphNormals!==Wt||st.morphColors!==Dn||st.toneMapping!==en||fe.isWebGL2===!0&&st.morphTargetsCount!==Ct)&&(Dt=!0):(Dt=!0,st.__version=Z.version);let or=st.currentProgram;Dt===!0&&(or=ra(Z,B,X));let Vf=!1,Zs=!1,wl=!1;const un=or.getUniforms(),ar=st.uniforms;if(se.useProgram(or.program)&&(Vf=!0,Zs=!0,wl=!0),Z.id!==R&&(R=Z.id,Zs=!0),Vf||b!==C){un.setValue(I,"projectionMatrix",C.projectionMatrix),un.setValue(I,"viewMatrix",C.matrixWorldInverse);const Hn=un.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,ne.setFromMatrixPosition(C.matrixWorld)),fe.logarithmicDepthBuffer&&un.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&un.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Zs=!0,wl=!0)}if(X.isSkinnedMesh){un.setOptional(I,X,"bindMatrix"),un.setOptional(I,X,"bindMatrixInverse");const Hn=X.skeleton;Hn&&(fe.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),un.setValue(I,"boneTexture",Hn.boneTexture,we)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(un.setOptional(I,X,"batchingTexture"),un.setValue(I,"batchingTexture",X._matricesTexture,we));const Al=q.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&fe.isWebGL2===!0)&&D.update(X,q,or),(Zs||st.receiveShadow!==X.receiveShadow)&&(st.receiveShadow=X.receiveShadow,un.setValue(I,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ar.envMap.value=Ze,ar.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Zs&&(un.setValue(I,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&rv(ar,wl),Re&&Z.fog===!0&&le.refreshFogUniforms(ar,Re),le.refreshMaterialUniforms(ar,Z,G,O,Pe),mc.upload(I,zf(st),ar,we)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(mc.upload(I,zf(st),ar,we),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&un.setValue(I,"center",X.center),un.setValue(I,"modelViewMatrix",X.modelViewMatrix),un.setValue(I,"normalMatrix",X.normalMatrix),un.setValue(I,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Hn=Z.uniformsGroups;for(let El=0,ov=Hn.length;El<ov;El++)if(fe.isWebGL2){const Gf=Hn[El];We.update(Gf,or),We.bind(Gf,or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return or}function rv(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function sv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,B,q){Se.get(C.texture).__webglTexture=B,Se.get(C.depthTexture).__webglTexture=q;const Z=Se.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const q=Se.get(C);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,q=0){S=C,M=B,A=q;let Z=!0,X=null,Re=!1,ke=!1;if(C){const Ze=Se.get(C);Ze.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1):Ze.__webglFramebuffer===void 0?we.setupRenderTarget(C):Ze.__hasExternalTextures&&we.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ke=!0);const Ke=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[B])?X=Ke[B][q]:X=Ke[B],Re=!0):fe.isWebGL2&&C.samples>0&&we.useMultisampledRTT(C)===!1?X=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[q]:X=Ke,w.copy(C.viewport),U.copy(C.scissor),k=C.scissorTest}else w.copy(j).multiplyScalar(G).floor(),U.copy(z).multiplyScalar(G).floor(),k=xe;if(se.bindFramebuffer(I.FRAMEBUFFER,X)&&fe.drawBuffers&&Z&&se.drawBuffers(C,X),se.viewport(w),se.scissor(U),se.setScissorTest(k),Re){const Ze=Se.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ze.__webglTexture,q)}else if(ke){const Ze=Se.get(C.texture),nt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,q||0,nt)}R=-1},this.readRenderTargetPixels=function(C,B,q,Z,X,Re,ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){se.bindFramebuffer(I.FRAMEBUFFER,Ye);try{const Ze=C.texture,nt=Ze.format,Ke=Ze.type;if(nt!==Cn&&$e.convert(nt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ke===Ns&&(te.has("EXT_color_buffer_half_float")||fe.isWebGL2&&te.has("EXT_color_buffer_float"));if(Ke!==Pi&&$e.convert(Ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Kn&&(fe.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Z&&q>=0&&q<=C.height-X&&I.readPixels(B,q,Z,X,$e.convert(nt),$e.convert(Ke),Re)}finally{const Ze=S!==null?Se.get(S).__webglFramebuffer:null;se.bindFramebuffer(I.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(C,B,q=0){const Z=Math.pow(2,-q),X=Math.floor(B.image.width*Z),Re=Math.floor(B.image.height*Z);we.setTexture2D(B,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,C.x,C.y,X,Re),se.unbindTexture()},this.copyTextureToTexture=function(C,B,q,Z=0){const X=B.image.width,Re=B.image.height,ke=$e.convert(q.format),Ye=$e.convert(q.type);we.setTexture2D(q,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Z,C.x,C.y,X,Re,ke,Ye,B.image.data):B.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Z,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,ke,B.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Z,C.x,C.y,ke,Ye,B.image),Z===0&&q.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(C,B,q,Z,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=C.max.x-C.min.x+1,ke=C.max.y-C.min.y+1,Ye=C.max.z-C.min.z+1,Ze=$e.convert(Z.format),nt=$e.convert(Z.type);let Ke;if(Z.isData3DTexture)we.setTexture3D(Z,0),Ke=I.TEXTURE_3D;else if(Z.isDataArrayTexture)we.setTexture2DArray(Z,0),Ke=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const Qe=I.getParameter(I.UNPACK_ROW_LENGTH),Wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dn=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),vi=I.getParameter(I.UNPACK_SKIP_IMAGES),Ct=q.isCompressedTexture?q.mipmaps[0]:q.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,C.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,C.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?I.texSubImage3D(Ke,X,B.x,B.y,B.z,Re,ke,Ye,Ze,nt,Ct.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ke,X,B.x,B.y,B.z,Re,ke,Ye,Ze,Ct.data)):I.texSubImage3D(Ke,X,B.x,B.y,B.z,Re,ke,Ye,Ze,nt,Ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vi),X===0&&Z.generateMipmaps&&I.generateMipmap(Ke),se.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?we.setTextureCube(C,0):C.isData3DTexture?we.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?we.setTexture2DArray(C,0):we.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){M=0,A=0,S=null,se.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===qo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Ji:zh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?Tt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class p_ extends Kh{}p_.prototype.isWebGL1Renderer=!0;class Zc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new Zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let jh=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class Ko{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new T;class Pn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jh extends Kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const eo=new T,vs=new T,xs=new T,ys=new J,to=new J,m_=new ze,Ra=new T,no=new T,Pa=new T,Id=new J,Kl=new J,Dd=new J;class g_ extends ct{constructor(e=new Jh){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ko(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Pn(n,3,0,!1)),_s.setAttribute("uv",new Pn(n,2,3,!1))}this.geometry=_s,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),m_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;La(Ra.set(-.5,-.5,0),xs,o,vs,i,s),La(no.set(.5,-.5,0),xs,o,vs,i,s),La(Pa.set(.5,.5,0),xs,o,vs,i,s),Id.set(0,0),Kl.set(1,0),Dd.set(1,1);let a=e.ray.intersectTriangle(Ra,no,Pa,!1,eo);if(a===null&&(La(no.set(-.5,.5,0),xs,o,vs,i,s),Kl.set(0,1),a=e.ray.intersectTriangle(Ra,Pa,no,!1,eo),a===null))return;const c=e.ray.origin.distanceTo(eo);c<e.near||c>e.far||t.push({distance:c,point:eo.clone(),uv:Tn.getInterpolation(eo,Ra,no,Pa,Id,Kl,Dd,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function La(r,e,t,n,i,s){ys.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(to.x=s*ys.x-i*ys.y,to.y=i*ys.x+s*ys.y):to.copy(ys),r.copy(e),r.x+=to.x,r.y+=to.y,r.applyMatrix4(m_)}const Ia=new T,Nd=new T;class __ extends ct{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ia.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ia);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ia.setFromMatrixPosition(e.matrixWorld),Nd.setFromMatrixPosition(this.matrixWorld);const n=Ia.distanceTo(Nd)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Ud=new T,Od=new dt,Fd=new dt,_w=new T,Bd=new ze,Da=new T,jl=new Zt,kd=new ze,Jl=new Kr;class Qh extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(i),e.ray.intersectsSphere(jl)!==!1&&(kd.copy(i).invert(),Jl.copy(e.ray).applyMatrix4(kd),!(this.boundingBox!==null&&Jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Od.fromBufferAttribute(i.attributes.skinIndex,e),Fd.fromBufferAttribute(i.attributes.skinWeight,e),Ud.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Fd.getComponent(s);if(o!==0){const a=Od.getComponent(s);Bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_w.copy(Ud).applyMatrix4(Bd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class jc extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ir extends It{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Ft,u=Ft,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new ze,vw=new ze;class jo{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:vw;zd.multiplyMatrices(a,t[s]),zd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ir(t,e,e,Cn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new jc),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Vr extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new ze,Hd=new ze,Na=[],Vd=new Yt,xw=new ze,io=new Et,ro=new Zt;class Jc extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),Vd.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),ro.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),e.ray.intersectsSphere(ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,bs),Hd.multiplyMatrices(n,bs),io.matrixWorld=Hd,io.raycast(e,Na);for(let o=0,a=Na.length;o<a;o++){const c=Na[o];c.instanceId=s,c.object=this,t.push(c)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function yw(r,e){return r.z-e.z}function bw(r,e){return e.z-r.z}class Mw{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Ms="batchId",Gi=new ze,Gd=new ze,Sw=new ze,Wd=new ze,Ql=new Zo,Ua=new Yt,fr=new Zt,so=new T,eu=new Mw,dn=new Et,Oa=[];function ww(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class v_ extends Et{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Je,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ir(t,e,e,Cn,Kn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const c=e.getAttribute(a),{array:l,itemSize:u,normalized:h}=c,f=new l.constructor(n*u),d=new c.constructor(f,u,h);d.setUsage(c.usage),t.setAttribute(a,d)}if(e.getIndex()!==null){const a=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new mt(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Ms,new mt(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ms))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ms}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Ms)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Gi),this.getBoundingBoxAt(i,Ua).applyMatrix4(Gi),t.union(Ua))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Gi),this.getBoundingSphereAt(i,fr).applyMatrix4(Gi),t.union(fr))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,f=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;h.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,Sw.toArray(p,_*16),d.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Yt,sphereInitialized:!1,sphere:new Zt});const g=this.geometry.getAttribute(Ms);for(let m=0;m<i.vertexCount;m++)g.setX(i.vertexStart+m,_);return g.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const d in n.attributes){if(d===Ms)continue;const p=t.getAttribute(d),_=n.getAttribute(d);ww(p,_,c);const g=p.itemSize;for(let m=p.count,x=l;m<x;m++){const v=c+m;for(let y=0;y<g;y++)_.setComponent(v,y,0)}_.needsUpdate=!0}if(i){const d=a.indexStart;for(let p=0;p<o.count;p++)s.setX(d+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)s.setX(d+p,c);s.needsUpdate=!0}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=i?o.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.box,o=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const a=o.index,c=o.attributes.position,l=this._drawRanges[e];for(let u=l.start,h=l.start+l.count;u<h;u++){let f=u;a&&(f=a.getX(f)),s.expandByPoint(so.fromBufferAttribute(c,f))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,Ua),Ua.getCenter(s.center);const a=o.index,c=o.attributes.position,l=this._drawRanges[e];let u=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let d=h;a&&(d=a.getX(d)),so.fromBufferAttribute(c,d),u=Math.max(u,s.center.distanceToSquared(so))}s.radius=Math.sqrt(u),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;dn.material=this.material,dn.geometry.index=c.index,dn.geometry.attributes=c.attributes,dn.geometry.boundingBox===null&&(dn.geometry.boundingBox=new Yt),dn.geometry.boundingSphere===null&&(dn.geometry.boundingSphere=new Zt);for(let l=0;l<o;l++){if(!n[l]||!i[l])continue;const u=s[l];dn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,dn.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,dn.geometry.boundingBox),this.getBoundingSphereAt(l,dn.geometry.boundingSphere),dn.raycast(e,Oa);for(let h=0,f=Oa.length;h<f;h++){const d=Oa[h];d.object=this,d.batchId=l,t.push(d)}Oa.length=0}dn.material=null,dn.geometry.index=null,dn.geometry.attributes={},dn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._visibility,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ql.setFromProjectionMatrix(Wd,e.isWebGPURenderer?Os:jn));let d=0;if(this.sortObjects){Gd.copy(this.matrixWorld).invert(),so.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Gd);for(let g=0,m=c.length;g<m;g++)if(c[g]){this.getMatrixAt(g,Gi),this.getBoundingSphereAt(g,fr).applyMatrix4(Gi);let x=!1;if(f&&(x=!Ql.intersectsSphere(fr)),!x){const v=so.distanceTo(fr.center);eu.push(h[g],v)}}const p=eu.list,_=this.customSort;_===null?p.sort(s.transparent?bw:yw):_.call(this,p,n);for(let g=0,m=p.length;g<m;g++){const x=p[g];l[d]=x.start*a,u[d]=x.count,d++}eu.reset()}else for(let p=0,_=c.length;p<_;p++)if(c[p]){let g=!1;if(f&&(this.getMatrixAt(p,Gi),this.getBoundingSphereAt(p,fr).applyMatrix4(Gi),g=!Ql.intersectsSphere(fr)),!g){const m=h[p];l[d]=m.start*a,u[d]=m.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class mn extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xd=new T,qd=new T,$d=new ze,tu=new Kr,Fa=new Zt;class Ni extends ct{constructor(e=new Je,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Xd.fromBufferAttribute(t,i-1),qd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xd.distanceTo(qd);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;$d.copy(i).invert(),tu.copy(e.ray).applyMatrix4($d);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,u=new T,h=new T,f=new T,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=d){const M=p.getX(v),A=p.getX(v+1);if(l.fromBufferAttribute(g,M),u.fromBufferAttribute(g,A),tu.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=d){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),tu.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Yd=new T,Zd=new T;class ei extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Yd.fromBufferAttribute(t,i),Zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yd.distanceTo(Zd);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ef extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qc extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kd=new ze,ih=new Kr,Ba=new Zt,ka=new T;class tf extends ct{constructor(e=new Je,t=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;Kd.copy(i).invert(),ih.copy(e.ray).applyMatrix4(Kd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const g=l.getX(p);ka.fromBufferAttribute(h,g),jd(ka,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)ka.fromBufferAttribute(h,p),jd(ka,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jd(r,e,t,n,i,s,o){const a=ih.distanceSqToPoint(r);if(a<t){const c=new T;ih.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Aw extends It{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Rt,this.magFilter=s!==void 0?s:Rt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ew extends It{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ft,this.minFilter=Ft,this.generateMipmaps=!1,this.needsUpdate=!0}}class el extends It{constructor(e,t,n,i,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Tw extends el{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=cn}}class Cw extends el{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Di),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Rw extends It{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new J:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],s=[],o=[],a=new T,c=new ze;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new T)}s[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Bt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Bt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tl extends ti{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new J,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class x_ extends tl{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nf(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const za=new T,nu=new nf,iu=new nf,ru=new nf;class y_ extends ti{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(za.subVectors(i[0],i[1]).add(i[0]),l=za);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(za.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=za),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),nu.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,g),iu.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,g),ru.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(nu.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),iu.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),ru.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(nu.calc(c),iu.calc(c),ru.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jd(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function Pw(r,e){const t=1-r;return t*t*e}function Lw(r,e){return 2*(1-r)*r*e}function Iw(r,e){return r*r*e}function vo(r,e,t,n){return Pw(r,e)+Lw(r,t)+Iw(r,n)}function Dw(r,e){const t=1-r;return t*t*t*e}function Nw(r,e){const t=1-r;return 3*t*t*r*e}function Uw(r,e){return 3*(1-r)*r*r*e}function Ow(r,e){return r*r*r*e}function xo(r,e,t,n,i){return Dw(r,e)+Nw(r,t)+Uw(r,n)+Ow(r,i)}class rf extends ti{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,i.x,s.x,o.x,a.x),xo(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends ti{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,i.x,s.x,o.x,a.x),xo(e,i.y,s.y,o.y,a.y),xo(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sf extends ti{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends ti{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class of extends ti{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(vo(e,i.x,s.x,o.x),vo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nl extends ti{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(vo(e,i.x,s.x,o.x),vo(e,i.y,s.y,o.y),vo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class af extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Jd(a,c.x,l.x,u.x,h.x),Jd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var Ac=Object.freeze({__proto__:null,ArcCurve:x_,CatmullRomCurve3:y_,CubicBezierCurve:rf,CubicBezierCurve3:b_,EllipseCurve:tl,LineCurve:sf,LineCurve3:M_,QuadraticBezierCurve:of,QuadraticBezierCurve3:nl,SplineCurve:af});class S_ extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ac[i.type]().fromJSON(i))}return this}}class Po extends S_{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sf(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new of(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new rf(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new af(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new tl(e,t,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jo extends Je{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Bt(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/t,h=new T,f=new J,d=new T,p=new T,_=new T;let g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let x=0;x<=t;x++){const v=n+x*u*i,y=Math.sin(v),M=Math.cos(v);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*y,h.y=e[A].y,h.z=e[A].x*M,o.push(h.x,h.y,h.z),f.x=x/t,f.y=A/(e.length-1),a.push(f.x,f.y);const S=c[3*A+0]*y,R=c[3*A+1],b=c[3*A+0]*M;l.push(S,R,b)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,M=y,A=y+e.length,S=y+e.length+1,R=y+1;s.push(M,A,R),s.push(S,R,A)}this.setIndex(s),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.points,e.segments,e.phiStart,e.phiLength)}}class il extends Jo{constructor(e=1,t=1,n=4,i=8){const s=new Po;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new il(e.radius,e.length,e.capSegments,e.radialSegments)}}class rl extends Je{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new T,u=new J;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $s extends Je{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function x(){const y=new T,M=new T;let A=0;const S=(t-e)/n;for(let R=0;R<=s;R++){const b=[],w=R/s,U=w*(t-e)+e;for(let k=0;k<=i;k++){const W=k/i,N=W*c+a,P=Math.sin(N),O=Math.cos(N);M.x=U*P,M.y=-w*n+g,M.z=U*O,h.push(M.x,M.y,M.z),y.set(P,S,O).normalize(),f.push(y.x,y.y,y.z),d.push(W,1-w),b.push(p++)}_.push(b)}for(let R=0;R<i;R++)for(let b=0;b<s;b++){const w=_[b][R],U=_[b+1][R],k=_[b+1][R+1],W=_[b][R+1];u.push(w,U,W),u.push(U,k,W),A+=6}l.addGroup(m,A,0),m+=A}function v(y){const M=p,A=new J,S=new T;let R=0;const b=y===!0?e:t,w=y===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),p++;const U=p;for(let k=0;k<=i;k++){const N=k/i*c+a,P=Math.cos(N),O=Math.sin(N);S.x=b*O,S.y=g*w,S.z=b*P,h.push(S.x,S.y,S.z),f.push(0,w,0),A.x=P*.5+.5,A.y=O*.5*w+.5,d.push(A.x,A.y),p++}for(let k=0;k<i;k++){const W=M+k,N=U+k;y===!0?u.push(N,N+1,W):u.push(N+1,N,W),R+=3}l.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends $s{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new sl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rr extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new T,y=new T,M=new T;for(let A=0;A<t.length;A+=3)d(t[A+0],v),d(t[A+1],y),d(t[A+2],M),c(v,y,M,x)}function c(x,v,y,M){const A=M+1,S=[];for(let R=0;R<=A;R++){S[R]=[];const b=x.clone().lerp(y,R/A),w=v.clone().lerp(y,R/A),U=A-R;for(let k=0;k<=U;k++)k===0&&R===A?S[R][k]=b:S[R][k]=b.clone().lerp(w,k/U)}for(let R=0;R<A;R++)for(let b=0;b<2*(A-R)-1;b++){const w=Math.floor(b/2);b%2===0?(f(S[R][w+1]),f(S[R+1][w]),f(S[R][w])):(f(S[R][w+1]),f(S[R+1][w+1]),f(S[R+1][w]))}}function l(x){const v=new T;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const x=new T;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=g(x)/2/Math.PI+.5,M=m(x)/Math.PI+.5;o.push(y,1-M)}p(),h()}function h(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],M=o[x+4],A=Math.max(v,y,M),S=Math.min(v,y,M);A>.9&&S<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),M<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){const x=new T,v=new T,y=new T,M=new T,A=new J,S=new J,R=new J;for(let b=0,w=0;b<s.length;b+=9,w+=6){x.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),A.set(o[w+0],o[w+1]),S.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),M.copy(x).add(v).add(y).divideScalar(3);const U=g(M);_(A,w+0,x,U),_(S,w+2,v,U),_(R,w+4,y,U)}}function _(x,v,y,M){M<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=M/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.vertices,e.indices,e.radius,e.details)}}class ol extends rr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}const Ha=new T,Va=new T,su=new T,Ga=new Tn;class w_ extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Lr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=Ga;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Ga.getNormal(su),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=h[x],M=h[v],A=Ga[u[x]],S=Ga[u[v]],R=`${y}_${M}`,b=`${M}_${y}`;b in f&&f[b]?(su.dot(f[b].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(S.x,S.y,S.z)),f[b]=null):R in f||(f[R]={index0:l[x],index1:l[v],normal:su.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:g}=f[p];Ha.fromBufferAttribute(a,_),Va.fromBufferAttribute(a,g),d.push(Ha.x,Ha.y,Ha.z),d.push(Va.x,Va.y,Va.z)}this.setAttribute("position",new Le(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dr extends Po{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Po().fromJSON(i))}return this}}const Fw={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=A_(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(n&&(s=Vw(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(let p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Lo(s,o,t,a,c,d,0),o}};function A_(r,e,t,n,i){let s,o;if(i===Qw(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Qd(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Qd(s,r[s],r[s+1],o);return o&&al(o,o.next)&&(Do(o),o=o.next),o}function Gr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(al(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Do(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lo(r,e,t,n,i,s,o){if(!r)return;!o&&s&&$w(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?kw(r,n,i,s):Bw(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Do(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=zw(Gr(r),e,t),Lo(r,e,t,n,i,s,2)):o===2&&Hw(r,e,t,n,i,s):Lo(Gr(r),e,t,n,i,s,1);break}}}function Bw(r){const e=r.prev,t=r,n=r.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Es(i,a,s,c,o,l,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kw(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Pt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,m=rh(d,p,e,t,n),x=rh(_,g,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Es(a,u,c,h,l,f,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Es(a,u,c,h,l,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Es(a,u,c,h,l,f,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Es(a,u,c,h,l,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zw(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!al(i,s)&&E_(i,n,n.next,s)&&Io(i,s)&&Io(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Do(n),Do(n.next),n=r=s),n=n.next}while(n!==r);return Gr(n)}function Hw(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kw(o,a)){let c=T_(o,a);o=Gr(o,o.next),c=Gr(c,c.next),Lo(o,e,t,n,i,s,0),Lo(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Vw(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=A_(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Zw(l));for(i.sort(Gw),s=0;s<i.length;s++)t=Ww(i[s],t);return t}function Gw(r,e){return r.x-e.x}function Ww(r,e){const t=Xw(r,e);if(!t)return e;const n=T_(t,r);return Gr(n,n.next),Gr(t,t.next)}function Xw(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Es(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Io(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&qw(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function qw(r,e){return Pt(r.prev,r,e.prev)<0&&Pt(e.next,r,r.next)<0}function $w(r,e,t,n){let i=r;do i.z===0&&(i.z=rh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Yw(i)}function Yw(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function rh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Zw(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Es(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Kw(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!jw(r,e)&&(Io(r,e)&&Io(e,r)&&Jw(r,e)&&(Pt(r.prev,r,e.prev)||Pt(r,e.prev,e))||al(r,e)&&Pt(r.prev,r,r.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function al(r,e){return r.x===e.x&&r.y===e.y}function E_(r,e,t,n){const i=Xa(Pt(r,e,t)),s=Xa(Pt(r,e,n)),o=Xa(Pt(t,n,r)),a=Xa(Pt(t,n,e));return!!(i!==s&&o!==a||i===0&&Wa(r,t,e)||s===0&&Wa(r,n,e)||o===0&&Wa(t,r,n)||a===0&&Wa(t,e,n))}function Wa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Xa(r){return r>0?1:r<0?-1:0}function jw(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&E_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Io(r,e){return Pt(r.prev,r,r.next)<0?Pt(r,e,r.next)>=0&&Pt(r,r.prev,e)>=0:Pt(r,e,r.prev)<0||Pt(r,r.next,e)<0}function Jw(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function T_(r,e){const t=new sh(r.i,r.x,r.y),n=new sh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qd(r,e,t,n){const i=new sh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Do(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function sh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qw(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class fi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ep(e),tp(n,e);let o=e.length;t.forEach(ep);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,tp(n,t[c]);const a=Fw.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ep(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function tp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class cl extends Je{constructor(e=new Dr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:e1;let v,y=!1,M,A,S,R;m&&(v=m.getSpacedPoints(u),y=!0,f=!1,M=m.computeFrenetFrames(u,!1),A=new T,S=new T,R=new T),f||(g=0,d=0,p=0,_=0);const b=a.extractPoints(l);let w=b.shape;const U=b.holes;if(!fi.isClockWise(w)){w=w.reverse();for(let I=0,me=U.length;I<me;I++){const te=U[I];fi.isClockWise(te)&&(U[I]=te.reverse())}}const W=fi.triangulateShape(w,U),N=w;for(let I=0,me=U.length;I<me;I++){const te=U[I];w=w.concat(te)}function P(I,me,te){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(me,te)}const O=w.length,G=W.length;function oe(I,me,te){let fe,se,Fe;const Se=I.x-me.x,we=I.y-me.y,qe=te.x-I.x,ot=te.y-I.y,wt=Se*Se+we*we,L=Se*ot-we*qe;if(Math.abs(L)>Number.EPSILON){const E=Math.sqrt(wt),V=Math.sqrt(qe*qe+ot*ot),le=me.x-we/E,ae=me.y+Se/E,ue=te.x-ot/V,Ue=te.y+qe/V,de=((ue-le)*ot-(Ue-ae)*qe)/(Se*ot-we*qe);fe=le+Se*de-I.x,se=ae+we*de-I.y;const be=fe*fe+se*se;if(be<=2)return new J(fe,se);Fe=Math.sqrt(be/2)}else{let E=!1;Se>Number.EPSILON?qe>Number.EPSILON&&(E=!0):Se<-Number.EPSILON?qe<-Number.EPSILON&&(E=!0):Math.sign(we)===Math.sign(ot)&&(E=!0),E?(fe=-we,se=Se,Fe=Math.sqrt(wt)):(fe=Se,se=we,Fe=Math.sqrt(wt/2))}return new J(fe/Fe,se/Fe)}const Q=[];for(let I=0,me=N.length,te=me-1,fe=I+1;I<me;I++,te++,fe++)te===me&&(te=0),fe===me&&(fe=0),Q[I]=oe(N[I],N[te],N[fe]);const j=[];let z,xe=Q.concat();for(let I=0,me=U.length;I<me;I++){const te=U[I];z=[];for(let fe=0,se=te.length,Fe=se-1,Se=fe+1;fe<se;fe++,Fe++,Se++)Fe===se&&(Fe=0),Se===se&&(Se=0),z[fe]=oe(te[fe],te[Fe],te[Se]);j.push(z),xe=xe.concat(z)}for(let I=0;I<g;I++){const me=I/g,te=d*Math.cos(me*Math.PI/2),fe=p*Math.sin(me*Math.PI/2)+_;for(let se=0,Fe=N.length;se<Fe;se++){const Se=P(N[se],Q[se],fe);Me(Se.x,Se.y,-te)}for(let se=0,Fe=U.length;se<Fe;se++){const Se=U[se];z=j[se];for(let we=0,qe=Se.length;we<qe;we++){const ot=P(Se[we],z[we],fe);Me(ot.x,ot.y,-te)}}}const K=p+_;for(let I=0;I<O;I++){const me=f?P(w[I],xe[I],K):w[I];y?(S.copy(M.normals[0]).multiplyScalar(me.x),A.copy(M.binormals[0]).multiplyScalar(me.y),R.copy(v[0]).add(S).add(A),Me(R.x,R.y,R.z)):Me(me.x,me.y,0)}for(let I=1;I<=u;I++)for(let me=0;me<O;me++){const te=f?P(w[me],xe[me],K):w[me];y?(S.copy(M.normals[I]).multiplyScalar(te.x),A.copy(M.binormals[I]).multiplyScalar(te.y),R.copy(v[I]).add(S).add(A),Me(R.x,R.y,R.z)):Me(te.x,te.y,h/u*I)}for(let I=g-1;I>=0;I--){const me=I/g,te=d*Math.cos(me*Math.PI/2),fe=p*Math.sin(me*Math.PI/2)+_;for(let se=0,Fe=N.length;se<Fe;se++){const Se=P(N[se],Q[se],fe);Me(Se.x,Se.y,h+te)}for(let se=0,Fe=U.length;se<Fe;se++){const Se=U[se];z=j[se];for(let we=0,qe=Se.length;we<qe;we++){const ot=P(Se[we],z[we],fe);y?Me(ot.x,ot.y+v[u-1].y,v[u-1].x+te):Me(ot.x,ot.y,h+te)}}}re(),Y();function re(){const I=i.length/3;if(f){let me=0,te=O*me;for(let fe=0;fe<G;fe++){const se=W[fe];Ge(se[2]+te,se[1]+te,se[0]+te)}me=u+g*2,te=O*me;for(let fe=0;fe<G;fe++){const se=W[fe];Ge(se[0]+te,se[1]+te,se[2]+te)}}else{for(let me=0;me<G;me++){const te=W[me];Ge(te[2],te[1],te[0])}for(let me=0;me<G;me++){const te=W[me];Ge(te[0]+O*u,te[1]+O*u,te[2]+O*u)}}n.addGroup(I,i.length/3-I,0)}function Y(){const I=i.length/3;let me=0;Pe(N,me),me+=N.length;for(let te=0,fe=U.length;te<fe;te++){const se=U[te];Pe(se,me),me+=se.length}n.addGroup(I,i.length/3-I,1)}function Pe(I,me){let te=I.length;for(;--te>=0;){const fe=te;let se=te-1;se<0&&(se=I.length-1);for(let Fe=0,Se=u+g*2;Fe<Se;Fe++){const we=O*Fe,qe=O*(Fe+1),ot=me+fe+we,wt=me+se+we,L=me+se+qe,E=me+fe+qe;ne(ot,wt,L,E)}}}function Me(I,me,te){c.push(I),c.push(me),c.push(te)}function Ge(I,me,te){ye(I),ye(me),ye(te);const fe=i.length/3,se=x.generateTopUV(n,i,fe-3,fe-2,fe-1);He(se[0]),He(se[1]),He(se[2])}function ne(I,me,te,fe){ye(I),ye(me),ye(fe),ye(me),ye(te),ye(fe);const se=i.length/3,Fe=x.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);He(Fe[0]),He(Fe[1]),He(Fe[3]),He(Fe[1]),He(Fe[2]),He(Fe[3])}function ye(I){i.push(c[I*3+0]),i.push(c[I*3+1]),i.push(c[I*3+2])}function He(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return t1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ac[i.type]().fromJSON(i)),new cl(n,e.options)}}const e1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new J(s,o),new J(a,c),new J(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-h),new J(f,1-p),new J(_,1-m)]:[new J(a,1-c),new J(u,1-h),new J(d,1-p),new J(g,1-m)]}};function t1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ll extends rr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}class Qo extends rr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qo(e.radius,e.detail)}}class ul extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,d=new T,p=new J;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,v=x,y=x+n+1,M=x+n+2,A=x+1;a.push(v,y,A),a.push(y,M,A)}}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hl extends Je{constructor(e=new Dr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(s,3)),this.setAttribute("uv",new Le(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const p=f.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const x=p[g];fi.isClockWise(x)===!0&&(p[g]=x.reverse())}const _=fi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const x=p[g];d=d.concat(x)}for(let g=0,m=d.length;g<m;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],v=x[0]+h,y=x[1]+h,M=x[2]+h;n.push(v,y,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return n1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new hl(n,e.curveSegments)}}function n1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Jr extends Je{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new T,f=new T,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const A=M/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(A+y,1-v),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const v=u[m][x+1],y=u[m][x],M=u[m+1][x],A=u[m+1][x+1];(m!==0||o>0)&&d.push(v,y,A),(m!==n-1||c<Math.PI)&&d.push(y,M,A)}this.setIndex(d),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fl extends rr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fl(e.radius,e.detail)}}class dl extends Je{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new T,h=new T,f=new T;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,x=(i+1)*d+p;o.push(_,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pl extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new T,f=new T,d=new T,p=new T,_=new T,g=new T,m=new T;for(let v=0;v<=n;++v){const y=v/n*s*Math.PI*2;x(y,s,o,e,d),x(y+.01,s,o,e,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let M=0;M<=i;++M){const A=M/i*Math.PI*2,S=-t*Math.cos(A),R=t*Math.sin(A);h.x=d.x+(S*m.x+R*_.x),h.y=d.y+(S*m.y+R*_.y),h.z=d.z+(S*m.z+R*_.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(v/n),u.push(M/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const M=(i+1)*(v-1)+(y-1),A=(i+1)*v+(y-1),S=(i+1)*v+y,R=(i+1)*(v-1)+y;a.push(M,A,R),a.push(A,S,R)}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(u,2));function x(v,y,M,A,S){const R=Math.cos(v),b=Math.sin(v),w=M/y*v,U=Math.cos(w);S.x=A*(2+U)*.5*R,S.y=A*(2+U)*b*.5,S.z=A*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ml extends Je{constructor(e=new nl(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,c=new T,l=new J;let u=new T;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function _(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),x(),m()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],M=o.binormals[v];for(let A=0;A<=i;A++){const S=A/i*Math.PI*2,R=Math.sin(S),b=-Math.cos(S);c.x=b*y.x+R*M.x,c.y=b*y.y+R*M.y,c.z=b*y.z+R*M.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const M=(i+1)*(v-1)+(y-1),A=(i+1)*v+(y-1),S=(i+1)*v+y,R=(i+1)*(v-1)+y;p.push(M,A,R),p.push(A,S,R)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)l.x=v/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ml(new Ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class cf extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new T,s=new T;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let p=f,_=f+d;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),x=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),s.fromBufferAttribute(o,x),np(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),np(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function np(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ip=Object.freeze({__proto__:null,BoxGeometry:Fi,CapsuleGeometry:il,CircleGeometry:rl,ConeGeometry:sl,CylinderGeometry:$s,DodecahedronGeometry:ol,EdgesGeometry:w_,ExtrudeGeometry:cl,IcosahedronGeometry:ll,LatheGeometry:Jo,OctahedronGeometry:Qo,PlaneGeometry:Xs,PolyhedronGeometry:rr,RingGeometry:ul,ShapeGeometry:hl,SphereGeometry:Jr,TetrahedronGeometry:fl,TorusGeometry:dl,TorusKnotGeometry:pl,TubeGeometry:ml,WireframeGeometry:cf});class C_ extends Kt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class lf extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qr extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Qr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class R_ extends Kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class P_ extends Kt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class L_ extends Kt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class I_ extends Kt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class D_ extends Kt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N_ extends mn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Cr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function U_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function O_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function oh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function uf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function i1(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*i;if(!(p<t||p>=n)){h.push(l.times[d]);for(let _=0;_<u;++_)f.push(l.values[d*u+_])}}h.length!==0&&(l.times=Cr(h,l.times.constructor),l.values=Cr(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function r1(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let _;if(s<=a.times[0]){const m=u,x=h-u;_=a.values.slice(m,x)}else if(s>=a.times[p]){const m=p*h+u,x=m+h-u;_=a.values.slice(m,x)}else{const m=a.createInterpolant(),x=u,v=h-u;m.evaluate(s),_=m.resultBuffer.slice(x,v)}c==="quaternion"&&new nn().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const x=m*d+f;if(c==="quaternion")nn.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const v=d-f*2;for(let y=0;y<v;++y)l.values[x+y]-=_[y]}}}return r.blendMode=Bh,r}const s1={convertArray:Cr,isTypedArray:U_,getKeyframeOrder:O_,sortedArray:oh,flattenJSON:uf,subclip:i1,makeClipAdditive:r1};class Ys{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class F_ extends Ys{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ar,endingEnd:Ar}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Er:s=e,a=2*t-n;break;case wo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Er:o=e,c=2*n-t;break;case wo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*_+.5*p,y=d*g-d*_;for(let M=0;M!==a;++M)s[M]=m*o[u+M]+x*o[l+M]+v*o[c+M]+y*o[h+M];return s}}class hf extends Ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class B_ extends Ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new B_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new F_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&U_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Hr;class es extends ii{}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Us;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class ff extends ii{}ff.prototype.ValueTypeName="color";class Wr extends ii{}Wr.prototype.ValueTypeName="number";class k_ extends Ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)nn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class nr extends ii{InterpolantFactoryMethodLinear(e){return new k_(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.DefaultInterpolation=Hr;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends ii{}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Us;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends ii{}Xr.prototype.ValueTypeName="vector";class ks{constructor(e,t=-1,n,i=zc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(a1(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=O_(c);c=oh(c,1,u),l=oh(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Wr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,_){if(d.length!==0){const g=[],m=[];uf(d,g,m,p),g.length!==0&&_.push(new h(f,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const g=[],m=[];for(let x=0;x!==f[p].morphTargets.length;++x){const v=f[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Wr(".morphTargetInfluence["+_+"]",g,m))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Xr,d+".position",f,"pos",i),n(nr,d+".quaternion",f,"rot",i),n(Xr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function o1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return Xr;case"color":return ff;case"quaternion":return nr;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function a1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=o1(r.type);if(r.times===void 0){const t=[],n=[];uf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const qr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class df{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const z_=new df;class wn{constructor(e){this.manager=e!==void 0?e:z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wn.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class c1 extends Error{constructor(e,t){super(e),this.response=t}}class Jn extends wn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=wi[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){h.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let A=0,S=u.length;A<S;A++){const R=u[A];R.onProgress&&R.onProgress(M)}m.enqueue(y),x()}})}}});return new Response(g)}else throw new c1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{qr.add(e,l);const u=wi[e];delete wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=wi[e];if(u===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class l1 extends wn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Jn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=ks.parse(e[n]);t.push(i)}return t}}class u1 extends wn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new el,c=new Jn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const d=s.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=Rt),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Rt),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class No extends wn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ro("img");function c(){u(),qr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class h1 extends wn{constructor(e){super(e)}load(e,t,n,i){const s=new Yo;s.colorSpace=Tt;const o=new No(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class f1 extends wn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ir,a=new Jn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:cn,o.wrapT=l.wrapT!==void 0?l.wrapT:cn,o.magFilter=l.magFilter!==void 0?l.magFilter:Rt,o.minFilter=l.minFilter!==void 0?l.minFilter:Rt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=mi),l.mipmapCount===1&&(o.minFilter=Rt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class H_ extends wn{constructor(e){super(e)}load(e,t,n,i){const s=new It,o=new No(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class sr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class V_ extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ou=new ze,rp=new T,sp=new T;class pf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d1 extends pf{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mf extends sr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new d1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const op=new ze,oo=new T,au=new T;class p1 extends pf{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(oo),au.copy(n.position),au.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(au),n.updateMatrixWorld(),i.makeTranslation(-oo.x,-oo.y,-oo.z),op.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(op)}}class gf extends sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new p1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class m1 extends pf{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _f extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new m1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class G_ extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class W_ extends sr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class X_{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class q_ extends sr{constructor(e=new X_,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class gl extends wn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Jn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=gl.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new _e().setHex(o.value);break;case"v2":i.uniforms[s].value=new J().fromArray(o.value);break;case"v3":i.uniforms[s].value=new T().fromArray(o.value);break;case"v4":i.uniforms[s].value=new dt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new je().fromArray(o.value);break;case"m4":i.uniforms[s].value=new ze().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:C_,SpriteMaterial:Jh,RawShaderMaterial:lf,ShaderMaterial:zn,PointsMaterial:Qc,MeshPhysicalMaterial:ni,MeshStandardMaterial:Qr,MeshPhongMaterial:R_,MeshToonMaterial:P_,MeshNormalMaterial:L_,MeshLambertMaterial:I_,MeshDepthMaterial:Yc,MeshDistanceMaterial:Zh,MeshBasicMaterial:Mn,MeshMatcapMaterial:D_,LineDashedMaterial:N_,LineBasicMaterial:mn,Material:Kt};return new t[e]}}class Qi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vf extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $_ extends wn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Jn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const g=d.interleavedBuffers[p],m=s(d,g.buffer),x=ws(g.type,m),v=new Ko(x,g.stride);return v.uuid=g.uuid,t[p]=v,v}function s(d,p){if(n[p]!==void 0)return n[p];const g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new vf:new Je,a=e.data.index;if(a!==void 0){const d=ws(a.type,a.array);o.setIndex(new mt(d,1))}const c=e.data.attributes;for(const d in c){const p=c[d];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new Pn(g,p.itemSize,p.offset,p.normalized)}else{const g=ws(p.type,p.array),m=p.isInstancedBufferAttribute?Vr:mt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const p=l[d],_=[];for(let g=0,m=p.length;g<m;g++){const x=p[g];let v;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);v=new Pn(y,x.itemSize,x.offset,x.normalized)}else{const y=ws(x.type,x.array);v=new mt(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}o.morphAttributes[d]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,p=h.length;d!==p;++d){const _=h[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new T;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new Zt(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class g1 extends wn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Qi.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Jn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Qi.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Jn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Dr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new jo().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new $_;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in ip?a=ip[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new gl;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=ks.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:ws(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new df(t);s=new No(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new Ir(m.data,m.width,m.height)))}i[h.uuid]=new Tr(d)}else{const d=a(h.url);i[h.uuid]=new Tr(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:ws(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new No(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=await s(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Ir(p.data,p.width,p.height)))}n[c.uuid]=new Tr(u)}else{const u=await s(c.url);n[c.uuid]=new Tr(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new Yo,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Ir:u=new It,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,_1)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],ap),u.wrapT=n(a.wrap[1],ap)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,cp)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,cp)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":o=new jh,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new _e(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Kc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Zc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new $t(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new jr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new G_(e.color,e.intensity);break;case"DirectionalLight":o=new _f(e.color,e.intensity);break;case"PointLight":o=new gf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new W_(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new mf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new V_(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new q_().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new Qh(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new Et(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;o=new Jc(u,h,f),o.instanceMatrix=new Vr(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new Vr(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=c(e.material),o=new v_(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const g=new Yt;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new Zt;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":o=new __;break;case"Line":o=new Ni(a(e.geometry),c(e.material));break;case"LineLoop":o=new ef(a(e.geometry),c(e.material));break;case"LineSegments":o=new ei(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new tf(a(e.geometry),c(e.material));break;case"Sprite":o=new g_(c(e.material));break;case"Group":o=new Wn;break;case"Bone":o=new jc;break;default:o=new ct}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const _1={UVMapping:Fc,CubeReflectionMapping:Di,CubeRefractionMapping:er,EquirectangularReflectionMapping:bo,EquirectangularRefractionMapping:Mo,CubeUVReflectionMapping:Ws},ap={RepeatWrapping:tr,ClampToEdgeWrapping:cn,MirroredRepeatWrapping:Ds},cp={NearestFilter:Ft,NearestMipmapNearestFilter:So,NearestMipmapLinearFilter:Rs,LinearFilter:Rt,LinearMipmapNearestFilter:Bc,LinearMipmapLinearFilter:mi};class Y_ extends wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){qr.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let qa;class xf{static getContext(){return qa===void 0&&(qa=new(window.AudioContext||window.webkitAudioContext)),qa}static setContext(e){qa=e}}class v1 extends wn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Jn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);xf.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const lp=new ze,up=new ze,dr=new ze;class x1{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new $t,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new $t,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,dr.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Lr*t.fov*.5)/t.zoom;let a,c;up.elements[12]=-i,lp.elements[12]=i,a=-o*t.aspect+s,c=o*t.aspect+s,dr.elements[0]=2*t.near/(c-a),dr.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(dr),a=-o*t.aspect-s,c=o*t.aspect-s,dr.elements[0]=2*t.near/(c-a),dr.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(dr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(up),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(lp)}}class Z_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hp(){return(typeof performance>"u"?Date:performance).now()}const pr=new T,fp=new nn,y1=new T,mr=new T;class b1 extends ct{constructor(){super(),this.type="AudioListener",this.context=xf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Z_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(pr,fp,y1),mr.set(0,0,-1).applyQuaternion(fp),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(pr.x,i),t.positionY.linearRampToValueAtTime(pr.y,i),t.positionZ.linearRampToValueAtTime(pr.z,i),t.forwardX.linearRampToValueAtTime(mr.x,i),t.forwardY.linearRampToValueAtTime(mr.y,i),t.forwardZ.linearRampToValueAtTime(mr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(pr.x,pr.y,pr.z),t.setOrientation(mr.x,mr.y,mr.z,n.x,n.y,n.z)}}class K_ extends ct{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const gr=new T,dp=new nn,M1=new T,_r=new T;class S1 extends K_{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(gr,dp,M1),_r.set(0,0,1).applyQuaternion(dp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(gr.x,n),t.positionY.linearRampToValueAtTime(gr.y,n),t.positionZ.linearRampToValueAtTime(gr.z,n),t.orientationX.linearRampToValueAtTime(_r.x,n),t.orientationY.linearRampToValueAtTime(_r.y,n),t.orientationZ.linearRampToValueAtTime(_r.z,n)}else t.setPosition(gr.x,gr.y,gr.z),t.setOrientation(_r.x,_r.y,_r.z)}}class w1{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class j_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;nn.multiplyQuaternionsFlat(e,o,e,t,e,n),nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const yf="\\[\\]\\.:\\/",A1=new RegExp("["+yf+"]","g"),bf="[^"+yf+"]",E1="[^"+yf.replace("\\.","")+"]",T1=/((?:WC+[\/:])*)/.source.replace("WC",bf),C1=/(WCOD+)?/.source.replace("WCOD",E1),R1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bf),P1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bf),L1=new RegExp("^"+T1+C1+R1+P1+"$"),I1=["material","materials","bones","map"];class D1{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A1,"")}static parseTrackName(e){const t=L1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);I1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=D1;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class N1{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Bn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let p=t[d];if(p===void 0){p=c++,t[d]=p,e.push(f);for(let _=0,g=o;_!==g;++_)s[_].push(new lt(f,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,g=e[_];t[g.uuid]=p,e[p]=g,t[d]=_,e[_]=f;for(let m=0,x=o;m!==x;++m){const v=s[m],y=v[_];let M=v[p];v[p]=y,M===void 0&&(M=new lt(f,n[m],i[m])),v[_]=M}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let d=0,p=i;d!==p;++d){const _=n[d],g=_[h],m=_[u];_[u]=g,_[h]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],p=--o,_=e[p];t[d.uuid]=h,e[h]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let g=0,m=i;g!==m;++g){const x=n[g],v=x[f],y=x[p];x[h]=v,x[f]=y,x.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[h]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let f=u,d=c.length;f!==d;++f){const p=c[f];h[f]=new lt(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class J_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Ar,endingEnd:Ar};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=kg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Bh:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case zc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===zg;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Bg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Er,i.endingEnd=Er):(e?i.endingStart=this.zeroSlopeAtStart?Er:Ar:i.endingStart=wo,t?i.endingEnd=this.zeroSlopeAtEnd?Er:Ar:i.endingEnd=wo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const U1=new Float32Array(1);class O1 extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new j_(lt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hf(new Float32Array(2),new Float32Array(2),1,U1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?ks.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=zc),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new J_(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ks.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Mf{constructor(e){this.value=e}clone(){return new Mf(this.value.clone===void 0?this.value:this.value.clone())}}let F1=0;class B1 extends gi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:F1++}),this.name="",this.usage=Co,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class Ec extends Ko{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class k1{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class z1{constructor(e,t,n=0,i=1/0){this.ray=new Kr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ah(e,this,n,t),n.sort(pp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ah(e[i],this,n,t);return n.sort(pp),n}}function pp(r,e){return r.distance-e.distance}function ah(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ah(i[s],e,t,!0)}}class ch{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H1{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const mp=new J;class V1{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gp=new T,$a=new T;class Q_{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gp.subVectors(e,this.start),$a.subVectors(this.end,this.start);const n=$a.dot($a);let s=$a.dot(gp)/n;return t&&(s=Bt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _p=new T;class G1 extends ct{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Je,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Le(i,3));const s=new mn({fog:!1,toneMapped:!1});this.cone=new ei(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_p.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_p),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Wi=new T,Ya=new ze,cu=new ze;class W1 extends ei{constructor(e){const t=e0(e),n=new Je,i=[],s=[],o=new _e(0,0,1),a=new _e(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Le(i,3)),n.setAttribute("color",new Le(s,3));const c=new mn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");cu.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ya.multiplyMatrices(cu,a.matrixWorld),Wi.setFromMatrixPosition(Ya),i.setXYZ(o,Wi.x,Wi.y,Wi.z),Ya.multiplyMatrices(cu,a.parent.matrixWorld),Wi.setFromMatrixPosition(Ya),i.setXYZ(o+1,Wi.x,Wi.y,Wi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function e0(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,e0(r.children[t]));return e}class X1 extends Et{constructor(e,t,n){const i=new Jr(t,4,2),s=new Mn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const q1=new T,vp=new _e,xp=new _e;class $1 extends ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Qo(t);i.rotateY(Math.PI*.5),this.material=new Mn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new mt(o,3)),this.add(new Et(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");vp.copy(this.light.color),xp.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?vp:xp;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(q1.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Y1 extends ei{constructor(e=10,t=10,n=4473924,i=8947848){n=new _e(n),i=new _e(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=f===s?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new Je;u.setAttribute("position",new Le(c,3)),u.setAttribute("color",new Le(l,3));const h=new mn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Z1 extends ei{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new _e(s),o=new _e(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const _=h&1?s:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?s:o,d=e-e/n*h;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;a.push(g,0,m),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,a.push(g,0,m),c.push(f.r,f.g,f.b)}}const l=new Je;l.setAttribute("position",new Le(a,3)),l.setAttribute("color",new Le(c,3));const u=new mn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const yp=new T,Za=new T,bp=new T;class K1 extends ct{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Je;i.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new mn({fog:!1,toneMapped:!1});this.lightPlane=new Ni(i,s),this.add(this.lightPlane),i=new Je,i.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new Ni(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),yp.setFromMatrixPosition(this.light.matrixWorld),Za.setFromMatrixPosition(this.light.target.matrixWorld),bp.subVectors(Za,yp),this.lightPlane.lookAt(Za),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Za),this.targetLine.scale.z=bp.length()}}const Ka=new T,Ut=new qc;class j1 extends ei{constructor(e){const t=new Je,n=new mn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Le(i,3)),t.setAttribute("color",new Le(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new _e(16755200),u=new _e(16711680),h=new _e(43775),f=new _e(16777215),d=new _e(3355443);this.setColors(l,u,h,f,d)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Ut.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Xt("c",t,e,Ut,0,0,-1),Xt("t",t,e,Ut,0,0,1),Xt("n1",t,e,Ut,-n,-i,-1),Xt("n2",t,e,Ut,n,-i,-1),Xt("n3",t,e,Ut,-n,i,-1),Xt("n4",t,e,Ut,n,i,-1),Xt("f1",t,e,Ut,-n,-i,1),Xt("f2",t,e,Ut,n,-i,1),Xt("f3",t,e,Ut,-n,i,1),Xt("f4",t,e,Ut,n,i,1),Xt("u1",t,e,Ut,n*.7,i*1.1,-1),Xt("u2",t,e,Ut,-n*.7,i*1.1,-1),Xt("u3",t,e,Ut,0,i*2,-1),Xt("cf1",t,e,Ut,-n,0,1),Xt("cf2",t,e,Ut,n,0,1),Xt("cf3",t,e,Ut,0,-i,1),Xt("cf4",t,e,Ut,0,i,1),Xt("cn1",t,e,Ut,-n,0,-1),Xt("cn2",t,e,Ut,n,0,-1),Xt("cn3",t,e,Ut,0,-i,-1),Xt("cn4",t,e,Ut,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Xt(r,e,t,n,i,s,o){Ka.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Ka.x,Ka.y,Ka.z)}}const ja=new Yt;class J1 extends ei{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Je;s.setIndex(new mt(n,1)),s.setAttribute("position",new mt(i,3)),super(s,new mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ja.setFromObject(this.object),ja.isEmpty())return;const t=ja.min,n=ja.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q1 extends ei{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Je;s.setIndex(new mt(n,1)),s.setAttribute("position",new Le(i,3)),super(s,new mn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class eA extends Ni{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Je;o.setAttribute("position",new Le(s,3)),o.computeBoundingSphere(),super(o,new mn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Je;c.setAttribute("position",new Le(a,3)),c.computeBoundingSphere(),this.add(new Et(c,new Mn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Mp=new T;let Ja,lu;class tA extends ct{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Ja===void 0&&(Ja=new Je,Ja.setAttribute("position",new Le([0,0,0,0,1,0],3)),lu=new $s(0,.5,1,5,1),lu.translate(0,-.5,0)),this.position.copy(t),this.line=new Ni(Ja,new mn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Et(lu,new Mn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Mp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Mp,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class nA extends ei{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Je;i.setAttribute("position",new Le(t,3)),i.setAttribute("color",new Le(n,3));const s=new mn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new _e,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class iA{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Po,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let v=0,y=m.length;v<y;v++){const M=m[v],A=new Dr;A.curves=M.curves,x.push(A)}return x}function n(m,x){const v=x.length;let y=!1;for(let M=v-1,A=0;A<v;M=A++){let S=x[M],R=x[A],b=R.x-S.x,w=R.y-S.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(S=x[A],b=-b,R=x[M],w=-w),m.y<S.y||m.y>R.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{const U=w*(m.x-S.x)-b*(m.y-S.y);if(U===0)return!0;if(U<0)continue;y=!y}}else{if(m.y!==S.y)continue;if(R.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=R.x)return!0}}return y}const i=fi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Dr,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let m=0,x=s.length;m<x;m++)a=s[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[p]&&p++,f[p]={s:new Dr,p:_},f[p].s.curves=a.curves,u&&p++,d[p]=[]):d[p].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let m=!1,x=0;for(let v=0,y=f.length;v<y;v++)h[v]=[];for(let v=0,y=f.length;v<y;v++){const M=d[v];for(let A=0;A<M.length;A++){const S=M[A];let R=!0;for(let b=0;b<f.length;b++)n(S.p,f[b].p)&&(v!==b&&x++,R?(R=!1,h[b].push(S)):m=!0);R&&h[v].push(S)}}x>0&&m===!1&&(d=h)}let g;for(let m=0,x=f.length;m<x;m++){c=f[m].s,l.push(c),g=d[m];for(let v=0,y=g.length;v<y;v++)c.holes.push(g[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);const rA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ph,AddEquation:Zi,AddOperation:wg,AdditiveAnimationBlendMode:Bh,AdditiveBlending:bu,AlphaFormat:Ig,AlwaysCompare:jg,AlwaysDepth:_g,AlwaysStencilFunc:Ju,AmbientLight:G_,AnimationAction:J_,AnimationClip:ks,AnimationLoader:l1,AnimationMixer:O1,AnimationObjectGroup:N1,AnimationUtils:s1,ArcCurve:x_,ArrayCamera:d_,ArrowHelper:tA,AttachedBindMode:Eu,Audio:K_,AudioAnalyser:w1,AudioContext:xf,AudioListener:b1,AudioLoader:v1,AxesHelper:nA,BackSide:Sn,BasicDepthPacking:Vg,BasicShadowMap:Mv,BatchedMesh:v_,Bone:jc,BooleanKeyframeTrack:es,Box2:V1,Box3:Yt,Box3Helper:Q1,BoxGeometry:Fi,BoxHelper:J1,BufferAttribute:mt,BufferGeometry:Je,BufferGeometryLoader:$_,ByteType:Pg,Cache:qr,Camera:qc,CameraHelper:j1,CanvasTexture:Rw,CapsuleGeometry:il,CatmullRomCurve3:y_,CineonToneMapping:Tg,CircleGeometry:rl,ClampToEdgeWrapping:cn,Clock:Z_,Color:_e,ColorKeyframeTrack:ff,ColorManagement:pt,CompressedArrayTexture:Tw,CompressedCubeTexture:Cw,CompressedTexture:el,CompressedTextureLoader:u1,ConeGeometry:sl,ConstantAlphaFactor:pg,ConstantColorFactor:fg,CubeCamera:r_,CubeReflectionMapping:Di,CubeRefractionMapping:er,CubeTexture:Yo,CubeTextureLoader:h1,CubeUVReflectionMapping:Ws,CubicBezierCurve:rf,CubicBezierCurve3:b_,CubicInterpolant:F_,CullFaceBack:yu,CullFaceFront:Qm,CullFaceFrontBack:bv,CullFaceNone:Jm,Curve:ti,CurvePath:S_,CustomBlending:eg,CustomToneMapping:Cg,CylinderGeometry:$s,Cylindrical:H1,Data3DTexture:Wh,DataArrayTexture:Gc,DataTexture:Ir,DataTextureLoader:f1,DataUtils:Tx,DecrementStencilOp:Lv,DecrementWrapStencilOp:Dv,DefaultLoadingManager:z_,DepthFormat:ji,DepthStencilFormat:zr,DepthTexture:Yh,DetachedBindMode:Rg,DirectionalLight:_f,DirectionalLightHelper:K1,DiscreteInterpolant:B_,DisplayP3ColorSpace:Hc,DodecahedronGeometry:ol,DoubleSide:On,DstAlphaFactor:ag,DstColorFactor:lg,DynamicCopyUsage:$v,DynamicDrawUsage:Jg,DynamicReadUsage:Wv,EdgesGeometry:w_,EllipseCurve:tl,EqualCompare:$g,EqualDepth:xg,EqualStencilFunc:Fv,EquirectangularReflectionMapping:bo,EquirectangularRefractionMapping:Mo,Euler:$o,EventDispatcher:gi,ExtrudeGeometry:cl,FileLoader:Jn,Float16BufferAttribute:Dx,Float32BufferAttribute:Le,Float64BufferAttribute:Nx,FloatType:Kn,Fog:Kc,FogExp2:Zc,FramebufferTexture:Ew,FrontSide:pi,Frustum:Zo,GLBufferAttribute:k1,GLSL1:Zv,GLSL3:Qu,GreaterCompare:Yg,GreaterDepth:bg,GreaterEqualCompare:Kg,GreaterEqualDepth:yg,GreaterEqualStencilFunc:Hv,GreaterStencilFunc:kv,GridHelper:Y1,Group:Wn,HalfFloatType:Ns,HemisphereLight:V_,HemisphereLightHelper:$1,IcosahedronGeometry:ll,ImageBitmapLoader:Y_,ImageLoader:No,ImageUtils:Gh,IncrementStencilOp:Pv,IncrementWrapStencilOp:Iv,InstancedBufferAttribute:Vr,InstancedBufferGeometry:vf,InstancedInterleavedBuffer:Ec,InstancedMesh:Jc,Int16BufferAttribute:Lx,Int32BufferAttribute:Ix,Int8BufferAttribute:Cx,IntType:Lh,InterleavedBuffer:Ko,InterleavedBufferAttribute:Pn,Interpolant:Ys,InterpolateDiscrete:Us,InterpolateLinear:Hr,InterpolateSmooth:pc,InvertStencilOp:Nv,KeepStencilOp:Mr,KeyframeTrack:ii,LOD:__,LatheGeometry:Jo,Layers:Wc,LessCompare:qg,LessDepth:vg,LessEqualCompare:Hh,LessEqualDepth:yo,LessEqualStencilFunc:Bv,LessStencilFunc:Ov,Light:sr,LightProbe:q_,Line:Ni,Line3:Q_,LineBasicMaterial:mn,LineCurve:sf,LineCurve3:M_,LineDashedMaterial:N_,LineLoop:ef,LineSegments:ei,LinearDisplayP3ColorSpace:qo,LinearEncoding:zh,LinearFilter:Rt,LinearInterpolant:hf,LinearMipMapLinearFilter:Tv,LinearMipMapNearestFilter:Ev,LinearMipmapLinearFilter:mi,LinearMipmapNearestFilter:Bc,LinearSRGBColorSpace:rn,LinearToneMapping:Ag,LinearTransfer:Ao,Loader:wn,LoaderUtils:Qi,LoadingManager:df,LoopOnce:Bg,LoopPingPong:zg,LoopRepeat:kg,LuminanceAlphaFormat:Ng,LuminanceFormat:Dg,MOUSE:yr,Material:Kt,MaterialLoader:gl,MathUtils:Vc,Matrix3:je,Matrix4:ze,MaxEquation:Au,Mesh:Et,MeshBasicMaterial:Mn,MeshDepthMaterial:Yc,MeshDistanceMaterial:Zh,MeshLambertMaterial:I_,MeshMatcapMaterial:D_,MeshNormalMaterial:L_,MeshPhongMaterial:R_,MeshPhysicalMaterial:ni,MeshStandardMaterial:Qr,MeshToonMaterial:P_,MinEquation:wu,MirroredRepeatWrapping:Ds,MixOperation:Sg,MultiplyBlending:Su,MultiplyOperation:Xo,NearestFilter:Ft,NearestMipMapLinearFilter:Av,NearestMipMapNearestFilter:wv,NearestMipmapLinearFilter:Rs,NearestMipmapNearestFilter:So,NeverCompare:Xg,NeverDepth:gg,NeverStencilFunc:Uv,NoBlending:Ci,NoColorSpace:Fn,NoToneMapping:Ri,NormalAnimationBlendMode:zc,NormalBlending:Pr,NotEqualCompare:Zg,NotEqualDepth:Mg,NotEqualStencilFunc:zv,NumberKeyframeTrack:Wr,Object3D:ct,ObjectLoader:g1,ObjectSpaceNormalMap:Wg,OctahedronGeometry:Qo,OneFactor:rg,OneMinusConstantAlphaFactor:mg,OneMinusConstantColorFactor:dg,OneMinusDstAlphaFactor:cg,OneMinusDstColorFactor:ug,OneMinusSrcAlphaFactor:bc,OneMinusSrcColorFactor:og,OrthographicCamera:jr,P3Primaries:To,PCFShadowMap:Rh,PCFSoftShadowMap:Oc,PMREMGenerator:th,Path:Po,PerspectiveCamera:$t,Plane:li,PlaneGeometry:Xs,PlaneHelper:eA,PointLight:gf,PointLightHelper:X1,Points:tf,PointsMaterial:Qc,PolarGridHelper:Z1,PolyhedronGeometry:rr,PositionalAudio:S1,PropertyBinding:lt,PropertyMixer:j_,QuadraticBezierCurve:of,QuadraticBezierCurve3:nl,Quaternion:nn,QuaternionKeyframeTrack:nr,QuaternionLinearInterpolant:k_,RED_GREEN_RGTC2_Format:Ku,RED_RGTC1_Format:Fg,REVISION:Gs,RGBADepthPacking:Gg,RGBAFormat:Cn,RGBAIntegerFormat:Oh,RGBA_ASTC_10x10_Format:Wu,RGBA_ASTC_10x5_Format:Hu,RGBA_ASTC_10x6_Format:Vu,RGBA_ASTC_10x8_Format:Gu,RGBA_ASTC_12x10_Format:Xu,RGBA_ASTC_12x12_Format:qu,RGBA_ASTC_4x4_Format:Du,RGBA_ASTC_5x4_Format:Nu,RGBA_ASTC_5x5_Format:Uu,RGBA_ASTC_6x5_Format:Ou,RGBA_ASTC_6x6_Format:Fu,RGBA_ASTC_8x5_Format:Bu,RGBA_ASTC_8x6_Format:ku,RGBA_ASTC_8x8_Format:zu,RGBA_BPTC_Format:dc,RGBA_ETC2_EAC_Format:Iu,RGBA_PVRTC_2BPPV1_Format:Pu,RGBA_PVRTC_4BPPV1_Format:Ru,RGBA_S3TC_DXT1_Format:uc,RGBA_S3TC_DXT3_Format:hc,RGBA_S3TC_DXT5_Format:fc,RGB_BPTC_SIGNED_Format:$u,RGB_BPTC_UNSIGNED_Format:Yu,RGB_ETC1_Format:Fh,RGB_ETC2_Format:Lu,RGB_PVRTC_2BPPV1_Format:Cu,RGB_PVRTC_4BPPV1_Format:Tu,RGB_S3TC_DXT1_Format:lc,RGFormat:Og,RGIntegerFormat:Uh,RawShaderMaterial:lf,Ray:Kr,Raycaster:z1,Rec709Primaries:Eo,RectAreaLight:W_,RedFormat:Ug,RedIntegerFormat:Nh,ReinhardToneMapping:Eg,RenderTarget:t_,RepeatWrapping:tr,ReplaceStencilOp:Rv,ReverseSubtractEquation:ng,RingGeometry:ul,SIGNED_RED_GREEN_RGTC2_Format:ju,SIGNED_RED_RGTC1_Format:Zu,SRGBColorSpace:Tt,SRGBTransfer:xt,Scene:jh,ShaderChunk:Xe,ShaderLib:bn,ShaderMaterial:zn,ShadowMaterial:C_,Shape:Dr,ShapeGeometry:hl,ShapePath:iA,ShapeUtils:fi,ShortType:Lg,Skeleton:jo,SkeletonHelper:W1,SkinnedMesh:Qh,Source:Tr,Sphere:Zt,SphereGeometry:Jr,Spherical:ch,SphericalHarmonics3:X_,SplineCurve:af,SpotLight:mf,SpotLightHelper:G1,Sprite:g_,SpriteMaterial:Jh,SrcAlphaFactor:yc,SrcAlphaSaturateFactor:hg,SrcColorFactor:sg,StaticCopyUsage:qv,StaticDrawUsage:Co,StaticReadUsage:Gv,StereoCamera:x1,StreamCopyUsage:Yv,StreamDrawUsage:Vv,StreamReadUsage:Xv,StringKeyframeTrack:ts,SubtractEquation:tg,SubtractiveBlending:Mu,TOUCH:br,TangentSpaceNormalMap:ir,TetrahedronGeometry:fl,Texture:It,TextureLoader:H_,TorusGeometry:dl,TorusKnotGeometry:pl,Triangle:Tn,TriangleFanDrawMode:Mc,TriangleStripDrawMode:kh,TrianglesDrawMode:Hg,TubeGeometry:ml,TwoPassDoubleSide:Sv,UVMapping:Fc,Uint16BufferAttribute:Xh,Uint32BufferAttribute:qh,Uint8BufferAttribute:Rx,Uint8ClampedBufferAttribute:Px,Uniform:Mf,UniformsGroup:B1,UniformsLib:ge,UniformsUtils:Xc,UnsignedByteType:Pi,UnsignedInt248Type:Ki,UnsignedIntType:Ti,UnsignedShort4444Type:Ih,UnsignedShort5551Type:Dh,UnsignedShortType:kc,VSMShadowMap:ci,Vector2:J,Vector3:T,Vector4:dt,VectorKeyframeTrack:Xr,VideoTexture:Aw,WebGL1Renderer:p_,WebGL3DRenderTarget:mx,WebGLArrayRenderTarget:px,WebGLCoordinateSystem:jn,WebGLCubeRenderTarget:s_,WebGLMultipleRenderTargets:gx,WebGLRenderTarget:kn,WebGLRenderer:Kh,WebGLUtils:f_,WebGPUCoordinateSystem:Os,WireframeGeometry:cf,WrapAroundEnding:wo,ZeroCurvatureEnding:Ar,ZeroFactor:ig,ZeroSlopeEnding:Er,ZeroStencilOp:Cv,_SRGBAFormat:Sc,createCanvasElement:e_,sRGBEncoding:Ji},Symbol.toStringTag,{value:"Module"}));function sA(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class qi{constructor(){Nt(this,"allVertices",{});Nt(this,"isolatedVertices",{});Nt(this,"connectedVertices",{});Nt(this,"sortedConnectedValues",[]);Nt(this,"needsSort",!1);Nt(this,"emitter",sA());Nt(this,"emit",this.emitter.emit.bind(this.emitter));Nt(this,"on",this.emitter.on.bind(this.emitter));Nt(this,"off",this.emitter.off.bind(this.emitter));Nt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class oA{constructor(e,t,n){Nt(this,"key");Nt(this,"stage");Nt(this,"callback");Nt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class aA extends qi{constructor(t,n,i){super();Nt(this,"key");Nt(this,"scheduler");Nt(this,"callback",(t,n)=>n());Nt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const s=new oA(this,t,n);return this.add(t,s,i),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(s=>{const o=performance.now();s.run(i??t);const a=performance.now()-o;n[s.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class cA extends qi{constructor(t){super();Nt(this,"lastTime",performance.now());Nt(this,"clampDeltaTo",.1);Nt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new aA(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},s=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-s,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const yn=(r,e)=>{const t=Th(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});In(()=>{i(),n&&n()})},_t=r=>{const e=pn(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},_l=new $t(75,0,.1,1e3);_l.position.z=5;_l.lookAt(0,0,0);const lA=()=>_l,uA=r=>{yn(r.size,e=>{if(r.camera.current===_l){const t=r.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),r.invalidate()}})},hA=Symbol("use-legacy-frame-compatibility-context"),fA=()=>{const r={useFrameOrders:[],useRenderOrders:[]};return hi(hA,r),r},dA=r=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await fv(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((u,h)=>{var f;(u===0||l)&&((f=h==null?void 0:h.dispose)==null||f.call(h),e.disposableObjects.delete(h))}),e.shouldDispose=!1)},collectDisposableObjects:(l,u)=>{const h=u??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&h.push(l),Object.entries(l).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,h)})),h},addDisposableObjects:l=>{l.forEach(u=>{const h=e.disposableObjects.get(u);h?e.disposableObjects.set(u,h+1):e.disposableObjects.set(u,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(u=>{const h=e.disposableObjects.get(u);h&&h>0&&e.disposableObjects.set(u,h-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=fA(),n=new cA,i=n.createStage(Symbol("threlte-main-stage")),s=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(l,u){a.shouldRender()&&u()}}),o=s.createTask(Symbol("threlte-auto-render-task"),l=>{t.length>0||a.renderer.render(a.scene,a.camera.current)}),a={size:Th([r.userSize,r.parentSize],([l,u])=>l||u),camera:_t(lA()),scene:new jh,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:_t(r.colorSpace),toneMapping:_t(r.toneMapping),dpr:_t(r.dpr),useLegacyLights:_t(r.useLegacyLights),shadows:_t(r.shadows),colorManagementEnabled:_t(r.colorManagementEnabled),renderMode:_t(r.renderMode),autoRender:_t(r.autoRender),scheduler:n,mainStage:i,renderStage:s,autoRenderTask:o,shouldRender:()=>a.renderMode.current==="always"||a.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||a.renderMode.current==="manual"&&e.advance};uA(a);const c=_t({});return hi("threlte",a),hi("threlte-internal-context",e),hi("threlte-user-context",c),a},Sf=typeof window<"u",pA=()=>{const r=_t({width:0,height:0});if(!Sf)return{parentSize:r,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=a=>{i.disconnect(),s.disconnect(),i.observe(a),s.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===r.current.width&&l===r.current.height||r.set({width:c,height:l})}),s=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),o=a=>{t=a;const c=t.parentElement;c&&(r.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return In(()=>{i.disconnect(),s.disconnect()}),{parentSize:r,parentSizeAction:o}};function t0(r,e){const t=pn(r);let n=r;const i=t.subscribe(a=>n=a);return In(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const An=()=>{const r=Ii("threlte");if(r===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return r},wf=Symbol("threlte-hierarchical-parent-context"),Af=()=>Ii(wf),mA=r=>hi(wf,r),gA=r=>{const e=t0(r);return hi(wf,e),e};function _A(r){let e;const t=r[7].default,n=yt(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&64)&&bt(n,t,i,i[6],e?St(t,i[6],s,null):Mt(i[6]),null)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}const vA=()=>({onChildMount:Ii("threlte-hierarchical-object-on-mount"),onChildDestroy:Ii("threlte-hierarchical-object-on-destroy")});function xA(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{onChildMount:a=void 0}=e;const c=m=>{a==null||a(m)};let{onChildDestroy:l=void 0}=e;const u=m=>{l==null||l(m)},{invalidate:h}=An(),f=Af();ut(r,f,m=>t(5,n=m));let{parent:d=n}=e;const p=vA();o&&((g=p.onChildMount)==null||g.call(p,o),h());const _=t0(o,(m,x)=>{var v,y;x&&((v=p.onChildDestroy)==null||v.call(p,x),h()),m&&((y=p.onChildMount)==null||y.call(p,m),h())});return In(()=>{var m;o&&((m=p.onChildDestroy)==null||m.call(p,o),h())}),hi("threlte-hierarchical-object-on-mount",c),hi("threlte-hierarchical-object-on-destroy",u),mA(_),r.$$set=m=>{"object"in m&&t(2,o=m.object),"onChildMount"in m&&t(3,a=m.onChildMount),"onChildDestroy"in m&&t(4,l=m.onChildDestroy),"parent"in m&&t(1,d=m.parent),"$$scope"in m&&t(6,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(1,d=n),r.$$.dirty&4&&_.set(o)},[f,d,o,a,l,n,s,i]}class n0 extends Vt{constructor(e){super(),Gt(this,e,xA,_A,Ht,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function yA(r){let e;const t=r[1].default,n=yt(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&bt(n,t,i,i[4],e?St(t,i[4],s,null):Mt(i[4]),null)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function bA(r){let e,t;return e=new n0({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[yA]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function MA(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class i0 extends Vt{constructor(e){super(),Gt(this,e,MA,bA,Ht,{object:0})}}const SA=()=>{hi("threlte-cache",[])},wA=Gs.replace("dev",""),AA=Number.parseInt(wA),EA=r=>{const e=pn(void 0),t=(n,i)=>{r.renderer=new Kh({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(r.renderer)};return yn([r.colorManagementEnabled],([n])=>{pt.enabled=n}),yn([e,r.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),yn([e,r.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),yn([e,r.size],([n,i])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(i.width,i.height)}),yn([e,r.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=Oc))}),yn([e,r.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),yn([e,r.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},r0=()=>Ii("threlte-internal-context");function Sp(r){let e,t;return e=new i0({props:{object:r[0].scene,$$slots:{default:[TA]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function TA(r){let e;const t=r[15].default,n=yt(t,r,r[17],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,null):Mt(i[17]),null)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function CA(r){let e,t,n,i,s=r[2]&&Sp(r);return{c(){e=wh("canvas"),s&&s.c(),this.h()},l(o){e=Ah(o,"CANVAS",{class:!0});var a=Eh(e);s&&s.l(a),a.forEach(De),this.h()},h(){Wm(e,"class","svelte-o3oskp")},m(o,a){Oe(o,e,a),s&&s.m(e,null),r[16](e),t=!0,n||(i=dv(r[4].call(null,e)),n=!0)},p(o,[a]){o[2]?s?(s.p(o,a),a&4&&H(s,1)):(s=Sp(o),s.c(),H(s,1),s.m(e,null)):s&&(kt(),$(s,1,1,()=>{s=null}),zt())},i(o){t||(H(s),t=!0)},o(o){$(s),t=!1},d(o){o&&De(e),s&&s.d(),r[16](null),n=!1,i()}}}function RA(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{colorManagementEnabled:o=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=Sf?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:h=Oc}=e,{size:f=void 0}=e,{toneMapping:d=Ph}=e,{useLegacyLights:p=!(AA>=155)}=e,{autoRender:_=!0}=e,g,m=pn(!1);ut(r,m,w=>t(2,n=w));const x=pn(f),{parentSize:v,parentSizeAction:y}=pA(),M=dA({colorManagementEnabled:o,colorSpace:a,dpr:c,renderMode:l,parentSize:v,autoRender:_,shadows:h,toneMapping:d,useLegacyLights:p,userSize:x}),A=r0(),S=M;yn([m,S.autoRender],([w,U])=>(w&&U?S.autoRenderTask.start():S.autoRenderTask.stop(),()=>{S.autoRenderTask.stop()})),SA();const{createRenderer:R}=EA(S);Zr(()=>{R(g,u),S.renderer.setAnimationLoop(w=>{A.dispose(),S.scheduler.run(w),A.resetFrameInvalidation()}),m.set(!0)}),In(()=>{var w;A.dispose(!0),S.scheduler.dispose(),(w=S.renderer)==null||w.dispose()});function b(w){Vs[w?"unshift":"push"](()=>{g=w,t(1,g)})}return r.$$set=w=>{"colorManagementEnabled"in w&&t(5,o=w.colorManagementEnabled),"colorSpace"in w&&t(6,a=w.colorSpace),"dpr"in w&&t(7,c=w.dpr),"renderMode"in w&&t(8,l=w.renderMode),"rendererParameters"in w&&t(9,u=w.rendererParameters),"shadows"in w&&t(10,h=w.shadows),"size"in w&&t(11,f=w.size),"toneMapping"in w&&t(12,d=w.toneMapping),"useLegacyLights"in w&&t(13,p=w.useLegacyLights),"autoRender"in w&&t(14,_=w.autoRender),"$$scope"in w&&t(17,s=w.$$scope)},r.$$.update=()=>{r.$$.dirty&2048&&x.set(f),r.$$.dirty&64&&S.colorSpace.set(a),r.$$.dirty&128&&S.dpr.set(c),r.$$.dirty&256&&S.renderMode.set(l),r.$$.dirty&16384&&S.autoRender.set(_),r.$$.dirty&1024&&S.shadows.set(h),r.$$.dirty&4096&&S.toneMapping.set(d)},[S,g,n,m,y,o,a,c,l,u,h,f,d,p,_,i,b,s]}class PA extends Vt{constructor(e){super(),Gt(this,e,RA,CA,Ht,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function LA(r){let e;const t=r[9].default,n=yt(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&bt(n,t,i,i[8],e?St(t,i[8],s,null):Mt(i[8]),null)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}const wp="threlte-disposable-object-context";function IA(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=r0();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const d=Ii(wp);ut(r,d,g=>t(7,i=g));const p=pn(f??i??!0);ut(r,p,g=>t(6,n=g)),hi(wp,p);let _=n?a(u):[];return c(_),In(()=>{l(_)}),r.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,f=g.dispose),"$$scope"in g&&t(8,o=g.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&p.set(f??i??!0),r.$$.dirty&116&&u!==h&&(l(_),t(5,_=n?a(u):[]),c(_),t(4,h=u))},[d,p,u,f,h,_,n,i,o,s]}class DA extends Vt{constructor(e){super(),Gt(this,e,IA,LA,Ht,{object:2,dispose:3})}}const NA=/^\s*class\s+/,UA=r=>typeof r!="function"?!1:NA.test(r.toString()),OA=r=>Array.isArray(r),Ap=(r,e)=>UA(r)?OA(e)?new r(...e):new r:r,FA=r=>"isObject3D"in r,Ep=r=>"dispose"in r,s0=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},uu=Symbol("initialValueBeforeAttach"),BA=()=>{const{invalidate:r}=An();let e=!1,t=uu,n,i,s;const o=(c,l,u)=>{if(a(),!u){const h=c;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:h,key:f}=s0(l,u);t=h[f],h[f]=c,i=h,s=f}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==uu&&(i[s]=t,t=uu,i=void 0,s=void 0),e=!1,r())};return In(()=>{a()}),{update:o}},kA=r=>r&&r.isCamera,o0=r=>r&&r.isOrthographicCamera,a0=r=>r&&r.isPerspectiveCamera,zA=r=>a0(r)||o0(r),HA=()=>{const{invalidate:r,size:e,camera:t}=An();let n,i;In(()=>{i==null||i()});const s=c=>{n&&(o0(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):a0(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(c,l)=>{if(i==null||i(),l||!zA(c)){n=void 0;return}n=c,i=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!kA(c)||!l||(t.set(c),r())}}},ea=()=>{const r=Nc(),e=(n,i)=>{const s=r.$$.callbacks[n];s&&s.forEach(o=>{o(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!r.$$.callbacks[n],enumerable:!0}),e},VA=()=>{const r=ea(),e=[];let t,n=!1;const i=()=>{e.forEach(a=>a()),e.length=0,r("create",{ref:t,cleanup:a=>{e.push(a)}})},s=o=>{t=o,n&&i()};return Zr(()=>{i(),n=!0}),In(()=>{e.forEach(o=>o())}),{updateRef:s}},Tp=r=>!!(r!=null&&r.addEventListener),GA=()=>{const r=ea(),e=Nc(),t=c=>{c!=null&&c.type&&r(c.type,c)},n=(c,l)=>{Tp(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},i=(c,l)=>{Tp(c)&&l.forEach(u=>{c.addEventListener(u,t)})},s=pn(),o=pn([]);return yn([s,o],([c,l])=>(i(c,l),()=>n(c,l))),Zr(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{s.set(c)}}},WA=r=>{const t=Ii("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(r)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let s=[];return In(()=>{s.forEach(l=>l())}),{updateRef:l=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,l);h&&s.push(h)})},updateProps:l=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,l)})},pluginsProps:i}},XA=new Set(["$$scope","$$slots","type","args","attach","instance"]),qA=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),$A=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Cp=(r,e,t)=>{var n,i,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=r[e])==null?void 0:n.setScalar)=="function"&&!((i=r[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((s=r[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},YA=()=>{const{invalidate:r}=An(),e=new Map,t=new Map,n=(s,o,a,c)=>{if($A(a)){const h=e.get(o);if(h&&h.instance===s&&h.value===a)return;e.set(o,{instance:s,value:a})}const{key:l,target:u}=s0(s,o);if(a!=null){const h=t.get(o);if(h)h(u,l,a);else{const f=Cp(u,l,a);t.set(o,f),f(u,l,a)}}else Cp(u,l,a)(u,l,a);c.manualCamera||qA.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,o,a)=>{var c;for(const l in o)!XA.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&n(s,l,o[l],a),r()}}},ZA=r=>({ref:r&2}),Rp=r=>({ref:r[1]}),KA=r=>({ref:r&2}),Pp=r=>({ref:r[1]});function Lp(r){let e,t;return e=new DA({props:{object:r[1],dispose:r[0]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function jA(r){let e;const t=r[10].default,n=yt(t,r,r[11],Rp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&bt(n,t,i,i[11],e?St(t,i[11],s,ZA):Mt(i[11]),Rp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function JA(r){let e,t;return e=new i0({props:{object:r[1],$$slots:{default:[QA]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&2050&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function QA(r){let e;const t=r[10].default,n=yt(t,r,r[11],Pp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&bt(n,t,i,i[11],e?St(t,i[11],s,KA):Mt(i[11]),Pp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function eE(r){let e=Ep(r[1]),t,n,i,s,o,a,c=e&&Lp(r);const l=[JA,jA],u=[];function h(f,d){return d&2&&(n=null),n==null&&(n=!!FA(f[1])),n?0:1}return i=h(r,-1),s=u[i]=l[i](r),{c(){c&&c.c(),t=ht(),s.c(),o=gt()},l(f){c&&c.l(f),t=ft(f),s.l(f),o=gt()},m(f,d){c&&c.m(f,d),Oe(f,t,d),u[i].m(f,d),Oe(f,o,d),a=!0},p(f,[d]){d&2&&(e=Ep(f[1])),e?c?(c.p(f,d),d&2&&H(c,1)):(c=Lp(f),c.c(),H(c,1),c.m(t.parentNode,t)):c&&(kt(),$(c,1,1,()=>{c=null}),zt());let p=i;i=h(f,d),i===p?u[i].p(f,d):(kt(),$(u[p],1,1,()=>{u[p]=null}),zt(),s=u[i],s?s.p(f,d):(s=u[i]=l[i](f),s.c()),H(s,1),s.m(o.parentNode,o))},i(f){a||(H(c),H(s),a=!0)},o(f){$(c),$(s),a=!1},d(f){f&&(De(t),De(o)),c&&c.d(f),u[i].d(f)}}}function tE(r,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Xn(e,n),s,{$$slots:o={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=Af();ut(r,p,U=>t(9,s=U));const _=VA();let g=Ap(c,l);_.updateRef(g);let m=!1;const x=()=>{if(!m){m=!0;return}t(1,g=Ap(c,l)),_.updateRef(g)};let{ref:v=g}=e;const y=gA(g),M=WA({ref:g,props:e}),A=(M==null?void 0:M.pluginsProps)??[],S=YA(),R=HA(),b=BA(),w=GA();return r.$$set=U=>{t(23,e=ln(ln({},e),Fr(U))),t(22,i=Xn(e,n)),"is"in U&&t(4,c=U.is),"args"in U&&t(5,l=U.args),"attach"in U&&t(6,u=U.attach),"manual"in U&&t(7,h=U.manual),"makeDefault"in U&&t(8,f=U.makeDefault),"dispose"in U&&t(0,d=U.dispose),"ref"in U&&t(3,v=U.ref),"$$scope"in U&&t(11,a=U.$$scope)},r.$$.update=()=>{r.$$.dirty&48&&x(),r.$$.dirty&2&&t(3,v=g),r.$$.dirty&2&&y.set(g),S.updateProps(g,i,{manualCamera:h,pluginsProps:A}),r.$$.dirty&130&&R.update(g,h),r.$$.dirty&258&&R.makeDefaultCamera(g,f),r.$$.dirty&578&&b.update(g,s,u),r.$$.dirty&2&&w.updateRef(g),r.$$.dirty&2&&(M==null||M.updateRef(g)),M==null||M.updateProps(e),M==null||M.updateRestProps(i)},e=Fr(e),[d,g,p,v,c,l,u,h,f,s,o,a]}let c0=class extends Vt{constructor(e){super(),Gt(this,e,tE,eE,Ht,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const nE={},iE=(r,e)=>{const t=nE[e]||rA[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...r,props:{...r.props,is:t}}},rE=r=>new Proxy(class{},{construct(e,[t]){const n=t;return new c0(iE(n,r))}}),tt=new Proxy(class{},{construct(r,[e]){const t=e;return new c0(t)},get(r,e){return rE(e)}});function Ui(r,e,t){if(!Sf)return{task:void 0,start:()=>{},stop:()=>{},started:_v(!1)};let n,i,s;qi.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=An();let a=o.mainStage;if(s){if(s.stage)if(qi.isValue(s.stage))a=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);a=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const p=s.after[d];if(qi.isValue(p)){a=p.stage;break}}else qi.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const p=s.before[d];if(qi.isValue(p)){a=p.stage;break}}else qi.isValue(s.before)&&(a=s.before.stage)}const{autoInvalidations:c}=Ii("threlte-internal-context"),l=pn(!1),u=a.createTask(n,i,s),h=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.add(i),u.start()},f=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.delete(i),u.stop()};return(s==null?void 0:s.autoStart)??!0?h():f(),In(()=>{a&&a.removeTask(n)}),{task:u,start:h,stop:f,started:{subscribe:l.subscribe}}}function sE(r,e,t){const n=Ii("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(r in i||(i[r]=e),i)),n.current[r]):Th(n,i=>i[r])}const Ef=()=>{const r=Nc(),e=pn(void 0);return yn(e,t=>{t&&Object.entries(r.$$.callbacks).forEach(n=>{const[i,s]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...s):t.$$.callbacks[i]=s})}),e},Ip=async r=>{if((navigator==null?void 0:navigator.xr)===void 0)return"unsupported";if(location.protocol!=="https:")return"insecure";try{return await navigator.xr.isSessionSupported(r)?"supported":"unsupported"}catch(e){return e.name==="SecurityError"?"blocked":"unsupported"}},ho=_t(!1),Uo=_t(!1),Li=_t(void 0),lh=_t(void 0),Nr=_t(void 0),uh={left:_t(void 0),right:_t(void 0)},l0={left:_t(void 0),right:_t(void 0)},u0=_t({left:{enabled:!1,hovering:!1},right:{enabled:!1,hovering:!1}}),Tf={left:_t(void 0),right:_t(void 0)},Cf=_t({left:{enabled:!1,hovering:!1},right:{enabled:!1,hovering:!1}}),oE={left:_t(void 0),right:_t(void 0)},aE=(r,e)=>{if(!(r===void 0&&e===void 0))return r&&e===void 0?{optionalFeatures:[r]}:r&&e?{...e,optionalFeatures:[...new Set([...e.optionalFeatures??[],r])]}:e},cE=async(r,e,t)=>{const n=Li.current,i=n!==void 0;if(t==="enter"&&i)return n;if(t==="exit"&&!i)return;if(i){await n.end(),Li.set(void 0);return}if(Nr.current===void 0)throw new Error("An <XR> component was not created when attempting to toggle a session.");const s=aE(lh.current,e),o=await navigator.xr.requestSession(r,s);return await Nr.current.setSession(o),Li.set(o),o};function lE(r){return{c:At,l:At,m:At,p:At,d:At}}function uE(r){let e,t,n;function i(u,h){if(u[11]==="unsupported")return pE;if(u[11]==="insecure")return dE;if(u[11]==="blocked")return fE;if(u[11]==="supported")return hE}let s=i(r),o=s&&s(r),a=[r[4]],c={};for(let u=0;u<a.length;u+=1)c=ln(c,a[u]);function l(...u){return r[8](r[11],...u)}return{c(){e=wh("button"),o&&o.c(),this.h()},l(u){e=Ah(u,"BUTTON",{});var h=Eh(e);o&&o.l(h),h.forEach(De),this.h()},h(){Wf(e,c)},m(u,h){Oe(u,e,h),o&&o.m(e,null),e.autofocus&&e.focus(),t||(n=mv(e,"click",l),t=!0)},p(u,h){r=u,s===(s=i(r))&&o?o.p(r,h):(o&&o.d(1),o=s&&s(r),o&&(o.c(),o.m(e,null))),Wf(e,c=Wo(a,[h&16&&r[4]]))},d(u){u&&De(e),o&&o.d(),t=!1,n()}}}function hE(r){let e=r[2]?"Exit":"Enter",t,n,i;return{c(){t=Br(e),n=ht(),i=Br(r[1])},l(s){t=kr(s,e),n=ft(s),i=kr(s,r[1])},m(s,o){Oe(s,t,o),Oe(s,n,o),Oe(s,i,o)},p(s,o){o&4&&e!==(e=s[2]?"Exit":"Enter")&&xc(t,e),o&2&&xc(i,s[1])},d(s){s&&(De(t),De(n),De(i))}}}function fE(r){let e,t;return{c(){e=Br(r[1]),t=Br(" blocked")},l(n){e=kr(n,r[1]),t=kr(n," blocked")},m(n,i){Oe(n,e,i),Oe(n,t,i)},p(n,i){i&2&&xc(e,n[1])},d(n){n&&(De(e),De(t))}}}function dE(r){let e;return{c(){e=Br("HTTPS needed")},l(t){e=kr(t,"HTTPS needed")},m(t,n){Oe(t,e,n)},p:At,d(t){t&&De(e)}}}function pE(r){let e,t;return{c(){e=Br(r[1]),t=Br(" unsupported")},l(n){e=kr(n,r[1]),t=kr(n," unsupported")},m(n,i){Oe(n,e,i),Oe(n,t,i)},p(n,i){i&2&&xc(e,n[1])},d(n){n&&(De(e),De(t))}}}function mE(r){return{c:At,l:At,m:At,p:At,d:At}}function gE(r){let e,t,n={ctx:r,current:null,token:null,hasCatch:!1,pending:mE,then:uE,catch:lE,value:11};return $f(t=Ip(r[0]),n),{c(){e=gt(),n.block.c()},l(i){e=gt(),n.block.l(i)},m(i,s){Oe(i,e,s),n.block.m(i,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e},p(i,[s]){r=i,n.ctx=r,s&1&&t!==(t=Ip(r[0]))&&$f(t,n)||yv(n,r,s)},i:At,o:At,d(i){i&&De(e),n.block.d(i),n.token=null,n=null}}}function _E(r,e,t){let n;const i=["mode","sessionInit","force","styled"];let s=Xn(e,i),o,a;ut(r,Nr,_=>t(9,o=_)),ut(r,Li,_=>t(2,a=_));let{mode:c}=e,{sessionInit:l=void 0}=e,{force:u=void 0}=e,{styled:h=!0}=e;const f=pv(),d=async(_,g)=>{if(!o)throw new Error("The <XR> component was not created. This is required to start an XR session.");if(f("click",{state:g,nativeEvent:_}),g==="supported")try{await cE(c,l,u)}catch(m){f("error",m)}},p=(_,g)=>d(g,_);return r.$$set=_=>{e=ln(ln({},e),Fr(_)),t(4,s=Xn(e,i)),"mode"in _&&t(0,c=_.mode),"sessionInit"in _&&t(5,l=_.sessionInit),"force"in _&&t(6,u=_.force),"styled"in _&&t(7,h=_.styled)},r.$$.update=()=>{r.$$.dirty&1&&t(1,n={"immersive-vr":"VR","immersive-ar":"AR",inline:"inline"}[c]),h&&t(4,s.style=`
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
    `,s)},[c,n,a,d,s,l,u,h,p]}class vE extends Vt{constructor(e){super(),Gt(this,e,_E,gE,Ht,{mode:0,sessionInit:5,force:6,styled:7})}}function xE(r){let e,t;const n=[{sessionInit:{domOverlay:typeof document<"u"?{root:document.body}:void 0,requiredFeatures:["plane-detection"],optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers","hit-test"]}},r[0],{mode:"immersive-ar"}];let i={};for(let s=0;s<n.length;s+=1)i=ln(i,n[s]);return e=new vE({props:i}),e.$on("click",r[1]),e.$on("error",r[2]),{c(){Ae(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){Te(e,s,o),t=!0},p(s,[o]){const a=o&1?Wo(n,[o&0&&{sessionInit:{domOverlay:typeof document<"u"?{root:document.body}:void 0,requiredFeatures:["plane-detection"],optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers","hit-test"]}},o&1&&Uc(s[0]),n[2]]):{};e.$set(a)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){Ce(e,s)}}}function yE(r,e,t){const n=[];let i=Xn(e,n);function s(a){Xf.call(this,r,a)}function o(a){Xf.call(this,r,a)}return r.$$set=a=>{e=ln(ln({},e),Fr(a)),t(0,i=Xn(e,n))},[i,s,o]}class bE extends Vt{constructor(e){super(),Gt(this,e,yE,xE,Ht,{})}}const Dp=new Yt,Qa=new T;class h0 extends vf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Le(e,3)),this.setAttribute("uv",new Le(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ec(t,6,1);return this.setAttribute("instanceStart",new Pn(n,3,0)),this.setAttribute("instanceEnd",new Pn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ec(t,6,1);return this.setAttribute("instanceColorStart",new Pn(n,3,0)),this.setAttribute("instanceColorEnd",new Pn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cf(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Dp.setFromBufferAttribute(t),this.boundingBox.union(Dp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qa.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qa)),Qa.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qa));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new J(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};bn.line={uniforms:Xc.merge([ge.common,ge.fog,ge.line]),vertexShader:`
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
		`};class Rf extends zn{constructor(e){super({type:"LineMaterial",uniforms:Xc.clone(bn.line.uniforms),vertexShader:bn.line.vertexShader,fragmentShader:bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Np=new T,Up=new T,sn=new dt,on=new dt,oi=new dt,hu=new T,fu=new ze,an=new Q_,Op=new T,ec=new Yt,tc=new Zt,ai=new dt;let ui,Ur;function Fp(r,e,t){return ai.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ai.multiplyScalar(1/ai.w),ai.x=Ur/t.width,ai.y=Ur/t.height,ai.applyMatrix4(r.projectionMatrixInverse),ai.multiplyScalar(1/ai.w),Math.abs(Math.max(ai.x,ai.y))}function ME(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){an.start.fromBufferAttribute(i,a),an.end.fromBufferAttribute(s,a),an.applyMatrix4(t);const l=new T,u=new T;ui.distanceSqToSegment(an.start,an.end,u,l),u.distanceTo(l)<Ur*.5&&e.push({point:u,pointOnLine:l,distance:ui.origin.distanceTo(u),object:r,face:null,faceIndex:a,uv:null,uv1:null})}}function SE(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;ui.at(1,oi),oi.w=1,oi.applyMatrix4(e.matrixWorldInverse),oi.applyMatrix4(n),oi.multiplyScalar(1/oi.w),oi.x*=s.x/2,oi.y*=s.y/2,oi.z=0,hu.copy(oi),fu.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(sn.fromBufferAttribute(c,f),on.fromBufferAttribute(l,f),sn.w=1,on.w=1,sn.applyMatrix4(fu),on.applyMatrix4(fu),sn.z>h&&on.z>h)continue;if(sn.z>h){const v=sn.z-on.z,y=(sn.z-h)/v;sn.lerp(on,y)}else if(on.z>h){const v=on.z-sn.z,y=(on.z-h)/v;on.lerp(sn,y)}sn.applyMatrix4(n),on.applyMatrix4(n),sn.multiplyScalar(1/sn.w),on.multiplyScalar(1/on.w),sn.x*=s.x/2,sn.y*=s.y/2,on.x*=s.x/2,on.y*=s.y/2,an.start.copy(sn),an.start.z=0,an.end.copy(on),an.end.z=0;const _=an.closestPointToPointParameter(hu,!0);an.at(_,Op);const g=Vc.lerp(sn.z,on.z,_),m=g>=-1&&g<=1,x=hu.distanceTo(Op)<Ur*.5;if(m&&x){an.start.fromBufferAttribute(c,f),an.end.fromBufferAttribute(l,f),an.start.applyMatrix4(o),an.end.applyMatrix4(o);const v=new T,y=new T;ui.distanceSqToSegment(an.start,an.end,y,v),t.push({point:y,pointOnLine:v,distance:ui.origin.distanceTo(y),object:r,face:null,faceIndex:f,uv:null,uv1:null})}}}class wE extends Et{constructor(e=new h0,t=new Rf({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Np.fromBufferAttribute(t,o),Up.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Np.distanceTo(Up);const s=new Ec(i,2,1);return e.setAttribute("instanceDistanceStart",new Pn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Pn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ui=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Ur=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),tc.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ur*.5;else{const h=Math.max(i.near,tc.distanceToPoint(ui.origin));l=Fp(i,h,c.resolution)}if(tc.radius+=l,ui.intersectsSphere(tc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ec.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Ur*.5;else{const h=Math.max(i.near,ec.distanceToPoint(ui.origin));u=Fp(i,h,c.resolution)}ec.expandByScalar(u),ui.intersectsBox(ec)!==!1&&(n?ME(this,t):SE(this,i,t))}}class f0 extends h0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class AE extends wE{constructor(e=new f0,t=new Rf({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function EE(r){let e,t,n,i;return e=new tt({props:{is:r[2]}}),n=new tt({props:{is:Rf,linewidth:.004}}),{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=ft(s),Ee(n.$$.fragment,s)},m(s,o){Te(e,s,o),Oe(s,t,o),Te(n,s,o),i=!0},p:At,i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),i=!1},d(s){s&&De(t),Ce(e,s),Ce(n,s)}}}function TE(r){let e,t;return e=new tt({props:{is:AE,visible:r[0]!==void 0,"position.z":-.01,$$slots:{default:[EE]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.visible=n[0]!==void 0),i&64&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function CE(r){let e;const t=r[5].default,n=yt(t,r,r[6],null),i=n||TE(r);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,[o]){n?n.p&&(!e||o&64)&&bt(n,t,s,s[6],e?St(t,s[6],o,null):Mt(s[6]),null):i&&i.p&&(!e||o&1)&&i.p(s,e?o:-1)},i(s){e||(H(i,s),e=!0)},o(s){$(i,s),e=!1},d(s){i&&i.d(s)}}}const du=40;function RE(r,e,t){let n,i,s=At,o=()=>(s(),s=Go(n,A=>t(0,i=A)),n);r.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:c}=e,{handedness:l}=e,{targetRay:u}=e,h=new f0;const f=new T,d=new T,p=new nl,_=new Float32Array(du*3),g=new T,m=new J,x=new J,v=(A=.3)=>{if(n.current===void 0)return;const S=n.current.point;u.getWorldPosition(f),d.x=(f.x+S.x)/2,d.y=(f.y+S.y)/2,d.z=(f.z+S.z)/2;const R=Math.log1p(m.set(f.x,f.z).distanceTo(x.set(S.x,S.z)));d.y+=R,p.v0.lerp(f,A),p.v1.lerp(d,A),p.v2.lerp(S,A);for(let b=0,w=0;b<du;b+=1,w+=3){const U=b/du;p.getPoint(U,g),_[w+0]=g.x,_[w+1]=g.y,_[w+2]=g.z}h.setPositions(_)},{start:y,stop:M}=Ui(()=>{v()},{autoStart:!1});return r.$$set=A=>{"handedness"in A&&t(3,l=A.handedness),"targetRay"in A&&t(4,u=A.targetRay),"$$scope"in A&&t(6,c=A.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&o(t(1,n=Tf[l])),r.$$.dirty&1&&(i===void 0?M():(v(1),y()))},[i,n,h,l,u,a,c]}class d0 extends Vt{constructor(e){super(),Gt(this,e,RE,CE,Ht,{handedness:3,targetRay:4})}}function Bp(r){return Object.prototype.toString.call(r)==="[object Date]"}function hh(r,e,t,n){if(typeof t=="number"||Bp(t)){const i=n-t,s=(t-e)/(r.dt||1/60),o=r.opts.stiffness*i,a=r.opts.damping*s,c=(o-a)*r.inv_mass,l=(s+c)*r.dt;return Math.abs(l)<r.opts.precision&&Math.abs(i)<r.opts.precision?n:(r.settled=!1,Bp(t)?new Date(t.getTime()+l):t+l)}else{if(Array.isArray(t))return t.map((i,s)=>hh(r,e[s],t[s],n[s]));if(typeof t=="object"){const i={};for(const s in t)i[s]=hh(r,e[s],t[s],n[s]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function PE(r,e={}){const t=pn(r),{stiffness:n=.15,damping:i=.8,precision:s=.01}=e;let o,a,c,l=r,u=r,h=1,f=0,d=!1;function p(g,m={}){u=g;const x=c={};return r==null||m.hard||_.stiffness>=1&&_.damping>=1?(d=!0,o=qf(),l=g,t.set(r=u),Promise.resolve()):(m.soft&&(f=1/((m.soft===!0?.5:+m.soft)*60),h=0),a||(o=qf(),d=!1,a=xv(v=>{if(d)return d=!1,a=null,!1;h=Math.min(h+f,1);const y={inv_mass:h,opts:_,settled:!0,dt:(v-o)*60/1e3},M=hh(y,l,r,u);return o=v,l=r,t.set(r=M),y.settled&&(a=null),!y.settled})),new Promise(v=>{a.promise.then(()=>{x===c&&v()})}))}const _={set:p,update:(g,m)=>p(g(u,r),m),subscribe:t.subscribe,stiffness:n,damping:i,precision:s};return _}function LE(r){let e,t,n,i;return e=new tt.PlaneGeometry({}),n=new tt({props:{is:r[1]}}),{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=ft(s),Ee(n.$$.fragment,s)},m(s,o){Te(e,s,o),Oe(s,t,o),Te(n,s,o),i=!0},p(s,o){const a={};o&2&&(a.is=s[1]),n.$set(a)},i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),i=!1},d(s){s&&De(t),Ce(e,s),Ce(n,s)}}}function IE(r){let e,t;return e=new tt.Mesh({props:{scale:r[0],$$slots:{default:[LE]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.scale=n[0]),i&66&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function DE(r,e,t){let{color:n=new _e("white")}=e,{size:i=.03}=e,{thickness:s=.035}=e;const o=`
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
  `,c=new lf({vertexShader:o,fragmentShader:a,uniforms:{thickness:{value:s},color:{value:n}},side:On,transparent:!0,depthTest:!1});return r.$$set=l=>{"color"in l&&t(2,n=l.color),"size"in l&&t(0,i=l.size),"thickness"in l&&t(3,s=l.thickness)},r.$$.update=()=>{r.$$.dirty&8&&t(1,c.uniforms.thickness.value=s,c),r.$$.dirty&4&&t(1,c.uniforms.color.value=n,c)},[i,c,n,s]}class p0 extends Vt{constructor(e){super(),Gt(this,e,DE,IE,Ht,{color:2,size:0,thickness:3})}}function NE(r){let e,t;return e=new p0({props:{size:r[2],thickness:.015}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.size=n[2]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function UE(r){let e;const t=r[6].default,n=yt(t,r,r[7],null),i=n||NE(r);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){n?n.p&&(!e||o&128)&&bt(n,t,s,s[7],e?St(t,s[7],o,null):Mt(s[7]),null):i&&i.p&&(!e||o&4)&&i.p(s,e?o:-1)},i(s){e||(H(i,s),e=!0)},o(s){$(i,s),e=!1},d(s){i&&i.d(s)}}}function OE(r){let e,t;return e=new tt({props:{is:r[3],visible:r[0]!==void 0,$$slots:{default:[UE]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.visible=n[0]!==void 0),i&132&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function FE(r,e,t){let n,i,s=At,o=()=>(s(),s=Go(n,x=>t(0,i=x)),n),a;r.$$.on_destroy.push(()=>s());let{$$slots:c={},$$scope:l}=e,{handedness:u}=e;const h=new Wn,f=new T,d=new je,p=new T,{start:_,stop:g}=Ui(()=>{if(n.current===void 0)return;const{point:x,face:v,object:y}=n.current;h.position.lerp(x,.4),v&&(d.getNormalMatrix(y.matrixWorld),p.copy(v.normal).applyMatrix3(d).normalize(),h.lookAt(f.addVectors(x,p)))},{autoStart:!1}),m=PE(.1,{stiffness:.2});return ut(r,m,x=>t(2,a=x)),r.$$set=x=>{"handedness"in x&&t(5,u=x.handedness),"$$scope"in x&&t(7,l=x.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&o(t(1,n=Tf[u])),r.$$.dirty&1&&(i===void 0?(m.set(.1),g()):(m.set(1),h.position.copy(i.point),_()))},[i,n,a,h,m,u,c,l]}class m0 extends Vt{constructor(e){super(),Gt(this,e,FE,OE,Ht,{handedness:5})}}function BE(r){let e;const t=r[1].default,n=yt(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&bt(n,t,i,i[4],e?St(t,i[4],s,null):Mt(i[4]),null)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function kE(r){let e,t;return e=new n0({props:{onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[BE]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,[i]){const s={};i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function zE(r,e,t){let{$$slots:n={},$$scope:i}=e;const{scene:s}=An(),o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class g0 extends Vt{constructor(e){super(),Gt(this,e,zE,kE,Ht,{})}}function HE(r){let e,t,n,i;return e=new tt.CylinderGeometry({props:{args:[.002,.002,.2,16,1,!1]}}),n=new tt.RawShaderMaterial({props:{transparent:!0,vertexShader:`
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
        `}}),{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=ft(s),Ee(n.$$.fragment,s)},m(s,o){Te(e,s,o),Oe(s,t,o),Te(n,s,o),i=!0},p:At,i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),i=!1},d(s){s&&De(t),Ce(e,s),Ce(n,s)}}}function VE(r){let e,t;return e=new tt.Mesh({props:{"rotation.x":-Math.PI/2,"position.z":-.1,$$slots:{default:[HE]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&256&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function GE(r){let e;const t=r[7].default,n=yt(t,r,r[8],null),i=n||VE(r);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&256)&&bt(n,t,s,s[8],e?St(t,s[8],o,null):Mt(s[8]),null)},i(s){e||(H(i,s),e=!0)},o(s){$(i,s),e=!1},d(s){i&&i.d(s)}}}function WE(r){let e,t;return e=new tt.Group({props:{visible:r[0],$$slots:{default:[GE]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.visible=n[0]),i&256&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function XE(r,e,t){let n,i,s,o,a=At,c=()=>(a(),a=Go(i,p=>t(4,o=p)),i),l,u;ut(r,Cf,p=>t(5,l=p)),ut(r,u0,p=>t(6,u=p)),r.$$.on_destroy.push(()=>a());let{$$slots:h={},$$scope:f}=e,{handedness:d}=e;return r.$$set=p=>{"handedness"in p&&t(2,d=p.handedness),"$$scope"in p&&t(8,f=p.$$scope)},r.$$.update=()=>{r.$$.dirty&68&&t(3,n=u[d].hovering),r.$$.dirty&4&&c(t(1,i=Tf[d])),r.$$.dirty&60&&t(0,s=l[d].enabled||n&&o===void 0)},[s,i,d,n,o,l,u,h,f]}class _0 extends Vt{constructor(e){super(),Gt(this,e,XE,WE,Ht,{handedness:2})}}function qE(r){let e,t;return e=new p0({}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function $E(r){let e;const t=r[5].default,n=yt(t,r,r[6],null),i=n||qE();return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o&64)&&bt(n,t,s,s[6],e?St(t,s[6],o,null):Mt(s[6]),null)},i(s){e||(H(i,s),e=!0)},o(s){$(i,s),e=!1},d(s){i&&i.d(s)}}}function YE(r){let e,t;return e=new tt({props:{is:r[1],visible:r[0],$$slots:{default:[$E]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.visible=n[0]),i&64&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function ZE(r,e,t){let n,i,s;ut(r,Cf,_=>t(4,s=_));let{$$slots:o={},$$scope:a}=e,{handedness:c}=e;const l=new Wn,u=new T,h=new je,f=new T,{start:d,stop:p}=Ui(()=>{if(i.current===void 0)return;const{point:_,face:g,object:m}=i.current;l.position.lerp(_,.4),g&&(h.getNormalMatrix(m.matrixWorld),f.copy(g.normal).applyMatrix3(h).normalize(),l.lookAt(u.addVectors(_,f)))},{autoStart:!1});return r.$$set=_=>{"handedness"in _&&t(2,c=_.handedness),"$$scope"in _&&t(6,a=_.$$scope)},r.$$.update=()=>{r.$$.dirty&20&&t(0,n=s[c].hovering),r.$$.dirty&4&&t(3,i=oE[c]),r.$$.dirty&9&&(n?(l.position.copy(i.current.point),d()):p())},[n,l,c,i,s,o,a]}class v0 extends Vt{constructor(e){super(),Gt(this,e,ZE,YE,Ht,{handedness:2})}}const Pf=_t(void 0),Lf=_t(void 0),x0=_t(void 0),Tc=r=>{switch(r){case"left":return Pf;case"right":return Lf;case"none":return x0;default:throw new Error("useController handedness must be left, right, or none.")}},KE=r=>({}),kp=r=>({}),jE=r=>({}),zp=r=>({}),JE=r=>({}),Hp=r=>({}),QE=r=>({}),Vp=r=>({}),eT=r=>({}),Gp=r=>({}),tT=r=>({}),Wp=r=>({});function Xp(r){let e,t,n,i=r[5]&&qp(r),s=r[4]&&$p(r);return{c(){i&&i.c(),e=ht(),s&&s.c(),t=gt()},l(o){i&&i.l(o),e=ft(o),s&&s.l(o),t=gt()},m(o,a){i&&i.m(o,a),Oe(o,e,a),s&&s.m(o,a),Oe(o,t,a),n=!0},p(o,a){o[5]?i?(i.p(o,a),a&32&&H(i,1)):(i=qp(o),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(kt(),$(i,1,1,()=>{i=null}),zt()),o[4]?s?(s.p(o,a),a&16&&H(s,1)):(s=$p(o),s.c(),H(s,1),s.m(t.parentNode,t)):s&&(kt(),$(s,1,1,()=>{s=null}),zt())},i(o){n||(H(i),H(s),n=!0)},o(o){$(i),$(s),n=!1},d(o){o&&(De(e),De(t)),i&&i.d(o),s&&s.d(o)}}}function qp(r){let e,t;return e=new tt({props:{is:r[5],$$slots:{default:[iT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&32&&(s.is=n[5]),i&131080&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function nT(r){let e,t;return e=new tt({props:{is:r[3]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.is=n[3]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function iT(r){let e,t;const n=r[16].default,i=yt(n,r,r[17],null),s=i||nT(r),o=r[16].grip,a=yt(o,r,r[17],Wp);return{c(){s&&s.c(),e=ht(),a&&a.c()},l(c){s&&s.l(c),e=ft(c),a&&a.l(c)},m(c,l){s&&s.m(c,l),Oe(c,e,l),a&&a.m(c,l),t=!0},p(c,l){i?i.p&&(!t||l&131072)&&bt(i,n,c,c[17],t?St(n,c[17],l,null):Mt(c[17]),null):s&&s.p&&(!t||l&8)&&s.p(c,t?l:-1),a&&a.p&&(!t||l&131072)&&bt(a,o,c,c[17],t?St(o,c[17],l,tT):Mt(c[17]),Wp)},i(c){t||(H(s,c),H(a,c),t=!0)},o(c){$(s,c),$(a,c),t=!1},d(c){c&&De(e),s&&s.d(c),a&&a.d(c)}}}function $p(r){let e,t;return e=new tt({props:{is:r[4],$$slots:{default:[aT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.is=n[4]),i&131591&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Yp(r){let e,t,n,i;const s=[sT,rT],o=[];function a(c,l){return c[9]["pointer-ray"]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=gt()},l(c){t.l(c),n=gt()},m(c,l){o[e].m(c,l),Oe(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(kt(),$(o[u],1,1,()=>{o[u]=null}),zt(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),H(t,1),t.m(n.parentNode,n))},i(c){i||(H(t),i=!0)},o(c){$(t),i=!1},d(c){c&&De(n),o[e].d(c)}}}function rT(r){let e,t;return e=new _0({props:{handedness:r[0]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function sT(r){let e,t;return e=new _0({props:{handedness:r[0],$$slots:{default:[oT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function oT(r){let e;const t=r[16]["pointer-ray"],n=yt(t,r,r[17],Vp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,QE):Mt(i[17]),Vp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function aT(r){let e,t,n;const i=r[16]["target-ray"],s=yt(i,r,r[17],Gp);let o=(r[2]||r[1])&&Yp(r);return{c(){s&&s.c(),e=ht(),o&&o.c(),t=gt()},l(a){s&&s.l(a),e=ft(a),o&&o.l(a),t=gt()},m(a,c){s&&s.m(a,c),Oe(a,e,c),o&&o.m(a,c),Oe(a,t,c),n=!0},p(a,c){s&&s.p&&(!n||c&131072)&&bt(s,i,a,a[17],n?St(i,a[17],c,eT):Mt(a[17]),Gp),a[2]||a[1]?o?(o.p(a,c),c&6&&H(o,1)):(o=Yp(a),o.c(),H(o,1),o.m(t.parentNode,t)):o&&(kt(),$(o,1,1,()=>{o=null}),zt())},i(a){n||(H(s,a),H(o),n=!0)},o(a){$(s,a),$(o),n=!1},d(a){a&&(De(e),De(t)),s&&s.d(a),o&&o.d(a)}}}function Zp(r){let e,t,n,i;const s=[lT,cT],o=[];function a(c,l){return c[9]["pointer-cursor"]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=gt()},l(c){t.l(c),n=gt()},m(c,l){o[e].m(c,l),Oe(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(kt(),$(o[u],1,1,()=>{o[u]=null}),zt(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),H(t,1),t.m(n.parentNode,n))},i(c){i||(H(t),i=!0)},o(c){$(t),i=!1},d(c){c&&De(n),o[e].d(c)}}}function cT(r){let e,t;return e=new v0({props:{handedness:r[0]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function lT(r){let e,t;return e=new v0({props:{handedness:r[0],$$slots:{default:[uT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function uT(r){let e;const t=r[16]["pointer-cursor"],n=yt(t,r,r[17],Hp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,JE):Mt(i[17]),Hp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function Kp(r){let e,t,n,i,s,o,a;const c=[fT,hT],l=[];function u(p,_){return p[9]["teleport-ray"]?0:1}e=u(r),t=l[e]=c[e](r);const h=[mT,pT],f=[];function d(p,_){return p[9]["teleport-ray"]?0:1}return i=d(r),s=f[i]=h[i](r),{c(){t.c(),n=ht(),s.c(),o=gt()},l(p){t.l(p),n=ft(p),s.l(p),o=gt()},m(p,_){l[e].m(p,_),Oe(p,n,_),f[i].m(p,_),Oe(p,o,_),a=!0},p(p,_){let g=e;e=u(p),e===g?l[e].p(p,_):(kt(),$(l[g],1,1,()=>{l[g]=null}),zt(),t=l[e],t?t.p(p,_):(t=l[e]=c[e](p),t.c()),H(t,1),t.m(n.parentNode,n));let m=i;i=d(p),i===m?f[i].p(p,_):(kt(),$(f[m],1,1,()=>{f[m]=null}),zt(),s=f[i],s?s.p(p,_):(s=f[i]=h[i](p),s.c()),H(s,1),s.m(o.parentNode,o))},i(p){a||(H(t),H(s),a=!0)},o(p){$(t),$(s),a=!1},d(p){p&&(De(n),De(o)),l[e].d(p),f[i].d(p)}}}function hT(r){let e,t;return e=new d0({props:{targetRay:r[4],handedness:r[0]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.targetRay=n[4]),i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function fT(r){let e,t;return e=new d0({props:{targetRay:r[4],handedness:r[0],$$slots:{default:[dT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&16&&(s.targetRay=n[4]),i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function dT(r){let e;const t=r[16]["teleport-ray"],n=yt(t,r,r[17],zp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,jE):Mt(i[17]),zp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function pT(r){let e,t;return e=new m0({props:{handedness:r[0]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function mT(r){let e,t;return e=new m0({props:{handedness:r[0],$$slots:{default:[gT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.handedness=n[0]),i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function gT(r){let e;const t=r[16]["teleport-cursor"],n=yt(t,r,r[17],kp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&bt(n,t,i,i[17],e?St(t,i[17],s,KE):Mt(i[17]),kp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function _T(r){let e,t,n,i=r[2]&&Zp(r),s=r[1]&&r[4]!==void 0&&Kp(r);return{c(){i&&i.c(),e=ht(),s&&s.c(),t=gt()},l(o){i&&i.l(o),e=ft(o),s&&s.l(o),t=gt()},m(o,a){i&&i.m(o,a),Oe(o,e,a),s&&s.m(o,a),Oe(o,t,a),n=!0},p(o,a){o[2]?i?(i.p(o,a),a&4&&H(i,1)):(i=Zp(o),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(kt(),$(i,1,1,()=>{i=null}),zt()),o[1]&&o[4]!==void 0?s?(s.p(o,a),a&18&&H(s,1)):(s=Kp(o),s.c(),H(s,1),s.m(t.parentNode,t)):s&&(kt(),$(s,1,1,()=>{s=null}),zt())},i(o){n||(H(i),H(s),n=!0)},o(o){$(i),$(s),n=!1},d(o){o&&(De(e),De(t)),i&&i.d(o),s&&s.d(o)}}}function vT(r){let e,t,n,i=!r[7]&&Xp(r);return t=new g0({props:{$$slots:{default:[_T]},$$scope:{ctx:r}}}),{c(){i&&i.c(),e=ht(),Ae(t.$$.fragment)},l(s){i&&i.l(s),e=ft(s),Ee(t.$$.fragment,s)},m(s,o){i&&i.m(s,o),Oe(s,e,o),Te(t,s,o),n=!0},p(s,[o]){s[7]?i&&(kt(),$(i,1,1,()=>{i=null}),zt()):i?(i.p(s,o),o&128&&H(i,1)):(i=Xp(s),i.c(),H(i,1),i.m(e.parentNode,e));const a={};o&131607&&(a.$$scope={dirty:o,ctx:s}),t.$set(a)},i(s){n||(H(i),H(t.$$.fragment,s),n=!0)},o(s){$(i),$(t.$$.fragment,s),n=!1},d(s){s&&De(e),i&&i.d(s),Ce(t,s)}}}const xT={left:Pf,right:Lf};function yT(r,e,t){let n,i,s,o,a,c,l,u,h,f,d=At,p=()=>(d(),d=Go(n,R=>t(15,f=R)),n),_;ut(r,u0,R=>t(13,u=R)),ut(r,Cf,R=>t(14,h=R)),ut(r,Uo,R=>t(7,_=R)),r.$$.on_destroy.push(()=>d());let{$$slots:g={},$$scope:m}=e;const x=Xm(g);let{left:v=void 0}=e,{right:y=void 0}=e,{hand:M=void 0}=e;const A=ea(),S=pn(v?"left":y?"right":M);return ut(r,S,R=>t(0,l=R)),uh[l].set(A),r.$$set=R=>{"left"in R&&t(10,v=R.left),"right"in R&&t(11,y=R.right),"hand"in R&&t(12,M=R.hand),"$$scope"in R&&t(17,m=R.$$scope)},r.$$.update=()=>{r.$$.dirty&7168&&S.set(v?"left":y?"right":M),r.$$.dirty&1&&uh[l].set(A),r.$$.dirty&1&&p(t(6,n=xT[l])),r.$$.dirty&32768&&t(5,i=f==null?void 0:f.grip),r.$$.dirty&32768&&t(4,s=f==null?void 0:f.targetRay),r.$$.dirty&32768&&t(3,o=f==null?void 0:f.model),r.$$.dirty&16385&&t(2,a=h[l].enabled),r.$$.dirty&8193&&t(1,c=u[l].enabled)},[l,c,a,o,s,i,n,_,S,x,v,y,M,u,h,f,g,m]}class bT extends Vt{constructor(e){super(),Gt(this,e,yT,vT,Ht,{left:10,right:11,hand:12})}}const y0=_t(void 0),b0=_t(void 0),MT=r=>({}),jp=r=>({}),ST=r=>({}),Jp=r=>({});function Qp(r){let e,t,n,i;e=new tt({props:{is:r[0].hand,$$slots:{default:[wT]},$$scope:{ctx:r}}});let s=r[6]["target-ray"]!==void 0&&tm(r);return{c(){Ae(e.$$.fragment),t=ht(),s&&s.c(),n=gt()},l(o){Ee(e.$$.fragment,o),t=ft(o),s&&s.l(o),n=gt()},m(o,a){Te(e,o,a),Oe(o,t,a),s&&s.m(o,a),Oe(o,n,a),i=!0},p(o,a){const c={};a&1&&(c.is=o[0].hand),a&16456&&(c.$$scope={dirty:a,ctx:o}),e.$set(c),o[6]["target-ray"]!==void 0?s?(s.p(o,a),a&64&&H(s,1)):(s=tm(o),s.c(),H(s,1),s.m(n.parentNode,n)):s&&(kt(),$(s,1,1,()=>{s=null}),zt())},i(o){i||(H(e.$$.fragment,o),H(s),i=!0)},o(o){$(e.$$.fragment,o),$(s),i=!1},d(o){o&&(De(t),De(n)),Ce(e,o),s&&s.d(o)}}}function em(r){let e,t;return e=new tt({props:{is:r[3]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.is=n[3]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function wT(r){let e,t,n=r[6].default===void 0&&em(r);return{c(){n&&n.c(),e=gt()},l(i){n&&n.l(i),e=gt()},m(i,s){n&&n.m(i,s),Oe(i,e,s),t=!0},p(i,s){i[6].default===void 0?n?(n.p(i,s),s&64&&H(n,1)):(n=em(i),n.c(),H(n,1),n.m(e.parentNode,e)):n&&(kt(),$(n,1,1,()=>{n=null}),zt())},i(i){t||(H(n),t=!0)},o(i){$(n),t=!1},d(i){i&&De(e),n&&n.d(i)}}}function tm(r){let e,t;return e=new tt({props:{is:r[0].targetRay,$$slots:{default:[AT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.is=n[0].targetRay),i&16384&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function AT(r){let e;const t=r[12]["target-ray"],n=yt(t,r,r[14],Jp);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16384)&&bt(n,t,i,i[14],e?St(t,i[14],s,ST):Mt(i[14]),Jp)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function nm(r){let e,t;return e=new g0({props:{$$slots:{default:[TT]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&16388&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function ET(r){let e,t;const n=r[12].wrist,i=yt(n,r,r[14],jp),s=r[12].default,o=yt(s,r,r[14],null);return{c(){i&&i.c(),e=ht(),o&&o.c()},l(a){i&&i.l(a),e=ft(a),o&&o.l(a)},m(a,c){i&&i.m(a,c),Oe(a,e,c),o&&o.m(a,c),t=!0},p(a,c){i&&i.p&&(!t||c&16384)&&bt(i,n,a,a[14],t?St(n,a[14],c,MT):Mt(a[14]),jp),o&&o.p&&(!t||c&16384)&&bt(o,s,a,a[14],t?St(s,a[14],c,null):Mt(a[14]),null)},i(a){t||(H(i,a),H(o,a),t=!0)},o(a){$(i,a),$(o,a),t=!1},d(a){a&&De(e),i&&i.d(a),o&&o.d(a)}}}function TT(r){let e,t,n;function i(o){r[13](o)}let s={$$slots:{default:[ET]},$$scope:{ctx:r}};return r[2]!==void 0&&(s.ref=r[2]),e=new tt.Group({props:s}),Vs.push(()=>$m(e,"ref",i)),{c(){Ae(e.$$.fragment)},l(o){Ee(e.$$.fragment,o)},m(o,a){Te(e,o,a),n=!0},p(o,a){const c={};a&16384&&(c.$$scope={dirty:a,ctx:o}),!t&&a&4&&(t=!0,c.ref=o[2],qm(()=>t=!1)),e.$set(c)},i(o){n||(H(e.$$.fragment,o),n=!0)},o(o){$(e.$$.fragment,o),n=!1},d(o){Ce(e,o)}}}function CT(r){var o;let e,t,n,i=((o=r[0])==null?void 0:o.hand)&&r[1]&&Qp(r),s=r[1]&&nm(r);return{c(){i&&i.c(),e=ht(),s&&s.c(),t=gt()},l(a){i&&i.l(a),e=ft(a),s&&s.l(a),t=gt()},m(a,c){i&&i.m(a,c),Oe(a,e,c),s&&s.m(a,c),Oe(a,t,c),n=!0},p(a,[c]){var l;(l=a[0])!=null&&l.hand&&a[1]?i?(i.p(a,c),c&3&&H(i,1)):(i=Qp(a),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(kt(),$(i,1,1,()=>{i=null}),zt()),a[1]?s?(s.p(a,c),c&2&&H(s,1)):(s=nm(a),s.c(),H(s,1),s.m(t.parentNode,t)):s&&(kt(),$(s,1,1,()=>{s=null}),zt())},i(a){n||(H(i),H(s),n=!0)},o(a){$(i),$(s),n=!1},d(a){a&&(De(e),De(t)),i&&i.d(a),s&&s.d(a)}}}const RT={left:y0,right:b0};function PT(r,e,t){let n,i,s,o,a=At,c=()=>(a(),a=Go(n,b=>t(0,o=b)),n),l,u;ut(r,Uo,b=>t(1,u=b)),r.$$.on_destroy.push(()=>a());let{$$slots:h={},$$scope:f}=e;const d=Xm(h);let{left:p=void 0}=e,{right:_=void 0}=e,{hand:g=void 0}=e;const m=ea(),{xr:x}=An().renderer,v=x.getReferenceSpace(),y=pn(p?"left":_?"right":g);ut(r,y,b=>t(11,l=b));let M;const{start:A,stop:S}=Ui(()=>{var N;const b=x.getFrame(),w=i.get("wrist");if(w===void 0||v===null)return;const U=(N=b.getJointPose)==null?void 0:N.call(b,w,v);if(U==null)return;const{position:k,orientation:W}=U.transform;M.position.set(k.x,k.y,k.z),M.quaternion.set(W.x,W.y,W.z,W.w)},{autoStart:!1});function R(b){M=b,t(2,M)}return r.$$set=b=>{"left"in b&&t(7,p=b.left),"right"in b&&t(8,_=b.right),"hand"in b&&t(9,g=b.hand),"$$scope"in b&&t(14,f=b.$$scope)},r.$$.update=()=>{r.$$.dirty&896&&y.set(p?"left":_?"right":g),r.$$.dirty&2048&&l0[l].set(m),r.$$.dirty&1&&t(10,i=o==null?void 0:o.inputSource),r.$$.dirty&1026&&(u&&(d.wrist||d.default)&&i?A():S()),r.$$.dirty&2048&&c(t(4,n=RT[l])),r.$$.dirty&1&&t(3,s=o==null?void 0:o.model)},[o,u,M,s,n,y,d,p,_,g,i,l,h,R,f]}class LT extends Vt{constructor(e){super(),Gt(this,e,PT,CT,Ht,{left:7,right:8,hand:9})}}const IT={isPresenting:ho,isHandTracking:Uo,session:Li,xrFrame:{get current(){return Nr.current.getFrame()}}},DT=()=>IT,nc=new Wn,NT=()=>{const{renderer:r,camera:e}=An(),{xr:t}=r,n=Ui(()=>{const s=t.getReferenceSpace();if(s===null)return;const o=t.getFrame().getViewerPose(s);if(o==null)return;const{position:a,orientation:c}=o.transform;nc.position.set(a.x,a.y,a.z),nc.quaternion.set(c.x,c.y,c.z,c.w)},{autoStart:!1,autoInvalidate:!1}),i=Ui(()=>{nc.position.copy(e.current.position),nc.quaternion.copy(e.current.quaternion)},{autoStart:!1,autoInvalidate:!1});yn(DT().isPresenting,s=>{s?(n.start(),i.stop()):(n.stop(),i.start())})},UT=()=>{if(typeof window>"u")return;const r=t=>requestAnimationFrame(t),e={fn:r};vv(t=>e.fn(t)),yn(Li,t=>{t?e.fn=n=>t.requestAnimationFrame(n):e.fn=r}),In(()=>e.fn=r)};function im(r,e){if(e===Hg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Mc||e===kh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Mc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class M0 extends wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zT(t)}),this.register(function(t){return new ZT(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new $T(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new JT(t)}),this.register(function(t){return new QT(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Qi.extractUrlBase(e);o=Qi.resolveURL(l,this.path)}else o=Qi.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Jn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===S0){try{o[at.KHR_BINARY_GLTF]=new eC(e)}catch(h){i&&i(h);return}s=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new dC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new BT;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new tC(s,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new nC;break;case at.KHR_MESH_QUANTIZATION:o[h]=new iC;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function OT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FT{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new _e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],rn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _f(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new gf(u),l.distance=h;break;case"spot":l=new mf(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,$i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class BT{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(e,t,n){const i=[];e.color=new _e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}}class kT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class zT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(a,a)}return Promise.all(s)}}class HT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class VT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class GT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class WT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],rn),Promise.all(s)}}class XT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class qT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(s)}}class $T{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class YT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class ZT{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class KT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JT{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class QT{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const p of h){const _=new ze,g=new T,m=new nn,x=new T(1,1,1),v=new Jc(p.geometry,p.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(g,m,x));for(const y in c)if(y==="_COLOR_0"){const M=c[y];v.instanceColor=new Vr(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);ct.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const S0="glTF",ao=12,rm={JSON:1313821514,BIN:5130562};class eC{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==S0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ao,s=new DataView(e,ao);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===rm.JSON){const l=new Uint8Array(e,ao+o,a);this.content=n.decode(l)}else if(c===rm.BIN){const l=ao+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=fh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=fh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ls[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const p=f.attributes[d],_=c[d];_!==void 0&&(p.normalized=_)}h(f)},a,l)})})}}class nC{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iC{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class w0 extends Ys{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,p=e*l,_=p-l,g=-2*d+3*f,m=d-f,x=1-g,v=m-f+h;for(let y=0;y!==a;y++){const M=o[_+y+a],A=o[_+y+c]*u,S=o[p+y+a],R=o[p+y]*u;s[y]=x*M+v*A+g*S+m*R}return s}}const rC=new nn;class sC extends w0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return rC.fromArray(s).normalize().toArray(s),s}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sm={9728:Ft,9729:Rt,9984:So,9985:Bc,9986:Rs,9987:mi},om={33071:cn,33648:Ds,10497:tr},pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oC={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Us},mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),r.DefaultMaterial}function vr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cC(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function lC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uC(r){let e;const t=r.extensions&&r.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gu(t.attributes):e=r.indices+":"+gu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+gu(r.targets[n]);return e}function gu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function dh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const fC=new ze;class dC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new H_(this.options.manager):this.textureLoader=new Y_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vr(s,a,i),$i(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Qi.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=pu[i.type],a=Ls[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new mt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=pu[i.type],l=Ls[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(x);v||(_=new l(a,m*d,i.count*d/u),v=new Ko(_,d/u),t.cache.add(x,v)),g=new Pn(v,c,f%d/u,p)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),g=new mt(_,c,p);if(i.sparse!==void 0){const m=pu.SCALAR,x=Ls[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new x(o[1],v,i.sparse.count*m),A=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new mt(g.array.slice(),g.itemSize,g.normalized));for(let S=0,R=M.length;S<R;S++){const b=M[S];if(g.setX(b,A[S*c]),c>=2&&g.setY(b,A[S*c+1]),c>=3&&g.setZ(b,A[S*c+2]),c>=4&&g.setW(b,A[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=sm[f.magFilter]||Rt,u.minFilter=sm[f.minFilter]||mi,u.wrapS=om[f.wrapS]||tr,u.wrapT=om[f.wrapT]||tr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(_){const g=new It(_);g.needsUpdate=!0,f(g)}),t.load(Qi.resolveURL(h,s.path),p,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||hC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Qc,Kt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new mn,Kt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){const h=i[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],rn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Tt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=On);const u=s.alphaMode||mu.OPAQUE;if(u===mu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===mu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Mn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new J(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Mn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Mn){const h=s.emissiveFactor;a.emissive=new _e().setRGB(h[0],h[1],h[2],rn)}return s.emissiveTexture!==void 0&&o!==Mn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),$i(h,s),t.associations.set(h,{materials:e}),s.extensions&&vr(i,h,s),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return am(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=uC(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=am(new Je,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?aC(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,p=u.length;d<p;d++){const _=u[d],g=o[d];let m;const x=l[d];if(g.mode===Gn.TRIANGLES||g.mode===Gn.TRIANGLE_STRIP||g.mode===Gn.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new Qh(_,x):new Et(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Gn.TRIANGLE_STRIP?m.geometry=im(m.geometry,kh):g.mode===Gn.TRIANGLE_FAN&&(m.geometry=im(m.geometry,Mc));else if(g.mode===Gn.LINES)m=new ei(_,x);else if(g.mode===Gn.LINE_STRIP)m=new Ni(_,x);else if(g.mode===Gn.LINE_LOOP)m=new ef(_,x);else if(g.mode===Gn.POINTS)m=new tf(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&lC(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),$i(m,s),g.extensions&&vr(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&vr(i,h[0],s),h[0];const f=new Wn;s.extensions&&vr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Vc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new ze;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jo(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],p=i.samplers[d.sampler],_=d.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],p=h[2],_=h[3],g=h[4],m=[];for(let x=0,v=f.length;x<v;x++){const y=f[x],M=d[x],A=p[x],S=_[x],R=g[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const b=n._createAnimationTracks(y,M,A,S,R);if(b)for(let w=0;w<b.length;w++)m.push(b[w])}return new ks(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,fC)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new jc:l.length>1?u=new Wn:l.length===1?u=l[0]:u=new ct,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),$i(u,s),s.extensions&&vr(n,u,s),s.matrix!==void 0){const h=new ze;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Wn;n.name&&(s.name=i.createUniqueName(n.name)),$i(s,n),n.extensions&&vr(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Kt||f instanceof It)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Xi[s.path]===Xi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Xi[s.path]){case Xi.weights:l=Wr;break;case Xi.rotation:l=nr;break;case Xi.position:case Xi.scale:l=Xr;break;default:switch(n.itemSize){case 1:l=Wr;break;case 2:case 3:default:l=Xr;break}break}const u=i.interpolation!==void 0?oC[i.interpolation]:Hr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+Xi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nr?sC:w0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pC(r,e,t){const n=e.attributes,i=new Yt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),a.normalized){const u=dh(Ls[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new T,c=new T;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=dh(Ls[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Zt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function am(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=fh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return pt.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),$i(r,e),pC(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cC(r,e.targets,t):r})}const Ot={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function A0(r){const e=await fetch(r);if(e.ok)return e.json();throw new Error(e.statusText)}async function mC(r){if(!r)throw new Error("No basePath supplied");return await A0(`${r}/profilesList.json`)}async function gC(r,e,t=null,n=!0){if(!r)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await mC(e);let s;if(r.profiles.some(c=>{const l=i[c];return l&&(s={profileId:c,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}),!!s}),!s){if(!t)throw new Error("No matching profile name found");const c=i[t];if(!c)throw new Error(`No matching profile name found and default profile "${t}" missing.`);s={profileId:t,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}}const o=await A0(s.profilePath);let a;if(n){let c;if(r.handedness==="any"?c=o.layouts[Object.keys(o.layouts)[0]]:c=o.layouts[r.handedness],!c)throw new Error(`No matching handedness, ${r.handedness}, in profile ${s.profileId}`);c.assetPath&&(a=s.profilePath.replace("profile.json",c.assetPath))}return{profile:o,assetPath:a}}const _C={xAxis:0,yAxis:0,button:0,state:Ot.ComponentState.DEFAULT};function vC(r=0,e=0){let t=r,n=e;if(Math.sqrt(r*r+e*e)>1){const o=Math.atan2(e,r);t=Math.cos(o),n=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class xC{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===Ot.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(_C)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:s,normalizedYAxis:o}=vC(e,t);switch(this.componentProperty){case Ot.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?s:.5;break;case Ot.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?o:.5;break;case Ot.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case Ot.ComponentProperty.STATE:this.valueNodeProperty===Ot.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class yC{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new xC(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:Ot.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=Ot.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=Ot.ComponentState.PRESSED:(t.touched||this.values.button>Ot.ButtonTouchThreshold)&&(this.values.state=Ot.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===Ot.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>Ot.AxisTouchThreshold&&(this.values.state=Ot.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===Ot.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>Ot.AxisTouchThreshold&&(this.values.state=Ot.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class bC{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const s=this.layoutDescription.components[i];this.components[i]=new yC(i,s)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const MC="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",SC="generic-trigger";class wC extends ct{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:s,maxNode:o,value:a,valueNodeProperty:c}=n;i&&(c===Ot.VisualResponseProperty.VISIBILITY?i.visible=a:c===Ot.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(s.quaternion,o.quaternion,a),i.position.lerpVectors(s.position,o.position,a)))})}))}}function AC(r,e){Object.values(r.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:s}=t;if(n===Ot.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const o=new Jr(.001),a=new Mn({color:255}),c=new Et(o,a);t.touchPointNode.add(c)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(s).forEach(o=>{const{valueNodeName:a,minNodeName:c,maxNodeName:l,valueNodeProperty:u}=o;if(u===Ot.VisualResponseProperty.TRANSFORM){if(o.minNode=e.getObjectByName(c),o.maxNode=e.getObjectByName(l),!o.minNode){console.warn(`Could not find ${c} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${l} in the model`);return}}o.valueNode=e.getObjectByName(a),o.valueNode||console.warn(`Could not find ${a} in the model`)})})}function cm(r,e){AC(r.motionController,e),r.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=r.envMap,t.material.needsUpdate=!0)}),r.add(e)}class EC{constructor(e=null){this.gltfLoader=e,this.path=MC,this._assetCache={},this.gltfLoader||(this.gltfLoader=new M0)}createControllerModel(e){const t=new wC;let n=null;return e.addEventListener("connected",i=>{const s=i.data;s.targetRayMode!=="tracked-pointer"||!s.gamepad||gC(s,this.path,SC).then(({profile:o,assetPath:a})=>{t.motionController=new bC(s,o,a);const c=this._assetCache[t.motionController.assetUrl];if(c)n=c.scene.clone(),cm(t,n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,l=>{this._assetCache[t.motionController.assetUrl]=l,n=l.scene.clone(),cm(t,n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}const E0=()=>{const{xr:r}=An().renderer;return()=>{var t,n;let e=!1;return(n=(t=r.getSession())==null?void 0:t.inputSources)==null||n.forEach(i=>{i.hand&&(e=!0)}),e}},TC=()=>{const r=new EC,e={left:Pf,right:Lf,none:x0},{xr:t}=An().renderer,n=E0(),i=[t.getController(0),t.getController(1)],s=new Map;i.forEach((o,a)=>{s.set(o,{targetRay:o,grip:t.getControllerGrip(a),model:r.createControllerModel(o)})}),Zr(()=>{const o=l=>{var h,f;if(n())return;const{data:u}=l;(f=(h=uh[u.handedness])==null?void 0:h.current)==null||f.call(h,l.type,l)};function a(l){const{model:u,targetRay:h,grip:f}=s.get(this),{data:d}=l;e[l.data.handedness].set({inputSource:d,targetRay:h,grip:f,model:u}),o(l)}const c=l=>{o(l),e[l.data.handedness].set(void 0)};for(const l of i)l.addEventListener("connected",a),l.addEventListener("disconnected",c),l.addEventListener("select",o),l.addEventListener("selectstart",o),l.addEventListener("selectend",o),l.addEventListener("squeeze",o),l.addEventListener("squeezestart",o),l.addEventListener("squeezeend",o);return()=>{for(const l of i)l.removeEventListener("connected",a),l.removeEventListener("disconnected",c),l.removeEventListener("select",o),l.removeEventListener("selectstart",o),l.removeEventListener("selectend",o),l.removeEventListener("squeeze",o),l.removeEventListener("squeezestart",o),l.removeEventListener("squeezeend",o);e.left.set(void 0),e.right.set(void 0),e.none.set(void 0)}})},lm=new ze,um=new T;class hm{constructor(e,t,n,i,s){this.controller=t,this.handModel=e,this.envMap=null;let o;!s||!s.primitive||s.primitive==="sphere"?o=new Jr(1,10,10):s.primitive==="box"&&(o=new Fi(1,1,1));const a=new Qr;this.handMesh=new Jc(o,a,30),this.handMesh.frustumCulled=!1,this.handMesh.instanceMatrix.setUsage(Jg),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const t=this.controller.joints;let n=0;for(let i=0;i<this.joints.length;i++){const s=t[this.joints[i]];s.visible&&(um.setScalar(s.jointRadius||.008),lm.compose(s.position,s.quaternion,um),this.handMesh.setMatrixAt(i,lm),n++)}this.handMesh.count=n,this.handMesh.instanceMatrix.needsUpdate=!0}}const CC="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class RC{constructor(e,t,n,i,s=null){this.controller=t,this.handModel=e,this.bones=[],s===null&&(s=new M0,s.setPath(n||CC)),s.load(`${i}.glb`,o=>{const a=o.scene.children[0];this.handModel.add(a);const c=a.getObjectByProperty("type","SkinnedMesh");c.frustumCulled=!1,c.castShadow=!0,c.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(u=>{const h=a.getObjectByName(u);h!==void 0?h.jointName=u:console.warn(`Couldn't find ${u} in ${i} hand mesh`),this.bones.push(h)})})}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const n=this.bones[t];if(n){const i=e[n.jointName];if(i.visible){const s=i.position;n.position.copy(s),n.quaternion.copy(i.quaternion)}}}}}class PC extends ct{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class LC{constructor(){this.path=null}setPath(e){return this.path=e,this}createHandModel(e,t){const n=new PC(e);return e.addEventListener("connected",i=>{const s=i.data;s.hand&&!n.motionController&&(n.xrInputSource=s,t===void 0||t==="spheres"?n.motionController=new hm(n,e,this.path,s.handedness,{primitive:"sphere"}):t==="boxes"?n.motionController=new hm(n,e,this.path,s.handedness,{primitive:"box"}):t==="mesh"&&(n.motionController=new RC(n,e,this.path,s.handedness))),e.visible=!0}),e.addEventListener("disconnected",()=>{e.visible=!1}),n}}const IC=()=>{const r=new LC,e={left:y0,right:b0},{xr:t}=An().renderer,n=E0(),i=[t.getHand(0),t.getHand(1)],s=new Map;i.forEach((o,a)=>{s.set(o,{hand:o,targetRay:t.getController(a),model:r.createHandModel(o,"mesh")})}),Zr(()=>{const o=l=>{var f,d;if(!n())return;const u=l,h="handedness"in u?u.handedness:u.data.handedness;(d=(f=l0[h])==null?void 0:f.current)==null||d.call(f,l.type,l)};function a(l){const u=this,{model:h,targetRay:f}=s.get(this),{data:d}=l,{handedness:p,hand:_}=d;e[p].set({hand:u,model:h,inputSource:_,targetRay:f}),o(l)}const c=l=>{o(l),e[l.data.handedness].set(void 0)};for(const l of i)l.addEventListener("connected",a),l.addEventListener("disconnected",c),l.addEventListener("pinchstart",o),l.addEventListener("pinchend",o);return()=>{for(const l of i)l.removeEventListener("connected",a),l.removeEventListener("disconnected",c),l.removeEventListener("pinchstart",o),l.removeEventListener("pinchend",o);e.left.set(void 0),e.right.set(void 0)}})},DC=r=>({}),fm=r=>({});function NC(r){let e;const t=r[7].fallback,n=yt(t,r,r[6],fm);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&64)&&bt(n,t,i,i[6],e?St(t,i[6],s,DC):Mt(i[6]),fm)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function UC(r){let e;const t=r[7].default,n=yt(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&64)&&bt(n,t,i,i[6],e?St(t,i[6],s,null):Mt(i[6]),null)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function OC(r){let e,t,n,i;const s=[UC,NC],o=[];function a(c,l){return c[0]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=gt()},l(c){t.l(c),n=gt()},m(c,l){o[e].m(c,l),Oe(c,n,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(kt(),$(o[u],1,1,()=>{o[u]=null}),zt(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),H(t,1),t.m(n.parentNode,n))},i(c){i||(H(t),i=!0)},o(c){$(t),i=!1},d(c){c&&De(n),o[e].d(c)}}}function FC(r,e,t){let n,i,s,o,a,c;ut(r,lh,b=>t(9,n=b)),ut(r,Nr,b=>t(10,i=b)),ut(r,Li,b=>t(11,s=b)),ut(r,Uo,b=>t(12,o=b)),ut(r,ho,b=>t(0,c=b));let{$$slots:l={},$$scope:u}=e,{foveation:h=1}=e,{frameRate:f=void 0}=e,{referenceSpace:d="local-floor"}=e;const p=ea(),{renderer:_,renderMode:g}=An();ut(r,g,b=>t(13,a=b));const{xr:m}=_;let x=a;UT(),NT(),TC(),IC();const v=()=>{ho.set(!0),p("sessionstart",{type:"sessionstart",target:s})},y=()=>{p("sessionend",{type:"sessionend",target:s}),ho.set(!1),Li.set(void 0)},M=b=>{p("visibilitychange",{...b,target:s})},A=b=>{oa(Uo,o=Object.values(b.session.inputSources).some(w=>w.hand),o),p("inputsourceschange",{...b,target:s})},S=b=>{p("visibilitychange",{...b,target:s})},R=b=>{if(b!==void 0)try{s==null||s.updateTargetFrameRate(b)}catch{}};return yn(Li,b=>{if(b!==void 0)return b.addEventListener("visibilitychange",M),b.addEventListener("inputsourceschange",A),b.addEventListener("frameratechange",S),m.setFoveation(h),R(f),()=>{b.removeEventListener("visibilitychange",M),b.removeEventListener("inputsourceschange",A),b.removeEventListener("frameratechange",S)}}),yn(ho,b=>{b?(x=g.current,g.set("always")):g.set(x)}),Zr(()=>(oa(Nr,i=m,i),t(5,m.enabled=!0,m),m.addEventListener("sessionstart",v),m.addEventListener("sessionend",y),()=>{oa(Nr,i=void 0,i),t(5,m.enabled=!1,m),m.removeEventListener("sessionstart",v),m.removeEventListener("sessionend",y)})),r.$$set=b=>{"foveation"in b&&t(2,h=b.foveation),"frameRate"in b&&t(3,f=b.frameRate),"referenceSpace"in b&&t(4,d=b.referenceSpace),"$$scope"in b&&t(6,u=b.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&R(f),r.$$.dirty&36&&m.setFoveation(h),r.$$.dirty&48&&(m.setReferenceSpaceType(d),oa(lh,n=d,n))},[c,g,h,f,d,m,u,l]}class BC extends Vt{constructor(e){super(),Gt(this,e,FC,OC,Ht,{foveation:2,frameRate:3,referenceSpace:4})}}Tc("left"),Tc("right");new T;Tc("left"),Tc("right");new T;new T;new T;new T;const kC={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},zC={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`},xr=r=>{let e=!1;const t=pn(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}},HC=r=>({ref:r[1]&1024}),dm=r=>({ref:r[41]});function VC(r){let e,t,n,i,s;e=new tt.Mesh({props:{"scale.y":-1,"rotation.x":-Math.PI/2,material:r[10],geometry:r[0]}}),n=new tt({props:{is:r[9],manual:!0}});const o=r[27].default,a=yt(o,r,r[29],dm);return{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment),i=ht(),a&&a.c()},l(c){Ee(e.$$.fragment,c),t=ft(c),Ee(n.$$.fragment,c),i=ft(c),a&&a.l(c)},m(c,l){Te(e,c,l),Oe(c,t,l),Te(n,c,l),Oe(c,i,l),a&&a.m(c,l),s=!0},p(c,l){const u={};l[0]&1&&(u.geometry=c[0]),e.$set(u),a&&a.p&&(!s||l[0]&536870912|l[1]&1024)&&bt(a,o,c,c[29],s?St(o,c[29],l,HC):Mt(c[29]),dm)},i(c){s||(H(e.$$.fragment,c),H(n.$$.fragment,c),H(a,c),s=!0)},o(c){$(e.$$.fragment,c),$(n.$$.fragment,c),$(a,c),s=!1},d(c){c&&(De(t),De(i)),Ce(e,c),Ce(n,c),a&&a.d(c)}}}function GC(r){let e,t;return e=new tt.Group({props:{"rotation.x":Math.PI/2,$$slots:{default:[VC]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i[0]&536870913|i[1]&1024&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function WC(r){let e,t;const n=[r[12]];let i={$$slots:{default:[GC,({ref:s})=>({41:s}),({ref:s})=>[0,s?1024:0]]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=ln(i,n[s]);return e=new tt.Group({props:i}),r[28](e),{c(){Ae(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){Te(e,s,o),t=!0},p(s,o){const a=o[0]&4096?Wo(n,[Uc(s[12])]):{};o[0]&536870913|o[1]&1024&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){r[28](null),Ce(e,s)}}}function XC(r,e,t){const n=["opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","refresh"];let i=Xn(e,n),s,o,a,c,l,u,h,f,{$$slots:d={},$$scope:p}=e,{opacity:_=1}=e,{width:g=1}=e,{height:m=1}=e,{blur:x=1}=e,{far:v=10}=e,{smooth:y=!0}=e,{resolution:M=512}=e,{frames:A=1/0}=e,{scale:S=10}=e,{color:R="#000000"}=e,{depthWrite:b=!1}=e;const{scene:w,renderer:U}=An(),k=xr(()=>g*(Array.isArray(S)?S[0]:S||1));ut(r,k,ne=>t(26,h=ne));const W=xr(()=>m*(Array.isArray(S)?S[1]:S||1));ut(r,W,ne=>t(25,u=ne));const N=xr(()=>{const ne=new kn(M,M);return ne.texture.generateMipmaps=!1,ne.texture.colorSpace=U.outputColorSpace,ne});ut(r,N,ne=>t(36,c=ne));const P=xr(()=>{const ne=new kn(M,M);return ne.texture.generateMipmaps=!1,ne});ut(r,P,ne=>t(35,a=ne));const O=xr(()=>new Xs(h,u).rotateX(Math.PI/2));ut(r,O,ne=>t(0,o=ne));const G=xr(()=>new Et(o));ut(r,G,ne=>t(37,l=ne));const oe=xr(()=>{const ne=new Yc({depthTest:!1,depthWrite:!1});return ne.onBeforeCompile=ye=>{ye.uniforms={...ye.uniforms,uColor:{value:new _e(R).convertSRGBToLinear()}},ye.fragmentShader=`uniform vec3 uColor;
`+ye.fragmentShader,ye.fragmentShader=ye.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),ye.fragmentShader=ye.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},ne});ut(r,oe,ne=>t(34,s=ne));const Q=new zn({...kC,depthTest:!1}),j=new zn({...zC,depthTest:!1}),z=new jr(-h/2,h/2,u/2,-u/2,0,v);z.updateProjectionMatrix();const xe=new Mn({map:c.texture,transparent:!0,opacity:_,depthWrite:b}),K=ne=>{const ye=l;ye.visible=!0,ye.material=Q,Q.uniforms.tDiffuse.value=c.texture,Q.uniforms.h.value=ne*1/256,U.setRenderTarget(a),U.render(ye,z),ye.material=j,j.uniforms.tDiffuse.value=a.texture,j.uniforms.v.value=ne*1/256,U.setRenderTarget(c),U.render(ye,z),ye.visible=!1},re=()=>{const ne=w.background;w.background=null;const ye=w.overrideMaterial;w.overrideMaterial=s;const He=U.getClearAlpha();U.setClearAlpha(0),U.setRenderTarget(c),U.render(w,z),w.overrideMaterial=ye,K(x),y&&K(x*.4),U.setRenderTarget(null),w.background=ne,U.setClearAlpha(He)},Y=()=>{re()};let Pe=0;Ui(()=>{(A===1/0||Pe<A)&&(re(),Pe+=1)}),In(()=>{c.dispose(),a.dispose(),o.dispose(),s.dispose(),Q.dispose(),j.dispose(),xe.dispose()});const Me=Ef();ut(r,Me,ne=>t(1,f=ne));function Ge(ne){Vs[ne?"unshift":"push"](()=>{f=ne,Me.set(f)})}return r.$$set=ne=>{e=ln(ln({},e),Fr(ne)),t(12,i=Xn(e,n)),"opacity"in ne&&t(13,_=ne.opacity),"width"in ne&&t(14,g=ne.width),"height"in ne&&t(15,m=ne.height),"blur"in ne&&t(16,x=ne.blur),"far"in ne&&t(17,v=ne.far),"smooth"in ne&&t(18,y=ne.smooth),"resolution"in ne&&t(19,M=ne.resolution),"frames"in ne&&t(20,A=ne.frames),"scale"in ne&&t(21,S=ne.scale),"color"in ne&&t(22,R=ne.color),"depthWrite"in ne&&t(23,b=ne.depthWrite),"$$scope"in ne&&t(29,p=ne.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2113536&&k.memoize([g,S]),r.$$.dirty[0]&2129920&&W.memoize(m,S),r.$$.dirty[0]&524288&&N.memoize(M),r.$$.dirty[0]&524288&&P.memoize(M),r.$$.dirty[0]&100663296&&O.memoize(h,u),r.$$.dirty[0]&1&&G.memoize(o),r.$$.dirty[0]&4194304&&oe.memoize(R)},[o,f,k,W,N,P,O,G,oe,z,xe,Me,i,_,g,m,x,v,y,M,A,S,R,b,Y,u,h,d,Ge,p]}class qC extends Vt{constructor(e){super(),Gt(this,e,XC,WC,Ht,{opacity:13,width:14,height:15,blur:16,far:17,smooth:18,resolution:19,frames:20,scale:21,color:22,depthWrite:23,refresh:24},null,[-1,-1])}get refresh(){return this.$$.ctx[24]}}const $C=Number.parseInt(Gs.replace("dev","")),YC=`
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
`,ZC=`
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
		#include <${$C<154?"encodings_fragment":"colorspace_fragment"}>
	}
`,KC=r=>({ref:r[0]&1}),pm=r=>({ref:r[0]});function jC(r){let e,t;return e=new tt.PlaneGeometry({props:{args:typeof r[1]=="number"?[r[1],r[1]]:r[1]}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i[0]&2&&(s.args=typeof n[1]=="number"?[n[1],n[1]]:n[1]),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function JC(r){let e,t,n;e=new tt.ShaderMaterial({props:{fragmentShader:ZC,vertexShader:YC,uniforms:r[3],transparent:!0,side:r[2]}});const i=r[25].default,s=yt(i,r,r[28],pm),o=s||jC(r);return{c(){Ae(e.$$.fragment),t=ht(),o&&o.c()},l(a){Ee(e.$$.fragment,a),t=ft(a),o&&o.l(a)},m(a,c){Te(e,a,c),Oe(a,t,c),o&&o.m(a,c),n=!0},p(a,c){const l={};c[0]&8&&(l.uniforms=a[3]),c[0]&4&&(l.side=a[2]),e.$set(l),s?s.p&&(!n||c[0]&268435457)&&bt(s,i,a,a[28],n?St(i,a[28],c,KC):Mt(a[28]),pm):o&&o.p&&(!n||c[0]&2)&&o.p(a,n?c:[-1,-1])},i(a){n||(H(e.$$.fragment,a),H(o,a),n=!0)},o(a){$(e.$$.fragment,a),$(o,a),n=!1},d(a){a&&De(t),Ce(e,a),o&&o.d(a)}}}function QC(r){let e,t,n;const i=[{frustumCulled:!1},r[6]];function s(a){r[27](a)}let o={$$slots:{default:[JC,({ref:a})=>({0:a}),({ref:a})=>[a?1:0]]},$$scope:{ctx:r}};for(let a=0;a<i.length;a+=1)o=ln(o,i[a]);return r[0]!==void 0&&(o.ref=r[0]),e=new tt.Mesh({props:o}),r[26](e),Vs.push(()=>$m(e,"ref",s)),{c(){Ae(e.$$.fragment)},l(a){Ee(e.$$.fragment,a)},m(a,c){Te(e,a,c),n=!0},p(a,c){const l=c[0]&64?Wo(i,[i[0],Uc(a[6])]):{};c[0]&268435471&&(l.$$scope={dirty:c,ctx:a}),!t&&c[0]&1&&(t=!0,l.ref=a[0],qm(()=>t=!1)),e.$set(l)},i(a){n||(H(e.$$.fragment,a),n=!0)},o(a){$(e.$$.fragment,a),n=!1},d(a){r[26](null),Ce(e,a)}}}function eR(r,e,t){const n=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","side","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let i=Xn(e,n),s,{$$slots:o={},$$scope:a}=e,{cellColor:c="#000000"}=e,{sectionColor:l="#0000ee"}=e,{cellSize:u=1}=e,{backgroundColor:h="#dadada"}=e,{backgroundOpacity:f=0}=e,{sectionSize:d=10}=e,{plane:p="xz"}=e,{gridSize:_=[20,20]}=e,{followCamera:g=!1}=e,{infiniteGrid:m=!1}=e,{fadeDistance:x=100}=e,{fadeStrength:v=1}=e,{cellThickness:y=1}=e,{sectionThickness:M=2}=e,{side:A=On}=e,{type:S="grid"}=e,{axis:R="x"}=e,{maxRadius:b=0}=e,{cellDividers:w=6}=e,{sectionDividers:U=2}=e,{ref:k}=e;const{invalidate:W,camera:N}=An(),P=new li,O=new T(0,1,0),G=new T(0,0,0),oe={x:0,y:1,z:2},Q={xz:"xzy",xy:"xyz",zy:"zyx"},j={grid:0,lines:1,circular:2,polar:3},z={cellSize:{value:u},sectionSize:{value:d},cellColor:{value:new _e(c)},sectionColor:{value:new _e(l)},backgroundColor:{value:new _e(h)},backgroundOpacity:{value:f},fadeDistance:{value:x},fadeStrength:{value:v},cellThickness:{value:y},sectionThickness:{value:M},infiniteGrid:{value:m},followCamera:{value:g},coord0:{value:0},coord1:{value:2},coord2:{value:1},gridType:{value:j.grid},lineGridCoord:{value:oe[R]},circleGridMaxRadius:{value:b},polarCellDividers:{value:w},polarSectionDividers:{value:U},worldCamProjPosition:{value:new T},worldPlanePosition:{value:new T}};Ui(()=>{P.setFromNormalAndCoplanarPoint(O,G).applyMatrix4(k.matrixWorld);const Y=k.material,Pe=Y.uniforms.worldCamProjPosition,Me=Y.uniforms.worldPlanePosition;P.projectPoint(N.current.position,Pe.value),Me.value.set(0,0,0).applyMatrix4(k.matrixWorld),W()});const xe=Ef();ut(r,xe,Y=>t(4,s=Y));function K(Y){Vs[Y?"unshift":"push"](()=>{s=Y,xe.set(s)})}function re(Y){k=Y,t(0,k)}return r.$$set=Y=>{e=ln(ln({},e),Fr(Y)),t(6,i=Xn(e,n)),"cellColor"in Y&&t(7,c=Y.cellColor),"sectionColor"in Y&&t(8,l=Y.sectionColor),"cellSize"in Y&&t(9,u=Y.cellSize),"backgroundColor"in Y&&t(10,h=Y.backgroundColor),"backgroundOpacity"in Y&&t(11,f=Y.backgroundOpacity),"sectionSize"in Y&&t(12,d=Y.sectionSize),"plane"in Y&&t(13,p=Y.plane),"gridSize"in Y&&t(1,_=Y.gridSize),"followCamera"in Y&&t(14,g=Y.followCamera),"infiniteGrid"in Y&&t(15,m=Y.infiniteGrid),"fadeDistance"in Y&&t(16,x=Y.fadeDistance),"fadeStrength"in Y&&t(17,v=Y.fadeStrength),"cellThickness"in Y&&t(18,y=Y.cellThickness),"sectionThickness"in Y&&t(19,M=Y.sectionThickness),"side"in Y&&t(2,A=Y.side),"type"in Y&&t(20,S=Y.type),"axis"in Y&&t(21,R=Y.axis),"maxRadius"in Y&&t(22,b=Y.maxRadius),"cellDividers"in Y&&t(23,w=Y.cellDividers),"sectionDividers"in Y&&t(24,U=Y.sectionDividers),"ref"in Y&&t(0,k=Y.ref),"$$scope"in Y&&t(28,a=Y.$$scope)},r.$$.update=()=>{if(r.$$.dirty[0]&8192){const Y=Q[p],Pe=Y.charAt(0),Me=Y.charAt(1),Ge=Y.charAt(2);t(3,z.coord0.value=oe[Pe],z),t(3,z.coord1.value=oe[Me],z),t(3,z.coord2.value=oe[Ge],z)}if(r.$$.dirty[0]&512&&t(3,z.cellSize.value=u,z),r.$$.dirty[0]&4096&&t(3,z.sectionSize.value=d,z),r.$$.dirty[0]&2048&&t(3,z.backgroundOpacity.value=f,z),r.$$.dirty[0]&65536&&t(3,z.fadeDistance.value=x,z),r.$$.dirty[0]&131072&&t(3,z.fadeStrength.value=v,z),r.$$.dirty[0]&262144&&t(3,z.cellThickness.value=y,z),r.$$.dirty[0]&524288&&t(3,z.sectionThickness.value=M,z),r.$$.dirty[0]&16384&&t(3,z.followCamera.value=g,z),r.$$.dirty[0]&32768&&t(3,z.infiniteGrid.value=m,z),r.$$.dirty[0]&32505856){switch(S){case"grid":{t(3,z.gridType.value=j.grid,z);break}case"lines":{t(3,z.gridType.value=j.lines,z),t(3,z.lineGridCoord.value=oe[R],z);break}case"circular":{t(3,z.gridType.value=j.circular,z),t(3,z.circleGridMaxRadius.value=b,z);break}case"polar":{t(3,z.gridType.value=j.polar,z),t(3,z.circleGridMaxRadius.value=b,z),t(3,z.polarCellDividers.value=w,z),t(3,z.polarSectionDividers.value=U,z);break}}W()}r.$$.dirty[0]&136&&z.cellColor.value.set(c),r.$$.dirty[0]&264&&z.sectionColor.value.set(l),r.$$.dirty[0]&1032&&z.backgroundColor.value.set(h)},[k,_,A,z,s,xe,i,c,l,u,h,f,d,p,g,m,x,v,y,M,S,R,b,w,U,o,K,re,a]}class tR extends Vt{constructor(e){super(),Gt(this,e,eR,QC,Ht,{cellColor:7,sectionColor:8,cellSize:9,backgroundColor:10,backgroundOpacity:11,sectionSize:12,plane:13,gridSize:1,followCamera:14,infiniteGrid:15,fadeDistance:16,fadeStrength:17,cellThickness:18,sectionThickness:19,side:2,type:20,axis:21,maxRadius:22,cellDividers:23,sectionDividers:24,ref:0},null,[-1,-1])}}const nR=()=>sE("threlte-controls",{orbitControls:pn(void 0),trackballControls:pn(void 0)}),mm={type:"change"},_u={type:"start"},gm={type:"end"},ic=new Kr,_m=new li,iR=Math.cos(70*Vc.DEG2RAD);let rR=class extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",E),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(mm),n.update(),s=i.NONE},this.update=function(){const D=new T,pe=new nn().setFromUnitVectors(e.up,new T(0,1,0)),ie=pe.clone().invert(),$e=new T,Be=new nn,We=new T,Ne=2*Math.PI;return function(it=null){const F=n.object.position;D.copy(F).sub(n.target),D.applyQuaternion(pe),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&U(b(it)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ve=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(ve)&&isFinite(ce)&&(ve<-Math.PI?ve+=Ne:ve>Math.PI&&(ve-=Ne),ce<-Math.PI?ce+=Ne:ce>Math.PI&&(ce-=Ne),ve<=ce?a.theta=Math.max(ve,Math.min(ce,a.theta)):a.theta=a.theta>(ve+ce)/2?Math.max(ve,a.theta):Math.min(ce,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=Q(a.radius):a.radius=Q(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(ie),F.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ee=!1;if(n.zoomToCursor&&A){let he=null;if(n.object.isPerspectiveCamera){const Ve=D.length();he=Q(Ve*l);const rt=Ve-he;n.object.position.addScaledVector(y,rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ve=new T(M.x,M.y,0);Ve.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ee=!0;const rt=new T(M.x,M.y,0);rt.unproject(n.object),n.object.position.sub(rt).add(Ve),n.object.updateMatrixWorld(),he=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(he).add(n.object.position):(ic.origin.copy(n.object.position),ic.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ic.direction))<iR?e.lookAt(n.target):(_m.setFromNormalAndCoplanarPoint(n.object.up,n.target),ic.intersectPlane(_m,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ee=!0);return l=1,A=!1,ee||$e.distanceToSquared(n.object.position)>o||8*(1-Be.dot(n.object.quaternion))>o||We.distanceToSquared(n.target)>0?(n.dispatchEvent(mm),$e.copy(n.object.position),Be.copy(n.object.quaternion),We.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ae),n.domElement.removeEventListener("pointerdown",Se),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ch,c=new ch;let l=1;const u=new T,h=new J,f=new J,d=new J,p=new J,_=new J,g=new J,m=new J,x=new J,v=new J,y=new T,M=new J;let A=!1;const S=[],R={};function b(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function U(D){c.theta-=D}function k(D){c.phi-=D}const W=function(){const D=new T;return function(ie,$e){D.setFromMatrixColumn($e,0),D.multiplyScalar(-ie),u.add(D)}}(),N=function(){const D=new T;return function(ie,$e){n.screenSpacePanning===!0?D.setFromMatrixColumn($e,1):(D.setFromMatrixColumn($e,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ie),u.add(D)}}(),P=function(){const D=new T;return function(ie,$e){const Be=n.domElement;if(n.object.isPerspectiveCamera){const We=n.object.position;D.copy(We).sub(n.target);let Ne=D.length();Ne*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ie*Ne/Be.clientHeight,n.object.matrix),N(2*$e*Ne/Be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ie*(n.object.right-n.object.left)/n.object.zoom/Be.clientWidth,n.object.matrix),N($e*(n.object.top-n.object.bottom)/n.object.zoom/Be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(D){if(!n.zoomToCursor)return;A=!0;const pe=n.domElement.getBoundingClientRect(),ie=D.clientX-pe.left,$e=D.clientY-pe.top,Be=pe.width,We=pe.height;M.x=ie/Be*2-1,M.y=-($e/We)*2+1,y.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function j(D){h.set(D.clientX,D.clientY)}function z(D){oe(D),m.set(D.clientX,D.clientY)}function xe(D){p.set(D.clientX,D.clientY)}function K(D){f.set(D.clientX,D.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;U(2*Math.PI*d.x/pe.clientHeight),k(2*Math.PI*d.y/pe.clientHeight),h.copy(f),n.update()}function re(D){x.set(D.clientX,D.clientY),v.subVectors(x,m),v.y>0?O(w()):v.y<0&&G(w()),m.copy(x),n.update()}function Y(D){_.set(D.clientX,D.clientY),g.subVectors(_,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(_),n.update()}function Pe(D){oe(D),D.deltaY<0?G(w()):D.deltaY>0&&O(w()),n.update()}function Me(D){let pe=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),pe=!0;break}pe&&(D.preventDefault(),n.update())}function Ge(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),pe=.5*(S[0].pageY+S[1].pageY);h.set(D,pe)}}function ne(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),pe=.5*(S[0].pageY+S[1].pageY);p.set(D,pe)}}function ye(){const D=S[0].pageX-S[1].pageX,pe=S[0].pageY-S[1].pageY,ie=Math.sqrt(D*D+pe*pe);m.set(0,ie)}function He(){n.enableZoom&&ye(),n.enablePan&&ne()}function I(){n.enableZoom&&ye(),n.enableRotate&&Ge()}function me(D){if(S.length==1)f.set(D.pageX,D.pageY);else{const ie=be(D),$e=.5*(D.pageX+ie.x),Be=.5*(D.pageY+ie.y);f.set($e,Be)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;U(2*Math.PI*d.x/pe.clientHeight),k(2*Math.PI*d.y/pe.clientHeight),h.copy(f)}function te(D){if(S.length===1)_.set(D.pageX,D.pageY);else{const pe=be(D),ie=.5*(D.pageX+pe.x),$e=.5*(D.pageY+pe.y);_.set(ie,$e)}g.subVectors(_,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(_)}function fe(D){const pe=be(D),ie=D.pageX-pe.x,$e=D.pageY-pe.y,Be=Math.sqrt(ie*ie+$e*$e);x.set(0,Be),v.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),O(v.y),m.copy(x)}function se(D){n.enableZoom&&fe(D),n.enablePan&&te(D)}function Fe(D){n.enableZoom&&fe(D),n.enableRotate&&me(D)}function Se(D){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",we),n.domElement.addEventListener("pointerup",qe)),ue(D),D.pointerType==="touch"?V(D):ot(D))}function we(D){n.enabled!==!1&&(D.pointerType==="touch"?le(D):wt(D))}function qe(D){Ue(D),S.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(gm),s=i.NONE}function ot(D){let pe;switch(D.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case yr.DOLLY:if(n.enableZoom===!1)return;z(D),s=i.DOLLY;break;case yr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;xe(D),s=i.PAN}else{if(n.enableRotate===!1)return;j(D),s=i.ROTATE}break;case yr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;j(D),s=i.ROTATE}else{if(n.enablePan===!1)return;xe(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_u)}function wt(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(D);break;case i.DOLLY:if(n.enableZoom===!1)return;re(D);break;case i.PAN:if(n.enablePan===!1)return;Y(D);break}}function L(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(_u),Pe(D),n.dispatchEvent(gm))}function E(D){n.enabled===!1||n.enablePan===!1||Me(D)}function V(D){switch(de(D),S.length){case 1:switch(n.touches.ONE){case br.ROTATE:if(n.enableRotate===!1)return;Ge(),s=i.TOUCH_ROTATE;break;case br.PAN:if(n.enablePan===!1)return;ne(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case br.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(),s=i.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_u)}function le(D){switch(de(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;te(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(D),n.update();break;default:s=i.NONE}}function ae(D){n.enabled!==!1&&D.preventDefault()}function ue(D){S.push(D)}function Ue(D){delete R[D.pointerId];for(let pe=0;pe<S.length;pe++)if(S[pe].pointerId==D.pointerId){S.splice(pe,1);return}}function de(D){let pe=R[D.pointerId];pe===void 0&&(pe=new J,R[D.pointerId]=pe),pe.set(D.pageX,D.pageY)}function be(D){const pe=D.pointerId===S[0].pointerId?S[1]:S[0];return R[pe.pointerId]}n.domElement.addEventListener("contextmenu",ae),n.domElement.addEventListener("pointerdown",Se),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}};const sR=r=>({ref:r&1}),vm=r=>({ref:r[0]});function oR(r){let e;const t=r[6].default,n=yt(t,r,r[8],vm);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&257)&&bt(n,t,i,i[8],e?St(t,i[8],s,sR):Mt(i[8]),vm)},i(i){e||(H(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function aR(r){let e,t;const n=[{is:r[0]},r[5]];let i={$$slots:{default:[oR,({ref:s})=>({0:s}),({ref:s})=>s?1:0]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=ln(i,n[s]);return e=new tt({props:i}),r[7](e),e.$on("change",r[3]),{c(){Ae(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){Te(e,s,o),t=!0},p(s,[o]){const a=o&33?Wo(n,[o&1&&{is:s[0]},o&32&&Uc(s[5])]):{};o&257&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){r[7](null),Ce(e,s)}}}function cR(r,e,t){const n=["ref"];let i=Xn(e,n),s,o,{$$slots:a={},$$scope:c}=e;const l=Af();ut(r,l,v=>t(9,s=v));const u=v=>v.isCamera,{renderer:h,invalidate:f}=An();if(!u(s))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const d=new rR(s,h.domElement),{start:p,stop:_}=Ui(()=>d.update(),{autoStart:!1,autoInvalidate:!1}),g=Ef();ut(r,g,v=>t(1,o=v));const{orbitControls:m}=nR();m.set(d),In(()=>m.set(void 0));function x(v){Vs[v?"unshift":"push"](()=>{o=v,g.set(o)})}return r.$$set=v=>{e=ln(ln({},e),Fr(v)),t(5,i=Xn(e,n)),"$$scope"in v&&t(8,c=v.$$scope)},r.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[d,o,l,f,g,i,a,x,c]}class lR extends Vt{constructor(e){super(),Gt(this,e,cR,aR,Ht,{ref:0})}get ref(){return this.$$.ctx[0]}}new ze;new ze;new Et;`${Xe.logdepthbuf_pars_vertex}${Xe.fog_pars_vertex}${Xe.logdepthbuf_vertex}${Xe.fog_vertex}`;`${Xe.tonemapping_fragment}${Xe.colorspace_fragment}`;`${Xe.tonemapping_fragment}${Xe.colorspace_fragment}`;const uR=`

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
`,hR=`

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
`,fR=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,dR=fR,pR=`
	${uR}
	${hR}
`;`${dR}${pR}${Xe.tonemapping_fragment}${Xe.colorspace_fragment}`;for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new jr(-1,1,1,-1,0,1);class mR extends Je{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}new mR;var T0={exports:{}};T0.exports=vl;T0.exports.default=vl;function vl(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=C0(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,u,h,f,d;if(n&&(s=yR(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(var p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Oo(s,o,t,a,c,d,0),o}function C0(r,e,t,n,i){var s,o;if(i===gh(r,e,t,n)>0)for(s=e;s<t;s+=n)o=xm(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=xm(s,r[s],r[s+1],o);return o&&xl(o,o.next)&&(Bo(o),o=o.next),o}function $r(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(xl(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oo(r,e,t,n,i,s,o){if(r){!o&&s&&AR(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?_R(r,n,i,s):gR(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Bo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=vR($r(r),e,t),Oo(r,e,t,n,i,s,2)):o===2&&xR(r,e,t,n,i,s):Oo($r(r),e,t,n,i,s,1);break}}}}function gR(r){var e=r.prev,t=r,n=r.next;if(Lt(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ts(i,a,s,c,o,l,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _R(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Lt(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,m=ph(d,p,e,t,n),x=ph(_,g,e,t,n),v=r.prevZ,y=r.nextZ;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Ts(a,u,c,h,l,f,v.x,v.y)&&Lt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Ts(a,u,c,h,l,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Ts(a,u,c,h,l,f,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Ts(a,u,c,h,l,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function vR(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!xl(i,s)&&R0(i,n,n.next,s)&&Fo(i,s)&&Fo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Bo(n),Bo(n.next),n=r=s),n=n.next}while(n!==r);return $r(n)}function xR(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&CR(o,a)){var c=P0(o,a);o=$r(o,o.next),c=$r(c,c.next),Oo(o,e,t,n,i,s,0),Oo(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function yR(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=C0(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(TR(l));for(i.sort(bR),s=0;s<i.length;s++)t=MR(i[s],t);return t}function bR(r,e){return r.x-e.x}function MR(r,e){var t=SR(r,e);if(!t)return e;var n=P0(t,r);return $r(n,n.next),$r(t,t.next)}function SR(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ts(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),Fo(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&wR(o,t)))&&(o=t,h=f)),t=t.next;while(t!==c);return o}function wR(r,e){return Lt(r.prev,r,e.prev)<0&&Lt(e.next,r,r.next)<0}function AR(r,e,t,n){var i=r;do i.z===0&&(i.z=ph(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,ER(i)}function ER(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function ph(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function TR(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ts(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function CR(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!RR(r,e)&&(Fo(r,e)&&Fo(e,r)&&PR(r,e)&&(Lt(r.prev,r,e.prev)||Lt(r,e.prev,e))||xl(r,e)&&Lt(r.prev,r,r.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function xl(r,e){return r.x===e.x&&r.y===e.y}function R0(r,e,t,n){var i=sc(Lt(r,e,t)),s=sc(Lt(r,e,n)),o=sc(Lt(t,n,r)),a=sc(Lt(t,n,e));return!!(i!==s&&o!==a||i===0&&rc(r,t,e)||s===0&&rc(r,n,e)||o===0&&rc(t,r,n)||a===0&&rc(t,e,n))}function rc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function sc(r){return r>0?1:r<0?-1:0}function RR(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&R0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Fo(r,e){return Lt(r.prev,r,r.next)<0?Lt(r,e,r.next)>=0&&Lt(r,r.prev,e)>=0:Lt(r,e,r.prev)<0||Lt(r,r.next,e)<0}function PR(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function P0(r,e){var t=new mh(r.i,r.x,r.y),n=new mh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function xm(r,e,t,n){var i=new mh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}vl.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(gh(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:r.length;o-=Math.abs(gh(r,l,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;h+=Math.abs((r[f]-r[p])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[p+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function gh(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}vl.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new J;new J;var ym;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(ym||(ym={}));function bm(r,e,t){r=+r,e=+e,t=(i=arguments.length)<2?(e=r,r=0,1):i<3?1:+t;for(var n=-1,i=Math.max(0,Math.ceil((e-r)/t))|0,s=new Array(i);++n<i;)s[n]=r+n*t;return s}var LR={value:()=>{}};function L0(){for(var r=0,e=arguments.length,t={},n;r<e;++r){if(!(n=arguments[r]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new gc(t)}function gc(r){this._=r}function IR(r,e){return r.trim().split(/^|\s+/).map(function(t){var n="",i=t.indexOf(".");if(i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}gc.prototype=L0.prototype={constructor:gc,on:function(r,e){var t=this._,n=IR(r+"",t),i,s=-1,o=n.length;if(arguments.length<2){for(;++s<o;)if((i=(r=n[s]).type)&&(i=DR(t[i],r.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(i=(r=n[s]).type)t[i]=Mm(t[i],r.name,e);else if(e==null)for(i in t)t[i]=Mm(t[i],r.name,null);return this},copy:function(){var r={},e=this._;for(var t in e)r[t]=e[t].slice();return new gc(r)},call:function(r,e){if((i=arguments.length-2)>0)for(var t=new Array(i),n=0,i,s;n<i;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(s=this._[r],n=0,i=s.length;n<i;++n)s[n].value.apply(e,t)},apply:function(r,e,t){if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(var n=this._[r],i=0,s=n.length;i<s;++i)n[i].value.apply(e,t)}};function DR(r,e){for(var t=0,n=r.length,i;t<n;++t)if((i=r[t]).name===e)return i.value}function Mm(r,e,t){for(var n=0,i=r.length;n<i;++n)if(r[n].name===e){r[n]=LR,r=r.slice(0,n).concat(r.slice(n+1));break}return t!=null&&r.push({name:e,value:t}),r}var _h="http://www.w3.org/1999/xhtml";const Sm={svg:"http://www.w3.org/2000/svg",xhtml:_h,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function yl(r){var e=r+="",t=e.indexOf(":");return t>=0&&(e=r.slice(0,t))!=="xmlns"&&(r=r.slice(t+1)),Sm.hasOwnProperty(e)?{space:Sm[e],local:r}:r}function NR(r){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===_h&&e.documentElement.namespaceURI===_h?e.createElement(r):e.createElementNS(t,r)}}function UR(r){return function(){return this.ownerDocument.createElementNS(r.space,r.local)}}function I0(r){var e=yl(r);return(e.local?UR:NR)(e)}function OR(){}function If(r){return r==null?OR:function(){return this.querySelector(r)}}function FR(r){typeof r!="function"&&(r=If(r));for(var e=this._groups,t=e.length,n=new Array(t),i=0;i<t;++i)for(var s=e[i],o=s.length,a=n[i]=new Array(o),c,l,u=0;u<o;++u)(c=s[u])&&(l=r.call(c,c.__data__,u,s))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Qn(n,this._parents)}function BR(r){return r==null?[]:Array.isArray(r)?r:Array.from(r)}function kR(){return[]}function D0(r){return r==null?kR:function(){return this.querySelectorAll(r)}}function zR(r){return function(){return BR(r.apply(this,arguments))}}function HR(r){typeof r=="function"?r=zR(r):r=D0(r);for(var e=this._groups,t=e.length,n=[],i=[],s=0;s<t;++s)for(var o=e[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(n.push(r.call(c,c.__data__,l,o)),i.push(c));return new Qn(n,i)}function N0(r){return function(){return this.matches(r)}}function U0(r){return function(e){return e.matches(r)}}var VR=Array.prototype.find;function GR(r){return function(){return VR.call(this.children,r)}}function WR(){return this.firstElementChild}function XR(r){return this.select(r==null?WR:GR(typeof r=="function"?r:U0(r)))}var qR=Array.prototype.filter;function $R(){return Array.from(this.children)}function YR(r){return function(){return qR.call(this.children,r)}}function ZR(r){return this.selectAll(r==null?$R:YR(typeof r=="function"?r:U0(r)))}function KR(r){typeof r!="function"&&(r=N0(r));for(var e=this._groups,t=e.length,n=new Array(t),i=0;i<t;++i)for(var s=e[i],o=s.length,a=n[i]=[],c,l=0;l<o;++l)(c=s[l])&&r.call(c,c.__data__,l,s)&&a.push(c);return new Qn(n,this._parents)}function O0(r){return new Array(r.length)}function jR(){return new Qn(this._enter||this._groups.map(O0),this._parents)}function Cc(r,e){this.ownerDocument=r.ownerDocument,this.namespaceURI=r.namespaceURI,this._next=null,this._parent=r,this.__data__=e}Cc.prototype={constructor:Cc,appendChild:function(r){return this._parent.insertBefore(r,this._next)},insertBefore:function(r,e){return this._parent.insertBefore(r,e)},querySelector:function(r){return this._parent.querySelector(r)},querySelectorAll:function(r){return this._parent.querySelectorAll(r)}};function JR(r){return function(){return r}}function QR(r,e,t,n,i,s){for(var o=0,a,c=e.length,l=s.length;o<l;++o)(a=e[o])?(a.__data__=s[o],n[o]=a):t[o]=new Cc(r,s[o]);for(;o<c;++o)(a=e[o])&&(i[o]=a)}function e2(r,e,t,n,i,s,o){var a,c,l=new Map,u=e.length,h=s.length,f=new Array(u),d;for(a=0;a<u;++a)(c=e[a])&&(f[a]=d=o.call(c,c.__data__,a,e)+"",l.has(d)?i[a]=c:l.set(d,c));for(a=0;a<h;++a)d=o.call(r,s[a],a,s)+"",(c=l.get(d))?(n[a]=c,c.__data__=s[a],l.delete(d)):t[a]=new Cc(r,s[a]);for(a=0;a<u;++a)(c=e[a])&&l.get(f[a])===c&&(i[a]=c)}function t2(r){return r.__data__}function n2(r,e){if(!arguments.length)return Array.from(this,t2);var t=e?e2:QR,n=this._parents,i=this._groups;typeof r!="function"&&(r=JR(r));for(var s=i.length,o=new Array(s),a=new Array(s),c=new Array(s),l=0;l<s;++l){var u=n[l],h=i[l],f=h.length,d=i2(r.call(u,u&&u.__data__,l,n)),p=d.length,_=a[l]=new Array(p),g=o[l]=new Array(p),m=c[l]=new Array(f);t(u,h,_,g,m,d,e);for(var x=0,v=0,y,M;x<p;++x)if(y=_[x]){for(x>=v&&(v=x+1);!(M=g[v])&&++v<p;);y._next=M||null}}return o=new Qn(o,n),o._enter=a,o._exit=c,o}function i2(r){return typeof r=="object"&&"length"in r?r:Array.from(r)}function r2(){return new Qn(this._exit||this._groups.map(O0),this._parents)}function s2(r,e,t){var n=this.enter(),i=this,s=this.exit();return typeof r=="function"?(n=r(n),n&&(n=n.selection())):n=n.append(r+""),e!=null&&(i=e(i),i&&(i=i.selection())),t==null?s.remove():t(s),n&&i?n.merge(i).order():i}function o2(r){for(var e=r.selection?r.selection():r,t=this._groups,n=e._groups,i=t.length,s=n.length,o=Math.min(i,s),a=new Array(i),c=0;c<o;++c)for(var l=t[c],u=n[c],h=l.length,f=a[c]=new Array(h),d,p=0;p<h;++p)(d=l[p]||u[p])&&(f[p]=d);for(;c<i;++c)a[c]=t[c];return new Qn(a,this._parents)}function a2(){for(var r=this._groups,e=-1,t=r.length;++e<t;)for(var n=r[e],i=n.length-1,s=n[i],o;--i>=0;)(o=n[i])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function c2(r){r||(r=l2);function e(h,f){return h&&f?r(h.__data__,f.__data__):!h-!f}for(var t=this._groups,n=t.length,i=new Array(n),s=0;s<n;++s){for(var o=t[s],a=o.length,c=i[s]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(e)}return new Qn(i,this._parents).order()}function l2(r,e){return r<e?-1:r>e?1:r>=e?0:NaN}function u2(){var r=arguments[0];return arguments[0]=this,r.apply(null,arguments),this}function h2(){return Array.from(this)}function f2(){for(var r=this._groups,e=0,t=r.length;e<t;++e)for(var n=r[e],i=0,s=n.length;i<s;++i){var o=n[i];if(o)return o}return null}function d2(){let r=0;for(const e of this)++r;return r}function p2(){return!this.node()}function m2(r){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],s=0,o=i.length,a;s<o;++s)(a=i[s])&&r.call(a,a.__data__,s,i);return this}function g2(r){return function(){this.removeAttribute(r)}}function _2(r){return function(){this.removeAttributeNS(r.space,r.local)}}function v2(r,e){return function(){this.setAttribute(r,e)}}function x2(r,e){return function(){this.setAttributeNS(r.space,r.local,e)}}function y2(r,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(r):this.setAttribute(r,t)}}function b2(r,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(r.space,r.local):this.setAttributeNS(r.space,r.local,t)}}function M2(r,e){var t=yl(r);if(arguments.length<2){var n=this.node();return t.local?n.getAttributeNS(t.space,t.local):n.getAttribute(t)}return this.each((e==null?t.local?_2:g2:typeof e=="function"?t.local?b2:y2:t.local?x2:v2)(t,e))}function F0(r){return r.ownerDocument&&r.ownerDocument.defaultView||r.document&&r||r.defaultView}function S2(r){return function(){this.style.removeProperty(r)}}function w2(r,e,t){return function(){this.style.setProperty(r,e,t)}}function A2(r,e,t){return function(){var n=e.apply(this,arguments);n==null?this.style.removeProperty(r):this.style.setProperty(r,n,t)}}function E2(r,e,t){return arguments.length>1?this.each((e==null?S2:typeof e=="function"?A2:w2)(r,e,t??"")):zs(this.node(),r)}function zs(r,e){return r.style.getPropertyValue(e)||F0(r).getComputedStyle(r,null).getPropertyValue(e)}function T2(r){return function(){delete this[r]}}function C2(r,e){return function(){this[r]=e}}function R2(r,e){return function(){var t=e.apply(this,arguments);t==null?delete this[r]:this[r]=t}}function P2(r,e){return arguments.length>1?this.each((e==null?T2:typeof e=="function"?R2:C2)(r,e)):this.node()[r]}function B0(r){return r.trim().split(/^|\s+/)}function Df(r){return r.classList||new k0(r)}function k0(r){this._node=r,this._names=B0(r.getAttribute("class")||"")}k0.prototype={add:function(r){var e=this._names.indexOf(r);e<0&&(this._names.push(r),this._node.setAttribute("class",this._names.join(" ")))},remove:function(r){var e=this._names.indexOf(r);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(r){return this._names.indexOf(r)>=0}};function z0(r,e){for(var t=Df(r),n=-1,i=e.length;++n<i;)t.add(e[n])}function H0(r,e){for(var t=Df(r),n=-1,i=e.length;++n<i;)t.remove(e[n])}function L2(r){return function(){z0(this,r)}}function I2(r){return function(){H0(this,r)}}function D2(r,e){return function(){(e.apply(this,arguments)?z0:H0)(this,r)}}function N2(r,e){var t=B0(r+"");if(arguments.length<2){for(var n=Df(this.node()),i=-1,s=t.length;++i<s;)if(!n.contains(t[i]))return!1;return!0}return this.each((typeof e=="function"?D2:e?L2:I2)(t,e))}function U2(){this.textContent=""}function O2(r){return function(){this.textContent=r}}function F2(r){return function(){var e=r.apply(this,arguments);this.textContent=e??""}}function B2(r){return arguments.length?this.each(r==null?U2:(typeof r=="function"?F2:O2)(r)):this.node().textContent}function k2(){this.innerHTML=""}function z2(r){return function(){this.innerHTML=r}}function H2(r){return function(){var e=r.apply(this,arguments);this.innerHTML=e??""}}function V2(r){return arguments.length?this.each(r==null?k2:(typeof r=="function"?H2:z2)(r)):this.node().innerHTML}function G2(){this.nextSibling&&this.parentNode.appendChild(this)}function W2(){return this.each(G2)}function X2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function q2(){return this.each(X2)}function $2(r){var e=typeof r=="function"?r:I0(r);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Y2(){return null}function Z2(r,e){var t=typeof r=="function"?r:I0(r),n=e==null?Y2:typeof e=="function"?e:If(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})}function K2(){var r=this.parentNode;r&&r.removeChild(this)}function j2(){return this.each(K2)}function J2(){var r=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(r,this.nextSibling):r}function Q2(){var r=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(r,this.nextSibling):r}function eP(r){return this.select(r?Q2:J2)}function tP(r){return arguments.length?this.property("__data__",r):this.node().__data__}function nP(r){return function(e){r.call(this,e,this.__data__)}}function iP(r){return r.trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function rP(r){return function(){var e=this.__on;if(e){for(var t=0,n=-1,i=e.length,s;t<i;++t)s=e[t],(!r.type||s.type===r.type)&&s.name===r.name?this.removeEventListener(s.type,s.listener,s.options):e[++n]=s;++n?e.length=n:delete this.__on}}}function sP(r,e,t){return function(){var n=this.__on,i,s=nP(e);if(n){for(var o=0,a=n.length;o<a;++o)if((i=n[o]).type===r.type&&i.name===r.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=t),i.value=e;return}}this.addEventListener(r.type,s,t),i={type:r.type,name:r.name,value:e,listener:s,options:t},n?n.push(i):this.__on=[i]}}function oP(r,e,t){var n=iP(r+""),i,s=n.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(i=0,u=a[c];i<s;++i)if((o=n[i]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?sP:rP,i=0;i<s;++i)this.each(a(n[i],e,t));return this}function V0(r,e,t){var n=F0(r),i=n.CustomEvent;typeof i=="function"?i=new i(e,t):(i=n.document.createEvent("Event"),t?(i.initEvent(e,t.bubbles,t.cancelable),i.detail=t.detail):i.initEvent(e,!1,!1)),r.dispatchEvent(i)}function aP(r,e){return function(){return V0(this,r,e)}}function cP(r,e){return function(){return V0(this,r,e.apply(this,arguments))}}function lP(r,e){return this.each((typeof e=="function"?cP:aP)(r,e))}function*uP(){for(var r=this._groups,e=0,t=r.length;e<t;++e)for(var n=r[e],i=0,s=n.length,o;i<s;++i)(o=n[i])&&(yield o)}var hP=[null];function Qn(r,e){this._groups=r,this._parents=e}function ta(){return new Qn([[document.documentElement]],hP)}function fP(){return this}Qn.prototype=ta.prototype={constructor:Qn,select:FR,selectAll:HR,selectChild:XR,selectChildren:ZR,filter:KR,data:n2,enter:jR,exit:r2,join:s2,merge:o2,selection:fP,order:a2,sort:c2,call:u2,nodes:h2,node:f2,size:d2,empty:p2,each:m2,attr:M2,style:E2,property:P2,classed:N2,text:B2,html:V2,raise:W2,lower:q2,append:$2,insert:Z2,remove:j2,clone:eP,datum:tP,on:oP,dispatch:lP,[Symbol.iterator]:uP};function Nf(r,e,t){r.prototype=e.prototype=t,t.constructor=r}function G0(r,e){var t=Object.create(r.prototype);for(var n in e)t[n]=e[n];return t}function na(){}var ko=.7,Rc=1/ko,Is="\\s*([+-]?\\d+)\\s*",zo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",di="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dP=/^#([0-9a-f]{3,8})$/,pP=new RegExp(`^rgb\\(${Is},${Is},${Is}\\)$`),mP=new RegExp(`^rgb\\(${di},${di},${di}\\)$`),gP=new RegExp(`^rgba\\(${Is},${Is},${Is},${zo}\\)$`),_P=new RegExp(`^rgba\\(${di},${di},${di},${zo}\\)$`),vP=new RegExp(`^hsl\\(${zo},${di},${di}\\)$`),xP=new RegExp(`^hsla\\(${zo},${di},${di},${zo}\\)$`),wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Nf(na,Ho,{copy(r){return Object.assign(new this.constructor,this,r)},displayable(){return this.rgb().displayable()},hex:Am,formatHex:Am,formatHex8:yP,formatHsl:bP,formatRgb:Em,toString:Em});function Am(){return this.rgb().formatHex()}function yP(){return this.rgb().formatHex8()}function bP(){return W0(this).formatHsl()}function Em(){return this.rgb().formatRgb()}function Ho(r){var e,t;return r=(r+"").trim().toLowerCase(),(e=dP.exec(r))?(t=e[1].length,e=parseInt(e[1],16),t===6?Tm(e):t===3?new Ln(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?oc(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?oc(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=pP.exec(r))?new Ln(e[1],e[2],e[3],1):(e=mP.exec(r))?new Ln(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=gP.exec(r))?oc(e[1],e[2],e[3],e[4]):(e=_P.exec(r))?oc(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=vP.exec(r))?Pm(e[1],e[2]/100,e[3]/100,1):(e=xP.exec(r))?Pm(e[1],e[2]/100,e[3]/100,e[4]):wm.hasOwnProperty(r)?Tm(wm[r]):r==="transparent"?new Ln(NaN,NaN,NaN,0):null}function Tm(r){return new Ln(r>>16&255,r>>8&255,r&255,1)}function oc(r,e,t,n){return n<=0&&(r=e=t=NaN),new Ln(r,e,t,n)}function MP(r){return r instanceof na||(r=Ho(r)),r?(r=r.rgb(),new Ln(r.r,r.g,r.b,r.opacity)):new Ln}function vh(r,e,t,n){return arguments.length===1?MP(r):new Ln(r,e,t,n??1)}function Ln(r,e,t,n){this.r=+r,this.g=+e,this.b=+t,this.opacity=+n}Nf(Ln,vh,G0(na,{brighter(r){return r=r==null?Rc:Math.pow(Rc,r),new Ln(this.r*r,this.g*r,this.b*r,this.opacity)},darker(r){return r=r==null?ko:Math.pow(ko,r),new Ln(this.r*r,this.g*r,this.b*r,this.opacity)},rgb(){return this},clamp(){return new Ln(Or(this.r),Or(this.g),Or(this.b),Pc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Cm,formatHex:Cm,formatHex8:SP,formatRgb:Rm,toString:Rm}));function Cm(){return`#${Rr(this.r)}${Rr(this.g)}${Rr(this.b)}`}function SP(){return`#${Rr(this.r)}${Rr(this.g)}${Rr(this.b)}${Rr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Rm(){const r=Pc(this.opacity);return`${r===1?"rgb(":"rgba("}${Or(this.r)}, ${Or(this.g)}, ${Or(this.b)}${r===1?")":`, ${r})`}`}function Pc(r){return isNaN(r)?1:Math.max(0,Math.min(1,r))}function Or(r){return Math.max(0,Math.min(255,Math.round(r)||0))}function Rr(r){return r=Or(r),(r<16?"0":"")+r.toString(16)}function Pm(r,e,t,n){return n<=0?r=e=t=NaN:t<=0||t>=1?r=e=NaN:e<=0&&(r=NaN),new Zn(r,e,t,n)}function W0(r){if(r instanceof Zn)return new Zn(r.h,r.s,r.l,r.opacity);if(r instanceof na||(r=Ho(r)),!r)return new Zn;if(r instanceof Zn)return r;r=r.rgb();var e=r.r/255,t=r.g/255,n=r.b/255,i=Math.min(e,t,n),s=Math.max(e,t,n),o=NaN,a=s-i,c=(s+i)/2;return a?(e===s?o=(t-n)/a+(t<n)*6:t===s?o=(n-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+i:2-s-i,o*=60):a=c>0&&c<1?0:o,new Zn(o,a,c,r.opacity)}function wP(r,e,t,n){return arguments.length===1?W0(r):new Zn(r,e,t,n??1)}function Zn(r,e,t,n){this.h=+r,this.s=+e,this.l=+t,this.opacity=+n}Nf(Zn,wP,G0(na,{brighter(r){return r=r==null?Rc:Math.pow(Rc,r),new Zn(this.h,this.s,this.l*r,this.opacity)},darker(r){return r=r==null?ko:Math.pow(ko,r),new Zn(this.h,this.s,this.l*r,this.opacity)},rgb(){var r=this.h%360+(this.h<0)*360,e=isNaN(r)||isNaN(this.s)?0:this.s,t=this.l,n=t+(t<.5?t:1-t)*e,i=2*t-n;return new Ln(vu(r>=240?r-240:r+120,i,n),vu(r,i,n),vu(r<120?r+240:r-120,i,n),this.opacity)},clamp(){return new Zn(Lm(this.h),ac(this.s),ac(this.l),Pc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const r=Pc(this.opacity);return`${r===1?"hsl(":"hsla("}${Lm(this.h)}, ${ac(this.s)*100}%, ${ac(this.l)*100}%${r===1?")":`, ${r})`}`}}));function Lm(r){return r=(r||0)%360,r<0?r+360:r}function ac(r){return Math.max(0,Math.min(1,r||0))}function vu(r,e,t){return(r<60?e+(t-e)*r/60:r<180?t:r<240?e+(t-e)*(240-r)/60:e)*255}const X0=r=>()=>r;function AP(r,e){return function(t){return r+t*e}}function EP(r,e,t){return r=Math.pow(r,t),e=Math.pow(e,t)-r,t=1/t,function(n){return Math.pow(r+n*e,t)}}function TP(r){return(r=+r)==1?q0:function(e,t){return t-e?EP(e,t,r):X0(isNaN(e)?t:e)}}function q0(r,e){var t=e-r;return t?AP(r,t):X0(isNaN(r)?e:r)}const Im=function r(e){var t=TP(e);function n(i,s){var o=t((i=vh(i)).r,(s=vh(s)).r),a=t(i.g,s.g),c=t(i.b,s.b),l=q0(i.opacity,s.opacity);return function(u){return i.r=o(u),i.g=a(u),i.b=c(u),i.opacity=l(u),i+""}}return n.gamma=r,n}(1);function Yi(r,e){return r=+r,e=+e,function(t){return r*(1-t)+e*t}}var xh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xu=new RegExp(xh.source,"g");function CP(r){return function(){return r}}function RP(r){return function(e){return r(e)+""}}function PP(r,e){var t=xh.lastIndex=xu.lastIndex=0,n,i,s,o=-1,a=[],c=[];for(r=r+"",e=e+"";(n=xh.exec(r))&&(i=xu.exec(e));)(s=i.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(n=n[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,c.push({i:o,x:Yi(n,i)})),t=xu.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?RP(c[0].x):CP(e):(e=c.length,function(l){for(var u=0,h;u<e;++u)a[(h=c[u]).i]=h.x(l);return a.join("")})}var Dm=180/Math.PI,yh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function $0(r,e,t,n,i,s){var o,a,c;return(o=Math.sqrt(r*r+e*e))&&(r/=o,e/=o),(c=r*t+e*n)&&(t-=r*c,n-=e*c),(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a,c/=a),r*n<e*t&&(r=-r,e=-e,c=-c,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(e,r)*Dm,skewX:Math.atan(c)*Dm,scaleX:o,scaleY:a}}var cc;function LP(r){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(r+"");return e.isIdentity?yh:$0(e.a,e.b,e.c,e.d,e.e,e.f)}function IP(r){return r==null||(cc||(cc=document.createElementNS("http://www.w3.org/2000/svg","g")),cc.setAttribute("transform",r),!(r=cc.transform.baseVal.consolidate()))?yh:(r=r.matrix,$0(r.a,r.b,r.c,r.d,r.e,r.f))}function Y0(r,e,t,n){function i(l){return l.length?l.pop()+" ":""}function s(l,u,h,f,d,p){if(l!==h||u!==f){var _=d.push("translate(",null,e,null,t);p.push({i:_-4,x:Yi(l,h)},{i:_-2,x:Yi(u,f)})}else(h||f)&&d.push("translate("+h+e+f+t)}function o(l,u,h,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:h.push(i(h)+"rotate(",null,n)-2,x:Yi(l,u)})):u&&h.push(i(h)+"rotate("+u+n)}function a(l,u,h,f){l!==u?f.push({i:h.push(i(h)+"skewX(",null,n)-2,x:Yi(l,u)}):u&&h.push(i(h)+"skewX("+u+n)}function c(l,u,h,f,d,p){if(l!==h||u!==f){var _=d.push(i(d)+"scale(",null,",",null,")");p.push({i:_-4,x:Yi(l,h)},{i:_-2,x:Yi(u,f)})}else(h!==1||f!==1)&&d.push(i(d)+"scale("+h+","+f+")")}return function(l,u){var h=[],f=[];return l=r(l),u=r(u),s(l.translateX,l.translateY,u.translateX,u.translateY,h,f),o(l.rotate,u.rotate,h,f),a(l.skewX,u.skewX,h,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,h,f),l=u=null,function(d){for(var p=-1,_=f.length,g;++p<_;)h[(g=f[p]).i]=g.x(d);return h.join("")}}}var DP=Y0(LP,"px, ","px)","deg)"),NP=Y0(IP,", ",")",")"),Hs=0,fo=0,co=0,Z0=1e3,Lc,po,Ic=0,Yr=0,bl=0,Vo=typeof performance=="object"&&performance.now?performance:Date,K0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(r){setTimeout(r,17)};function Uf(){return Yr||(K0(UP),Yr=Vo.now()+bl)}function UP(){Yr=0}function Dc(){this._call=this._time=this._next=null}Dc.prototype=j0.prototype={constructor:Dc,restart:function(r,e,t){if(typeof r!="function")throw new TypeError("callback is not a function");t=(t==null?Uf():+t)+(e==null?0:+e),!this._next&&po!==this&&(po?po._next=this:Lc=this,po=this),this._call=r,this._time=t,bh()},stop:function(){this._call&&(this._call=null,this._time=1/0,bh())}};function j0(r,e,t){var n=new Dc;return n.restart(r,e,t),n}function OP(){Uf(),++Hs;for(var r=Lc,e;r;)(e=Yr-r._time)>=0&&r._call.call(void 0,e),r=r._next;--Hs}function Nm(){Yr=(Ic=Vo.now())+bl,Hs=fo=0;try{OP()}finally{Hs=0,BP(),Yr=0}}function FP(){var r=Vo.now(),e=r-Ic;e>Z0&&(bl-=e,Ic=r)}function BP(){for(var r,e=Lc,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),r=e,e=e._next):(t=e._next,e._next=null,e=r?r._next=t:Lc=t);po=r,bh(n)}function bh(r){if(!Hs){fo&&(fo=clearTimeout(fo));var e=r-Yr;e>24?(r<1/0&&(fo=setTimeout(Nm,r-Vo.now()-bl)),co&&(co=clearInterval(co))):(co||(Ic=Vo.now(),co=setInterval(FP,Z0)),Hs=1,K0(Nm))}}function Um(r,e,t){var n=new Dc;return e=e==null?0:+e,n.restart(i=>{n.stop(),r(i+e)},e,t),n}var kP=L0("start","end","cancel","interrupt"),zP=[],J0=0,Om=1,Mh=2,_c=3,Fm=4,Sh=5,vc=6;function Ml(r,e,t,n,i,s){var o=r.__transition;if(!o)r.__transition={};else if(t in o)return;HP(r,t,{name:e,index:n,group:i,on:kP,tween:zP,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:J0})}function Of(r,e){var t=ri(r,e);if(t.state>J0)throw new Error("too late; already scheduled");return t}function _i(r,e){var t=ri(r,e);if(t.state>_c)throw new Error("too late; already running");return t}function ri(r,e){var t=r.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function HP(r,e,t){var n=r.__transition,i;n[e]=t,t.timer=j0(s,0,t.time);function s(l){t.state=Om,t.timer.restart(o,t.delay,t.time),t.delay<=l&&o(l-t.delay)}function o(l){var u,h,f,d;if(t.state!==Om)return c();for(u in n)if(d=n[u],d.name===t.name){if(d.state===_c)return Um(o);d.state===Fm?(d.state=vc,d.timer.stop(),d.on.call("interrupt",r,r.__data__,d.index,d.group),delete n[u]):+u<e&&(d.state=vc,d.timer.stop(),d.on.call("cancel",r,r.__data__,d.index,d.group),delete n[u])}if(Um(function(){t.state===_c&&(t.state=Fm,t.timer.restart(a,t.delay,t.time),a(l))}),t.state=Mh,t.on.call("start",r,r.__data__,t.index,t.group),t.state===Mh){for(t.state=_c,i=new Array(f=t.tween.length),u=0,h=-1;u<f;++u)(d=t.tween[u].value.call(r,r.__data__,t.index,t.group))&&(i[++h]=d);i.length=h+1}}function a(l){for(var u=l<t.duration?t.ease.call(null,l/t.duration):(t.timer.restart(c),t.state=Sh,1),h=-1,f=i.length;++h<f;)i[h].call(r,u);t.state===Sh&&(t.on.call("end",r,r.__data__,t.index,t.group),c())}function c(){t.state=vc,t.timer.stop(),delete n[e];for(var l in n)return;delete r.__transition}}function VP(r,e){var t=r.__transition,n,i,s=!0,o;if(t){e=e==null?null:e+"";for(o in t){if((n=t[o]).name!==e){s=!1;continue}i=n.state>Mh&&n.state<Sh,n.state=vc,n.timer.stop(),n.on.call(i?"interrupt":"cancel",r,r.__data__,n.index,n.group),delete t[o]}s&&delete r.__transition}}function GP(r){return this.each(function(){VP(this,r)})}function WP(r,e){var t,n;return function(){var i=_i(this,r),s=i.tween;if(s!==t){n=t=s;for(var o=0,a=n.length;o<a;++o)if(n[o].name===e){n=n.slice(),n.splice(o,1);break}}i.tween=n}}function XP(r,e,t){var n,i;if(typeof t!="function")throw new Error;return function(){var s=_i(this,r),o=s.tween;if(o!==n){i=(n=o).slice();for(var a={name:e,value:t},c=0,l=i.length;c<l;++c)if(i[c].name===e){i[c]=a;break}c===l&&i.push(a)}s.tween=i}}function qP(r,e){var t=this._id;if(r+="",arguments.length<2){for(var n=ri(this.node(),t).tween,i=0,s=n.length,o;i<s;++i)if((o=n[i]).name===r)return o.value;return null}return this.each((e==null?WP:XP)(t,r,e))}function Ff(r,e,t){var n=r._id;return r.each(function(){var i=_i(this,n);(i.value||(i.value={}))[e]=t.apply(this,arguments)}),function(i){return ri(i,n).value[e]}}function Q0(r,e){var t;return(typeof e=="number"?Yi:e instanceof Ho?Im:(t=Ho(e))?(e=t,Im):PP)(r,e)}function $P(r){return function(){this.removeAttribute(r)}}function YP(r){return function(){this.removeAttributeNS(r.space,r.local)}}function ZP(r,e,t){var n,i=t+"",s;return function(){var o=this.getAttribute(r);return o===i?null:o===n?s:s=e(n=o,t)}}function KP(r,e,t){var n,i=t+"",s;return function(){var o=this.getAttributeNS(r.space,r.local);return o===i?null:o===n?s:s=e(n=o,t)}}function jP(r,e,t){var n,i,s;return function(){var o,a=t(this),c;return a==null?void this.removeAttribute(r):(o=this.getAttribute(r),c=a+"",o===c?null:o===n&&c===i?s:(i=c,s=e(n=o,a)))}}function JP(r,e,t){var n,i,s;return function(){var o,a=t(this),c;return a==null?void this.removeAttributeNS(r.space,r.local):(o=this.getAttributeNS(r.space,r.local),c=a+"",o===c?null:o===n&&c===i?s:(i=c,s=e(n=o,a)))}}function QP(r,e){var t=yl(r),n=t==="transform"?NP:Q0;return this.attrTween(r,typeof e=="function"?(t.local?JP:jP)(t,n,Ff(this,"attr."+r,e)):e==null?(t.local?YP:$P)(t):(t.local?KP:ZP)(t,n,e))}function eL(r,e){return function(t){this.setAttribute(r,e.call(this,t))}}function tL(r,e){return function(t){this.setAttributeNS(r.space,r.local,e.call(this,t))}}function nL(r,e){var t,n;function i(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&tL(r,s)),t}return i._value=e,i}function iL(r,e){var t,n;function i(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&eL(r,s)),t}return i._value=e,i}function rL(r,e){var t="attr."+r;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var n=yl(r);return this.tween(t,(n.local?nL:iL)(n,e))}function sL(r,e){return function(){Of(this,r).delay=+e.apply(this,arguments)}}function oL(r,e){return e=+e,function(){Of(this,r).delay=e}}function aL(r){var e=this._id;return arguments.length?this.each((typeof r=="function"?sL:oL)(e,r)):ri(this.node(),e).delay}function cL(r,e){return function(){_i(this,r).duration=+e.apply(this,arguments)}}function lL(r,e){return e=+e,function(){_i(this,r).duration=e}}function uL(r){var e=this._id;return arguments.length?this.each((typeof r=="function"?cL:lL)(e,r)):ri(this.node(),e).duration}function hL(r,e){if(typeof e!="function")throw new Error;return function(){_i(this,r).ease=e}}function fL(r){var e=this._id;return arguments.length?this.each(hL(e,r)):ri(this.node(),e).ease}function dL(r,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;_i(this,r).ease=t}}function pL(r){if(typeof r!="function")throw new Error;return this.each(dL(this._id,r))}function mL(r){typeof r!="function"&&(r=N0(r));for(var e=this._groups,t=e.length,n=new Array(t),i=0;i<t;++i)for(var s=e[i],o=s.length,a=n[i]=[],c,l=0;l<o;++l)(c=s[l])&&r.call(c,c.__data__,l,s)&&a.push(c);return new Oi(n,this._parents,this._name,this._id)}function gL(r){if(r._id!==this._id)throw new Error;for(var e=this._groups,t=r._groups,n=e.length,i=t.length,s=Math.min(n,i),o=new Array(n),a=0;a<s;++a)for(var c=e[a],l=t[a],u=c.length,h=o[a]=new Array(u),f,d=0;d<u;++d)(f=c[d]||l[d])&&(h[d]=f);for(;a<n;++a)o[a]=e[a];return new Oi(o,this._parents,this._name,this._id)}function _L(r){return(r+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function vL(r,e,t){var n,i,s=_L(e)?Of:_i;return function(){var o=s(this,r),a=o.on;a!==n&&(i=(n=a).copy()).on(e,t),o.on=i}}function xL(r,e){var t=this._id;return arguments.length<2?ri(this.node(),t).on.on(r):this.each(vL(t,r,e))}function yL(r){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==r)return;e&&e.removeChild(this)}}function bL(){return this.on("end.remove",yL(this._id))}function ML(r){var e=this._name,t=this._id;typeof r!="function"&&(r=If(r));for(var n=this._groups,i=n.length,s=new Array(i),o=0;o<i;++o)for(var a=n[o],c=a.length,l=s[o]=new Array(c),u,h,f=0;f<c;++f)(u=a[f])&&(h=r.call(u,u.__data__,f,a))&&("__data__"in u&&(h.__data__=u.__data__),l[f]=h,Ml(l[f],e,t,f,l,ri(u,t)));return new Oi(s,this._parents,e,t)}function SL(r){var e=this._name,t=this._id;typeof r!="function"&&(r=D0(r));for(var n=this._groups,i=n.length,s=[],o=[],a=0;a<i;++a)for(var c=n[a],l=c.length,u,h=0;h<l;++h)if(u=c[h]){for(var f=r.call(u,u.__data__,h,c),d,p=ri(u,t),_=0,g=f.length;_<g;++_)(d=f[_])&&Ml(d,e,t,_,f,p);s.push(f),o.push(u)}return new Oi(s,o,e,t)}var wL=ta.prototype.constructor;function AL(){return new wL(this._groups,this._parents)}function EL(r,e){var t,n,i;return function(){var s=zs(this,r),o=(this.style.removeProperty(r),zs(this,r));return s===o?null:s===t&&o===n?i:i=e(t=s,n=o)}}function ev(r){return function(){this.style.removeProperty(r)}}function TL(r,e,t){var n,i=t+"",s;return function(){var o=zs(this,r);return o===i?null:o===n?s:s=e(n=o,t)}}function CL(r,e,t){var n,i,s;return function(){var o=zs(this,r),a=t(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(r),zs(this,r))),o===c?null:o===n&&c===i?s:(i=c,s=e(n=o,a))}}function RL(r,e){var t,n,i,s="style."+e,o="end."+s,a;return function(){var c=_i(this,r),l=c.on,u=c.value[s]==null?a||(a=ev(e)):void 0;(l!==t||i!==u)&&(n=(t=l).copy()).on(o,i=u),c.on=n}}function PL(r,e,t){var n=(r+="")=="transform"?DP:Q0;return e==null?this.styleTween(r,EL(r,n)).on("end.style."+r,ev(r)):typeof e=="function"?this.styleTween(r,CL(r,n,Ff(this,"style."+r,e))).each(RL(this._id,r)):this.styleTween(r,TL(r,n,e),t).on("end.style."+r,null)}function LL(r,e,t){return function(n){this.style.setProperty(r,e.call(this,n),t)}}function IL(r,e,t){var n,i;function s(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&LL(r,o,t)),n}return s._value=e,s}function DL(r,e,t){var n="style."+(r+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,IL(r,e,t??""))}function NL(r){return function(){this.textContent=r}}function UL(r){return function(){var e=r(this);this.textContent=e??""}}function OL(r){return this.tween("text",typeof r=="function"?UL(Ff(this,"text",r)):NL(r==null?"":r+""))}function FL(r){return function(e){this.textContent=r.call(this,e)}}function BL(r){var e,t;function n(){var i=r.apply(this,arguments);return i!==t&&(e=(t=i)&&FL(i)),e}return n._value=r,n}function kL(r){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(r==null)return this.tween(e,null);if(typeof r!="function")throw new Error;return this.tween(e,BL(r))}function zL(){for(var r=this._name,e=this._id,t=tv(),n=this._groups,i=n.length,s=0;s<i;++s)for(var o=n[s],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=ri(c,e);Ml(c,r,t,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Oi(n,this._parents,r,t)}function HL(){var r,e,t=this,n=t._id,i=t.size();return new Promise(function(s,o){var a={value:o},c={value:function(){--i===0&&s()}};t.each(function(){var l=_i(this,n),u=l.on;u!==r&&(e=(r=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),l.on=e}),i===0&&s()})}var VL=0;function Oi(r,e,t,n){this._groups=r,this._parents=e,this._name=t,this._id=n}function tv(){return++VL}var Ai=ta.prototype;Oi.prototype={constructor:Oi,select:ML,selectAll:SL,selectChild:Ai.selectChild,selectChildren:Ai.selectChildren,filter:mL,merge:gL,selection:AL,transition:zL,call:Ai.call,nodes:Ai.nodes,node:Ai.node,size:Ai.size,empty:Ai.empty,each:Ai.each,on:xL,attr:QP,attrTween:rL,style:PL,styleTween:DL,text:OL,textTween:kL,remove:bL,tween:qP,delay:aL,duration:uL,ease:fL,easeVarying:pL,end:HL,[Symbol.iterator]:Ai[Symbol.iterator]};function GL(r){return((r*=2)<=1?r*r*r:(r-=2)*r*r+2)/2}var WL={time:null,delay:0,duration:250,ease:GL};function XL(r,e){for(var t;!(t=r.__transition)||!(t=t[e]);)if(!(r=r.parentNode))throw new Error(`transition ${e} not found`);return t}function qL(r){var e,t;r instanceof Oi?(e=r._id,r=r._name):(e=tv(),(t=WL).time=Uf(),r=r==null?null:r+"");for(var n=this._groups,i=n.length,s=0;s<i;++s)for(var o=n[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Ml(c,r,e,l,o,t||XL(c,e));return new Oi(n,this._parents,r,e)}ta.prototype.interrupt=GP;ta.prototype.transition=qL;function mo(r,e,t){this.k=r,this.x=e,this.y=t}mo.prototype={constructor:mo,scale:function(r){return r===1?this:new mo(this.k*r,this.x,this.y)},translate:function(r,e){return r===0&e===0?this:new mo(this.k,this.x+this.k*r,this.y+this.k*e)},apply:function(r){return[r[0]*this.k+this.x,r[1]*this.k+this.y]},applyX:function(r){return r*this.k+this.x},applyY:function(r){return r*this.k+this.y},invert:function(r){return[(r[0]-this.x)/this.k,(r[1]-this.y)/this.k]},invertX:function(r){return(r-this.x)/this.k},invertY:function(r){return(r-this.y)/this.k},rescaleX:function(r){return r.copy().domain(r.range().map(this.invertX,this).map(r.invert,r))},rescaleY:function(r){return r.copy().domain(r.range().map(this.invertY,this).map(r.invert,r))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};mo.prototype;function Bm(r,e,t){const n=r.slice();return n[6]=e[t],n}function km(r,e,t){const n=r.slice();return n[9]=e[t],n}function zm(r,e,t){const n=r.slice();return n[12]=e[t],n}function Hm(r,e){let t,n,i,s,o;return n=new LT({props:{hand:e[12]}}),n.$on("pinchstart",e[4]),n.$on("connected",e[2]),n.$on("disconnected",e[2]),n.$on("pinchstart",e[2]),n.$on("pinchend",e[2]),s=new bT({props:{hand:e[12]}}),s.$on("connected",e[3]),s.$on("disconnected",e[3]),s.$on("select",e[3]),s.$on("squeeze",e[3]),s.$on("selectstart",e[3]),s.$on("selectend",e[3]),s.$on("squeezestart",e[3]),s.$on("squeezeend",e[3]),{key:r,first:null,c(){t=gt(),Ae(n.$$.fragment),i=ht(),Ae(s.$$.fragment),this.h()},l(a){t=gt(),Ee(n.$$.fragment,a),i=ft(a),Ee(s.$$.fragment,a),this.h()},h(){this.first=t},m(a,c){Oe(a,t,c),Te(n,a,c),Oe(a,i,c),Te(s,a,c),o=!0},p(a,c){e=a},i(a){o||(H(n.$$.fragment,a),H(s.$$.fragment,a),o=!0)},o(a){$(n.$$.fragment,a),$(s.$$.fragment,a),o=!1},d(a){a&&(De(t),De(i)),Ce(n,a),Ce(s,a)}}}function $L(r){let e=[],t=new Map,n,i,s=Ss(r[5]);const o=a=>a[12];for(let a=0;a<s.length;a+=1){let c=zm(r,s,a),l=o(c);t.set(l,e[a]=Hm(l,c))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=gt()},l(a){for(let c=0;c<e.length;c+=1)e[c].l(a);n=gt()},m(a,c){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,c);Oe(a,n,c),i=!0},p(a,c){c&60&&(s=Ss(a[5]),kt(),e=jm(e,c,o,1,a,s,t,n.parentNode,Km,Hm,n,zm),zt())},i(a){if(!i){for(let c=0;c<s.length;c+=1)H(e[c]);i=!0}},o(a){for(let c=0;c<e.length;c+=1)$(e[c]);i=!1},d(a){a&&De(n);for(let c=0;c<e.length;c+=1)e[c].d(a)}}}function YL(r){let e,t,n,i;return e=new tt.CircleGeometry({props:{args:[1]}}),n=new tt.MeshBasicMaterial({}),{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=ft(s),Ee(n.$$.fragment,s)},m(s,o){Te(e,s,o),Oe(s,t,o),Te(n,s,o),i=!0},p:At,i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),i=!1},d(s){s&&De(t),Ce(e,s),Ce(n,s)}}}function Vm(r,e){let t,n,i;return n=new tt({props:{is:e[9]}}),{key:r,first:null,c(){t=gt(),Ae(n.$$.fragment),this.h()},l(s){t=gt(),Ee(n.$$.fragment,s),this.h()},h(){this.first=t},m(s,o){Oe(s,t,o),Te(n,s,o),i=!0},p(s,o){e=s;const a={};o&1&&(a.is=e[9]),n.$set(a)},i(s){i||(H(n.$$.fragment,s),i=!0)},o(s){$(n.$$.fragment,s),i=!1},d(s){s&&De(t),Ce(n,s)}}}function ZL(r){let e,t;return e=new lR({props:{enableZoom:!0,enableDamping:!0,"target.y":1.5}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p:At,i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function KL(r){let e,t,n,i,s;return e=new tt.BoxGeometry({}),n=new tt.MeshStandardMaterial({props:{color:"#0059BA"}}),{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment),i=ht()},l(o){Ee(e.$$.fragment,o),t=ft(o),Ee(n.$$.fragment,o),i=ft(o)},m(o,a){Te(e,o,a),Oe(o,t,a),Te(n,o,a),Oe(o,i,a),s=!0},p:At,i(o){s||(H(e.$$.fragment,o),H(n.$$.fragment,o),s=!0)},o(o){$(e.$$.fragment,o),$(n.$$.fragment,o),s=!1},d(o){o&&(De(t),De(i)),Ce(e,o),Ce(n,o)}}}function Gm(r){let e,t;return e=new tt.Mesh({props:{"position.y":1.2,"position.z":-2*r[6],$$slots:{default:[KL]},$$scope:{ctx:r}}}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},p(n,i){const s={};i&2&&(s["position.z"]=-2*n[6]),i&32768&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function jL(r){let e,t,n,i,s,o,a,c,l,u,h=[],f=new Map,d,p,_,g,m,x,v,y,M,A,S,R,b;e=new BC({props:{$$slots:{default:[$L]},$$scope:{ctx:r}}}),n=new tt.Mesh({props:{rotation:[-Math.PI/2,0,0],$$slots:{default:[YL]},$$scope:{ctx:r}}}),s=new tt.PerspectiveCamera({props:{makeDefault:!0,position:[0,1.8,1]}}),s.$on("create",JL),a=new tt.AmbientLight({}),l=new tt.DirectionalLight({});let w=Ss(r[0]);const U=P=>P[9].uuid;for(let P=0;P<w.length;P+=1){let O=km(r,w,P),G=U(O);f.set(G,h[P]=Vm(G,O))}p=new tt.PerspectiveCamera({props:{makeDefault:!0,position:[-10,10,10],fov:15,$$slots:{default:[ZL]},$$scope:{ctx:r}}}),g=new tt.DirectionalLight({props:{intensity:.8,"position.x":5,"position.y":10}}),x=new tt.AmbientLight({props:{intensity:.2}}),y=new tR({props:{"position.y":-.001,cellColor:"#ffffff",sectionColor:"#ffffff",sectionThickness:0,fadeDistance:25,cellSize:2}}),A=new qC({props:{scale:10,blur:2,far:2.5,opacity:.5}});let k=Ss(bm(r[1])),W=[];for(let P=0;P<k.length;P+=1)W[P]=Gm(Bm(r,k,P));const N=P=>$(W[P],1,1,()=>{W[P]=null});return{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment),i=ht(),Ae(s.$$.fragment),o=ht(),Ae(a.$$.fragment),c=ht(),Ae(l.$$.fragment),u=ht();for(let P=0;P<h.length;P+=1)h[P].c();d=ht(),Ae(p.$$.fragment),_=ht(),Ae(g.$$.fragment),m=ht(),Ae(x.$$.fragment),v=ht(),Ae(y.$$.fragment),M=ht(),Ae(A.$$.fragment),S=ht();for(let P=0;P<W.length;P+=1)W[P].c();R=gt()},l(P){Ee(e.$$.fragment,P),t=ft(P),Ee(n.$$.fragment,P),i=ft(P),Ee(s.$$.fragment,P),o=ft(P),Ee(a.$$.fragment,P),c=ft(P),Ee(l.$$.fragment,P),u=ft(P);for(let O=0;O<h.length;O+=1)h[O].l(P);d=ft(P),Ee(p.$$.fragment,P),_=ft(P),Ee(g.$$.fragment,P),m=ft(P),Ee(x.$$.fragment,P),v=ft(P),Ee(y.$$.fragment,P),M=ft(P),Ee(A.$$.fragment,P),S=ft(P);for(let O=0;O<W.length;O+=1)W[O].l(P);R=gt()},m(P,O){Te(e,P,O),Oe(P,t,O),Te(n,P,O),Oe(P,i,O),Te(s,P,O),Oe(P,o,O),Te(a,P,O),Oe(P,c,O),Te(l,P,O),Oe(P,u,O);for(let G=0;G<h.length;G+=1)h[G]&&h[G].m(P,O);Oe(P,d,O),Te(p,P,O),Oe(P,_,O),Te(g,P,O),Oe(P,m,O),Te(x,P,O),Oe(P,v,O),Te(y,P,O),Oe(P,M,O),Te(A,P,O),Oe(P,S,O);for(let G=0;G<W.length;G+=1)W[G]&&W[G].m(P,O);Oe(P,R,O),b=!0},p(P,[O]){const G={};O&32768&&(G.$$scope={dirty:O,ctx:P}),e.$set(G);const oe={};O&32768&&(oe.$$scope={dirty:O,ctx:P}),n.$set(oe),O&1&&(w=Ss(P[0]),kt(),h=jm(h,O,U,1,P,w,f,d.parentNode,Km,Vm,d,km),zt());const Q={};if(O&32768&&(Q.$$scope={dirty:O,ctx:P}),p.$set(Q),O&2){k=Ss(bm(P[1]));let j;for(j=0;j<k.length;j+=1){const z=Bm(P,k,j);W[j]?(W[j].p(z,O),H(W[j],1)):(W[j]=Gm(z),W[j].c(),H(W[j],1),W[j].m(R.parentNode,R))}for(kt(),j=k.length;j<W.length;j+=1)N(j);zt()}},i(P){if(!b){H(e.$$.fragment,P),H(n.$$.fragment,P),H(s.$$.fragment,P),H(a.$$.fragment,P),H(l.$$.fragment,P);for(let O=0;O<w.length;O+=1)H(h[O]);H(p.$$.fragment,P),H(g.$$.fragment,P),H(x.$$.fragment,P),H(y.$$.fragment,P),H(A.$$.fragment,P);for(let O=0;O<k.length;O+=1)H(W[O]);b=!0}},o(P){$(e.$$.fragment,P),$(n.$$.fragment,P),$(s.$$.fragment,P),$(a.$$.fragment,P),$(l.$$.fragment,P);for(let O=0;O<h.length;O+=1)$(h[O]);$(p.$$.fragment,P),$(g.$$.fragment,P),$(x.$$.fragment,P),$(y.$$.fragment,P),$(A.$$.fragment,P),W=W.filter(Boolean);for(let O=0;O<W.length;O+=1)$(W[O]);b=!1},d(P){P&&(De(t),De(i),De(o),De(c),De(u),De(d),De(_),De(m),De(v),De(M),De(S),De(R)),Ce(e,P),Ce(n,P),Ce(s,P),Ce(a,P),Ce(l,P);for(let O=0;O<h.length;O+=1)h[O].d(P);Ce(p,P),Ce(g,P),Ce(x,P),Ce(y,P),Ce(A,P),gv(W,P)}}}const JL=({ref:r})=>r.lookAt(0,1.8,0);function QL(r,e,t){let n=[];const i=l=>{console.log("Hand",l)},s=l=>{console.log("Controller",l)},o=l=>{const u=l.target,h=.05,f=new Fi(h,h,h),d=new Qr({color:Math.random()*16777215}),p=new Et(f,d),_=u.joints["index-finger-tip"];p.position.copy(_.position),p.quaternion.copy(_.quaternion),n.push(p),t(0,n)},a=["left","right"];let c=1;return Zr(()=>{window.setInterval(()=>{t(1,c++,c)},500)}),[n,c,i,s,o,a]}class eI extends Vt{constructor(e){super(),Gt(this,e,QL,jL,Ht,{})}}function tI(r){let e,t;return e=new eI({}),{c(){Ae(e.$$.fragment)},l(n){Ee(e.$$.fragment,n)},m(n,i){Te(e,n,i),t=!0},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function nI(r){let e,t,n,i;return e=new PA({props:{$$slots:{default:[tI]},$$scope:{ctx:r}}}),n=new bE({}),{c(){Ae(e.$$.fragment),t=ht(),Ae(n.$$.fragment)},l(s){Ee(e.$$.fragment,s),t=ft(s),Ee(n.$$.fragment,s)},m(s,o){Te(e,s,o),Oe(s,t,o),Te(n,s,o),i=!0},p(s,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){i||(H(e.$$.fragment,s),H(n.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),i=!1},d(s){s&&De(t),Ce(e,s),Ce(n,s)}}}class iI extends Vt{constructor(e){super(),Gt(this,e,null,nI,Ht,{})}}function rI(r){let e,t,n;return t=new iI({}),{c(){e=wh("div"),Ae(t.$$.fragment),this.h()},l(i){e=Ah(i,"DIV",{class:!0});var s=Eh(e);Ee(t.$$.fragment,s),s.forEach(De),this.h()},h(){Wm(e,"class","svelte-1cwcxaa")},m(i,s){Oe(i,e,s),Te(t,e,null),n=!0},p:At,i(i){n||(H(t.$$.fragment,i),n=!0)},o(i){$(t.$$.fragment,i),n=!1},d(i){i&&De(e),Ce(t)}}}class dI extends Vt{constructor(e){super(),Gt(this,e,null,rI,Ht,{})}}export{dI as component};
