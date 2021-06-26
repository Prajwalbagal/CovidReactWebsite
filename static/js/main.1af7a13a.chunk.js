(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(61),s=n.n(a),o=(n(68),n(3)),i=n.n(o),u=n(7),d=n(2),j=(n(70),n(71),n(25)),l=n.n(j),b=n(0),f=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"top",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("h1",{children:"Covid19 Data"})}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsxs)("h2",{className:"red",children:["Confirmed  ",Object(b.jsx)(l.a,{start:0,end:e.confirmed,duration:2.75})," "]}),Object(b.jsxs)("h2",{className:"red",children:["Recovered  ",Object(b.jsx)(l.a,{start:0,end:e.recovered,duration:2.75})," "]}),Object(b.jsxs)("h2",{className:"red",children:["Deaths     ",Object(b.jsx)(l.a,{start:0,end:e.deaths,duration:2.75})," "]})]})]})})},h=n(24),O=(n(184),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/daily");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(b.jsx)(h.b,{data:{labels:n.map((function(e){return e.reportDate})),datasets:[{data:n.map((function(e){return e.confirmed.total})),label:"Infected",borderColor:"green",fill:!0},{data:n.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}});return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:s})})}),v=(n(185),function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(0),o=Object(d.a)(s,2),j=o[0],l=o[1],f=Object(c.useState)(0),O=Object(d.a)(f,2),v=O[0],x=O[1];Object(c.useEffect)((function(){m()}),[e.countryname]);var p,m=function(){var t=Object(u.a)(i.a.mark((function t(){var n,c,r,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.countryname){t.next=21;break}return console.log(e.countryname),t.next=4,fetch("https://covid19.mathdro.id/api/countries/".concat(e.countryname));case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,t.next=10,c.confirmed.value;case 10:return r=t.sent,t.next=13,c.deaths.value;case 13:return s=t.sent,t.next=16,c.recovered.value;case 16:o=t.sent,x(o),a(r),console.log(r,s),l(s);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return p=""!==e.countryname?Object(b.jsx)(h.a,{data:{labels:["Confirmed","Deaths","Recovered"],datasets:[{data:[r,j,v],label:"People",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],fill:!0}]},options:{legend:{display:!1},title:{display:!0}}}):"",Object(b.jsx)(b.Fragment,{children:""===p?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)("div",{className:"containerone",children:p})})}),x=(n(186),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),o=s[0],j=s[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.countries;case 8:c=e.sent,j(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"centerone",children:Object(b.jsxs)("select",{onChange:function(e){r(e.target.value)},children:[Object(b.jsx)("option",{}),o.map((function(e){return Object(b.jsx)("option",{children:e.name},e.name)}))]})}),Object(b.jsx)(v,{countryname:n})]})});var p=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(d.a)(a,2),o=s[0],j=s[1],l=Object(c.useState)(0),h=Object(d.a)(l,2),v=h[0],p=h[1];Object(c.useEffect)((function(){m()}),[]);var m=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.confirmed.value),j(n.recovered.value),p(n.deaths.value);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{confirmed:n,recovered:o,deaths:v}),Object(b.jsx)(x,{}),Object(b.jsx)(O,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),m()},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.1af7a13a.chunk.js.map