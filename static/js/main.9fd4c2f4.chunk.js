(this.webpackJsonpco19=this.webpackJsonpco19||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),s=c.n(a),r=c(24),j=c.n(r),i=(c(32),c(12)),l=(c(33),c(6)),o=c(25),d=(c(34),c(11)),x=c.n(d),h=c(26),b=c(10);var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),j=Object(i.a)(r,2),d=j[0],O=j[1],u=Object(a.useState)(""),p=Object(i.a)(u,2),g=p[0],T=p[1];Object(a.useEffect)((function(){x.a.all([x.a.get("https://corona.lmao.ninja/v2/all"),x.a.get("https://corona.lmao.ninja/v2/countries?sort=country")]).then((function(e){console.log(e[1].data),s(e[0].data),O(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var m=(new Date).toLocaleDateString(),f=d.filter((function(e){return""!==g?e.country.includes(g):e})).map((function(e,t){return Object(n.jsxs)(l.a,{bg:"light",text:"dark",className:"text-center p-3",children:[Object(n.jsx)(l.a.Img,{variant:"top",src:e.countryInfo.flag}),Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Title,{children:e.country}),Object(n.jsxs)(l.a.Text,{children:["CASES ",e.cases]}),Object(n.jsxs)(l.a.Text,{children:["DEATHS ",e.deaths]}),Object(n.jsxs)(l.a.Text,{children:["RECOVERED ",e.recovered]}),Object(n.jsxs)(l.a.Text,{children:["TODAYS CASES ",e.todayCases]}),Object(n.jsxs)(l.a.Text,{children:["TODAYS DEATH ",e.todayDeaths]}),Object(n.jsxs)(l.a.Text,{children:["ACTIVE ",e.active]}),Object(n.jsxs)(l.a.Text,{children:["CRICTICAL ",e.critical]})]})]},t)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)(o.a,{children:[Object(n.jsxs)(l.a,{bg:"secondary",text:"white",className:"text-center p-3",children:[Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Title,{children:"CASES"}),Object(n.jsx)(l.a.Text,{children:c.cases})]}),Object(n.jsx)(l.a.Footer,{children:Object(n.jsxs)("small",{children:["Last updated ",m]})})]}),Object(n.jsxs)(l.a,{bg:"success",text:"white",className:"text-center p-3",style:{margin:"10 px"},children:[Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Title,{children:" DEATHS  "}),Object(n.jsx)(l.a.Text,{children:c.deaths})]}),Object(n.jsx)(l.a.Footer,{children:Object(n.jsxs)("small",{children:["Last updated ",m]})})]}),Object(n.jsxs)(l.a,{bg:"danger",text:"white",className:"text-center p-3",style:{margin:"10 px"},children:[Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Title,{children:"RECOVERED"}),Object(n.jsx)(l.a.Text,{children:c.recovered})]}),Object(n.jsx)(l.a.Footer,{children:Object(n.jsxs)("small",{children:["Last updated ",m]})})]})]}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Group,{controlId:"formGroupEmail",children:[Object(n.jsx)(b.a.Label,{children:"Search"}),Object(n.jsx)(b.a.Control,{type:"text",placeholder:"Enter country",onChange:function(e){return T(e.target.value)}})]})}),Object(n.jsx)(h.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}],children:f})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};j.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),u()}},[[56,1,2]]]);
//# sourceMappingURL=main.9fd4c2f4.chunk.js.map