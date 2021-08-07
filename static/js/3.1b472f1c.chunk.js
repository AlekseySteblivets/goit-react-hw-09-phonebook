(this["webpackJsonpgoit-react-hw-09-phonebooks"]=this["webpackJsonpgoit-react-hw-09-phonebooks"]||[]).push([[3],{83:function(t,e,n){t.exports={container:"ContactForm_container__1loyQ",label:"ContactForm_label__2j6V6"}},84:function(t,e,n){t.exports={contactList:"ContactList_contactList__2_qwD"}},88:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return I}));var r=n(0),a=n(7),c=n(26),o=function(t){return t.contacts.loading},i=function(t){return t.contacts.filter},u=function(t){return t.contacts.items},s=Object(c.a)([u,i],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),l=n(16),f=n.n(l),b=n(22),d=n(18),j=n.n(d),m=n(10),p=n(3),h=n(20);var v=n(42);function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||Object(v.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y,g=n(83),x=n.n(g),C=new Uint8Array(16);function w(){if(!y&&!(y="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(C)}var _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var N=function(t){return"string"===typeof t&&_.test(t)},A=[],S=0;S<256;++S)A.push((S+256).toString(16).substr(1));var k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(A[t[e+0]]+A[t[e+1]]+A[t[e+2]]+A[t[e+3]]+"-"+A[t[e+4]]+A[t[e+5]]+"-"+A[t[e+6]]+A[t[e+7]]+"-"+A[t[e+8]]+A[t[e+9]]+"-"+A[t[e+10]]+A[t[e+11]]+A[t[e+12]]+A[t[e+13]]+A[t[e+14]]+A[t[e+15]]).toLowerCase();if(!N(n))throw TypeError("Stringified UUID is invalid");return n};var L=function(t,e,n){var r=(t=t||{}).random||(t.rng||w)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return k(r)},V=n(1),R={name:"",number:""};function T(){var t=L(),e=O(Object(r.useState)(R),2),n=e[0],c=e[1],o=Object(a.c)(),i=Object(a.d)(u),s=function(t){console.log(t.currentTarget.value);var e=t.currentTarget,n=e.name,r=e.value;c((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(p.a)({},n,r))}))},l=function(){c(R)};return Object(V.jsx)("div",{className:x.a.container,children:Object(V.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e,r=n.name,a=n.number;if(i.find((function(t){return t.name===r&&t.number===a})))return alert("".concat(r," is already in contacts!")),void l();o((e=n,function(t){t(m.b()),j.a.post("/contacts",e).then((function(e){var n=e.data;return t(m.c(n))})).catch((function(e){return t(m.a(e.message))}))})),l()},className:x.a.form,children:[Object(V.jsxs)("label",{htmlFor:t,className:x.a.label,children:["Name:",Object(V.jsx)("input",{className:"Container-form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n.name,onChange:s,id:t})]}),Object(V.jsxs)("label",{className:x.a.label,children:["Number:",Object(V.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n.number,onChange:s,required:!0})]}),Object(V.jsx)("button",{type:"submit",className:"Container-form__btn",children:"Add Contact"})]})})}function z(){var t=Object(a.c)(),e=Object(a.d)(i);return Object(V.jsxs)("label",{children:["FInd contacts by name",Object(V.jsx)("input",{type:"text",value:e,onChange:function(e){return t(Object(m.d)(e.currentTarget.value))}})]})}var D=n(84),E=n.n(D);function F(){var t=Object(a.d)(s),e=Object(a.c)();return Object(V.jsx)("div",{className:"Contact-container",children:Object(V.jsx)("ul",{children:t.map((function(t){return Object(V.jsxs)("li",{className:E.a.contactList,children:[t.name," : ",t.number,Object(V.jsx)("button",{onClick:function(){return e((n=t.id,function(t){t(m.f()),j.a.delete("/contacts/".concat(n)).then((function(){return t(m.g(n))})).catch((function(e){return t(m.e(e.message))}))}));var n},children:"Delete"})]},L())}))})})}function I(){var t=Object(a.c)(),e=Object(a.d)(o);return Object(r.useEffect)((function(){t(function(){var t=Object(b.a)(f.a.mark((function t(e){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m.i()),t.prev=1,t.next=4,j.a.get("./contacts");case 4:n=t.sent,r=n.data,e(m.j(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(m.h(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{children:"Phonebook"}),Object(V.jsx)(T,{}),Object(V.jsx)("h2",{children:"Contacts"}),Object(V.jsx)(z,{}),e&&Object(V.jsx)("h1",{children:"loading..."}),Object(V.jsx)(F,{})]})}}}]);
//# sourceMappingURL=3.1b472f1c.chunk.js.map