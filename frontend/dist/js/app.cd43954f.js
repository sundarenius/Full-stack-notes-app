(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({home:"home",login:"login"}[e]||e)+"."+{home:"1efad2d3",login:"9c494137"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({home:"home",login:"login"}[e]||e)+"."+{home:"ebc06288",login:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0b71":function(e,t,n){},"4e8b":function(e,t){t.dynamicSort=function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(n,r){var o=n[e]<r[e]?-1:n[e]>r[e]?1:0;return o*t}}},"4ed9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",{staticClass:"toolbar-title center-text"},[n("div",[e._v(" Login to your notes ")])])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"}}),n("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1),n("div",{staticClass:"signup-text"},[e._v(" Dont have an account? "),n("span",{staticClass:"primary--text"},[e._v("Sign up here")])])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.loginMethod}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},o=[],a=n("d4ec"),i=n("bee2"),s=n("99de"),c=n("7e84"),l=n("262e"),u=n("9ab4"),d=n("60a3"),p=n("4bb5"),f=function(e){function t(){return Object(a["a"])(this,t),Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"loginMethod",value:function(){this.logIn()}},{key:"created",value:function(){console.log("created from loginmodal.vue")}}]),t}(d["c"]);u["a"]([Object(p["a"])("logIn")],f.prototype,"logIn",void 0),f=u["a"]([d["a"]],f);var m=f,h=m,g=(n("afd2"),n("2877")),b=n("6544"),v=n.n(b),y=n("7496"),O=n("8336"),w=n("b0af"),j=n("99d9"),k=n("62ad"),C=n("a523"),x=n("a75b"),S=n("4bd4"),N=n("0fd9"),I=n("2fa4"),P=n("8654"),A=n("71d9"),L=n("2a7f"),_=Object(g["a"])(h,r,o,!1,null,"0ced4902",null);t["a"]=_.exports;v()(_,{VApp:y["a"],VBtn:O["a"],VCard:w["a"],VCardActions:j["a"],VCardText:j["b"],VCol:k["a"],VContainer:C["a"],VContent:x["a"],VForm:S["a"],VRow:N["a"],VSpacer:I["a"],VTextField:P["a"],VToolbar:A["a"],VToolbarTitle:L["a"]})},"53c5":function(e,t,n){"use strict";var r=n("f511"),o=n.n(r);o.a},afd2:function(e,t,n){"use strict";var r=n("0b71"),o=n.n(r);o.a},b20f:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.isAuth?n("Header"):e._e(),e.isAuth?n("Sidebar"):e._e(),n("div",{class:{"main-content-style":e.isAuth}},[n("router-view")],1)],1)},a=[],i=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("d4ec"),c=n("bee2"),l=n("99de"),u=n("7e84"),d=n("262e"),p=n("9ab4"),f=n("2f62"),m=n("60a3"),h=n("4bb5"),g=n("4ed9"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"header-style",attrs:{app:"","clipped-left":"","elevate-on-scroll":""}},[n("v-autocomplete",{attrs:{items:e.searchInputResult,"solo-inverted":"",flat:"","hide-details":"",label:"Search",rounded:e.$smallScreen,"prepend-inner-icon":"mdi-magnify"},on:{change:e.searchInputChange},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),n("v-spacer"),e.$smallScreen?e._e():n("v-btn",{staticClass:"success lighten-2 secondary--text px-5",attrs:{rounded:e.$smallScreen},on:{click:e.setNewNote}},[e.$smallScreen?e._e():n("span",[e._v("New note")]),n("v-icon",{class:{"ml-1":!e.$smallScreen},attrs:{small:!e.$smallScreen}},[e._v("mdi-plus")])],1),e.$smallScreen?e._e():n("v-btn",{staticClass:"ml-3 secondary--text",attrs:{outlined:"",icon:""},on:{click:e.logOut}},[n("v-icon",{staticClass:"white--text"},[e._v("mdi-logout")])],1),e._e(),e.$smallScreen?n("v-btn",{staticClass:"ml-1",attrs:{icon:""},on:{click:e.setSidebarMethod}},[n("v-icon",[e._v("mdi-menu")])],1):e._e()],1)},v=[];n("99af"),n("caad"),n("a15b"),n("d81d"),n("ac1f"),n("2532"),n("1276");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.searchInput="",e.primaryDrawer={model:null,clipped:!1},e}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"onSearchInput",value:function(e){console.log(e)}},{key:"setSidebarMethod",value:function(){this.setSidebar()}},{key:"setNote",value:function(e){this.setCurrentNote(e),this.hideShowEditorContent(!0)}},{key:"searchInputChange",value:function(e){var t=e.split(" - "),n=this.allNotes.filter((function(e){var n=t[1].split("...");return n.pop(),e.title===t[0]&&e.text.includes(n.join(" "))}))[0];this.setNote(n),this.searchInput=""}},{key:"test",value:function(){console.log("test"),console.log(this.allCategories)}},{key:"setNewNote",value:function(){var e={id:0,title:"New note",text:"",category:"Randoms",color:"",modified:0};this.setNote(e)}},{key:"searchInputResult",get:function(){var e=this,t=this.allNotes.map((function(e){return"".concat(e.title," - ").concat(e.text.substr(0,65),"...")})).filter((function(t){return t.includes(e.searchInput)}));return t}}]),t}(m["c"]);p["a"]([Object(h["b"])("setCurrentNote")],w.prototype,"setCurrentNote",void 0),p["a"]([Object(h["b"])("showEditorContent")],w.prototype,"showEditorContent",void 0),p["a"]([Object(h["a"])("setSidebar")],w.prototype,"setSidebar",void 0),p["a"]([Object(h["a"])("hideShowEditorContent")],w.prototype,"hideShowEditorContent",void 0),p["a"]([Object(h["a"])("logOut")],w.prototype,"logOut",void 0),p["a"]([Object(m["d"])("searchInput")],w.prototype,"onSearchInput",null),w=p["a"]([Object(m["a"])({name:"Header",computed:O({},Object(f["e"])({allCategories:function(e){var t=e.context;return t.allCategories},allNotes:function(e){var t=e.context;return t.allNotes}}))})],w);var j=w,k=j,C=(n("53c5"),n("2877")),x=n("6544"),S=n.n(x),N=n("40dc"),I=n("c6a6"),P=n("8336"),A=n("132d"),L=n("2fa4"),_=Object(C["a"])(k,b,v,!1,null,null,null),E=_.exports;S()(_,{VAppBar:N["a"],VAutocomplete:I["a"],VBtn:P["a"],VIcon:A["a"],VSpacer:L["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"sidebar-width",attrs:{"mini-variant":!1,permanent:!e.$smallScreen,temporary:e.$smallScreen,app:"",fixed:"",floating:""},model:{value:e.sidebar,callback:function(t){e.sidebar=t},expression:"sidebar"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" Notes app ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-btn",{staticClass:"transparent my-2",attrs:{depressed:"",block:""},on:{click:e.setNewNote}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{staticStyle:{"margin-top":"-6px","margin-left":"-15px"},attrs:{medium:""}},[e._v("mdi-plus")])],1),n("v-list-item-content",{staticStyle:{"margin-left":"-60px","margin-top":"-4px"}},[n("v-list-item-title",[e._v("New note")])],1)],1)],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},e._l(e.getNavigationItems,(function(t){var r,o;return n("v-list-item",{key:t.id,class:{"active-category":e.isActive(t.category)},attrs:{link:""},on:{click:function(n){return e.setActiveCategoryMethod(t.category)}}},[n("v-list-item-icon",[n("v-icon",{class:(r={},r[e.textColor(t.color)]=!0,r)},[e._v(e._s(t.icon))])],1),n("v-list-item-content",{staticStyle:{"margin-left":"-15px"}},[n("v-list-item-title",{class:(o={},o[e.textColor(t.color)]=!0,o)},[e._v(e._s(t.category)+" ( "+e._s(t.total)+" )")])],1)],1)})),1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-btn",{staticClass:"transparent",attrs:{depressed:"",block:""},on:{click:e.logOut}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{staticStyle:{"margin-top":"-5px","margin-left":"-15px"},attrs:{medium:""}},[e._v("mdi-account")])],1),n("v-list-item-content",{staticStyle:{"margin-left":"-70px"}},[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],1)},V=[];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){function t(){return Object(s["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"setNote",value:function(e){this.setCurrentNote(e),this.hideShowEditorContent(!0)}},{key:"setNewNote",value:function(){var e={id:0,title:"New note",text:"",category:"Randoms",color:"",modified:0};this.setNote(e)}},{key:"setActiveCategoryMethod",value:function(e){this.hideShowEditorContent(!1),this.setActiveCategory(e)}},{key:"textColor",value:function(e){var t=e&&e.split(" ")[0];return"".concat(t,"--text text--lighten-2")}},{key:"isActive",value:function(e){return e===this.currentCategory}},{key:"sidebar",get:function(){return this.sidebarState},set:function(e){this.setSidebar()}},{key:"getNavigationItems",get:function(){return this.allCategories||[]}}]),t}(m["c"]);p["a"]([Object(h["b"])("setCurrentNote")],T.prototype,"setCurrentNote",void 0),p["a"]([Object(h["b"])("setActiveCategory")],T.prototype,"setActiveCategory",void 0),p["a"]([Object(h["b"])("setSidebar")],T.prototype,"setSidebar",void 0),p["a"]([Object(h["a"])("hideShowEditorContent")],T.prototype,"hideShowEditorContent",void 0),p["a"]([Object(h["a"])("logOut")],T.prototype,"logOut",void 0),T=p["a"]([Object(m["a"])({name:"Sidebar",computed:$({},Object(f["e"])({allCategories:function(e){var t=e.context;return t.allCategories},currentCategory:function(e){var t=e.context;return t.currentCategory},sidebarState:function(e){var t=e.context;return t.sidebar}}))})],T);var R=T,B=R,H=n("ce7e"),F=n("8860"),q=n("da13"),J=n("5d23"),U=n("34c3"),W=n("f774"),K=Object(C["a"])(B,D,V,!1,null,"139e4966",null),X=K.exports;S()(K,{VBtn:P["a"],VDivider:H["a"],VIcon:A["a"],VList:F["a"],VListItem:q["a"],VListItemContent:J["a"],VListItemIcon:U["a"],VListItemTitle:J["b"],VNavigationDrawer:W["a"]});n("fb6a"),n("4e827");var z=n("2909"),G=n("4e8b");function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,n={};switch(e){case"default":n["--sidebar-width"]="180px",n["--editor-height"]=t||"80vh";break;default:break}var r=document.querySelector("head"),o=document.createElement("style");o.id="css-theme-vars";var a="";for(var i in n)i&&(a="".concat(a).concat(i,":").concat(n[i],";"));return o.innerHTML="\n   :root {\n     ".concat(a,"\n   }\n  "),r&&r.appendChild(o)},ee=function(e){var t=[{category:"All",id:"x1",total:0,icon:"mdi-view-dashboard"},{category:"Randoms",id:"x2",total:0,icon:"mdi-tag-outline"}];e.forEach((function(e){t.push(Y({},e,{icon:"mdi-tag-outline"}))}));var n=[],r=t.filter((function(e){if(e.total=t.filter((function(t){return t.category===e.category})).length,"All"===e.category&&(e.total=t.length-1),"Randoms"===e.category&&(e.total=e.total-1),!n.includes(e.category))return n.push(e.category),e})),o=Object(z["a"])(r.slice(0,2)),a=Object(z["a"])(r.slice(2)).sort(Object(G["dynamicSort"])("category"));return[].concat(Object(z["a"])(o),Object(z["a"])(a))};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(e){function t(){return Object(s["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){console.log("created from app.vue"),Z(void 0,void 0),this.setInitialData(),this.$vuetify.theme.dark=!0}}]),t}(m["c"]);p["a"]([Object(h["a"])("setInitialData")],re.prototype,"setInitialData",void 0),re=p["a"]([Object(m["a"])({components:{LoginModal:g["a"],Header:E,Sidebar:X},computed:ne({},Object(f["e"])({isAuth:function(e){var t=e.context;return t.isAuth}}))})],re);var oe=re,ae=oe,ie=n("7496"),se=Object(C["a"])(ae,o,a,!1,null,null,null),ce=se.exports;S()(se,{VApp:ie["a"]});n("d3b7");var le=n("8c4f"),ue=function(){return n.e("home").then(n.bind(null,"bc13"))},de=function(){return n.e("login").then(n.bind(null,"013f"))};r["a"].use(le["a"]);var pe=[{path:"/",name:"home",component:ue},{path:"/login",name:"Login",component:de}],fe=new le["a"]({mode:"history",base:"/",routes:pe}),me=fe,he={isAuth:!0,currentCategory:"All",sidebar:!1,currentNote:{id:0,title:"New note",text:"",category:"Randoms",color:"",modified:0},allNotes:[],allCategories:[],colors:["red lighten-1","purple lighten-2","cyan lighten-1","blue ligten-2","indigo lighten-1","teal lighten-1","lime"],showEditorContent:!0},ge=he,be=(n("7db0"),n("96cf"),n("1da1")),ve=[{id:1,title:"Note 1",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",category:"Category 1",modified:1576281775544,color:"red lighten-1"},{id:2,title:"Note 2",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",category:"Category 2",modified:1576281827655,color:"purple lighten-1"},{id:3,title:"Note 3",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",category:"Category 3",modified:1576281835646,color:"teal lighten-1"},{id:4,title:"Note 4",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",category:"Category 1",modified:1576281846942,color:"red lighten-1"},{id:5,title:"Note 5",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",category:"Category 3",modified:1576281853990,color:"teal lighten-1"}],ye=ve,Oe=n("c64e"),we=n.n(Oe),je=n("bc3a"),ke=n.n(je),Ce=ke.a.create({baseURL:"http://localhost:3000/api",timeout:1e3,headers:{"X-Custom-Header":"foobar"}}),xe=Ce,Se=function(){var e=Object(be["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,xe.get("/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pe={setAllNotes:function(e,t){e.allNotes=t},setCategories:function(e,t){e.allCategories=t},setActiveCategory:function(e,t){e.currentCategory=t},setCurrentNote:function(e,t){e.currentNote=t},showEditorContent:function(e,t){e.showEditorContent=t},logOut:function(e){e.isAuth=!1},logIn:function(e){e.isAuth=!0},setSidebar:function(e,t){e.sidebar=t}},Ae={setSidebar:function(e){var t=e.commit,n=e.state,r=!n.sidebar;t("setSidebar",r)},logOut:function(e){var t=e.commit;t("logOut")},logIn:function(e){var t=e.commit;t("logIn")},setInitialData:function(){var e=Object(be["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,console.log("setInitialData action"),e.next=4,Se();case 4:r=e.sent,console.log(r),o=r||ye,n("setAllNotes",o),n("setCategories",ee(o));case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),updateAllData:function(){var e=Object(be["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,console.log("updateAllData action"),r("setAllNotes",n),r("setCategories",ee(n));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),mergeNotesWithCurrentNote:function(e){var t=e.state,n=e.dispatch,r=t.allNotes.filter((function(e){return e.id!==t.currentNote.id}));r.push(t.currentNote),n("updateAllData",r)},updateCurrentNote:function(e,t){var n=e.state,r=e.commit,o=e.dispatch,a=Ie({},n.currentNote,{},t);if(0===a.id&&(a.id=we()()),!a.color){var i=n.allNotes.find((function(e){return e.category===a.category}));a.color=i&&i.color||"primary lighten-1"}a.modified=(new Date).getTime(),r("setCurrentNote",a),o("mergeNotesWithCurrentNote")},setCategoryColors:function(e,t){var n=e.state,r=e.dispatch,o=n.allNotes.map((function(e){return e.category===t.category&&(e.color=t.color),e}));r("updateAllData",o)},hideShowEditorContent:function(e,t){var n=e.commit,r=t?"80vh":"10vh";Z(void 0,r),n("showEditorContent",t)}},Le={mutations:Pe,actions:Ae};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=Ee({state:ge},Le);r["a"].use(f["a"]);var Ve=new f["a"].Store({modules:{context:De}}),Me=n("9483");Object(Me["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var $e=n("f309");r["a"].use($e["a"]);var Te=new $e["a"]({}),Re=(n("b20f"),function(e){return{computed:{$smallScreen:function(){return e.framework.breakpoint.smAndDown}}}});r["a"].mixin(Re(Te)),r["a"].config.productionTip=!1,new r["a"]({router:me,store:Ve,vuetify:Te,render:function(e){return e(ce)}}).$mount("#app")},f511:function(e,t,n){}});
//# sourceMappingURL=app.cd43954f.js.map