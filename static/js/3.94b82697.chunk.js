"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{4003:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a=n(501),c=n(6871),i=n(2791),s=n(2083),o="MovieDescription_movieDescription__Qf50A",u="MovieDescription_textContent__qIzO+",p=n(184);function l(e){var t=e.movieDetail,n=t.poster_path,r=t.title,a=t.name,c=t.release_date,i=t.vote_average,s=t.overview,l=t.genres;return(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"film poster",height:"300px"}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsxs)("h2",{children:[null!==r&&void 0!==r?r:a," (",new Date(c).getFullYear(),")"]}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*i),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),s?(0,p.jsx)("p",{children:s}):(0,p.jsx)("p",{children:"We don't have overview for this movie"}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:l.map((function(e){return" ".concat(e.name)}))})]})]})}var d="MovieDetails_detailContainer__dDJsj",h="MovieDetails_button__PGjyO",f="MovieDetails_additionalInfo__qmwMY";function v(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],u=(0,i.useState)(""),v=(0,r.Z)(u,2),x=v[0],m=v[1],_=(0,c.TH)(),j=(0,c.UO)().movieId,w=(0,c.s0)(),y=_.state;return(0,i.useEffect)((function(){y&&o(y)}),[y]),(0,i.useEffect)((function(){(0,s.d0)(j).then(m)}),[j]),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)("button",{className:h,disabled:!n,type:"button",onClick:function(){w(n)},children:"\u2190 Go back"}),x&&(0,p.jsx)(l,{movieDetail:x}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("h4",{children:"Additional Info"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(c.j3,{})]})}},2083:function(e,t,n){n.d(t,{Hg:function(){return p},M1:function(){return f},d0:function(){return d},tx:function(){return _},uP:function(){return x}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),s=n.n(i),o="https://api.themoviedb.org/3",u="776d9fc25cdee411748cae84044282cc";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/movie/").concat(t,"?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/search/movie?api_key=").concat(u,"&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=3.94b82697.chunk.js.map