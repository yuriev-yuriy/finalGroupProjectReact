(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{238:function(e,a,t){e.exports={forma:"AuthForm_forma__1wZjb",para:"AuthForm_para__2TbQh",secondPara:"AuthForm_secondPara__1HXCW",gBtn:"AuthForm_gBtn__U2r2B",btnWrapper:"AuthForm_btnWrapper__3G2Fr",btnWrapperBottom:"AuthForm_btnWrapperBottom__9LTqa",gLogo:"AuthForm_gLogo__2p7mL",input:"AuthForm_input__25_rD",regBtn:"AuthForm_regBtn__3IY_s",innerForm:"AuthForm_innerForm__3_B_N"}},239:function(e,a,t){e.exports={Modal__backdrop:"Modal_Modal__backdrop__2CeWk",Modal__content:"Modal_Modal__content__1bq3t"}},243:function(e,a,t){e.exports={wrapper:"AuthView_wrapper__3VBDi",innerWrapper:"AuthView_innerWrapper__5c4rf",header:"AuthView_header__ynK-y",para:"AuthView_para__3PPjV"}},246:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var r=t(1),n=t(21),o=t(0),s=t(12),c=t(16),i=(t(22),t(238)),l=t.n(i),p=t.p+"static/media/google-logo.4088374a.png";t(33),t(239),document.querySelector("#modal-root");t(244);function u(){var e=Object(o.useState)(""),a=Object(n.a)(e,2),t=a[0],i=a[1],u=Object(o.useState)(""),d=Object(n.a)(u,2),_=d[0],h=d[1],m=Object(s.b)(),j=function(e){var a=e.target,t=a.name,r=a.value;switch(t){case"email":return i(r);case"password":return h(r);default:return}},b=function(){i(""),h("")};return Object(r.jsxs)("div",{className:l.a.forma,children:[Object(r.jsx)("p",{className:l.a.para,children:"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Google Account:"}),Object(r.jsxs)("div",{className:l.a.btnWrapper,children:[Object(r.jsx)("a",{href:"https://final-group-project-node.herokuapp.com/auth/google",children:Object(r.jsx)("button",{className:l.a.gBtn,type:"submit",children:"Google"})}),Object(r.jsx)("img",{className:l.a.gLogo,src:p,alt:"gIcon"})]}),Object(r.jsx)("p",{className:l.a.secondPara,children:"Or login to our app using e-mail and password:"}),Object(r.jsxs)("form",{className:l.a.innerForm,children:[Object(r.jsx)("label",{children:Object(r.jsx)("input",{className:l.a.input,name:"email",type:"email",placeholder:"Email",onChange:j,required:!0,value:t})}),Object(r.jsx)("label",{children:Object(r.jsx)("input",{className:l.a.input,type:"text",name:"password",placeholder:"Password",onChange:j,required:!0,value:_})}),Object(r.jsxs)("div",{className:l.a.btnWrapperBottom,children:[Object(r.jsx)("button",{className:l.a.regBtn,onClick:function(e){e.preventDefault(),m(c.a.logIn({email:t,password:_})),b()},children:"Sign In"}),Object(r.jsx)("button",{"data-auth":"reg",className:l.a.regBtn,onClick:function(e){e.preventDefault(),m(c.a.register({email:t,password:_})),b()},children:"Sign Up"})]})]})]})}var d=t(243),_=t.n(d),h=function(){return Object(r.jsxs)("div",{className:_.a.wrapper,children:[Object(r.jsxs)("div",{className:_.a.innerWrapper,children:[Object(r.jsx)("h1",{className:_.a.header,children:"Pro Test"}),Object(r.jsxs)("p",{className:_.a.para,children:[Object(r.jsx)("span",{children:"["})," We will help you find weak points in knowledge so that you can strengthen it. We will show you what is relevant to know for a"," ",Object(r.jsx)("span",{children:"QA Engineer"})," and will try to make the learning process more diverse_ ",Object(r.jsx)("span",{children:"]"})]})]}),Object(r.jsx)(u,{})]})}}}]);
//# sourceMappingURL=AuthView.33e550f6.chunk.js.map