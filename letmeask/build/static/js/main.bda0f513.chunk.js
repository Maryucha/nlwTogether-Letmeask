(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(27),c=n.n(s),i=n(14),o=n(6),u=n(5),l=n.n(u),d=n(9),j=n(8),b=n(18);n(37),n(39);b.a.initializeApp({apiKey:"AIzaSyDyLIySEIvue5gdfBFq8BxoC-1aB893KmI",authDomain:"lemeask-75168.firebaseapp.com",databaseURL:"https://lemeask-75168-default-rtdb.firebaseio.com",projectId:"lemeask-75168",storageBucket:"lemeask-75168",messagingSenderId:"1044371377941",appId:"1:1044371377941:web:7fb7c14bb2334871eb231c"});var h=b.a.auth(),p=b.a.database(),m=n(1),f=Object(a.createContext)({});function x(e){var t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],s=n[1];function c(){return(c=Object(d.a)(l.a.mark((function e(){var t,n,a,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.a.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(a=n.user,r=a.displayName,c=a.photoURL,i=a.uid,r&&c){e.next=8;break}throw new Error("Faltando informa\xe7\xf5es do Google.");case 8:s({id:i,name:r,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("Faltando informa\xe7\xf5es do Google.");s({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(m.jsx)(f.Provider,{value:{user:r,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}var O=Object(a.createContext)({});function v(e){var t=Object(a.useState)((function(){var e=localStorage.getItem("theme");return null!==e&&void 0!==e?e:"light"})),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){localStorage.setItem("theme",r)}),[r]),Object(m.jsx)(O.Provider,{value:{theme:r,toggleTheme:function(){s("light"===r?"dark":"light")}},children:e.children})}var g=n.p+"static/media/logo.a88331cb.svg",k=n.p+"static/media/delete.22ba6e00.svg",w=n.p+"static/media/check.5dfa6ed6.svg",C=n.p+"static/media/answer.4502a8d5.svg",y=n(30),S=n(31);n(44);function q(e){var t=e.isOutlined,n=void 0!==t&&t,a=Object(S.a)(e,["isOutlined"]);return Object(m.jsx)("button",Object(y.a)({className:"button ".concat(n?"outlined":"")},a))}var A=n(28),I=n.n(A);n(45);function N(e){var t=e.content,n=e.author,a=e.children,r=e.isAnswered,s=void 0!==r&&r,c=e.isHighligted,i=void 0!==c&&c;return Object(m.jsxs)("div",{className:I()("question",{answered:s},{hilighted:i&&!s}),children:[Object(m.jsx)("p",{children:t}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{className:"user-info",children:[Object(m.jsx)("img",{src:n.avatar,alt:n.name}),Object(m.jsx)("span",{children:n.name})]}),Object(m.jsx)("div",{children:a})]})]})}var L=n.p+"static/media/copy.2f36f99e.svg";n(46);function E(e){return Object(m.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:L,alt:"Copiar c\xf3digo da sala"})}),Object(m.jsxs)("span",{children:["Sala #",e.code]})]})}function H(){return Object(a.useContext)(f)}function D(e){var t=H().user,n=Object(a.useState)([]),r=Object(j.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){var n=p.ref("rooms/".concat(e));return n.on("value",(function(e){var n,a=e.val(),r=null!==(n=a.questions)&&void 0!==n?n:{},s=Object.entries(r).map((function(e){var n,a,r,s=Object(j.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighligted:i.isHighligted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(a=Object.entries(null!==(r=i.likes)&&void 0!==r?r:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===a?void 0:a[0]}}));l(a.title),c(s)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:s,title:u}}n(24);function M(){var e=Object(o.f)(),t=Object(o.g)().id,n=D(t),a=n.title,r=n.questions;function s(){return(s=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(){return(c=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Voc\xea tem certeza que deseja excluir essa pergunta?")){e.next=3;break}return e.next=3,p.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighligted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-room",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{src:g,alt:"Letmeask"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(E,{code:t}),Object(m.jsx)(q,{isOutlined:!0,onClick:function(){return s.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(m.jsxs)("main",{children:[Object(m.jsxs)("div",{className:"room-title",children:[Object(m.jsxs)("h1",{children:["Sala ",a]}),r.length>0&&Object(m.jsxs)("span",{children:[r.length," pergunta(s)"]})]}),Object(m.jsx)("div",{className:"question-list",children:r.map((function(e){return Object(m.jsxs)(N,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighligted:e.isHighligted,children:[!e.isAnswered&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(m.jsx)("img",{src:w,alt:"Marcar a pergunta que est\xe1 sendo respondida."})}),Object(m.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(m.jsx)("img",{src:C,alt:"Dar destaque a pergunta"})})]}),Object(m.jsx)("button",{type:"button",onClick:function(){return function(e){return c.apply(this,arguments)}(e.id)},children:Object(m.jsx)("img",{src:k,alt:"Deletar pergunta"})})]},e.id)}))})]})]})}var B=n.p+"static/media/illustration.ae7276f0.svg",G=n.p+"static/media/google-icon.df15d8e5.svg";n(26);function P(){var e=Object(o.f)(),t=H(),n=t.user,r=t.signInWithGoogle,s=Object(a.useContext)(O),c=s.theme,i=s.toggleTheme,u=Object(a.useState)(""),b=Object(j.a)(u,2),h=b[0],f=b[1];function x(){return(x=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==h.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,p.ref("rooms/".concat(h)).get();case 5:if((a=t.sent).exists()){t.next=9;break}return alert("Essa sala n\xe3o existe!"),t.abrupt("return");case 9:if(!a.val().endedAt){t.next=12;break}return alert("Est\xe1 sala j\xe1 est\xe1 fechada!"),t.abrupt("return");case 12:e.push("/rooms/".concat(h));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-auth",className:c,children:[Object(m.jsxs)("aside",{children:[Object(m.jsx)("img",{src:B,alt:"Ilustra\xe7\xe3o simbolizando as perguntas e respostas"}),Object(m.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(m.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("h1",{children:c}),Object(m.jsx)("button",{onClick:i,children:"Toggle"}),Object(m.jsx)("img",{src:g,alt:"Logo do LetMeAsk"}),Object(m.jsxs)("button",{onClick:function(){return x.apply(this,arguments)},className:"create-room",children:[Object(m.jsx)("img",{src:G,alt:"Logo do google"}),"Crie sua Sala com o Google"]}),Object(m.jsx)("div",{className:"separator",children:"Ou entre em uma sala"}),Object(m.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return f(e.target.value)},value:h}),Object(m.jsx)(q,{type:"submit",children:"Entrar na sala"})]})]})})]})}function T(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=H().user,c=Object(o.f)();function u(){return(u=Object(d.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n.trim()){e.next=3;break}return e.abrupt("return");case 3:return a=p.ref("rooms"),e.next=6,a.push({title:n,authorId:null===s||void 0===s?void 0:s.id});case 6:r=e.sent,c.push("/rooms/".concat(r.key));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-auth",children:[Object(m.jsxs)("aside",{children:[Object(m.jsx)("img",{src:B,alt:"Ilustra\xe7\xe3o simbolizando as perguntas e respostas"}),Object(m.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(m.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("img",{src:g,alt:"Logo do LetMeAsk"}),Object(m.jsx)("h2",{children:"Criar uma nova sala"}),Object(m.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Nome da Sala",onChange:function(e){return r(e.target.value)},value:n}),Object(m.jsx)(q,{type:"submit",children:"Criar Sala"})]}),Object(m.jsxs)("p",{children:["Quer entrar em uma sala existente?",Object(m.jsx)(i.b,{to:"/",children:"Clique aqui"})]})]})})]})}function z(){var e=H().user,t=Object(o.g)(),n=Object(a.useState)(""),r=Object(j.a)(n,2),s=r[0],c=r[1],i=t.id,u=D(i),b=u.title,h=u.questions;function f(){return(f=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("Voc\xea precisa estar Logado!");case 5:return a={content:s,author:{name:e.name,avatar:e.avatar},isHighligted:!1,isAnswered:!1},t.next=8,p.ref("rooms/".concat(i,"/questions")).push(a);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(l.a.mark((function t(n,a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,p.ref("rooms/".concat(i,"/questions/").concat(n,"/likes/").concat(a)).remove();case 3:t.next=7;break;case 5:return t.next=7,p.ref("rooms/".concat(i,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-room",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{src:g,alt:"Letmeask"}),Object(m.jsx)(E,{code:i})]})}),Object(m.jsxs)("main",{children:[Object(m.jsxs)("div",{className:"room-title",children:[Object(m.jsxs)("h1",{children:["Sala ",b]}),h.length>0&&Object(m.jsxs)("span",{children:[h.length," pergunta(s)"]})]}),Object(m.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(m.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(m.jsxs)("div",{className:"form-footer",children:[e?Object(m.jsxs)("div",{className:"user-info",children:[Object(m.jsx)("img",{src:e.avatar,alt:e.name}),Object(m.jsx)("span",{children:e.name})]}):Object(m.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(m.jsx)("button",{children:"fa\xe7a seu login."})]}),Object(m.jsx)(q,{type:"submit",disabled:!e,children:"Enviar Pergunta"})]})]}),Object(m.jsx)("div",{className:"question-list",children:h.map((function(e){return Object(m.jsx)(N,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighligted:e.isHighligted,children:!e.isAnswered&&Object(m.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return x.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(m.jsxs)("span",{children:[" ",e.likeCount," "]}),Object(m.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var V=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)(v,{children:Object(m.jsx)(x,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:P}),Object(m.jsx)(o.a,{path:"/rooms/new",component:T}),Object(m.jsx)(o.a,{path:"/rooms/:id",component:z}),Object(m.jsx)(o.a,{path:"/admin/rooms/:id",component:M})]})})})})};n(51);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.bda0f513.chunk.js.map