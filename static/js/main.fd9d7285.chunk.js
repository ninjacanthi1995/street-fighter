(this.webpackJsonpstreetfighter=this.webpackJsonpstreetfighter||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(8),r=a.n(c),s=(a(14),a(6)),i=(a(15),a(21)),o=a(22),m=a(23);function u(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],r=a[1];return l.a.createElement(m.a,{xs:"3",style:{position:"relative"},className:"p-0",onClick:function(){e.currentPlayer&&(e.playerOneSelectedParent(e.name),r(e.currentPlayer))}},l.a.createElement("img",{style:{width:"100%",position:"absolute",top:"-9%"},src:c?"/images/".concat(c,"p-select.png"):null}),l.a.createElement("img",{style:{width:"100%"},src:"/images/players/tiny/".concat(e.name,".jpg")}))}function p(e){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement("img",{style:{width:"40%"},src:"/images/".concat(e.player,"p.jpg")}),l.a.createElement("img",{style:{width:"100%"},src:"/images/players/large/".concat(e.name,".jpg")}))}var y=function(){var e,t,a=Object(n.useState)(1),c=Object(s.a)(a,2),r=c[0],y=c[1],f=Object(n.useState)(null),g=Object(s.a)(f,2),d=g[0],h=g[1],E=Object(n.useState)(null),w=Object(s.a)(E,2),x=w[0],j=w[1],b=function(e){1==r?(y(2),h(e)):2==r&&(y(null),j(e))};d&&(e=l.a.createElement(p,{name:d,player:1})),x&&(t=l.a.createElement(p,{name:x,player:2}));var v=["blanka","chun-li","dhalsim","guile","honda","ken","ryu","zangief"].map((function(e){return l.a.createElement(u,{playerOneSelectedParent:b,name:e,currentPlayer:r})}));return l.a.createElement(i.a,{style:{display:"flex",justifyContent:"center"},className:"h-100 w-100"},l.a.createElement(o.a,{className:"w-100"},l.a.createElement(m.a,{xs:"4",className:"d-flex flex-column justify-content-center"},e),l.a.createElement(m.a,{xs:"4",style:{display:"flex",alignItems:"center",flexDirection:"column"},className:"justify-content-center"},l.a.createElement("img",{style:{width:"100%",paddingBottom:"50px"},src:"./images/player-select.jpg"}),l.a.createElement(o.a,{style:{cursor:"pointer",display:"flex",flexDirection:"row"},className:"w-100"},v)),l.a.createElement(m.a,{xs:"4",className:"d-flex flex-column justify-content-center"},t)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.fd9d7285.chunk.js.map