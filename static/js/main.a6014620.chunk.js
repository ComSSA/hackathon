(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),i=s(8),a=s.n(i),o=(s(13),s(2)),r=s(3),d=s(5),l=s(4),h=(s(14),s(0)),j=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"preloader",value:function(){var e=document.querySelector(".preloader");setTimeout((function(){e.style.opacity="0",setTimeout((function(){e.style.display="none"}),1e3)}),1e3)}},{key:"componentDidMount",value:function(){this.preloader()}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"preloader",children:Object(h.jsx)("div",{class:"spinner_wrap",children:Object(h.jsx)("div",{class:"spinner"})})})}}]),s}(n.Component),u=s(6),x=(s(16),function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).count=n.count.bind(Object(u.a)(n)),n.state={days:0,minutes:0,hours:0,secounds:0,time_up:""},n.x=null,n.deadline=new Date,n}return Object(r.a)(s,[{key:"count",value:function(){var e=new Date,t=this.deadline-e,s=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3),a=s<10?"0"+s:s,o=n<10?"0"+n:n,r=c<10?"0"+c:c,d=i<10?"0"+i:i;this.setState({days:a,minutes:r,hours:o,seconds:d}),t<0&&(clearInterval(this.x),this.setState({days:0,minutes:0,hours:0,seconds:0,time_up:"TIME IS UP"}))}},{key:"componentDidMount",value:function(){this.deadline=new Date(2022,6,29,18),this.x=setInterval(this.count,1e3)}},{key:"render",value:function(){var e=this.state,t=e.days,s=e.seconds,n=e.hours,c=e.minutes;return Object(h.jsxs)("div",{id:"countdown",children:[Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("p",{id:"day",children:t}),Object(h.jsx)("span",{className:"text",children:"Days"})]})}),Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("p",{id:"hour",children:n}),Object(h.jsx)("span",{className:"text",children:"Hours"})]})}),Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("p",{id:"minute",children:c}),Object(h.jsx)("span",{className:"text",children:"Minutes"})]})}),Object(h.jsx)("div",{className:"col-4",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("p",{id:"second",children:s}),Object(h.jsx)("span",{className:"text",children:"Seconds"})]})})]})}}]),s}(n.Component)),m=(s(17),function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"optin",children:[Object(h.jsx)("p",{children:"Register now to get involved!"}),Object(h.jsx)("button",{onClick:function(){return window.location.href="https://curtinuniversity.wufoo.com/forms/curtin-singapore-hackathon-group-registration/"},children:"Group Registration"}),Object(h.jsx)("button",{onClick:function(){return window.location.href="https://curtinuniversity.wufoo.com/forms/curtin-singapore-hackathon-individual-sign-up/"},children:"Solo Registration"}),Object(h.jsx)("div",{id:"modal",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h3",{children:"Re"}),Object(h.jsxs)("div",{className:"clearfix",children:[Object(h.jsx)("div",{className:"col-8"}),Object(h.jsx)("div",{className:"col-3"})]})]})})]})}}]),s}(n.Component)),p=(s(18),s.p+"static/media/discord.9a823ca6.svg"),b=s.p+"static/media/linkedin.171001b5.svg";function O(){return Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(h.jsxs)("div",{className:"my-5",children:["Get involved with ComSSA!"," "]}),Object(h.jsx)("button",{className:"ms-3",style:{height:"50px",width:"50px",border:"transparent",borderRadius:"50px",backgroundColor:"#5865F2"},onClick:function(){window.location.href="https://discord.gg/SuwfFfjYJB"},children:Object(h.jsx)("img",{src:p,alt:"...",height:"30px",width:"30px"})}),Object(h.jsx)("button",{className:"ms-3",style:{height:"50px",width:"50px",border:"transparent",borderRadius:"50px",backgroundColor:"transparent"},onClick:function(){window.location.href="https://www.linkedin.com/company/computer-science-students-association/"},children:Object(h.jsx)("img",{src:b,alt:"...",height:"50px",width:"50px"})}),Object(h.jsx)("button",{className:"ms-3",style:{height:"50px",width:"50px",border:"transparent",borderRadius:"50px",backgroundColor:"transparent"},onClick:function(){window.location.href="https://www.facebook.com/ComSSACurtin/"},children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"...",height:"50px",width:"50px"})})]})}var A=s.p+"static/media/mycological-mayhem.f2efacbc.svg",N=s.p+"static/media/Landscape_Hackathon.d726a639.svg";s(19);var f=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{src:N,width:"900px",alt:"...",style:{marginBottom:"-30px",maxWidth:"100%"}})}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{src:A,width:"600px",alt:"...",style:{marginBottom:"20px",maxWidth:"70%"}}),Object(h.jsxs)("h2",{children:[Object(h.jsx)("span",{className:"hackathon",children:Object(h.jsx)("strong",{children:"STARTING SOON"})}),Object(h.jsx)("br",{})]}),Object(h.jsx)(x,{}),Object(h.jsx)(m,{}),Object(h.jsx)(O,{}),Object(h.jsx)("h2",{children:Object(h.jsxs)("span",{className:"bottomtext",children:[Object(h.jsx)("strong",{children:"Contact us"})," at facebook.com/ComSSACurtin for further questions"]})})]})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.a6014620.chunk.js.map