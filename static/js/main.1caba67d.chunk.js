(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),a=c.n(s),r=c(13),l=c.n(r),i=c(4),o=c(14),j=c(15),d=c(18),h=c(17),b=c(16),u=c.n(b),m=(c(42),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],filteredEmployees:[],search:""},e.getEmployees=function(){u.a.get("https://randomuser.me/api/?results=25").then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){if(e)throw e}))},e.handleInputChange=function(t){var c,n=t.target,s=n.name,a=n.value,r=e.state.employees.filter((function(e){return e.name.last.includes(a)}));e.setState((c={},Object(i.a)(c,s,a),Object(i.a)(c,"filteredEmployees",r),c))},e.handleButtonClick=function(){var t=e.state.filteredEmployees.sort((function(e,t){return e.nat<t.nat?-1:1}));e.setState({employees:t})},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-sm-12",children:[Object(n.jsx)("input",{value:this.state.search,name:"search",onChange:this.handleInputChange,type:"text",placeholder:"search names",style:{margin:"20px",width:"65%",fontSize:"24px",borderRadius:"15px",padding:"20px",fontFamily:"'Patrick Hand', cursive"}}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("h2",{children:"Image"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("h2",{children:"First Name"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("h2",{children:"Last Name"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("h2",{children:"Email"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("h2",{children:"Age"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("h2",{children:"Gender"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsxs)("h2",{children:["Country",Object(n.jsx)("button",{onClick:this.handleButtonClick,children:Object(n.jsx)("i",{className:"fas fa-caret-down"})})]})})]})}),Object(n.jsx)("tbody",{children:this.state.filteredEmployees.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)("img",{src:e.picture.thumbnail,className:"img-fluid",alt:"thumbnail"})}),Object(n.jsx)("td",{children:e.name.first},e.login.uuid),Object(n.jsx)("td",{children:e.name.last}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"mailto::{results.name.email}",children:e.email})}),Object(n.jsx)("td",{children:e.dob.age}),Object(n.jsx)("td",{children:e.gender}),Object(n.jsx)("td",{children:e.nat})]})}))})]})]})})})}}]),c}(s.Component)),x=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"employee",style:{padding:"20px",textAlign:"center",backgroundColor:"#000080",color:"#e6e6ff",fontFamily:"'Patrick Hand', cursive"},children:[Object(n.jsxs)("h1",{className:"display-4",style:{fontSize:"60px"},children:[Object(n.jsx)("i",{className:"fad fa-address-book"})," Employee Directory"]}),Object(n.jsx)("p",{children:"Search the Directory by Last Name."})]})})};var p=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(m,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.1caba67d.chunk.js.map