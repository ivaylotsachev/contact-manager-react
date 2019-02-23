(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(52),o=a.n(c),l=(a(62),a(8)),s=a(9),i=a(11),m=a(10),u=a(12),p=a(108),h=a(109),d=a(55),b=(a(63),a(64),a(65),a(4)),f=a.n(b),v=a(13),E=a(21),y=a(20),N=a(14),g=a.n(N),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":var a=e.contacts,n=a.findIndex(function(e){return e.id===t.payload.id}),r=[].concat(Object(E.a)(a.splice(0,n)),[t.payload],Object(E.a)(a.splice(n+1)));return Object(y.a)({},e,{contacts:r});default:return e}},O=r.a.createContext(),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return C(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=O.Consumer,x=a(26),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a.onShowClick=function(){a.setState({show:!a.state.show})},a.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"title"},r.a.createElement("i",{className:"fa fa-sort-down mr-3 mb-0",onClick:function(){return e.onShowClick(a)}}),r.a.createElement("h6",{className:"card-title text-left mb-0"},n)),r.a.createElement("div",{className:"action"},r.a.createElement(x.a,{to:"contact/edit/".concat(a),className:"pull-right"},r.a.createElement("i",{className:"fas fa-pencil-alt pull-right mr-2",style:{fontSize:"14px",color:"black"}})),r.a.createElement("i",{className:"fas fa-times pull-right icon-delete mb-0",style:{fontSize:"14px",color:"red"},onClick:function(){return e.onDeleteClick(a,l)}}))),e.state.show&&r.a.createElement("div",{className:"card-body text-left"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"email:")," ",c),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"phone:")," ",o))))})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.contacts;return r.a.createElement(n.Fragment,null,t.length>0?r.a.createElement("h1",{className:"display-4 mb-4"},r.a.createElement("span",{className:"text-danger"},"Contacts "),"List"):r.a.createElement("h1",{className:"display-4 mb-4"},r.a.createElement("span",{className:"text-danger"},"No items found ")),t.map(function(e){return r.a.createElement(w,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=a(107),T=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light justify-content-between mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{href:"",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar navbar-nav mr-auto"},r.a.createElement(A.a,{to:"/",className:"nav-link",exact:!0,activeClassName:"is-active"},"Home"),r.a.createElement(A.a,{to:"/contact/add",className:"nav-link",activeClassName:"is-active"},"Add Contact"),r.a.createElement(A.a,{to:"/about",className:"nav-link",activeClassName:"is-active"},"About")))))};T.defaultProps={branding:"My App"};var D=T,P=a(16),_=(a(49),a(54)),q=a.n(_),M=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group px-4"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,className:q()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,name:a,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};M.defaultProps={type:"text"};var B=M,L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s={name:c,email:o,phone:l},""!==c){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Name is required"}}),e.abrupt("return");case 12:return e.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,n({type:"ADD_CONTACT",payload:i.data}),a.reset(),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"reset",value:function(){this.setState({name:"",email:"",phone:"",errors:{}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3 text-left"},r.a.createElement("div",{className:"card-header mb-2 py-3"},r.a.createElement("h4",{className:"mb-0"},"Add Contact")),r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,l)}},r.a.createElement(B,{name:"name",value:a,placeholder:"Enter name",label:"Name",onChange:e.onChange,error:o.name}),r.a.createElement(B,{name:"email",type:"email",value:n,placeholder:"Enter email",label:"Email",onChange:e.onChange,error:o.email}),r.a.createElement(B,{name:"phone",value:c,placeholder:"Enter phone",label:"Phone",onChange:e.onChange,error:o.phone}),r.a.createElement("div",{className:"px-4 mb-3"},r.a.createElement("button",{type:"submit",className:"btn btn-block btn-primary"},"Add"))))})}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Name is required"}}),e.abrupt("return");case 11:return s=a.props.match.params.id,i={name:c,email:o,phone:l},e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 15:m=e.sent,n({type:"UPDATE_CONTACT",payload:m.data}),a.reset(),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"reset",value:function(){this.setState({name:"",email:"",phone:"",errors:{}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3 text-left"},r.a.createElement("div",{className:"card-header mb-2 py-3"},r.a.createElement("h4",{className:"mb-0"},"Edit Contact")),r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,l)}},r.a.createElement(B,{name:"name",value:a,placeholder:"Enter name",label:"Name",onChange:e.onChange,error:o.name}),r.a.createElement(B,{name:"email",type:"email",value:n,placeholder:"Enter email",label:"Email",onChange:e.onChange,error:o.email}),r.a.createElement(B,{name:"phone",value:c,placeholder:"Enter phone",label:"Phone",onChange:e.onChange,error:o.phone}),r.a.createElement("div",{className:"px-4 mb-3"},r.a.createElement("button",{type:"submit",className:"btn btn-block btn-primary"},"Update"))))})}}]),t}(n.Component),R=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4"},"About Contact Manager"),r.a.createElement("hr",null),r.a.createElement("p",{className:"lead"},"Simlpe app to manage contacts"),r.a.createElement("p",{className:"lead"},"Using React Context, React Router, Bootstrap"),r.a.createElement("p",{className:"text-secondary"},"Verion 1.0.0"))},z=function(e){return r.a.createElement("div",null,r.a.createElement("h4",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry, this page does not exist"),r.a.createElement("button",{className:"btn btn-outline-dark",onClick:function(){return e.history.push("/")}},"Back to home :)"))},F=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/about",component:R}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:U}),r.a.createElement(d.a,{path:"",component:z}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(106)},62:function(e,t,a){},64:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.e395a11b.chunk.js.map