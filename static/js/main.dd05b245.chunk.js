(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[0],{102:function(e,t,a){e.exports=a(131)},107:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(107),a(13)),s=a(14),l=a(16),d=a(15),u=a(92),p=a(60),m=a.n(p),h=a(20),v=a(61),f=a.n(v),b=a(65),_=a(93),E=a(82),g=a(24),O=a(46),S=a.n(O),D=a(36),j=a.n(D),w=a(37),y=a.n(w),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.header?y.a.header:y.a.row},r.a.createElement("div",{className:y.a.district},this.props.dist.name),r.a.createElement("div",{className:y.a.data},this.props.dist.confirmed),r.a.createElement("div",{className:y.a.data},this.props.dist.recovered),r.a.createElement("div",{className:y.a.data},this.props.dist.deceased),r.a.createElement("div",{className:y.a.data},this.props.dist.active))}}]),a}(n.Component),k=a(22),A=a(175),C=a(182),x=a(181),T=a(83),R=a.n(T),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{id:"combo-box-demo",options:this.props.options,blurOnSelect:!0,getOptionLabel:function(e){return e},onChange:function(t,a){return e.props.onChange(a)},renderOption:function(e){return r.a.createElement("div",null,e)},renderInput:function(t){return r.a.createElement(x.a,Object.assign({className:R.a.input},t,{label:e.props.label}))}})}}]),a}(n.Component),L=function(e){return{type:"SET_SHOW_DIALOG",payload:{showDialog:e}}},W=a(32);function I(e,t,a,n,r){return{name:e,active:t,confirmed:a,deceased:n,recovered:r}}var H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={allStates:[],covidState:[],loading:!1},e.districtData={},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState(Object(g.a)({},this.state,{loading:!0})),this.getDistrictWiseData()}},{key:"getDistrictWiseData",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a,n,r,i,o,c,s,l=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([S.a.get(k.api.getDistrictWiseData)]);case 3:for(c in t=e.sent,a=Object(_.a)(t,1),n=a[0],S.a.get(k.api.getDistrictWiseData),r=Object.keys(n.data),this.setState(Object(g.a)({},this.state,{allStates:r})),this.districtData=Object(g.a)({},n.data),i=n.data.Karnataka.districtData,o=[],i)s=i[c],o.push(I(c,s.active,s.confirmed,s.deceased,s.recovered));setTimeout((function(){l.setState(Object(g.a)({},l.state,{covidState:Object(b.a)(o.sort((function(e,t){return t.confirmed-e.confirmed}))),loading:!1}))}),1e3),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.props.history.push("/error");case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"onStateSelection",value:function(e){var t=this;if(this.setState(Object(g.a)({},this.state,{loading:!0})),e&&this.districtData&&this.districtData[e]){this.props.setSelectedState(e);var a=this.districtData[e].districtData,n=[];for(var r in a){var i=a[r];n.push(I(r,i.active,i.confirmed,i.deceased,i.recovered))}setTimeout((function(){t.setState(Object(g.a)({},t.state,{covidState:Object(b.a)(n.sort((function(e,t){return t.confirmed-e.confirmed}))),loading:!1}))}),1e3)}}},{key:"render",value:function(){var e=this,t=this.state.covidState.map((function(e,t){return r.a.createElement(N,{dist:e,key:t})})),a="";return this.state.loading&&(a=r.a.createElement(A.a,null)),r.a.createElement("div",{className:j.a.main},r.a.createElement("div",{className:j.a.searchBar},r.a.createElement(B,{label:"Select state",options:this.state.allStates,onChange:function(t){return e.onStateSelection(t)}})),r.a.createElement(N,{header:"true",dist:{name:"District",confirmed:"T",recovered:"R",deceased:"D",active:"A"}}),a,t,r.a.createElement("div",{className:j.a.bulletsSection},r.a.createElement("div",{className:j.a.bullets},"T - Total"),r.a.createElement("div",{className:j.a.bullets},"R - Recovered"),r.a.createElement("div",{className:j.a.bullets},"D - Deceased"),r.a.createElement("div",{className:j.a.bullets},"A - Active")))}}]),a}(n.Component),J=Object(W.b)(null,(function(e){return{setSelectedState:function(t){return e({type:"SET_SELECTED_STATE",payload:{state:t}})}}}))(H),U=a(57),G=a.n(U),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.section},r.a.createElement("div",{className:G.a.errorCode},"Oops!"),r.a.createElement("div",null,r.a.createElement("span",{className:G.a.errorDescription},"Something went wrong. Please try again later")))}}]),a}(n.Component),z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:J}),r.a.createElement(h.a,{path:"/covid19india",exact:!0,component:J}),r.a.createElement(h.a,{path:"/error",component:P}),r.a.createElement(h.a,{component:J}))}}]),a}(n.Component),M=a(94),K=a(48),q=a.n(K),F=a(91),X=a.n(F),V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",{className:q.a.root},r.a.createElement("img",{onClick:function(){return e.props.setShowDialog(!e.props.showDialog)},className:q.a.img,alt:"Covid logo",src:X.a}),r.a.createElement(M.a,{variant:"h6",className:q.a.title},k.header,r.a.createElement("div",{className:q.a.state},this.props.selectedState))))}}]),a}(n.Component),Q=Object(W.b)((function(e){return{selectedState:e.covidReducer.selectedState,showDialog:e.covidReducer.showDialog}}),(function(e){return{setShowDialog:function(t){return e(L(t))}}}))(V),Z=a(180),$=a(184),Y=a(179),ee=a(177),te=a(178),ae=a(176),ne=a(26),re=a.n(ne),ie=function(e){var t=new Intl.NumberFormat("en-IN");return isNaN(e)?"-":t.format(e)},oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:{active:"",confirmed:"",deaths:"",deltaconfirmed:"",deltadeaths:"",deltarecovered:"",lastupdatedtime:"",recovered:""}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get(k.api.getAllData).then((function(t){var a=t.data.statewise[0];e.setState(Object(g.a)({},e.state,{data:a})),e.props.setShowDialog(!0)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement($.a,{open:this.props.isDialogOpen,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(ae.a,{id:"alert-dialog-title"},"Cases across India"),r.a.createElement(ee.a,null,r.a.createElement(te.a,{id:"alert-dialog-description"},r.a.createElement("span",{className:re.a.label},"Active: ",r.a.createElement("span",{className:re.a.count},ie(this.state.data.active)," "),r.a.createElement("br",null)),r.a.createElement("span",{className:re.a.label},"Confirmed:",r.a.createElement("span",{className:re.a.count},ie(this.state.data.confirmed)+" ",r.a.createElement("span",{className:re.a.delta},"(+",ie(this.state.data.deltaconfirmed),")")),r.a.createElement("br",null)),r.a.createElement("span",{className:re.a.label},"Recovered:",r.a.createElement("span",{className:re.a.count},ie(this.state.data.recovered)+" ",r.a.createElement("span",{className:re.a.deltaGreen},"(+",ie(this.state.data.deltarecovered),")")),r.a.createElement("br",null)),r.a.createElement("span",{className:re.a.label},"Deaths:",r.a.createElement("span",{className:re.a.count},ie(this.state.data.deaths)+" ",r.a.createElement("span",{className:re.a.delta},"(+",ie(this.state.data.deltadeaths),")"),r.a.createElement("br",null))))),r.a.createElement(Y.a,null,r.a.createElement(Z.a,{onClick:function(){return e.props.setShowDialog(!e.props.isDialogOpen)},color:"primary",autoFocus:!0},"Close"))))}}]),a}(n.Component),ce=Object(W.b)((function(e){return{isDialogOpen:e.covidReducer.showDialog}}),(function(e){return{setShowDialog:function(t){return e(L(t))}}}))(oe),se=a(58),le=a.n(se),de=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:le.a.loader},r.a.createElement("div",{className:le.a.text1},k.stayHome,r.a.createElement("div",{className:le.a.text2},k.staySafe)),r.a.createElement("p",null,"\xa9 No rights",r.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude0a")))}}]),a}(n.Component),ue=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoaderOn:!0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return setTimeout((function(){e.setState({isLoaderOn:!1})}),6e3),r.a.createElement(u.a,null,r.a.createElement("div",null,this.state.isLoaderOn&&r.a.createElement(de,null),!this.state.isLoaderOn&&r.a.createElement("div",{className:m.a.main},r.a.createElement(Q,null),r.a.createElement(ce,null),r.a.createElement(z,null),r.a.createElement("p",{className:m.a.footer},k.stayHome+" "+k.staySafe))))}}]),a}(n.Component),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var he=a(44),ve={selectedState:"Karnataka",showDialog:!1};var fe=Object(he.b)({covidReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"SET_SELECTED_STATE":return Object(g.a)({},e,{selectedState:a.state});case"SET_SHOW_DIALOG":return Object(g.a)({},e,{showDialog:a.showDialog})}return Object(g.a)({},e)}}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,_e=Object(he.d)(fe,be());o.a.render(r.a.createElement(W.a,{store:_e},r.a.createElement(ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid19india",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid19india","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):me(t,e)}))}}()},22:function(e){e.exports=JSON.parse('{"api":{"getDistrictWiseData":"https://api.covid19india.org/state_district_wise.json","getAllData":"https://api.covid19india.org/data.json"},"header":"COVID-19 INDIA","stayHome":"Stay Home","staySafe":"Stay Safe"}')},26:function(e,t,a){e.exports={label:"AlertDialog_label__1WPJ7",count:"AlertDialog_count__16nmn",delta:"AlertDialog_delta__1TRZz",deltaGreen:"AlertDialog_deltaGreen__UmkDu"}},36:function(e,t,a){e.exports={bullets:"CovidData_bullets__3hR0-",bulletsSection:"CovidData_bulletsSection__2xIyR",main:"CovidData_main__31Sh0",searchBar:"CovidData_searchBar__3DH4g"}},37:function(e,t,a){e.exports={row:"Row_row__1dk-s",district:"Row_district__2cmTN",data:"Row_data__21Sj0",header:"Row_header__2GAMs"}},48:function(e,t,a){e.exports={root:"AppBar_root__1wznB",menuButton:"AppBar_menuButton__2zJUl",title:"AppBar_title__wd3-_",img:"AppBar_img__1qkQd",spin:"AppBar_spin__1qo2T",state:"AppBar_state__dOKpF"}},57:function(e,t,a){e.exports={section:"Error_section__1_UNc",errorCode:"Error_errorCode__1wJX7",errorDescription:"Error_errorDescription__2KOaR"}},58:function(e,t,a){e.exports={loader:"Loader_loader__LOnBp",text1:"Loader_text1__2cdT6",text2:"Loader_text2__20t6R"}},60:function(e,t,a){e.exports={main:"App_main__czgJa",appBar:"App_appBar__kbzTd",footer:"App_footer__3kqNx",app:"App_app__26MBC"}},83:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/stats.4dc95adb.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.dd05b245.chunk.js.map