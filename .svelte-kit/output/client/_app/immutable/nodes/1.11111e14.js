import{s as S,f as _,l as d,a as x,g as f,h as g,m as h,d as u,c as y,i as m,u as v,n as $,y as E,z as q}from"../chunks/scheduler.0c16bc3d.js";import{S as z,i as C}from"../chunks/index.9868a140.js";import{d as H}from"../chunks/singletons.dc45071f.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),l=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=f(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function w(s,t,r){let o;return q(s,j,n=>r(0,o=n)),[o]}let F=class extends z{constructor(t){super(),C(this,t,w,k,S,{})}};export{F as component};