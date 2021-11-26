(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(8),s=n.n(c),a=n(3),r=n(1),o=(n(13),n(14),n(15),n(0)),i=function(t){var e=t.posts,n=t.postByUserId,c=t.showPost,s=t.activePost;return Object(o.jsxs)("div",{className:"PostsList",children:[Object(o.jsx)("h2",{children:"Posts:"}),Object(o.jsx)("ul",{className:"PostsList__list",children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,a=t.title,i=t.userId;return Object(o.jsx)(r.Fragment,{children:(0===n||n===i)&&Object(o.jsxs)("li",{className:"PostsList__item",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("b",{children:["[User #",i,"]:"," "]}),a]}),Object(o.jsx)("button",{type:"button",className:"PostsList__button button ".concat(s===e&&"active_btn"),onClick:function(){c(e)},children:s===e?"Close":"Open"})]},e)},e)}))})]})},u=n(2),l=n.n(u),d=n(4),j=n(5),p=n(7),m=(n(18),function(t){var e=t.postId,n=t.addComment,c=Object(r.useState)({postId:e,name:"",email:"",body:""}),s=Object(a.a)(c,2),i=s[0],u=s[1];function l(t){u((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(j.a)({},t.name,t.value))}))}return Object(o.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),n(i),u({postId:e,name:"",email:"",body:""})},children:[Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("input",{required:!0,onChange:function(t){l(t.target)},type:"text",name:"name",value:i.name,placeholder:"Your name",className:"NewCommentForm__input"})}),Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("input",{required:!0,onChange:function(t){l(t.target)},type:"text",value:i.email,name:"email",placeholder:"Your email",className:"NewCommentForm__input"})}),Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("textarea",{required:!0,onChange:function(t){l(t.target)},value:i.body,name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})}),Object(o.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),b=(n(19),"https://mate.academy/students-api");function f(){return(f=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(b,"/posts")).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(b,"/users")).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(b,"/posts/").concat(e)).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(b,"/comments/?postId=").concat(e)).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return fetch("".concat(b,"/comments/").concat(t),{method:"DELETE"})}function y(t){return fetch("".concat(b,"/comments"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(t)})}var N=function(t){var e=t.post,n=Object(r.useState)([]),c=Object(a.a)(n,2),s=c[0],i=c[1],u=Object(r.useState)(!1),j=Object(a.a)(u,2),p=j[0],b=j[1];function f(t){return h.apply(this,arguments)}function h(){return(h=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n);case 2:v(e.id).then((function(t){i(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n);case 2:v(e.id).then((function(t){i(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){f(e.id)}),[e]),Object(o.jsxs)("div",{className:"PostDetails",children:[Object(o.jsx)("h2",{children:"Post details:"}),Object(o.jsx)("section",{className:"PostDetails__post",children:Object(o.jsx)("p",{children:e.body})}),Object(o.jsxs)("section",{className:"PostDetails__comments",children:[0!==(null===s||void 0===s?void 0:s.length)&&Object(o.jsxs)("button",{type:"button",className:"button",onClick:function(){b((function(t){return!t}))},children:[p?" Hide":"Show"," ",s.length," ","comments"]}),p&&Object(o.jsx)("ul",{className:"PostDetails__list",children:null===s||void 0===s?void 0:s.map((function(t){var e=t.body,n=t.id;return Object(o.jsxs)("li",{className:"PostDetails__list-item",children:[Object(o.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){f(n)},children:"X"}),Object(o.jsx)("p",{children:e})]},n)}))})]}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(o.jsx)(m,{addComment:function(t){!function(t){O.apply(this,arguments)}(t)},postId:e.id})})})]})},w=function(){var t=Object(r.useState)(null),e=Object(a.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(null),u=Object(a.a)(s,2),l=u[0],d=u[1],j=Object(r.useState)(0),p=Object(a.a)(j,2),m=p[0],b=p[1],v=Object(r.useState)(null),x=Object(a.a)(v,2),_=x[0],y=x[1];function w(t){void 0!==(null===_||void 0===_?void 0:_.id)&&(null===_||void 0===_?void 0:_.id)===t?y(null):function(t){return O.apply(this,arguments)}(t).then((function(t){return y(t)}))}return Object(r.useEffect)((function(){(function(){return f.apply(this,arguments)})().then((function(t){d(t)})),function(){return h.apply(this,arguments)}().then((function(t){var e=t.filter((function(t){return null!==t.username&&""!==t.username}));c(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App__header",children:Object(o.jsxs)("div",{children:["Select a user: \xa0",Object(o.jsxs)("select",{className:"App__user-selector",onChange:function(t){b(+t.target.value)},children:[Object(o.jsx)("option",{value:"0",children:"All users"}),null===n||void 0===n?void 0:n.map((function(t){return Object(o.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})}),Object(o.jsxs)("main",{className:"App__main",children:[Object(o.jsx)("div",{className:"App__sidebar",children:Object(o.jsx)(i,{postByUserId:m,posts:l,activePost:null===_||void 0===_?void 0:_.id,showPost:function(t){w(t)}})}),null!==_&&Object(o.jsx)("div",{className:"App__content",children:Object(o.jsx)(N,{post:_})})]})]})};s.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3aeaef08.chunk.js.map