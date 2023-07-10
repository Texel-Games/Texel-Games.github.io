(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.cI(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.cJ(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.aK(b)
return new t(c,this)}:function(){if(t===null)t=A.aK(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.aK(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={aB:function aB(){},
cC(a){var t,s
for(t=$.L.length,s=0;s<t;++s)if(a===$.L[s])return!0
return!1},
ab:function ab(a){this.a=a},
bs(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
l(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.M(a)
return t},
ac(a){return A.bF(a)},
bF(a){var t,s,r,q
if(a instanceof A.f)return A.i(A.Z(a),null)
t=J.J(a)
if(t===B.m||t===B.p||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.i(A.Z(a),null)},
bG(a){if(typeof a=="number"||A.aI(a))return J.M(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.u)return a.h(0)
return"Instance of '"+A.ac(a)+"'"},
aO(a,b){if(a==null)J.aR(a)
throw A.c(A.cr(a,b))},
cr(a,b){var t,s="index"
if(!A.bi(b))return new A.A(!0,b,s,null)
t=A.aG(J.aR(a))
if(b<0||b>=t)return new A.a9(t,!0,b,s,"Index out of range")
return new A.ad(null,null,!0,b,s,"Value not in range")},
c(a){var t,s
if(a==null)a=new A.ak()
t=new Error()
t.dartException=a
s=A.cK
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
cK(){return J.M(this.dartException)},
aQ(a){throw A.c(a)},
cH(a){throw A.c(new A.a4(a))},
bC(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ag().constructor.prototype):Object.create(new A.P(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.aW(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.by(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.aW(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
by(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.bw)}throw A.c("Error in functionType of tearoff")},
bz(a,b,c,d){var t=A.aV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aW(a,b,c,d){var t,s
if(c)return A.bB(a,b,d)
t=b.length
s=A.bz(t,d,a,b)
return s},
bA(a,b,c,d){var t=A.aV,s=A.bx
switch(b?-1:a){case 0:throw A.c(new A.ae("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
bB(a,b,c){var t,s
if($.aT==null)$.aT=A.aS("interceptor")
if($.aU==null)$.aU=A.aS("receiver")
t=b.length
s=A.bA(t,c,a,b)
return s},
aK(a){return A.bC(a)},
bw(a,b){return A.as(v.typeUniverse,A.Z(a.a),b)},
aV(a){return a.a},
bx(a){return a.b},
aS(a){var t,s,r,q=new A.P("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.c(new A.A(!1,null,null,"Field name "+a+" not found."))},
cI(a){throw A.c(new A.an(a))},
cv(a){return v.getIsolateTag(a)},
cE(a){var t,s,r,q,p,o=A.bc($.bp.$1(a)),n=$.av[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.az[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.c3($.bm.$2(a,o))
if(r!=null){n=$.av[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.az[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.aA(t)
$.av[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.az[o]=t
return t}if(q==="-"){p=A.aA(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bq(a,t)
if(q==="*")throw A.c(A.b0(o))
if(v.leafTags[o]===true){p=A.aA(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bq(a,t)},
bq(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.aP(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aA(a){return J.aP(a,!1,null,!!a.$icN)},
cG(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.aA(t)
else return J.aP(t,c,null,null)},
cz(){if(!0===$.aM)return
$.aM=!0
A.cA()},
cA(){var t,s,r,q,p,o,n,m
$.av=Object.create(null)
$.az=Object.create(null)
A.cy()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.br.$1(p)
if(o!=null){n=A.cG(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
cy(){var t,s,r,q,p,o,n=B.f()
n=A.y(B.h,A.y(B.i,A.y(B.c,A.y(B.c,A.y(B.j,A.y(B.k,A.y(B.l(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bp=new A.aw(q)
$.bm=new A.ax(p)
$.br=new A.ay(o)},
y(a,b){return a(b)||b},
cq(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
u:function u(){},
a3:function a3(){},
aj:function aj(){},
ag:function ag(){},
P:function P(a,b){this.a=a
this.b=b},
an:function an(a){this.a=a},
ae:function ae(a){this.a=a},
aw:function aw(a){this.a=a},
ax:function ax(a){this.a=a},
ay:function ay(a){this.a=a},
aZ(a,b){var t=b.c
return t==null?b.c=A.aF(a,b.y,!0):t},
aC(a,b){var t=b.c
return t==null?b.c=A.G(a,"aX",[b.y]):t},
b_(a){var t=a.x
if(t===6||t===7||t===8)return A.b_(a.y)
return t===12||t===13},
bH(a){return a.at},
bo(a){return A.ar(v.typeUniverse,a,!1)},
t(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.t(a,t,c,a0)
if(s===t)return b
return A.b9(a,s,!0)
case 7:t=b.y
s=A.t(a,t,c,a0)
if(s===t)return b
return A.aF(a,s,!0)
case 8:t=b.y
s=A.t(a,t,c,a0)
if(s===t)return b
return A.b8(a,s,!0)
case 9:r=b.z
q=A.I(a,r,c,a0)
if(q===r)return b
return A.G(a,b.y,q)
case 10:p=b.y
o=A.t(a,p,c,a0)
n=b.z
m=A.I(a,n,c,a0)
if(o===p&&m===n)return b
return A.aD(a,o,m)
case 12:l=b.y
k=A.t(a,l,c,a0)
j=b.z
i=A.cn(a,j,c,a0)
if(k===l&&i===j)return b
return A.b7(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.I(a,h,c,a0)
p=b.y
o=A.t(a,p,c,a0)
if(g===h&&o===p)return b
return A.aE(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.c(A.O("Attempted to substitute unexpected RTI kind "+d))}},
I(a,b,c,d){var t,s,r,q,p=b.length,o=A.at(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.t(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
co(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.at(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.t(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
cn(a,b,c,d){var t,s=b.a,r=A.I(a,s,c,d),q=b.b,p=A.I(a,q,c,d),o=b.c,n=A.co(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.W()
t.a=r
t.b=p
t.c=n
return t},
bl(a,b){a[v.arrayRti]=b
return a},
bn(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.cx(s)
t=a.$S()
return t}return null},
cB(a,b){var t
if(A.b_(b))if(a instanceof A.u){t=A.bn(a)
if(t!=null)return t}return A.Z(a)},
Z(a){if(a instanceof A.f)return A.bg(a)
if(Array.isArray(a))return A.au(a)
return A.aH(J.J(a))},
au(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bg(a){var t=a.$ti
return t!=null?t:A.aH(a)},
aH(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cb(a,t)},
cb(a,b){var t=a instanceof A.u?a.__proto__.__proto__.constructor:b,s=A.c_(v.typeUniverse,t.name)
b.$ccache=s
return s},
cx(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ar(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
cw(a){return A.z(A.bg(a))},
cm(a){var t=a instanceof A.u?A.bn(a):null
if(t!=null)return t
if(u.R.b(a))return J.bu(a).a
if(Array.isArray(a))return A.au(a)
return A.Z(a)},
z(a){var t=a.w
return t==null?a.w=A.bd(a):t},
bd(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.aq(a)
t=A.ar(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.bd(t):s},
ca(a){var t,s,r,q,p,o=this
if(o===u.K)return A.o(o,a,A.cg)
if(!A.p(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.o(o,a,A.ck)
t=o.x
if(t===7)return A.o(o,a,A.c8)
if(t===1)return A.o(o,a,A.bj)
s=t===6?o.y:o
t=s.x
if(t===8)return A.o(o,a,A.cc)
if(s===u.S)r=A.bi
else if(s===u.i||s===u.H)r=A.cf
else if(s===u.N)r=A.ci
else r=s===u.y?A.aI:null
if(r!=null)return A.o(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.cD)){o.r="$i"+q
if(q==="bE")return A.o(o,a,A.ce)
return A.o(o,a,A.cj)}}else if(t===11){p=A.cq(s.y,s.z)
return A.o(o,a,p==null?A.bj:p)}return A.o(o,a,A.c6)},
o(a,b,c){a.b=c
return a.b(b)},
c9(a){var t,s=this,r=A.c5
if(!A.p(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.c4
else if(s===u.K)r=A.c2
else{t=A.K(s)
if(t)r=A.c7}s.a=r
return s.a(a)},
Y(a){var t,s=a.x
if(!A.p(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.Y(a.y)))t=s===8&&A.Y(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
c6(a){var t=this
if(a==null)return A.Y(t)
return A.d(v.typeUniverse,A.cB(a,t),null,t,null)},
c8(a){if(a==null)return!0
return this.y.b(a)},
cj(a){var t,s=this
if(a==null)return A.Y(s)
t=s.r
if(a instanceof A.f)return!!a[t]
return!!J.J(a)[t]},
ce(a){var t,s=this
if(a==null)return A.Y(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.f)return!!a[t]
return!!J.J(a)[t]},
c5(a){var t,s=this
if(a==null){t=A.K(s)
if(t)return a}else if(s.b(a))return a
A.be(a,s)},
c7(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.be(a,t)},
be(a,b){throw A.c(A.bQ(A.b1(a,A.i(b,null))))},
b1(a,b){return A.a7(a)+": type '"+A.i(A.cm(a),null)+"' is not a subtype of type '"+b+"'"},
bQ(a){return new A.X("TypeError: "+a)},
h(a,b){return new A.X("TypeError: "+A.b1(a,b))},
cc(a){var t=this
return t.y.b(a)||A.aC(v.typeUniverse,t).b(a)},
cg(a){return a!=null},
c2(a){if(a!=null)return a
throw A.c(A.h(a,"Object"))},
ck(a){return!0},
c4(a){return a},
bj(a){return!1},
aI(a){return!0===a||!1===a},
cQ(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.h(a,"bool"))},
cS(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.h(a,"bool"))},
cR(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.h(a,"bool?"))},
cT(a){if(typeof a=="number")return a
throw A.c(A.h(a,"double"))},
cV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"double"))},
cU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"double?"))},
bi(a){return typeof a=="number"&&Math.floor(a)===a},
aG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.h(a,"int"))},
cX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.h(a,"int"))},
cW(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.h(a,"int?"))},
cf(a){return typeof a=="number"},
cY(a){if(typeof a=="number")return a
throw A.c(A.h(a,"num"))},
cZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"num"))},
c1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"num?"))},
ci(a){return typeof a=="string"},
bc(a){if(typeof a=="string")return a
throw A.c(A.h(a,"String"))},
d_(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.h(a,"String"))},
c3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.h(a,"String?"))},
bk(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.i(a[r],b)
return t},
cl(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.bk(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.i(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bf(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.bl([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.d.t(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.aO(a4,k)
n=B.n.u(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.i(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.i(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.i(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.i(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.i(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
i(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.i(a.y,b)
return t}if(m===7){s=a.y
t=A.i(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.i(a.y,b)+">"
if(m===9){q=A.cp(a.y)
p=a.z
return p.length>0?q+("<"+A.bk(p,b)+">"):q}if(m===11)return A.cl(a,b)
if(m===12)return A.bf(a,b,null)
if(m===13)return A.bf(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.aO(b,o)
return b[o]}return"?"},
cp(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
c0(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
c_(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ar(a,b,!1)
else if(typeof n=="number"){t=n
s=A.H(a,5,"#")
r=A.at(t)
for(q=0;q<t;++q)r[q]=s
p=A.G(a,b,r)
o[b]=p
return p}else return n},
bY(a,b){return A.ba(a.tR,b)},
cP(a,b){return A.ba(a.eT,b)},
ar(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.b5(A.b3(a,null,b,c))
s.set(b,t)
return t},
as(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.b5(A.b3(a,b,c,!0))
r.set(c,s)
return s},
bZ(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.aD(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
n(a,b){b.a=A.c9
b.b=A.ca
return b},
H(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.j(null,null)
t.x=b
t.at=c
s=A.n(a,t)
a.eC.set(c,s)
return s},
b9(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.bV(a,b,s,c)
a.eC.set(s,t)
return t},
bV(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.p(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.j(null,null)
r.x=6
r.y=b
r.at=c
return A.n(a,r)},
aF(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.bU(a,b,s,c)
a.eC.set(s,t)
return t},
bU(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.p(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.K(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.K(r.y))return r
else return A.aZ(a,b)}}q=new A.j(null,null)
q.x=7
q.y=b
q.at=c
return A.n(a,q)},
b8(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.bS(a,b,s,c)
a.eC.set(s,t)
return t},
bS(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.p(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.G(a,"aX",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.j(null,null)
r.x=8
r.y=b
r.at=c
return A.n(a,r)},
bW(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.j(null,null)
t.x=14
t.y=b
t.at=r
s=A.n(a,t)
a.eC.set(r,s)
return s},
F(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
bR(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
G(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.F(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.j(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.n(a,s)
a.eC.set(q,r)
return r},
aD(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.F(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.j(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.n(a,p)
a.eC.set(r,o)
return o},
bX(a,b,c){var t,s,r="+"+(b+"("+A.F(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.j(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.n(a,t)
a.eC.set(r,s)
return s},
b7(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.F(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.F(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.bR(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.j(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.n(a,q)
a.eC.set(s,p)
return p},
aE(a,b,c,d){var t,s=b.at+("<"+A.F(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.bT(a,b,c,s,d)
a.eC.set(s,t)
return t},
bT(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.at(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.t(a,b,s,0)
n=A.I(a,c,s,0)
return A.aE(a,o,n,c!==n)}}m=new A.j(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.n(a,m)},
b3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
b5(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.bL(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.b4(a,s,m,l,!1)
else if(r===46)s=A.b4(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.r(a.u,a.e,l.pop()))
break
case 94:l.push(A.bW(a.u,l.pop()))
break
case 35:l.push(A.H(a.u,5,"#"))
break
case 64:l.push(A.H(a.u,2,"@"))
break
case 126:l.push(A.H(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.bN(a,l)
break
case 38:A.bM(a,l)
break
case 42:q=a.u
l.push(A.b9(q,A.r(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.aF(q,A.r(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.b8(q,A.r(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.bK(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.b6(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.bP(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.r(a.u,a.e,n)},
bL(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
b4(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.c0(t,p.y)[q]
if(o==null)A.aQ('No "'+q+'" in "'+A.bH(p)+'"')
d.push(A.as(t,p,o))}else d.push(q)
return n},
bN(a,b){var t,s=a.u,r=A.b2(a,b),q=b.pop()
if(typeof q=="string")b.push(A.G(s,q,r))
else{t=A.r(s,a.e,q)
switch(t.x){case 12:b.push(A.aE(s,t,r,a.n))
break
default:b.push(A.aD(s,t,r))
break}}},
bK(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.b2(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.r(n,a.e,m)
p=new A.W()
p.a=r
p.b=t
p.c=s
b.push(A.b7(n,q,p))
return
case-4:b.push(A.bX(n,b.pop(),r))
return
default:throw A.c(A.O("Unexpected state under `()`: "+A.l(m)))}},
bM(a,b){var t=b.pop()
if(0===t){b.push(A.H(a.u,1,"0&"))
return}if(1===t){b.push(A.H(a.u,4,"1&"))
return}throw A.c(A.O("Unexpected extended operation "+A.l(t)))},
b2(a,b){var t=b.splice(a.p)
A.b6(a.u,a.e,t)
a.p=b.pop()
return t},
r(a,b,c){if(typeof c=="string")return A.G(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.bO(a,b,c)}else return c},
b6(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.r(a,b,c[t])},
bP(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.r(a,b,c[t])},
bO(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.c(A.O("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.c(A.O("Bad index "+c+" for "+b.h(0)))},
d(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.p(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.p(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.d(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.d(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.d(a,b.y,c,d,e)
if(s===6)return A.d(a,b.y,c,d,e)
return s!==7}if(s===6)return A.d(a,b.y,c,d,e)
if(q===6){t=A.aZ(a,d)
return A.d(a,b,c,t,e)}if(s===8){if(!A.d(a,b.y,c,d,e))return!1
return A.d(a,A.aC(a,b),c,d,e)}if(s===7){t=A.d(a,u.P,c,d,e)
return t&&A.d(a,b.y,c,d,e)}if(q===8){if(A.d(a,b,c,d.y,e))return!0
return A.d(a,b,c,A.aC(a,d),e)}if(q===7){t=A.d(a,b,c,u.P,e)
return t||A.d(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.d(a,k,c,j,e)||!A.d(a,j,e,k,c))return!1}return A.bh(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bh(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.cd(a,b,c,d,e)}if(p&&q===11)return A.ch(a,b,c,d,e)
return!1},
bh(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.d(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.d(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.d(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.d(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.d(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cd(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.as(a,b,s[p])
return A.bb(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.bb(a,o,null,c,n,e)},
bb(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.d(a,s,d,r,f))return!1}return!0},
ch(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.d(a,s[t],c,r[t],e))return!1
return!0},
K(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.p(a))if(s!==7)if(!(s===6&&A.K(a.y)))t=s===8&&A.K(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cD(a){var t
if(!A.p(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
p(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
ba(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
at(a){return a>0?new Array(a):v.typeUniverse.sEA},
j:function j(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
W:function W(){this.c=this.b=this.a=null},
aq:function aq(a){this.a=a},
ao:function ao(){},
X:function X(a){this.a=a},
bI(a,b,c){var t,s=A.au(b),r=new J.N(b,b.length,s.q("N<1>"))
if(!r.n())return a
if(c.length===0){s=s.c
do{t=r.d
a+=A.l(t==null?s.a(t):t)}while(r.n())}else{t=r.d
a+=A.l(t==null?s.c.a(t):t)
for(s=s.c;r.n();){t=r.d
a=a+c+A.l(t==null?s.a(t):t)}}return a},
a7(a){if(typeof a=="number"||A.aI(a)||a==null)return J.M(a)
if(typeof a=="string")return JSON.stringify(a)
return A.bG(a)},
O(a){return new A.a2(a)},
bJ(a){return new A.am(a)},
b0(a){return new A.al(a)},
bD(a,b,c){var t,s
if(A.cC(a))return b+"..."+c
t=new A.ai(b)
B.d.t($.L,a)
try{s=t
s.a=A.bI(s.a,a,", ")}finally{if(0>=$.L.length)return A.aO($.L,-1)
$.L.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
a6:function a6(){},
a2:function a2(a){this.a=a},
ak:function ak(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
a9:function a9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
am:function am(a){this.a=a},
al:function al(a){this.a=a},
a4:function a4(a){this.a=a},
D:function D(){},
f:function f(){},
ai:function ai(a){this.a=a},
b:function b(){},
a0:function a0(){},
a1:function a1(){},
a5:function a5(){},
a:function a(){},
Q:function Q(){},
a8:function a8(){},
x:function x(){},
af:function af(){},
cJ(a){return A.aQ(new A.ab("Field '"+a+"' has been assigned during initialization."))},
cF(){var t=document.querySelector("#output")
if(t!=null)J.bv(t,"Your Dart app is running.")}},J={
aP(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aL(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.aM==null){A.cz()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.c(A.b0("Return interceptor for "+A.l(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.ap
if(p==null)p=$.ap=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.cE(a)
if(q!=null)return q
if(typeof a=="function")return B.o
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.ap
if(p==null)p=$.ap=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
J(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.S.prototype
return J.T.prototype}if(typeof a=="string")return J.w.prototype
if(a==null)return J.C.prototype
if(typeof a=="boolean")return J.R.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.q.prototype
return a}if(a instanceof A.f)return a
return J.aL(a)},
ct(a){if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.q.prototype
return a}if(a instanceof A.f)return a
return J.aL(a)},
cu(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.q.prototype
return a}if(a instanceof A.f)return a
return J.aL(a)},
aR(a){return J.ct(a).gj(a)},
bu(a){return J.J(a).gi(a)},
bv(a,b){return J.cu(a).sB(a,b)},
M(a){return J.J(a).h(a)},
B:function B(){},
R:function R(){},
C:function C(){},
e:function e(){},
v:function v(){},
V:function V(){},
E:function E(){},
q:function q(){},
k:function k(a){this.$ti=a},
aa:function aa(a){this.$ti=a},
N:function N(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
U:function U(){},
S:function S(){},
T:function T(){},
w:function w(){}},B={}
var w=[A,J,B]
var $={}
A.aB.prototype={}
J.B.prototype={
h(a){return"Instance of '"+A.ac(a)+"'"},
gi(a){return A.z(A.aH(this))}}
J.R.prototype={
h(a){return String(a)},
gi(a){return A.z(u.y)},
$im:1,
$iaJ:1}
J.C.prototype={
h(a){return"null"},
$im:1}
J.e.prototype={}
J.v.prototype={
h(a){return String(a)}}
J.V.prototype={}
J.E.prototype={}
J.q.prototype={
h(a){var t=a[$.bt()]
if(t==null)return this.A(a)
return"JavaScript function for "+J.M(t)}}
J.k.prototype={
t(a,b){A.au(a).c.a(b)
if(!!a.fixed$length)A.aQ(A.bJ("add"))
a.push(b)},
h(a){return A.bD(a,"[","]")},
gj(a){return a.length},
$iaY:1}
J.aa.prototype={}
J.N.prototype={
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.cH(r)
throw A.c(r)}t=s.c
if(t>=q){s.sp(null)
return!1}s.sp(r[t]);++s.c
return!0},
sp(a){this.d=this.$ti.q("1?").a(a)}}
J.U.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.z(u.H)},
$ia_:1}
J.S.prototype={
gi(a){return A.z(u.S)},
$im:1,
$iaN:1}
J.T.prototype={
gi(a){return A.z(u.i)},
$im:1}
J.w.prototype={
u(a,b){return a+b},
h(a){return a},
gi(a){return A.z(u.N)},
gj(a){return a.length},
$im:1,
$iah:1}
A.ab.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.u.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bs(s==null?"unknown":s)+"'"},
gC(){return this},
$C:"$1",
$R:1,
$D:null}
A.a3.prototype={$C:"$2",$R:2}
A.aj.prototype={}
A.ag.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bs(t)+"'"}}
A.P.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ac(this.a)+"'")}}
A.an.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.ae.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aw.prototype={
$1(a){return this.a(a)}}
A.ax.prototype={
$2(a,b){return this.a(a,b)}}
A.ay.prototype={
$1(a){return this.a(A.bc(a))}}
A.j.prototype={
q(a){return A.as(v.typeUniverse,this,a)},
D(a){return A.bZ(v.typeUniverse,this,a)}}
A.W.prototype={}
A.aq.prototype={
h(a){return A.i(this.a,null)}}
A.ao.prototype={
h(a){return this.a}}
A.X.prototype={}
A.a6.prototype={}
A.a2.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a7(t)
return"Assertion failed"}}
A.ak.prototype={}
A.A.prototype={
gl(){return"Invalid argument"+(!this.a?"(s)":"")},
gk(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gl()+r+p
if(!t.a)return o
return o+t.gk()+": "+A.a7(t.gm())},
gm(){return this.b}}
A.ad.prototype={
gm(){return A.c1(this.b)},
gl(){return"RangeError"},
gk(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.l(r):""
else if(r==null)t=": Not greater than or equal to "+A.l(s)
else if(r>s)t=": Not in inclusive range "+A.l(s)+".."+A.l(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.l(s)
return t}}
A.a9.prototype={
gm(){return A.aG(this.b)},
gl(){return"RangeError"},
gk(){if(A.aG(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.am.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.al.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a4.prototype={
h(a){return"Concurrent modification during iteration: "+A.a7(this.a)+"."}}
A.D.prototype={
h(a){return"null"}}
A.f.prototype={$if:1,
h(a){return"Instance of '"+A.ac(this)+"'"},
gi(a){return A.cw(this)},
toString(){return this.h(this)}}
A.ai.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.b.prototype={}
A.a0.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a1.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a5.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a.prototype={
h(a){var t=a.localName
t.toString
return t}}
A.Q.prototype={}
A.a8.prototype={
gj(a){return a.length}}
A.x.prototype={
h(a){var t=a.nodeValue
return t==null?this.v(a):t},
sB(a,b){a.textContent=b}}
A.af.prototype={
gj(a){return a.length}};(function aliases(){var t=J.B.prototype
t.v=t.h
t=J.v.prototype
t.A=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(A.f,null)
s(A.f,[A.aB,J.B,J.N,A.a6,A.u,A.j,A.W,A.aq,A.D,A.ai])
s(J.B,[J.R,J.C,J.e,J.U,J.w])
s(J.e,[J.v,J.k,A.Q,A.a5])
s(J.v,[J.V,J.E,J.q])
t(J.aa,J.k)
s(J.U,[J.S,J.T])
s(A.a6,[A.ab,A.an,A.ae,A.ao,A.a2,A.ak,A.A,A.am,A.al,A.a4])
s(A.u,[A.a3,A.aj,A.aw,A.ay])
s(A.aj,[A.ag,A.P])
t(A.ax,A.a3)
t(A.X,A.ao)
s(A.A,[A.ad,A.a9])
t(A.x,A.Q)
t(A.a,A.x)
t(A.b,A.a)
s(A.b,[A.a0,A.a1,A.a8,A.af])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{aN:"int",cs:"double",a_:"num",ah:"String",aJ:"bool",D:"Null",bE:"List"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.bY(v.typeUniverse,JSON.parse('{"V":"v","E":"v","q":"v","R":{"aJ":[],"m":[]},"C":{"m":[]},"k":{"aY":["1"]},"aa":{"k":["1"],"aY":["1"]},"U":{"a_":[]},"S":{"aN":[],"a_":[],"m":[]},"T":{"a_":[],"m":[]},"w":{"ah":[],"m":[]}}'))
var u=(function rtii(){var t=A.bo
return{Z:t("cM"),s:t("k<ah>"),b:t("k<@>"),T:t("C"),g:t("q"),P:t("D"),K:t("f"),L:t("cO"),N:t("ah"),R:t("m"),o:t("E"),y:t("aJ"),i:t("cs"),S:t("aN"),A:t("0&*"),_:t("f*"),O:t("aX<D>?"),X:t("f?"),H:t("a_")}})();(function constants(){B.m=J.B.prototype
B.d=J.k.prototype
B.n=J.w.prototype
B.o=J.q.prototype
B.p=J.e.prototype
B.e=J.V.prototype
B.a=J.E.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.k=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.c=function(hooks) { return hooks; }
})();(function staticFields(){$.ap=null
$.L=A.bl([],A.bo("k<f>"))
$.aU=null
$.aT=null
$.bp=null
$.bm=null
$.br=null
$.av=null
$.az=null
$.aM=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"cL","bt",()=>A.cv("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.e,DOMError:J.e,ErrorEvent:J.e,Event:J.e,InputEvent:J.e,SubmitEvent:J.e,MediaError:J.e,NavigatorUserMediaError:J.e,OverconstrainedError:J.e,PositionError:J.e,GeolocationPositionError:J.e,SensorErrorEvent:J.e,SpeechRecognitionError:J.e,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLInputElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.a0,HTMLAreaElement:A.a1,DOMException:A.a5,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,EventTarget:A.Q,HTMLFormElement:A.a8,Document:A.x,HTMLDocument:A.x,Node:A.x,HTMLSelectElement:A.af})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.cF
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
