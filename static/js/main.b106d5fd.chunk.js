(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(67),r=n.n(a),i=(n(73),n(14)),o=n(15),l=n(17),u=n(16),j=(n(74),n(43),n(26)),h=n.n(j),d=n(0),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=this;fetch("https://newsapi.org/v1/sources?language=en").then((function(e){return e.json()})).then((function(t){e.setState({data:t.sources})}))}},{key:"render",value:function(){var e=this,t=h.a.map(this.state.data,(function(t){return console.log(t),Object(d.jsxs)("div",{className:"list-group-item",children:["* \xa0",Object(d.jsx)("a",{href:"#"+t.id,onClick:function(n){e.props.updateSource(t.id,t.name)},children:t.name},t.id)]})}));return Object(d.jsx)("div",{className:"list-group",children:t})}}]),n}(c.a.Component),m=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar sticky-top navbar-inverse bg-inverse",children:Object(d.jsx)("h4",{className:"navbar-brand",children:"News Daily - Read news from anywhere"})})})},O=n(3),v=O.ShareButtons.FacebookShareButton,f=O.ShareButtons.GooglePlusShareButton,x=O.ShareButtons.LinkedinShareButton,p=O.ShareButtons.TwitterShareButton,g=Object(O.generateShareIcon)("facebook"),N=Object(O.generateShareIcon)("twitter"),w=Object(O.generateShareIcon)("google"),k=Object(O.generateShareIcon)("linkedin"),S=function(e){var t=e.share,n=e.title;return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col s2 m2 l2",children:Object(d.jsx)(v,{url:t,title:n,className:"Demo__some-network__share-button",children:Object(d.jsx)(g,{size:32,round:!0})})}),Object(d.jsx)("div",{className:"col s2 m2 l2",children:Object(d.jsx)(p,{url:t,title:n,className:"Demo__some-network__share-button",children:Object(d.jsx)(N,{size:32,round:!0})})}),Object(d.jsx)("div",{className:"col s2 m2 l2",children:Object(d.jsx)(f,{url:t,className:"Demo__some-network__share-button",children:Object(d.jsx)(w,{size:32,round:!0})})}),Object(d.jsx)("div",{className:"col s2 m2 l2",children:Object(d.jsx)(x,{url:t,title:n,windowWidth:750,windowHeight:600,className:"Demo__some-network__share-button",children:Object(d.jsx)(k,{size:32,round:!0})})})]})};S.defaultProps={share:"",title:""};var _=S,y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.getData()}},{key:"componentWillReceiveProps",value:function(e){this.getData(e.source,e.sourceName)}},{key:"getData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abc-news-au",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ABC News (AU)",s="https://newsapi.org/v1/articles?source=".concat(t,"&apiKey=b5d3c06968cf439bb09c3ba2f1e489ff");fetch(s).then((function(e){return e.json()})).then((function(s){e.setState({source:t,sourceName:n,data:s.articles})}))}},{key:"render",value:function(){var e=0,t=h.a.map(this.state.data,(function(t){return Object(d.jsxs)("div",{className:"list-group-item ",children:[Object(d.jsxs)("p",{className:"col-10",children:[Object(d.jsx)("b",{children:t.title})," ",Object(d.jsx)("br",{})," ",Object(d.jsx)("span",{className:"lead",children:t.description}),"\xa0",Object(d.jsx)("a",{href:t.url,target:"_blank",children:"Read More..."})]}),Object(d.jsx)(_,{share:t.url,title:t.title}),Object(d.jsx)("img",{src:t.urlToImage,className:"col-2 rounded",height:"100"})]},e++)}));return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h2",{className:"card-header",children:this.state.sourceName}),Object(d.jsx)("div",{className:"list-group list-group-flush",children:t})]})}}]),n}(c.a.Component),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(o.a)(n,[{key:"updateSource",value:function(e,t){this.setState({source:e,sourceName:t})}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{className:"jumbotron-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)(b,{updateSource:this.updateSource.bind(this)})}),Object(d.jsx)("div",{className:"col-sm-8 fixed-content",children:Object(d.jsx)(y,{source:this.state.source,sourceName:this.state.sourceName})})]})})]})}}]),n}(c.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),D()},73:function(e,t,n){},74:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.b106d5fd.chunk.js.map