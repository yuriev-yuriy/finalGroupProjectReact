(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[6],{12:function(e,t,n){e.exports={link:"Navigation_link__1NuUT",text:"Navigation_text__1xQda",activeLink:"Navigation_activeLink__1Ay-P",signOutBtn:"Navigation_signOutBtn__1dsPd",signOutBtnLg:"Navigation_signOutBtnLg__2bB3F",wrapper:"Navigation_wrapper__2KaPz",navMenu:"Navigation_navMenu__2RAec",navMenuActive:"Navigation_navMenuActive__25Io6 Navigation_navMenu__2RAec",container:"Navigation_container__1ArGH"}},14:function(e,t,n){e.exports={container:"UserInfo_container__3FAqZ",signOutBtnLg:"UserInfo_signOutBtnLg__1t2Ys",userInfo:"UserInfo_userInfo__1IWgq",avatar:"UserInfo_avatar__5asUr",userInfoModal:"UserInfo_userInfoModal__ZTIrc",userInfoModalActive:"UserInfo_userInfoModalActive__3OwId UserInfo_userInfoModal__ZTIrc",userInfoModalText:"UserInfo_userInfoModalText__37N_z",customFileUpload:"UserInfo_customFileUpload__xHGjg",customNameUpload:"UserInfo_customNameUpload__1cNFq",avatarImg:"UserInfo_avatarImg__BzLgp",dropdownCaret:"UserInfo_dropdownCaret__1BC5o",name:"UserInfo_name__2_SqI",nameUpload:"UserInfo_nameUpload__1HW7Z UserInfo_userInfoModalText__37N_z",inputWrapper:"UserInfo_inputWrapper__21VG_",addBtn:"UserInfo_addBtn__1RMr6",addIcon:"UserInfo_addIcon__3oOCE",loading:"UserInfo_loading__JeDRc",initial:"UserInfo_initial__1t5df"}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return O}));var a=n(4),r=n.n(a),c=n(13),s=n(19),u=n.n(s);u.a.defaults.baseURL="https://final-group-project-node.herokuapp.com";var o=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/test/".concat("theoretical"===t?"theory-questions":"tech-questions"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,{answers:n,nameTest:t};case 2:return a=e.sent,e.next=5,u.a.post("/test/result",a);case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.patch("/users/current",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.patch("/users/avatars",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={set:function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},unset:function(){u.a.defaults.headers.common.Authorization=""}},f=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,u.a.post("/auth/register",{email:n,password:a});case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,u.a.post("/auth/login",{email:n,password:a});case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){return u.a.post("auth/logout").then((function(e){return e}))},O=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/users/current");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o}));var a=n(3),r=Object(a.a)("questions/add",(function(e){return{payload:e}})),c=Object(a.a)("questions/update",(function(e){return{payload:e}})),s=Object(a.a)("questions/setName",(function(e){return{payload:e}})),u=Object(a.a)("answers/reset",(function(e){return{payload:e}})),o=Object(a.a)("data/getTest",(function(e){return{payload:e}}))},26:function(e,t,n){e.exports={header:"Header_header__-1h0t",container:"Header_container__9hcUi",line:"Header_line__13SGr",lineLogin:"Header_lineLogin__3GwIT",wrapper:"Header_wrapper__14oFy"}},30:function(e,t,n){e.exports={link:"Logo_link__1l6uG",logo:"Logo_logo__1uAVD",darkText:"Logo_darkText__gKv0e",whiteText:"Logo_whiteText__2-tg2"}},31:function(e,t,n){e.exports={toggle:"Burger_toggle__uVjuv",active:"Burger_active__2iC_I",burger:"Burger_burger__3j9ZE"}},32:function(e,t,n){e.exports={footer:"Footer_footer__pTBTr",description:"Footer_description__MCWYk",icon:"Footer_icon__28jt4",link:"Footer_link__LdJia"}},53:function(e,t,n){e.exports={lds_dual_ring:"Loader_lds_dual_ring__2vvBI","lds-dual-ring":"Loader_lds-dual-ring__263YO"}},55:function(e,t,n){e.exports={googl__wrapper:"GoogleRedirect_googl__wrapper__1uGLP"}},68:function(e,t,n){},7:function(e,t,n){"use strict";t.a={AUTH_VIEW:"/auth",GOOGLE_LOGIN:"/google-auth",MAIN_VIEW:"/",TEST_VIEW:"/test",RESULT_VIEW:"/result",USEFUL_INFO_VIEW:"/useful-info",CONTACTS_VIEW:"/contacts"}},89:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(34),u=n.n(s),o=n(8),i=(n(67),n(68),n(11)),l=n(6),d=n(9),j=n(7),f=n(22),b=n(30),p=n.n(b);var O=function(e){var t=e.to,n=e.onOpenMobileMenu;return Object(a.jsx)(i.c,{to:t,className:p.a.link,onClick:function(){return n(!1)},children:Object(a.jsxs)("div",{className:p.a.logo,children:[Object(a.jsx)("p",{className:p.a.whiteText,children:"Pro"}),Object(a.jsx)("p",{className:p.a.darkText,children:"[Test_]"})]})})};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M23.7122 8.71216L22.3866 10.0378L26.4112 14.0625H13.1251V15.9375H26.4112L22.3866 19.9622L23.7122 21.2878L30.0001 15L23.7122 8.71216Z"}),r.createElement("path",{d:"M20.6251 28.125H1.87508V1.87502H20.6251V3.75004H22.5001V0.93751C22.5001 0.419302 22.0808 0 21.5626 0H0.937571C0.419363 0 6.10352e-05 0.419302 6.10352e-05 0.93751V29.0625C6.10352e-05 29.5807 0.419363 30 0.937571 30H21.5626C22.0808 30 22.5001 29.5807 22.5001 29.0625V26.25H20.6251V28.125Z"})),_=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:30,height:30})));function g(e,t){var n=e.title,a=e.titleId,c=v(e,["title","titleId"]);return r.createElement("svg",h({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,m,_)}var x=r.forwardRef(g);n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=r.createElement("path",{d:"M27 4l-15 15-7-7-5 5 12 12 20-20z"});function U(e,t){var n=e.title,a=e.titleId,c=w(e,["title","titleId"]);return r.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,N)}var y=r.forwardRef(U),k=(n.p,n(14)),E=n.n(k);var L=function(e){var t=e.onOpenMobileMenu,n=Object(o.b)(),c=Object(o.c)((function(e){return e.auth.registration})),s=c.name,u=c.email,l=c.avatarURL,b=Object(r.useState)(!1),p=Object(f.a)(b,2),O=p[0],h=p[1],v=Object(r.useState)(""),m=Object(f.a)(v,2),_=m[0],g=m[1],I=Object(r.useState)(""),w=Object(f.a)(I,2),N=w[0],U=w[1],k=Object(r.useState)(!1),L=Object(f.a)(k,2),C=L[0],M=L[1],T=Object(r.useCallback)((function(){h((function(e){return!e}))}),[]);Object(r.useEffect)((function(){void 0!==l&&(document.getElementById("img-insert").src=l)})),Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&h(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);var S="Guest";return""!==_?S=_:null!==s&&void 0!==s?S=s:null!==u&&void 0!==s&&(S=u),Object(a.jsxs)("div",{className:E.a.container,children:[Object(a.jsxs)("div",{className:E.a.userInfo,children:[Object(a.jsxs)("div",{className:E.a.avatar,onClick:T,children:[C?Object(a.jsx)("h3",{className:E.a.loading,children:"Loading..."}):Object(a.jsx)("img",{id:"img-insert",alt:"avatar",width:"40",className:E.a.avatarImg}),Object(a.jsx)("span",{className:E.a.dropdownCaret}),Object(a.jsxs)("div",{className:O?E.a.userInfoModalActive:E.a.userInfoModal,children:[Object(a.jsx)("label",{htmlFor:"fileUpload",name:"avatar",className:E.a.customFileUpload,children:"Change avatar"}),Object(a.jsx)("input",{type:"file",name:"avatar",id:"fileUpload",placeholder:"Upload an image",onChange:function(e){var t=e.target.files[0],a=new FormData;a.append("avatar",t),M(!0),n(d.a.updateAvatar(a));var r=new FileReader;r.onload=function(){document.getElementById("img-insert").src=r.result},r.readAsDataURL(t),M(!1)},onClick:T}),Object(a.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)("label",{htmlFor:"nameUpload",name:"name",className:E.a.customNameUpload,children:"Change name"}),Object(a.jsxs)("div",{className:E.a.inputWrapper,children:[Object(a.jsx)("input",{type:"name",name:"name",id:"nameUpload",value:N,placeholder:"Change name",onClick:T,onChange:function(e){return U(e.currentTarget.value)},className:E.a.nameUpload,autoComplete:"off",autoFocus:!0}),N&&Object(a.jsx)("button",{className:E.a.addBtn,type:"submit",onClick:function(){var e={name:N.length<12?N:N.slice(0,12)+"..."};n(d.a.updateName(e)),g(N),U("")},children:Object(a.jsx)(y,{className:E.a.addIcon})})]})]})]})]}),Object(a.jsx)("span",{className:E.a.name,children:S.length<12?S:S.slice(0,12)+"..."})]}),Object(a.jsx)(i.c,{to:j.a.AUTH_VIEW,onClick:function(){return t(!1)},children:Object(a.jsx)(x,{className:E.a.signOutBtnLg,width:"16px",height:"16px",onClick:function(){return n(d.a.logOut())}})})]})},C=n(12),M=n.n(C);var T=function(e){var t=e.isOpen,n=e.onOpenMobileMenu,r=Object(o.c)(d.c.getIsLoggedIn),c=Object(o.b)();return Object(a.jsxs)("div",{className:M.a.container,children:[Object(a.jsx)("nav",{className:t?M.a.navMenuActive:M.a.navMenu,children:r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:M.a.wrapper,children:[Object(a.jsx)(i.c,{to:j.a.MAIN_VIEW,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:M.a.text,children:"Home"})}),Object(a.jsx)(i.c,{to:j.a.USEFUL_INFO_VIEW,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:M.a.text,children:"Materials"})}),Object(a.jsx)(i.c,{to:j.a.CONTACTS_VIEW,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:M.a.text,children:"Contacts"})})]}),Object(a.jsx)(i.c,{to:j.a.AUTH_VIEW,onClick:function(){return n(!1)},children:Object(a.jsx)(x,{className:M.a.signOutBtn,width:"16px",height:"16px",onClick:function(){return c(d.a.logOut())}})})]}):Object(a.jsx)(i.c,{to:j.a.CONTACTS_VIEW,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,onClick:function(){return n(!1)},children:Object(a.jsx)("span",{className:M.a.text,children:"Contacts"})})}),r&&Object(a.jsx)(L,{onOpenMobileMenu:n})]})},S=n(31),A=n.n(S);n.p;n.p;var R=function(e){var t=e.isOpen,n=e.onOpenMobileMenu;return Object(a.jsx)("div",{className:A.a.burger,children:Object(a.jsxs)("div",{className:t?"".concat(A.a.toggle," + ' ' + ").concat(A.a.active):A.a.toggle,type:"button",onClick:function(){return n(!t)},children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})})},V=n(26),W=n.n(V);var B=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],s=Object(o.c)(d.c.getIsLoggedIn);return Object(a.jsx)("header",{className:W.a.header,children:Object(a.jsxs)("div",{className:W.a.container,children:[Object(a.jsx)(O,{to:j.a.MAIN_VIEW,onOpenMobileMenu:c}),Object(a.jsxs)("div",{className:W.a.wrapper,children:[Object(a.jsx)(T,{isOpen:n,onOpenMobileMenu:c}),Object(a.jsx)(R,{isOpen:n,onOpenMobileMenu:c})]}),Object(a.jsx)("div",{className:s?W.a.lineLogin:W.a.line})]})})},F=n(53),H=n.n(F),G=function(){return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(a.jsx)("div",{className:H.a.lds_dual_ring})})},q=n(54),P=n.n(q),z=n(55),D=n.n(z);var Z=function(){var e=Object(o.b)(),t=Object(l.g)(),n=P.a.parse(t.search),c=Object(o.c)((function(e){return e.auth})).isLoggedIn;return Object(r.useEffect)((function(){e(d.a.logInGoogle(n))}),[n,e]),c&&Object(a.jsx)("div",{className:D.a.googl__wrapper,children:Object(a.jsx)(l.b,{children:Object(a.jsx)(l.a,{to:"/"})})})},Q=n(32),J=n.n(Q),Y=function(){return Object(a.jsx)("footer",{className:J.a.footer,children:Object(a.jsxs)("p",{className:J.a.description,children:["\xa9 2021 | All Rights Reserved | Developed with"," ",Object(a.jsx)("span",{className:J.a.icon,children:"\u2764"})," by"," ",Object(a.jsx)(i.c,{to:j.a.CONTACTS_VIEW,className:J.a.link,children:"GoIT Students"})]})})},K=n(25),X=n(37);function $(e){var t=e.children,n=Object(X.a)(e,["children"]),r=Object(o.c)(d.c.getIsLoggedIn);return Object(a.jsx)(l.b,Object(K.a)(Object(K.a)({},n),{},{children:r?t:Object(a.jsx)(l.a,{to:"/auth"})}))}function ee(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=Object(X.a)(e,["children","restricted"]),s=Object(o.c)(d.c.getIsLoggedIn)&&r;return Object(a.jsxs)(l.b,Object(K.a)(Object(K.a)({},c),{},{children:[" ",s?Object(a.jsx)(l.a,{to:"/"}):t," "]}))}var te=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,238))})),ne=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,241))})),ae=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,236))})),re=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(3)]).then(n.bind(null,239))})),ce=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,240))})),se=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,237))}));var ue,oe=function(){var e=Object(o.b)();return Object(r.useEffect)((function(){var t=localStorage.getItem("token");t&&e(d.a.fetchCurrentUser(t))}),[e]),Object(a.jsxs)(i.a,{children:[Object(a.jsx)(B,{}),Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(G,{}),children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:j.a.GOOGLE_LOGIN,children:Object(a.jsx)(Z,{children:Object(a.jsx)(G,{})})}),Object(a.jsx)($,{exact:!0,path:j.a.USEFUL_INFO_VIEW,children:Object(a.jsx)(ne,{})}),Object(a.jsx)(ee,{exact:!0,path:j.a.CONTACTS_VIEW,children:Object(a.jsx)(ae,{})}),Object(a.jsx)(ee,{exact:!0,path:j.a.AUTH_VIEW,restricted:!0,children:Object(a.jsx)(se,{})}),Object(a.jsx)($,{exact:!0,path:j.a.RESULT_VIEW,children:Object(a.jsx)(re,{})}),Object(a.jsx)($,{exact:!0,path:j.a.MAIN_VIEW,children:Object(a.jsx)(te,{})}),Object(a.jsx)($,{exact:!0,path:j.a.TEST_VIEW,children:Object(a.jsx)(ce,{})})]})}),Object(a.jsx)(Y,{})]})},ie=n(10),le=n(28),de=(n(90),n(56)),je=n(2),fe=n(42),be=n(3),pe=n(24),Oe={resultQuestionsReducer:Object(be.b)([],(ue={},Object(je.a)(ue,pe.a,(function(e,t){var n=t.payload;return[].concat(Object(fe.a)(e),[n])})),Object(je.a)(ue,pe.e,(function(e,t){var n=t.payload;return[].concat(Object(fe.a)(e.filter((function(e){return e.answerId!==n.answerId}))),[n])})),Object(je.a)(ue,pe.c,(function(e,t){return t.payload})),ue)),setNameReducer:Object(be.b)("",Object(je.a)({},pe.d,(function(e,t){return t.payload}))),setDataQuestions:Object(be.b)([],Object(je.a)({},pe.b,(function(e,t){return t.payload})))},he=Object(ie.combineReducers)({answers:Oe.resultQuestionsReducer,nameTest:Oe.setNameReducer,questions:Oe.setDataQuestions,auth:d.b}),ve=Object(de.composeWithDevTools)({}),me=Object(ie.createStore)(he,ve(Object(ie.applyMiddleware)(le.a)));u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(o.a,{store:me,children:Object(a.jsx)(oe,{})})}),document.getElementById("root"))},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"c",(function(){return L})),n.d(t,"b",(function(){return R}));var a,r,c,s=n(4),u=n.n(s),o=n(13),i=n(21),l=n(3),d=Object(l.a)("auth/registerUserRequest"),j=Object(l.a)("auth/registerUserSuccess"),f=Object(l.a)("auth/registerUserError"),b=Object(l.a)("auth/loginUserRequest"),p=Object(l.a)("auth/loginUserSuccess"),O=Object(l.a)("auth/loginUserError"),h=Object(l.a)("auth/logoutUserRequest"),v=Object(l.a)("auth/logoutUserSuccess"),m=Object(l.a)("auth/logoutUserError"),_=Object(l.a)("auth/updateUserNameRequest"),g=Object(l.a)("auth/updateUserNameSuccess"),x=Object(l.a)("auth/updateUserNameError"),I=Object(l.a)("auth/changeAvatarRequest"),w=Object(l.a)("auth/changeAvatarSuccess"),N=Object(l.a)("auth/changeAvatarError"),U=Object(l.a)("auth/fetchCurrentUserRequest"),y=Object(l.a)("auth/fetchCurrentUserSuccess"),k=Object(l.a)("auth/fetchCurrentUserError"),E={register:function(e){var t=e.email,n=e.password;return function(){var e=Object(o.a)(u.a.mark((function e(a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(d()),e.prev=1,e.next=4,Object(i.h)({email:t,password:n});case 4:r=e.sent,c=r.data.avatar,a(j({user:{name:null,email:t,avatarURL:c}})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message),a(f(null));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){var t=e.email,n=e.password;return function(){var e=Object(o.a)(u.a.mark((function e(a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(b()),e.prev=1,e.next=4,Object(i.c)({email:t,password:n});case 4:r=e.sent,c=r.data,i.i.set(c.accessToken),localStorage.setItem("token",c.accessToken),a(p(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a(O(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},logInGoogle:function(e){var t=e.email,n=e.name,a=e.picture,r=(e.refreshToken,e.token);return function(){var e=Object(o.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(b());try{i.i.set(r),localStorage.setItem("token",r),c(p({user:{name:n,email:t,avatarURL:a}}))}catch(s){c(O(s.message))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h()),localStorage.setItem("token",null),e.prev=2,e.next=5,Object(i.d)();case 5:i.i.unset(),t(v()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(m(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},fetchCurrentUser:function(e){return function(){var t=Object(o.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.i.set(e),n(U()),t.prev=2,t.next=5,Object(i.b)();case 5:a=t.sent,r=a.data,n(y(r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n(k(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},updateName:function(e){return function(){var t=Object(o.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_()),t.prev=1,t.next=4,Object(i.f)(e);case 4:a=t.sent,r=a.data.user,n(g(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(x(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},updateAvatar:function(e){return function(){var t=Object(o.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I()),t.next=3,Object(i.e)(e);case 3:a=t.sent,r=a.data.avatarUrl,t.prev=5,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(5),n(N(t.t0.message));case 11:return t.prev=11,t.next=14,n(w(r));case 14:return t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[5,8,11,15]])})));return function(e){return t.apply(this,arguments)}}()}},L={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserEmail:function(e){return e.auth.user.email},getUserName:function(e){return e.auth.user.name}},C=n(2),M=n(10),T=Object(l.b)({user:{name:null,email:null,avatarURL:null},token:null,isLoggedIn:!1},(a={},Object(C.a)(a,j,(function(e,t){return t.payload.user})),Object(C.a)(a,p,(function(e,t){return t.payload.user})),Object(C.a)(a,y,(function(e,t){return t.payload.user})),Object(C.a)(a,g,(function(e,t){var n=t.payload;return{user:{name:n.name,email:n.email,avatarURL:e.user.avatarURL}}})),Object(C.a)(a,w,(function(e,t){var n=t.payload;return{user:{name:e.name,email:e.email,avatarURL:n}}})),Object(C.a)(a,v,(function(){return null})),a)),S=Object(l.b)(!1,(r={},Object(C.a)(r,p,(function(){return!0})),Object(C.a)(r,y,(function(){return!0})),Object(C.a)(r,U,(function(){return!0})),Object(C.a)(r,O,(function(){return!1})),Object(C.a)(r,v,(function(){return!1})),Object(C.a)(r,k,(function(){return!1})),r)),A=Object(l.b)(!1,(c={},Object(C.a)(c,d,(function(){return!0})),Object(C.a)(c,j,(function(){return!1})),Object(C.a)(c,f,(function(){return!1})),Object(C.a)(c,b,(function(){return!0})),Object(C.a)(c,p,(function(){return!1})),Object(C.a)(c,O,(function(){return!1})),Object(C.a)(c,h,(function(){return!0})),Object(C.a)(c,v,(function(){return!1})),Object(C.a)(c,m,(function(){return!1})),Object(C.a)(c,U,(function(){return!0})),Object(C.a)(c,y,(function(){return!1})),Object(C.a)(c,k,(function(){return!1})),Object(C.a)(c,_,(function(){return!0})),Object(C.a)(c,g,(function(){return!1})),Object(C.a)(c,x,(function(){return!1})),Object(C.a)(c,I,(function(){return!0})),Object(C.a)(c,w,(function(){return!1})),Object(C.a)(c,N,(function(){return!1})),c)),R=Object(M.combineReducers)({registration:T,isLoggedIn:S,loading:A})}},[[89,7,9]]]);
//# sourceMappingURL=main.2fed922b.chunk.js.map