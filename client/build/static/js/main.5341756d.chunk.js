(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(20),l=a.n(o),r=(a(49),a(52),a(17)),c=a(7),i=a(8),m=a(11),u=a(9),d=a(10),h=a(14),p=(a(54),a(16)),g=a.n(p),f=a(5),b=a(18),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={isOpen:!1},a.changePassword=function(){console.log("change password"),Object(b.b)("/password")},a.handleAdmin=function(){console.log("admin page"),Object(b.b)("/administration")},a.logout=function(){console.log("logging out"),Object(b.b)("/")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f.n,{className:"navbar bg-primary",dark:!0,expand:"md"},s.a.createElement(f.o,{href:"/home"},s.a.createElement("h1",{className:"slogan "},s.a.createElement("i",{className:"fas fa-chess-rook"}),"Strongroom")),s.a.createElement("i",{className:"far fa-plus-square",onClick:function(){return e.props.showModal()},id:"triggerModal"}),s.a.createElement(f.p,{onClick:this.toggle}),s.a.createElement(f.e,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(f.m,{className:"ml-auto",navbar:!0},s.a.createElement(f.r,{nav:!0,inNavbar:!0},s.a.createElement(f.h,{nav:!0,caret:!0},"Settings"),s.a.createElement(f.g,{right:!0},s.a.createElement(f.f,{onClick:function(){return e.changePassword()}},"Change Password"),s.a.createElement(f.f,{onClick:function(){return e.handleAdmin()}},"Administration"),s.a.createElement(f.f,{divider:!0}),s.a.createElement(f.f,{onClick:function(){return e.logout()}},"Logout")))))))}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleLogin=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};g.a.post("/login",t).then(function(e){console.log(e),a.props.onLogin(e.data)}).catch(function(e){return console.log(e)})},a.state={username:"",password:""},a.onChange=a.onChange.bind(Object(h.a)(Object(h.a)(a))),a.handleLogin=a.handleLogin.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("form",null,s.a.createElement("label",null,"Username:"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",name:"username",className:"form-control ",value:this.state.username,onChange:this.onChange}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("label",null,"Password:  "),s.a.createElement("br",null),s.a.createElement("input",{type:"password",name:"password",className:"form-control form-control-sm",value:this.state.password,onChange:this.onChange}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:" btn btn-primary",onClick:function(t){return e.handleLogin(t)}},"Login")))}}]),t}(n.Component),v=(a(87),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={isOpen:!1},a.changePassword=function(){console.log("change password")},a.handleAdmin=function(){console.log("admin page"),Object(b.b)("/administration")},a.logout=function(){console.log("logging out")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f.n,{className:"navbar bg-primary",dark:!0,expand:"md"},s.a.createElement(f.o,null,s.a.createElement("h1",{className:"slogan "},s.a.createElement("i",{className:"fas fa-chess-rook"}),"Strongroom"))))}}]),t}(s.a.Component)),y=function(e){return s.a.createElement("div",null,s.a.createElement(v,null),s.a.createElement(w,null),s.a.createElement("div",{className:"block"},s.a.createElement(E,{onLogin:e.onLogin})))},N=(a(89),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={nameInput:"",urlInput:"",usernameInput:"",passwordInput:""},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(r.a)({},t,n))},a.generateNumber=function(e){e.preventDefault(),a.setState({passwordInput:Math.random().toString(36).slice(-10)})},a.storeModalValues=function(){console.log(a.props.owner),console.log(a.props.username);var e={name:a.state.nameInput,password:a.state.passwordInput,username:a.state.usernameInput,URL:a.state.urlInput,owner:a.props.username};console.log("here is the secret data------------------------"),console.log(e),g.a.post("/secrets",e).then(function(e){a.setState({nameInput:"",urlInput:"",usernameInput:"",passwordInput:""}),a.props.handleClose(),a.props.hideContent(),a.props.showVault(a.props.owner)}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.show?"modal display-block":"modal display-none";return s.a.createElement("div",{className:e},s.a.createElement("section",{className:"modal-main modal-body"},s.a.createElement("h5",null,"Add new entry"),s.a.createElement("hr",null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-sm"},"Name:"),s.a.createElement("input",{type:"text",name:"nameInput",onChange:this.handleInputChange,className:"form-control form-control-sm nameInput",value:this.state.nameInput,placeholder:"Name"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-sm"},"URL:"),s.a.createElement("input",{type:"text",name:"urlInput",onChange:this.handleInputChange,className:"form-control form-control-sm urlInput",value:this.state.urlInput,placeholder:"URL"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-sm"},"Username:"),s.a.createElement("input",{type:"text",name:"usernameInput",onChange:this.handleInputChange,className:"form-control form-control-sm usernameInput",value:this.state.usernameInput,placeholder:"Username"})),s.a.createElement("div",{className:"form-group pwdToggle"},s.a.createElement("label",{className:"col-form-label col-form-label-sm"},"Password"),s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("span",{className:"input-group-text"},s.a.createElement("i",{className:"far fa-eye showPwd",onClick:this.props.togglePassword})),s.a.createElement("input",{className:"form-control form-control-sm pwd",onChange:this.handleInputChange,name:"passwordInput",id:"entryPassword",value:this.state.passwordInput,placeholder:"Password",type:"password"})))),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"button",value:"Generate",className:"btn btn-primary btn-sm",onClick:this.generateNumber,id:"generate"})),s.a.createElement("hr",null),s.a.createElement("button",{className:"btn btn-primary addbtn modalbtn",onClick:this.storeModalValues},"Save Changes"),s.a.createElement("button",{className:"btn btn-primary closebtn modalbtn",onClick:this.props.handleClose},"Close")))}}]),t}(n.Component)),C=(a(36),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={nameInput:"",urlInput:"",usernameInput:"",passwordInput:"",collapse:!1},a.toggle=function(e){console.log("toggling"),a.setState({collapse:!a.state.collapse})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(r.a)({},t,n)),console.log(a.state)},a.deleteEntry=function(){console.log("delete button clicked"),g.a.delete("/secrets/".concat(a.props.name)).then(function(e){a.renderVault()}).catch(function(e){console.log(e)})},a.updateEntry=function(e){console.log("event button clicked");var t={name:a.props.name,password:a.state.passwordInput,username:a.state.usernameInput,URL:a.state.urlInput};console.log(t),g.a.put("/secrets/".concat(a.props.name),t).then(function(e){console.log(e),a.renderVault()}).catch(function(e){console.log(e)})},a.showhidepassword=function(e){e.preventDefault(),a.setState({showhidepassword:!a.state.showhidepassword})},a.renderVault=function(){console.log("rendering"),a.props.renderVault(a.props.owner)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({usernameInput:this.props.username,nameInput:this.props.name,urlInput:this.props.URL,passwordInput:this.props.password})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f.c,{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h4",{onClick:this.toggle,id:this.props.toggler,className:"panel-title"},this.props.name)),s.a.createElement(f.q,{toggler:this.props.toggler},s.a.createElement(f.d,{className:"card-body"},s.a.createElement("div",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-sm",for:"inputSmall"},"URL:"),s.a.createElement("input",{name:"urlInput",className:"form-control form-control-sm",onChange:this.handleInputChange,value:this.state.value,type:"text",defaultValue:this.props.URL})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-sm",for:"inputSmall"},"Username"),s.a.createElement("input",{name:"usernameInput",className:"form-control form-control-sm inputSmall ",type:"text",value:this.state.value,onChange:this.handleInputChange,defaultValue:this.props.username})),s.a.createElement("div",{className:"form-group pwdToggle"},s.a.createElement("label",{className:"col-form-label col-form-label-sm",for:"inputSmall"},"Password"),s.a.createElement("br",null),s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("span",{className:"input-group-text"},s.a.createElement("i",{className:"far fa-eye showPwd",onClick:this.showhidepassword},s.a.createElement("br",null))),s.a.createElement("input",{name:"passwordInput",className:"form-control form-control-sm pwd",value:this.state.value,type:this.state.showhidepassword?"text":"password",onChange:this.handleInputChange,defaultValue:this.props.password}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-1"},s.a.createElement("button",{id:this.props.toggler,className:"btn btn-primary updatePwd",onClick:function(t){return e.updateEntry()}},"Update")),s.a.createElement("div",{className:"col-1"},s.a.createElement("button",{className:"btn btn-primary deletePwd",onClick:function(t){return e.deleteEntry()}},"Delete")))))))}}]),t}(n.Component)),O=function(e){return s.a.createElement("div",null,s.a.createElement(w,{showModal:e.showModal}),s.a.createElement(N,null),e.secrets.map(function(t,a){return s.a.createElement(C,{toggler:"secret".concat(a),renderVault:e.showVault,key:t._id,name:t.name,password:t.password,URL:t.URL,username:t.username,owner:e.owner})}),s.a.createElement("div",{id:"main-body"},s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-4 block"},s.a.createElement("button",{className:"btn btn-primary btn-lg btn-block addVault",onClick:function(){return e.showModal()}},"Add to Vault")),s.a.createElement("div",{className:"col-4 block"},s.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",id:"showVault",onClick:function(t){t.preventDefault(),e.showVault(e.owner),e.hideContent()}},"View Vault"))),s.a.createElement("div",{className:"block ",id:"stmt"},s.a.createElement("h4",null,"In a time where compromises are everywhere and other kingdoms threaten your existence. Shield yourself by using better password techniques."),s.a.createElement("ul",null,s.a.createElement("li",{className:"text-success animated fadeInLeft"},"Longer passwords are better. An 8-character password can be cracked in about 5 hours whereas a 10-character password takes about 4 months."),s.a.createElement("li",{className:"text-primary animated fadeInRight"},"Avoid using birthdays or family members names as they could be harvested from social media accounts."),s.a.createElement("li",{className:"text-success animated fadeInLeft"},"Consider using multiple words to create a longer, more memorable passphrase."),s.a.createElement("li",{className:"text-primary animated fadeInRight"},"Use different passwords for each login. Don't repeat passwords especially in financial applications."),s.a.createElement("li",{className:"text-success animated fadeInLeft"},"Use multifactor authentication where available.")))))},j=function(e){return s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(N,null),e.secrets.map(function(t,a){return s.a.createElement(C,{toggler:"secret".concat(a),renderVault:e.showVault,key:t._id,name:t.name,password:t.password,URL:t.URL,username:t.username})}))},k=a(42),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).changePassword=function(){if(console.log("this is the username that is coming through in props"),console.log(a.props.username),console.log("is username here"),console.log(a.state),a.setState({newPassword:a.state.value,confirmPassword:a.state.value,username:a.props.username}),console.log("username should be present"),console.log(a.state),console.log(a.state.confirmPassword),a.state.newPassword===a.state.confirmPassword){var e={password:a.state.newPassword,username:a.state.username,firstLogin:!1};console.log("this is data"),console.log(e),g.a.put("/password/".concat(a.username),e).then(function(e){a.setState({firstLogin:!1}),console.log("this is the state"),console.log(a.state),a.toggle(),Object(b.b)("/home")}).catch(function(e){console.log(e)})}else console.log("no banana"),document.getElementById("passwordAlert").style.display="block"},a.state={modal:!1,newPassword:"",confirmPassword:"",username:a.props.username,firstLogin:!0},a.toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.onChange=a.onChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"onChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f.i,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},s.a.createElement(f.l,{toggle:this.toggle},"Please change your password."),s.a.createElement(f.j,null,s.a.createElement(f.a,{id:"passwordAlert",className:"warning",style:{display:"none"},color:"warning"},"Passwords must match!"),s.a.createElement(f.a,{id:"passwordlengthAlert",className:"warning",style:{display:"none"},color:"warning"},"Please enter a longer password."),s.a.createElement("form",null,s.a.createElement("label",null,"New password:"),s.a.createElement("br",null),s.a.createElement("input",{name:"newPassword",type:"text",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.newPassword}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("label",null,"Confirm password:"),s.a.createElement("br",null),s.a.createElement("input",{name:"confirmPassword",type:"text",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.confirmPassword}))),s.a.createElement(f.k,null,s.a.createElement(f.b,{color:"primary",onClick:this.changePassword},"Submit")," ")))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(I,{username:this.props.username}))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={userInput:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("usercard mounted"),this.setState({usernameforCard:this.props.username}),this.props.renderUsers()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"blahblahblah"),s.a.createElement(f.c,{className:"card"},this.usernameforCard))}}]),t}(n.Component),P=(n.Component,function(e){return s.a.createElement("div",null,s.a.createElement(w,{showModal:e.showModal}),s.a.createElement(N,null),e.allUsers.map(function(t,a){return s.a.createElement("div",null,"User!",s.a.createElement(V,{name:t.username,renderUsers:e.getUsers}))}),s.a.createElement("div",{id:"main-body"},s.a.createElement("div",{className:"row justify-content-around"},s.a.createElement("div",{className:"col-4 block"},s.a.createElement("button",{className:"btn btn-primary btn-lg btn-block addVault",onClick:function(){return e.showModal()}},"Add to Vault")),s.a.createElement("div",{className:"col-4 block"},s.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",id:"showVault",onClick:function(t){t.preventDefault(),e.showVault(e.owner),e.hideContent()}},"View Vault")))))}),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.vaultAdd=function(e){console.log("Vault Add function works!")},a.showhidepassword=function(){console.log("show/hide password");var e=document.getElementById("entryPassword").type;document.getElementById("entryPassword").type="password"===e?"text":"password"},a.changelogin=function(e){e.preventDefault(),console.log(a.state.loginName),a.setState({loginName:e.target.value})},a.getUsers=function(){console.log("Get Users is running from app.js"),g.a.get("/users").then(function(e){console.log("Get Users response"),console.log(e.data),a.setState({allUsers:e.data}),console.log(a.state.allUsers)})},a.showVault=function(e){console.log("USER IN APP.JS ",e),g.a.post("/owner/secrets",{owner:e}).then(function(e){a.setState({secrets:e.data})})},a.hideContent=function(){console.log("hiding content"),document.getElementById("main-body").style.display="none"},a.state={loginName:"",isLoggedIn:!1,firstLogin:!0,isAdmin:!1,user:{},show:!1,secrets:[],username:"",allUsers:[]},a.onLogin=a.onLogin.bind(Object(h.a)(Object(h.a)(a))),a.showModal=a.showModal.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"onLogin",value:function(e){this.setState({isLoggedIn:!0,username:e.username,firstLogin:e.firstLogin,isAdmin:e.isAdmin}),console.log(this.state)}},{key:"render",value:function(){var e;return this.state.isLoggedIn&&this.state.firstLogin?e=s.a.createElement(L,{path:"/",username:this.state.username}):this.state.isLoggedIn&&!this.state.firstLogin?e=s.a.createElement(O,{path:"/",showModal:this.showModal,hideContent:this.hideContent,showVault:this.showVault,secrets:this.state.secrets,owner:this.state.username}):!this.state.isLoggedIn&&this.state.firstLogin&&(e=s.a.createElement(y,{path:"/",onLogin:this.onLogin})),s.a.createElement("div",{className:"App"},s.a.createElement(k.Animation,{type:"bounceInDown"},s.a.createElement(N,{show:this.state.show,handleClose:this.hideModal,hideContent:this.hideContent,username:this.state.username,togglePassword:this.showhidepassword,handleAdd:this.vaultAdd,showVault:this.showVault,owner:this.state.username})),s.a.createElement(b.a,null,s.a.createElement(j,{path:"/secrets",showModal:this.showModal,showVault:this.showVault,secrets:this.state.secrets}),s.a.createElement(P,{path:"/administration",showModal:this.showModal,getUsers:this.getUsers,allUsers:this.state.allUsers,secrets:this.state.secrets,showVault:this.showVault,hideContent:this.hideContent}),s.a.createElement(L,{path:"/password",username:this.state.username}),s.a.createElement(O,{path:"/home",secrets:this.state.secrets,showVault:this.showVault,showModal:this.showModal,hideContent:this.hideContent}),e))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){},44:function(e,t,a){e.exports=a(111)},49:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.5341756d.chunk.js.map