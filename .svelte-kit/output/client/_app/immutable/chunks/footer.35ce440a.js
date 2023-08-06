import{s as le,B as X,p as xe,C as Ce,D as ae,E as ke,z as $e,F as ve,y as W,G as oe,t as se,r as we,v as ye,w as Ie,x as Se,o as He,H as Ve,b as Be,f as y,a as D,g as I,h as Q,c as F,A as z,d as S,I as Oe,j as h,i as j,u as x}from"./scheduler.0c16bc3d.js";import{S as ue,i as ie,f as Me,b as N,d as H,m as V,a as A,t as P,e as B}from"./index.9868a140.js";import{F as be,d as ze}from"./index.706cea86.js";import{R as Te,g as Ee,f as Ae,u as Pe,r as je,M as ne,a as De,K as O,F as J,b as _e,c as Ke,S as Ue,d as We}from"./common.64c08b78.js";const qe=""+new URL("../assets/logo.b7989ff4.png",import.meta.url).href,Re=s=>s&8,Ge=s=>({}),Fe=s=>({...s[3]});function Ze(s){let e;const n=s[16].default,t=we(n,s,s[18],Fe);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&262152)&&ye(t,n,r,r[18],Re(l)||!e?Ie(r[18]):Se(n,r[18],l,Ge),Fe)},i(r){e||(A(t,r),e=!0)},o(r){P(t,r),e=!1},d(r){t&&t.d(r)}}}function Qe(s){let e,n,t;const r=[{...s[12],...s[4]},{as:s[0]},{slotProps:s[3]},{use:[...s[1],s[7]]},{name:"MenuButton"}];function l(a){s[17](a)}let c={$$slots:{default:[Ze]},$$scope:{ctx:s}};for(let a=0;a<r.length;a+=1)c=X(c,r[a]);return s[2]!==void 0&&(c.el=s[2]),e=new Te({props:c}),xe.push(()=>Me(e,"el",l)),e.$on("click",s[11]),e.$on("keydown",s[9]),e.$on("keyup",s[10]),{c(){N(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,i){V(e,a,i),t=!0},p(a,[i]){const f=i&4251?Ee(r,[i&4112&&{...a[12],...a[4]},i&1&&{as:a[0]},i&8&&{slotProps:a[3]},i&130&&{use:[...a[1],a[7]]},r[4]]):{};i&262152&&(f.$$scope={dirty:i,ctx:a}),!n&&i&4&&(n=!0,f.el=a[2],Ce(()=>n=!1)),e.$set(f)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){B(e,a)}}}function Je(s,e,n){let t,r,l,c;const a=["as","use","disabled"];let i=ae(e,a),f,u,d=W,C=()=>(d(),d=oe(r,v=>n(15,u=v)),r),g,k=W,o=()=>(k(),k=oe(t,v=>n(2,g=v)),t);s.$$.on_destroy.push(()=>d()),s.$$.on_destroy.push(()=>k());let{$$slots:m={},$$scope:$}=e,{as:_="button"}=e,{use:U=[]}=e,{disabled:T=!1}=e;const L=Ae(ke()),M=Pe("MenuButton");$e(s,M,v=>n(14,f=v));const E=`headlessui-menu-button-${De()}`;async function q(v){let p=v;switch(p.key){case O.Space:case O.Enter:case O.ArrowDown:p.preventDefault(),p.stopPropagation(),f.openMenu(),await se(),u==null||u.focus({preventScroll:!0}),f.goToItem(J.First);break;case O.ArrowUp:p.preventDefault(),p.stopPropagation(),f.openMenu(),await se(),u==null||u.focus({preventScroll:!0}),f.goToItem(J.Last);break}}function G(v){let p=v;switch(p.key){case O.Space:p.preventDefault();break}}async function K(v){let p=v;T||(f.menuState===ne.Open?(f.closeMenu(),await se(),g==null||g.focus({preventScroll:!0})):(p.preventDefault(),p.stopPropagation(),f.openMenu(),await se(),u==null||u.focus({preventScroll:!0})))}function Y(v){g=v,t.set(g)}return s.$$set=v=>{n(20,e=X(X({},e),ve(v))),n(12,i=ae(e,a)),"as"in v&&n(0,_=v.as),"use"in v&&n(1,U=v.use),"disabled"in v&&n(13,T=v.disabled),"$$scope"in v&&n(18,$=v.$$scope)},s.$$.update=()=>{s.$$.dirty&16384&&o(n(6,t=f.buttonStore)),s.$$.dirty&16384&&C(n(5,r=f.itemsStore)),n(4,l={id:E,type:je({type:e.type,as:_},g),disabled:T?!0:void 0,"aria-haspopup":!0,"aria-controls":u==null?void 0:u.id,"aria-expanded":T?void 0:f.menuState===ne.Open}),s.$$.dirty&16384&&n(3,c={open:f.menuState===ne.Open})},e=ve(e),[_,U,g,c,l,r,t,L,M,q,G,K,i,T,f,u,m,Y,$]}class Xe extends ue{constructor(e){super(),ie(this,e,Je,Qe,le,{as:0,use:1,disabled:13})}}function Ye({container:s,accept:e,walk:n,enabled:t}){let r=s;if(!r||t!==void 0&&!t)return;let l=Object.assign(a=>e(a),{acceptNode:e}),c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,l,!1);for(;c.nextNode();)n(c.currentNode)}const et=s=>s&8,tt=s=>({}),Le=s=>({...s[3]});function st(s){let e;const n=s[17].default,t=we(n,s,s[19],Le);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&524296)&&ye(t,n,r,r[19],et(l)||!e?Ie(r[19]):Se(n,r[19],l,tt),Le)},i(r){e||(A(t,r),e=!0)},o(r){P(t,r),e=!1},d(r){t&&t.d(r)}}}function nt(s){let e,n,t;const r=[{...s[13],...s[4]},{as:s[0]},{slotProps:s[3]},{use:[...s[1],s[8]]},{name:"MenuItems"},{visible:s[5]},{features:_e.RenderStrategy|_e.Static}];function l(a){s[18](a)}let c={$$slots:{default:[st]},$$scope:{ctx:s}};for(let a=0;a<r.length;a+=1)c=X(c,r[a]);return s[2]!==void 0&&(c.el=s[2]),e=new Te({props:c}),xe.push(()=>Me(e,"el",l)),e.$on("keydown",s[11]),e.$on("keyup",s[12]),{c(){N(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,i){V(e,a,i),t=!0},p(a,[i]){const f=i&8507?Ee(r,[i&8208&&{...a[13],...a[4]},i&1&&{as:a[0]},i&8&&{slotProps:a[3]},i&258&&{use:[...a[1],a[8]]},r[4],i&32&&{visible:a[5]},i&0&&{features:_e.RenderStrategy|_e.Static}]):{};i&524296&&(f.$$scope={dirty:i,ctx:a}),!n&&i&4&&(n=!0,f.el=a[2],Ce(()=>n=!1)),e.$set(f)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){B(e,a)}}}function rt(s,e,n){let t,r,l,c,a;const i=["as","use"];let f=ae(e,i),u,d,C=W,g=()=>(C(),C=oe(t,w=>n(15,d=w)),t),k,o=W,m=()=>(o(),o=oe(r,w=>n(2,k=w)),r),$;s.$$.on_destroy.push(()=>C()),s.$$.on_destroy.push(()=>o());let{$$slots:_={},$$scope:U}=e,{as:T="div"}=e,{use:L=[]}=e;const M=Ae(ke()),E=Pe("MenuItems");$e(s,E,w=>n(14,u=w));const q=`headlessui-menu-items-${De()}`;let G=null,K=Ke();$e(s,K,w=>n(16,$=w));async function Y(w){var Z;G&&clearTimeout(G);let b=w;switch(b.key){case O.Space:if(u.searchQuery!=="")return b.preventDefault(),b.stopPropagation(),u.search(b.key);case O.Enter:if(b.preventDefault(),b.stopPropagation(),u.activeItemIndex!==null){let{id:ce}=u.items[u.activeItemIndex];(Z=document.getElementById(ce))==null||Z.click()}u.closeMenu(),await se(),d==null||d.focus({preventScroll:!0});break;case O.ArrowDown:return b.preventDefault(),b.stopPropagation(),u.goToItem(J.Next);case O.ArrowUp:return b.preventDefault(),b.stopPropagation(),u.goToItem(J.Previous);case O.Home:case O.PageUp:return b.preventDefault(),b.stopPropagation(),u.goToItem(J.First);case O.End:case O.PageDown:return b.preventDefault(),b.stopPropagation(),u.goToItem(J.Last);case O.Escape:b.preventDefault(),b.stopPropagation(),u.closeMenu(),await se(),d==null||d.focus({preventScroll:!0});break;case O.Tab:b.preventDefault(),b.stopPropagation();break;default:b.key.length===1&&(u.search(b.key),G=setTimeout(()=>u.clearSearch(),350));break}}function v(w){let b=w;switch(b.key){case O.Space:b.preventDefault();break}}function p(w){k=w,r.set(k)}return s.$$set=w=>{e=X(X({},e),ve(w)),n(13,f=ae(e,i)),"as"in w&&n(0,T=w.as),"use"in w&&n(1,L=w.use),"$$scope"in w&&n(19,U=w.$$scope)},s.$$.update=()=>{var w;s.$$.dirty&16384&&g(n(7,t=u.buttonStore)),s.$$.dirty&16384&&m(n(6,r=u.itemsStore)),s.$$.dirty&81920&&n(5,l=K!==void 0?$===Ue.Open:u.menuState===ne.Open),s.$$.dirty&16388&&Ye({container:k,enabled:u.menuState===ne.Open,accept(b){return b.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:b.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(b){b.setAttribute("role","none")}}),s.$$.dirty&49152&&n(4,c={"aria-activedescendant":u.activeItemIndex===null||(w=u.items[u.activeItemIndex])==null?void 0:w.id,"aria-labelledby":d==null?void 0:d.id,id:q,role:"menu",tabIndex:0}),s.$$.dirty&16384&&n(3,a={open:u.menuState===ne.Open})},[T,L,k,a,c,l,r,t,M,E,K,Y,v,f,u,d,$,_,p,U]}class at extends ue{constructor(e){super(),ie(this,e,rt,nt,le,{as:0,use:1})}}const ot=s=>s&8,lt=s=>({}),Ne=s=>({...s[3]});function ut(s){let e;const n=s[17].default,t=we(n,s,s[19],Ne);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&524296)&&ye(t,n,r,r[19],ot(l)||!e?Ie(r[19]):Se(n,r[19],l,lt),Ne)},i(r){e||(A(t,r),e=!0)},o(r){P(t,r),e=!1},d(r){t&&t.d(r)}}}function it(s){let e,n,t;const r=[{...s[12],...s[4]},{use:[...s[1],s[6]]},{as:s[0]},{slotProps:s[3]},{name:"MenuItem"}];function l(a){s[18](a)}let c={$$slots:{default:[ut]},$$scope:{ctx:s}};for(let a=0;a<r.length;a+=1)c=X(c,r[a]);return s[2]!==void 0&&(c.el=s[2]),e=new Te({props:c}),xe.push(()=>Me(e,"el",l)),e.$on("click",s[8]),e.$on("focus",s[9]),e.$on("pointermove",s[10]),e.$on("mousemove",s[10]),e.$on("pointerleave",s[11]),e.$on("mouseleave",s[11]),{c(){N(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,i){V(e,a,i),t=!0},p(a,[i]){const f=i&4187?Ee(r,[i&4112&&{...a[12],...a[4]},i&66&&{use:[...a[1],a[6]]},i&1&&{as:a[0]},i&8&&{slotProps:a[3]},r[4]]):{};i&524296&&(f.$$scope={dirty:i,ctx:a}),!n&&i&4&&(n=!0,f.el=a[2],Ce(()=>n=!1)),e.$set(f)},i(a){t||(A(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){B(e,a)}}}function ct(s,e,n){let t,r,l,c,a;const i=["as","use","disabled"];let f=ae(e,i),u,d,C=W,g=()=>(C(),C=oe(r,p=>n(21,d=p)),r);s.$$.on_destroy.push(()=>C());let{$$slots:k={},$$scope:o}=e,{as:m="a"}=e,{use:$=[]}=e,{disabled:_=!1}=e;const U=Ae(ke(),[{name:"click",shouldExclude:()=>_}]),T=Pe("MenuItem");$e(s,T,p=>n(16,u=p));const L=`headlessui-menu-item-${De()}`;let M,E={disabled:_,textValue:l};He(async()=>{u.registerItem(L,E)}),Ve(()=>{u.unregisterItem(L)}),Be(async()=>{var p;u.menuState===ne.Open&&t&&(await se(),(p=M==null?void 0:M.scrollIntoView)==null||p.call(M,{block:"nearest"}))});async function q(p){if(_)return p.preventDefault();u.closeMenu(),d==null||d.focus({preventScroll:!0})}function G(){if(_)return u.goToItem(J.Nothing);u.goToItem(J.Specific,L)}function K(){_||t||u.goToItem(J.Specific,L)}function Y(){_||t&&u.goToItem(J.Nothing)}function v(p){M=p,n(2,M)}return s.$$set=p=>{e=X(X({},e),ve(p)),n(12,f=ae(e,i)),"as"in p&&n(0,m=p.as),"use"in p&&n(1,$=p.use),"disabled"in p&&n(13,_=p.disabled),"$$scope"in p&&n(19,o=p.$$scope)},s.$$.update=()=>{var p;s.$$.dirty&65536&&n(14,t=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===L:!1),s.$$.dirty&65536&&g(n(5,r=u.buttonStore)),s.$$.dirty&4&&n(15,l=((p=M==null?void 0:M.textContent)==null?void 0:p.toLowerCase().trim())||""),s.$$.dirty&8192&&(E.disabled=_),s.$$.dirty&32768&&(E.textValue=l),s.$$.dirty&8192&&n(4,c={id:L,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0}),s.$$.dirty&24576&&n(3,a={active:t,disabled:_})},[m,$,M,a,c,r,U,T,q,G,K,Y,f,_,t,l,u,k,v,o]}class te extends ue{constructor(e){super(),ie(this,e,ct,it,le,{as:0,use:1,disabled:13})}}function ft(s){let e,n;return e=new be({props:{class:"text-xl sm:text-4xl",icon:ze}}),{c(){N(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){V(e,t,r),n=!0},p:W,i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function mt(s){let e,n="Free Bets";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-52vdd3"&&(e.textContent=n),this.h()},h(){h(e,"href","/freebets"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function pt(s){let e,n="Fun Bets";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-195n7nf"&&(e.textContent=n),this.h()},h(){h(e,"href","/funbets"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function dt(s){let e,n="Δελτία";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1cowo2"&&(e.textContent=n),this.h()},h(){h(e,"href","/coupons"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function ht(s){let e,n="Στατιστική";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1vr3ndt"&&(e.textContent=n),this.h()},h(){h(e,"href","/statistics"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function gt(s){let e,n="Gallery";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-l7ohnp"&&(e.textContent=n),this.h()},h(){h(e,"href","/gallery"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function _t(s){let e,n="FAQ";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-y9n3c1"&&(e.textContent=n),this.h()},h(){h(e,"href","/faq"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function bt(s){let e,n="Επικοινωνία";return{c(){e=y("a"),e.textContent=n,this.h()},l(t){e=I(t,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-5x18dp"&&(e.textContent=n),this.h()},h(){h(e,"href","mailto:betalexander777@gmail.com"),h(e,"target","_blank"),h(e,"class","block text-center text-xl font-semibold opacity-95")},m(t,r){j(t,e,r)},p:W,d(t){t&&S(e)}}}function $t(s){let e,n,t,r,l,c,a,i,f,u,d,C,g,k;return e=new te({props:{class:"p-2 mt-5",$$slots:{default:[mt,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),t=new te({props:{class:"p-2",$$slots:{default:[pt,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),l=new te({props:{class:"p-2",$$slots:{default:[dt,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),a=new te({props:{class:"p-2",$$slots:{default:[ht,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),f=new te({props:{class:"p-2",$$slots:{default:[gt,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),d=new te({props:{class:"p-2",$$slots:{default:[_t,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),g=new te({props:{class:"p-2",$$slots:{default:[bt,({active:o})=>({0:o}),({active:o})=>o?1:0]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment),n=D(),N(t.$$.fragment),r=D(),N(l.$$.fragment),c=D(),N(a.$$.fragment),i=D(),N(f.$$.fragment),u=D(),N(d.$$.fragment),C=D(),N(g.$$.fragment)},l(o){H(e.$$.fragment,o),n=F(o),H(t.$$.fragment,o),r=F(o),H(l.$$.fragment,o),c=F(o),H(a.$$.fragment,o),i=F(o),H(f.$$.fragment,o),u=F(o),H(d.$$.fragment,o),C=F(o),H(g.$$.fragment,o)},m(o,m){V(e,o,m),j(o,n,m),V(t,o,m),j(o,r,m),V(l,o,m),j(o,c,m),V(a,o,m),j(o,i,m),V(f,o,m),j(o,u,m),V(d,o,m),j(o,C,m),V(g,o,m),k=!0},p(o,m){const $={};m&2&&($.$$scope={dirty:m,ctx:o}),e.$set($);const _={};m&2&&(_.$$scope={dirty:m,ctx:o}),t.$set(_);const U={};m&2&&(U.$$scope={dirty:m,ctx:o}),l.$set(U);const T={};m&2&&(T.$$scope={dirty:m,ctx:o}),a.$set(T);const L={};m&2&&(L.$$scope={dirty:m,ctx:o}),f.$set(L);const M={};m&2&&(M.$$scope={dirty:m,ctx:o}),d.$set(M);const E={};m&2&&(E.$$scope={dirty:m,ctx:o}),g.$set(E)},i(o){k||(A(e.$$.fragment,o),A(t.$$.fragment,o),A(l.$$.fragment,o),A(a.$$.fragment,o),A(f.$$.fragment,o),A(d.$$.fragment,o),A(g.$$.fragment,o),k=!0)},o(o){P(e.$$.fragment,o),P(t.$$.fragment,o),P(l.$$.fragment,o),P(a.$$.fragment,o),P(f.$$.fragment,o),P(d.$$.fragment,o),P(g.$$.fragment,o),k=!1},d(o){o&&(S(n),S(r),S(c),S(i),S(u),S(C)),B(e,o),B(t,o),B(l,o),B(a,o),B(f,o),B(d,o),B(g,o)}}}function vt(s){let e,n,t,r;return e=new Xe({props:{class:"flex lg:hidden",$$slots:{default:[ft]},$$scope:{ctx:s}}}),t=new at({props:{class:"divide-y-2 divide-secondary top-0 right-0 h-screen w-44 bg-gray-100 bg-opacity-90 shadow-2xl transition-all absolute z-50 flex flex-col opacity-100 lg:hidden",$$slots:{default:[$t]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment),n=D(),N(t.$$.fragment)},l(l){H(e.$$.fragment,l),n=F(l),H(t.$$.fragment,l)},m(l,c){V(e,l,c),j(l,n,c),V(t,l,c),r=!0},p(l,c){const a={};c&2&&(a.$$scope={dirty:c,ctx:l}),e.$set(a);const i={};c&2&&(i.$$scope={dirty:c,ctx:l}),t.$set(i)},i(l){r||(A(e.$$.fragment,l),A(t.$$.fragment,l),r=!0)},o(l){P(e.$$.fragment,l),P(t.$$.fragment,l),r=!1},d(l){l&&S(n),B(e,l),B(t,l)}}}function xt(s){let e,n,t,r,l,c,a="ALEXANDER<br/>THE BET",i,f,u='<a href="/freebets" class="text-white hover:text-tertiary transition-colors duration-300">Free Bets</a> <a href="/funbets" class="text-white hover:text-tertiary transition-colors duration-300">Fun Bets</a> <a href="/coupons" class="text-white hover:text-tertiary transition-colors duration-300">Δελτία</a> <a href="/statistics" class="text-white hover:text-tertiary transition-colors duration-300">Στατιστική</a> <a href="/gallery" class="text-white hover:text-tertiary transition-colors duration-300">Gallery</a> <a href="/faq" class="text-white hover:text-tertiary transition-colors duration-300">FAQ</a> <a href="mailto:betalexander777@gmail.com" target="_blank" class="text-white hover:text-tertiary transition-colors duration-300">Επικοινωνία</a>',d,C,g,k;return g=new We({props:{$$slots:{default:[vt]},$$scope:{ctx:s}}}),{c(){e=y("nav"),n=y("a"),t=y("img"),l=D(),c=y("h1"),c.innerHTML=a,i=D(),f=y("div"),f.innerHTML=u,d=D(),C=y("div"),N(g.$$.fragment),this.h()},l(o){e=I(o,"NAV",{class:!0});var m=Q(e);n=I(m,"A",{href:!0,class:!0});var $=Q(n);t=I($,"IMG",{src:!0,alt:!0,class:!0}),l=F($),c=I($,"H1",{class:!0,"data-svelte-h":!0}),z(c)!=="svelte-16io9uh"&&(c.innerHTML=a),$.forEach(S),i=F(m),f=I(m,"DIV",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-o21zed"&&(f.innerHTML=u),d=F(m),C=I(m,"DIV",{class:!0});var _=Q(C);H(g.$$.fragment,_),_.forEach(S),m.forEach(S),this.h()},h(){Oe(t.src,r=qe)||h(t,"src",r),h(t,"alt","Logo"),h(t,"class","w-20 sm:w-28"),h(c,"class","text-center text-lg sm:text-3xl text-tertiary font-oswald"),h(n,"href","/"),h(n,"class","flex flex-row items-center gap-2 lg:gap-5"),h(f,"class","ml-auto hidden lg:flex gap-4 2xl:gap-10 text-xl font-sans items-center"),h(C,"class","ml-auto"),h(e,"class","w-full bg-secondary py-8 px-8 sm:px-12 xl:px-24 flex flex-row items-center")},m(o,m){j(o,e,m),x(e,n),x(n,t),x(n,l),x(n,c),x(e,i),x(e,f),x(e,d),x(e,C),V(g,C,null),k=!0},p(o,[m]){const $={};m&2&&($.$$scope={dirty:m,ctx:o}),g.$set($)},i(o){k||(A(g.$$.fragment,o),k=!0)},o(o){P(g.$$.fragment,o),k=!1},d(o){o&&S(e),B(g)}}}class Et extends ue{constructor(e){super(),ie(this,e,null,xt,le,{})}}var Ct={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},kt={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},wt={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};function yt(s){let e,n,t,r,l='<p class="text-lg font-bold text-center">Επικοινωνία</p> <p class="text-center">Email: <a href="mailto:betalexander777@gmail.com" target="_blank" class="hover:underline hover:cursor-pointer">betalexander777@gmail.com</a></p> <a href="https://www.google.com/maps/place/θεσσαλονικη" target="_blank" class="text-center hover:underline hover:cursor-pointer">Θεσσαλονίκη, Ελλάδα</a>',c,a,i,f="Κοινωνικά Δίκτυα",u,d,C,g,k,o="Instagram",m,$,_,U,T,L="Discord",M,E,q,G,K,Y="TikTok",v,p,w='<p class="text-lg font-bold text-center">Ασφάλεια</p> <a href="/privacypolicy" class="text-center hover:underline hover:cursor-pointer">Πολιτική Απορρήτου</a> <a href="/tos" class="text-center hover:underline hover:cursor-pointer">Όροι χρήσης</a>',b,Z,ce='<p class="text-center">© 2023 Alexander The Bet. All rights reserved.</p> <p class="text-center text-sm">Website exclusively created by <a href="https://github.com/iHaz32" target="_blank" class="font-semibold hover:underline hover:cursor-pointer">https://github.com/iHaz32</a></p>',fe;return C=new be({props:{icon:wt}}),_=new be({props:{icon:Ct}}),q=new be({props:{icon:kt}}),{c(){e=y("footer"),n=y("div"),t=y("div"),r=y("div"),r.innerHTML=l,c=D(),a=y("div"),i=y("p"),i.textContent=f,u=D(),d=y("a"),N(C.$$.fragment),g=D(),k=y("p"),k.textContent=o,m=D(),$=y("a"),N(_.$$.fragment),U=D(),T=y("p"),T.textContent=L,M=D(),E=y("a"),N(q.$$.fragment),G=D(),K=y("p"),K.textContent=Y,v=D(),p=y("div"),p.innerHTML=w,b=D(),Z=y("div"),Z.innerHTML=ce,this.h()},l(R){e=I(R,"FOOTER",{class:!0});var me=Q(e);n=I(me,"DIV",{class:!0});var pe=Q(n);t=I(pe,"DIV",{class:!0});var re=Q(t);r=I(re,"DIV",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-10st1op"&&(r.innerHTML=l),c=F(re),a=I(re,"DIV",{class:!0});var ee=Q(a);i=I(ee,"P",{class:!0,"data-svelte-h":!0}),z(i)!=="svelte-121j3bv"&&(i.textContent=f),u=F(ee),d=I(ee,"A",{href:!0,target:!0,class:!0});var de=Q(d);H(C.$$.fragment,de),g=F(de),k=I(de,"P",{class:!0,"data-svelte-h":!0}),z(k)!=="svelte-1okl8ri"&&(k.textContent=o),de.forEach(S),m=F(ee),$=I(ee,"A",{href:!0,target:!0,class:!0});var he=Q($);H(_.$$.fragment,he),U=F(he),T=I(he,"P",{class:!0,"data-svelte-h":!0}),z(T)!=="svelte-fqm7uy"&&(T.textContent=L),he.forEach(S),M=F(ee),E=I(ee,"A",{href:!0,target:!0,class:!0});var ge=Q(E);H(q.$$.fragment,ge),G=F(ge),K=I(ge,"P",{class:!0,"data-svelte-h":!0}),z(K)!=="svelte-11lqp90"&&(K.textContent=Y),ge.forEach(S),ee.forEach(S),v=F(re),p=I(re,"DIV",{class:!0,"data-svelte-h":!0}),z(p)!=="svelte-73ogrg"&&(p.innerHTML=w),re.forEach(S),b=F(pe),Z=I(pe,"DIV",{class:!0,"data-svelte-h":!0}),z(Z)!=="svelte-10whbcn"&&(Z.innerHTML=ce),pe.forEach(S),me.forEach(S),this.h()},h(){h(r,"class","flex flex-col items-center justify-center gap-1"),h(i,"class","text-lg font-bold text-center"),h(k,"class","text-center hover:underline hover:cursor-pointer"),h(d,"href","https://www.instagram.com/alexanderthebet/"),h(d,"target","_blank"),h(d,"class","flex flex-row items-center gap-1"),h(T,"class","text-center hover:underline hover:cursor-pointer"),h($,"href","https://discord.gg/h6wFmCAuPP"),h($,"target","_blank"),h($,"class","flex flex-row items-center gap-1"),h(K,"class","text-center hover:underline hover:cursor-pointer"),h(E,"href","https://tiktok.com/@alexanderthebet"),h(E,"target","_blank"),h(E,"class","flex flex-row items-center gap-1"),h(a,"class","flex flex-col items-center justify-center gap-1"),h(p,"class","flex flex-col items-center justify-center gap-1"),h(t,"class","flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 pr-0 xl:pr-24"),h(Z,"class","flex flex-col items-center justify-center mt-4"),h(n,"class","flex flex-col justify-center items-center gap-3"),h(e,"class","bg-secondary py-6 px-8 sm:px-12 xl:px-24 text-white font-sans")},m(R,me){j(R,e,me),x(e,n),x(n,t),x(t,r),x(t,c),x(t,a),x(a,i),x(a,u),x(a,d),V(C,d,null),x(d,g),x(d,k),x(a,m),x(a,$),V(_,$,null),x($,U),x($,T),x(a,M),x(a,E),V(q,E,null),x(E,G),x(E,K),x(t,v),x(t,p),x(n,b),x(n,Z),fe=!0},p:W,i(R){fe||(A(C.$$.fragment,R),A(_.$$.fragment,R),A(q.$$.fragment,R),fe=!0)},o(R){P(C.$$.fragment,R),P(_.$$.fragment,R),P(q.$$.fragment,R),fe=!1},d(R){R&&S(e),B(C),B(_),B(q)}}}class At extends ue{constructor(e){super(),ie(this,e,null,yt,le,{})}}export{At as F,Et as N};