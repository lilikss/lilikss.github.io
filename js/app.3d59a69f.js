(function(t){function a(a){for(var s,i,l=a[0],o=a[1],c=a[2],u=0,d=[];u<l.length;u++)i=l[u],n[i]&&d.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==n[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},n={app:0},r=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cb47a477"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={about:1};i[t]?a.push(i[t]):0!==i[t]&&e[t]&&a.push(i[t]=new Promise(function(a,e){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"086c7c12"}[t]+".css",i=o.p+s,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var l=n[r],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===s||c===i))return a()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],c=l.getAttribute("data-href");if(c===s||c===i)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var s=a&&a.target&&a.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.request=s,e(n)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){i[t]=0}));var s=n[t];if(0!==s)if(s)a.push(s[2]);else{var r=new Promise(function(a,e){s=n[t]=[a,e]});a.push(s[2]=r);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t),c=function(a){d.onerror=d.onload=null,clearTimeout(m);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,e[1](r)}n[t]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var m=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0186":function(t,a,e){"use strict";var s=e("4d4b"),i=e.n(s);i.a},"034f":function(t,a,e){"use strict";var s=e("c21b"),i=e.n(s);i.a},"06c2":function(t,a,e){t.exports=e.p+"img/hp.3181ef94.png"},"0a58":function(t,a,e){"use strict";var s=e("bcc4"),i=e.n(s);i.a},"20b6":function(t,a,e){},"4d4b":function(t,a,e){},"4ff2":function(t,a,e){"use strict";var s=e("ad74"),i=e.n(s);i.a},"534f":function(t,a){t.exports="data:image/png;base64,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"},"56d1":function(t,a,e){"use strict";var s=e("20b6"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(e("034f"),e("2877")),l={},o=Object(r["a"])(l,i,n,!1,null,null,null);o.options.__file="App.vue";var c=o.exports,u=e("8c4f"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"body1"},[e("div",{staticClass:"home"},[e("navigasi"),t._m(0)],1),e("alur",{attrs:{id:"alur"}}),t._m(1),t._m(2)],1)},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row",staticStyle:{"padding-top":"57px","padding-left":"80px"}},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"container"},[s("div",{staticClass:"deskripsi"},[s("h2",{staticClass:"font-weight-bold"},[t._v("Apa itu RelaOne ?")]),s("br"),s("p",[s("b",{staticClass:"font-weight-bold"},[t._v("RelaOne")]),t._v(" merupakan sebuah aplikasi yang dapat memudahkan untuk menemukan kegiatan sukarelawan yang paling sesuai dengan minat dan kemampuan calon relawan.")]),s("br"),s("p",[s("b",{staticClass:"font-weight-bold"},[t._v("RelaOne for Organization")]),t._v(" adalah layanan bagi komunitas kerelawanan untuk memudahkan pencarian relawan yang paling dibutuhkan saat ini.")])]),s("br"),s("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[s("a",{attrs:{href:""}},[t._v("DAPATKAN DIPLAYSTORE")])])])]),s("div",{staticClass:"col-sm-6",staticStyle:{"padding-left":"90px"}},[s("img",{staticClass:"gambar1",attrs:{alt:"Vue logo",src:e("06c2")}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pendapat",attrs:{id:"pendapat"}},[s("div",{staticClass:"testimoni"},[s("h2",[s("b",{staticClass:"font-weight-bold"},[t._v("Testimoni")])])]),s("div",{staticClass:"container mt-3",staticStyle:{"padding-top":"90px"}},[s("div",{staticClass:"media border p-3"},[s("img",{staticClass:"mr-3 mt-3 rounded-circle",staticStyle:{width:"150px"},attrs:{src:e("be18")}}),s("div",{staticClass:"media-body"},[s("h3",{staticClass:"font-weight-bold"},[t._v("Lilik Setiyaningsih")]),s("p",[t._v("Aktivis relawan")]),s("br"),s("p",[t._v('"Sebagai aktivis di salah satu komunitas kebencanaan, saya merasa sangat terbantu dengan adanya aplikasi '),s("b",{staticClass:"font-weight-bold"},[t._v("RelaOne")]),t._v('. Kami dapat dengan mudah melakukan seleksi dan perekrutan calon relawan sesuai dengan kualifikasinya."')])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("div",{staticClass:"last",attrs:{id:"last"}},[e("div",{staticClass:"kontak",staticStyle:{width:"100%","padding-top":"30px"}},[e("h2",{staticClass:"font-weight-bold",staticStyle:{width:"30%","padding-bottom":"60px","font-size":"35px","text-align":"center"}},[t._v("Hubungi Kami")]),e("form",{attrs:{action:"/action_page.php"}},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",staticStyle:{width:"50%","padding-bottom":"10px"},attrs:{type:"email",name:"",rows:"5",id:"comment",name:"text",placeholder:"Masukan alamat e-mail anda.."}}),e("br"),e("textarea",{staticClass:"form-control",attrs:{rows:"5",id:"comment",name:"text",placeholder:"Tulis pesan anda.."}})]),e("button",{staticClass:"btn btn-warning",staticStyle:{width:"10%","align-items":"center"},attrs:{type:"submit"}},[t._v("Kirim")])])])])])}],f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-inverse"},[e("div",{staticClass:"container-fluid"},[t._m(0),e("ul",{staticClass:"nav navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Beranda")])],1),t._v("   \r\n      "),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:0},expression:"{ duration: 1000, offset: 0 }"}],attrs:{href:"#alur"}},[t._v("Cara Kerja")])]),t._v("   \r\n      "),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:0},expression:"{ duration: 1000, offset: 0 }"}],attrs:{href:"#pendapat"}},[t._v("Testimoni")])]),t._v("   \r\n      "),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:0},expression:"{ duration: 1000, offset: 0 }"}],attrs:{href:"#last"}},[t._v("Hubungi Kami")])]),t._v("   \r\n      "),e("li",{staticClass:"nav-item"},[e("router-link",{staticStyle:{width:"80px"},attrs:{to:"/login1"}},[t._v("Daftar Sekarang!")])],1),t._v("   \r\n      "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"btn btn-warning",staticStyle:{"margin-top":"-10px"},attrs:{button:"",type:"button",to:"/login"}},[e("b",[t._v("Login")])])],1)])])])},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navbar-header"},[s("img",{staticClass:"gambar2",attrs:{alt:"Vue logo",src:e("534f")}})])}],v=(e("56d1"),{}),g=Object(r["a"])(v,f,p,!1,null,"9211aff8",null);g.options.__file="Navigasi.vue";var b=g.exports,h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-carousel",{attrs:{id:"carousel1",controls:"",indicators:"",background:"#F9F2FA",interval:4e3,"img-width":"1024","img-height":"400"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},[s("div",{staticClass:"carausal-caption"},[s("b-carousel-slide",{staticClass:"tahap1",attrs:{caption:"","img-blank":"","img-alt":"Blank image"}},[s("div",[s("h3",[t._v("Bagaimana RelaOne Bekerja ? ")])]),s("div",{staticClass:"alur",attrs:{id:"alur"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mr-3",staticStyle:{width:"60px"},attrs:{src:e("7d7e")}}),s("div",{staticClass:"media-body"},[s("h4",[t._v("1. Daftar")]),s("br"),s("p",[t._v("Bergabung bersama "),s("b",[t._v("RelaOne")]),t._v(" untuk menjadi bagian dari kegiatan sukarelawan. "),s("a",{attrs:{href:"#"}},[t._v("Daftar Disini")])])])])]),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mr-3",staticStyle:{width:"60px"},attrs:{src:e("7d7e")}}),s("div",{staticClass:"media-body"},[s("h4",[t._v("3. Cari Kegiatan")]),s("br"),s("p",[s("b",[t._v("RelaOne")]),t._v(" akan memberikan rekomendasi kegiatan yang paling sesuai dengan profil kamu. Belum puas? kamu bisa cari sendiri "),s("a",{attrs:{href:"#"}},[t._v("Kegiatannya")]),t._v("!")])])])]),s("br")])])]),s("b-carousel-slide",{staticClass:"tahap1",attrs:{caption:"","img-blank":"","img-alt":"Blank image"}},[s("div",[s("h3",[s("b",[t._v("Bagaimana RelaOne Bekerja ? ")])])]),s("div",{staticClass:"alur",attrs:{id:"alur"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mr-3",staticStyle:{width:"60px"},attrs:{src:e("7d7e")}}),s("div",{staticClass:"media-body"},[s("h4",[t._v("1. Daftar")]),s("br"),s("p",[t._v("Bergabung bersama "),s("b",[t._v("RelaOne")]),t._v(" untuk menjadi bagian dari kegiatan sukarelawan. "),s("a",{attrs:{href:"#"}},[t._v("Daftar Disini")])])])])]),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"media"},[s("img",{staticClass:"align-self-start mr-3",staticStyle:{width:"60px"},attrs:{src:e("7d7e")}}),s("div",{staticClass:"media-body"},[s("h4",[t._v("3. Cari Kegiatan")]),s("br"),s("p",[s("b",[t._v("RelaOne")]),t._v(" akan memberikan rekomendasi kegiatan yang paling sesuai dengan profil kamu. Belum puas? kamu bisa cari sendiri "),s("a",{attrs:{href:"#"}},[t._v("Kegiatannya")]),t._v("!")])])])]),s("br")])])]),s("b-carousel-slide",[s("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})])],1)]),s("p",{staticClass:"mt-4"},[t._v("\r\n      Slide #: "+t._s(t.slide)+"\r\n      Sliding: "+t._s(t.sliding)+"\r\n    ")])],1)},A=[],y={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},C=y,S=(e("0a58"),Object(r["a"])(C,h,A,!1,null,"74325cf4",null));S.options.__file="Alur.vue";var w=S.exports,x={components:{navigasi:b,alur:w}},O=x,k=(e("0186"),Object(r["a"])(O,d,m,!1,null,"22726d72",null));k.options.__file="Home.vue";var E=k.exports,Y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("BODY",[s("div",{staticClass:"bground"},[s("img",{staticClass:"mx-auto d-block",staticStyle:{width:"20%","padding-top":"30px"},attrs:{alt:"Vue logo",src:e("f431")}}),s("div",[s("div",{staticClass:"row",staticStyle:{"padding-top":"30px"}},[s("div",{staticClass:"col-sm-6",staticStyle:{"padding-top":"50px"}},[s("img",{staticClass:"gambar",staticStyle:{float:"right"},attrs:{alt:"Vue logo",src:e("e429")}})]),s("div",{staticClass:"col-sm-6",staticStyle:{float:"left"}},[s("form",{on:{submit:t.login}},[s("div",{staticClass:"font-weight-bold",staticStyle:{"font-size":"40px","padding-left":"10px"}},[s("h2",[t._v("Login")])]),s("div",{staticClass:"container"},[s("label",{attrs:{for:"uname"}},[s("b",[t._v("E-mail")])]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"masukan E-mail",name:"uname",required:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),s("label",{attrs:{for:"uname"}},[s("b",[t._v("Password")])]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",required:""},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),"success"==t.status?s("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v("\n                            Success !\n                        ")]):t._e(),"error"==t.status?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n                            Failed !\n                        ")]):t._e(),s("button",{staticClass:"btn btn-info",staticStyle:{width:"100px",float:"right"},attrs:{type:"submit"}},[t._v("Login")]),s("span",{staticClass:"psw",staticStyle:{float:"left"}},[t._v("Lupa "),s("a",{attrs:{href:"#"}},[t._v("kata sandi?")])])])])])])])])])},D=[],L=e("bc3a"),Q=e.n(L),B={login:function(t,a){return Q.a.post("https://relaone-api.herokuapp.com/auth/login",{email:t,password:a}).then(function(t){return t.data})}},I={name:"login",data:function(){return{email:"",password:"",status:""}},methods:{login:function(t){var a=this;t.preventDefault(),console.log("hello");var e=this.email,s=this.password;console.log(e,s),B.login(e,s).then(function(t){"success"==t.status?a.status="success":a.status="error"})}}},R=I,H=(e("4ff2"),Object(r["a"])(R,Y,D,!1,null,"4237f19f",null));H.options.__file="Login.vue";var P=H.exports;s["a"].use(u["a"]);var z=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E},{path:"/login1",name:"login1",component:function(){return e.e("about").then(e.bind(null,"0440"))}},{path:"/login",name:"daftar_sekarang!",component:P}]}),G=e("9f7b"),T=e("5a58"),K=e.n(T),X=e("d577"),M=e.n(X);e("f9e3"),e("2dd8");s["a"].use(K.a),s["a"].use(M.a),s["a"].use(G["a"]),s["a"].config.productionTip=!1,new s["a"]({router:z,render:function(t){return t(c)}}).$mount("#app")},"7d7e":function(t,a){t.exports="data:image/png;base64,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"},ad74:function(t,a,e){},bcc4:function(t,a,e){},be18:function(t,a,e){t.exports=e.p+"img/lilik_s1si.9d661121.jpg"},c21b:function(t,a,e){},e429:function(t,a,e){t.exports=e.p+"img/image.eaffb4f3.png"},f431:function(t,a,e){t.exports=e.p+"img/logopng.bcb5e5d4.png"}});
//# sourceMappingURL=app.3d59a69f.js.map