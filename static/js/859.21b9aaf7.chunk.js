"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{3908:function(e,t,r){r.d(t,{JN:function(){return f},M1:function(){return h},Pg:function(){return m},gH:function(){return v},jP:function(){return b},n6:function(){return p}});var n,a,i,s,c,o,u=r(4165),l=r(5861),d=r(1243);d.Z.defaults.baseURL="https://api.themoviedb.org/3/",d.Z.defaults.params={api_key:"a593ee12b04969e9385b0db7776b59ce"};var f=function(){return(n=n||(0,l.Z)((0,u.Z)().mark((function e(){var t,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},p=function(){return(a=a||(0,l.Z)((0,u.Z)().mark((function e(){var t,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/movie/top_rated",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},v=function(e){return(i=i||(0,l.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},m=function(e){return(s=s||(0,l.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},h=function(e){return(c=c||(0,l.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},b=function(e){return(o=o||(0,l.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3859:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(4165),a=r(5861),i=r(9439),s=r(8683),c=r(4925),o=r(1694),u=r.n(o),l=r(2791),d=r(184),f=["as","disabled"];function p(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,i=e.rel,s=e.role,c=e.onClick,o=e.tabIndex,u=void 0===o?0:o,l=e.type;t||(t=null!=n||null!=a||null!=i?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},d];var f=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==c||c(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:u,href:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var v=l.forwardRef((function(e,t){var r=e.as,n=e.disabled,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,f),s=p(Object.assign({tagName:r,disabled:n},a)),c=(0,i.Z)(s,2),o=c[0],u=c[1].tagName;return(0,d.jsx)(u,Object.assign({},a,o,{ref:t}))}));v.displayName="Button";var m=r(162),h=["as","bsPrefix","variant","size","active","disabled","className"],b=l.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,a=e.variant,o=void 0===a?"primary":a,l=e.size,f=e.active,v=void 0!==f&&f,b=e.disabled,x=void 0!==b&&b,g=e.className,Z=(0,c.Z)(e,h),w=(0,m.vE)(n,"btn"),y=p((0,s.Z)({tagName:r,disabled:x},Z)),j=(0,i.Z)(y,2),k=j[0],N=j[1].tagName;return(0,d.jsx)(N,(0,s.Z)((0,s.Z)((0,s.Z)({},k),Z),{},{ref:t,disabled:x,className:u()(g,w,v&&"active",o&&"".concat(w,"-").concat(o),l&&"".concat(w,"-").concat(l),Z.href&&x&&"disabled")}))}));b.displayName="Button";var x,g,Z=b,w=r(1594),y=r(7689),j=r(1087),k=["title","titleId"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function P(e,t){var r=e.title,n=e.titleId,a=O(e,k);return l.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:50,height:50,fill:"currentColor",className:"bi bi-chevron-double-left",viewBox:"0 0 16 16",ref:t,"aria-labelledby":n},a),r?l.createElement("title",{id:n},r):null,x||(x=l.createElement("path",{fillRule:"evenodd",d:"M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})),g||(g=l.createElement("path",{fillRule:"evenodd",d:"M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})))}var I=l.forwardRef(P),_=(r.p,function(e){var t,r,n=e.data1,a=(0,y.TH)(),i=n.vote_average,s=n.genres,c=n.id,o=n.title,u=n.overview,l=n.poster_path,f=null!==(t=null===a||void 0===a||null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/movies";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Movie Detail"}),(0,d.jsxs)("div",{className:"cast-container",children:[(0,d.jsx)(j.rU,{to:f,children:(0,d.jsx)(I,{alt:"BackImage"})}),(0,d.jsxs)(w.Z,{style:{width:"74.5em",height:"auto",display:"flex",flexDirection:"row",padding:"20px",gap:"20px"},children:[(0,d.jsx)(w.Z.Img,{variant:"left",style:{width:"15em",height:"19em"},src:l?"https://image.tmdb.org/t/p/w500".concat(l):"https://via.placeholder.com/700?text=NoImageFound"}),(0,d.jsxs)(w.Z.Body,{children:[(0,d.jsx)(w.Z.Title,{children:o}),(0,d.jsx)(w.Z.Text,{children:i}),(0,d.jsx)(w.Z.Subtitle,{className:"mb-2 text-muted",children:"Overview"}),(0,d.jsx)(w.Z.Text,{children:u}),(0,d.jsx)(w.Z.Subtitle,{className:"mb-2 text-muted",children:"Genres"}),s&&s.map((function(e){var t=e.name;return(0,d.jsx)(w.Z.Text,{style:{display:"inline-flex",marginLeft:"10px"},children:t},t)})),(0,d.jsxs)("div",{className:"link-box",children:[(0,d.jsxs)(j.rU,{style:{textDecoration:"none"},to:"/movies/".concat(c,"/cast"),state:a.state,children:[" ",(0,d.jsx)(Z,{variant:"primary",className:"movie-btn",children:"Cast"})," "]}),(0,d.jsxs)(j.rU,{style:{textDecoration:"none"},to:"/movies/".concat(c,"/reviews"),state:a.state,children:[(0,d.jsx)(Z,{variant:"primary",className:"movie-btn",children:"Reviews"})," "]})]})]})]},c),(0,d.jsx)(y.j3,{})]})]})}),D=r(3908),E=function(){var e=(0,l.useState)({}),t=(0,i.Z)(e,2),r=t[0],s=t[1],c=(0,y.UO)().id;return(0,l.useEffect)((function(){var e;!function(){(e=e||(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,D.Pg)(c);case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}()}),[c]),(0,d.jsx)(d.Fragment,{children:r&&(0,d.jsx)(_,{data1:r})})}}}]);
//# sourceMappingURL=859.21b9aaf7.chunk.js.map